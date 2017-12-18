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

// End Typetester scripts

});
