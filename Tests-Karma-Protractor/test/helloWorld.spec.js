var helloWorld = function() {
    return "Hello World!"; 
};

describe('helloWorld', function() {
    
    it('says hello', function() {
        expect(helloWorld()).toEqual("Hello World!");
    });
});