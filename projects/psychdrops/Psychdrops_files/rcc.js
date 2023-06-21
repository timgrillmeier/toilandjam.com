var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// VARS 		******************************************************************
var circles = new Array();

var resizeAtRest = true;
var resizeGuardInterval;
var secSinceResize = 0;

var mouseMoveCount = 0;
var ranCircle = 0;

var keydown = false;



// EVENTS 		******************************************************************
window.onload = function()
{
	initCanvas();
	initAnimation();
	setInterval(function(){
		console.clear();
		console.log(circles.length);
	}, 1000);
	keydown = true;
}

document.onmousemove = function(e)
{
	keydown = false;
	eventGuard(e);
	mouseMoveCount++;
	if(mouseMoveCount % 5 == 0)
	{
		var mouseCoordinates = getMouseCoordinates(e);
		initCircle(mouseCoordinates);
	}
}

document.onkeydown = function()
{
	keydown = true;
}

document.onkeyup = function()
{
	keydown = false;
}



// FUNCTIONS 	******************************************************************
function eventGuard(e) 
{
	secSinceResize = 0;

	if (resizeAtRest) {
		resizeAtRest = false;
		resizeGuardInterval = setInterval(function()
		{
			secSinceResize += 0.1;
			if (secSinceResize > 0.2) {
				resizeAtRest = true;
			}
			if (resizeAtRest) {
				clearInterval(resizeGuardInterval);

				// Code here will run once window resizing is finished.
				var mouseCoordinates = getMouseCoordinates(e);
				initCircle(mouseCoordinates);
				keydown = true;
			}

		}, 2000);
	}
}


function initCanvas()
{
	var res = getWindowResolution();
	var canvas = document.getElementById('rcc');
	canvas.setAttribute('width',res.w+'px');
	canvas.setAttribute('height',res.h+'px');
}

function initAnimation()
{
	setInterval('animationFrame()',10);
}

function animationFrame()
{
	// Draw black background
	var canvas = document.getElementById('rcc');
	var res = getWindowResolution();
	
	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		context.beginPath();
		context.rect(0, 0, res.w, res.h);
		context.fillStyle = '#111';
		context.fill();
	}

	updateCircles();
	drawCircles();
	initRanCircles();
}

function initRanCircles()
{
	ranCircle++;
	if (keydown == true && ranCircle % 30 == 0)
	{
		var res = getWindowResolution();
		var x = Math.floor(Math.random()*res.w);
		var y = Math.floor(Math.random()*res.h);
		var circle = new Circle(x,y);
		circles.push(circle);
	}
}

function initCircle(m)
{
	var circle = new Circle(m.x,m.y);
	circles.push(circle);
}

function Circle(x,y)
{
	this.x = x;
	this.y = y;
	this.r = 0;
	this.c = getColorFromCode(Math.floor((Math.random()*23)+1));
	var hexColor = getColorFromCode(16);
	var hexColor = getColorFromCode(Math.floor((Math.random()*23)+1));
	this.c = getColorValues(hexColor);
}

function updateCircles()
{
	var res = getWindowResolution();
	var newCircles = new Array();
	for (var i = 0; i < circles.length; i++)
	{
		circles[i].r += 2;
		//circles[i].c[3] -= 0.0000000001;
		if(circles[i].c[3] < 0.5)
		{
			circles[i].c[3] = 0.5;
		}
		if(circles[i].r >= res.w & circles.length > 1)
		{
			circles[i].r = -1;
		}
		if(circles[i].r != -1)
		{
			newCircles.push(circles[i]);
		}
	}
	circles = newCircles;

}

function drawCircles()
{
	for (var i = 0; i < circles.length; i++)
	{
		drawCircle(circles[i]);
	}
}

function drawCircle(c)
{
	var canvas = document.getElementById('rcc');
	var context = canvas.getContext('2d');
	var centerX = c.x;
	var centerY = c.y;
	var radius = c.r;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.fillStyle = 'rgba('+c.c[0]+','+c.c[1]+','+c.c[2]+','+c.c[3]+')';
	context.fill();
	//context.lineWidth = 30;
	//context.strokeStyle = 'rgba('+c.c[0]+','+c.c[1]+','+c.c[2]+','+c.c[3]+')';
	//context.stroke();
}

// Discover mouse coordinates
function getMouseCoordinates(e) 
{
	var mouseCoordinates = {x:e.clientX,y:e.clientY}; 
	return mouseCoordinates;
}

