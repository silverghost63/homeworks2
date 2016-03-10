$(document).ready(function() {

	/* Initialize Swiper */
	var swiperh = new Swiper('#home__swiper-container', {
		pagination: '.swiper-pagination',
		direction: 'vertical',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 0,
		mousewheelControl: false,
		effect: 'fade',
		autoplay: 5000
	});
	var swiperf = new Swiper('#features__swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true			
	});	
	
});