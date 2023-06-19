import{a as d}from"./chunk-OPEUWD42-a3b45fd8.js";import{d as _,a as s,b as o,F as h,j as F,e as u,n as y,o as r}from"./vue.esm-bundler-47f028ed.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{c as V}from"./countries-493721ef.js";const k=_({methods:{onClick(e,n,f,m){this.clickable&&(e.preventDefault(),this.$emit(m,n,f))}},data(){return{hoverDelete:[]}},emits:["add","click","auxclick","delete"],props:{list:{type:Array,default:()=>[]},displayField:{type:String,default:"name"},displayFieldLink:{type:String,default:""},textAdd:{type:String,default:"Добавить"},textMore:{type:String,default:"Добавить ещё"},textChange:{type:String,default:"Сменить"},clickable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},inline:{type:Boolean,default:!1}},name:"bx-entity-selector"});const $={class:"bx-entity-selector__button"},M={class:"bx-entity-selector__items"},S=["href","onClick","onAuxclick"],A={key:1,class:"bx-entity-selector__text"},B=["onMouseenter","onMouseleave","onClick"],L={class:"bx-entity-selector__controls"};function D(e,n,f,m,E,w){return r(),s("div",{class:y(["bx-entity-selector",{inline:e.inline}])},[o("div",$,[o("span",M,[(r(!0),s(h,null,F(e.list,(l,a)=>(r(),s("span",{key:a,class:y(["bx-entity-selector__item",{"hover-delete":e.hoverDelete[a]}])},[e.clickable?(r(),s("a",{key:0,href:l[e.displayFieldLink],target:"_blank",class:"bx-entity-selector__text",onClick:i=>e.onClick(i,a,l,"click"),onAuxclick:i=>e.onClick(i,a,l,"auxclick")},u(l[e.displayField]),41,S)):(r(),s("span",A,u(l[e.displayField]),1)),o("button",{class:"bx-entity-selector__delete",onMouseenter:i=>e.hoverDelete[a]=!0,onMouseleave:i=>e.hoverDelete[a]=!1,onClick:i=>e.$emit("delete",a,l)},null,40,B)],2))),128))]),o("span",L,[o("button",{class:"bx-entity-selector__add",onClick:n[0]||(n[0]=l=>e.$emit("add"))},u(e.list.length?e.multiple?e.textMore:e.textChange:e.textAdd),1)])])],2)}const v=C(k,[["render",D]]);k.__docgenInfo={displayName:"bx-entity-selector",exportName:"default",description:"",tags:{},props:[{name:"list",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"displayField",type:{name:"string"},defaultValue:{func:!1,value:"'name'"}},{name:"displayFieldLink",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"textAdd",type:{name:"string"},defaultValue:{func:!1,value:"'Добавить'"}},{name:"textMore",type:{name:"string"},defaultValue:{func:!1,value:"'Добавить ещё'"}},{name:"textChange",type:{name:"string"},defaultValue:{func:!1,value:"'Сменить'"}},{name:"clickable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"inline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"delete"},{name:"add"},{name:"click"},{name:"auxclick"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxEntitySelector.vue"]};const p=V.map(e=>({...e,url:`https://www.google.com/search?q=${e.name}`})),t={list:[],displayField:"name",displayFieldLink:"",textAdd:"Добавить",textMore:"Добавить ещё",textChange:"Сменить",clickable:!1,multiple:!1,inline:!1},z={title:"bx-entity-selector",component:v,tags:["autodocs"],args:{add:d("add"),click:d("click"),auxclick:d("auxclick"),delete:d("delete"),list:t.list,displayField:t.displayField,displayFieldLink:t.displayFieldLink,textAdd:t.textAdd,textMore:t.textMore,textChange:t.textChange,clickable:t.clickable,multiple:t.multiple,inline:t.inline},argTypes:{list:{mapping:p,options:p.map((e,n)=>n),control:{type:"multi-select",labels:p.map(e=>`{ code: ${e.code}, name: ${e.name}, url: ${e.url} }`)}},displayField:{options:["code","name","url"],defaultValue:t.displayField,control:{type:"inline-radio"}},displayFieldLink:{options:["","url"],defaultValue:t.displayFieldLink,control:{type:"inline-radio"}},textAdd:{defaultValue:t.textAdd,control:{type:"text"}},textMore:{defaultValue:t.textMore,control:{type:"text"}},textChange:{defaultValue:t.textChange,control:{type:"text"}},clickable:{defaultValue:t.clickable,control:{type:"boolean"}},multiple:{defaultValue:t.multiple,control:{type:"boolean"}},inline:{defaultValue:t.inline,control:{type:"boolean"}}}},c={render:e=>({template:'<bx-entity-selector v-bind="args" v-on="args"></bx-entity-selector>',data:()=>({args:e}),components:{BxEntitySelector:v}})};var x,b,g;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    template: '<bx-entity-selector v-bind="args" v-on="args"></bx-entity-selector>',
    data: () => ({
      args
    }),
    components: {
      BxEntitySelector
    }
  })
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const I=["Default"];export{c as Default,I as __namedExportsOrder,z as default};
//# sourceMappingURL=BxEntitySelector.stories-65b827b6.js.map
