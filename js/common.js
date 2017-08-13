$(document).ready(function() {
	
	/* popup */

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	/* slider */

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.sliderNav'
	});

	$('.sliderNav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider',
		dots: false,
		arrows: true,
		vertical: true,
		centerMode: true,
		focusOnSelect: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					vertical: false,
					slidesToShow: 4,
					focusOnSelect: true,
					centerMode: false,
				}
			}
		]
	});

	$('.ribbon-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrow: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/* tabs */

	var wrap = $('.tab__wrapper'),
			tabs = $('.tab__wrapper').find('.tab__content > div'),
			menu = $('.tab__wrapper').find('.tab__menu li');

	tabs.not(':first-of-type').hide();
	
	menu.each(function(i){
		$(this).attr('data-tab', 'tab' + i);
	});

	tabs.each(function(i){
		$(this).attr('data-tab', 'tab' + i);
	});

	menu.on('click', function(){

		var dataTab = $(this).data('tab'),
				getWrap = $(this).closest('.tab__wrapper');

		getWrap.find('.tab__menu > li').removeClass('is-active');
		$(this).addClass('is-active');

		getWrap.find('.tab__content > div').hide();
		getWrap.find(tabs).filter('[data-tab='+dataTab+']').show();

	});

	/* menu */

	$('.open').on('click', function(e){
		e.preventDefault();
		$(this).next().slideToggle();
		$(this).toggleClass('top');
	});

	$('.burger').on('click', function(){
		$('.mobile__list').addClass('visible');
	});
	$('.close').on('click', function(){
		$('.mobile__list').removeClass('visible');
	});

});