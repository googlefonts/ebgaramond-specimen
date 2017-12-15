var features = setupFeatures();
var featureCheckboxes = {};
var styleCheckboxes = {};
var spans = {};
var currentStyles = {};
var globalId = 0;

function fontPreviewElement() {
	return $('#font-preview');
}

function styleKeys() {
	return [
		'-moz-font-feature-settings',
		'-ms-font-feature-settings',
		'-o-font-feature-settings',
		'-webkit-font-feature-settings',
		'font-feature-settings',
		'font-style',
		'font-weight'
	];
}

function setupFeatures(jsonList) {
	var list = jsonList ? JSON.parse(jsonList) : [];

	function add(featureSetting) {
		if (indexOf(featureSetting) != -1) return;
		list.push({ setting: featureSetting });
	}

	function remove(featureSetting) {
		var index = indexOf(featureSetting);
		if (index == -1) return;
		list.splice(index, 1);
	}

	function indexOf(featureSetting) {
		for (var i = 0; i < size(); i++) {
			if (list[i].setting == featureSetting) return i;
		}
		return -1;
	}

	function size() {
		return list.length;
	}

	function asString() {
		var stringified = '';
		if (size() == 0) return stringified;

		list.forEach(function(feature) {
			stringified += '"' + feature.setting + '" 1, ';
		}, this);
		return trimTrailingCommaFrom(stringified);
	}

	function trimTrailingCommaFrom(string) {
		return string.replace(/,\s*$/, "");
	}

	function forEveryBrowser() {
		var singleLineFeatures = asString();

		return {
			'-moz-font-feature-settings': singleLineFeatures,
			'-ms-font-feature-settings': singleLineFeatures,
			'-o-font-feature-settings': singleLineFeatures,
			'-webkit-font-feature-settings': singleLineFeatures,
			'font-feature-settings': singleLineFeatures
		}
	}

	function stringifiedList() {
		return JSON.stringify(list);
	}

	// IE requires the duplicity
	return {
		add: add,
		remove: remove,
		size: size,
		asString: asString,
		forEveryBrowser: forEveryBrowser,
		stringifiedList: stringifiedList
	}
};

