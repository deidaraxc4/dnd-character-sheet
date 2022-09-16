import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { rollDice } from '../../util/roll'
import { CharacterModel, Default5eChar } from '../../util/characterModel'
import { getCharacter, getCharacterNames, saveCharacter } from '../../util/storage'
import Dice from 'dice-notation-js';

const Character = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [characterModel, setCharacterModel] = useState(new CharacterModel(Default5eChar));
    const [listsaves, setListsaves] = useState([]);

    // useEffect(() => {
    //     console.log("yoo")
    //     const socket = socketIOClient('localhost:3001');
    //     setSocket(socket)
    //     socket.on('connect', (data) => {
    //         console.log('client connected successfully!')
    //     })
    //     socket.on('message',(msg) => {
    //         setMessages( msgs => [...msgs, msg])
    //     })
    // },[setSocket]);

    // const handleRoll = () => {
    //     const randomNumber = Math.floor(Math.random() * 6) + 1;
    //     socket.emit('message', `${name} rolled a ${randomNumber}!`)
    // }

    // curry function
    const handleChange = prop => (e) => {
        if (prop === "inspiration") {
            let updatedVal = {}
            updatedVal[prop] = e.target.checked
            setCharacterModel(model => ({
                ...characterModel,
                ...updatedVal
            }))
            return;
        }
        let updatedVal = {}
        updatedVal[prop] = e.target.value
        setCharacterModel(model => ({
            ...characterModel,
            ...updatedVal
        }))
    }

    const handleAttrChange = attr => (e) => {
        const currAttributes = characterModel.attributes;
        const index = currAttributes.findIndex(element => element.name === attr);
        currAttributes[index] = {
            ...currAttributes[index],
            score: Number(e.target.value)
        }
        setCharacterModel(model => ({
            ...characterModel,
            attributes: currAttributes
        }))
    }

    const handleAttrProficient = attr => (e) => {
        const currAttributes = characterModel.attributes;
        const index = currAttributes.findIndex(element => element.name === attr);
        currAttributes[index] = {
            ...currAttributes[index],
            proficient: Boolean(e.target.checked)
        }
        setCharacterModel(model => ({
            ...characterModel,
            attributes: currAttributes
        }))
    }

    const handleSkillChange = skill => (e) => {
        const skills = characterModel.skills;
        const index = skills.findIndex(element => element.name === skill);
        skills[index] = {
            ...skills[index],
            proficient: Boolean(e.target.checked)
        }
        setCharacterModel(model => ({
            ...characterModel,
            skills: skills
        }))
    }

    const handleSkillDPChange = skill => (e) => {
        const skills = characterModel.skills;
        const index = skills.findIndex(element => element.name === skill);
        skills[index] = {
            ...skills[index],
            doubleproficient: Boolean(e.target.checked)
        }
        setCharacterModel(model => ({
            ...characterModel,
            skills: skills
        }))
    }

    const handleSave = () => {
        if (characterModel.name) {
            saveCharacter(characterModel.name, characterModel)
            alert(`${characterModel.name} character saved!`)
        }
    }

    const handleLoad = () => {
        const res = getCharacterNames();
        setListsaves(res);
    }

    const handleLoadCharacter = (e) => {
        const id = e.target.getAttribute("id");
        const character = getCharacter(id);
        setCharacterModel(character);
        alert(`Character ${id} loaded!`);
    }

    // triple func currying...
    const handleAttChange = id => prop => (e) => {
        const attCopy = {...characterModel.attacks[id]};
        attCopy[prop] = e.target.value;
        const attacksCopy = [...characterModel.attacks];
        attacksCopy[id] = attCopy;
        setCharacterModel(model => ({
            ...characterModel,
            attacks: attacksCopy
        }))
    }

    const handleRemoveAtt = id => (e) => {
        const attacksCopy = [...characterModel.attacks];
        const res = attacksCopy.filter(element => element.id != id);
        setCharacterModel(model => ({
            ...characterModel,
            attacks: res
        }))
    }

    const handleAddAtt = () => {
        const attacksCopy = [...characterModel.attacks];
        const att = {name: "", attbonus: 0, damage: "", typenotes: ""};
        att["id"] = characterModel.attacks[characterModel.attacks.length-1]["id"] + 1;
        attacksCopy.push(att);
        setCharacterModel(model => ({
            ...characterModel,
            attacks: attacksCopy
        }))
    }

    const handleWeaponRoll = () => {
        console.log(Dice("1d20"));
    }

    const handeSkillRoll = () => {
        console.log(Dice("1d20"));
    }

    const handleAttributeRoll = () => {
        console.log(Dice("1d20"));
    }

    return (
        <div className="container mx-auto mt-4 max-w-7xl">
            <Head>
                <title>DnD Character Sheet</title>
                <meta name="Customized dnd character sheet" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="actionBar" className="flex flex-row flex-nowrap justify-start">
                <button onClick={handleSave} className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 mr-2 mb-2">Save</button>
                <button onClick={handleLoad} className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 mr-2 mb-2" data-modal-toggle="loadModal" id="loadCharacterBtn">Load</button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 mr-2 mb-2" data-modal-toggle="loginModal">Login</button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 mr-2 mb-2"><a href="./">Home</a></button>
            </div>
            {JSON.stringify(characterModel)}

            <div id="loginModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Login Integration
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Discord
                            </p>
                        </div>
                        <div className="flex flex-row-reverse items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button data-modal-toggle="loginModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="loadModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Load Character
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            {listsaves.map((save) => {
                                return(
                                    <li onClick={handleLoadCharacter} key={save} id={save} className="cursor-pointer underline text-blue-600">{save}</li>
                                )
                            })}
                        </div>
                        <div className="flex flex-row-reverse items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button data-modal-toggle="loadModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label id="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Character Name</label>
                <input type="text" id="default-input" value={characterModel.name} onChange={handleChange("name")} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Character Name" />
            </div>


            <div id="TabArea">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-blue-700 dark:border-gray-700 dark:text-gray-400" id="toptabs" data-tabs-toggle="#tabContent" role="tablist">
                    <li className="mr-8" role="presentation">
                        <button className="inline-block p-4 border-solid rounded-t-lg border-blue-700 border-t border-x hover:underline hover:border-blue-700" id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true">Stats &amp; Abilities</button>
                    </li>
                    <li className="mr-8" role="presentation">
                        <button className="inline-block p-4 border-solid rounded-t-lg border-blue-700 border-t border-x hover:underline hover:border-blue-700" id="notes-tab" data-tabs-target="#notes" type="button" role="tab" aria-controls="notes" aria-selected="false">Notes, Personality, etc</button>
                    </li>
                </ul>
            </div>

            <div id="tabContent">
                <div className="mt-4" id="stats" role="tabpanel" aria-labelledby='stats-tab'>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-8">

                        <div id="basicInfo" className="col-span-3 col-end-auto">
                            <div className="flex justify-start flex-wrap flex-row items-center">
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Class</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndclass" value={characterModel.class} onChange={handleChange("class")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Race</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndrace" value={characterModel.race} onChange={handleChange("race")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Background</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndbackground" value={characterModel.background} onChange={handleChange("background")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Alignment</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndalignment" value={characterModel.alignment} onChange={handleChange("alignment")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Level</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="number" id="dndlevel" size="1" min={1} max={20} value={characterModel.level} onChange={handleChange("level")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Experience</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndexp" size="2" value={characterModel.experience} onChange={handleChange("experience")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Speed</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndspeed" size="2" value={characterModel.speed} onChange={handleChange("speed")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Initiative</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndinitiative" size="2" value={characterModel.initiative} onChange={handleChange("initiative")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Armor Class</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndac" size="2" value={characterModel.armorclass} onChange={handleChange("armorclass")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Hit Points</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndhp" size="4" value={characterModel.hp} onChange={handleChange("hp")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Temporary HP</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndtemphp" size="2" value={characterModel.temphp} onChange={handleChange("temphp")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Inspiration</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="checkbox" id="dndinspiration" size="2" value={characterModel.inspiration} onChange={handleChange("inspiration")} className="px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Proficiency Bonus</label>
                                </dt>
                                <dd className="ml-8">
                                    {"+"+Math.ceil(1+(characterModel.level / 4))}
                                </dd>
                            </dl>
                            </div>
                        </div>

                        <div id="skillsAttributes" className="col-span-1 border-solid rounded-md border-gray-600 border p-2">
                            <h2 className="text-base font-bold mb-4">Attributes</h2>
                            <div>
                                {characterModel.attributes.map((attr) => {
                                    return(
                                        <div key={attr.name} className="mb-2">
                                            <label className="mr-6 text-sm font-bold">{attr.name}</label>
                                            <input type="number" max={25} min={1} value={attr.score} onChange={handleAttrChange(attr.name)} className="text-xs mr-4 w-12 border-dotted border rounded-md px-2 py-1" />
                                            <span className="mr-4 font-bold">{Math.floor((attr.score - 10) / 2)}</span>
                                            <input type="checkbox" value={attr.proficient} onChange={handleAttrProficient(attr.name)} className="mr-4 rounded-sm" />
                                            <label className="mr-4 text-sm font-bold">Save</label>
                                            <span className="mr-4">{attr.proficient ? Math.floor((attr.score - 10) / 2) + Math.ceil(1+(characterModel.level / 4)) : Math.floor((attr.score - 10) / 2)}</span>
                                            <input type="image" src="d20-32px.svg" className="mr-4 inline-block object-contain align-middle" height={20} />
                                        </div>
                                    );
                                })}
                            </div>
                            <h2 className="text-base font-bold mb-4 mt-4">Skills</h2>
                            <div>
                                {
                                    characterModel.skills.map((skill) => {
                                        const attr = characterModel.attributes.find(element => element.name === skill.id);
                                        const skl = characterModel.skills.find(element => element.name === skill.name);
                                        return(
                                            <div key={skill.name} className="mb-2">
                                                <label>
                                                    <input type="checkbox" className="mr-4 rounded-sm text-sm" onChange={handleSkillChange(skill.name)} />
                                                    <input type="checkbox" className="mr-4 rounded-sm text-sm" onChange={handleSkillDPChange(skill.name)} disabled={!skl.proficient} />
                                                </label>
                                                <span className="mr-4 text-sm">{skill.name}</span>
                                                <span className="mr-4">{skl.proficient ? skl.doubleproficient ? Math.floor((attr.score - 10) / 2) + 2*Math.ceil(1+(characterModel.level / 4)) : Math.floor((attr.score - 10) / 2) + Math.ceil(1+(characterModel.level / 4)) : Math.floor((attr.score - 10) / 2)}</span>
                                                <input type="image" src="d20-32px.svg" className="mr-4 inline-block object-contain align-middle" height={20} />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>

                        {/* dice roll regex https://regexr.com/3d70r */}
                        {/* https://www.npmjs.com/package/dice-notation-js */}
                        <div id="weaponAttacks" className="col-span-2 col-start-2 border-solid rounded-md border-gray-600 border p-2">
                            <h2 className="text-base font-bold mb-4">Weapons &amp; Attacks</h2>
                            <div className="grid grid-cols-6 gap-2">
                                <p className="font-bold">Name</p>
                                <p className="font-bold">Att Bonus</p>
                                <p className="text-xs"><strong className="text-base">Damage</strong> i.e 1d20+1</p>
                                <p className="font-bold">Type/Notes</p>
                                <p className="font-bold">Roll</p>
                                <p></p>

                                {characterModel.attacks.map((att) => {
                                    if (att.id === 0) {
                                        return(
                                            <React.Fragment key={att.id}>
                                                <input onChange={handleAttChange(att.id)("name")} value={att.name} className="text-xs px-2 py-1 border border-solid border-gray-600 rounded-sm" />
                                                <input onChange={handleAttChange(att.id)("attbonus")} value={att.attbonus} type="number" className="text-xs px-2 py-1" min={-10} max={10} />
                                                <input onChange={handleAttChange(att.id)("damage")} value={att.damage} pattern="(\d+)?d(\d+)([\+\-]\d+)?" className="text-xs px-2 py-1 border border-solid border-gray-600 rounded-sm" />
                                                <input onChange={handleAttChange(att.id)("typenotes")} value={att.typenotes} className="text-xs px-2 py-1 border border-solid border-gray-600 rounded-sm" />
                                                <input type="image" onClick={handleWeaponRoll} src="d20-32px.svg" className="mr-4 inline-block object-contain align-middle" height={20} />
                                                <span/>
                                            </React.Fragment>
                                        );
                                    }
                                    return(
                                        <React.Fragment key={att.id}>
                                            <input onChange={handleAttChange(att.id)("name")} value={att.name} className="text-xs px-2 py-1 border border-solid border-gray-600 rounded-sm" />
                                            <input onChange={handleAttChange(att.id)("attbonus")} value={att.attbonus} type="number" className="text-xs px-2 py-1" min={-10} max={10} />
                                            <input onChange={handleAttChange(att.id)("damage")} value={att.damage} pattern="(\d+)?d(\d+)([\+\-]\d+)?" className="text-xs px-2 py-1 border border-solid border-gray-600 rounded-sm" />
                                            <input onChange={handleAttChange(att.id)("typenotes")} value={att.typenotes} className="text-xs px-2 py-1 border border-solid border-gray-600 rounded-sm" />
                                            <input type="image" onClick={handleWeaponRoll} src="d20-32px.svg" className="mr-4 inline-block object-contain align-middle" height={20} />
                                            <button onClick={handleRemoveAtt(att.id)} className="border rounded border-gray-400">Delete</button>
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                            <button onClick={handleAddAtt} className="rounded-md border border-solid border-gray-600 p-1 mt-2">New att</button>
                        </div>

                        <div id="spells" className="col-span-3 border-solid rounded-md border-gray-600 border p-2">
                            <p>extra</p>
                        </div>

                    </div>
                </div>

                <div className="mt-4" id="notes" role="tabpanel" aria-labelledby='notes-tab'>
                    <p>notes stuff</p>
                </div>
            </div>

            <script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></script>
        </div>
    );
}

export default Character;