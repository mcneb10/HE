/**
	WARNING:
	This will NOT work in certain browsers such as IE. Some elements may not work with: Microsoft Edge, Safari.
*/
//Add HE css to make some elements function
document.body.innerHTML = "<link rel='stylesheet' href=''>"+document.body.innerHTML;
function createTagWithJS(name, func) {
	document.createElement(name);
	var ti = document.getElementsByTagName(name);
	for (var i = 0; i < ti.length; i++) {
		func(ti[i]);
	}
}
function meme(element) {
	if (
		element.attributes.src &&
		element.attributes.text &&
		element.attributes.height &&
		element.attributes.width
	) {
		var pos = (parseInt(element.attributes.width.value, 10) / 1.11).toString();
		var message = element.attributes.text.value;
		if (message.length > 30) {
			message = message.substring(0, 29);
		}
		var fontsize = (
			parseInt(element.attributes.width.value, 10) /
			(message.length / 1.5)
		).toString();
		element.style.fontfamily = "Impact,Charcoal,sans-serif";
		element.style.color = "white";
		element.innerHTML =
			"<img alt='this meme has died young' height=" +
			element.attributes.height.value +
			" width=" +
			element.attributes.height.value +
			" src='" +
			element.attributes.src.value +
			"'></img><strong style='position: relative; right: " +
			pos +
			"px;font-size:" +
			fontsize +
			"px; text-align:left;'>" +
			message.toUpperCase() +
			"</strong>";
	}
}
createTagWithJS("meme", meme);
createTagWithJS("blinking", function(element) {
	setInterval(function() {
		if (element.style.visibility == "") {
			element.style.visibility = "hidden";
		} else {
			element.style.visibility = "";
		}
	}, parseInt(element.attributes.interval.value, 10));
});
createTagWithJS("accordion", function(element) {
	var text = element.innerHTML;
	element.innerHTML =
		"<details style='border:solid black 1px;'><summary>" +
		element.attributes.ot.value +
		"</summary><p>" +
		text +
		"</p></details>";
});
createTagWithJS("overtext", function(element) {
	var text = element.innerHTML;
	var over = element.attributes.text.value;
	element.innerHTML = "<ruby>" + text + "<rt>" + over + "</rt></ruby>";
});
createTagWithJS("include", function(element) {
	var src = element.attributes.src.value;
	var style = element.style.cssText;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				element.innerHTML =
					"<div style='" + style + "'>" + this.responseText + "</div>";
			} else {
				element.innerHTML =
					"<div style='" +
					style +
					"'><h3 style='color:red;'>Error</h3><br/>Status code: " +
					this.status +
					"</div>";
			}
		}
	};
	xhttp.open("GET", src, true);
	xhttp.send();
});
createTagWithJS("location", function(element) {
	function doLocation(position) {
		element.innerHTML =
			element.innerHTML +
			"Latitude: " +
			position.coords.latitude +
			" Longitude: " +
			position.coords.longitude;
	}
	createTagWithJS("setcookie", function(element) {
		element.querySelector('input[type="submit"]').onclick = function() {
			var name = element.attributes.name.value;
			var value = element.querySelector('input[type="text"]').value;
			var d = new Date();
			d.setTime(d.getTime() + 31536000);
			var expires = "expires=" + d.toUTCString();
			document.cookie = name + "=" + value + ";" + expires + ";path=/";
		};
	});
	navigator.geolocation.getCurrentPosition(doLocation);
});
function dropdown(cap) {
 console.log(cap);
	var jd = false;
	if (document.getElementById(cap).style.display === "none") {
		document.getElementById(cap).style.display = "block";
		jd=true;
	}
	if (document.getElementById(cap).style.display === "block" && !jd) {
		document.getElementById(cap).style.display = "none";
	}
	jd=false;
}
createTagWithJS("dropdown", function(element) {
	var t = element.innerHTML;
	var cap = element.attributes.cap.value;
	var p = "dropdown('" + cap + "');";
	element.innerHTML =
		'<div><button onclick="' +
		p +
		'" class="'+cap+' dropb">' +
		cap +
		'</button><div id="' +
		cap +
		'" style="display:none;z-index:1;" class="'+cap+'-dc">' +
		t +
		"</div></div>";
});
function popup(id) {	
	console.log(id);
var popup = document.getElementById(id);
  popup.classList.toggle("show");
}
createTagWithJS("popupbutton",function(element) {
	var bt = element.attributes.bt.value;
	var pt = element.attributes.pt.value;
	var f = "popup('"+bt+"');";
	element.innerHTML = '<div class="popup" onclick="'+f+'">'+bt+'<span class="popuptext" id="'+bt+'">'+pt+'</span></div>';
	console.log(element.innerHTML);
});
/**
W.I.P
function check(text) {
	var badwords = new Array("testbadword");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				console.log(this.responseText);
			} else {			badwords.push(this.reponseText);
			}
		}
	};
	xhttp.open("GET", "https://raw.githubusercontent.com/mcneb10/codec-jetty/gh-pages/text.txt",true);
	xhttp.send();
	var i =0;
	for(i<badwords.length;i++)     {
		text = text.replace(badwords[i]);
	}
}
createTagWithJS("cp",function(element) {
	element.innerHTML = check(element.innerHTML);
}); */
createTagWithJS("b3",function(element){
	element.outerHTML=element.outerHTML.replace("<b3", "<button class='b3'").replace("</b3", "</button");
});