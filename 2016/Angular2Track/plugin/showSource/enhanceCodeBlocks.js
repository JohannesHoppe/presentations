// abuse optional language identifier of code blocks to contain additional attributes - delimiter: |
// whitespaces are nowhere possible!
// e.g.
// ```typescript|contenteditable|data-show-source=../book-ranking-code/class.ts
// ```
(function($) {


  $(function () {

      $(document.body).find('code').each(function() {

          var $this = $(this);

          if($this.attr('class') === null)
           return;

          var elements = $this.attr('class').split("|");

          for (var i=0; i<elements.length; i++) {

              var element = elements[i];

              // contains a equals char --> add a attribute
              if (~element.indexOf('=')) {

                  var parts = element.split("=");
                  $this.attr(parts[0], parts[1]);

                   // starts with "data-" --> store arbitrary data also as key/value
                   if (element.indexOf('data-') == 0) {

                       // without "data-"
                       var element2 = element.substr(5);
                       var parts2 = element2.split("=");
                       $this.data(parts2[0], parts2[1]);
                   }

              // simple element, add it as a CSS class name as well as a element attribute
              } else {
                  $this.addClass(element);
                  $this.attr(element, "");
              }
          }
      });
    });
})(window.jqlite);