function applyFeatureStyles(settingName, activated, fontStyle) {
	if (fontPreviewElement().text().length == 0) return;

	var selectionProps = setupSelectionForFeatureAppliance();
	var selection = selectionProps.selection;
	var range = selectionProps.range;
	var startNode = $(selection.anchorNode);
	var endNode = $(selection.focusNode);

	if (fontStyle) {
		styles = fontStyle.split(';');
		var styleObject = {};
		for (var i = 0; i < styles.length; i++){
			var styleName = styles[i].split(':')[0].trim();
			var styleValue = styles[i].split(':')[1].trim();
			styleObject[styleName] =  styleValue;
		}
	}

	if (startNode.is('#font-preview')) {
		var element = $(fontPreviewElement()[0].childNodes[selection.anchorOffset - 1]);
		if (element.is('br')) startNode = element;
	}

	if (endNode.is('#font-preview') && selection.focusOffset != 0) {
		var element = $(fontPreviewElement()[0].childNodes[selection.focusOffset - 1]);
		if(element.is('br')) endNode = element;
	}

	if (startNode.is('#font-preview') && endNode.is('#font-preview')) {
		selectWholeText(selection, range);
		startNode = $(selection.anchorNode);
		endNode = $(selection.focusNode);
	}

	if (isBackwards(selection)) {
		var tempStart = startNode;
		startNode = endNode;
		endNode = tempStart;
		selection.removeAllRanges();
		selection.addRange(range);
	}

	if (startNode.parent().is('span')) {
		startNode = startNode.parent();
	}
	if (endNode.parent().is('span')) {
		endNode = endNode.parent();
	}

	var selectionStartNode = startNode;
	var selectionEndNode = endNode;

	if (!startNode.is(endNode)) {

		// Start
		if (!startNode.is('br')) {
			if (!startNode.is('span')) {
				var features = setupFeatures();
				if (settingName) {
					activated ? features.add(settingName) : features.remove(settingName);
				}
				var span = createSpanWith('', features, styleObject);

				var text = startNode.text();
				span.text(text.slice(selection.anchorOffset, startNode.text().length));
				span.insertAfter(startNode);
				startNode.replaceWith(text.slice(0, selection.anchorOffset));
				startNode = span;
				selectionStartNode = startNode;
			} else {
				var span = spans[startNode.attr('data-id')];

				if (selection.anchorOffset > 0) {
					var spanText = span.text();
					var beginningSpanText = spanText.slice(0, selection.anchorOffset);
					var middleSpanText = spanText.slice(selection.anchorOffset, spanText.length);
					var features = span.features;
					var css = span.css(styleKeys());
					if (settingName) {
						activated ? features.add(settingName) : features.remove(settingName);
					}
					var newSpan = createSpanWith(middleSpanText, features, $.extend(css, styleObject));
					newSpan.insertAfter(span);
					selectionStartNode = newSpan;
					span.text(beginningSpanText);
				} else {
					if (settingName) {
						activated ? span.features.add(settingName) : span.features.remove(settingName);
						span.css(span.features.forEveryBrowser());
					} else if (styleObject) {
						span.css(styleObject);
					}
					selectionStartNode = span;
				}
				startNode = span;
			}
		}

		startNode = $(startNode[0].nextSibling);

		// Middle
		while(!startNode.is(endNode)) {
			if (startNode.is('span')) {
				var span = spans[startNode.attr('data-id')];
				if (settingName) {
					activated ? span.features.add(settingName) : span.features.remove(settingName);
					span.css(span.features.forEveryBrowser());
				} else if (styleObject) {
					span.css(styleObject);
				}
			} else if (!startNode.is('br')) {
				var features = setupFeatures();
				if (settingName) {
					activated ? features.add(settingName) : features.remove(settingName);
				}
				var span = createSpanWith(startNode.text(), features, styleObject).insertAfter(startNode);
				startNode.remove();
				startNode = span;
			}
			startNode = $(startNode[0].nextSibling);
		}

		// End
		if (!startNode.is('br')) {
			if (!startNode.is('span')) {
				var features = setupFeatures();
				if (settingName) {
					activated ? features.add(settingName) : features.remove(settingName);
				}
				var span = createSpanWith('', features, styleObject);

				var text = startNode.text();
				span.text(text.slice(0, selection.focusOffset));
				span.insertBefore(startNode);
				startNode.replaceWith(text.slice(selection.focusOffset, text.length));
				selectionEndNode = span;
			} else {
				var span = spans[startNode.attr('data-id')];
				var spanText = span.text();

				if (selection.focusOffset < spanText.length) {
					var middleSpanText = spanText.slice(0, selection.focusOffset);
					var endSpanText = spanText.slice(selection.focusOffset, spanText.length);
					var features = span.features;
					var css = span.css(styleKeys());
					if (settingName) {
						activated ? features.add(settingName) : features.remove(settingName);
					}
					var newSpan = createSpanWith(middleSpanText, features, $.extend(css, styleObject));
					newSpan.insertBefore(span);
					selectionEndNode = newSpan;
					span.text(endSpanText);
				} else {
					if (settingName) {
						activated ? span.features.add(settingName) : span.features.remove(settingName);
						span.css(span.features.forEveryBrowser());
					} else if (styleObject) {
						span.css(styleObject);
					}
					selectionEndNode = span;
				}
			}
		}

		fontPreviewElement()[0].normalize();
		if (!selectionStartNode.is('br')) {
			range.setStart(selectionStartNode[0].childNodes[0], 0);
		}
		if (!selectionEndNode.is('br')) {
			range.setEnd(selectionEndNode[0].childNodes[0], selectionEndNode.text().length);
		}
		selection.removeAllRanges();
		selection.addRange(range);
		return;
	}

	// Whole span selected
	if (startNode.is('span') && $(range.cloneContents()).text() == startNode.text()) {
		var identifier = startNode.attr('data-id');
		var span = spans[identifier];
		if (settingName) {
			activated ? span.features.add(settingName) : span.features.remove(settingName);
			span.css(span.features.forEveryBrowser());
		} else if (styleObject) {
			span.css(styleObject);
		}

		// if (span.features.size() == 0) {
		//     span.contents().unwrap();
		//     fontPreviewElement()[0].normalize();
		// }
		fontPreviewElement()[0].normalize();
		return;
	}

	// Partial content of span selected
	var parent = $(selection.anchorNode.parentNode);
	if (parent.is('span') && parent.parent().is('#font-preview')) {
		var existingSpan = spans[parent.attr('data-id')];
		var precedingSpanText = existingSpan.text().slice(0, selection.anchorOffset);
		var followingSpanText = existingSpan.text().slice(selection.focusOffset, existingSpan.text().length);
		var middleSpanText = $(range.cloneContents()).text();
		var css = existingSpan.css(styleKeys());
		var stringifiedFeatures = existingSpan.features.stringifiedList();

		if (precedingSpanText) createSpanWith(precedingSpanText, setupFeatures(stringifiedFeatures), css).insertBefore(existingSpan);
		if (followingSpanText) createSpanWith(followingSpanText, setupFeatures(stringifiedFeatures), css).insertAfter(existingSpan);

		if (settingName) {
			activated ? existingSpan.features.add(settingName) : existingSpan.features.remove(settingName);
		}
		var span = createSpanWith(middleSpanText, existingSpan.features, $.extend(css, styleObject));
		existingSpan.replaceWith(span);

		select(span[0]);
		fontPreviewElement()[0].normalize();
		return;
	}

	// No span content selected
	var features = setupFeatures();
	if (settingName) {
		activated ? features.add(settingName) : features.remove(settingName);
	}
	var span = createSpanWith('', features, styleObject);
	range.surroundContents(span[0]);

	select(span[0]);
	fontPreviewElement()[0].normalize();
}

