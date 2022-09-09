(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{3544:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/character",function(){return s(2682)}])},2682:function(e,t,s){"use strict";s.r(t);var r=s(5893),l=s(9008),a=s.n(l),n=(s(1664),s(7294)),d=s(9367);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,n.useState)(null),t=(e[0],e[1]),s=(0,n.useState)([]),l=(s[0],s[1]),i=(0,n.useState)("");i[0],i[1];(0,n.useEffect)((function(){console.log("yoo");var e=(0,d.ZP)("localhost:3001");t(e),e.on("connect",(function(e){console.log("client connected successfully!")})),e.on("message",(function(e){l((function(t){return c(t).concat([e])}))}))}),[t]);return(0,r.jsxs)("div",{className:"container mx-auto mt-4 max-w-7xl",children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"DnD Character Sheet"}),(0,r.jsx)("meta",{name:"Customized dnd character sheet",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{id:"actionBar",className:"flex flex-row flex-nowrap justify-start",children:[(0,r.jsx)("button",{className:"text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2",children:"Save Changes"}),(0,r.jsx)("button",{className:"text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2",children:"Load"}),(0,r.jsx)("button",{className:"text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2",children:"Login"}),(0,r.jsx)("button",{className:"text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2",children:(0,r.jsx)("a",{href:"./",children:"Home"})})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{id:"default-input",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Character Name"}),(0,r.jsx)("input",{type:"text",id:"default-input",className:"bg-gray-50 border border-gray-300 text-gray-900 text-lg font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Character Name"})]}),(0,r.jsx)("div",{id:"TabArea",children:(0,r.jsxs)("ul",{className:"flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-blue-700 dark:border-gray-700 dark:text-gray-400",id:"toptabs","data-tabs-toggle":"#tabContent",role:"tablist",children:[(0,r.jsx)("li",{className:"mr-8",role:"presentation",children:(0,r.jsx)("button",{className:"inline-block p-4 border-solid rounded-t-lg border-blue-700 border-t border-x hover:underline hover:border-blue-700",id:"stats-tab","data-tabs-target":"#stats",type:"button",role:"tab","aria-controls":"stats","aria-selected":"true",children:"Stats & Abilities"})}),(0,r.jsx)("li",{className:"mr-8",role:"presentation",children:(0,r.jsx)("button",{className:"inline-block p-4 border-solid rounded-t-lg border-blue-700 border-t border-x hover:underline hover:border-blue-700",id:"notes-tab","data-tabs-target":"#notes",type:"button",role:"tab","aria-controls":"notes","aria-selected":"false",children:"Notes, Personality, etc"})})]})}),(0,r.jsxs)("div",{id:"tabContent",children:[(0,r.jsx)("div",{className:"mt-4",id:"stats",role:"tabpanel","aria-labelledby":"stats-tab",children:(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-x-8 gap-y-8",children:[(0,r.jsx)("div",{id:"basicInfo",className:"col-span-3 col-end-auto",children:(0,r.jsxs)("div",{className:"flex justify-start flex-wrap flex-row items-center",children:[(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Class"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndclass",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Race"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndrace",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Background"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndbackground",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Alignment"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndalignment",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Level"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndlevel",size:"1",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Experience"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndexp",size:"2",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Speed"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndspeed",size:"2",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Initiative"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndinitiative",size:"2",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Armor Class"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndac",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Hit Points"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndhp",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Temporary HP"})}),(0,r.jsx)("dd",{className:"ml-8",children:(0,r.jsx)("input",{type:"text",id:"dndtemphp",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"})})]}),(0,r.jsxs)("dl",{className:"flex flex-row justify-start items-center mb-4 mr-6 mt-2",children:[(0,r.jsx)("dt",{children:(0,r.jsx)("label",{className:"mb-2 text-sm font-medium text-gray-900",children:"Proficiency Bonus"})}),(0,r.jsx)("dd",{className:"ml-8",children:"+0"})]})]})}),(0,r.jsxs)("div",{id:"skillsAttributes",className:"col-span-1 border-solid rounded-md border-gray-600 border p-2",children:[(0,r.jsx)("h2",{className:"text-base font-bold",children:"Attributes"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Str"}),(0,r.jsx)("input",{type:"number",max:20,min:3,className:"text-xs"}),(0,r.jsx)("span",{children:"0"}),(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsx)("input",{type:"image",src:"d20-32px.svg",className:"inline-block object-contain h-5"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Dex"}),(0,r.jsx)("input",{type:"number",max:20,min:3,className:"text-xs"}),(0,r.jsx)("span",{children:"0"}),(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsx)("input",{type:"image",src:"d20-32px.svg",className:"inline-block object-contain h-5"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Con"}),(0,r.jsx)("input",{type:"number",max:20,min:3,className:"text-xs"}),(0,r.jsx)("span",{children:"0"}),(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsx)("input",{type:"image",src:"d20-32px.svg",className:"inline-block object-contain h-5"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Int"}),(0,r.jsx)("input",{type:"number",max:20,min:3,className:"text-xs"}),(0,r.jsx)("span",{children:"0"}),(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsx)("input",{type:"image",src:"d20-32px.svg",className:"inline-block object-contain h-5"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Wis"}),(0,r.jsx)("input",{type:"number",max:20,min:3,className:"text-xs"}),(0,r.jsx)("span",{children:"0"}),(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsx)("input",{type:"image",src:"d20-32px.svg",className:"inline-block object-contain h-5"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Cha"}),(0,r.jsx)("input",{type:"number",max:20,min:3,className:"text-xs"}),(0,r.jsx)("span",{children:"0"}),(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsx)("input",{type:"image",src:"d20-32px.svg",className:"inline-block object-contain h-5"})]})]}),(0,r.jsx)("h2",{className:"text-base font-bold",children:"Skills"}),(0,r.jsx)("div",{})]}),(0,r.jsx)("div",{id:"weaponAttacks",className:"col-span-2 col-start-2 border-solid rounded-md border-gray-600 border p-2",children:(0,r.jsx)("p",{children:"somesuff"})}),(0,r.jsx)("div",{id:"spells",className:"col-span-3 border-solid rounded-md border-gray-600 border p-2",children:(0,r.jsx)("p",{children:"extra"})})]})}),(0,r.jsx)("div",{className:"mt-4",id:"notes",role:"tabpanel","aria-labelledby":"notes-tab",children:(0,r.jsx)("p",{children:"notes stuff"})})]}),(0,r.jsx)("script",{src:"https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"})]})}}},function(e){e.O(0,[996,367,774,888,179],(function(){return t=3544,e(e.s=t);var t}));var t=e.O();_N_E=t}]);