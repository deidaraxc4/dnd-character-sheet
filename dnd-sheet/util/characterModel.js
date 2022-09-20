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
        {
            name: "Str", 
            proficient: false, 
            score: 10
        },
        {
            name: "Dex", 
            proficient: false, 
            score: 10 
        },
        {
            name: "Con", 
            proficient: false, 
            score: 10
        },
        {
            name: "Int", 
            proficient: false, 
            score: 10
        },
        {
            name: "Wis", 
            proficient: false, 
            score: 10
        },
        {
            name: "Cha", 
            proficient: false, 
            score: 10
        }
    ],
    skills: [
        {name: "Acrobatics (Dex)", proficient: false, doubleproficient: false, id: "Dex"},
        {name: "Animal Handling (Wis)", proficient: false, doubleproficient: false, id: "Wis"},
        {name: "Arcana (Int)", proficient: false, doubleproficient: false, id: "Int"},
        {name: "Athletics (Str)", proficient: false, doubleproficient: false, id: "Str"},
        {name: "Deception (Cha)", proficient: false, doubleproficient: false, id: "Cha"},
        {name: "History (Int)", proficient: false, doubleproficient: false, id: "Int"},
        {name: "Insight (Wis)", proficient: false, doubleproficient: false, id: "Wis"},
        {name: "Intimidation (Cha)", proficient: false, doubleproficient: false, id: "Cha"},
        {name: "Investigation (Int)", proficient: false, doubleproficient: false, id: "Int"},
        {name: "Medicine (Wis)", proficient: false, doubleproficient: false, id: "Wis"},
        {name: "Nature (Int)", proficient: false, doubleproficient: false, id: "Int"},
        {name: "Perception (Wis)", proficient: false, doubleproficient: false, id: "Wis"},
        {name: "Performance (Cha)", proficient: false, doubleproficient: false, id: "Cha"},
        {name: "Persuasion (Cha)", proficient: false, doubleproficient: false, id: "Cha"},
        {name: "Religion (Int)", proficient: false, doubleproficient: false, id: "Int"},
        {name: "Sleight of Hand (Dex)", proficient: false, doubleproficient: false, id: "Dex"},
        {name: "Stealth (Dex)", proficient: false, doubleproficient: false, id: "Dex"},
        {name: "Survival (Wis)", proficient: false, doubleproficient: false, id: "Wis"},
    ],
    attacks: [
        {name: "", attbonus: 0, damage: "", typenotes: "", id: 0}
    ],
    features: "",
    otherprofs: "",
    equipment: "",
    cp: "0",
    sp: "0",
    gp: "0",
    pp: "0"
}