function setupSelectionForFeatureAppliance() {
	var selection = window.getSelection();
	if (selection.rangeCount == 0) {
		selection.addRange(document.createRange());
	}

	var range = selection.getRangeAt(0);
	if (selection.isCollapsed) {
		selectWholeText(selection, range);
	}

	return {
		selection: selection,
		range: range
	}
}

function selectWholeText(selection, range) {
	var numberOfNodes = fontPreviewElement().contents().length;
	var lastNode = fontPreviewElement()[0].childNodes[numberOfNodes - 1];
	range.setStart(fontPreviewElement()[0].childNodes[0], 0);
	if ($(lastNode).is('span')) lastNode = lastNode.childNodes[0];
	range.setEnd(lastNode, $(lastNode).text().length);
	selection.removeAllRanges();
	selection.addRange(range);
}

function isBackwards(selection) {
	var backwards = false;
	var range = document.createRange();
	range.setStart(selection.anchorNode, selection.anchorOffset);
	range.setEnd(selection.focusNode, selection.focusOffset);
	backwards = range.collapsed;
	range.detach();
	return backwards;
}

function createSpanWith(text, features, styleObject) {
	var startingFeatures = features || setupFeatures();
	var identifier = 'span_' + globalId++;
	var span = $('<span/>').attr('data-id', identifier);
	spans[identifier] = span;
	if (styleObject) span.css(styleObject);
	$.extend(span, { features: startingFeatures });
	span.text(text).css(span.features.forEveryBrowser());
	return span;
}

function select(node) {
	var selection = window.getSelection();
	var range = document.createRange();
	range.selectNodeContents(node);
	selection.removeAllRanges();
	selection.addRange(range);
}

function displayActiveStyles() {
	var selection = window.getSelection();
	if (selection.rangeCount == 0) return;

	var startElement = $(selection.anchorNode);
	var endElement = $(selection.focusNode);

	var backwards = !selection.isCollapsed && isBackwards(selection);

	if (startElement.parent().is('span')) {
		startElement = startElement.parent();
	}
	if (endElement.parent().is('span')) {
		endElement = endElement.parent();
	}

	while(!startElement.is(endElement)) {
		var previousStyles = startElement.is('span') ? startElement.attr('style') : '';
		backwards ? startElement = $(startElement[0].previousSibling) : startElement = $(startElement[0].nextSibling);
		var currentStyles = startElement.is('span') ? startElement.attr('style') : '';
		if (previousStyles != currentStyles) {
			checkActivated();
			return;
		}
	}

	if (!startElement.is('span')) {
		checkActivated();
	} else {
		checkActivated(startElement.css(styleKeys()));
	}
}

