//toggle header on main pages
function toggleHeader() {
	//scroll to top
	window.scrollTo(0, 0);
	
	var e = document.getElementById('headerContent');
	var f = document.getElementById('headerFail');
	var g = document.getElementById('mobileMenu');

	//toggle header
	if(e.style.display == 'block') {
		e.style.display = 'none';
		f.style.display = 'none';
		g.src = 'images/menu.png';
	}
	else {
		e.style.display = 'block';
		f.style.display = 'block';
		g.src = 'images/menu_x.png';
	}
}

//toggle header on sub (art) pages
function toggleHeaderArtWork() {
	//scroll to top
	window.scrollTo(0, 0);
	
	var e = document.getElementById('headerContent');
	var f = document.getElementById('headerFail');
	var g = document.getElementById('mobileMenu');

	//toggle header
	if(e.style.display == 'block') {
		e.style.display = 'none';
		f.style.display = 'none';
		g.src = '../images/menu.png';
	}
	else {
		e.style.display = 'block';
		f.style.display = 'block';
		g.src = '../images/menu_x.png';
	}
}

//click to copy text
function copyToClipboard(id, notification) {
	
	//set up area that can be copied
	var copyText = document.createRange();
	copyText.selectNode(document.getElementById(id));
	
	//copy the text
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(copyText);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	
	//user feedback confirming that the text was copied
	var popup = document.getElementsByClassName(notification)[0];
	popup.style.opacity = "1";
	setTimeout(function() {
		popup.style.opacity = "0";
	}, 3000)
}