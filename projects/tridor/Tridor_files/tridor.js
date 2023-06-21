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

	var triangles = [];
	var griditInterval;
	var rateOfChangeRange = 1.2;
	rateOfChangeModifier = 1; // Must be whole number - cool effect with float
	var toneModifierLimits = {high: -80, low: -180} // High must be greater than low
	var triDi = 42;
	var currentColor = 14;
	var interval = 50;
	
	document.onload = gridit();
	/*
	$( document ).ready(function() {
			
		gridit();
		
	})*/
	
	$(window).resize(function() {
			
		clearInterval(griditInterval);
		gridit();
		
	});
	
	
	function gridit() {
		
		// create & customise canvas
		createCanvas();
		
		// create a draw triangle grid
		createTriangles();
		
		// update canvas every 1/20th of a second
		griditInterval = setInterval('updateGrid();',interval);
		
	}
	
	/* ************************************************************* *
						SUPPORTING FUNCTIONS
	 * ************************************************************* */
	
	function updateGrid() {
		var high = toneModifierLimits.high;
		var low = toneModifierLimits.low;
		
		for (i = 0; i < triangles.length; i++) {
			if (triangles[i].toneDir == 0) {
				triangles[i].toneModifier = triangles[i].toneModifier + triangles[i].rateOfToneChange;
				if (triangles[i].toneModifier > high) {
					triangles[i].toneDir = 1;
				}
			} else if (triangles[i].toneDir == 1) {
				triangles[i].toneModifier = triangles[i].toneModifier - triangles[i].rateOfToneChange;
				if (triangles[i].toneModifier < low) {
					triangles[i].toneDir = 0;
				}
			}
			
			drawTri(triangles[i]);
		}
	}

	// Detect then store window resolution 
	function getWindowResolution() {
		
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
	
	// Set canvas to match provided width and height
	function setCanvasDimensions(width, height) {
		
		var canvas = document.getElementById('gridit-can');
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);
		
	}
	
	// Creates and adjusts canvas element
	function createCanvas() {
		
		// Place canvas element within <body>
		var canvasElement = '<canvas id="gridit-can"><p>Canvas not supported in this internet browser, sorry!</p></canvas>';
		
		var canvasWrap = document.getElementById('gridit-wrap');
		canvasWrap.innerHTML = canvasElement;
		
		// Style canvas containing element i.e. 
		canvasWrap.style.position = 'fixed';
		canvasWrap.style.top = '0';
		canvasWrap.style.width = '100%';
		canvasWrap.style.height = '100%';
		canvasWrap.style.zIndex = '-500';
		
		// Detect window resolution
		var res = getWindowResolution();
		
		// Apply discovered resolution to canvas dimensions
		setCanvasDimensions(res.w, res.h);
		
		
		// Draw black background
		var canvas = document.getElementById('gridit-can');
		
		if (canvas.getContext) {
			var context = canvas.getContext('2d');
			context.beginPath();
			context.rect(0, 0, res.w, res.h);
			context.fillStyle = 'rgb(0,0,0)';
			context.fill();
		}
		
	}
	
	function createTriangles() {
		
		var res = getWindowResolution();
		var count = 0;
		var triDir = 0;
		var row = 0;
		var newRow = true;
		var range = 0;
		
		if (toneModifierLimits.high >= 0 && toneModifierLimits.low >= 0) {
			range = toneModifierLimits.high - toneModifierLimits.low;
		} else if (toneModifierLimits.high >= 0 && toneModifierLimits.low <= 0) {
			range = toneModifierLimits.high + Math.abs(toneModifierLimits.low);
		} else if (toneModifierLimits.high <= 0 && toneModifierLimits.low <= 0) {
			range = Math.abs(toneModifierLimits.low) - Math.abs(toneModifierLimits.high);
		}
		
		for (y = 0; y < res.h + triDi; y = y + triDi) {
			for (x = -triDi/2; x < res.w + triDi/2; x = x + triDi/2) {
				triangles[count] = {};

				var colorStr = getColorFromCode(currentColor);
				var color = getColorValues(colorStr);
				triangles[count].r = color[0];
				triangles[count].g = color[1];
				triangles[count].b = color[2];
				triangles[count].toneModifier = Math.floor(Math.random() * range) - Math.abs(toneModifierLimits.low);
				triangles[count].rateOfToneChange = Math.floor(Math.random() * rateOfChangeRange) + rateOfChangeModifier;
				triangles[count].pos = {x: x, y: y};
				triangles[count].toneDir = Math.floor(Math.random() * 2);
				if (newRow) {
					newRow = false;
				} else if (!newRow) {
					if (triDir == 0) {
						triDir = 1;
					} else if (triDir == 1) {
						triDir = 0;
					}
				}
				
				triangles[count].triDir = triDir;
				drawTri(triangles[count]);
				count = count + 1;
			}
			newRow = true;
			row = row + 1;
			triDir = row % 2;
		}
	}
	
	function drawTri(triangle) {
		var x = triangle.pos.x;
		var y = triangle.pos.y;
		
		var canvas = document.getElementById('gridit-can');
		
		// Draw triangle one
		if (triangle.triDir == 0) {
			if (canvas.getContext) {
				var context = canvas.getContext('2d');
				context.beginPath();
				context.moveTo(x + triDi/2,y);
				context.lineTo(x + triDi,y + triDi);
				context.lineTo(x,y + triDi);
				context.closePath();
				
				var R = triangle.r + triangle.toneModifier;
				if (R > 255) {
					R = 255;
				} else if (R < 0) {
					R = 0;
				}
				var G = triangle.g + triangle.toneModifier;
				if (G > 255) {
					G = 255;
				} else if (G < 0) {
					G = 0;
				}
				var B = triangle.b + triangle.toneModifier;
				if (B > 255) {
					B = 255;
				} else if (B < 0) {
					B = 0;
				}
				
				// set fillStyle with modified colour
				context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";
				context.fill();
			}
		} else if (triangle.triDir == 1) {
			if (canvas.getContext) {
				var context = canvas.getContext('2d');
				context.beginPath();
				context.moveTo(x, y);
				context.lineTo(x + triDi,y);
				context.lineTo(x + triDi/2,y + triDi);
				context.closePath();
				
				var R = triangle.r + triangle.toneModifier;
				if (R > 255) {
					R = 255;
				} else if (R < 0) {
					R = 0;
				}
				var G = triangle.g + triangle.toneModifier;
				if (G > 255) {
					G = 255;
				} else if (G < 0) {
					G = 0;
				}
				var B = triangle.b + triangle.toneModifier;
				if (B > 255) {
					B = 255;
				} else if (B < 0) {
					B = 0;
				}
				
				// set fillStyle with modified colour
				context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";
				context.fill();
			}
		}
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
	
	function updateColor(value) {
		
		currentColor = value;
		console.log(currentColor);
		var colorStr = getColorFromCode(value);
		var color = getColorValues(colorStr);
		
		for (i = 0; i < triangles.length; i++) {
			
			triangles[i].r = color[0];
			triangles[i].g = color[1];
			triangles[i].b = color[2];
			
		}
		
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
	
	function makeTrisSmaller() {
		triDi = triDi - 4;
		if (triDi < 10) {
			triDi = 10;
		}  else {
			triangles = [];
			clearInterval(griditInterval);
			createTriangles();
			griditInterval = setInterval('updateGrid();',interval);
			var title = document.getElementById('sizeTitle');
			title.innerHTML = 'Edge Length: ' + triDi + 'px';
			if (triDi < 22) {
				var warning = document.getElementById('sizeWarning');
				warning.innerHTML = 'Performance may suffer at this size.';
			}
		}
	}
	
	function makeTrisBigger() {
		triangles = [];
		clearInterval(griditInterval);
		triDi = triDi + 4;
		if (triDi > 410) {
			triDi = 410;
		}
		createTriangles();
		griditInterval = setInterval('updateGrid();',interval);
		var title = document.getElementById('sizeTitle');
		title.innerHTML = 'Edge Length: ' + triDi + 'px';
		
		if (triDi >= 22) {
			var warning = document.getElementById('sizeWarning');
			warning.innerHTML = '';
		}
	}

	function makeTrisSlower() {
		if (interval < 100) {
			interval += 5;
			clearInterval(griditInterval);
			griditInterval = setInterval('updateGrid();',interval);
		}
		var title = document.getElementById('speedTitle');
		title.innerHTML = 'Refresh Interval: ' + interval + 'ms';
	}

	function makeTrisFaster() {
		if (interval >= 10) {
			interval -= 5;
			clearInterval(griditInterval);
			griditInterval = setInterval('updateGrid();',interval);
		}
		var title = document.getElementById('speedTitle');
		title.innerHTML = 'Refresh Interval: ' + interval + 'ms';
	}

}
/*
     FILE ARCHIVED ON 10:51:20 Mar 11, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:47:43 Dec 15, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.015
  LoadShardBlock: 202.711 (3)
  RedisCDXSource: 121.003
  PetaboxLoader3.resolve: 145.049 (2)
  CDXLines.iter: 27.402 (3)
  exclusion.robots: 0.136
  load_resource: 143.473
  PetaboxLoader3.datanode: 105.649 (4)
  captures_list: 357.174
  exclusion.robots.policy: 0.126
*/