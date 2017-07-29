var Greeter = (function () {
    function Greeter(Greeting) {
        this.greeting = Greeting;
    }
    Greeter.prototype.greet = function () {
        return "Welcome to " + this.greeting;
    };
    return Greeter;
}());
;
var Greet = new Greeter("Typescript");
console.log(Greet.greet());
