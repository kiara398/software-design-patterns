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

interface LoginStrategy 
{
    login(credentials:object):string
}

class UsernameAndPasswordLoginStrategy implements LoginStrategy{
    login(credentials: object) {
        let username = credentials['username'];
        let password = credentials['password'];

        return `${username} ${password} has logged in successfully using the Username and Password strategy`
    }
}

class EmailAndPasswordLoginStrategy implements LoginStrategy{
    login(credentials: object) {
        let email = credentials['email'];
        let password = credentials['password'];

        return `${email} ${password} has logged in successfully using the email and Password strategy`
    }
}

class PhoneNumberAndPasswordLoginStrategy implements LoginStrategy{
    login(credentials: object) {
        let phoneNumber = credentials['phoneNumber'];
        let password = credentials['password'];

        return `${phoneNumber} ${password} has logged in successfully using the phoneNumber and Password strategy`
    }
}

class IdAndPasswordLoginStrategy implements LoginStrategy{
    login(credentials: object) {
        let id = credentials['id'];
        let password = credentials['password'];

        return `${id} ${password} has logged in successfully using the id and Password strategy`
    }
}

class EmailAndOTPStrategy implements LoginStrategy{
    login(credentials: object) {
        let email = credentials['email'];
        let otp = credentials['otp'];

        return `${email} ${otp} has logged in successfully using the email and otp strategy`
    }
}



// Client
class User
{
    private loginStrategy:LoginStrategy

    login(credentials:object) {
        // Logic goes here
        return this.loginStrategy.login(credentials);
    }

    setLoginStrategy(loginStrategy: LoginStrategy) {
        this.loginStrategy = loginStrategy
    }
}

let user:User;

user = new User();
// let strategy = new EmailAndPasswordLoginStrategy()
// OR
user.setLoginStrategy(new EmailAndPasswordLoginStrategy());
console.log(user.login({email:'example@example.com', password: '12345'}));

user.setLoginStrategy(new EmailAndOTPStrategy());
console.log(user.login({email:'example@ymail.com', otp: 'abc123'}));

