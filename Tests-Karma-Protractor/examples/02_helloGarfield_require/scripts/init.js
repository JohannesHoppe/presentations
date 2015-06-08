require(['require', 'require.config'], function (require) {
    require(['Garfield'], function(Garfield) {
    
        var garfield = new Garfield();
        document.getElementById("name").innerText = garfield.getName();
    });
});