(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8508e752"],{1079:function(e,t,n){"use strict";var a=n("541c");t["a"]=a["a"]},"1cef":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{md:"6"}},[n("sidebar-basic")],1),n("b-col",{attrs:{md:"6"}},[n("sidebar-placement")],1),n("b-col",{attrs:{md:"6"}},[n("sidebar-variant")],1),n("b-col",{attrs:{md:"6"}},[n("sidebar-header")],1),n("b-col",{attrs:{md:"6"}},[n("sidebar-footer")],1),n("b-col",{attrs:{md:"6"}},[n("sidebar-without-backdrop")],1)],1)},r=[],o=n("a15b"),i=n("b28b"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Sidebar Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("BootstrapVue's custom ")]),n("code",[e._v("<b-sidebar>")]),n("span",[e._v(" component is a fixed-position toggleable slide out box, which can be used for navigation, menus, details, etc.")])]),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),n("b-sidebar",{attrs:{id:"sidebar-1",shadow:"","bg-variant":"white",backdrop:""}},[n("sidebar-content")],1)],1)],1)},s=[],b=n("1079"),l=n("1947"),c=n("baa4"),p=n("d6e4"),u=n("39ba"),v=n("e009"),g="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-1\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-1\"\n      shadow\n      bg-variant=\"white\"\n      backdrop\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport { BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    BImg,\n    SidebarContent\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",m='\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-toggle.sidebar-no-header\n      variant="outline-primary"\n    >\n      Toggle Sidebar\n    </b-button>\n\n    <b-sidebar\n      id="sidebar-no-header"\n      aria-labelledby="sidebar-no-header-title"\n      no-header\n      bg-variant="white"\n      shadow\n      backdrop\n    >\n      <sidebar-content class="pt-2" />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\nimport SidebarContent from \'./SidebarContent.vue\'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    \'b-toggle\': VBToggle,\n     Ripple,\n  },\n}\n<\/script>\n',f="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-right\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-right\"\n      bg-variant=\"white\"\n      right\n      backdrop\n      shadow\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n  },\n}\n<\/script>\n",h="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-variant\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n\n    <b-sidebar\n      id=\"sidebar-variant\"\n      bg-variant=\"dark\"\n      text-variant=\"light\"\n      shadow\n      backdrop\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",B="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-backdrop\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar Without Backdrop\n    </b-button>\n\n    <b-sidebar\n      id=\"sidebar-backdrop\"\n      bg-variant=\"white\"\n      shadow\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport { codeBackdrop } from './code'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",_="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-footer\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-footer\"\n      aria-label=\"Sidebar with custom footer\"\n      shadow\n      backdrop\n      bg-variant=\"white\"\n    >\n      <sidebar-content />\n      <template #footer>\n        <sidebar-content-footer />\n      </template>\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport { BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\nimport SidebarContentFooter from './SidebarContentFooter.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    BCardText,\n    SidebarContent,\n    SidebarContentFooter,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-center"},[a("b-avatar",{staticClass:"mr-1",attrs:{size:"72px",src:n("ed5f")}}),a("b-card-text",{staticClass:"mt-2 h4 color-inherit text-reset"},[e._v(" Black Widow ")])],1),a("b-list-group",{staticClass:"mt-3 rounded-0"},e._l(e.sidebarItems,(function(t){return a("b-list-group-item",{key:t.title,staticClass:"bg-transparent"},[a("feather-icon",{staticClass:"align-text-bottom",attrs:{icon:t.icon}}),a("span",{staticClass:"ml-1",domProps:{textContent:e._s(t.title)}})],1)})),1)],1)},C=[],w=n("e8a3"),x=n("3135"),y=n("d247"),k={components:{BAvatar:w["a"],BListGroup:x["a"],BListGroupItem:y["a"],BCardText:p["a"]},data:function(){return{sidebarItems:[{title:"Dashboard",icon:"GridIcon"},{title:"Analytics",icon:"ActivityIcon"},{title:"History",icon:"RefreshCwIcon"},{title:"Configuration",icon:"SettingsIcon"},{title:"Profile",icon:"UserIcon"}]}}},T=k,R=n("2877"),V=Object(R["a"])(T,S,C,!1,null,null,null),N=V.exports,I={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],SidebarContent:N,BCardText:p["a"]},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeBasic:g}}},O=I,j=Object(R["a"])(O,d,s,!1,null,null,null),E=j.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Sidebar Placement"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codePlacement)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("By default the sidebar will be placed on the left side fo the viewport. Set the ")]),n("code",[e._v("right")]),n("span",[e._v(" prop to ")]),n("code",[e._v("true")]),n("span",[e._v(" to have the sidebar appear on the right side of the viewport.")])]),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),n("b-sidebar",{attrs:{id:"sidebar-right","bg-variant":"white",right:"",backdrop:"",shadow:""}},[n("sidebar-content")],1)],1)],1)},F=[],P={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],SidebarContent:N,BCardText:p["a"]},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codePlacement:f}}},H=P,A=Object(R["a"])(H,$,F,!1,null,null,null),L=A.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Sidebar Variant"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVariant)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use the props ")]),n("code",[e._v("bg-variant")]),n("span",[e._v(" and ")]),n("code",[e._v("text-variant")]),n("span",[e._v(" to control the theme color variant of the background and text, respectively. Alternatively, you can apply styles or classes to specify the background and text colors. ")])]),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-variant",modifiers:{"sidebar-variant":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),n("b-sidebar",{attrs:{id:"sidebar-variant","bg-variant":"dark","text-variant":"light",shadow:"",backdrop:""}},[n("sidebar-content")],1)],1)],1)},G=[],J={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],SidebarContent:N,BCardText:p["a"]},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeVariant:h}}},U=J,Y=Object(R["a"])(U,W,G,!1,null,null,null),z=Y.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Hiding the default header"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeHeader)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can disable the default header (including the close button) via the ")]),n("code",[e._v("no-header")]),n("span",[e._v(" prop. Note that you will need to provide a method of closing the sidebar. The ")]),n("code",[e._v("default")]),n("span",[e._v(" slot is scoped, which includes a")]),n("code",[e._v("hide()")]),n("span",[e._v(" method that can be used to close the sidebar.")])]),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-no-header",modifiers:{"sidebar-no-header":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),n("b-sidebar",{attrs:{id:"sidebar-no-header","aria-labelledby":"sidebar-no-header-title","no-header":"","bg-variant":"white",shadow:"",backdrop:""}},[n("sidebar-content",{staticClass:"pt-2"})],1)],1)],1)},q=[],K={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],SidebarContent:N,BCardText:p["a"]},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeHeader:m}}},M=K,Q=Object(R["a"])(M,D,q,!1,null,null,null),X=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Footer"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFooter)+" ")]},proxy:!0}])},[n("b-card-text",[n("code",[e._v("<b-sidebar>")]),n("span",[e._v(" provides a ")]),n("code",[e._v("footer")]),n("span",[e._v(" slot (optionally scoped), to allow you to provide content that appears at the bottom of the sidebar. The ")]),n("code",[e._v("footer")]),n("span",[e._v(" slot is scoped, which includes a")]),e._v(" "),n("code",[e._v("hide()")]),n("span",[e._v(" method that can be used to close the sidebar.")])]),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-footer",modifiers:{"sidebar-footer":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),n("b-sidebar",{attrs:{id:"sidebar-footer","aria-label":"Sidebar with custom footer",shadow:"",backdrop:"","bg-variant":"white"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("sidebar-content-footer")]},proxy:!0}])},[n("sidebar-content")],1)],1)],1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-2 border-top text-danger cursor-pointer"},[n("feather-icon",{attrs:{icon:"LogOutIcon"}}),n("span",{staticClass:"ml-1"},[e._v("Logout")])],1)},ne=[],ae={},re=Object(R["a"])(ae,te,ne,!1,null,null,null),oe=re.exports,ie={components:{BCardCode:b["a"],BButton:l["a"],BSidebar:c["a"],BCardText:p["a"],SidebarContent:N,SidebarContentFooter:oe},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeFooter:_}}},de=ie,se=Object(R["a"])(de,Z,ee,!1,null,null,null),be=se.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Backdrop"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBackdrop)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Sidebar component don't have backdrop by default. You can add it using ")]),n("code",[e._v("backdrop")]),n("span",[e._v(" prop. Below demo shows sidebar "),n("strong",[e._v("without")]),e._v(" backdrop")])]),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar Without Backdrop ")]),n("b-sidebar",{attrs:{id:"sidebar-backdrop","bg-variant":"white",shadow:""}},[n("sidebar-content")],1)],1)],1)},ce=[],pe={components:{BCardCode:b["a"],BButton:l["a"],BCardText:p["a"],BSidebar:c["a"],SidebarContent:N},directives:{"b-toggle":u["a"],Ripple:v["a"]},data:function(){return{codeBackdrop:B}}},ue=pe,ve=Object(R["a"])(ue,le,ce,!1,null,null,null),ge=ve.exports,me={components:{BRow:o["a"],BCol:i["a"],SidebarBasic:E,SidebarPlacement:L,SidebarVariant:z,SidebarHeader:X,SidebarFooter:be,SidebarWithoutBackdrop:ge}},fe=me,he=Object(R["a"])(fe,a,r,!1,null,null,null);t["default"]=he.exports}}]);
//# sourceMappingURL=chunk-8508e752.5e51b02b.js.map