$(document).ready(function(){

	// var glyphs = $('.section--typetester');
	// console.log(glyphs);
	// glyphs.detach();
	// $('.test').on('click', function(e){
	// 	e.preventDefault();
	// 	$('body').append(glyphs);
	// });


	//Open menu on mobile version
	$('.js-menu-mobile').on('click', function(e){
		e.preventDefault();
		$(this).parent().toggleClass('menu--opened');
	});
	//Open menu on mobile version


	// Setting the basics: width & height for elements
	var itemHeight = $('.grid__item').height();
	var itemWidth = $('.grid__item').width();
	var autoplay = false;

	var highlightLetters = function(currentX, currentY, autoplay){

		var center = document.elementFromPoint(currentX, currentY);
		if (center.parentNode.classList.contains('header-grid')){
			// Round 1 - wrapper 1 level
			var left = document.elementFromPoint(currentX - itemWidth, currentY);
			var right = document.elementFromPoint(currentX + itemWidth, currentY);
			var top = document.elementFromPoint(currentX , currentY - itemHeight);
			var bottom = document.elementFromPoint(currentX , currentY + itemHeight);
			var leftTop = document.elementFromPoint(currentX - itemWidth, currentY - itemHeight);
			var leftBottom = document.elementFromPoint(currentX - itemWidth, currentY + itemHeight);
			var rightBottom = document.elementFromPoint(currentX + itemWidth, currentY + itemHeight);
			var rightTop = document.elementFromPoint(currentX + itemWidth, currentY - itemHeight);
			var round1 = [left, right, top, bottom, leftTop, leftBottom, rightBottom, rightTop];

			// Round 2 - wrapper second level
			var left = document.elementFromPoint(currentX - itemWidth*2, currentY);
			var right = document.elementFromPoint(currentX + itemWidth*2, currentY);
			var top = document.elementFromPoint(currentX , currentY - itemHeight*2);
			var bottom = document.elementFromPoint(currentX , currentY + itemHeight*2);
			var left2Top1 = document.elementFromPoint(currentX - itemWidth*2, currentY - itemHeight);
			var left2Bottom1 = document.elementFromPoint(currentX - itemWidth*2, currentY + itemHeight);
			var left1Top2 = document.elementFromPoint(currentX - itemWidth, currentY - itemHeight*2);
			var left1Bottom2 = document.elementFromPoint(currentX - itemWidth, currentY + itemHeight*2);
			var right1Bottom2 = document.elementFromPoint(currentX + itemWidth, currentY + itemHeight*2);
			var right2Bottom1 = document.elementFromPoint(currentX + itemWidth*2, currentY + itemHeight);
			var right1Top2 = document.elementFromPoint(currentX + itemWidth, currentY - itemHeight*2);
			var right2Top1 = document.elementFromPoint(currentX + itemWidth*2, currentY - itemHeight);
			var leftTop = document.elementFromPoint(currentX - itemWidth*2, currentY - itemHeight*2);
			var leftBottom = document.elementFromPoint(currentX - itemWidth*2, currentY + itemHeight*2);
			var rightBottom = document.elementFromPoint(currentX + itemWidth*2, currentY + itemHeight*2);
			var rightTop = document.elementFromPoint(currentX + itemWidth*2, currentY - itemHeight*2);


			var round2 = [left, right, top, bottom, left2Top1, left2Bottom1, left1Top2, left1Bottom2, right1Bottom2, right2Bottom1, right1Top2, leftTop, leftBottom, rightBottom, rightTop];

			for(var i = 0; i<round2.length; i++){
				round2[i].classList.remove('active-round1')
				round2[i].classList.add('active-round2')
			}

			for(var i = 0; i<round1.length; i++){
				round1[i].classList.remove('active-round2')
				round1[i].classList.add('active-round1')
			}

			// Active when cursor is over
			center.classList.remove('active-round1');
			center.classList.remove('active-round2');
			center.classList.add('active-center');

			var fadeOut = function(){
				setTimeout(function(){
					center.classList.remove('active-center');

					for(var i = 0; i<round1.length; i++){
						round1[i].classList.remove('active-round1')
					}
					for(var i = 0; i<round2.length; i++){
						round2[i].classList.remove('active-round2')
					}
				}, 1000);
			}

			// Remove class when  the mouse are out of the element
			if (autoplay == false){
				center.addEventListener('mouseout', function(e){
					fadeOut()
				})
			}else{
				fadeOut()
			}
		}else{
			return
		}
	}

	var totalWidth = $(window).width() - 36;
	var totalHeight = $(window).height() - 36 ; // css padding space
	var gridNumberH = parseInt($(window).width() / $('.grid__item').width()) - 3;
	var gridNumberV = parseInt($(window).height() / $('.grid__item').outerHeight()) -3;
	var randomH = Math.floor(Math.random() * gridNumberH) + 1;
	var randomV = Math.floor(Math.random() * gridNumberV) + 1 ;
	x = $('.grid__item').width() * randomH;
	y = $('.grid__item').height() * randomV;
	var path1 = [
		{ // 0
			x:82.6 * totalWidth/100,
			y:25.2 * totalHeight/100
		}, {
			x:82.1 * totalWidth/100,
			y:25.4 * totalHeight/100
		}, {
			x:81.7 * totalWidth/100,
			y:24.4 * totalHeight/100
		},{
			x:82.3 * totalWidth/100,
			y:24 * totalHeight/100
		},{
			x:82.1 * totalWidth/100,
			y:25 * totalHeight/100
		},{
			x:82.2 * totalWidth/100,
			y:25 * totalHeight/100
		},{
			x:82 * totalWidth/100,
			y:25.75 * totalHeight/100
		},{
			x:81* totalWidth/100,
			y:25.53 * totalHeight/100
		},{
			x:82 * totalWidth/100,
			y:24.68 * totalHeight/100
		},{
			x:81.1 * totalWidth/100,
			y:28.86 * totalHeight/100
		},{ // 10
			x:81.2 * totalWidth/100,
			y:28.35 * totalHeight/100
		},{
			x:80 * totalWidth/100,
			y:37.21 * totalHeight/100
		},{
			x:81.7 * totalWidth/100,
			y:46.07 * totalHeight/100
		},{
			x:81.9 * totalWidth/100,
			y:62.65 * totalHeight/100
		},{
			x:79 * totalWidth/100,
			y:74.43 * totalHeight/100
		},{
			x:82.1 * totalWidth/100,
			y:75.82 * totalHeight/100
		},{
			x:82.8 * totalWidth/100,
			y:79.11 * totalHeight/100
		},{
			x:81.8 * totalWidth/100,
			y:79.74 * totalHeight/100
		},{
			x:82.4 * totalWidth/100,
			y:77.72 * totalHeight/100
		},{
			x:79.8 * totalWidth/100,
			y:68.22 * totalHeight/100
		},{//20
			x:78 * totalWidth/100,
			y:59.24 * totalHeight/100
		},{
			x:74.7 * totalWidth/100,
			y:52.53 * totalHeight/100
		},{
			x:66.9 * totalWidth/100,
			y:45.82 * totalHeight/100
		},{
			x:59.8 * totalWidth/100,
			y:40.50 * totalHeight/100
		},{
			x:55.3 * totalWidth/100,
			y:37.72 * totalHeight/100
		},{
			x:57.4 * totalWidth/100,
			y:26.83 * totalHeight/100
		},{
			x:62.6 * totalWidth/100,
			y:21.49 * totalHeight/100
		},{
			x:68.9 * totalWidth/100,
			y:24.2 * totalHeight/100
		},{
			x:76.7 * totalWidth/100,
			y:25.17 * totalHeight/100
		},{
			x:79.6 * totalWidth/100,
			y:23.53 * totalHeight/100
		},{//30
			x:82.3 * totalWidth/100,
			y:21.40 * totalHeight/100
		},{
			x:82.4 * totalWidth/100,
			y:21.81 * totalHeight/100
		},{
			x:78.1 * totalWidth/100,
			y:21.22 * totalHeight/100
		},{
			x:82.2 * totalWidth/100,
			y:22.87 * totalHeight/100
		},{
			x:82.1 * totalWidth/100,
			y:24.17 * totalHeight/100
		},{
			x:82.2 * totalWidth/100,
			y:27.59 * totalHeight/100
		},{
			x:82.4 * totalWidth/100,
			y:29.74 * totalHeight/100
		},{
			x:79.5* totalWidth/100,
			y:32.02 * totalHeight/100
		},{
			x:77.3* totalWidth/100,
			y:35.69 * totalHeight/100
		},{
			x:71.7* totalWidth/100,
			y:39.62 * totalHeight/100
		},{ //40
			x:69.3* totalWidth/100,
			y:45.31 * totalHeight/100
		},{
			x:68.3* totalWidth/100,
			y:51.01 * totalHeight/100
		},{
			x:68.6* totalWidth/100,
			y:55.82 * totalHeight/100
		},{
			x:68.9* totalWidth/100,
			y:62.91 * totalHeight/100
		},{
			x:68.4* totalWidth/100,
			y:68.22 * totalHeight/100
		},{
			x:67.9* totalWidth/100,
			y:71.89 * totalHeight/100
		},{
			x:66.9* totalWidth/100,
			y:75.56 * totalHeight/100
		},{
			x:65.7* totalWidth/100,
			y:76.7 * totalHeight/100
		},{
			x:63.3* totalWidth/100,
			y:76.45 * totalHeight/100
		},{
			x:61* totalWidth/100,
			y:77.21 * totalHeight/100
		},{//50
			x:56.1* totalWidth/100,
			y:78.1 * totalHeight/100
		},{
			x:45.6* totalWidth/100,
			y:77.46 * totalHeight/100
		},{
			x:40.2* totalWidth/100,
			y:75.18 * totalHeight/100
		},{
			x:31* totalWidth/100,
			y:70 * totalHeight/100
		},{
			x:28* totalWidth/100,
			y:63.41 * totalHeight/100
		},{
			x:28* totalWidth/100,
			y:57.84 * totalHeight/100
		},{
			x:28* totalWidth/100,
			y:57.08 * totalHeight/100
		},{
			x:30* totalWidth/100,
			y:57.72 * totalHeight/100
		},{
			x:30* totalWidth/100,
			y:58.1 * totalHeight/100
		},{
			x:30* totalWidth/100,
			y:59.49 * totalHeight/100
		},{ //60
			x:31* totalWidth/100,
			y:56.45 * totalHeight/100
		},{
			x:31.1* totalWidth/100,
			y:53.92 * totalHeight/100
		},{
			x:41.4* totalWidth/100,
			y:48.6 * totalHeight/100
		},{
			x:51.5* totalWidth/100,
			y:46.2 * totalHeight/100
		},{
			x:58.2* totalWidth/100,
			y:44.3 * totalHeight/100
		},{
			x:59.1* totalWidth/100,
			y:43.54 * totalHeight/100
		},{
			x:57.4* totalWidth/100,
			y:42.4 * totalHeight/100
		},{
			x:55.5* totalWidth/100,
			y:41.39 * totalHeight/100
		},{
			x:51.7* totalWidth/100,
			y:40 * totalHeight/100
		},{
			x:47.4* totalWidth/100,
			y:35.69 * totalHeight/100
		},{ //70
			x:40.5* totalWidth/100,
			y:30.50 * totalHeight/100
		},{
			x:33.6* totalWidth/100,
			y:23.16 * totalHeight/100
		},{
			x:28.8* totalWidth/100,
			y:20.18 * totalHeight/100
		},{
			x:28* totalWidth/100,
			y:21.96 * totalHeight/100
		},{
			x:29.2* totalWidth/100,
			y:23.87 * totalHeight/100
		},{
			x:30.2* totalWidth/100,
			y:21.49 * totalHeight/100
		},{
			x:31* totalWidth/100,
			y:22.53 * totalHeight/100
		},{
			x:31.2* totalWidth/100,
			y:24.68 * totalHeight/100
		},{
			x:31.7* totalWidth/100,
			y:32.53 * totalHeight/100
		},{
			x:31.8* totalWidth/100,
			y:36.07 * totalHeight/100
		},{ //80
			x:33.7* totalWidth/100,
			y:37.72 * totalHeight/100
		},{
			x:32.67* totalWidth/100,
			y:29.74 * totalHeight/100
		},{
			x:30.29* totalWidth/100,
			y:23.92 * totalHeight/100
		},{
			x:31.56* totalWidth/100,
			y:22.91 * totalHeight/100
		},{
			x:28.99* totalWidth/100,
			y:29.11 * totalHeight/100
		},{
			x:31.49* totalWidth/100,
			y:37.59 * totalHeight/100
		},{
			x:34.44* totalWidth/100,
			y:43.03 * totalHeight/100
		},{
			x:44.25* totalWidth/100,
			y:48.10 * totalHeight/100
		},{
			x:52.39* totalWidth/100,
			y:51.13 * totalHeight/100
		},{
			x:52.07* totalWidth/100,
			y:52.91 * totalHeight/100
		},{ //90
			x:51.67* totalWidth/100,
			y:53.92 * totalHeight/100
		},{
			x:54.22* totalWidth/100,
			y:53.92 * totalHeight/100
		},{
			x:57.57* totalWidth/100,
			y:53.92 * totalHeight/100
		},{
			x:60.04* totalWidth/100,
			y:39.11 * totalHeight/100
		},{
			x:63.39* totalWidth/100,
			y:32.27 * totalHeight/100
		},{
			x:63.39* totalWidth/100,
			y:24.68 * totalHeight/100
		},{
			x:74.64* totalWidth/100,
			y:20.50 * totalHeight/100
		},{
			x:75.11* totalWidth/100,
			y:20.75 * totalHeight/100
		},{
			x:76.9* totalWidth/100,
			y:20.88 * totalHeight/100
		},{
			x:79.5* totalWidth/100,
			y:20.88 * totalHeight/100
		},{ //100
			x:80.86* totalWidth/100,
			y:21.51 * totalHeight/100
		},{
			x:81.18* totalWidth/100,
			y:21.64 * totalHeight/100
		},{
			x:81.33* totalWidth/100,
			y:22.02 * totalHeight/100
		},{
			x:81.25* totalWidth/100,
			y:23.79 * totalHeight/100
		},{
			x:81.25* totalWidth/100,
			y:29.74 * totalHeight/100
		},{
			x:79.98* totalWidth/100,
			y:33.79 * totalHeight/100
		},{
			x:79.34* totalWidth/100,
			y:40.25 * totalHeight/100
		},{
			x:77.51* totalWidth/100,
			y:49.24 * totalHeight/100
		},{
			x:75.83* totalWidth/100,
			y:53.41 * totalHeight/100
		},{
			x:71.92* totalWidth/100,
			y:64.43 * totalHeight/100
		},{ //110
			x:68.5* totalWidth/100,
			y:73.54 * totalHeight/100
		},{
			x:68.89* totalWidth/100,
			y:78.48 * totalHeight/100
		},{
			x:69.85* totalWidth/100,
			y:76.2 * totalHeight/100
		},{
			x:72.96* totalWidth/100,
			y:73.41 * totalHeight/100
		},{
			x:81.49* totalWidth/100,
			y:68.22 * totalHeight/100
		},{//115
			x:80.48* totalWidth/100,
			y:63.16 * totalHeight/100
		},{
			x:82* totalWidth/100,
			y:61.39 * totalHeight/100
		},{
			x:81.24* totalWidth/100,
			y:64.43 * totalHeight/100
		},{
			x:81.04* totalWidth/100,
			y:70.37 * totalHeight/100
		},{
			x:80.94* totalWidth/100,
			y:75.56 * totalHeight/100
		},{//120
			x:76.39* totalWidth/100,
			y:72.65 * totalHeight/100
		},{
			x:69.37* totalWidth/100,
			y:63.41 * totalHeight/100
		},{
			x:59.56* totalWidth/100,
			y:58.10 * totalHeight/100
		},{
			x:48.08* totalWidth/100,
			y:62.15 * totalHeight/100
		},{
			x:46.17* totalWidth/100,
			y:59.24 * totalHeight/100
		},{
			x:52.15* totalWidth/100,
			y:43.67 * totalHeight/100
		},{
			x:58.61* totalWidth/100,
			y:30 * totalHeight/100
		},{
			x:48.48* totalWidth/100,
			y:29.36 * totalHeight/100
		},{
			x:46.25* totalWidth/100,
			y:29.36 * totalHeight/100
		},{
			x:53.66* totalWidth/100,
			y:27.34 * totalHeight/100
		},{ //130
			x:65.55* totalWidth/100,
			y:25.06 * totalHeight/100
		},{
			x:74* totalWidth/100,
			y:21.21 * totalHeight/100
		},{
			x:80.38* totalWidth/100,
			y:21.84 * totalHeight/100
		},{
			x:81.72* totalWidth/100,
			y:25.56 * totalHeight/100
		},{
			x:79.5* totalWidth/100,
			y:52.15 * totalHeight/100
		},{
			x:71.21* totalWidth/100,
			y:59.24 * totalHeight/100
		},{
			x:60.76* totalWidth/100,
			y:67.08 * totalHeight/100
		},{
			x:45.93* totalWidth/100,
			y:72.40 * totalHeight/100
		},{
			x:41.7* totalWidth/100,
			y:74.68 * totalHeight/100
		},{
			x:34.68* totalWidth/100,
			y:78.22 * totalHeight/100
		},{ //140
			x:28.38* totalWidth/100,
			y:79.74 * totalHeight/100
		},{
			x:28.38* totalWidth/100,
			y:69.74 * totalHeight/100
		},{
			x:40.43* totalWidth/100,
			y:50.88 * totalHeight/100
		},{
			x:59.17* totalWidth/100,
			y:39.62 * totalHeight/100
		},{
			x:68.97* totalWidth/100,
			y:35.94 * totalHeight/100
		},{
			x:52.55* totalWidth/100,
			y:27.97 * totalHeight/100
		},{
			x:38.11* totalWidth/100,
			y:20 * totalHeight/100
		},{
			x:30.18* totalWidth/100,
			y:25.22 * totalHeight/100
		},{
			x:30.67* totalWidth/100,
			y:26.50 * totalHeight/100
		},{
			x:29.62* totalWidth/100,
			y:23.67 * totalHeight/100
		},{//150
			x:29.5* totalWidth/100,
			y:26.45 * totalHeight/100
		},{
			x:49.52* totalWidth/100,
			y:28.48 * totalHeight/100
		},{
			x:59.64* totalWidth/100,
			y:31.01 * totalHeight/100
		},{
			x:65.78* totalWidth/100,
			y:29.36 * totalHeight/100
		},{
			x:69.45* totalWidth/100,
			y:27.34 * totalHeight/100
		},{
			x:73.12* totalWidth/100,
			y:26.83 * totalHeight/100
		},{
			x:78.38* totalWidth/100,
			y:26.07 * totalHeight/100
		},{
			x:80.30* totalWidth/100,
			y:25.69 * totalHeight/100
		},{
			x:80.54* totalWidth/100,
			y:25.56 * totalHeight/100
		},{
			x:80.70* totalWidth/100,
			y:26.7 * totalHeight/100
		},{//160
			x:79.02* totalWidth/100,
			y:28.6 * totalHeight/100
		},{
			x:76.47* totalWidth/100,
			y:30.37 * totalHeight/100
		},{
			x:74.40* totalWidth/100,
			y:32.65 * totalHeight/100
		},{
			x:73.76* totalWidth/100,
			y:35.06 * totalHeight/100
		},{
			x:73.44* totalWidth/100,
			y:37.97 * totalHeight/100
		},{
			x:73.36* totalWidth/100,
			y:40 * totalHeight/100
		},{
			x:73.68* totalWidth/100,
			y:43.79 * totalHeight/100
		},{
			x:74.56* totalWidth/100,
			y:47.59 * totalHeight/100
		},{
			x:75.91* totalWidth/100,
			y:51.01 * totalHeight/100
		},{
			x:78.62* totalWidth/100,
			y:55.04 * totalHeight/100
		},{//170
			x:81.97* totalWidth/100,
			y:58.45 * totalHeight/100
		},{
			x:80.09* totalWidth/100,
			y:63.03 * totalHeight/100
		},{
			x:80.41* totalWidth/100,
			y:71.26 * totalHeight/100
		},{
			x:81.1* totalWidth/100,
			y:73.92 * totalHeight/100
		},{
			x:78.22* totalWidth/100,
			y:75.69 * totalHeight/100
		},{
			x:71.61* totalWidth/100,
			y:75.94 * totalHeight/100
		},{
			x:67.86* totalWidth/100,
			y:73.92 * totalHeight/100
		},{
			x:60.12* totalWidth/100,
			y:73.16 * totalHeight/100
		},{
			x:55.02* totalWidth/100,
			y:73.67 * totalHeight/100
		},{//180
			x:50.39* totalWidth/100,
			y:74.93 * totalHeight/100
		},{
			x:46.57* totalWidth/100,
			y:74.81 * totalHeight/100
		},{
			x:46.41* totalWidth/100,
			y:74.81 * totalHeight/100
		},{
			x:45.93* totalWidth/100,
			y:75.31 * totalHeight/100
		},{
			x:45.69* totalWidth/100,
			y:75.69 * totalHeight/100
		},{
			x:45.21* totalWidth/100,
			y:75.82 * totalHeight/100
		},{
			x:45.21* totalWidth/100,
			y:74.68 * totalHeight/100
		},{
			x:48.72* totalWidth/100,
			y:65.06 * totalHeight/100
		},{
			x:77.51* totalWidth/100,
			y:61.89 * totalHeight/100
		},{
			x:79.2 * totalWidth/100,
			y:66.07  * totalHeight/100
		},
	]
	var pos = 0;
	var mouseMove = function(){
			autoplay = true;
			highlightLetters(path1[pos].x, path1[pos].y, autoplay);
			pos++;

			//Restart animation
			if (pos == path1.length-1){
				// clearInterval(mouseMove)
				pos = 0;
			}
	};

	var simulateMove = setInterval(mouseMove, 300);

	$('.over-the-folder').on('mouseover', function(){
		clearInterval(simulateMove);
	}).on('mouseout', function(){
		simulateMove = setInterval(mouseMove, 100);
	});
	// Getting the elements under the mouse cursor
	$('.over-the-folder').on('mousemove', function(e) {
		// Actual mouse position
		currentX = e.pageX;
		currentY = e.pageY;
		highlightLetters(currentX, currentY, false);
	});

	var currentPos;
	var firstPos = 1;
	var header;
	var languages;
	var scripts = 0;
	scrollbar.addListener((status) => {

		//Showing images when reach the viewport
		$('.animated--img').each(function(){
			if($(this).offset().top < $(window).height() - $(this).height()*.33){
				$(this).addClass('show-img');
			}
		});

		//Showing sections when reach the viewport
		$('.otf-list').each(function(){
			if($(this).offset().top < $(window).height()*.5 ){
				$(this).addClass('animation-in');
			}
		});

		if($('.section--scripts').offset().top < $(window).height()*.5  && scripts == 0 ){
			$('.script--latin').addClass('script--active');
			scripts++;
		}

		$('.section--author').each(function(){
			if($(this).offset().top < $(window).height()*.5 ){
				$('body').addClass('author--view');
			}else{
				$('body').removeClass('author--view');
			}
		});

		$('.section--florished').each(function(){
			if($(this).offset().top < $(window).height()*.7){
				$(this).addClass('run-animation');
			}
		});

		$('.section--intro').each(function(){
			if($(this).offset().top < $(window).height()*.85){
				$('.capitular-letter').addClass('animation-in');
			}
		})

		$('.content-text, .styles-list, .section--author h2, .section--intro p').each(function(){
			if($(this).offset().top < $(window).height()*.85){
				$(this).addClass('content-in');
			}
		});

		$('.languages-list').each(function(){
			if($(this).offset().top < $(window).height()*.85){
				$(this).addClass('animation-in');
			}
		})

		// End trigger showing sections

		if(scrollbar.offset.y + 17 > $(window).height()/3 ){
			clearInterval(simulateMove);
		}else if (scrollbar.offset.y + 17 <$(window).height()/2 ) {
			clearInterval(simulateMove);
			simulateMove = setInterval(mouseMove, 100);
		}

		// Hide main nav when reach the footer element
		if(scrollbar.offset.y > $(window).height()*.66 && scrollbar.offset.y < scrollbar.getSize().content.height - $(window).height() - $('.footer').outerHeight() + $('.nav--main').height()){
			$('.nav--main').addClass('visible')
		}
		else{
			$('.nav--main').removeClass('visible')
		}

		//Detach header grid when over the folder is not in view
		if(scrollbar.offset.y > $(window).height()){
			if($('.header-grid').length){
				header = $('.header-grid').detach();
			}
		}else{
			if(!$('.header-grid').length){
				header.appendTo( ".over-the-folder" );
			}
		}
		// Detach languages list when section is not in view
		if ($('.section--languages').offset().top < $(window).height() && $('.section--languages').offset().top > - $('.section--languages').height() - $(window).height()*.3){
			if(!$('.languages-list').length){

				languages.appendTo('.section--languages');
			}
		}else{
			if($('.languages-list').length){
				languages = $('.languages-list').detach();
			}
		}


	});

	// First scroll: Scroll down
	$('.js-scroll').on('click', function(e){
		e.preventDefault();
		scrollbar.scrollTo(null, $(window).height() - 16, 1000);
	});
	// End First scroll: Scroll down

	// Menu: Scroll to new section
	var section;
	$('.js-menu').on('click', function(e){
		e.preventDefault();
		section = $(this).data('section');
		scrollbar.scrollTo(null, scrollbar.offset.y +$('.section--' + section).offset().top, 1000);
		$(this).parent().removeClass('menu--opened');
		// $(this).blur();
		// $(this).trigger('blur');
		// $(this).trigger('focusout');
		// $(this).find('a').blur();
		// console.log($(this));
		// $('.nav__item--dot').click();
	});


	// End Menu: Scroll to new section
	$('.js-old').on('touchmove', function(){
		$(this).css({
			'clip-path': 'none'
		})
	})
	// Fixing view for slider component: old version vs new version
	$('.js-toggle').on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');

			$('.js-slider-mask').animate().css({
				'clip-path': 'inset(0 0 0 ' + 50 + '%)'
			});
			$('.js-slider').val(50);
		}else{
			$('.js-toggle').removeClass('active');
			$(this).addClass('active')
		}
		if($(this).data('period') == 'old'){
			$('.js-slider-mask').animate().css({
				'clip-path': 'inset(0 0 0 ' + 0 + '%)'
			});
			$('.js-slider').val(0);
		}else{
			$('.js-slider-mask').animate().css({
				'clip-path': 'inset(0 0 0 ' + 100 + '%)'
			});
			$('.js-slider').val(100);
		}

		if($('.js-toggle').hasClass('active')){
			$('.comparison-wrapper, .comparison__controller').addClass('zooming');

			if($(this).data('period') == 'old'){
				$('.comparison-wrapper, .comparison__controller').removeClass('new').addClass('old');
				// $('.comparison--old').css({
				// 	'clip-path': 'none'
				// })
			}else{
				$('.comparison-wrapper, .comparison__controller').removeClass('old').addClass('new');
				// $('.comparison--old').css({
				// 	'clip-path': 'inset(0 0 0 0)'
				// })
			}

		}else{
			$('.comparison-wrapper, .comparison__controller').removeClass('zooming new old');
			$('.js-slider-mask').css({
				'clip-path': 'inset(0 0 0 ' + 50 + '%)'
			});
			$('.js-slider').val(50);
		}
	})
	// End: Fixing view for slider component: old version vs new version
	// Updating mask for the slider component
	// $('.comparison__controller').css({
	// 	width: $(".comparison__slider").width() + 16,
	// });
	$('.comparison__controller').on('mousemove', function(e){
		if(!$(this).hasClass('zooming')){
			var x = e.pageX - $(this).offset().left;

			var canvasWidth =  $(".comparison__slider").width();
			var x = e.pageX - $(this).offset().left

			var percent = x * 100 / canvasWidth;

			$('.js-slider').val(percent);

			$('.js-slider-mask').css({
				'clip-path': 'inset(0 0 0 ' + parseInt(percent) + '%)'
			});
		}
	});

	//Zooming view adjust left position
	// $('.comparison__slider').on('mouseover', function(){
	// 	var leftOffset = $(this).offset().left;
	// 	var zoomImgExists = function(){
	// 		if($('.easyzoom-flyout').length){
	// 			$('.easyzoom-flyout').css({
	// 				left: 'calc('+ -leftOffset + 'px + 1rem)'
	// 			})
	// 			clearInterval(zoomImg)
	// 		}else{
	// 		}
	// 	}
	// 	var zoomImg = setInterval(zoomImgExists, 100);

	// })
	// $(".js-slider").addEventListener('touchmove', (e) => {
	// 	e.stopPropagation();
	// });
	$(".js-slider").on('touchmove', function(e){
		e.stopPropagation();
	})
	$(".js-slider").on("input change mouseover mousemove", function() {

		$('.js-slider-mask').css({
			'clip-path': 'inset(0 0 0 ' + $(this).val() + '%)'
		});
	}).on('mouseleave', function(){
			scrollbar.setPosition(0, currentPos);
			// scrollbar.init();
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

	// Move the dot for languages options
	$('.js-language').on('click', function(){
		$('.js-language').removeClass('language--active');
		$(this).addClass('language--active');

		var highlight = $(this).data('language');
		$('.languages-list').attr('data-active', highlight);
		$('.language__item').removeClass('active--hover');
		if (highlight == 'all'){
			$('.language__item').addClass('active--hover');
		}else{
			$('.language__item[data-language="' + highlight+'"').addClass('active--hover');
		}
	});

	$('.language__item').on('click', function(){
		$('.languages-list').toggleClass('opened');
		$('.language__item').removeClass('opened').trigger('blur');
		$(this).addClass('opened');
		if ($(this).find('.language__content').height() > $(window).height()){
			$(this).find('.language__content').css({
				'top': - $('.languages-list').offset().top,
				'padding-top': '1.5rem'
			});
		}else{
			$(this).find('.language__content').css('top', - $('.languages-list').offset().top + $(window).height() / 2 - $(this).find('.language__content').height()/2).find('h3').css('margin-top', "-1rem");
		}

	});

	$('.language__content').on('click', function(e){
		e.stopPropagation();
		$(this).parent().removeClass('opened');
	});

	$(document).on('mouseover', '.language__item.active--hover, .otf-item',  function(e){
		var parentPos = $(this).parent().offset(),
				childrenPos = $(this).offset(),
				dotDisplacementX = $(this).outerWidth() / 2 - $('.otf-dot').width()/2,
				dotDisplacementY = $(this).outerHeight() / 2 - $('.otf-dot').height()/2,
				childrenTop = childrenPos.top - parentPos.top + dotDisplacementY,
				childrenLeft = childrenPos.left - parentPos.left + dotDisplacementX;

				if($(this).hasClass('active--hover')){
					$('.flying-dot').css({
						left: childrenLeft,
						top: childrenTop
					})
				}else{
					$('.otf-dot').css({
						left: childrenLeft,
						top: childrenTop + dotDisplacementY / 2
					})
				}
	});

	$('.languages-list').on('mouseleave', function(e){
		e.stopPropagation();
		$('.flying-dot').css({
			left: 0,
			top: 0
		})
	});
	$('.otf-list').on('mouseleave', function(e){
		e.stopPropagation();
		$('.otf-dot').css({
			left: 0,
			top: 0
		})
	});


		// Show alphabetical selector if touchable device
		var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
		if (mobile) {
			$('body').addClass('is-touchable');

			$('.otf-item:first-child').trigger('mouseover');
		}else{
			$('body').addClass('no-touchable');
		}

		$('.js-alphabet').on('click', function(){
			// $(this).parent().addClass('filtering')
			console.log($(this).data('letter'));
			$(this).parent().attr('data-filter', $(this).data('letter'));
			$('.languages-list').attr('data-view', $(this).data('letter'))
		});

	// $('.languages-list').on('mousemove', function(e){

	// 	var xPos = e.pageX;
	// 	var yPos = e.pageY;
	// 	elem = document.elementFromPoint(xPos, yPos);
	// 	var top = elem.getBoundingClientRect().viewportOffset.top;
	// 	var left = elem.getBoundingClientRect().viewportOffset.left;
	// 	// elem.style.color = newColor;
	// 	console.log(elem);
	// 	// console.log(elem.height());
	// 	console.log(elem.offsetHeight);
	// 	console.log(elem.clientHeight);
	// 	console.log(top);
	// 	console.log(left);
	// 	console.log(getPosition);

	// });
	// End Move the dot for languages options




// Scrollmagic movements
	// init ScrollMagic Controller
	// var controller = new ScrollMagic.Controller();


	// Show/Hide navigation
	// var nav = new ScrollMagic.Scene({
	// 	triggerElement: '.section--intro',
	// 	triggerHook: .5
	// })
	// // .setPin('.nav--main')
	// .setClassToggle('.nav--main', 'visible')
	// .addTo(controller);
	// End Show/Hide navigation

	// Show images on scroll
	// $('.animated--img').each(function(){
	// 	var imgs = new ScrollMagic.Scene({
	// 		triggerElement: this,
	// 		triggerHook: .6,
	// 		reverse: false
	// 	})
	// 	.setClassToggle(this, 'show-img')
	// 	.addTo(controller);
	// });
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
	// $('.otf-list').each(function(){
	// 	var textShowing = new ScrollMagic.Scene({
	// 		triggerElement: this,
	// 		triggerHook: .5,
	// 		reverse: false
	// 	})
	// 	.setClassToggle(this, 'animation-in')
	// 	.addTo(controller);
	// });

	// $('.content-text, .styles-list, .section--author h2').each(function(){
	// 	var introText = TweenLite.fromTo($(this), 1.5, {
	// 		y: 40,
	// 		autoAlpha: 0,
	// 		ease: Power2.easeInOut
	// 	}, {
	// 		y: 0,
	// 		autoAlpha: 1,
	// 		ease: Power2.easeInOut
	// 	});
	// 	var textShowing = new ScrollMagic.Scene({
	// 		triggerElement: this,
	// 		triggerHook: .85,
	// 		reverse: false
	// 	})
	// 	.setTween(introText)
	// 	.addTo(controller);
	// });

		// $('.section--author').each(function(){
		// 	var textShowing = new ScrollMagic.Scene({
		// 	triggerElement: this,
		// 		triggerHook: .5,
		// 	})
		// 	.setClassToggle('body', 'author--view')
		// 	.addTo(controller);
		// });
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
	// $('.section--florished').each(function(){
	// 	var florish = new ScrollMagic.Scene({
	// 		triggerElement: this,
	// 		triggerHook: .7,
	// 		reverse: false
	// 	})
	// 	.setClassToggle(this, 'run-animation')
	// 	.addTo(controller);
	// });
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

	// $('.section--intro').each(function(){
	// 	var intro = new ScrollMagic.Scene({
	// 		triggerElement: '.section--intro',
	// 		triggerHook: .85,
	// 		reverse: false
	// 	})
	// 	.setClassToggle('.capitular-letter', 'animation-in')
	// 	.setTween(TweenLite.fromTo($(this).find('p'), 1.5, {
	// 		y: 40,
	// 		autoAlpha: 0,
	// 		ease: Power2.easeInOut,
	// 	}, {
	// 		y: 0,
	// 		autoAlpha: 1,
	// 		ease: Power2.easeInOut,
	// 		delay: 1.5
	// 	}))
	// 	.addTo(controller);
	// })
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
	$('.otf-item.otf--'+$(this).data('otf')).show().css({
		display: 'flex'
	});
	$(this).parent().attr('data-otf', $(this).data('otf'));

	$('.otf-item').removeClass('otf--active');
	$('.otf--'+$(this).data('otf')).first().addClass('otf--active').trigger('mouseover');
});

