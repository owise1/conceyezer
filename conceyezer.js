((function($){
  $.fn.conceyezer = function(o){
    var options = {};
    if(typeof o === 'number'){
      options.chars = o;
    } else {
      options = o;
    }
    var opts = $.extend( {  
                  chars : 500,
       startingFontSize : null,
        minimumFontSize : '0em'
    }, options);
    
    
    return this.each(function(){
      var startingFontSize    = opts.startingFontSize || $(this).css('font-size');
      var intStartingFontSize = parseInt(startingFontSize);
      var fontSuff            = startingFontSize.replace(intStartingFontSize.toString(), '');
      var intMinimumFontSize  = parseInt(opts.minimumFontSize);
      
      
      $(this).keyup(function(){
        var charCount = $(this).val().length;
        if(charCount > opts.chars) charCount = opts.chars;
        
        $(this).css('font-size', (intStartingFontSize - ((charCount / opts.chars) * (intStartingFontSize - intMinimumFontSize))) + fontSuff);
      });
    });
  };
})(jQuery));