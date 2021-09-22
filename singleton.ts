class Logger {
    private static loggedinUser = null;
    private static username: string;
    private static password: string;   
    private constructor(usernameArg:string, passwordArg:string) {
        Logger.username = usernameArg;
        Logger.password = passwordArg;
    }
   static login(usernameArg:string, passwordArg:string){
         if(Logger.loggedinUser === null){
             Logger.loggedinUser = new Logger(usernameArg, passwordArg)
         } else{
             return null
         } 
    }
    static logout(){
        Logger.loggedinUser = null
    }
    static getLoggedinUser(){
        return Logger.username;   
    }
}
let mozillainstance = Logger
let user1 = mozillainstance.login('djmark', 'spindoctor');
console.log(mozillainstance.getLoggedinUser());

mozillainstance.logout()
let user2 = mozillainstance.login('djcollines', 'spindoctor');
console.log(mozillainstance.getLoggedinUser());

mozillainstance.logout()
let user3 = mozillainstance.login('winnie', 'spindoctor');
console.log(mozillainstance.getLoggedinUser());