var moveScroll;
function doneResizing(){
	console.log($('.nav__item--active').data('section'));
	scrollbar.scrollTo(null, scrollbar.offset.y +$('.section--' + $('.nav__item--active').data('section')).offset().top , 1000);
}
$(window).on('resize', function(){

		clearTimeout(moveScroll);
		moveScroll = setTimeout(doneResizing, 200);

	// Recalculating position for the over the folder letter grid
	totalWidth = $(window).width() - 36;
	totalHeight = $(window).height() - 36 ; // css padding space
	path1 = [
		{ // 0
			x:82.6 * totalWidth/100,
			y:25.2 * totalHeight/100
		}, {
			x:82.1 * totalWidth/100,
			y:25.4 * totalHeight/100
		}, {
			x:81.7 * totalWidth/100,
			y:24.4 * totalHeight/100
		},{
			x:82.3 * totalWidth/100,
			y:24 * totalHeight/100
		},{
			x:82.1 * totalWidth/100,
			y:25 * totalHeight/100
		},{
			x:82.2 * totalWidth/100,
			y:25 * totalHeight/100
		},{
			x:82.7 * totalWidth/100,
			y:21.75 * totalHeight/100
		},{
			x:81* totalWidth/100,
			y:22.53 * totalHeight/100
		},{
			x:82.5 * totalWidth/100,
			y:24.68 * totalHeight/100
		},{
			x:81.1 * totalWidth/100,
			y:28.86 * totalHeight/100
		},{ // 10
			x:81.2 * totalWidth/100,
			y:28.35 * totalHeight/100
		},{
			x:80 * totalWidth/100,
			y:37.21 * totalHeight/100
		},{
			x:81.7 * totalWidth/100,
			y:46.07 * totalHeight/100
		},{
			x:81.9 * totalWidth/100,
			y:62.65 * totalHeight/100
		},{
			x:79 * totalWidth/100,
			y:74.43 * totalHeight/100
		},{
			x:82.1 * totalWidth/100,
			y:75.82 * totalHeight/100
		},{
			x:82.8 * totalWidth/100,
			y:79.11 * totalHeight/100
		},{
			x:81.8 * totalWidth/100,
			y:79.74 * totalHeight/100
		},{
			x:82.4 * totalWidth/100,
			y:77.72 * totalHeight/100
		},{
			x:79.8 * totalWidth/100,
			y:68.22 * totalHeight/100
		},{//20
			x:78 * totalWidth/100,
			y:59.24 * totalHeight/100
		},{
			x:74.7 * totalWidth/100,
			y:52.53 * totalHeight/100
		},{
			x:66.9 * totalWidth/100,
			y:45.82 * totalHeight/100
		},{
			x:59.8 * totalWidth/100,
			y:40.50 * totalHeight/100
		},{
			x:55.3 * totalWidth/100,
			y:37.72 * totalHeight/100
		},{
			x:57.4 * totalWidth/100,
			y:26.83 * totalHeight/100
		},{
			x:62.6 * totalWidth/100,
			y:21.49 * totalHeight/100
		},{
			x:68.9 * totalWidth/100,
			y:24.2 * totalHeight/100
		},{
			x:76.7 * totalWidth/100,
			y:25.17 * totalHeight/100
		},{
			x:79.6 * totalWidth/100,
			y:23.53 * totalHeight/100
		},{//30
			x:82.8 * totalWidth/100,
			y:21.40 * totalHeight/100
		},{
			x:82.4 * totalWidth/100,
			y:21.81 * totalHeight/100
		},{
			x:78.1 * totalWidth/100,
			y:21.22 * totalHeight/100
		},{
			x:82.7 * totalWidth/100,
			y:22.87 * totalHeight/100
		},{
			x:82.1 * totalWidth/100,
			y:24.17 * totalHeight/100
		},{
			x:82.2 * totalWidth/100,
			y:27.59 * totalHeight/100
		},{
			x:82.5 * totalWidth/100,
			y:29.74 * totalHeight/100
		},{
			x:79.5* totalWidth/100,
			y:32.02 * totalHeight/100
		},{
			x:77.3* totalWidth/100,
			y:35.69 * totalHeight/100
		},{
			x:71.7* totalWidth/100,
			y:39.62 * totalHeight/100
		},{ //40
			x:69.3* totalWidth/100,
			y:45.31 * totalHeight/100
		},{
			x:68.3* totalWidth/100,
			y:51.01 * totalHeight/100
		},{
			x:68.6* totalWidth/100,
			y:55.82 * totalHeight/100
		},{
			x:68.9* totalWidth/100,
			y:62.91 * totalHeight/100
		},{
			x:68.4* totalWidth/100,
			y:68.22 * totalHeight/100
		},{
			x:67.9* totalWidth/100,
			y:71.89 * totalHeight/100
		},{
			x:66.9* totalWidth/100,
			y:75.56 * totalHeight/100
		},{
			x:65.7* totalWidth/100,
			y:76.7 * totalHeight/100
		},{
			x:63.3* totalWidth/100,
			y:76.45 * totalHeight/100
		},{
			x:61* totalWidth/100,
			y:77.21 * totalHeight/100
		},{//50
			x:56.1* totalWidth/100,
			y:78.1 * totalHeight/100
		},{
			x:45.6* totalWidth/100,
			y:77.46 * totalHeight/100
		},{
			x:40.2* totalWidth/100,
			y:75.18 * totalHeight/100
		},{
			x:31* totalWidth/100,
			y:70 * totalHeight/100
		},{
			x:28* totalWidth/100,
			y:63.41 * totalHeight/100
		},{
			x:28* totalWidth/100,
			y:57.84 * totalHeight/100
		},{
			x:28* totalWidth/100,
			y:57.08 * totalHeight/100
		},{
			x:30* totalWidth/100,
			y:57.72 * totalHeight/100
		},{
			x:30* totalWidth/100,
			y:58.1 * totalHeight/100
		},{
			x:30* totalWidth/100,
			y:59.49 * totalHeight/100
		},{ //60
			x:31* totalWidth/100,
			y:56.45 * totalHeight/100
		},{
			x:31.1* totalWidth/100,
			y:53.92 * totalHeight/100
		},{
			x:41.4* totalWidth/100,
			y:48.6 * totalHeight/100
		},{
			x:51.5* totalWidth/100,
			y:46.2 * totalHeight/100
		},{
			x:58.2* totalWidth/100,
			y:44.3 * totalHeight/100
		},{
			x:59.1* totalWidth/100,
			y:43.54 * totalHeight/100
		},{
			x:57.4* totalWidth/100,
			y:42.4 * totalHeight/100
		},{
			x:55.5* totalWidth/100,
			y:41.39 * totalHeight/100
		},{
			x:51.7* totalWidth/100,
			y:40 * totalHeight/100
		},{
			x:47.4* totalWidth/100,
			y:35.69 * totalHeight/100
		},{ //70
			x:40.5* totalWidth/100,
			y:30.50 * totalHeight/100
		},{
			x:33.6* totalWidth/100,
			y:23.16 * totalHeight/100
		},{
			x:28.8* totalWidth/100,
			y:20.18 * totalHeight/100
		},{
			x:28* totalWidth/100,
			y:21.96 * totalHeight/100
		},{
			x:29.2* totalWidth/100,
			y:23.87 * totalHeight/100
		},{
			x:30.2* totalWidth/100,
			y:21.49 * totalHeight/100
		},{
			x:31* totalWidth/100,
			y:22.53 * totalHeight/100
		},{
			x:31.2* totalWidth/100,
			y:24.68 * totalHeight/100
		},{
			x:31.7* totalWidth/100,
			y:32.53 * totalHeight/100
		},{
			x:31.8* totalWidth/100,
			y:36.07 * totalHeight/100
		},{ //80
			x:33.7* totalWidth/100,
			y:37.72 * totalHeight/100
		},{
			x:32.67* totalWidth/100,
			y:29.74 * totalHeight/100
		},{
			x:30.29* totalWidth/100,
			y:23.92 * totalHeight/100
		},{
			x:31.56* totalWidth/100,
			y:22.91 * totalHeight/100
		},{
			x:28.99* totalWidth/100,
			y:29.11 * totalHeight/100
		},{
			x:31.49* totalWidth/100,
			y:37.59 * totalHeight/100
		},{
			x:34.44* totalWidth/100,
			y:43.03 * totalHeight/100
		},{
			x:44.25* totalWidth/100,
			y:48.10 * totalHeight/100
		},{
			x:52.39* totalWidth/100,
			y:51.13 * totalHeight/100
		},{
			x:52.07* totalWidth/100,
			y:52.91 * totalHeight/100
		},{ //90
			x:51.67* totalWidth/100,
			y:53.92 * totalHeight/100
		},{
			x:54.22* totalWidth/100,
			y:53.92 * totalHeight/100
		},{
			x:57.57* totalWidth/100,
			y:53.92 * totalHeight/100
		},{
			x:60.04* totalWidth/100,
			y:39.11 * totalHeight/100
		},{
			x:63.39* totalWidth/100,
			y:32.27 * totalHeight/100
		},{
			x:63.39* totalWidth/100,
			y:24.68 * totalHeight/100
		},{
			x:74.64* totalWidth/100,
			y:20.50 * totalHeight/100
		},{
			x:75.11* totalWidth/100,
			y:20.75 * totalHeight/100
		},{
			x:76.9* totalWidth/100,
			y:20.88 * totalHeight/100
		},{
			x:79.5* totalWidth/100,
			y:20.88 * totalHeight/100
		},{ //100
			x:80.86* totalWidth/100,
			y:21.51 * totalHeight/100
		},{
			x:81.18* totalWidth/100,
			y:21.64 * totalHeight/100
		},{
			x:81.33* totalWidth/100,
			y:22.02 * totalHeight/100
		},{
			x:81.25* totalWidth/100,
			y:23.79 * totalHeight/100
		},{
			x:81.25* totalWidth/100,
			y:29.74 * totalHeight/100
		},{
			x:79.98* totalWidth/100,
			y:33.79 * totalHeight/100
		},{
			x:79.34* totalWidth/100,
			y:40.25 * totalHeight/100
		},{
			x:77.51* totalWidth/100,
			y:49.24 * totalHeight/100
		},{
			x:75.83* totalWidth/100,
			y:53.41 * totalHeight/100
		},{
			x:71.92* totalWidth/100,
			y:64.43 * totalHeight/100
		},{ //110
			x:68.5* totalWidth/100,
			y:73.54 * totalHeight/100
		},{
			x:68.89* totalWidth/100,
			y:78.48 * totalHeight/100
		},{
			x:69.85* totalWidth/100,
			y:76.2 * totalHeight/100
		},{
			x:72.96* totalWidth/100,
			y:73.41 * totalHeight/100
		},{
			x:81.49* totalWidth/100,
			y:68.22 * totalHeight/100
		},{//115
			x:80.48* totalWidth/100,
			y:63.16 * totalHeight/100
		},{
			x:82* totalWidth/100,
			y:61.39 * totalHeight/100
		},{
			x:81.24* totalWidth/100,
			y:64.43 * totalHeight/100
		},{
			x:81.04* totalWidth/100,
			y:70.37 * totalHeight/100
		},{
			x:80.94* totalWidth/100,
			y:75.56 * totalHeight/100
		},{//120
			x:76.39* totalWidth/100,
			y:72.65 * totalHeight/100
		},{
			x:69.37* totalWidth/100,
			y:63.41 * totalHeight/100
		},{
			x:59.56* totalWidth/100,
			y:58.10 * totalHeight/100
		},{
			x:48.08* totalWidth/100,
			y:62.15 * totalHeight/100
		},{
			x:46.17* totalWidth/100,
			y:59.24 * totalHeight/100
		},{
			x:52.15* totalWidth/100,
			y:43.67 * totalHeight/100
		},{
			x:58.61* totalWidth/100,
			y:30 * totalHeight/100
		},{
			x:48.48* totalWidth/100,
			y:29.36 * totalHeight/100
		},{
			x:46.25* totalWidth/100,
			y:29.36 * totalHeight/100
		},{
			x:53.66* totalWidth/100,
			y:27.34 * totalHeight/100
		},{ //130
			x:65.55* totalWidth/100,
			y:25.06 * totalHeight/100
		},{
			x:74* totalWidth/100,
			y:21.21 * totalHeight/100
		},{
			x:80.38* totalWidth/100,
			y:21.84 * totalHeight/100
		},{
			x:81.72* totalWidth/100,
			y:25.56 * totalHeight/100
		},{
			x:79.5* totalWidth/100,
			y:52.15 * totalHeight/100
		},{
			x:71.21* totalWidth/100,
			y:59.24 * totalHeight/100
		},{
			x:60.76* totalWidth/100,
			y:67.08 * totalHeight/100
		},{
			x:45.93* totalWidth/100,
			y:72.40 * totalHeight/100
		},{
			x:41.7* totalWidth/100,
			y:74.68 * totalHeight/100
		},{
			x:34.68* totalWidth/100,
			y:78.22 * totalHeight/100
		},{ //140
			x:28.38* totalWidth/100,
			y:79.74 * totalHeight/100
		},{
			x:28.38* totalWidth/100,
			y:69.74 * totalHeight/100
		},{
			x:40.43* totalWidth/100,
			y:50.88 * totalHeight/100
		},{
			x:59.17* totalWidth/100,
			y:39.62 * totalHeight/100
		},{
			x:68.97* totalWidth/100,
			y:35.94 * totalHeight/100
		},{
			x:52.55* totalWidth/100,
			y:27.97 * totalHeight/100
		},{
			x:38.11* totalWidth/100,
			y:20 * totalHeight/100
		},{
			x:30.18* totalWidth/100,
			y:25.22 * totalHeight/100
		},{
			x:30.67* totalWidth/100,
			y:26.50 * totalHeight/100
		},{
			x:29.62* totalWidth/100,
			y:23.67 * totalHeight/100
		},{//150
			x:29.5* totalWidth/100,
			y:26.45 * totalHeight/100
		},{
			x:49.52* totalWidth/100,
			y:28.48 * totalHeight/100
		},{
			x:59.64* totalWidth/100,
			y:31.01 * totalHeight/100
		},{
			x:65.78* totalWidth/100,
			y:29.36 * totalHeight/100
		},{
			x:69.45* totalWidth/100,
			y:27.34 * totalHeight/100
		},{
			x:73.12* totalWidth/100,
			y:26.83 * totalHeight/100
		},{
			x:78.38* totalWidth/100,
			y:26.07 * totalHeight/100
		},{
			x:80.30* totalWidth/100,
			y:25.69 * totalHeight/100
		},{
			x:80.54* totalWidth/100,
			y:25.56 * totalHeight/100
		},{
			x:80.70* totalWidth/100,
			y:26.7 * totalHeight/100
		},{//160
			x:79.02* totalWidth/100,
			y:28.6 * totalHeight/100
		},{
			x:76.47* totalWidth/100,
			y:30.37 * totalHeight/100
		},{
			x:74.40* totalWidth/100,
			y:32.65 * totalHeight/100
		},{
			x:73.76* totalWidth/100,
			y:35.06 * totalHeight/100
		},{
			x:73.44* totalWidth/100,
			y:37.97 * totalHeight/100
		},{
			x:73.36* totalWidth/100,
			y:40 * totalHeight/100
		},{
			x:73.68* totalWidth/100,
			y:43.79 * totalHeight/100
		},{
			x:74.56* totalWidth/100,
			y:47.59 * totalHeight/100
		},{
			x:75.91* totalWidth/100,
			y:51.01 * totalHeight/100
		},{
			x:78.62* totalWidth/100,
			y:55.04 * totalHeight/100
		},{//170
			x:81.97* totalWidth/100,
			y:58.45 * totalHeight/100
		},{
			x:80.09* totalWidth/100,
			y:63.03 * totalHeight/100
		},{
			x:80.41* totalWidth/100,
			y:71.26 * totalHeight/100
		},{
			x:81.1* totalWidth/100,
			y:73.92 * totalHeight/100
		},{
			x:78.22* totalWidth/100,
			y:75.69 * totalHeight/100
		},{
			x:71.61* totalWidth/100,
			y:75.94 * totalHeight/100
		},{
			x:67.86* totalWidth/100,
			y:73.92 * totalHeight/100
		},{
			x:60.12* totalWidth/100,
			y:73.16 * totalHeight/100
		},{
			x:55.02* totalWidth/100,
			y:73.67 * totalHeight/100
		},{//180
			x:50.39* totalWidth/100,
			y:74.93 * totalHeight/100
		},{
			x:46.57* totalWidth/100,
			y:74.81 * totalHeight/100
		},{
			x:46.41* totalWidth/100,
			y:74.81 * totalHeight/100
		},{
			x:45.93* totalWidth/100,
			y:75.31 * totalHeight/100
		},{
			x:45.69* totalWidth/100,
			y:75.69 * totalHeight/100
		},{
			x:45.21* totalWidth/100,
			y:75.82 * totalHeight/100
		},{
			x:45.21* totalWidth/100,
			y:74.68 * totalHeight/100
		},{
			x:48.72* totalWidth/100,
			y:65.06 * totalHeight/100
		},{
			x:77.51* totalWidth/100,
			y:61.89 * totalHeight/100
		},{
			x:99.92* totalWidth/100,
			y:66.07  * totalHeight/100
		},
	]
	// End Recalculating position for the over the folder letter grid

	if($(window).width() >= 1024){
		$('.otf-item').show().removeClass('otf--active');
	}

	//Reset script height on resize to avoid elements overlapping
	$('.scripts-list').height($('.script:first-of-type').height());

	if(mobile){
		$('.otf-item.otf--active').trigger('mouseover');
	}

})
// End OTF category selector: Letters, numbers & symbols

