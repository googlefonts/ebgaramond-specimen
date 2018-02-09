$(document).ready(function(){

	// Menu: Scroll to new section
	var section;
	$('.js-menu').on('click', function(e){
		e.preventDefault();
		section = $(this).data('section');
		scrollbar.scrollTo(null, scrollbar.offset.y +$('.section--' + section).offset().top, 1000)
	});


	// End Menu: Scroll to new section

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
		$('.js-styles li').removeClass('style--active');
		$(this).addClass('style--active');
		// $('.js-letter-tester').removeClass().addClass($(this).data('style'));
		$('.js-letter-tester').attr('data-style', $(this).data('style'));
	});

	// End Styles






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

// OTF category selector: Letters, numbers & symbols
$('.otf-item').on('mouseover', function(){
	$('.otf-item').removeClass('otf--active');
	$(this).addClass('otf--active');
});
// End OTF category selector: Letters, numbers & symbols

// OTF category selector: Letters, numbers & symbols
$('.js-otf-category').on('click', function(){
	$('.otf-item').hide();
	$('.otf-item.otf--'+$(this).data('otf')).show();
	$(this).parent().attr('data-otf', $(this).data('otf'));

	$('.otf-item').removeClass('otf--active');
	$('.otf--'+$(this).data('otf')).first().addClass('otf--active');
});

$(window).on('resize', function(){
	if($(window).width() > 1024){
		$('.otf-item').show().removeClass('otf--active');
	}
})
// End OTF category selector: Letters, numbers & symbols

