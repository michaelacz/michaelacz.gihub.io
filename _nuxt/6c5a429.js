(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{285:function(t,e,o){var content=o(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("588ca5c4",content,!0,{sourceMap:!1})},300:function(t,e,o){"use strict";o(285)},301:function(t,e,o){var r=o(12)(!1);r.push([t.i,".portfolioNavHolder[data-v-3e2230c9]{text-decoration:none;flex-direction:column}.portfolioNavHolder[data-v-3e2230c9],.portImageHolder[data-v-3e2230c9]{height:100%;display:flex;align-items:center;width:100%;transition:.5s}.portImageHolder[data-v-3e2230c9]{position:relative;justify-content:flex-end;opacity:1;margin:1%;filter:grayscale(1);letter-spacing:2px;font-size:2.5vw;text-transform:uppercase;-webkit-text-stroke:1px var(--color-primary);-webkit-text-fill-color:hsla(0,0%,100%,0);z-index:0}.portTechs[data-v-3e2230c9]{color:var(--color-primary);align-self:flex-end;opacity:0;transition:.5s}.portImageHolder[data-v-3e2230c9]:hover{filter:grayscale(0);-webkit-text-fill-color:var(--color-primary);letter-spacing:0;z-index:6}.portImageHolder:hover+.portTechs[data-v-3e2230c9]{opacity:1}.portImage[data-v-3e2230c9]{width:100%;transition:.5s}.portName[data-v-3e2230c9]{font-size:2vw}@media only screen and (max-width:600px){.portImageHolder[data-v-3e2230c9]{font-size:5.5vw}.portTechs[data-v-3e2230c9]{opacity:1}}",""]),t.exports=r},325:function(t,e,o){"use strict";o.r(e);var r={props:["portfolioName","portfolioImage","portfolioTechs","index"],methods:{activePort:function(t){this.$emit("setActiveOpacity",t)},mouseMove:function(t){this.$emit("setDetPos",t)}}},n=(o(300),o(3)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"portfolioNavHolder",attrs:{id:"portNav"+t.index,to:"/portfolio/"+t.portfolioName}},[o("div",{staticClass:"portImageHolder",on:{mousemove:function(e){return t.mouseMove(e)},mouseover:function(e){return t.activePort(t.index)},mouseleave:function(e){return t.activePort(-1)}}},[t._v("\n    "+t._s(t.portfolioName)+"\n  ")]),t._v(" "),o("div",{staticClass:"portTechs"},[t._v(t._s(t.portfolioTechs))])])}),[],!1,null,"3e2230c9",null);e.default=component.exports}}]);