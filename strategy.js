/**
 *  This defines a family of algorithms, encapsulates each one, and makes them interchangeable.
 *  it lets the algorithm vary independently from clients that use it.
 

        Login Strategies
            - PhoneNumberAndPasswordLogin
            - EmailAndPasswordLogin
            - UsernameAndPasswordLogin
            - IdAndPasswordLogin
            - SocialAuth

        User //Client
            login()

            - Admin
            - Staff
            - Student

        Step 1: Identify the aspects of the Context class that vary (across subtypes and / or objects).
        Step 2: Separate the aspects of the class that vary from those that don’t.
        Step 3: Encapsulate what varies / what is separates (Create a supertype, i.e. Interface or Abstract class). This serves as the (Strategy / Policy identifier).
        Step 4: Program to an interface (Abstraction), not implementation. Create concrete implementations of the Strategy whereby each extends an abstract class or implements an interface.
        Step 5: In the context class, create a variable of type as the supertype of the strategy (Let it’s type not be any of the concrete implementations of the strategy supertype). This variable can possibly be protected.
        Step 6: In the context class, Create a setter method for the variable created in step 5.
        Step 7: In the context class, Create a method to be used for executing the abstract method in the strategy
        Step 8: Test for whether the The Strategy Pattern is implemented successfully.

 */
var UsernameAndPasswordLoginStrategy = /** @class */ (function () {
    function UsernameAndPasswordLoginStrategy() {
    }
    UsernameAndPasswordLoginStrategy.prototype.login = function (credentials) {
        var username = credentials['username'];
        var password = credentials['password'];
        return username + " " + password + " has logged in successfully using the Username and Password strategy";
    };
    return UsernameAndPasswordLoginStrategy;
}());
var EmailAndPasswordLoginStrategy = /** @class */ (function () {
    function EmailAndPasswordLoginStrategy() {
    }
    EmailAndPasswordLoginStrategy.prototype.login = function (credentials) {
        var email = credentials['email'];
        var password = credentials['password'];
        return email + " " + password + " has logged in successfully using the email and Password strategy";
    };
    return EmailAndPasswordLoginStrategy;
}());
var PhoneNumberAndPasswordLoginStrategy = /** @class */ (function () {
    function PhoneNumberAndPasswordLoginStrategy() {
    }
    PhoneNumberAndPasswordLoginStrategy.prototype.login = function (credentials) {
        var phoneNumber = credentials['phoneNumber'];
        var password = credentials['password'];
        return phoneNumber + " " + password + " has logged in successfully using the phoneNumber and Password strategy";
    };
    return PhoneNumberAndPasswordLoginStrategy;
}());
var IdAndPasswordLoginStrategy = /** @class */ (function () {
    function IdAndPasswordLoginStrategy() {
    }
    IdAndPasswordLoginStrategy.prototype.login = function (credentials) {
        var id = credentials['id'];
        var password = credentials['password'];
        return id + " " + password + " has logged in successfully using the id and Password strategy";
    };
    return IdAndPasswordLoginStrategy;
}());
var EmailAndOTPStrategy = /** @class */ (function () {
    function EmailAndOTPStrategy() {
    }
    EmailAndOTPStrategy.prototype.login = function (credentials) {
        var email = credentials['email'];
        var otp = credentials['otp'];
        return email + " " + otp + " has logged in successfully using the email and otp strategy";
    };
    return EmailAndOTPStrategy;
}());
// Client
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.login = function (credentials) {
        // Logic goes here
        return this.loginStrategy.login(credentials);
    };
    User.prototype.setLoginStrategy = function (loginStrategy) {
        this.loginStrategy = loginStrategy;
    };
    return User;
}());
var user;
user = new User();
// let strategy = new EmailAndPasswordLoginStrategy()
// OR
user.setLoginStrategy(new EmailAndPasswordLoginStrategy());
console.log(user.login({ email: 'example@example.com', password: '12345' }));
user.setLoginStrategy(new EmailAndOTPStrategy());
console.log(user.login({ email: 'example@ymail.com', otp: 'abc123' }));