// Typetester scripts

	window.onload = function(){

	// Deactivating spell checked on typetester element
	$('.js-tt-text').attr("spellcheck",false);
	// Cleaning OTF names in typetester
		var OTFLabel = function(){
			if($('.type-tester__features--optional  button').length != 0 ){
				$('.type-tester__features--optional  button, .type-tester__features--default  button').each(function(){
					var str = $(this).text();
					str = str.substring(str.indexOf(":") + 2);
					$(this).text(str);
				});
				clearInterval(cleaningOTFlabels);
			}else{
			}
		}
		var cleaningOTFlabels = setInterval(OTFLabel, 1000);

		var stylesButton = function(){
			if($('.family-chooser button').length != 0){
				$('.family-chooser .active>div> button').off('click').on('click', function(event){
					$('.js-tt-text').css({
						'font-size': $('.specimen-slider').val() + 'px'
					})
				})
				$('.family-chooser .active>label> input').off('click').on('click', function(event){
					if(changeBtn == true){
						$('.js-tt-text').css({
							opacity: 0
						})
						window.setTimeout(function(){
							$('.js-tt-text').css({
								'font-size': $('.specimen-slider').val() + 'px',
								opacity: 1
							})
						}, .001);
					}
				})
				clearInterval(stylesBtn);
			}
		}

		var stylesBtn = setInterval(stylesButton, 1000);


		var proportionalLH = function(){
			// What i move and what i can move
			var currentVal = $('.specimen-slider').val() - $('.specimen-slider').attr('min'),
					maxVal = $('.specimen-slider').attr('max') - $('.specimen-slider').attr('min');

			// Percentage moved
			var movPercent = currentVal * 100 / maxVal;

			// Getting the total for move at line-height
			var minLH = $('.type-tester__slider').data('min'),
					maxLH = $('.type-tester__slider').data('max'),
					totalLH = maxLH - minLH;
					lhIncrease  = maxLH - totalLH * (movPercent / 100);

			$('.js-tt-text').css({
				'line-height': lhIncrease
			})
		}

		var sliderTT = function(){
			if($('.specimen-slider').length != 0){
				$( ".specimen-slider" ).bind('input change keyup mousemove',function() {
					console.log('hola hola holaaaa');
					var value = $( this ).val();
					var slideValue = value;

					var tooltipMov = slideValue - $(this).attr('min');
					var tooltipProp = $(this).attr('max') - $(this).attr('min');
					$( this ).parent().prev().css({
						'left': (tooltipMov/ tooltipProp ) * ($(this).width() - 12)  + 7 + 'px'
					});
					// var currentVal = $('.specimen-slider').val() - $('.specimen-slider').attr('min'),
					// 		maxVal = $('.specimen-slider').attr('max') - $('.specimen-slider').attr('min');
					// console.log(currentVal);
					// console.log(maxVal);

					// // Percentage moved
					// var movPercent = currentVal * 100 / maxVal;
					// console.log(movPercent);

					// // Getting the total for move at line-height
					// var minLH = $('.type-tester__slider').data('min'),
					// 		maxLH = $('.type-tester__slider').data('max'),
					// 		totalLH = maxLH - minLH;
					// 		lhIncrease  = maxLH - totalLH * (movPercent / 100);
					// 		console.log(minLH);
					// 		console.log(maxLH);
					// 		console.log(totalLH);
					// 		console.log(lhIncrease);
					// $('.js-tt-text').css({
					// 	'line-height': lhIncrease
					// })
					proportionalLH();
				});


				clearInterval(movingSliderTT);

				// Show tooltip in right place the first time
				var value = $( ".specimen-slider" ).val();
				var slideValue = value;
				var tooltipMov = slideValue - $( ".specimen-slider" ).attr('min');
				var tooltipProp = $( ".specimen-slider" ).attr('max') - $( ".specimen-slider" ).attr('min');

				$( '.type-tester__label' ).css({
					'left': (tooltipMov/ tooltipProp ) * ($( ".specimen-slider" ).width() - 12)  + 7 + 'px'
				});



			// $('.specimen-slider').bind('keyup mousemove', function(){
			// 	proportionalLH();
			// });
			$('.specimen-slider').on('change', function(){
				changeBtn = false;

			});

			}
		}

		var movingSliderTT = setInterval(sliderTT, 10);

		var changeBtn = false;
	// Change between words and paragraph in typetester
	$('.js-text').on('click', function(e){
		e.preventDefault();
		var $tt = $('.typetester__text');

		var word = [
				'Helas! Mon amy',
				'Seur du roy François',
				'J’aye veu en ma vie',
				'Que voulez-vous?',
				];
		var paragraph = [
			'«Mon amy, allez ailleurs, car vostre place est prinse.» Et luy, pensant que le mary fut venu, luy demanda comme le tout alloit. La pauvre femme, aiant pitié de luy, le voiant tant beau, jeune et honneste homme, aymer si fort et estre si peu aymé, luy declaira la folye de sa maistresse, pensant que, quant il l’entendroit, cella le chastieroit d’aymer tant. Et luy compta comme l’evesque de Sées ne faisoit que d’y arriver et estoit couché avecq elle, chose à quoy elle ne se attendoit pas, car il n’y devoit venir jusques au lendemain.',
			'Elle, voiant que beaucoup de peuple estoit en l’eglise et qu’il estoit accompaigné de deux bons serviteurs, se contraingnit de parler le plus gratieusement qu’elle peut, luy disant qu’elle ne faisoit nulle doubte qu’il ne dist verité et qu’elle l’estimoit trop homme de bien pour dire mal de personne du monde, et encores moins d’elle, qui luy portoit tant d’amityé; mais que son mary en avoit entendu des propos, par quoy elle le prioit qu’il voulust dire devant luy qu’il n’en avoit poinct parlé et qu’il n’en croyast riens.',
			'Le serviteur qui parloit à la damoiselle luy dist: "J’oy mon maistre qui parle en ce degré: je m’en voys à luy." \
				La damoiselle le retint et luy dist: \
				"Ne vous soulciez: il viendra assez tost."\
				Et, peu après, oiant que son maistre disoit: "Je meurs et recommande à Dieu mon esprit!" le voulut aller secourir; mais elle le retint, luy disant:\
				"Ne vous soulsiez: mon mary le chastie de ses jeunesses. Allons veoir que c’est." Et, en s’appuyant dessus le bout du degré, demanda à son mary: "Et puys? est il faict?"',
			'Je ne vous sçaurois dire lequel estoit plus aise des deux, ou luy de penser tromper sa femme, ou elle de tromper son mary. Et quant il eut demouré avec elle, non selon son vouloir, mais selon sa puissance, qui sentoit le viel marié, s’en alla hors de la maison, où il trouva son compaignon, beaucoup plus jeune et plus fort que luy; et luy feit la feste d’avoir trouvé la meilleure robbe qu’il avoit point veue. Son compaignon luy dist: «Vous sçavez que vous m’avez promis? - Allez doncques vistement, dict le maistre, de paour qu’elle ne se lieve, ou que ma femme ayt affaire d’elle.»',
		];

		changeBtn = true;



		// Animate dot between buttons
		$(this).parent().attr('data-text', $(this).data('text'));
		// End Animate dot between buttons

		// Fill the typetester with word or paragrapsh
		//Fill with words
		if($(this).data('text') == 'word'){
			$('.js-tt-text').css({
				fontSize: $('.type-tester').data('value-font-size') + 'px'
			});


			$('.specimen-slider').val($('.type-tester').data('value-font-size'));
			$('.specimen-slider').value = $('.type-tester').data('value-font-size');
			$('.type-tester__label').text($('.type-tester').data('value-font-size') + 'px');

			proportionalLH();

			var randomNumber = Math.floor((Math.random()*word.length));

			$tt.text(word[randomNumber]);


		//Fill with paragraphs
		}else{
			$('.js-tt-text').css({
				fontSize: '21px'
			});

			$('.specimen-slider').val('21');
			$('.specimen-slider').value = '21';

			$('.type-tester__label').text('21px');

			proportionalLH();

			var randomNumber = Math.floor((Math.random()*paragraph.length));
				// $tt.children('span:first-child').text(paragraph[randomNumber]);
				$tt.text(paragraph[randomNumber]);
		}
	});
	// End Change between words and paragraph in typetester

	// Show tooltip numeric value when change slide input range
		$( ".specimen-slider" ).bind('keyup mousemove',function() {
			var value = $( this ).val();
			var slideValue = value;

			var tooltipMov = slideValue - $(this).attr('min');
			var tooltipProp = $(this).attr('max') - $(this).attr('min');
			$( this ).parent().prev().css({
				'left': (tooltipMov/ tooltipProp ) * ($(this).width() - 12)  + 7 + 'px'
			});
		});
	// end Show tooltip numeric value when change slide input range




	// Simulating dropdown effect on Opentype element
	$('.js-dropdown').on('click', function(){

		if($(this).next().hasClass('visible')){
			$('.open-type, .section--author, .footer').css({
				'transform': ''
			})
		}else{
			$('.js-dropdown').next().removeClass('visible');
			$('.open-type, .section--author, .footer').css({
				'transform': 'translateY(' + $(this).next().height() +'px)'
			})
		}
		$(this).next().toggleClass('visible');



		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
		}else{
			$('.js-dropdown').removeClass('opened');
			$(this).toggleClass('opened');
		}

	});
	// End Simulating dropdown effect on Opentype element


	$('.tt__settings').on('click', function(e){
		event.stopPropagation();
		$(this).toggleClass('active');
		if($('.family-chooser input').is(':checked')){
			$('.mdl-switch__label').addClass('active')
		}else{
			$('.mdl-switch__label').removeClass('active')
		}
	});


	}
	// End typetester functions

	// Setting the line-height for the typetester

});
