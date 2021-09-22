var Logger = /** @class */ (function () {
    function Logger(usernameArg, passwordArg) {
        Logger.username = usernameArg;
        Logger.password = passwordArg;
    }
    Logger.login = function (usernameArg, passwordArg) {
        if (Logger.loggedinUser === null) {
            Logger.loggedinUser = new Logger(usernameArg, passwordArg);
        }
        else {
            return null;
        }
    };
    Logger.logout = function () {
        Logger.loggedinUser = null;
    };
    Logger.getLoggedinUser = function () {
        return Logger.username;
    };
    Logger.loggedinUser = null;
    return Logger;
}());
var mozillainstance = Logger;
var user1 = mozillainstance.login('djmark', 'spindoctor');
console.log(mozillainstance.getLoggedinUser());
mozillainstance.logout();
var user2 = mozillainstance.login('djcollines', 'spindoctor');
console.log(mozillainstance.getLoggedinUser());
mozillainstance.logout();
var user3 = mozillainstance.login('winnie', 'spindoctor');
console.log(mozillainstance.getLoggedinUser());
