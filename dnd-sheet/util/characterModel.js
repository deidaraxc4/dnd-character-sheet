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
    attributes: [
        {name: "Str", proficient: false, score: 10 },
        {name: "Dex", proficient: false, score: 10 },
        {name: "Con", proficient: false, score: 10 },
        {name: "Int", proficient: false, score: 10 },
        {name: "Wis", proficient: false, score: 10 },
        {name: "Cha", proficient: false, score: 10 }
    ]
}