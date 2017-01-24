$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

(function(){
	
	var searchbutton = document.getElementById("search-button");
	if(searchbutton)
	{
		searchbutton.onclick = function(){
		location.href = "searchresults.html";
		};
	}
})();