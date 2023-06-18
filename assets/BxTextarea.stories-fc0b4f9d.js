import{a as b}from"./chunk-OPEUWD42-a3b45fd8.js";import{d as g,a as z,b as v,n as V,o as y}from"./vue.esm-bundler-c8b1aa06.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const l={resizes:["","no","y","x"]},f=g({emits:["update:modelValue"],props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},resize:{type:String,default:"",validator(e){return l.resizes.includes(e)}},disabled:{type:Boolean,default:!1}},name:"bx-textarea"}),B=["value","placeholder","disabled"];function S(e,t,n,T,$,k){return y(),z("div",{class:V(["ui-ctl ui-ctl-textarea",{"ui-ctl-no-resize":e.resize==="no","ui-ctl-resize-y":e.resize==="y","ui-ctl-resize-x":e.resize==="x"}])},[v("textarea",{class:"ui-ctl-element",value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,onInput:t[0]||(t[0]=x=>e.$emit("update:modelValue",x.target.value))},null,40,B)],2)}const o=h(f,[["render",S]]);f.__docgenInfo={displayName:"bx-textarea",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"resize",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxTextarea.vue"]};const a={modelValue:"",placeholder:"",resize:"",disabled:!1},E={title:"bx-textarea",component:o,tags:["autodocs"],args:{"update:modelValue":b("update:modelValue"),modelValue:a.modelValue,placeholder:a.placeholder,resize:a.resize,disabled:a.disabled},argTypes:{modelValue:{defaultValue:a.modelValue,control:{type:"text"}},placeholder:{defaultValue:a.placeholder,control:{type:"text"}},resize:{options:l.resizes,defaultValue:a.resize,control:{type:"inline-radio"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},r={render:e=>({template:'<bx-textarea v-bind="args" v-on="args"></bx-textarea>',data:()=>({args:e}),components:{BxTextarea:o}})},_=(e,t)=>({render:n=>({template:`
      <div v-for="item in propList" :key="item" class="component">
        <bx-textarea v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-textarea>
      </div>
    `,data:()=>({args:n,propName:e,propList:t}),components:{BxTextarea:o}}),argTypes:{[e]:{table:{disable:!0}}}}),s=_("resize",l.resizes);var d,i,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    template: '<bx-textarea v-bind="args" v-on="args"></bx-textarea>',
    data: () => ({
      args
    }),
    components: {
      BxTextarea
    }
  })
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"Story('resize', props.resizes)",...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const I=["Default","Resizes"];export{r as Default,s as Resizes,I as __namedExportsOrder,E as default};
//# sourceMappingURL=BxTextarea.stories-fc0b4f9d.js.map
