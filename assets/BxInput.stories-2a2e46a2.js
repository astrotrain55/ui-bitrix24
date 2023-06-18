import{a as r}from"./chunk-OPEUWD42-a3b45fd8.js";import{d as G,a as V,k as v,n as s,l as I,f as g,e as H,b as J,i as K,o as u}from"./vue.esm-bundler-c8b1aa06.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const o={sizes:["lg","md","sm","xs"],colors:["","success","warning","danger"],icons:["","search","calendar","dots","phone","mail","clock","angle","clear","loader"],tagColors:["default","primary","success","warning","danger"]},q=G({emits:["update:modelValue","change","click-before","click-after"],props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},size:{type:String,default:"md",validator(e){return o.sizes.includes(e)}},color:{type:String,default:"",validator(e){return o.colors.includes(e)}},width:{type:String,default:""},inline:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},underline:{type:Boolean,default:!1},noPadding:{type:Boolean,default:!1},round:{type:Boolean,default:!1},tag:{type:String,default:""},tagColor:{type:String,default:"default",validator(e){return o.tagColors.includes(e)}},beforeIcon:{type:String,default:"",validator(e){return o.icons.includes(e)}},beforeExt:{type:Boolean,default:!1},beforeButton:{type:Boolean,default:!1},afterIcon:{type:String,default:"",validator(e){return o.icons.includes(e)}},afterExt:{type:Boolean,default:!1},afterButton:{type:Boolean,default:!1}},name:"bx-input"});const Q=["value","placeholder","disabled"];function R(e,l,y,U,W,X){return u(),V("div",{class:s(["ui-ctl ui-ctl-textbox",{"ui-ctl-lg":e.size==="lg","ui-ctl-md":e.size==="md","ui-ctl-sm":e.size==="sm","ui-ctl-xs":e.size==="xs","ui-ctl-success":e.color==="success","ui-ctl-warning":e.color==="warning","ui-ctl-danger":e.color==="danger","ui-ctl-before-icon":e.beforeIcon&&!e.beforeExt,"ui-ctl-ext-before-icon":e.beforeIcon&&e.beforeExt,"ui-ctl-after-icon":e.afterIcon&&!e.afterExt,"ui-ctl-ext-after-icon":e.afterIcon&&e.afterExt,"ui-ctl-inline":e.inline,"ui-ctl-no-border":e.noBorder,"ui-ctl-underline":e.underline,"ui-ctl-no-padding":e.noPadding,"ui-ctl-round":e.round}]),style:K({"max-width":this.width||"initial",width:this.width||"auto"})},[e.beforeIcon?(u(),v(I(e.beforeButton?"button":"div"),{key:0,class:s({"ui-ctl-before":!e.beforeExt,"ui-ctl-ext-before":e.beforeExt,"ui-ctl-icon-search":e.beforeIcon==="search","ui-ctl-icon-calendar":e.beforeIcon==="calendar","ui-ctl-icon-dots":e.beforeIcon==="dots","ui-ctl-icon-phone":e.beforeIcon==="phone","ui-ctl-icon-mail":e.beforeIcon==="mail","ui-ctl-icon-clock":e.beforeIcon==="clock","ui-ctl-icon-angle":e.beforeIcon==="angle","ui-ctl-icon-clear":e.beforeIcon==="clear","ui-ctl-icon-loader":e.beforeIcon==="loader"}),onClick:l[0]||(l[0]=t=>e.$emit("click-before"))},null,8,["class"])):g("",!0),e.afterIcon?(u(),v(I(e.afterButton?"button":"div"),{key:1,class:s({"ui-ctl-after":!e.afterExt,"ui-ctl-ext-after":e.afterExt,"ui-ctl-icon-search":e.afterIcon==="search","ui-ctl-icon-calendar":e.afterIcon==="calendar","ui-ctl-icon-dots":e.afterIcon==="dots","ui-ctl-icon-phone":e.afterIcon==="phone","ui-ctl-icon-mail":e.afterIcon==="mail","ui-ctl-icon-clock":e.afterIcon==="clock","ui-ctl-icon-angle":e.afterIcon==="angle","ui-ctl-icon-clear":e.afterIcon==="clear","ui-ctl-icon-loader":e.afterIcon==="loader"}),onClick:l[1]||(l[1]=t=>e.$emit("click-after"))},null,8,["class"])):g("",!0),e.tag?(u(),V("div",{key:2,class:s(["ui-ctl-tag",{"ui-ctl-tag-success":e.tagColor==="success","ui-ctl-tag-primary":e.tagColor==="primary","ui-ctl-tag-danger":e.tagColor==="danger","ui-ctl-tag-warning":e.tagColor==="warning"}])},H(e.tag),3)):g("",!0),J("input",{type:"text",class:"ui-ctl-element",value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,onInput:l[2]||(l[2]=t=>e.$emit("update:modelValue",t.target.value)),onChange:l[3]||(l[3]=t=>e.$emit("change",t.target.value))},null,40,Q)],6)}const b=M(q,[["render",R]]);q.__docgenInfo={displayName:"bx-input",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noBorder",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"underline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noPadding",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"round",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tagColor",type:{name:"string"},defaultValue:{func:!1,value:"'default'"}},{name:"beforeIcon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"beforeExt",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"beforeButton",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"afterIcon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"afterExt",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"afterButton",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click-before"},{name:"click-after"},{name:"update:modelValue"},{name:"change"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxInput.vue"]};const a={modelValue:"",placeholder:"",disabled:!1,size:"md",color:"",width:"",inline:!1,noBorder:!1,underline:!1,noPadding:!1,round:!1,tag:"",tagColor:"default",beforeIcon:"",beforeExt:!1,beforeButton:!1,afterIcon:"",afterExt:!1,afterButton:!1},_={title:"bx-input",component:b,tags:["autodocs"],args:{"update:modelValue":r("update:modelValue"),change:r("change"),"click-before":r("click-before"),"click-after":r("click-after"),modelValue:a.modelValue,placeholder:a.placeholder,disabled:a.disabled,size:a.size,color:a.color,width:a.width,inline:a.inline,noBorder:a.noBorder,underline:a.underline,noPadding:a.noPadding,round:a.round,tag:a.tag,tagColor:a.tagColor,beforeIcon:a.beforeIcon,beforeExt:a.beforeExt,beforeButton:a.beforeButton,afterIcon:a.afterIcon,afterExt:a.afterExt,afterButton:a.afterButton},argTypes:{modelValue:{defaultValue:a.modelValue,control:{type:"text"}},placeholder:{defaultValue:a.placeholder,control:{type:"text"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}},size:{options:o.sizes,defaultValue:a.size,control:{type:"inline-radio"}},color:{options:o.colors,defaultValue:a.color,control:{type:"inline-radio"}},width:{defaultValue:a.width,control:{type:"text"}},inline:{defaultValue:a.inline,control:{type:"boolean"}},noBorder:{defaultValue:a.noBorder,control:{type:"boolean"}},underline:{defaultValue:a.underline,control:{type:"boolean"}},noPadding:{defaultValue:a.noPadding,control:{type:"boolean"}},round:{defaultValue:a.round,control:{type:"boolean"}},tag:{defaultValue:a.tag,control:{type:"text"}},tagColor:{options:o.tagColors,defaultValue:a.tagColor,control:{type:"inline-radio"}},beforeIcon:{options:o.icons,defaultValue:a.beforeIcon,control:{type:"select"}},beforeExt:{defaultValue:a.beforeExt,control:{type:"boolean"}},beforeButton:{defaultValue:a.beforeButton,control:{type:"boolean"}},afterIcon:{options:o.icons,defaultValue:a.afterIcon,control:{type:"select"}},afterExt:{defaultValue:a.afterExt,control:{type:"boolean"}},afterButton:{defaultValue:a.afterButton,control:{type:"boolean"}}}},i={render:e=>({template:'<bx-input v-bind="args" v-on="args" v-model="args.modelValue"></bx-input>',data:()=>({args:e}),components:{BxInput:b}})},n=(e,l)=>({render:y=>({template:`
      <div v-for="item in propList" :key="item" class="component">
        <bx-input v-bind="args" v-on="args" :[propName]="item" v-model="args.modelValue"></bx-input>
      </div>
    `,data:()=>({args:y,propName:e,propList:l}),components:{BxInput:b}}),args:{tag:e==="tagColor"?"tag":""},argTypes:{[e]:{table:{disable:!0}}}}),c=n("color",o.colors),d=n("size",o.sizes),f=n("beforeIcon",o.icons),p=n("afterIcon",o.icons),m=n("tagColor",o.tagColors);var B,h,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    template: '<bx-input v-bind="args" v-on="args" v-model="args.modelValue"></bx-input>',
    data: () => ({
      args
    }),
    components: {
      BxInput
    }
  })
}`,...(C=(h=i.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,S,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:"Story('color', props.colors)",...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var z,w,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:"Story('size', props.sizes)",...(P=(w=d.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var $,D,T;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:"Story('beforeIcon', props.icons)",...(T=(D=f.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var N,A,j;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:"Story('afterIcon', props.icons)",...(j=(A=p.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var F,L,O;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:"Story('tagColor', props.tagColors)",...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const ee=["Default","Colors","Sizes","BeforeIcons","AfterIcons","TagColors"];export{p as AfterIcons,f as BeforeIcons,c as Colors,i as Default,d as Sizes,m as TagColors,ee as __namedExportsOrder,_ as default};
//# sourceMappingURL=BxInput.stories-2a2e46a2.js.map