// Typetester scripts

	window.onload = function(){

		// var glyphs = function(){
		// 	if($('.glyph').length != 0){
		// 		var glyphTable = $('.glyph-table');
		// 		glyphTable.detach();

		// 		clearInterval(gettingGlyphs);

		// 		$('.test').on('click', function(e){
		// 			e.preventDefault();
		// 			$('.glyphs-wrapper').addClass('glyph-view').append(glyphTable);
		// 		});
		// 	}
		// }
		// var gettingGlyphs = setInterval(glyphs, 1000);

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
		proportionalLH();

		var sliderTT = function(){
			if($('.specimen-slider').length != 0){
				$( ".specimen-slider" ).bind('input change keyup mousemove',function() {
					var value = $( this ).val();
					var slideValue = value;

					var tooltipMov = slideValue - $(this).attr('min');
					var tooltipProp = $(this).attr('max') - $(this).attr('min');
					$( this ).parent().prev().css({
						'left': (tooltipMov/ tooltipProp ) * ($(this).width() - 12)  + 7 + 'px'
					});


					// Incremental value when you reach highest values
					if($(this).val() >= 158){
						$(this).attr('step', 10);
					}else if($(this).val() >= 138){
						$(this).attr('step', 8);
					}else if($(this).val() >= 98){
						$(this).attr('step', 6);
					}else if($(this).val() >= 78){
						$(this).attr('step', 4);
					}else if($(this).val() >= 38){
						$(this).attr('step', 2);
					}else{
						$(this).attr('step', 1);
					}
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

	$( ".languages-list" ).load( "languages-list.html .languages-list > *", function(){
		languages = $('.languages-list').detach();
	});

});


