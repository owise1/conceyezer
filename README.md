# conceyezer

Makin' 'em keep it concise since '13

This jQuery pluggin allows you to encourage succinct form field entries by reducing the font size as they type.  [Demo](http://jsfiddle.net/owise1/dXyyn/)

### Usage
At 100 characters their entry will be invisible

	$('textarea.harsh').conceyezer(100);
	
After 100 characters it'll just be real small

	$('textarea.nicer').conceyezer({
		chars : 100,
		minimumFontSize : '9px'
	});