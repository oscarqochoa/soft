(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b833142"],{"1c23":function(t,e,a){"use strict";a("7efb")},"4cad":function(t,e,a){},7069:function(t,e,a){"use strict";a("4cad")},"7efb":function(t,e,a){},f6e2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("filter-slot",{attrs:{filter:t.filter,"filter-principal":t.filterPrincipal,"total-rows":t.totalRows,paginate:t.paginate,"start-page":t.startPage,"to-page":t.toPage,"send-multiple-sms":!1},on:{reload:function(e){return t.$refs["refClientsList"].refresh()}}},[a("b-table",{ref:"refClientsList",attrs:{slot:"table",small:"","no-provider-filtering":"","api-url":"/lead/ncr/search-returned",items:t.myProvider,fields:t.arrayColumns,"primary-key":"id","table-class":"text-nowrap",responsive:"sm","show-empty":"","sticky-header":"70vh","current-page":t.paginate.currentPage,"per-page":t.paginate.perPage},slot:"table",scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-primary my-2"},[a("b-spinner",{staticClass:"align-middle mr-1"}),a("strong",[t._v("Loading ...")])],1)]},proxy:!0},{key:"cell(lead_name)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[a("router-link",{class:t.textLink,attrs:{to:{name:t.$route.meta.leadRoute,params:{id:e.item.lead_id}},target:"_blank"}},[t._v(t._s(e.item.lead_name))]),e.item.mobile?a("div",[t._v(t._s(e.item.mobile))]):t._e()],1)]}},{key:"cell(seller_name)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[a("span",[t._v(t._s(e.item.seller_name))]),a("div",[t._v(t._s(t._f("myGlobalDay")(e.item.date)))])])]}},{key:"cell(status)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[a("span",{staticClass:"ncr-leads-status-successful w-100",staticStyle:{color:"white","border-radius":"30px","padding-left":"15px","padding-right":"15px"},style:"background-color:"+t.statusColor(e.item.status_id)},[t._v(t._s(e.item.status))])])]}},{key:"cell(question_id)",fn:function(e){return[null==e.item.question_id?a("feather-icon",{staticClass:"font-medium-4",staticStyle:{cursor:"pointer","font-size":"18px"},attrs:{icon:"HelpCircleIcon"},on:{click:function(a){return t.openModalQuestionnaire(e.item.score_id,e.item.lead_name,e.item.status_id,e.item.question_id)}}}):a("feather-icon",{staticClass:"font-medium-4",staticStyle:{cursor:"pointer","font-size":"18px",color:"green"},attrs:{icon:"HelpCircleIcon"},on:{click:function(a){return t.openModalQuestionnaire(e.item.score_id,e.item.lead_name,e.item.status_id,e.item.question_id)}}})]}},{key:"cell(tracking)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[a("feather-icon",{staticClass:"font-medium-4",staticStyle:{cursor:"pointer"},attrs:{icon:"ListIcon"},on:{click:function(a){return t.openTrackingStatus(e.item.score_id,e.item.lead_name)}}})],1)]}},{key:"cell(process_date)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[a("span",{style:1==e.item.state_cancel?"color:red":""},[t._v(t._s(t._f("myGlobalDay")(e.item.process_date)))]),a("span",[t._v(t._s(e.item.state_cancel))])])]}},{key:"cell(cr)",fn:function(e){return[a("div",[1==e.item.cr?a("router-link",{attrs:{to:{name:t.$route.meta.reportLeadRoute,params:{idfile:e.item.score_id,idlead:e.item.lead_id,modul:2,global:{idfile:e.item.score_id,idlead:e.item.lead_id}}},target:"_blank"}},[a("img",{attrs:{src:t.assetsImg+"/images/icons/report2.ico"}})]):t._e()],1)]}},{key:"cell(route_pdf)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[a("a",{attrs:{href:e.item.route_pdf,target:"_blanck"}},[e.item.route_pdf?a("img",{attrs:{width:"20",height:"20",src:t.assetsImg+"/images/icons/pdf.png"}}):t._e()])])]}},{key:"cell(attemps)",fn:function(e){return[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[a("ul",{staticStyle:{"padding-left":"0px","margin-bottom":"0px"}},t._l(JSON.parse(e.item.attemps).slice().reverse(),(function(e,s){return a("li",{key:s,staticStyle:{"list-style":"none"}},[a("img",{attrs:{src:t.assetsImg+e.plataform_ico,title:e.plataform_name}})])})),0)])]}},{key:"cell(actions)",fn:function(e){return[6==e.item.status_id||3==e.item.status_id?a("b-dropdown",{attrs:{variant:"link","no-caret":"",right:t.$store.state.appConfig.isRTL},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("feather-icon",{staticClass:"align-middle text-body",attrs:{icon:"MoreVerticalIcon",size:"16"}})]},proxy:!0}],null,!0)},[3==e.item.status_id?a("b-dropdown-item",{on:{click:function(a){return t.changeStatus(e.item.score_id,4)}}},[a("amg-icon",{attrs:{icon:"ValidationInformationIcon"}}),a("span",{staticClass:"align-middle ml-50"},[t._v("Validate Information")])],1):t._e(),3==e.item.status_id&&e.item.attemps_count<3?a("b-dropdown-item",{on:{click:function(a){return t.changeStatus(e.item.score_id,5)}}},[a("amg-icon",{attrs:{icon:"OtherSourcesIcon"}}),a("span",{staticClass:"align-middle ml-50"},[t._v("Other Source (DI)")])],1):t._e(),6==e.item.status_id?a("b-dropdown-item",{on:{click:function(a){return t.changeStatus(e.item.score_id,7)}}},[a("feather-icon",{attrs:{icon:"FileTextIcon"}}),a("span",{staticClass:"align-middle ml-50"},[t._v("Information Was Correct")])],1):t._e(),6==e.item.status_id&&e.item.attemps_count<3?a("b-dropdown-item",{on:{click:function(a){return t.changeStatus(e.item.score_id,8)}}},[a("amg-icon",{attrs:{icon:"OtherSourcesIcon"}}),a("span",{staticClass:"align-middle ml-50"},[t._v("Other Source (II)")])],1):t._e()],1):t._e()]}}])})],1),t.modalTrackingStatus?a("modal-tracking-status",{attrs:{modalTrackingStatus:t.modalTrackingStatus,score_id:t.score_id,lead_name:t.lead_name},on:{closeTrackingStatus:t.closeTrackingStatus}}):t._e(),t.modalQuestionnaire?a("modal-questionnaire",{attrs:{modalQuestionnaire:t.modalQuestionnaire,global:t.currentUser,score_id:t.score_id,lead_name:t.lead_name,modul:t.$route.meta.module,question_id:t.question_id,status_id:t.status_id},on:{closeModalQuestionnaire:t.closeModalQuestionnaire,updateGrid:t.updateGrid}}):t._e()],1)},i=[],n=a("1da1"),r=a("5530"),o=(a("96cf"),a("4de4"),a("d3b7"),a("99af"),a("d81d"),a("2f62")),l=a("4a7a"),c=a.n(l),u=a("d98c"),d=a("914d"),m=a("ff12"),f=a("a97e"),p=a("2b8b"),_=[{key:"lead_name",label:"Lead Name",class:"text-left",sortable:!1},{key:"seller_name",label:"Request By",class:"text-left",sortable:!1,visible:!0},{key:"admin_name",label:"Administrador",class:"text-left",sortable:!1,visible:!0},{key:"status",label:"Status",class:"text-center",sortable:!1,visible:!0},{key:"question_id",label:"QU",class:"text-left ",sortable:!1,visible:!0},{key:"tracking",label:"Tracking",class:"text-center",sortable:!1,visible:!0},{key:"process_date",label:"Proccess Date",class:"text-center",sortable:!1,visible:!0},{key:"cr",label:"CR",class:"text-center",sortable:!1,visible:!0},{key:"route_pdf",label:"PDF",class:"text-center",sortable:!1,visible:!0},{key:"attemps",label:"Provider",class:"text-center",sortable:!1,visible:!0},{key:"actions",label:"Actions",class:"text-center",sortable:!1,visible:!0}],g=a("3f52"),b={mixins:[g["a"]],components:{vSelect:c.a,ModalQuestionnaire:d["a"],ModalTrackingStatus:m["a"],FilterSlot:u["a"]},props:{},data:function(){return{assetsImg:"http://amgsoft2022new.test",totalRows:0,paginate:{currentPage:1,perPage:10},filterPrincipal:{type:"input",inputType:"text",placeholder:"Client...",model:""},startPage:null,toPage:null,arrayColumns:_,dato2:4,dato1:"desc",sellers:[],seller:"",modalQuestionnaire:!1,question_id:"",status_id:"",score_id:"",lead_name:"",modalTrackingStatus:!1,filter:p["a"]}},computed:Object(r["a"])({},Object(o["c"])({currentUser:"auth/currentUser"})),methods:{updateGrid:function(){this.$refs.refClientsList.refresh()},resetSearch:function(){this.$refs.refClientsList.refresh()},myProvider:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={perPage:e.perPage,name_text:this.filterPrincipal.model,date_from:this.filter[1].model,date_to:this.filter[2].model,orderby:null==this.dato2?4:this.dato2,order:null==this.dato1?"desc":this.dato1,user_id:this.currentUser.user_id,role_id:this.currentUser.role_id,seller:this.filter[0].model,modul:this.$route.meta.module},t.next=4,amgApi.post("".concat(e.apiUrl,"?page=").concat(e.currentPage),a);case 4:return s=t.sent,i=s.data.data,this.startPage=s.data.from,this.currentPage=s.data.current_page,this.perPage=s.data.per_page,this.nextPage=this.startPage+1,this.endPage=s.data.last_page,this.totalRows=s.data.total,this.toPage=s.data.to,null!=i&&i.map((function(t){t.attemps_count=null==t.attemps?"":JSON.parse(t.attemps).length})),t.abrupt("return",i||[]);case 17:return t.prev=17,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",[]);case 21:case"end":return t.stop()}}),t,this,[[0,17]])})));function e(e){return t.apply(this,arguments)}return e}(),openTrackingStatus:function(t,e){this.lead_name=e,this.score_id=t,this.modalTrackingStatus=!0},closeTrackingStatus:function(){this.modalTrackingStatus=!1},closeModalQuestionnaire:function(){this.modalQuestionnaire=!1},changeStatus:function(t,e){var a=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",imageUrl:"/assets/images/icons/swal/warning.svg",imageWidth:70,showCancelButton:!0,buttonsStyling:!1,confirmButtonColor:"#ab9220",cancelButtonColor:"#8f9194",input:"textarea",confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary mr-1",cancelButton:"btn btn-outline-danger  "}}).then(function(){var s=Object(n["a"])(regeneratorRuntime.mark((function s(i){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!i.value){s.next=14;break}return s.prev=1,a.addPreloader(),s.next=5,f["a"].changeStatus({user_id:a.currentUser.user_id,score_id:t,status_id:e,text:i.value});case 5:n=s.sent,200==n.status&&(a.resetSearch(),a.removePreloader(),a.showSuccessSwal("OPERATION SUCCESSFULLY")),s.next=14;break;case 9:s.prev=9,s.t0=s["catch"](1),a.removePreloader(),console.error(s.t0),a.showToast("danger","top-right","Error","XIcon","Something went wrong!");case 14:case"end":return s.stop()}}),s,null,[[1,9]])})));return function(t){return s.apply(this,arguments)}}())}}},h=b,y=(a("7069"),a("1c23"),a("2877")),k=Object(y["a"])(h,s,i,!1,null,"b5fd5814",null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-6b833142.45921f86.js.map