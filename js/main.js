/****************************************************************
*******************************************************************

Website: The Becca's World;
Description: My Personal Website
Name: Rebecca Cheng
URI: http://www.rebeccecheng.me
									
*******************************************************************
******************************************************************/

// Text Rotator;
$(document).ready(function(){ 
	$('.rotate').each(function(){
		var el = $(this);
		var array = $(this).html().split(",");
		el.text(array[0]);
		setInterval(function() {
			el.animate({
              textShadowBlur:20,
              opacity: 0
            }, 500, function() {
              index = $.inArray(el.text(), array)
              if((index + 1) == array.length) {index = -1}
              el.text(array[index + 1]).animate({
                textShadowBlur:0,
                opacity: 1
              }, 500 );
            });
		}, 2000);
	});
})

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
}

// Show more Show less Button
$(document).ready(function () {
    $('.more').show();
    $('.less').hide();
    $('.more-button').click(function () {
        $('.less').show();
        $('.more-button').hide();
    });
    $('.less-button').click(function () {
        $('.more').show();
        $('.less-button').hide();
        $('.less').hide(300);
    });
});


// Smooth scrolling to all links
$(document).ready(function(){
  
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        
        window.location.hash = hash;
      });
    } 
  });
});


// Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);

console.clear();

(function(){
  
  var textareas = document.querySelectorAll('.expanding'),
      
      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden';
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },
      
      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };
  
  // IE7 support
  if ( !document.querySelectorAll ) {

    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    textareas = getElementsByClass('expanding');
  }
  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }
  
})();













