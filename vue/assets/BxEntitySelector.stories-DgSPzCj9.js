import{f as u}from"./index-CjQa9iMn.js";import{S as B}from"./Story-YA5z4d3s.js";import{d as G,r as I,o as l,f as m,g as s,n as c,F as k,s as T,t as S}from"./vue.esm-bundler-Dqph7xbu.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const e={list:[],displayField:"name",displayFieldLink:"",textAdd:"Добавить",textMore:"Добавить ещё",textChange:"Сменить",clickable:!1,multiple:!1,inline:!1},P=["href","onClick","onAuxclick"],v=["onMouseenter","onMouseleave","onClick"],h=G({__name:"BxEntitySelector",props:{list:{type:Array,default:()=>e.list},displayField:{type:String,default:e.displayField},displayFieldLink:{type:String,default:e.displayFieldLink},textAdd:{type:String,default:e.textAdd},textMore:{type:String,default:e.textMore},textChange:{type:String,default:e.textChange},clickable:{type:Boolean,default:e.clickable},multiple:{type:Boolean,default:e.multiple},inline:{type:Boolean,default:e.inline}},emits:["add","click","auxclick","delete"],setup(n,{emit:y}){const o=n,_=y,b=I({hoverDelete:[]});function f(a,r,d,t){o.clickable&&(a.preventDefault(),_(t,r,d))}return(a,r)=>(l(),m("div",{class:c([a.$style["bx-entity-selector"],{[a.$style.inline]:o.inline}])},[s("div",{class:c(a.$style["bx-entity-selector__button"])},[s("span",{class:c(a.$style["bx-entity-selector__items"])},[(l(!0),m(k,null,T(o.list,(d,t)=>(l(),m("span",{key:t,class:c([a.$style["bx-entity-selector__item"],{[a.$style["hover-delete"]]:b.hoverDelete[t]}])},[o.clickable?(l(),m("a",{key:0,href:d[n.displayFieldLink],target:"_blank",class:c(a.$style["bx-entity-selector__text"]),onClick:i=>f(i,t,d,"click"),onAuxclick:i=>f(i,t,d,"auxclick")},S(d[n.displayField]),43,P)):(l(),m("span",{key:1,class:c(a.$style["bx-entity-selector__text"])},S(d[n.displayField]),3)),s("button",{class:c(a.$style["bx-entity-selector__delete"]),onMouseenter:i=>b.hoverDelete[t]=!0,onMouseleave:i=>b.hoverDelete[t]=!1,onClick:i=>a.$emit("delete",t,d)},null,42,v)],2))),128))],2),s("span",{class:c(a.$style["bx-entity-selector__controls"])},[s("button",{class:c(a.$style["bx-entity-selector__add"]),onClick:r[0]||(r[0]=d=>a.$emit("add"))},S(o.list.length?o.multiple?o.textMore:o.textChange:o.textAdd),3)],2)],2)],2))}}),N="_inline_10w3u_6",L={"bx-entity-selector":"_bx-entity-selector_10w3u_2",inline:N,"bx-entity-selector__button":"_bx-entity-selector__button_10w3u_10","bx-entity-selector__item":"_bx-entity-selector__item_10w3u_17","hover-delete":"_hover-delete_10w3u_30","bx-entity-selector__text":"_bx-entity-selector__text_10w3u_34","bx-entity-selector__delete":"_bx-entity-selector__delete_10w3u_47","bx-entity-selector__add":"_bx-entity-selector__add_10w3u_80"},R={$style:L},x=F(h,[["__cssModules",R]]);h.__docgenInfo={exportName:"default",displayName:"BxEntitySelector",description:"",tags:{},props:[{name:"list",type:{name:"any[]"},defaultValue:{func:!0,value:"() => defaultProps.list"}},{name:"displayField",type:{name:"string"},defaultValue:{func:!1,value:"defaultProps.displayField"}},{name:"displayFieldLink",type:{name:"string"},defaultValue:{func:!1,value:"defaultProps.displayFieldLink"}},{name:"textAdd",type:{name:"string"},defaultValue:{func:!1,value:"defaultProps.textAdd"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"defaultProps.textMore"}},{name:"textChange",type:{name:"string"},defaultValue:{func:!1,value:"defaultProps.textChange"}},{name:"clickable",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.clickable"}},{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.multiple"}},{name:"inline",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.inline"}}],events:[{name:"delete"},{name:"add"},{name:"click"},{name:"auxclick"}],sourceFiles:["/home/valentin/WebstormProjects/ui-bitrix24/vue/src/components/BxEntitySelector.vue"]};const E=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],M=E.map(n=>({...n,url:`https://www.google.com/search?q=${n.name}`})),D={add:u(),click:u(),auxclick:u(),delete:u()},H={title:"bx-entity-selector",component:x,args:{...D,list:e.list,displayField:e.displayField,displayFieldLink:e.displayFieldLink,textAdd:e.textAdd,textMore:e.textMore,textChange:e.textChange,clickable:e.clickable,multiple:e.multiple,inline:e.inline},argTypes:{list:{mapping:M,options:M.map((n,y)=>y),control:{type:"multi-select",labels:M.map(n=>`{ code: ${n.code}, name: ${n.name}, url: ${n.url} }`)}},displayField:{options:["code","name","url"],control:{type:"inline-radio"}},displayFieldLink:{options:["","url"],control:{type:"inline-radio"}},textAdd:{control:{type:"text"}},textMore:{control:{type:"text"}},textChange:{control:{type:"text"}},clickable:{control:{type:"boolean"}},multiple:{control:{type:"boolean"}},inline:{control:{type:"boolean"}}}},p=B(x);var g,C,A;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:"Story(BxEntitySelector)",...(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const $=["Default"];export{p as Default,$ as __namedExportsOrder,H as default};
