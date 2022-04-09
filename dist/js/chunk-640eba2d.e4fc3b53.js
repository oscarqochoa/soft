(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-640eba2d"],{"0eb5":function(t,a,i){},3259:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return Object.keys(t.pricing).length?s("section",{attrs:{id:"pricing-plan"}},[s("div",{staticClass:"text-center"},[s("h1",{staticClass:"mt-5"},[t._v(" Pricing Plans ")]),s("p",{staticClass:"mb-2 pb-75"},[t._v(" All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs. ")]),s("div",{staticClass:"d-flex align-items-center justify-content-center mb-5 pb-50"},[s("h6",{staticClass:"mr-1 mb-0"},[t._v(" Monthly ")]),s("b-form-checkbox",{attrs:{id:"priceSwitch",name:"price-switch",value:"annually","unchecked-value":"monthly",switch:""},on:{input:t.tooglePlan},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}}),s("h6",{staticClass:"ml-50 mb-0"},[t._v(" Annually ")])],1)]),s("b-row",{staticClass:"pricing-card"},[s("b-col",{staticClass:"mx-auto",attrs:{"offset-sm-2":"",sm:"10",md:"12","offset-lg":"2",lg:"10"}},[s("b-row",[s("b-col",{attrs:{md:"4"}},[s("b-card",{attrs:{align:"center"}},[t.pricing.basicPlan.img?s("b-img",{staticClass:"mb-2 mt-5",attrs:{src:t.pricing.basicPlan.img,alt:"basic svg img"}}):t._e(),s("h3",[t._v(t._s(t.pricing.basicPlan.title))]),s("b-card-text",[t._v(" "+t._s(t.pricing.basicPlan.subtitle)+" ")]),s("div",{staticClass:"annual-plan"},[s("div",{staticClass:"plan-price mt-2"},[s("sup",{staticClass:"font-medium-1 font-weight-bold text-primary"},[t._v("$")]),s("span",{staticClass:"pricing-basic-value font-weight-bolder text-primary"},[t._v(t._s(t.monthlyPlanShow?t.pricing.basicPlan.monthlyPrice:t.pricing.basicPlan.yearlyPlan.perMonth))]),s("sub",{staticClass:"pricing-duration text-body font-medium-1 font-weight-bold"},[t._v("/month")])]),s("small",{directives:[{name:"show",rawName:"v-show",value:!t.monthlyPlanShow,expression:"!monthlyPlanShow"}],staticClass:"annual-pricing text-muted"},[t._v("USD "+t._s(t.pricing.basicPlan.yearlyPlan.totalAnual)+" / year")])]),s("b-list-group",{staticClass:"list-group-circle text-left"},t._l(t.pricing.basicPlan.planBenefits,(function(a,i){return s("b-list-group-item",{key:i},[t._v(" "+t._s(a)+" ")])})),1),s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2",attrs:{block:"",variant:"outline-success"}},[t._v(" Your current plan ")])],1)],1),s("b-col",{attrs:{md:"4"}},[s("b-card",{staticClass:"popular",attrs:{align:"center"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.pricing.standardPlan.popular,expression:"pricing.standardPlan.popular"}],staticClass:"pricing-badge text-right"},[s("b-badge",{attrs:{variant:"light-primary",pill:""}},[t._v(" Popular ")])],1),t.pricing.standardPlan.img?s("b-img",{staticClass:"mb-1",attrs:{src:t.pricing.standardPlan.img,alt:"svg img"}}):t._e(),s("h3",[t._v(t._s(t.pricing.standardPlan.title))]),s("b-card-text",[t._v(t._s(t.pricing.standardPlan.subtitle))]),s("div",{staticClass:"annual-plan"},[s("div",{staticClass:"plan-price mt-2"},[s("sup",{staticClass:"font-medium-1 font-weight-bold text-primary"},[t._v("$")]),s("span",{staticClass:"pricing-basic-value font-weight-bolder text-primary"},[t._v(t._s(t.monthlyPlanShow?t.pricing.standardPlan.monthlyPrice:t.pricing.standardPlan.yearlyPlan.perMonth))]),s("sub",{staticClass:"pricing-duration text-body font-medium-1 font-weight-bold"},[t._v("/month")])]),s("small",{directives:[{name:"show",rawName:"v-show",value:!t.monthlyPlanShow,expression:"!monthlyPlanShow"}],staticClass:"annual-pricing text-muted"},[t._v("USD "+t._s(t.pricing.standardPlan.yearlyPlan.totalAnual)+" / year")])]),s("b-list-group",{staticClass:"list-group-circle text-left"},t._l(t.pricing.standardPlan.planBenefits,(function(a,i){return s("b-list-group-item",{key:i},[t._v(" "+t._s(a)+" ")])})),1),s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2",attrs:{block:"",variant:"primary"}},[t._v(" Upgrade ")])],1)],1),s("b-col",{attrs:{md:"4"}},[s("b-card",{attrs:{align:"center"}},[t.pricing.enterprisePlan.img?s("b-img",{staticClass:"mb-2",attrs:{src:t.pricing.enterprisePlan.img,alt:"enterprise svg img"}}):t._e(),s("h3",[t._v(t._s(t.pricing.enterprisePlan.title))]),s("b-card-text",[t._v(t._s(t.pricing.enterprisePlan.subtitle))]),s("div",{staticClass:"annual-plan"},[s("div",{staticClass:"plan-price mt-2"},[s("sup",{staticClass:"font-medium-1 font-weight-bold text-primary"},[t._v("$")]),s("span",{staticClass:"pricing-basic-value font-weight-bolder text-primary"},[t._v(t._s(t.monthlyPlanShow?t.pricing.enterprisePlan.monthlyPrice:t.pricing.enterprisePlan.yearlyPlan.perMonth))]),s("sub",{staticClass:"pricing-duration text-body font-medium-1 font-weight-bold"},[t._v("/month")])]),s("small",{directives:[{name:"show",rawName:"v-show",value:!t.monthlyPlanShow,expression:"!monthlyPlanShow"}],staticClass:"annual-pricing text-muted"},[t._v("USD "+t._s(t.pricing.enterprisePlan.yearlyPlan.totalAnual)+" / year")])]),t._l(t.pricing.enterprisePlan.planBenefits,(function(a,i){return s("b-list-group",{key:i,staticClass:"list-group-circle text-left"},[s("b-list-group-item",[t._v(" "+t._s(a)+" ")])],1)})),s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2",attrs:{block:"",variant:"outline-primary"}},[t._v(" Upgrade ")])],2)],1)],1)],1)],1),s("div",{staticClass:"pricing-free-trial"},[s("b-row",[s("b-col",{staticClass:"mx-auto",attrs:{lg:"10","offset-lg":"3"}},[s("div",{staticClass:"pricing-trial-content d-flex justify-content-between"},[s("div",{staticClass:"text-center text-md-left mt-3"},[s("h3",{staticClass:"text-primary"},[t._v(" Still not convinced? Start with a 14-day FREE trial! ")]),s("h5",[t._v("You will get full access to with all the features for 14 days.")]),s("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2 mt-lg-3",attrs:{variant:"primary"}},[t._v(" Start 14-day FREE trial ")])],1),s("b-img",{staticClass:"pricing-trial-img",attrs:{fluid:"",src:i("399a"),alt:"svg img"}})],1)])],1)],1),s("div",{staticClass:"pricing-faq"},[s("h3",{staticClass:"text-center"},[t._v(" FAQ's ")]),s("p",{staticClass:"text-center"},[t._v(" Let us help answer the most common questions. ")]),s("b-row",{staticClass:"py-2"},[s("b-col",{staticClass:"mx-auto",attrs:{lg:"10","offset-lg":"2"}},[s("app-collapse",{attrs:{accordion:"",type:"margin"}},t._l(t.pricing.qandA,(function(a,i){return s("app-collapse-item",{key:i,attrs:{title:a.question}},[t._v(" "+t._s(a.ans)+" ")])})),1)],1)],1)],1)],1):t._e()},e=[],n=i("c3e6"),l=i("1947"),r=i("d6e4"),c=i("3135"),o=i("d247"),p=i("a15b"),m=i("b28b"),u=i("205f"),g=i("e98b"),d=i("4918"),b=i("c4e2"),v=i("adbc"),h=i("e009"),f={components:{BFormCheckbox:n["a"],BButton:l["a"],BCardText:r["a"],BListGroup:c["a"],BListGroupItem:o["a"],BRow:p["a"],BCol:m["a"],BCard:u["a"],BBadge:g["a"],BImg:d["a"],AppCollapseItem:v["a"],AppCollapse:b["a"]},directives:{Ripple:h["a"]},data:function(){return{status:"monthly",monthlyPlanShow:!0,pricing:{}}},created:function(){var t=this;this.$http.get("/pricing/data").then((function(a){t.pricing=a.data}))},methods:{tooglePlan:function(){"monthly"===this.status?this.monthlyPlanShow=!0:this.monthlyPlanShow=!1}}},y=f,_=(i("8a63"),i("2877")),w=Object(_["a"])(y,s,e,!1,null,null,null);a["default"]=w.exports},"399a":function(t,a,i){t.exports=i.p+"img/pricing-Illustration.ef667188.svg"},"8a63":function(t,a,i){"use strict";i("0eb5")}}]);
//# sourceMappingURL=chunk-640eba2d.e4fc3b53.js.map