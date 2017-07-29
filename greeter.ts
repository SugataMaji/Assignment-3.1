
class Greeter {
  private greeting : string;

  constructor(Greeting : string) {
    this.greeting = Greeting
  }

  greet() {
    return `Welcome to ${this.greeting}`;
  }

};

let Greet = new Greeter("Typescript");
console.log(Greet.greet());
