(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dcb951d"],{"2c71":function(t,e,s){},"91ca":function(t,e,s){"use strict";s("2c71")},"9ed9":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-home"},[s("div",{staticClass:"pt-5 center-card-home"},[s("b-row",{staticClass:"justify-content-center"},t._l(t.userModules,(function(e,o){return s("b-col",{key:o,staticClass:"text-center mb-5 center-fix",attrs:{md:"2",sm:"4",cols:"6"}},[(t.enviroment,"crm"==e.module_route||"socialnetwork"==e.module_route?s("router-link",{staticClass:"card-logo",attrs:{to:{path:e.module_route}}},[s("img",{staticClass:"mt-13",class:[3,5,6,7,8,11,12].includes(e.module_id)?"":"gray-home",attrs:{src:t.baseUrl+e.module_icon,alt:"Logo",width:"65",height:"65"}}),s("p",{staticClass:"font-name-home mt-2",class:["dark"==t.skin?"text-light":"text-dark"]},[t._v(t._s(e.module_name))])]):s("div",{staticClass:"card-logo cursor-pointer",on:{click:function(s){return t.redirectToOldSoft(e.module_route)}}},[s("img",{staticClass:"mt-13",class:[3,5,6,7,8,11,12].includes(e.module_id)?"":"gray-home",attrs:{src:t.baseUrl+e.module_icon,alt:"Logo",width:"65",height:"65"}}),s("p",{staticClass:"font-name-home mt-2"},[t._v(" "+t._s(e.module_name)+" ")])]))],1)})),1)],1)])},r=[],n=(s("99af"),{data:function(){return{menuHidden:this.$store.state.appConfig.layout.menu.hidden,navbarConfig:this.$store.state.appConfig.layout.navbar.type,enviroment:"deploy"}},computed:{userModules:function(){return Array.isArray(this.currentUser.arrRoles)?this.currentUser.arrRoles:JSON.parse(this.currentUser.arrRoles)},currentUser:function(){return this.$store.getters["auth/currentUser"]},skin:function(){return this.$store.getters["appConfig/skin"]}},mounted:function(){},created:function(){this.$store.commit("appConfig/UPDATE_NAV_MENU_HIDDEN",!0),this.$store.commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:"sticky"})},destroyed:function(){this.$store.commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:"sticky"}),this.$store.commit("appConfig/UPDATE_NAV_MENU_HIDDEN",this.menuHidden),this.$store.commit("appConfig/UPDATE_LAYOUT_TYPE","vertical")},methods:{redirectToOldSoft:function(t){window.open("".concat("https://pre.amgsoft.us/","api/v1/auth/autologin?id=").concat(this.currentUser.user_id,"&route=").concat(t),"_blank")}}}),i=n,a=(s("91ca"),s("2877")),c=Object(a["a"])(i,o,r,!1,null,"12d83096",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1dcb951d.648d8c5a.js.map