function checkActivated(styles, checkboxes) {
	styles = styles || {};
	checkboxes = checkboxes || featureCheckboxes;
	Object.keys(styleCheckboxes).forEach(function(key) {
		if (styles[key] && styles[key] == styleCheckboxes[key].appliedValue) {
			styleCheckboxes[key].prop('checked', true);
		} else {
			styleCheckboxes[key].prop('checked', false);
		}
	}, this);

	Object.keys(checkboxes).forEach(function(key) {
		if (styles[key]) {
			checkboxes[key].prop('checked', true);
		} else {
			checkboxes[key].prop('checked', false);
		}
	}, this);

	if (styles['font-weight']) {
		var fontWeight = styles['font-weight'] == '700' ? 'bold' : styles['font-weight'];
		$('#font-weights').val('font-weight: ' + fontWeight);
	} else {
		$('#font-weights').val('font-weight: 400');
	}

	if (!styles['font-feature-settings']) return;

	var fontFeatureSettings = styles['font-feature-settings'];
	var featureSettings = fontFeatureSettings.split(',');
	var settingsObject = {};
	featureSettings.forEach(function(setting) {
		var settingName = setting.match(/['"]\S*['"]/gi)[0].replace(/['"]/g, '').trim();
		// In Firefox it's -"feature" off- for deactivated and -"feature"- for activated
		// I believe there is no feature ending in 0 so this should do the trick
		var activated = setting.slice(-1) == '0' ? false : true;
		if (setting.slice(-4) == ' off') {
			activated = false;
		}
		checkboxes[settingName].prop('checked', activated);
	}, this);
}

function pasteTextOnly(event) {
	event.stopPropagation();
	event.preventDefault();

	var selection = window.getSelection();
	if (selection.rangeCount == 0) return;

	if (!selection.isCollapsed) {
		alert('La opción de pegar está desactivada si hay una selección activa');
		return;
	}

	var clipboardData = event.clipboardData || event.originalEvent.clipboardData || window.clipboardData;
	var pastedText = clipboardData.getData('Text');
	var anchorOffset = selection.anchorOffset;

	var startElement = $(selection.anchorNode);
	if (startElement.is('#font-preview')) {
		var fontPreview = fontPreviewElement();
		if (fontPreview.text().length == 0) {
			fontPreviewElement().text(pastedText);
			setTimeout(function() {
				moveCursor(selection, fontPreviewElement()[0].childNodes[0], anchorOffset + pastedText.length);
			}, 50);
			return;
		}
		var range = selection.getRangeAt(0);
		range.setStart(fontPreview[0].childNodes[0], 0);
		range.setEnd(fontPreview[0].childNodes[0], 0);
		selection.removeAllRanges();
		selection.addRange(range);
	}

	var text = startElement.text();
	var updatedText = text.slice(0, selection.anchorOffset) + pastedText + text.slice(selection.anchorOffset, text.length);
	selection.anchorNode.nodeValue = updatedText;
	fontPreviewElement()[0].normalize();

	// We need a brief timeout because in IE the cursor movement was done before the DOM was modified
	setTimeout(function() {
		moveCursor(selection, selection.anchorNode, anchorOffset + pastedText.length);
	}, 50);
}

function moveCursor(selection, node, offset) {
	var range = selection.getRangeAt(0);
	if ($(node).is('br')) {
		range.setStartAfter(node);
		range.collapse(true);
	} else {
		range.setStart(node, offset);
		range.setEnd(node, offset);
	}
	selection.removeAllRanges();
	selection.addRange(range);
}

