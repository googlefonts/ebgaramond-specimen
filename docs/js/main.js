$(document).ready(function(){

	// Updating mask for the slider component
	$(".js-slider").on("input change", function() {
		$('.js-slider-mask').css({
			'clip-path': 'inset(0 0 0 ' + $(this).val() + '%)'
		});
	});
	// End Updating mask for the slider component

	//Show different scripts on hover

	// Height to parent when loading page
	$('.scripts-list').height($('.script:first-of-type').height());

	// Change script content on mouse over
	$('.js-script').on('mouseover', function(){
		var script = $(this).data('script');
		//Apply height to parent because elements are
		$('.scripts-list').height($('.script--'+ script).height());

		$('.script__option').removeClass('option--active');
		$(this).addClass('option--active');

		// Starting animation fade between scripts
		if($('.script--'+ script).hasClass('script--active') == false){
			$('.script').removeClass('script--hide').css({
				'z-index': ''
			});
			$('.script--active').css({
				'z-index': 3
			}).addClass('script--hide').removeClass('script--active');

			$('.script--' + script).addClass('script--active');
			setTimeout(function(){
				$('.script--hide').css({
					'z-index': ''
				})
			}, 1400)
		}
	});

	//End Show different scripts on hover

	// Zooming behavior
		// Initializing zoom plugin
		var $easyzoom = $('.easyzoom').easyZoom();

		// 1. Positioning sliders images at the center of the page
		// We don't use transform in css because it's create a new stacking content and break position fixed
		// 2. Applying the width to the controller
		// 3. Applying the width to the bounderies
		// var positionSliders = function(){
		// 	//1
		// 	var margin = $(window).width()/2 - $('.comparison__slider').width()/2;

		// 	$('.js-old').css({
		// 		'left': margin
		// 	});
		// 	$('.js-new').css({
		// 		'right': margin
		// 	});

		// 	// 2
		// 	$('.comparison__controller').css({
		// 		width: $('.comparison__slider').width()
		// 	})

		// 	// Marker width adapt to images width

		// 	var boundary = $('.js-slider').val() + '%';
		// 	console.log(boundary);
		// 	$('.js-bounderies').css({
		// 		left: $(window).width()/2 - $('.comparison__slider').width()/2,
		// 		'width': $('.comparison__slider').width(),
		// 	});

		// }
		// positionSliders();

		// Updating position of the elements and width of the controller
		// $(window).on('resize', function(){
		// 	positionSliders();
		// });

		// Showing overlay when mouse is over sliders

		// $('.js-old, .js-new').on('mouseover', function(){
		// 	$('.section--comparison').addClass('sliding');
		// }).on('mouseleave', function(){
		// 	$('.section--comparison').removeClass('sliding');
		// });
	// End Zooming behavior


	// Styles
	$('.js-styles li').on('mouseover', function(){

		// $('.js-letter-tester').removeClass().addClass($(this).data('style'));
		$('.js-letter-tester').attr('data-style', $(this).data('style'));
	});

	// End Styles



// Typetester scripts
	// When a user change a value for a select input update the text for the label
	$('.js-selector').on('change', function(){
		$(this).prev().text($(this).find('option:selected').text());
	});
	// End When a user change a value for a select input update the text for the label

	// Change between words and paragraph in typetester
	$('.js-text').on('click', function(e){
		e.preventDefault();
		var $tt = $('.typetester__text');

		var word = 'Ok! Reset done';
		var paragraph = [
			'Lorem ipsum dolor sit amet, consectetur elit. Proin sit amet dui et quam condimentum eleifend. Cras quam mi, suscipit a elit a, tempor tristique quam. Vestibulum nec condimentum tortor, ut ultricies ante. Donec ultricies enim diam, ac euismod elit dignissim in. Nunc fermentum turpis id libero pulvinar imperdiet. Maecenas nec sem dapibus est rutrum lobortis. Aliquam',
			'Maecenas ac risus in leo porttitor feugiat sed sit amet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet dui et quam condimentum eleifend. Maecenas ac risus in leo porttitor feugiat sed sit amet sem. In semper tortor a justo venenatis, vitae placerat mi imperdiet. Nullam ac mauris interdum, molestie',
			'In semper tortor a justo venenatis, placerat mi imperdiet Mauris dictum, libero sed posuere fringilla, lacus orci ultrices diam, nec dictum enim ex euismod arcu. Nulla semper mauris velit, vel pulvinar tellus pharetra eu. Fusce malesuada, lacus vel rutrum suscipit, nunc urna pharetra ligula, et volutpat justo metus quis felis. In',
			'Nullam ac mauris interdum,molestie lacus vel, ultrices semlacus vel, ultrices sem. Aliquam erat volutpat. Cras quam mi, suscipit a elit a, tempor tristique quam. Vestibulum nec condimentum tortor, ut ultricies ante. Donec ultricies enim diam, ac euismod elit dignissim.',
		];

		if($(this).data('text') == 'word'){
			$('.js-tt-text').css({
				fontSize: ''
			});

			$('.js-fz').attr({
				value: '13',
				max: 25
			})

			if($tt.children().length == 1){
				$tt.children('span:first-child').text(word);
			}else if ($tt.children().length > 1){
				$tt.children('span:first-child').text(word);
				$tt.find('*:not(span)').remove();
			}else{
				$tt.text(word);
			}
		}else{
			$('.js-tt-text').css({
				fontSize: '1.4vw'
			});

			$('.js-fz').attr({
				value: '1.4',
				max: 7
			})
			var randomNumber = Math.floor((Math.random()*paragraph.length));
			if($tt.children().length == 1){
				$tt.children('span:first-child').text(paragraph[randomNumber]);
			}else if ($tt.children().length > 1){
				$tt.children('span:first-child').text(paragraph[randomNumber]);
				$tt.find('*:not(span)').remove();
			}else{
				$tt.text(paragraph[randomNumber]);
			}
		}
	});
	// End Change between words and paragraph in typetester

	// Show tooltip numeric value when change slide input range
		$( ".slider__item" ).bind('keyup mousemove',function() {
			var value = $( this ).val();
			var slideValue = value;

			if($(this).hasClass('slider__item--lh')){
				$( this ).parent().find($('.slider__tooltip')).text(slideValue/10);
			}else{
				$( this ).parent().find($('.slider__tooltip')).text(Math.round($(window).width() * slideValue / 100));
			}

			var tooltipMov = slideValue - $(this).attr('min');
			var tooltipProp = $(this).attr('max') - $(this).attr('min');
			$( this ).parent().find($('.slider__tooltip')).css({
				'left': (tooltipMov/ tooltipProp ) * ($(this).width() - 12)  + 7 + 'px'
			});
		});
	// end Show tooltip numeric value when change slide input range

	// Simulating dropdown effect on Opentype element
	$('.js-dropdown').on('click', function(){
		$(this).next().toggleClass('visible');
	});
	// End Simulating dropdown effect on Opentype element

	// Justify items active
	$('.justify__item').on('click', function(){
		$(this).parent().attr('data-justify', $(this).data('justify'));
	});

// Scrollmagic movements
	// init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();


	// Show/Hide navigation
	var nav = new ScrollMagic.Scene({
		triggerElement: '.section--intro',
		triggerHook: .5
	})
	// .setPin('.nav--main')
	.setClassToggle('.nav--main', 'visible')
	.addTo(controller);
	// End Show/Hide navigation

	// Show images on scroll
	$('.animated--img').each(function(){
		var imgs = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: .6,
			reverse: false
		})
		.setClassToggle(this, 'show-img')
		.addTo(controller);
	});
	// End Show images on scroll

	// Move elements on scroll
	// $('.animated--scroll').each(function(){
	// 	var itemMoving = new ScrollMagic.Scene({
	// 		triggerElement: this,
	// 		triggerHook: .7,
	// 		reverse: false
	// 	})
	// 	.setClassToggle(this, 'scrolling-item')
	// 	.addTo(controller);
	// });
	// End Move elements on scroll

	// section intro


	// Detecting sections text come into view
	// TweenLite.set($('.section:not(.section--intro) p:not(.static)'), {
	// 	y: 80,
	// 	autoAlpha: 0
	// });
	$('.otf-list').each(function(){
		var textShowing = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: .5,
			reverse: false
		})
		.setClassToggle(this, 'animation-in')
		.addTo(controller);
	});

	$('.content-text, .styles-list, .section--author h2').each(function(){
		var introText = TweenLite.fromTo($(this), 1.5, {
			y: 40,
			autoAlpha: 0,
			ease: Power2.easeInOut
		}, {
			y: 0,
			autoAlpha: 1,
			ease: Power2.easeInOut
		});
		var textShowing = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: .85,
			reverse: false
		})
		.setTween(introText)
		.addTo(controller);
	});

		$('.section--author').each(function(){
			var textShowing = new ScrollMagic.Scene({
			triggerElement: this,
				triggerHook: .5,
			})
			.setClassToggle('body', 'author--view')
			.addTo(controller);
		});
	// Detecting sections text come into view
	// var styles = $('.section--styles').height()/4;
	// var stylesSample = new ScrollMagic.Scene({
	// 	triggerElement: '.js-letter-tester',
	// 	triggerHook: .4,
	// 	duration: styles
	// })
	// .setPin('.letter-style-tester',{
	// 		pushFollowers: false
	// })
	// .addTo(controller)

	// If florish is in view start animation
	$('.section--florished').each(function(){
		var florish = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: .7,
			reverse: false
		})
		.setClassToggle(this, 'run-animation')
		.addTo(controller);
	});
	// End If florish is in view start animation

	// $('.title-vertical').each(function(){
	// 	var pinned = $(this).width() / 2;
	// 	var parent = $(this).parent().height();
	// 	var hook = $(this).data('hook');
	// 	var trigger = $(this).next();
	// 	var offset = $(this).data('offset');

	// 	var vertical = new ScrollMagic.Scene({
	// 		triggerElement: trigger[0],
	// 		triggerHook: .9,
	// 		duration: parent - pinned - offset,
	// 		offset: offset
	// 	})
	// 	.setClassToggle(this, 'im-here')
	// 	// .setPin(this,{
	// 	// 		pushFollowers: false
	// 	// })
	// 	.addTo(controller);
	// });

	// $('.title-vertical').each(function(){
	// 	// var introText = TweenMax.fromTo($(this), 1.5, {
	// 	// 	x: 80,
	// 	// 	letterSpacing: 50,
	// 	// 	ease: Power2.easeInOut
	// 	// }, {
	// 	// 	x: 0,
	// 	// 	letterSpacing: 0,
	// 	// 	ease: Power2.easeInOut
	// 	// });
	// 	var titleAnimation = new ScrollMagic.Scene({
	// 		triggerElement: this,
	// 		triggerHook: .5,
	// 	})
	// 	.setClassToggle(this, 'im-here')
	// 	// .setTween(introText)
	// 	// .setPin(this, {
	// 	// 	pushFollowers: false
	// 	// })
	// 	.addIndicators()
	// 	.addTo(controller);
	// });


	// Pinned elements
	// $('.pinned-element').each(function(){
	// 	var pinned = $(this).width() / 3;
	// 	var heightDuration = $(this).data('height');
	// 	console.log(heightDuration);
	// 	var parent = $(this).parent().height();
	// 	var triggerHook = $(this).data('hook');

	// 	var pinnedEl = new ScrollMagic.Scene({
	// 		triggerElement: this,
	// 		triggerHook: triggerHook,
	// 		duration: parent - heightDuration
	// 	})
	// 	.setPin(this, {
	// 		pushFollowers: false
	// 	})
	// 	.addTo(controller);
	// });
	// End Pinned elements

	// Intro section G animation
	// var introIn = ;

	$('.section--intro').each(function(){
		var intro = new ScrollMagic.Scene({
			triggerElement: '.section--intro',
			triggerHook: .85,
			reverse: false
		})
		.setClassToggle('.capitular-letter', 'animation-in')
		.setTween(TweenLite.fromTo($(this).find('p'), 1.5, {
			y: 40,
			autoAlpha: 0,
			ease: Power2.easeInOut,
		}, {
			y: 0,
			autoAlpha: 1,
			ease: Power2.easeInOut,
			delay: 1.5
		}))
		.addTo(controller);
	})
	// End Capitular G animation

	// Scripts selector pinned to view
	// var duration = $('.section--scripts').height() * .15;
	// var scriptSelector = new ScrollMagic.Scene({
	// 	triggerElement: '.scripts-selector',
	// 	triggerHook: .3,
	// 	duration: duration
	// })
	// .setClassToggle('im-here')
	// .setPin('.scripts-selector', {
	// 		pushFollowers: false
	// })
	// .addTo(controller);
	// End Scripts selector pinned to view

// End Typetester scripts

// Animation and smooth scroll styles




// End Animation and smooth scroll styles

});
