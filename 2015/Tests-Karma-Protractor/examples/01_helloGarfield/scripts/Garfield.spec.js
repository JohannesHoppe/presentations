describe('Garfield', function() {
    
    it('should have a name', function() {
    
        var garfield = new Garfield();
        expect(garfield.getName()).toEqual("Garfield");
    });
});