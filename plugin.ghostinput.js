// Copyright (c) 2011 Mickael Riga - See MIT_LICENCE for details
// Version 0.0.1
;(function($){$.fn.ghostinput=function(){return this.each(function(){var a=$(this);var b=a.val();if(b!=''){a.focus(function(){if(this.value==b){this.value=''}}).blur(function(){if(this.value==''){this.value=b}})}})}})(jQuery);