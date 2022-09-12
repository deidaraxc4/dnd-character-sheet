export class CharacterModel {
    constructor(json) {
        Object.assign(this, json);
    }
}

export const Default5eChar = {
    name: "",
    class: "",
    race: "",
    background: "",
    alignment: "",
    level: 1,
    experience: "",
    speed: "",
    initiative: "",
    armorclass: "",
    hp: "",
    temphp: "",
    inspiration: false,
    
}