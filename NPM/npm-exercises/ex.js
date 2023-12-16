const validator = require('validator');
console.log(validator.isEmail('shoobert@dylan'))
console.log(validator.isMobilePhone('786-329-9958', "en-US"))

let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
let text = "I'M SO EXCITED!!!~!";
let cleanedText = validator.blacklist(text, blacklist.join(""))
console.log(cleanedText.toLowerCase())

const { faker } = require('@faker-js/faker');

const makeHuman = function(num){
    for( let i=0 ; i<num ; i++){
        let name = faker.person.firstName()
        let image = faker.image.avatar()
        console.log(name,image)
    }
}

makeHuman(1)
