

window.onload = function () {
	
	var indicator = document.getElementById("indicator");
	indicator.style.visibility = "hidden";
	

};



function getFeed(){
	var indicator = document.getElementById("indicator");
	indicator.style.visibility = "visible";
    var width = screen.width;
	 var FEED_URL = "http://www.3dnews.ru/news/rss/";

	 
	 $(document).ready(function () {
		    $.ajax({
		        type: "GET",
		        url: FEED_URL,
		        dataType: "xml",
		        success: xmlParser
		    });
		});

		function xmlParser(xml) {

			indicator.style.display = "none";
		    $(xml).find("item").each(function () {
		    	  var url =  $(this).find("enclosure").attr('url')

		        $("#rssContent").append('<div class="feed"><div class="image"><img src=' + url + ' width=40% align="left"  vspace="5" hspace="5 /><div class="title" > Title:' + $(this).find("title").text() 
		        		+ '</div><br><div class="description" >Desc: ' + $(this).find("description").text() + '</div><br><div class="time">'+$(this).find("pubDate").text().substr(17,8)+' '+$(this).find("pubDate").text().substr(5,11)+'</div></div>');
		       

		    });

		}

}