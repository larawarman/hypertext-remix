/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////  oh hey, we're kellyn (kellynloehr.com)  //////
/////  and lara (larawarman.com) and thanks    //////
/////  for checking out our source code. we    //////
/////  hacked this together, so there are      //////	
/////  probably bugs, and definitely better    //////
/////  ways of doing things, but it works!     //////
/////  ok so it only currently works in 	   //////
/////  safari, but that's ok. and, if it 	   //////
/////  freezes, just try starting with
/////  a different browser. enjoy :)  		   //////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Here are the initial values for our animation. 
	var dock = 45;
	var toolbar = 25;
	var cw = 200;
	var ch = 240;
	var unitX = Math.round( (screen.width-cw-dock) / 7 );
	var unitY = Math.round( (screen.height-ch-toolbar) / 4 );
	var x = 0, y = 0, w=unitX, h=unitY;  // Window position and size



///////////////////OPEN WINDOWS///////////////////////////////////////////////////////
function play(){

//--------windows X
	
		//2
		winX2 = window.open('X2.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winX2.resizeTo(w,h);
		winX2.moveTo(x+cw,y);

		//3
		winX3 = window.open('X3.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winX3.resizeTo(w,h);
		winX3.moveTo(x+cw+(unitX),y);

		//4
		winX4 = window.open('X4.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winX4.resizeTo(w,h);
		winX4.moveTo(x+cw+(unitX*2),y);

		//5
		winX5 = window.open('X5.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winX5.resizeTo(w,h);
		winX5.moveTo(x+cw+(unitX*3),y);

		//6
		winX6 = window.open('X6.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winX6.resizeTo(w,h);
		winX6.moveTo(x+cw+(unitX*4),y);

		//7
		winX7 = window.open('X7.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winX7.resizeTo(w,h);
		winX7.moveTo(x+cw+(unitX*5),y);

		//8
		winX8 = window.open('X8.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winX8.resizeTo(w,h);
		winX8.moveTo(x+cw+(unitX*6),y);
	


//------windows Y
		//1
		winY1 = window.open('Y1.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winY1.resizeTo(w,h);
		winY1.moveTo(x,y+ch);
		
		//2
		winY2 = window.open('Y2.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winY2.resizeTo(w,h);
		winY2.moveTo(x,y+ch+(unitY));

		//3
		winY3 = window.open('Y3.html', "", 
       "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winY3.resizeTo(w,h);
		winY3.moveTo(x,y+ch+(unitY*2));

		//4
		winY4 = window.open('Y4.html', "", 
	   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
		winY4.resizeTo(w,h);
		winY4.moveTo(x,y+ch+(unitY*3));
		
	}
	


	

///////////////////PLAY///////////////////////////////////////////////////////
	
// Use setInterval() to call the move() method every interval 
// milliseconds. Store the return value so that we can stop the
// animation by passing it to clearInterval().

function go(){
	var intervalID  = window.setInterval("move()", interval);
} 
function resize()
{
	window.resizeTo(200,240);
}		



///////////////////CLOSE///////////////////////////////////////////////////////

function end(){
 
	winX2.close(); 
	winX3.close(); 
	winX4.close(); 
	winX5.close(); 
	winX6.close(); 
	winX7.close(); 
	winX8.close(); 
	winY1.close(); 
	winY2.close();
	winY3.close();
	winY4.close();
}			



///////////////////RESET///////////////////////////////////////////////////////

function reset(){
	end();
	play();
}

function x2reset() {
	winX2.close();
	winX2 = window.open('X2.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winX2.resizeTo(w,h);
	winX2.moveTo(x+cw,y);
}
function x3reset() {
	winX3.close();
	winX3 = window.open('X3.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winX3.resizeTo(w,h);
	winX3.moveTo(x+cw+unitX,y);
}
function x4reset() {
	winX4.close();
	winX4 = window.open('X4.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winX4.resizeTo(w,h);
	winX4.moveTo(x+cw+(unitX*2),y);
}
function x5reset() {
	winX5.close();
	winX5 = window.open('X5.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winX5.resizeTo(w,h);
	winX5.moveTo(x+cw+(unitX*3),y);
}
function x6reset() {
	winX6.close();
	winX6 = window.open('X6.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winX6.resizeTo(w,h);
	winX6.moveTo(x+cw+(unitX*4),y);
}
function x7reset() {
	winX7.close();
	winX7 = window.open('X7.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winX7.resizeTo(w,h);
	winX7.moveTo(x+cw+(unitX*5),y);
}
function x8reset() {
	winX8.close();
	winX8 = window.open('X8.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winX8.resizeTo(w,h);
	winX8.moveTo(x+cw+(unitX*6),y);
}
function y1reset() {
	winY1.close();
	winY1 = window.open('Y1.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winY1.resizeTo(w,h);
	winY1.moveTo(x,y+ch);
}
function y2reset() {
	winY2.close();
	winY2 = window.open('Y2.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winY2.resizeTo(w,h);
	winY2.moveTo(x,y+ch+unitY);
}
function y3reset() {
	winY3.close();
	winY3 = window.open('Y3.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winY3.resizeTo(w,h);
	winY3.moveTo(x,y+ch+(unitY*2));
}
function y4reset() {
	winY4.close();
	winY4 = window.open('Y4.html', "", 
   "width=" + w + ",height=" + h +",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no");
	winY4.resizeTo(w,h);
	winY4.moveTo(x,y+ch+(unitY*3));
}

///////////////CTRL//////////////////////////////////
function rotate( box ) {
	/*   box.style.webkitTransform = box.style.webkitTransform == "rotate(360deg)" ? "rotate(0deg)" : "rotate(360deg)"; */
    box.style.webkitTransform = 'rotate(360deg)';
}

jQuery(document).ready(function($) {
	////////GET IT STARTED///////
	
	$('#home').show();
	$('#controlPanel').hide();
	
	$('#letsBegin').click(function() {
		$('#home').hide();
		$('#controlPanel').show();
		resize();
		play();
	});



	////////RESETS/////////////
    $('#resetx2').click(function(){
        rotate(this);
        x2reset();
    });
    $('#resetx3').click(function(){
        rotate(this);
        x3reset();
    });
    $('#resetx4').click(function(){
        rotate(this);
        x4reset();
    });
    $('#resetx5').click(function(){
        rotate(this);
        x5reset();
    });
    $('#resetx6').click(function(){
        rotate(this);
        x6reset();
    });
    $('#resetx7').click(function(){
        rotate(this);
        x7reset();
    });
    $('#resetx8').click(function(){
        rotate(this);
        x8reset();
    });
    $('#resety1').click(function(){
        rotate(this);
        y1reset();
    });
    $('#resety2').click(function(){
        rotate(this);
        y2reset();
    });
    $('#resety3').click(function(){
        rotate(this);
        y3reset();
    });
    $('#resety4').click(function(){
        rotate(this);
        y4reset();
    });


});