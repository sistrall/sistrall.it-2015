$(document).ready(function(){var t="http://api.facebook.com/restserver.php?method=links.getStats&urls="+$("meta[property='og:url']").attr("content");$.getJSON(t,{format:"json"}).done(function(t){$("[js-meta--like-count]").each(function(){$(this).html(t[0].like_count)})})});