// Detect then store window resolution 
function getWindowResolution() 
{
	
	var windowWidth, windowHeight; // store window resolution and height
	
	if (document.body) {
		if (document.body.offsetHeight && document.body.offsetWidth) {
			windowWidth = document.body.offsetWidth;
			windowHeight = document.body.offsetHeight;
		}
	}

	if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
		windowWidth = document.documentElement.offsetWidth;
		windowHeight = document.documentElement.offsetHeight;
	}

	if (window.innerWidth && window.innerHeight) {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
	}
	
	var resolution = {w:windowWidth,h:windowHeight};
	
	return resolution;
	
}

function getColorFromCode(value) {
	var colorVal = '';
	
	if (value == 1) {
		colorVal = '#FE2E2E';
	} else if (value == 2) {
		colorVal = '#FE642E';
	} else if (value == 3) {
		colorVal = '#FE9A2E';
	} else if (value == 4) {
		colorVal = '#FACC2E';
	} else if (value == 5) {
		colorVal = '#F7FE2E';
	} else if (value == 6) {
		colorVal = '#C8FE2E';
	} else if (value == 7) {
		colorVal = '#9AFE2E';
	} else if (value == 8) {
		colorVal = '#64FE2E';
	} else if (value == 9) {
		colorVal = '#2EFE2E';
	} else if (value == 10) {
		colorVal = '#2EFE64';
	} else if (value == 11) {
		colorVal = '#2EFE9A';
	} else if (value == 12) {
		colorVal = '#2EFEC8';
	} else if (value == 13) {
		colorVal = '#2EFEF7';
	} else if (value == 14) {
		colorVal = '#2ECCFA';
	} else if (value == 15) {
		colorVal = '#2E9AFE';
	} else if (value == 16) {
		colorVal = '#2E64FE';
	} else if (value == 17) {
		colorVal = '#2E2EFE';
	} else if (value == 18) {
		colorVal = '#642EFE';
	} else if (value == 19) {
		colorVal = '#9A2EFE';
	} else if (value == 20) {
		colorVal = '#CC2EFA';
	} else if (value == 21) {
		colorVal = '#FE2EF7';
	} else if (value == 22) {
		colorVal = '#FE2EC8';
	} else if (value == 23) {
		colorVal = '#FE2E9A';
	} else if (value == 24) {
		colorVal = '#FE2E64';
	} 
	
	return colorVal;
}

// Breaks down the supplied color code into integer R,G,B, and alpha values
function getColorValues(colorStr) {
	
	var defaultAlpha = 1;
	
	var colorVals = new Array();
	
	colorStr = colorStr.trim();
	colorStr = colorStr.replace(' ','')
	
	if (colorStr.charAt(0) === '#') {
		
		colorVals = [parseInt('0x' + colorStr.slice(1,3)), parseInt('0x' + colorStr.slice(3,5)), parseInt('0x' + colorStr.slice(5,7)),0.15];
		
	} else if (colorStr.indexOf('rgba(') > -1) {
		
		var r = '',g = '',b = '',a = '';
		var colorCollect = 0; // collecing R,G, or B
		
		for (var i = 5; i < colorStr.length; i++) {
			var c = colorStr.charAt(i);
			if (c!==','||c==')') {
				if (colorCollect == 0) {
					r = r + c;
				} else if (colorCollect == 1) {
					g = g + c;
				} else if (colorCollect == 2) {
					b = b + c;
				} else if (colorCollect == 3) {
					a = a + c;
				}
			} else if (c==',') {
				colorCollect++;
			}
		}
		
		// Convert compiled strings to integers
		var red = parseInt(r);
		var green = parseInt(g);
		var blue = parseInt(b);
		var alpha = parseInt(a);
		
		colorVals = [red,green,blue,alpha];
		
	} else if (colorStr.indexOf('rgb(') > -1) {
		
		var r = '',g = '',b = '',a = defaultAlpha;
		var colorCollect = 0; // collecing R,G, or B
		
		for (var i = 4; i < colorStr.length; i++) {
			var c = colorStr.charAt(i);
			if (c!==','||c==')') {
				if (colorCollect == 0) {
					r = r + c;
				} else if (colorCollect == 1) {
					g = g + c;
				} else if (colorCollect == 2) {
					b = b + c;
				}
			} else if (c==',') {
				colorCollect++;
			}
		}
		
		// Convert compiled strings to integers
		var red = parseInt(r);
		var green = parseInt(g);
		var blue = parseInt(b);
		
		colorVals = [red,green,blue,a];
		
	}
	
	return colorVals;
}	

}
/*
     FILE ARCHIVED ON 10:51:34 Mar 11, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:47:39 Dec 15, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 99.958 (3)
  PetaboxLoader3.datanode: 155.978 (4)
  esindex: 0.022
  exclusion.robots.policy: 0.237
  CDXLines.iter: 33.487 (3)
  captures_list: 142.627
  exclusion.robots: 0.253
  RedisCDXSource: 3.031
  load_resource: 80.95
*/