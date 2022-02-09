// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit tests for the sayHello function
describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when executed", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when executed", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("Should return the string 'Hello, Pat!' when executed", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("Should return the string 'Hello, World!' when executed", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("Should return the string 'Hello, World!' when executed", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

//Unit tests for the isFive function
describe("isFive", function() {
    it("Should be a defined function 'isFive'", function() {
        expect(typeof isFive).toBe("function");
    });
});

//Unit tests for the isEven function
describe("isEven", function() {
    it("Should be a defined function 'isEven'", function() {
        expect(typeof isEven).toBe("function");
    });
    it("Should return boolean no matter the input", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("Should return 'true' when executed with 'isEven(2)'", function() {
        expect(isEven(2)).toBe(true);
    });
    it("Sould return 'true' when executed with 'isEven(-4)'", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("Should return 'false' when executed with 'isEven(3)'", function() {
        expect(isEven(3)).toBe(false);
    });
});