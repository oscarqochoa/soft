(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea7549c6"],{"10da":function(t,e,r){},2700:function(t,e,r){"use strict";r("9500")},9500:function(t,e,r){},a8a8:function(t,e,r){"use strict";r("10da")},b3e2:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header-slot",{scopedSlots:t._u([{key:"actions",fn:function(){return[r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.modalOpen(1)}}},[t._v("Create Glossary")])]},proxy:!0}])}),r("b-card",{attrs:{"no-body":""}},[r("filter-slot",{attrs:{filter:t.filter,"filter-principal":t.filterPrincipal,"total-rows":t.totalRows,"no-visible-principal-filter":!0,paginate:t.paginate,"start-page":t.startPage,"to-page":t.toPage,"send-multiple-sms":!1},on:{reload:function(e){return t.$refs["refClientsList"].refresh()}}},[r("b-table",{ref:"refClientsList",attrs:{slot:"table","no-provider-filtering":"","api-url":t.clientRoute,items:t.myProvider,fields:t.visibleFields,"primary-key":"id","table-class":"text-wrap",responsive:"sm","show-empty":"","sticky-header":"70vh","current-page":t.paginate.currentPage,"per-page":t.paginate.perPage,filter:t.searchInput},slot:"table",scopedSlots:t._u([{key:"table-busy",fn:function(){return[r("div",{staticClass:"text-center text-primary my-2"},[r("b-spinner",{staticClass:"align-middle mr-1"}),r("strong",[t._v("Loading ...")])],1)]},proxy:!0},{key:"cell(title)",fn:function(e){return[r("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[r("b-button",{staticStyle:{"padding-left":"2px","padding-right":"2px","padding-top":"5px","padding-bottom":"5px"},attrs:{variant:"flat-primary"},on:{click:function(r){return t.modalOpenEdit(3,e.item)}}},[t._v(t._s(e.item.title))])],1)]}},{key:"cell(created_at)",fn:function(e){return[r("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[r("span",[t._v(t._s(t._f("myGlobalDay")(e.item.created_at)))])])]}},{key:"cell(action)",fn:function(e){return[r("b-dropdown",{attrs:{variant:"link","no-caret":"",right:t.$store.state.appConfig.isRTL},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("feather-icon",{staticClass:"align-middle text-body",attrs:{icon:"MoreVerticalIcon",size:"16"}})]},proxy:!0}],null,!0)},[r("b-dropdown-item",{on:{click:function(r){return t.modalOpenEdit(2,e.item)}}},[r("span",{staticClass:"align-middle ml-50"},[t._v("Edit")])]),r("b-dropdown-item",{on:{click:function(r){return t.deleteGlossary(e.item)}}},[r("span",{staticClass:"align-middle ml-50"},[t._v("Delete")])])],1)]}}])})],1),t.modalChanging?r("modal-glossary",{attrs:{ifModalCard:t.modalChanging,categories:t.categories,statusModal:t.statusModal,objectGlossary:t.objectGlossary},on:{close:t.closeModal,updateCategory:t.updateCategory,updateGlossary:t.updateGlossary}}):t._e()],1)],1)},n=[],o=r("1da1"),s=r("5530"),i=(r("96cf"),r("4de4"),r("d3b7"),r("2f62")),l=r("4a7a"),c=r.n(l),u=r("d98c"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{attrs:{modal:"",title:t.titleView,size:"lg","modal-class":"modal-primary","hide-footer":"","body-class":"mb-2","title-tag":"h3","no-close-on-backdrop":!0,centered:""},on:{hidden:t.closeModal},model:{value:t.mutableIfModalCard,callback:function(e){t.mutableIfModalCard=e},expression:"mutableIfModalCard"}},[r("ValidationObserver",{ref:"form"},["3"!=t.statusModal?r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[r("ValidationProvider",{attrs:{name:"selectCategory",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("b-form-group",{attrs:{label:"Category","label-for":"category"}},[r("v-select",{staticClass:"w-100",class:{"border-danger rounded":a[0]},attrs:{options:t.categoriesModal,reduce:function(t){return t.id},label:"name"},on:{input:function(e){return t.openModalCategory()}},model:{value:t.selectCategory,callback:function(e){t.selectCategory=e},expression:"selectCategory"}})],1)]}}],null,!1,2438199382)})],1),r("div",{staticClass:"col-lg-6 col-md-6 col-sm-6"},[r("ValidationProvider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("b-form-group",{attrs:{label:" Title","label-for":"title"}},[r("b-form-input",{class:{"border-danger":a[0]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)]}}],null,!1,26659812)})],1)]):t._e(),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("div",{staticClass:"form-group mt-0"},[r("ValidationProvider",{attrs:{name:"description",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("b-form-group",{attrs:{label:"Description","label-for":"description"}},[r("b-form-textarea",{class:{"border-danger":a[0]},staticStyle:{"border-radius":"0px 10px 10px 10px",height:"120px"},attrs:{disabled:t.statusDescription},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)]}}])})],1)])],1)],1),"3"!=t.statusModal?r("b-row",[r("b-col",{staticClass:"mt-2 text-right",attrs:{md:"12"}},[t.spinnerBtn||"1"!=t.statusModal?t._e():r("b-button",{staticStyle:{"border-radius":"5px !important"},attrs:{variant:"primary"},on:{click:function(e){return t.createGlossary()}}},[t._v("Save")]),t.spinnerBtn||"2"!=t.statusModal?t._e():r("b-button",{staticStyle:{"border-radius":"5px !important"},attrs:{variant:"primary"},on:{click:function(e){return t.editGlossary()}}},[t._v("Update")]),t.spinnerBtn?r("b-button",{staticStyle:{"border-radius":"5px !important"},attrs:{variant:"primary",disabled:""}},[r("b-spinner",{attrs:{small:"",type:"grow"}}),t._v("Loading... ")],1):t._e()],1)],1):t._e()],1),t.modalChangingCategory?r("modal-add-category",{attrs:{ifModalCard:t.modalChangingCategory},on:{close:t.closeModalCategory}}):t._e()],1)},p=[],g=r("2909"),f=(r("a9e3"),r("99af"),r("a4d3"),r("e01a"),r("d4ec")),m=r("bee2"),h=r("2777"),y=function(){function t(){Object(f["a"])(this,t)}return Object(m["a"])(t,[{key:"deleteGlossary",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].post("/glossary/delete-glossary",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getCategories",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].get("/glossary/get-all-glossaries-category");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"createGlossary",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].post("/glossary/create-glossary",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"editGlossary",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].post("/glossary/edit-glossary",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"createCategory",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].post("/glossary/create-glossary-category",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),b=new y,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{attrs:{modal:"",title:"CREATE CATEGORY",size:"sm","modal-class":"modal-primary","hide-footer":"","body-class":"mb-2","title-tag":"h3","no-close-on-backdrop":!0,centered:""},on:{hidden:t.closeModalCategory},model:{value:t.ifModalCardCategory,callback:function(e){t.ifModalCardCategory=e},expression:"ifModalCardCategory"}},[r("ValidationObserver",{ref:"form"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[r("ValidationProvider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("b-form-group",{attrs:{label:""}},[r("b-input-group",{staticClass:"badge-name-group",attrs:{prepend:"NAME",size:"md"}},[r("b-form-input",{class:{"border-danger":a[0]},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)],1)]}}])})],1)])]),r("b-row",[r("b-col",{staticClass:"mt-2 text-right",attrs:{md:"12"}},[t.spinnerBtnCg?r("b-button",{staticStyle:{"border-radius":"5px !important"},attrs:{variant:"primary",disabled:""}},[r("b-spinner",{attrs:{small:"",type:"grow"}}),t._v("Loading... ")],1):r("b-button",{staticStyle:{"border-radius":"5px !important"},attrs:{variant:"primary"},on:{click:function(e){return t.createCategory()}}},[t._v("Create")])],1)],1)],1)],1)},v=[],w={props:{ifModalCard:{type:Boolean}},data:function(){return{category:null,spinnerBtnCg:!1,ifModalCardCategory:this.ifModalCard}},methods:{closeModalCategory:function(){this.$emit("close",!1)},createCategory:function(){var t=this;this.$refs.form.validate().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,t.showConfirmSwal("Create Category","Are you sure?");case 6:if(a=e.sent,!a.isConfirmed){e.next=23;break}return e.prev=8,t.spinnerBtnCg=!0,n={name:t.category},e.next=13,b.createCategory(n);case 13:e.sent,t.showToast("success","top-right","Success","CheckIcon","Category Created"),t.spinnerBtnCg=!1,t.$emit("close",!1),e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](8),t.showToast("danger","top-right","Error","XIcon","Something went wrong!"),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(t){return e.apply(this,arguments)}}())}}},x=w,k=r("2877"),_=Object(k["a"])(x,C,v,!1,null,null,null),M=_.exports,j={components:{vSelect:c.a,ModalAddCategory:M},props:{ifModalCard:{type:Boolean},categories:{type:[]},statusModal:{type:[Number,String]},objectGlossary:{type:Object}},data:function(){return{id:null,spinnerBtn:!1,title:"",modalChangingCategory:!1,description:null,selectCategory:null,mutableIfModalCard:this.ifModalCard,objectGlossaryChange:null}},computed:Object(s["a"])(Object(s["a"])({categoriesModal:function(){var t={name:"Add Category",id:"123456##@"};return[t].concat(Object(g["a"])(this.categories))}},Object(i["c"])({currentUser:"auth/currentUser"})),{},{statusDescription:function(){return"3"==this.statusModal},titleView:function(){return"3"==this.statusModal?this.objectGlossary.title:"Create Glossary"}}),methods:{createGlossary:function(){var t=this;this.$refs.form.validate().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.showConfirmSwal("CREATE","Are you sure?");case 4:if(a=e.sent,!a.isConfirmed){e.next=21;break}return e.prev=6,t.spinnerBtn=!0,n={user_id:t.currentUser.user_id,module_id:t.$route.meta.module,category_id:t.selectCategory,title:t.title,description:t.description},e.next=11,b.createGlossary(n);case 11:e.sent,t.showToast("success","top-right","Success","CheckIcon","Glossary Created"),t.spinnerBtn=!1,t.$emit("updateGlossary",!1),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](6),console.log(e.t0),t.showToast("danger","top-right","Error","XIcon","Something went wrong!");case 21:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(t){return e.apply(this,arguments)}}())},editGlossary:function(){var t=this;this.$refs.form.validate().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.showConfirmSwal("UPDATE","Are you sure?");case 4:if(a=e.sent,!a.isConfirmed){e.next=21;break}return e.prev=6,t.spinnerBtn=!0,n={id:t.id,category:t.selectCategory,title:t.title,description:t.description},e.next=11,b.editGlossary(n);case 11:e.sent,t.spinnerBtn=!1,t.showToast("success","top-right","Success","CheckIcon","Glossary Updated"),t.$emit("updateGlossary",!1),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](6),console.log(e.t0),t.showToast("danger","top-right","Error","XIcon","Something went wrong!");case 21:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(t){return e.apply(this,arguments)}}())},openModalCategory:function(){"123456##@"==this.selectCategory&&(0==this.modalChangingCategory?this.modalChangingCategory=!0:this.modalChangingCategory=!1)},closeModalCategory:function(){this.$emit("updateCategory",!1),this.selectCategory=null,this.modalChangingCategory=!1},closeModal:function(){this.$emit("close",!1),this.objectGlossaryChange=null},openModalEdit:function(t){this.id=t.id,this.title=t.title,this.description=t.description,this.selectCategory=t.category_id},initEdit:function(){this.objectGlossaryChange=this.objectGlossary,"2"!=this.statusModal&&"3"!=this.statusModal||this.openModalEdit(this.objectGlossary)}},created:function(){this.initEdit()}},O=j,G=Object(k["a"])(O,d,p,!1,null,null,null),S=G.exports,P=[{type:"select",margin:!0,showLabel:!0,label:"Category",model:null,options:[],reduce:"id",selectText:"name",cols:12},{type:"datepicker",margin:!0,showLabel:!0,label:"From",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6},{type:"datepicker",margin:!0,showLabel:!0,label:"To",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6}],R=[{key:"category",label:"Category",visible:!0},{key:"title",label:"Title",visible:!0},{key:"nameuser",label:"Created By",visible:!0},{key:"created_at",label:"Created",visible:!0},{key:"action",label:"Actions",visible:!0}],E={components:{vSelect:c.a,ModalGlossary:S,FilterSlot:u["a"]},data:function(){return{totalRows:0,paginate:{currentPage:1,perPage:10},filterPrincipal:{type:"input",inputType:"text",placeholder:"Client...",model:""},searchInput:"",created_by:null,startdate:"",enddate:"",startPage:null,toPage:null,totalData:"",currentPage:1,perPage:10,perPageOptions:[10,25,50,100],filterController:!1,arrayColumns:R,fromToObject:{from:null,to:null},categories:[],modalChanging:!1,statusModal:"",objectGlossary:null,filter:P}},computed:Object(s["a"])({clientRoute:function(){return"/glossary/get-all-glossaries"},visibleFields:function(){return this.arrayColumns.filter((function(t){return t.visible}))}},Object(i["c"])({currentUser:"auth/currentUser"})),methods:{deleteGlossary:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.showConfirmSwal("DELETE","Are you sure?");case 2:if(r=t.sent,!r.isConfirmed){t.next=18;break}return t.prev=4,this.addPreloader(),t.next=8,b.deleteGlossary({user_id:this.currentUser.id,id:e.id});case 8:t.sent,this.removePreloader(),this.showToast("success","top-right","Success","CheckIcon","Saved Successfully"),this.resetSearch(),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](4),console.log(t.t0),this.showToast("danger","top-right","Error","XIcon","Something went wrong!");case 18:case"end":return t.stop()}}),t,this,[[4,14]])})));function e(e){return t.apply(this,arguments)}return e}(),updateGlossary:function(){this.modalChanging=!1,this.$refs.refClientsList.refresh()},updateCategory:function(){this.getCategories()},modalOpen:function(t){this.statusModal=t,0==this.modalChanging?this.modalChanging=!0:this.modalChanging=!1},modalOpenEdit:function(t,e){this.statusModal=t,this.objectGlossary=e,0==this.modalChanging?this.modalChanging=!0:this.modalChanging=!1},closeModal:function(){this.modalChanging=!1,this.objectGlossary=null},myProvider:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,amgApi.post("".concat(e.apiUrl),{page:e.currentPage,perPage:e.perPage,created_by:this.created_by,category:this.filter[0].model,startdate:this.filter[1].model,enddate:this.filter[2].model});case 3:return r=t.sent,a=r.data.data,this.startPage=r.data.from,this.currentPage=r.data.current_page,this.perPage=r.data.per_page,this.nextPage=this.startPage+1,this.endPage=r.data.last_page,this.totalData=r.data.total,this.totalRows=r.data.total,this.toPage=r.data.to,t.abrupt("return",a||[]);case 16:return t.prev=16,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",[]);case 20:case"end":return t.stop()}}),t,this,[[0,16]])})));function e(e){return t.apply(this,arguments)}return e}(),resetSearch:function(){this.searchInput="",this.fromToObject.from=null,this.fromToObject.to=null,this.$refs.refClientsList.refresh()},getCategories:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.getCategories();case 3:e=t.sent,this.categories=e.data,this.filter[0].options=e.data,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0),this.showToast("danger","top-right","Error","XIcon","Something went wrong!");case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getCategories()}},T=E,I=(r("2700"),r("a8a8"),Object(k["a"])(T,a,n,!1,null,"f8578060",null));e["default"]=I.exports}}]);
//# sourceMappingURL=chunk-ea7549c6.2ab81257.js.map