
/*A factory function is any function which is not a class or constructor that returns a (presumably new) object. 
In JavaScript, any function can return an object. When it does so without the new keyword, it's a factory function. .*/

const phoneFactory= (type, color, system, ringTone) =>{
    return{
        type: type,
        color: color,
        system: system,
        ringTone: ringTone,
        sound(){
            console.log(ringTone);
        },
        phoneType(){
            console.log(type);
        }
    }
}

const samsung = phoneFactory('mobile', 'black', 'android', 'cute song')
samsung.sound()
samsung.phoneType()