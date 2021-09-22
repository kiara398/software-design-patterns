
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
let robert = new Person('@kiki', 'Winnie', 'Kiara')
robert.talk()