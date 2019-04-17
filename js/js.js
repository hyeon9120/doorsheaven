 $(document).ready(function(){
   $(".desktop_gnb").hover(function(){
     $(".all_sub_menu").slideDown(200)
   }, function(){

   });
	$(".all_sub_menu").mouseleave(function(){
		$(".all_sub_menu").stop().slideUp(200);
	});
 })
