
var NUMOFCATS = 0;
var NUMOFDOGS = 0;
var NUMOFHUMANS = 0;
var food = 0;

function ValidGender(gender){
    //only two valid genders, female or male
    //we do not accept trans
    const validgenders = ["female","male","malewithoutballs"]
    return (validgenders.includes(gender))
}

function see(who,what){
    //return the total number of cats exists so far.
    //TODO: need to figure out a way other than polluted global variable.
    if (what == "cat"){
        console.log(`${who.name} sees ${NUMOFCATS} cats`);
    }
    else if (what == "dog"){
        console.log(`${who.name} sees ${NUMOFDOGS} dogs`);
    }
    else if (what == "human"){
        console.log(`${who.name} sees ${NUMOFDOGS} human`);
    }
}

class Human{
    constructor(name){
        this.name = name;
        NUMOFHUMANS += 1;
    }
    toString(){
        console.log(`I am hooman ${this.name}`);
    }

    givefood(amount){
        console.log("unimportant slave is giving food");
        food += amount;
    }
}
class Dog{
    constructor(name){
        this.name = name;
        NUMOFDOGS += 1;
    }
}

class Cat{
    constructor(name,gender){
        //name: a string
        //gender : is a string, can only be "Female" or "Male"
        this.name = name;
        if (gender){
            if (ValidGender(gender)){this.gender = gender}
            else{
                alert("invalid gender, we don't accept trans in our community!");
            }}
        else{this.gender = "malewithoutballs";}
        NUMOFCATS += 1;
        alert(`Hi, I am a ${this.gender} cat named ${this.name}.`)
    }
    
    toString(){
        console.log(`I am ${this.name}, a ${this.gender} ^ ^`)
    }
    
    typeof(){
        console.log(this.isA)
        return this.isA
    }

    lick(thing){
        console.log(`${this.name} licks ${thing.name}`)
    }

    attack(thing){
        console.log(`${this.name} slaps ${thing.name}`)
    }
}


