(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c0b0ccc"],{3485:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-2"},[a("b-tabs",{attrs:{lazy:"","active-tab-class":"p-0 ",pills:"","nav-class":"mb-0","active-nav-item-class":"bg-info box-shadow-info border-info info"}},[a("b-tab",{attrs:{title:"Pending","title-link-class":[t.bgTabsNavs,"sub-tab px-3"]}},[a("pending-done",{attrs:{active:"",status:1}})],1),a("b-tab",{attrs:{title:"Done","title-link-class":[t.bgTabsNavs,"sub-tab px-3"]}},[a("pending-done",{attrs:{status:2}})],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-top-info border-3 box-shadow-3 rounded-bottom"},[a("filter-slot",{attrs:{filter:t.filter,"filter-principal":t.filterPrincipal,"total-rows":t.totalRows,paginate:t.paginate,"start-page":t.startPage,"to-page":t.toPage,"send-multiple-sms":!1},on:{reload:function(e){return t.$refs["refClientsList"].refresh()}}},[a("b-table",{ref:"refClientsList",attrs:{slot:"table","no-provider-filtering":"","api-url":t.clientRoute,items:t.myProvider,fields:t.visibleFields,"primary-key":"id","table-class":"text-nowrap",responsive:"sm","show-empty":"","sticky-header":"70vh",busy:t.isBusy,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"current-page":t.paginate.currentPage,"per-page":t.paginate.perPage,filter:t.searchInput},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},slot:"table",scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-primary my-2"},[a("b-spinner",{staticClass:"align-middle mr-1"}),a("strong",[t._v("Loading ...")])],1)]},proxy:!0},{key:"cell(credit_report)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},["1"==e.item.credit_report?a("span",{staticClass:"text-danger"},[t._v("NO")]):a("span",{staticClass:"text-blue"},[t._v("YES")])])]}},{key:"cell(created_at)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[a("span",[t._v(t._s(t._f("myGlobalDay")(e.item.created_at)))])])]}},{key:"cell(action)",fn:function(e){return[t.changeStatus?a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},["pending"==e.item.status?a("b-button",{staticClass:"mr-1 reset-radius btn-sm",attrs:{variant:"success"},on:{click:function(a){return t.modalChange(e.item)}}},[t._v(" DONE "),a("feather-icon",{attrs:{icon:"FileIcon"}})],1):t._e()],1):a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},["done"==e.item.status?a("b-button",{staticClass:"mr-1 reset-radius btn-sm",attrs:{variant:"success"},on:{click:function(a){return t.modalChange(e.item)}}},[t._v(" COMMENT "),a("feather-icon",{attrs:{icon:"FileIcon"}})],1):t._e()],1)]}}])})],1),t.modalChanging?a("modal-general",{attrs:{ifModalCard:t.modalChanging,objectLead:t.objectLead},on:{close:t.closeModalCreateCard,update:t.update}}):t._e()],1)},i=[],o=a("1da1"),c=a("5530"),l=(a("96cf"),a("a9e3"),a("4de4"),a("d3b7"),a("99af"),a("4a7a")),u=a.n(l),d=a("2f62"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{modal:"",centered:"",title:""+t.objectLead.leadname,size:"lg","modal-class":"modal-primary","hide-footer":"","title-tag":"h3"},on:{hidden:t.closeModal},model:{value:t.mutableIfModalCard,callback:function(e){t.mutableIfModalCard=e},expression:"mutableIfModalCard"}},[a("ValidationObserver",{ref:"form"},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-row",{staticClass:"class-inline"},[a("b-col",{staticClass:"class-campo-icon add-class-campo-icon",staticStyle:{"border-radius":"10px 10px 0px 0px"},attrs:{md:"5"}},[a("span",[t._v(" COMMENT "+t._s(t._f("myGlobalDay")("pending"==t.objectLead.status?"":t.objectLead.cmm_datetime))+" ")])])],1)],1),a("b-col",{attrs:{md:"12"}},[a("ValidationProvider",{attrs:{name:"comment",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("div",{staticClass:"form-group mt-0"},[a("b-form-textarea",{staticClass:"textarea-style wysiwyg-notes w-100",class:{"border-danger":r[0]},staticStyle:{"border-radius":"0px 10px 10px 10px",height:"120px"},attrs:{disabled:!t.statusPending},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)]}}])})],1)],1),t.statusPending?a("b-row",[a("b-col",{staticClass:"mt-3",staticStyle:{"text-align":"center"},attrs:{md:"12"}},[a("b-button",{staticStyle:{"border-radius":"5px !important"},attrs:{variant:"success"},on:{click:function(e){return t.changeStatus()}}},[t._v("Save")])],1)],1):t._e()],1)],1)],1)},p=[],f=a("5ced"),b={props:{ifModalCard:{type:Boolean},objectLead:{type:Object,default:function(){}}},data:function(){return{comment:null,mutableIfModalCard:this.ifModalCard}},computed:{statusPending:function(){return"pending"==this.objectLead.status}},methods:{closeModal:function(){this.$emit("close",!1)},changeStatus:function(){var t=this;this.$refs.form.validate().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.showConfirmSwal("Are you sure?","You won't be able to revert this!");case 4:if(r=e.sent,!r.isConfirmed){e.next=21;break}return e.prev=6,n={id:t.objectLead.l_id,cmm:t.comment},t.addPreloader(),e.next=11,f["a"].changeStatus(n);case 11:e.sent,t.removePreloader(),t.$emit("update",!1),t.showToast("success","top-right","Success","CheckIcon","Saved Successfully"),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](6),console.log(e.t0),t.showErrorSwal(e.t0);case 21:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(t){return e.apply(this,arguments)}}())},fillComment:function(){"done"==this.objectLead.status&&null!=this.objectLead.cmm&&(this.comment=this.objectLead.cmm)}},created:function(){this.fillComment()}},h=b,g=a("2877"),v=Object(g["a"])(h,m,p,!1,null,null,null),y=v.exports,x=a("d98c"),C=[{key:"leadname",label:"Lead",visible:!0},{key:"status_lead",label:"Status",visible:!0},{key:"credit_report",label:"CR",visible:!0},{key:"mobile",label:"Mobile",visible:!0},{key:"created_at",label:"Created",sortable:!0,visible:!0},{key:"action",label:"Actions",visible:!0}],w=[{type:"datepicker",margin:!0,showLabel:!0,label:"From",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6},{type:"datepicker",margin:!0,showLabel:!0,label:"To",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6}],k={components:{vSelect:u.a,ModalGeneral:y,FilterSlot:x["a"]},props:{status:{type:[Number,String]}},data:function(){return{totalRows:0,paginate:{currentPage:1,perPage:10},objectLead:null,sortBy:"created_at",sortDesc:!0,searchInput:"",startPage:null,endPage:"",nextPage:"",toPage:null,isBusy:!1,arrayColumns:C,filterPrincipal:{type:"input",inputType:"text",placeholder:"Client...",model:""},filter:w,modalChanging:!1}},computed:Object(c["a"])({changeStatus:function(){return"1"==this.status},clientRoute:function(){return"/commons/list-users/get-list-of-user"},visibleFields:function(){return this.arrayColumns.filter((function(t){return t.visible}))}},Object(d["c"])({currentUser:"auth/currentUser"})),methods:{update:function(){this.modalChanging=!1,this.resetSearch()},closeModalCreateCard:function(){this.modalChanging=!1},modalChange:function(t){this.objectLead=t,0==this.modalChanging?this.modalChanging=!0:this.modalChanging=!1},resetSearch:function(){this.searchInput="",this.$refs.refClientsList.refresh()},myProvider:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,amgApi.post("".concat(e.apiUrl,"?page=").concat(e.currentPage),{perPage:e.perPage,page:e.currentPage,leadname:this.filterPrincipal.model,startdate:this.filter[0].model,enddate:this.filter[1].model,status:1==this.status?1:2,user_id:this.currentUser.user_id});case 3:return a=t.sent,r=a.data.data,this.startPage=a.data.from,this.currentPage=a.data.current_page,this.perPage=a.data.per_page,this.nextPage=this.startPage+1,this.endPage=a.data.last_page,this.totalRows=a.data.total,this.toPage=a.data.to,t.abrupt("return",r||[]);case 15:return t.prev=15,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",[]);case 19:case"end":return t.stop()}}),t,this,[[0,15]])})));function e(e){return t.apply(this,arguments)}return e}()}},_=k,P=(a("9679"),a("64b9"),Object(g["a"])(_,s,i,!1,null,"248d9bda",null)),j=P.exports,S={components:{PendingDone:j}},O=S,L=Object(g["a"])(O,r,n,!1,null,null,null);e["default"]=L.exports},5736:function(t,e,a){},"5ced":function(t,e,a){"use strict";var r=a("1da1"),n=a("d4ec"),s=a("bee2"),i=(a("96cf"),a("2777")),o=function(){function t(){Object(n["a"])(this,t)}return Object(s["a"])(t,[{key:"deleteUser",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("/commons/list-users/delete-list-of-user",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"groupUser",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("/commons/sellerall/2",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"saveGroup",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("/commons/list-users/save-group",e);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"changeStatus",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("/commons/list-users/update-list-Of-user",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getLead",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("/commons/list-users/get-lead",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=new o},"64b9":function(t,e,a){"use strict";a("5736")},9679:function(t,e,a){"use strict";a("a64f")},a64f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2c0b0ccc.7c3a1a7a.js.map