function breakLine() {
	var selection = window.getSelection();
	if (selection.rangeCount == 0) return;

	if (!selection.isCollapsed) {
		alert('La opción de salto de línea está desactivada si hay una selección activa');
		return;
	}

	var startElement = $(selection.anchorNode);
	if (startElement.parent().is('span')) startElement = startElement.parent();
	if (startElement.is('#font-preview')) {
		var breakLine = $('<br/>');
		if (fontPreviewElement().text().length == 0) {
			fontPreviewElement().append(breakLine);
		} else {
			var element = $(fontPreviewElement()[0].childNodes[selection.anchorOffset - 1]);
			if (element.is('br')) breakLine.insertAfter(element);
			if (selection.anchorOffset == 0) fontPreviewElement().prepend(breakLine);
		}
		setTimeout(function() {
			moveCursor(selection, breakLine[0], 0);
		}, 20);
		return;
	};

	var anchorOffset = selection.anchorOffset;
	if (!startElement.is('span')) {
		var span = createSpanWith(startElement.text());
		startElement.replaceWith(span);
		startElement = span;
	}

	var span = spans[startElement.attr('data-id')];
	var breakLine = $('<br/>');
	var text = span.text();
	var spanText = text.slice(0, anchorOffset);
	if (!spanText) {
		breakLine.insertBefore(span);
		setTimeout(function() {
			moveCursor(selection, span[0], 0);
		}, 20);
	} else {
		span.text(spanText);
		breakLine.insertAfter(span);
		var nextLineSpanText = text.slice(anchorOffset, text.length);
		if (nextLineSpanText) {
			var nextLineSpan = createSpanWith(nextLineSpanText, span.features, span.css(styleKeys()));
			nextLineSpan.insertAfter(breakLine);
			setTimeout(function() {
				moveCursor(selection, nextLineSpan[0], 0);
			}, 20);
			return;
		}
		setTimeout(function() {
			moveCursor(selection, span[0].nextSibling, 0);
		}, 20);
	}
}

function initialSetup() {
	var fontPreview = $('#font-preview');
	fontPreview.designMode = 'on';

	$('.feature-checkbox').each(function(i, featureCheckbox) {
		var featureSetting = featureCheckbox.value;
		featureCheckboxes[featureSetting] = $(featureCheckbox);
	});

	$('.style-checkbox').each(function(i, styleCheckbox) {
		var styleName = styleCheckbox.value.split(':')[0].trim();
		var styleValue = styleCheckbox.value.split(':')[1].trim();
		styleCheckboxes[styleName] = $.extend($(styleCheckbox), { appliedValue: styleValue });
	});

	// Default features applied to the whole text
		$('.feature-checkbox[value="calt"]').click();
		$('.feature-checkbox[value="liga"]').click();
		$('.feature-checkbox[value="clig"]').click();

	// document.getSelection().removeAllRanges();

	fontPreview.keydown(function() {
		displayActiveStyles();
	});

	// Mouseup instead of click because Firefox doesn't detect clicks when highlighting text and we add a delay
	// because when clicking inside a highlighted text the mouseup is fired when the selection is still present
	fontPreview.on('mouseup', function() {
		setTimeout(displayActiveStyles, 50);
	});

	fontPreview.on('paste', pasteTextOnly);

	fontPreview.keypress(function(event) {
		if (event.which == 13) {
			event.stopPropagation();
			event.preventDefault();
			breakLine();
		}
	});

	return;
}
initialSetup();

function featureCheckboxClicked(checkbox) {
	checkbox.checked ? applyFeatureStyles(checkbox.value, true) : applyFeatureStyles(checkbox.value, false);
}

function styleCheckboxClicked(checkbox) {
	checkbox.checked ? applyFeatureStyles(undefined, true, checkbox.value) : applyFeatureStyles(undefined, false, checkbox.value);
}

function changeFontStyle(event) {
	applyFeatureStyles(undefined, true, event.target.value);
}

function changeFont(event) {
	fontPreviewElement().css('font-family', event.target.value);
}

function justify(value) {
	fontPreviewElement().css('text-align', value);
}

function changeLineHeight(event) {
	var value = event.target.value / 10;
	fontPreviewElement().css('line-height', value);
}

function changeFontSize(event) {
	var value = event.target.value;
	// if (value > 100) value = 100 + 10 * (value - 100);
	fontPreviewElement().css('font-size', value + 'vw');
}


// For testing purposes only

// function activateFeature(feature) {
//     features.add(feature);
// }

// function removeFeature(feature) {
//     features.remove(feature);
// }

// function currentFeatures() {
//     return features.asString();
// }

// function featuresForEveryBrowser() {
//     var singleLineFeatures = currentFeatures();

//     return {
//         '-moz-font-feature-settings': singleLineFeatures,
//         '-ms-font-feature-settings': singleLineFeatures,
//         '-o-font-feature-settings': singleLineFeatures,
//         '-webkit-font-feature-settings': singleLineFeatures,
//         'font-feature-settings': singleLineFeatures
//     }
// }

// export {
//     activateFeature,
//     removeFeature,
//     currentFeatures,
//     featuresForEveryBrowser,
//     checkActivated
// };

// export const resetFeatures = () => features = setupFeatures();
