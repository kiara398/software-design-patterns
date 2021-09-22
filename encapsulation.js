var Person = /** @class */ (function () {
    //methods
    function Person(username, firstName, lastName) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.talk = function () {
        console.log("My name is  " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var robert = new Person('@kiki', 'Winnie', 'Kiara');
robert.talk();
