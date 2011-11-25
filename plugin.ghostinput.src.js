// Copyright (c) 2011 Mickael Riga - See MIT_LICENCE for details
// Version 0.0.1

;(function($) {
	$.fn.ghostinput = function() {
		return this.each(function() {
			var $this = $(this);
			var val = $this.val();
			if (val!='') {
				$this
				.focus(function() { if (this.value == val) { this.value='' }; })
				.blur(function() { if (this.value == '') { this.value=val }; });
			}
		});
	}
})(jQuery);
