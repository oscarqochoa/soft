(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-523fcd18"],{"036e":function(t,e,a){},2207:function(t,e,a){},"250b":function(t,e,a){"use strict";a("8f01")},"3b4d":function(t,e,a){},5472:function(t,e,a){"use strict";a("6dd6")},"6dd6":function(t,e,a){},"8c88":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("filter-slot",{attrs:{filter:t.filterStatus,"filter-principal":t.filterPrincipal,"total-rows":t.totalRows,paginate:t.paginate,"start-page":t.startPage,"to-page":t.toPage,"send-multiple-sms":!1},on:{reload:function(e){return t.$refs["refClientsList"].refresh()}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start"},[a("div",{staticClass:"bg-info",staticStyle:{padding:"5px","border-radius":"30px","padding-left":"15px","padding-right":"15px"}},[a("span",{staticClass:"text-nowrap",staticStyle:{color:"#fff"}},[t._v(" Total Amount "+t._s(0==t.totalAmount?"$"+t.totalAmount:t.totalAmount)+" ")])])])]},proxy:!0}])},[a("b-table",{ref:"refClientsList",attrs:{slot:"table",small:"","no-provider-filtering":"","api-url":t.clientRoute,items:t.myProvider,fields:t.fields,"primary-key":"id","table-class":"text-nowrap",responsive:"sm","show-empty":"","sticky-header":"70vh",busy:t.isBusy,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"current-page":t.paginate.currentPage,"per-page":t.paginate.perPage},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},slot:"table",scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-primary my-2"},[a("b-spinner",{staticClass:"align-middle mr-1"}),a("strong",[t._v("Loading ...")])],1)]},proxy:!0},{key:"cell(lead_name)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[a("router-link",{class:t.textLink,attrs:{to:{name:"lead-show",params:{id:e.item.lead_id}},target:"_blank"}},[t._v(t._s(e.item.lead_name))])],1)]}},{key:"cell(amount)",fn:function(e){return[a("div",{staticClass:"inline",staticStyle:{position:"relative"}},[39!=e.item.type_t&&40!=e.item.type_t?a("span",{staticClass:"mr-1"},[t._v("$ "+t._s(e.item.amount))]):t._e(),39==e.item.type_t||40==e.item.type_t?a("span",{staticClass:"mr-1"},[t._v("$ ("+t._s(e.item.amount)+")")]):t._e(),39==e.item.type_t||40==e.item.type_t?a("feather-icon",{staticClass:"text-primary",staticStyle:{cursor:"pointer",position:"absolute",left:"70px"},attrs:{icon:"EyeIcon"},on:{click:function(a){return t.getVoidRefund(e.item.transaction_id)}}}):t._e(),39!=e.item.type_t&&40!=e.item.type_t&&1==e.item.void&&1==e.item.w_card&&1==t.currentUser.role_id&&"Approved"==e.item.result?a("img",{staticStyle:{cursor:"pointer",color:"red",position:"absolute",left:"70px"},attrs:{src:t.assetsImg+"/images/icons/void.ico",title:"Void"},on:{click:function(a){return t.voidAuthorize(e.item.transaction_id,e.item.merchant,e.item.amount,e.item.lead_name,e.item.settlement_date,1)}}}):t._e(),39!=e.item.type_t&&40!=e.item.type_t&&0==e.item.void&&1==e.item.refund&&1==e.item.w_card&&1==t.currentUser.role_id&&"Approved"==e.item.result?a("img",{staticStyle:{cursor:"pointer",color:"green",position:"absolute",left:"70px"},attrs:{src:t.assetsImg+"/images/icons/refund.ico",title:"Refund"},on:{click:function(a){return t.voidAuthorize(e.item.transaction_id,e.item.merchant,e.item.amount,e.item.lead_name,e.item.settlement_date,2)}}}):t._e()],1)]}},{key:"cell(charge)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[0==e.item.charge?a("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}):t._e(),1==e.item.charge||null==e.item.charge?a("feather-icon",{staticClass:"text-danger",attrs:{icon:"XCircleIcon"}}):t._e()],1)]}},{key:"cell(result)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},["Approved"==e.item.result?a("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}):t._e(),"Unverified"==e.item.result?a("feather-icon",{staticClass:"text-warning",attrs:{icon:"ClockIcon"}}):t._e(),"Approved"!=e.item.result&&"Unverified"!=e.item.result?a("feather-icon",{staticClass:"text-danger",attrs:{icon:"XCircleIcon"}}):t._e()],1)]}},{key:"cell(user_name)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[a("span",[t._v(" "+t._s(e.item.user_name)+" - "+t._s(t._f("myGlobalDay")(e.item.created_at))+" ")])])]}}])})],1),t.modalRefund?a("modal-refund",{attrs:{modalRefund:t.modalRefund,modul:t.$route.meta.module,dataVoid:this.dataVoid,global:this.currentUser},on:{close:t.closeModalRefund,updateGrid:t.updateGrid}}):t._e(),t.modalVoidRefund?a("modal-void-refund-info",{attrs:{modalVoidRefund:t.modalVoidRefund,idtransaction:t.idtransaction},on:{closeInfo:t.closeModalVoidRefundInfo}}):t._e()],1)},i=[],s=a("1da1"),r=a("2909"),o=a("5530"),l=(a("96cf"),a("4de4"),a("d3b7"),a("a434"),a("99af"),a("159b"),a("2f62")),c=a("4a7a"),d=a.n(c),u=a("d98c"),m=a("70ef"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{modal:"",title:t.statusTitle,size:"lg","modal-class":"modal-primary","title-tag":"h3","hide-footer":"","body-class":"mb-2","no-close-on-backdrop":!0,centered:""},on:{hidden:t.closeModal},model:{value:t.mutableIfModal,callback:function(e){t.mutableIfModal=e},expression:"mutableIfModal"}},[a("ValidationObserver",{ref:"form"},[a("b-row",{staticStyle:{margin:"0"}},[a("base-refund",{scopedSlots:t._u([{key:"client",fn:function(){return[a("b-form-input",{attrs:{disabled:""},model:{value:t.dataVoid.client_name,callback:function(e){t.$set(t.dataVoid,"client_name",e)},expression:"dataVoid.client_name"}})]},proxy:!0},{key:"transaction",fn:function(){return[a("b-form-input",{attrs:{disabled:""},model:{value:t.dataVoid.idtransaction,callback:function(e){t.$set(t.dataVoid,"idtransaction",e)},expression:"dataVoid.idtransaction"}})]},proxy:!0},{key:"amount",fn:function(){return[a("b-form-input",{attrs:{disabled:""},model:{value:t.statusAmount,callback:function(e){t.statusAmount=e},expression:"statusAmount"}})]},proxy:!0},{key:"date",fn:function(){return[a("b-form-input",{attrs:{disabled:""},model:{value:t.statusDate,callback:function(e){t.statusDate=e},expression:"statusDate"}})]},proxy:!0}])}),a("div",{staticClass:"col-lg-12 mt-1"},[a("ValidationProvider",{attrs:{name:"comment",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("div",{staticClass:"form-group row"},[a("span",[t._v("Comment")]),a("b-textarea",{staticClass:"input-form",class:{"border-danger":n[0]},staticStyle:{height:"140px"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)]}}])})],1),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"\n              d-flex\n              flex-column\n              justify-content-center\n              align-items-center\n            "},[1==t.isCeo||2==t.isSupervisor&&4==t.modul?a("b-button",{attrs:{variant:"success"},on:{click:t.sendVoid}},[t._v(" Submit ")]):t._e()],1)])],1)],1)],1)],1)},p=[],b=(a("a9e3"),a("c1df")),h=a.n(b),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("div",{staticClass:"col-lg-8 col-12 col-xl-8 col-md-8 p-1"},[a("div",{staticClass:"input-group"},[t._m(0),t._t("client")],2)]),a("div",{staticClass:"col-lg-8 col-12 col-xl-8 col-md-8 pb-1"},[a("div",{staticClass:"input-group"},[t._m(1),t._t("transaction")],2)]),a("div",{staticClass:"col-lg-8 col-12 col-xl-8 col-md-8 pb-1"},[a("div",{staticClass:"input-group"},[t._m(2),t._t("amount")],2)]),a("div",{staticClass:"col-lg-8 col-12 col-xl-8 col-md-8 pb-1"},[a("div",{staticClass:"input-group"},[t._m(3),t._t("date")],2)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("Client")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[t._v("Transaction ID")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon3"}},[t._v("Amount")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon4"}},[t._v("Date")])])}],y=(a("9156"),a("2877")),_={},x=Object(y["a"])(_,v,g,!1,null,"4adcdd73",null),C=x.exports,k={props:{modalRefund:{type:Boolean},global:{type:Object},dataVoid:{type:Object},modul:{type:[Number,String]}},components:{BaseRefund:C},data:function(){return{mutableIfModal:this.modalRefund,comment:""}},computed:Object(o["a"])({statusAmount:function(){return"$ "+this.dataVoid.amount},statusDate:function(){return this.dataVoid.settlement_date?h()(this.dataVoid.settlement_date).format("MM/DD/YYYY"):"-"},statusTitle:function(){return 1==this.dataVoid.type?"VOID":2==this.dataVoid.type?"REFUND":""}},Object(l["c"])({currentUser:"auth/currentUser",isSupervisor:"auth/isSupervisor",isCeo:"auth/isCeo"})),methods:{closeModal:function(){this.$emit("close",!1)},updateGrid:function(){this.$emit("updateGrid",!1)},sendVoid:function(){var t=this;this.$refs.form.validate().then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var n,i,s,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=4;break}return e.abrupt("return");case 4:if(1!=t.dataVoid.type){e.next=25;break}return e.next=7,t.showConfirmSwal("Are you sure?","You won't be able to revert this!");case 7:if(n=e.sent,!n.isConfirmed){e.next=23;break}return e.prev=9,t.addPreloader(),i={idtransaction:t.dataVoid.idtransaction,idmerchant:t.dataVoid.idmerchant,comment:t.comment,iduser:t.currentUser.user_id},e.next=14,m["a"].voidTransaction(i);case 14:s=e.sent,t.removePreloader(),200==s.status&&1==s.data.code?(t.closeModal(),t.updateGrid(),t.$swal.fire({icon:"success",title:"OPERATION SUCCESSFULLY"})):(t.$swal.fire({icon:"warning",title:s.data.message}),t.closeModal(),t.updateGrid()),e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](9),t.removePreloader(),t.showErrorSwal(e.t0);case 23:e.next=42;break;case 25:return e.next=27,t.showConfirmSwal("Are you sure?","You won't be able to revert this!");case 27:if(r=e.sent,!r.isConfirmed){e.next=42;break}return e.prev=29,t.addPreloader(),e.next=33,m["a"].refundTransaction({idtransaction:t.dataVoid.idtransaction,idmerchant:t.dataVoid.idmerchant,comment:t.comment,iduser:t.currentUser.user_id,amount:t.dataVoid.amount});case 33:o=e.sent,t.removePreloader(),200==o.status&&1==o.data.code?(t.closeModal(),t.$swal.fire({icon:"success",title:"OPERATION SUCCESSFULLY"}),t.updateGrid()):(t.$swal.fire({icon:"warning",title:o.data.message}),t.closeModal(),t.updateGrid()),e.next=42;break;case 38:e.prev=38,e.t1=e["catch"](29),t.removePreloader(),t.showErrorSwal(e.t1);case 42:case"end":return e.stop()}}),e,null,[[9,19],[29,38]])})));return function(t){return e.apply(this,arguments)}}())}}},R=k,w=(a("fe30"),Object(y["a"])(R,f,p,!1,null,"d044d1f2",null)),V=w.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{modal:"",title:t.statusTitle,size:"lg","modal-class":"modal-primary","title-tag":"h3","hide-footer":"","body-class":"mb-2","no-close-on-backdrop":!0,centered:""},on:{hidden:t.closeModal},model:{value:t.mutableIfModal,callback:function(e){t.mutableIfModal=e},expression:"mutableIfModal"}},[a("b-row",{staticStyle:{margin:"0"}},[a("base-refund",{scopedSlots:t._u([{key:"client",fn:function(){return[a("b-form-input",{attrs:{disabled:""},model:{value:t.dataVoidRefund.client_name,callback:function(e){t.$set(t.dataVoidRefund,"client_name",e)},expression:"dataVoidRefund.client_name"}})]},proxy:!0},{key:"transaction",fn:function(){return[a("b-form-input",{attrs:{disabled:""},model:{value:t.dataVoidRefund.transaction_id,callback:function(e){t.$set(t.dataVoidRefund,"transaction_id",e)},expression:"dataVoidRefund.transaction_id"}})]},proxy:!0},{key:"amount",fn:function(){return[a("b-form-input",{attrs:{disabled:""},model:{value:t.statusAmount,callback:function(e){t.statusAmount=e},expression:"statusAmount"}})]},proxy:!0},{key:"date",fn:function(){return[a("b-form-input",{attrs:{disabled:""},model:{value:t.statusDate,callback:function(e){t.statusDate=e},expression:"statusDate"}})]},proxy:!0}])}),a("div",{staticClass:"col-lg-8 col-12 col-xl-8 col-md-8 pb-1"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon3"}},[t._v("Done by")])]),a("b-form-input",{attrs:{disabled:""},model:{value:t.statusDone,callback:function(e){t.statusDone=e},expression:"statusDone"}})],1)]),a("div",{staticClass:"col-lg-12 mt-1"},[a("div",{staticClass:"form-group row"},[a("span",[t._v("Comment")]),a("b-textarea",{staticClass:"input-form",staticStyle:{height:"140px"},attrs:{disabled:""},model:{value:t.dataVoidRefund.comment,callback:function(e){t.$set(t.dataVoidRefund,"comment",e)},expression:"dataVoidRefund.comment"}})],1)])],1)],1)],1)},A=[],S={props:{modalVoidRefund:{type:Boolean},idtransaction:{type:[Number,String]}},components:{BaseRefund:C},data:function(){return{mutableIfModal:this.modalVoidRefund,dataVoidRefund:[]}},computed:{statusAmount:function(){return"$ "+this.dataVoidRefund.amount},statusDate:function(){return h()(this.dataVoidRefund.settlement_date).format("MM/DD/YYYY")},statusDone:function(){return this.dataVoidRefund.updated_by+" | "+h()(this.dataVoidRefund.updated_at).format("MM/DD/YYYY hh:mm A")},statusTitle:function(){return 39==this.dataVoidRefund.type_transaction?"VOID":40==this.dataVoidRefund.type_transaction?"REFUND":""}},methods:{closeModal:function(){this.$emit("closeInfo",!1)},getVoidRefund:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.addPreloader(),t.next=4,m["a"].getVoidRefund({idtransaction:e});case 4:a=t.sent,this.dataVoidRefund=a[0],this.removePreloader(),t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0),this.showToast("success","top-right","Success","CheckIcon","Glossary Deleted"),this.removePreloader();case 14:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getVoidRefund(this.idtransaction)}},D=S,I=(a("250b"),Object(y["a"])(D,P,A,!1,null,"f0a98524",null)),U=I.exports,$=[{type:"select",margin:!0,showLabel:!0,label:"Type",model:null,options:[{value:0,label:"All"},{value:1,label:"Realtor"},{value:2,label:"Appointment"},{value:3,label:"Inital Payment"},{value:4,label:"Others"}],reduce:"value",selectText:"label",cols:12},{type:"select",margin:!0,showLabel:!0,label:"Result",model:null,options:[{value:0,label:"All"},{value:1,label:"Approved"},{value:2,label:"Declined"},{value:3,label:"Underview"}],reduce:"value",selectText:"label",cols:12},{type:"select",margin:!0,showLabel:!0,label:"User",model:null,options:[],reduce:"id",selectText:"user_name",cols:12},{type:"datepicker",margin:!0,showLabel:!0,label:"From",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6},{type:"datepicker",margin:!0,showLabel:!0,label:"To",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6}],M=[{key:"lead_name",label:"Name",visible:!0},{key:"type_transaction",label:"Type",visible:!0},{key:"transaction_id",label:"Transaction ID",visible:!0},{key:"amount",label:"Amount",visible:!0},{key:"charge",label:"Charge",visible:!0},{key:"result",label:"Result",visible:!0},{key:"card_number",label:"Credit Card",visible:!0},{key:"account",label:"Account",visible:!0},{key:"program",label:"Program",visible:!0},{key:"user_name",label:"Created By",visible:!0}],O={components:{vSelect:d.a,FilterSlot:u["a"],ModalRefund:V,ModalVoidRefundInfo:U},data:function(){return{modalRefund:!1,assetsImg:"http://127.0.0.1:8000",totalRows:0,paginate:{currentPage:1,perPage:10},totalAmount:0,sortBy:"created_at",sortDesc:!0,arrayColumns:M,startPage:null,endPage:"",nextPage:"",toPage:null,isBusy:!1,perPageOptions:[10,25,50,100],filterPrincipal:{type:"input",inputType:"text",placeholder:"Client...",model:""},filter:$,dataVoid:[],modalVoidRefund:!1,idtransaction:null}},mounted:function(){this.getAllUsers(),this.addPaddingTd()},computed:Object(o["a"])(Object(o["a"])({clientRoute:function(){return"/crm/payment/get-all-lead-payments"},fields:function(){return this.arrayColumns.filter((function(t){return t.visible}))}},Object(l["c"])({currentUser:"auth/currentUser"})),{},{filterStatus:function(){if(1==this.currentUser.user_id||2==this.currentUser.user_id)return this.filter;var t=Object(r["a"])(this.filter);return t.splice(2,1),t}}),methods:{voidAuthorize:function(t,e,a,n,i,s){this.dataVoid={idtransaction:t,idmerchant:e,amount:a,client_name:n,settlement_date:i,type:s},this.modalRefund=!0},closeModalRefund:function(){this.modalRefund=!1},getVoidRefund:function(t){this.idtransaction=t,this.modalVoidRefund=!0},closeModalVoidRefundInfo:function(){this.modalVoidRefund=!1},myProvider:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={perPage:e.perPage,text:this.filterPrincipal.model,from:this.filter[3].model,to:this.filter[4].model,result:this.filter[1].model,type:this.filter[0].model,user:1==this.currentUser.user_id||2==this.currentUser.user_id?this.filter[2].model:this.currentUser.user_id},t.next=4,amgApi.post("".concat(e.apiUrl,"?page=").concat(e.currentPage),a);case 4:return n=t.sent,i=n.data.data,s=0,i?(i.forEach((function(t){s+=parseFloat(t.amount)})),r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),this.totalAmount=r.format(s)):this.totalAmount=0,this.startPage=n.data.from,this.paginate.currentPage=n.data.current_page,this.paginate.perPage=n.data.per_page,this.nextPage=this.startPage+1,this.endPage=n.data.last_page,this.totalRows=n.data.total,this.toPage=n.data.to,t.abrupt("return",i||[]);case 18:return t.prev=18,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",[]);case 22:case"end":return t.stop()}}),t,this,[[0,18]])})));function e(e){return t.apply(this,arguments)}return e}(),getAllUsers:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m["a"].getAllUsers({roles:"[1,2,5]",type:"0"});case 3:e=t.sent,a={value:"All",id:0},n=e,n.unshift(a),this.filter[2].options=n,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0),this.showToast("danger","top-right","Error","XIcon","Something went wrong with users!");case 14:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}(),updateGrid:function(){this.$refs.refClientsList.refresh()}}},j=O,T=(a("ae8e"),a("5472"),Object(y["a"])(j,n,i,!1,null,"c859555c",null));e["default"]=T.exports},"8f01":function(t,e,a){},9156:function(t,e,a){"use strict";a("3b4d")},ae8e:function(t,e,a){"use strict";a("036e")},fe30:function(t,e,a){"use strict";a("2207")}}]);
//# sourceMappingURL=chunk-523fcd18.69ff78ec.js.map