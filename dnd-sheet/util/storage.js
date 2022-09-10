const getCharacter = () => {
    return JSON.parse(localStorage.getItem("dndCharacter"))
}

const saveCharacter = (name, char) => {
    localStorage.setItem(`dndCharacter-${name}`, JSON.stringify(char))
}

const getCharacterNames = () => {
    const res = [];
    for (var key in localStorage) {
        if (key.startsWith("dndCharacter-")) {
            res.push(key)
        }
    }
    return res;
}

export { getCharacter, saveCharacter, getCharacterNames }