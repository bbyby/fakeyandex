$(document).ready(function() {
	
	$('.close').click(function(){
		$('.tools-bar').slideUp(100);
	});
	
	$('.h-t-item-1').click(function() {
		$(this).parent().parent().parent().find('.news-tab-items-1').css('display', 'block');
		$(this).parent().parent().parent().find('.news-tab-items-2').css('display', 'none');
		$(this).addClass('active-tab-btn');
		$(this).parent().parent().parent().find('.h-t-item-2').removeClass('active-tab-btn')
	});
	
	$('.h-t-item-2').click(function() {
		$(this).parent().parent().parent().find('.news-tab-items-2').css('display', 'block');
		$(this).parent().parent().parent().find('.news-tab-items-1').css('display', 'none');
		$(this).addClass('active-tab-btn');
		$(this).parent().parent().parent().find('.h-t-item-1').removeClass('active-tab-btn')
	});
	
	$('.start-page > a').click(function() {
		$(this).parent().hide();
	});	
	
	$('.promo-theme > a, .promo-theme > span').click(function() {
		$(this).parent().hide(300);
	});
	
	$('.acc-settings').click(function() {
		$(this).find('.acc-gear').toggleClass('acc-gear-press');
		$(this).find('.acc-menu').fadeToggle(200);
	});
	
	$('.m-arrow-up').click(function() {
		$(this).parent().parent().parent().find('.mailbox-wrapper').show(200);
		$(this).parent().parent().parent().find('.mailbox-menu').fadeToggle(200);
	});
	
	$('.m-arrow-down').click(function() {
		$(this).parent().parent().find('.mailbox-menu').show(200);
		$(this).parent().parent().find('.mailbox-wrapper').fadeToggle(200);
	});
	
	$('.search-input').focus(function() {
		$('.input-bar').css('border','1px solid #DAA520');
	});
	
	$('.search-input').blur(function() {
		$('.input-bar').css('border','1px solid lightgrey');
	});
	
	$('.keyboard').hover(function() {
		$(this).css('opacity', '0.5');
	},
	function(){
		$(this).css('opacity', '1');
	});
});