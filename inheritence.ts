//inheritence and polymorphism example

//mechanism of basing an object or class upon another object or class.
//deriving a new class from an aexisting class and forming them into a hierachy of classes

class Person{
    
    //Data
    public username: string;
    protected firstName: string;
    protected lastName: string;
    private password: string;

    //methods
    constructor(username: string, firstName: string, lastName: string){
        this.username = username
        this.firstName = firstName
        this.lastName = lastName
    }
    
    talk(){
        console.log(`My name is  ${this.firstName} ${this.lastName}`);  
    }
}

class Man extends Person{
constructor(username: string, firstName: string, lastName: string){
    super(username, firstName, lastName)
}
}


let Winnie = new Man('@kiki', 'Winnie', 'Kiara')
robert.talk()