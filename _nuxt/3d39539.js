(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{293:function(t,e,o){var content=o(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("1bd7c8a8",content,!0,{sourceMap:!1})},308:function(t,e,o){"use strict";o(293)},309:function(t,e,o){var n=o(12)(!1);n.push([t.i,".customButton[data-v-44cce969]{width:10vh;height:10vh;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:2%;cursor:pointer;transition:.5s}.customButton[data-v-44cce969]:hover{transform:scale(1.1)}img[data-v-44cce969]{position:relative;height:80%}@media only screen and (max-width:600px){.customButton[data-v-44cce969]{width:5vh;height:5vh;font-size:.8rem}}",""]),t.exports=n},310:function(t,e,o){"use strict";o.r(e);var n={props:["buttonName","buttonColor","colorHover"],data:function(){return{hovering:!1,tempName:"download.webp"}},methods:{mouseOver:function(){this.hovering=!0},mouseLeave:function(){this.hovering=!1}},computed:{style:function(){return this.hovering?"background: "+this.$props.colorHover:"background: "+this.$props.buttonColor},imgName:function(){return this.$props.buttonName+".webp"}}},r=(o(308),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"customButton",style:t.style,on:{mouseover:t.mouseOver,mouseleave:t.mouseLeave}},[o("img",{attrs:{src:"img/common/"+t.imgName,alt:"Custom Button"}})])}),[],!1,null,"44cce969",null);e.default=component.exports}}]);