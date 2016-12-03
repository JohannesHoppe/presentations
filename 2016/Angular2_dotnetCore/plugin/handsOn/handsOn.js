// required:
// 1. markdown-hacked.js instead of normal markdown.js plugin
// 2. some CSS, see _handsOn.scss
(function() {

    // add divs to DOM
    var s = '<div id="handsOnMaster" style="display:none;">' +
            '    <i class="ng-shield fa fa-graduation-cap"></i>' +
            '    <h3>Hands on!</h3>' +
            '    <div id="handsOnDisplay"></div>' +
            '</div>'; // HTML string

    var div = document.createElement('div');
    div.innerHTML = s;
    var elements = div.firstChild;
    document.body.appendChild(elements);


    var handsOnMaster = document.getElementById("handsOnMaster");
    var handsOnDisplay = document.getElementById("handsOnDisplay");
    var reveal = document.getElementById("reveal");

    // handsOn Hack
    Reveal.addEventListener('slidechanged', function( event ) {

        var currentSlide  = event.currentSlide;

        var handsOnNode;
        for (var i = 0; i < currentSlide.childNodes.length; i++) {
            if (currentSlide.childNodes[i].className == "handsOn") {
                handsOnNode = currentSlide.childNodes[i];
                break;
            }        
        }

        if (handsOnNode) {  
            handsOnMaster.style.display = "block";
            handsOnDisplay.innerHTML = handsOnNode.innerHTML;
            reveal.classList.add("sectionMoveLeft");
        } else {
            handsOnMaster.style.display = "none";
            reveal.classList.remove("sectionMoveLeft");
        }
    });
})();