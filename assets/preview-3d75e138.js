const r=(i="www.bitrix24.ru")=>{const o=`//${i}/bitrix/js/ui`,t=["design-tokens/dist/ui.design-tokens.min.css","alerts/ui.alerts.min.css","buttons/ui.buttons.min.css","buttons/icons/ui.buttons.icons.min.css","fonts/opensans/ui.font.opensans.min.css","forms/ui.forms.min.css","icons/b24/ui.icons.b24.min.css","icons/base/ui.icons.base.min.css","icons/disk/ui.icons.disk.min.css","icons/service/ui.icons.service.min.css","progressbar/ui.progressbar.min.css"].reduce((s,c)=>{const e=[o,c].join("/");if(document.querySelectorAll(`[href="${e}"]`).length)return s;const n=document.createElement("link");return n.rel="stylesheet",n.href=e,s.append(n),s},new DocumentFragment);document.head.prepend(t)};r();const a={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{a as default};
//# sourceMappingURL=preview-3d75e138.js.map
