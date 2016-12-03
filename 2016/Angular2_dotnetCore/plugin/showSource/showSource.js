// 1st. <code data-show-source="examples.html"></code>
// 2nd. <div data-insert-source="examples.html"></div>

(function($, $http) {

    // returns text with HTML-encoded characters
    var encodeHtml = function(text) {
        var asText = $('<div />').text(text);
        return asText[0].innerHTML;
    }

    var startSnip = "<!--START-->";
    var stopSnip = "<!--STOP-->";

    var startSnip2 = "//START";
    var stopSnip2 = "//STOP";

    var extractSnippet = function(data) {
        var match = data.match(startSnip + "([^]*?)" + stopSnip);
        if (match !== null) {
            return match[1].trim();
        }

        var match2 = data.match(startSnip2 + "([^]*?)" + stopSnip2);
        if (match2 !== null) {
            return match2[1].trim();
        }

        // fallback, if no snippet was placed
        return data;
    };

    var replaceCode = function() {
        $(document.body).find('code[data-show-source]').each(function() {

            var that = this;
            var url = $(this).data('show-source');

            $http.get(url).then(function(data) {

                var snippet = extractSnippet(data);
                var snippetEncoded = encodeHtml(snippet);
                that.innerHTML = snippetEncoded;

                // re-render syntax highlighting
                if (typeof window.hljs == "object") {
                    window.hljs.highlightBlock(that);
                }
            });
        });
    };

    // untested
    var insertHtml = function() {
        $(document.body).find('div[data-insert-source]').each(function() {

            var that = this;
            var url = $(this).data('insert-source');

            $http.get(url).then(function(data) {

                var snippet = extractSnippet(data).trim();
                that.innerHTML = snippet;
            });
        });
    };

    $(function() {
        replaceCode();
        insertHtml();
    });


})(window.jqlite, window.$http);
