GHOSTINPUT
==========

Ghostinput is a very short jQuery plugin that basically helps you deal with
the trivial task of having a default value for a text field or textarea that
disappears when you `focus` on the field and come back to this default value when
the field is blank on `blur`.

It is quite easy to use, just put the default value in the value parameter
or in the body of textarea if it is a textarea. And then declare the field as a
ghostinput:

    $(function() {
	    $('input').ghostinput();
    });

There is nothing more to say I think.

Cheers,
Mig