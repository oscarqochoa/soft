(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-796178b9"],{"088b":function(t,s,r){"use strict";var a=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("svg",{attrs:{viewBox:"0 0 139 95",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"24"}},[r("defs",[r("linearGradient",{attrs:{id:"linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%"}},[r("stop",{attrs:{"stop-color":"#000000",offset:"0%"}}),r("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1),r("linearGradient",{attrs:{id:"linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%"}},[r("stop",{attrs:{"stop-color":"#EEEEEE","stop-opacity":"0",offset:"0%"}}),r("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1)],1),r("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{id:"Artboard",transform:"translate(-400.000000, -178.000000)"}},[r("g",{attrs:{id:"Group",transform:"translate(400.000000, 178.000000)"}},[r("path",{staticClass:"text-primary",staticStyle:{fill:"currentColor"},attrs:{id:"Path",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"}}),r("path",{attrs:{id:"Path1",d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#linearGradient-1)",opacity:"0.2"}}),r("polygon",{attrs:{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}}),r("polygon",{attrs:{id:"Path-21",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}}),r("polygon",{attrs:{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"}})])])])])},e=[],o=r("2877"),i={},n=Object(o["a"])(i,a,e,!1,null,null,null);s["a"]=n.exports},"297d":function(t,s,r){"use strict";r("43aa")},"43aa":function(t,s,r){},"85fc":function(t,s,r){"use strict";r.r(s);var a=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"auth-wrapper auth-v1 px-2"},[r("div",{staticClass:"auth-inner py-2"},[r("b-card",{staticClass:"mb-0"},[r("b-link",{staticClass:"brand-logo"},[r("vuexy-logo"),r("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Vuexy ")])],1),r("b-card-title",{staticClass:"mb-1"},[t._v(" Reset Password 🔒 ")]),r("b-card-text",{staticClass:"mb-2"},[t._v(" Your new password must be different from previously used passwords ")]),r("validation-observer",{ref:"simpleRules"},[r("b-form",{staticClass:"auth-reset-password-form mt-2",attrs:{method:"POST"},on:{submit:function(s){return s.preventDefault(),t.validationForm.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"New Password","label-for":"reset-password-new"}},[r("validation-provider",{attrs:{name:"Password",vid:"Password",rules:"required|password"},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.errors;return[r("b-input-group",{staticClass:"input-group-merge",class:a.length>0?"is-invalid":null},[r("b-form-input",{staticClass:"form-control-merge",attrs:{id:"reset-password-new",type:t.password1FieldType,state:!(a.length>0)&&null,name:"reset-password-new",placeholder:"············"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.password1ToggleIcon},on:{click:t.togglePassword1Visibility}})],1)],1),r("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1),r("b-form-group",{attrs:{"label-for":"reset-password-confirm",label:"Confirm Password"}},[r("validation-provider",{attrs:{name:"Confirm Password",rules:"required|confirmed:Password"},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.errors;return[r("b-input-group",{staticClass:"input-group-merge",class:a.length>0?"is-invalid":null},[r("b-form-input",{staticClass:"form-control-merge",attrs:{id:"reset-password-confirm",type:t.password2FieldType,state:!(a.length>0)&&null,name:"reset-password-confirm",placeholder:"············"},model:{value:t.cPassword,callback:function(s){t.cPassword=s},expression:"cPassword"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.password2ToggleIcon},on:{click:t.togglePassword2Visibility}})],1)],1),r("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}])})],1),r("b-button",{attrs:{block:"",type:"submit",variant:"primary"}},[t._v(" Set New Password ")])],1)],1),r("p",{staticClass:"text-center mt-2"},[r("b-link",{attrs:{to:{name:"auth-login-v1"}}},[r("feather-icon",{attrs:{icon:"ChevronLeftIcon"}}),t._v(" Back to login ")],1)],1)],1)],1)])},e=[],o=r("7bb1"),i=r("088b"),n=r("205f"),l=r("1947"),d=r("4968"),p=r("d6e4"),c=r("11de"),u=r("8226"),f=r("5e12"),w=r("aa59"),m=r("4797"),g=r("ccc0"),b=r("8f03"),v=r("223c"),y={components:{VuexyLogo:i["a"],BCard:n["a"],BButton:l["a"],BCardTitle:d["a"],BCardText:p["a"],BForm:c["a"],BFormGroup:u["a"],BInputGroup:f["a"],BLink:w["a"],BFormInput:m["a"],BInputGroupAppend:g["a"],ValidationProvider:o["b"],ValidationObserver:o["a"]},data:function(){return{userEmail:"",cPassword:"",password:"",required:b["l"],password1FieldType:"password",password2FieldType:"password"}},computed:{password1ToggleIcon:function(){return"password"===this.password1FieldType?"EyeIcon":"EyeOffIcon"},password2ToggleIcon:function(){return"password"===this.password2FieldType?"EyeIcon":"EyeOffIcon"}},methods:{togglePassword1Visibility:function(){this.password1FieldType="password"===this.password1FieldType?"text":"password"},togglePassword2Visibility:function(){this.password2FieldType="password"===this.password2FieldType?"text":"password"},validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(s){s&&t.$toast({component:v["a"],props:{title:"Form Submitted",icon:"EditIcon",variant:"success"}})}))}}},h=y,C=(r("297d"),r("2877")),x=Object(C["a"])(h,a,e,!1,null,null,null);s["default"]=x.exports}}]);
//# sourceMappingURL=chunk-796178b9.ff127f4d.js.map