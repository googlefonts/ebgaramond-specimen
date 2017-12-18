$(document).ready(function(){

// Typetester scripts
	// When a user change a value for a select input update the text for the label
	$('.js-selector').on('change', function(){
		$(this).prev().text($(this).find('option:selected').text());
	});
	// End When a user change a value for a select input update the text for the label

	// Change between words and paragraph in typetester
	$('.js-text').on('click', function(){
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

	// Pin sidebar menú

	// init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();

	// Scene Handler
	var scene1 = new ScrollMagic.Scene({
		triggerElement: '.nav--main',
		triggerHook: .5,
		offset: '100%'
	})
	.setPin('#nav')
	.setClassToggle('#nav', 'visible')
	.addIndicators({
		name: 'navigation'
	})
	.addTo(controller);
	// End Pin sidebar menú

	// Show image at intro section

	var img = new ScrollMagic.Scene({
		triggerElement: '.section--intro',
		triggerHook: .5,
		reverse: false
	})
	.setClassToggle('.intro__img', 'show-img')
	.addTo(controller);
	// Show image at intro section

	// Animate vertical text
	var text = new ScrollMagic.Scene({
		triggerElement: '.section--intro',
		triggerHook: .9,
		duration: '90%'
	})
	.setClassToggle('.animated--intro', 'im-moving')
	.addTo(controller);
	// End Animate vertical text


// End Typetester scripts

	$(function(){
				var $window = $(window);		//Window object

				var scrollTime = 1.2;			//Scroll time
				var scrollDistance = 270;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

				$window.on("mousewheel DOMMouseScroll", function(event){

					event.preventDefault();

					var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
					var scrollTop = $window.scrollTop();
					var finalScroll = scrollTop - parseInt(delta*scrollDistance);

					TweenMax.to($window, scrollTime, {
						scrollTo : { y: finalScroll, autoKill:true },
							ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
							// autoKill: true,
							// overwrite: 5
						});
						$intro = $('.animated--intro');
						if (delta > 0){
							if ($intro.hasClass('im-moving')){
								TweenLite.to($intro, 1, {
									ease: Power4.easeOut,
									y:  "-=" + 6 + 'px',
									rotate: -90
								});
							}else{
								TweenLite.to($intro, 1, {
									ease: Power4.easeOut,
									y:  0,
									rotate: -90
								});
							}

						}else{
							if ($intro.hasClass('im-moving')){
								TweenLite.to($intro, 1, {
									ease: Power2.easeOut,
									y:  "+=" + 6 + 'px',
									rotate: -90
								});
							}else{
								TweenLite.to($intro, 1, {
									ease: Power2.easeOut,
									y:  0,
									rotate: -90
								});
							}
						}
						$bio = $('.animated--bio');
						if (delta > 0){
							TweenLite.to($bio, 1, {
								ease: Power2.easeOut,
								y:  "+=" + 7 + 'px',
								rotate: -90
							});

						}else{
							TweenLite.to($bio, 1, {
								ease: Power2.easeOut,
								y:  "-=" + 7 + 'px',
								rotate: -90
							});
						}
					});
			});


});
