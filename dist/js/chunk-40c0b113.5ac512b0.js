(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c0b113"],{"0947":function(e,t,r){},"0ff7":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-2"},[r("header-slot"),r("tab-by-program",{key:e.keyUser,attrs:{active:"",programId:1,userId:e.userId},on:{TaskCompleted:e.TaskCompleted,statusCompletedTask:e.statusCompletedTask}})],1)},n=[],s=r("1da1"),o=r("5530"),i=(r("99af"),r("96cf"),r("4a7a")),l=r.n(i),u=r("2f62"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("filter-slot",{attrs:{filter:e.filter,"filter-principal":e.filterPrincipal,"total-rows":e.totalRows,"no-visible-principal-filter":!0,paginate:e.paginate,"start-page":e.startPage,"to-page":e.toPage,"send-multiple-sms":!1},on:{reload:function(t){return e.$refs["refClientsList"].refresh()}},scopedSlots:e._u([{key:"buttons-filter",fn:function(){return[r("ModalCreateRecoveryList",{attrs:{userCreateModal:e.userCreateModal},on:{closeModalRecovery:e.closeModalRecovery}})]},proxy:!0}])},[r("b-table",{ref:"refClientsList",attrs:{slot:"table","no-provider-filtering":"",items:e.getDateRecovery,fields:e.arrayColumns,"primary-key":"id","table-class":"text-nowrap",responsive:"sm","show-empty":"","sticky-header":"50vh",busy:e.isBusy,"current-page":e.paginate.currentPage,"per-page":e.paginate.perPage},on:{"update:busy":function(t){e.isBusy=t}},slot:"table",scopedSlots:e._u([{key:"table-busy",fn:function(){return[r("div",{staticClass:"text-center text-primary my-2"},[r("b-spinner",{staticClass:"align-middle mr-1"}),r("strong",[e._v("Loading ...")])],1)]},proxy:!0},{key:"cell(user_name)",fn:function(t){return[r("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[r("span",{staticClass:"click-user-recovery-list",class:e.textLink,on:{click:function(r){return e.clickNameUSer(t.item.user_name,t.item.user_id,t.item.created_at)}}},[e._v(" "+e._s(t.item.user_name)+" ")])])]}},{key:"cell(created_at)",fn:function(t){return[r("div",{staticClass:"d-flex flex-column justify-content-start align-items-start"},[r("span",[e._v(e._s(e._f("myGlobalDay")(t.item.created_at)))])])]}},{key:"cell(t1)",fn:function(t){return[r("div",{staticClass:"d-flex align-items-center justify-content-center"},[r("span",{staticClass:"click-user-recovery-list",class:e.textLink,on:{click:function(r){return e.clickNameUSer(t.item.user_name,t.item.user_id,t.item.created_at)}}},[e._v(e._s(t.item.t1))])])]}},{key:"cell(pending)",fn:function(t){return[r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[r("span",[e._v(e._s(t.item.pending))])])]}},{key:"cell(done)",fn:function(t){return[r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[r("span",[e._v(e._s(t.item.done))])])]}},{key:"cell(status)",fn:function(t){return[r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[t.item.status?r("b-badge",{staticClass:"w-75",attrs:{variant:"success"}},[e._v(" DONE ")]):r("b-badge",{staticClass:"w-75",attrs:{variant:"danger"}},[e._v(" PENDING ")])],1)]}},{key:"custom-foot",fn:function(){return[r("b-tr",[e.isCeo||e.isSupervisor||e.isTeamLeader?r("b-th",{},[e._v("NAME USER")]):e._e(),r("b-th",{},[e._v("DATE")]),r("b-th",{staticClass:"text-center"},[e._v(e._s(e.totalSum.total))]),r("b-th",{staticClass:"text-center"},[e._v(e._s(e.totalSum.pending))]),r("b-th",{staticClass:"text-center"},[e._v(e._s(e.totalSum.done))]),r("b-th",{staticClass:"text-center"},[e._v("STATUS")])],1)]},proxy:!0}])})],1)],1),r("b-modal",{attrs:{size:"lg",title:"RECOVERY LIST / "+(e.userSelect?e.userSelect.name:null)+" / "+(e.userSelect?e.userSelect.date.split("-")[1]+"-"+e.userSelect.date.split("-")[2]+"-"+e.userSelect.date.split("-")[0]:null),"body-class":"p-0"},on:{hidden:e.closeModalRecovery},model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[r("TableListLeadsByUser",{attrs:{user:e.userSelect}})],1)],1)},d=[],p=(r("a9e3"),r("4de4"),r("d3b7"),r("d81d"),r("159b"),r("d98c")),m=r("d4ec"),f=r("bee2"),g=r("2777"),v=function(){function e(){Object(m["a"])(this,e)}return Object(f["a"])(e,[{key:"searchRecoveryList",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].post("/social-network/recovery-list/search-recovery-by-user",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"sendForPusher",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].post("/social-network/recovery-list/pusher-recovery-list-done",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getUserOfRecoveryList",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].post("/social-network/recovery-list/get-user-of-recovery-list",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getRecoveryListByUser",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].post("/social-network/recovery-list/get-recovery-list-by-user",t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getRecoveryListByProgram",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].post("/social-network/recovery-list/get-recovery-list-by-program",t);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createListRecoveryByProgram",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("params: ",t),e.next=3,g["a"].post("/social-network/recovery-list/create-recovery-list",t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),h=new v,b=[{key:"user_name",label:"Name User",visible:!0},{key:"created_at",label:"Date",visible:!0},{key:"t1",label:"Total",visible:!0,class:"text-center"},{key:"pending",label:"Pending",visible:!0,class:"text-center"},{key:"done",label:"Done",visible:!0,class:"text-center"},{key:"status",label:"status",visible:!0,class:"text-center"}],y=[{type:"datepicker",margin:!0,showLabel:!0,label:"From",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6},{type:"datepicker",margin:!0,showLabel:!0,label:"To",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6},{type:"select",margin:!0,showLabel:!0,label:"User",options:[],model:null,reduce:"value",selectText:"label",cols:12,md:2,visible:!0}],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("filter-slot",{attrs:{filter:e.filter,"filter-principal":e.filterPrincipal,"total-rows":e.totalRows,"no-visible-principal-filter":!0,paginate:e.paginate,"start-page":e.startPage,"to-page":e.toPage,"send-multiple-sms":!1},on:{reload:function(t){return e.$refs["refRecoveryByUser"].refresh()}},scopedSlots:e._u([{key:"buttons-filter",fn:function(){return[e.isCeo||e.isSupervisor||e.isTeamLeader?e._e():r("div",{staticClass:"d-flex align-items-center justify-content-between pl-2 pr-2"},[e.btnRecoverySend?r("b-button",{staticClass:"botton-replay",attrs:{href:"",variant:"success"},on:{click:e.replay}},[e._v("SEND TO REVISSION")]):e._e()],1)]},proxy:!0}])},[r("b-table",{ref:"refRecoveryByUser",attrs:{slot:"table","no-provider-filtering":"",items:e.getDataRecoveryByUser,fields:e.arrayColumns,"primary-key":"id","table-class":"text-nowrap",responsive:"sm","show-empty":"","sticky-header":"50vh",busy:e.isBusy,"current-page":e.paginate.currentPage,"per-page":e.paginate.perPage},on:{"update:busy":function(t){e.isBusy=t}},slot:"table",scopedSlots:e._u([{key:"table-busy",fn:function(){return[r("div",{staticClass:"text-center text-primary my-2"},[r("b-spinner",{staticClass:"align-middle mr-1"}),r("strong",[e._v("Loading ...")])],1)]},proxy:!0},{key:"cell(fullNameLead)",fn:function(t){return[r("div",{staticClass:"text-left"},[r("a",{staticClass:" click-user-recovery-list",class:e.textLink,attrs:{href:"/social-network/leads/new/dashboard/"+t.item.id,target:"_blank"}},[e._v(e._s(t.item.fullNameLead))])])]}},{key:"cell(created_at)",fn:function(t){return[r("div",{staticClass:"text-left"},[r("span",[e._v(e._s(e._f("myGlobalDay")(t.item.created_at)))])])]}},{key:"cell(program)",fn:function(t){return[r("div",{staticClass:"text-left"},[r("span",[e._v(e._s(t.item.program))])])]}},{key:"cell(status)",fn:function(t){return[r("StatusTableRecoveryListItem",{attrs:{item:t.item,doneLeads:e.doneLeads,totalStatus:e.totalStatus,user:e.user},on:{updateStatusDone:e.updateStatusDone}})]}},{key:"custom-foot",fn:function(){return[r("b-tr",[r("b-th",{}),r("b-th",{staticClass:"text-center"}),r("b-th",{staticClass:"text-center"}),r("b-th",{staticClass:"text-center"},[e._v("TOTAL: "+e._s(e.doneLeads))])],1)]},proxy:!0}])})],1)],1)},w=[],k=(r("ac1f"),r("1276"),r("b0c0"),[{type:"datepicker",margin:!0,showLabel:!0,label:"From",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6},{type:"datepicker",margin:!0,showLabel:!0,label:"To",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6},{type:"select",margin:!0,showLabel:!0,label:"Status",options:[{value:null,label:"All"},{value:0,label:"Missing"},{value:1,label:"Done"}],model:null,reduce:"value",selectText:"label",cols:12,md:2,visible:!0},{type:"select",margin:!0,showLabel:!0,label:"Program",options:[],model:null,reduce:"value",selectText:"label",cols:12,md:2,visible:!0}]),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[r("b-checkbox",{attrs:{disabled:e.disabledItem&&!(this.isCeo||this.isSupervisor||this.isTeamLeader)},on:{change:function(t){return e.onChangeStatus(e.item)}},model:{value:e.toggleItem,callback:function(t){e.toggleItem=t},expression:"toggleItem"}})],1)},R=[],S={name:"StatusTableRecoveryListItem",data:function(){return{disabledItem:!0,toggleItem:!1}},props:{item:{type:Object,default:function(){}},doneLeads:Number,totalStatus:Number,user:{type:Object,default:function(){}}},created:function(){this.toggleItem=1===this.item.status;var e=this.item.list_date.substr(0,10).split("-"),t=new Date(e[0],e[1]-1,e[2]);new Date(t.getTime()+432e6)>new Date&&(this.disabledItem=!1)},methods:{onChangeStatus:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.showConfirmSwal("Are you sure?","You won't be able to revert this!","question");case 2:if(a=r.sent,!a.isConfirmed){r.next=12;break}return n=0,t.toggleItem&&(n=1),r.next=8,h.getRecoveryListByUser({perpage:50,npage:1,user_id:t.user.id,date_in:t.user.date,date_from:null,date_to:null,status:n,program_id:null,rol_id:10,update_status:1,id_list:e.id});case 8:s=r.sent,t.toggleItem?t.$emit("updateStatusDone",{done:s[1].status+1,status:s[1].count}):t.$emit("updateStatusDone",{done:s[1].status-1,status:s[1].count}),r.next=13;break;case 12:t.toggleItem=!t.toggleItem;case 13:case"end":return r.stop()}}),r)})))()}}},C=S,L=r("2877"),P=Object(L["a"])(C,x,R,!1,null,null,null),O=P.exports,T={name:"TableListLeadsByUser",components:{StatusTableRecoveryListItem:O},data:function(){return{filter:k,arrayColumns:[{key:"fullNameLead",label:"Lead",visible:!0,class:"text-left"},{key:"created_at",label:"Date",visible:!0,class:"text-left"},{key:"program",label:"Program",visible:!0,class:"text-left"},{key:"status",label:"Status",visible:!0,class:"text-center"}],filterPrincipal:{type:"input",inputType:"text",placeholder:"Client...",model:""},totalRows:0,paginate:{currentPage:1,perPage:10},startPage:null,toPage:null,isBusy:!1,data:[],totalStatus:0,doneLeads:0,btnRecoverySend:!1}},props:{user:{type:Object,default:function(){}}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.programsAll();case 2:case"end":return t.stop()}}),t)})))()},computed:Object(o["a"])({},Object(u["c"])({currentUser:"auth/currentUser",token:"auth/token",G_LANGUAGES:"CrmGlobalStore/G_LANGUAGES"})),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])("SocialNetworkLeadsStore",["A_GET_PROGRAMS"])),{},{linkLead:function(e){this.$router.push("/social-network/leads/new/dashboard/".concat(e))},getDataRecoveryByUser:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.filter[0].model?t.filter[0].model.split("-"):null,n=t.filter[1].model?t.filter[1].model.split("-"):null,r.next=4,h.getRecoveryListByUser({perpage:e.perPage,npage:e.currentPage,user_id:t.user.id,date_in:t.user.date,date_from:a?"".concat(a[0],"-").concat(a[2],"-").concat(a[1]):null,date_to:n?"".concat(n[0],"-").concat(n[2],"-").concat(n[1]):null,status:t.filter[2].model,program_id:t.filter[3].model,rol_id:10,update_status:null,id_list:null});case 4:return s=r.sent,t.doneLeads=s[1].status,t.totalStatus=s[1].count,o=s[0],t.data=o.data,t.paginate.currentPage=o.current_page,t.paginate.perPage=o.per_page,t.perPage=o.per_page,t.nextPage=t.startPage+1,t.endPage=o.last_page,t.totalRows=o.total,t.toPage=o.to,r.abrupt("return",o.data);case 17:case"end":return r.stop()}}),r)})))()},programsAll:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.A_GET_PROGRAMS();case 2:r=t.sent.map((function(e){return{label:e.name,value:e.id}})),r.unshift({value:null,label:"All"}),e.filter[3].options=r;case 5:case"end":return t.stop()}}),t)})))()},onChangeStatus:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=!0,a=0==e.status,r.next=4,h.getRecoveryListByUser({perpage:50,npage:1,user_id:t.user.id,date_in:t.user.date,date_from:null,date_to:null,status:a,program_id:null,rol_id:10,update_status:1,id_list:e.id});case 4:n=r.sent,t.doneLeads=n[1].status+1,t.totalStatus=n[1].count;case 7:case"end":return r.stop()}}),r)})))()},replay:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.showConfirmSwal("Send to Team Leader","You won't be able to revert this!");case 2:if(r=t.sent,!r.isConfirmed){t.next=15;break}return t.prev=4,a={id_user:e.currentUser.user_id,fullname:"".concat(e.currentUser.first_name," ").concat(e.currentUser.last_name),idProgram:e.data[0].programId,breakFreeList:e.data[0].updated_at},t.next=8,h.sendForPusher(a);case 8:t.sent,e.showToast("success","top-right","Success","CheckIcon","Message sent successfully to Team Leader "),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),e.showToast("danger","top-right","Error","XIcon","Something went wrong with your message!");case 15:case"end":return t.stop()}}),t,null,[[4,12]])})))()},updateStatusDone:function(e){var t=e.done,r=e.status;this.doneLeads=t,this.totalStatus=r}}),watch:{doneLeads:function(){this.btnRecoverySend=this.totalRows===this.doneLeads}}},U=T,j=(r("761e"),Object(L["a"])(U,_,w,!1,null,null,null)),I=j.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[this.isCeo||this.isSupervisor||this.isTeamLeader?r("div",{staticClass:"d-flex align-items-center justify-content-between pl-2 pr-2"},[r("b-button",{staticClass:"botton-replay",attrs:{variant:"success"},on:{click:e.openModalCreateList}},[e._v("Create Recovery List")])],1):e._e(),r("b-modal",{attrs:{size:"xl",title:"CREATE RECOVERY LIST ","body-class":"p-0"},on:{ok:e.createRecoverList,hidden:e.closeModal},model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[r("div",{staticClass:"p-2"},[r("h4",{staticClass:"mb-1"},[e._v("Select program")]),r("div",{staticClass:"d-flex align-items-center justify-content-start  w-100"},e._l(e.programs,(function(t){return r("div",{key:t.id,staticClass:" p-1 card-programs-recovery cursor-pointer mr-2",class:e.btnProgram&&t.id===e.btnProgram.id?"select-program-recovery":"card",on:{click:function(r){return e.selectProgramById(t)}}},[r("p",{staticClass:"p-0  m-0"},[e._v(e._s(t.value)+": "),r("span",{},[e._v(e._s(t.count))])])])})),0)]),r("div",{staticClass:"pr-2 pl-2"},[r("h4",{staticClass:"mb-1"},[e._v("Select Users Recovery")]),r("div",{staticClass:"select-container-user-program"},[r("v-select",{staticClass:" rounded",attrs:{options:e.usersTotal,multiple:!0,"close-on-select":!1,"clear-on-select":!0,"preserve-search":!0,placeholder:"Pick some",label:"name","preselect-first":!0,selectable:function(e){return 2==e.status}},model:{value:e.users,callback:function(t){e.users=t},expression:"users"}}),r("div",[e.btnProgram?r("div",{staticClass:" p-1 card-programs-recovery cursor-pointer card m-0"},[r("p",{staticClass:"p-0  m-0"},[e._v(e._s(e.btnProgram.value)+": "),r("span",{},[e._v(e._s(e.btnProgram.count))])]),r("p",{staticClass:"p-0  m-0"},[e._v(e._s(e.countProgram&&e.users.length>0?"Per user you will have "+parseInt(e.countProgram/e.users.length):""))])]):e._e()])],1)])])],1)},M=[],E=(r("7db0"),r("a1a4"),{name:"ModalCreateRecoveryList",components:{vSelect:l.a},data:function(){return{openModal:!1,programs:[],users:[],selectProgram:null,btnProgram:null,usersTotal:[],countProgram:null}},methods:{openModalCreateList:function(){this.openModal=!0,this.getUsersAndProgramsRecovery()},selectProgramById:function(e){this.selectProgram=e.id,this.countProgram=e.count,this.btnProgram=this.programs.find((function(t){return t.id===e.id}))},createRecoverList:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.preventDefault(),!(t.users.length>0&&t.countProgram)){r.next=10;break}return r.next=4,t.showConfirmSwal("Are you sure?","You won't be able to revert this!","question");case 4:if(a=r.sent,!a.value){r.next=10;break}return t.addPreloader(),r.next=9,h.createListRecoveryByProgram({usersId:t.users.map((function(e){return e.id})),programId:t.btnProgram?t.btnProgram.id:null,cant:t.users.length});case 9:t.closeModal();case 10:case"end":return r.stop()}}),r)})))()},getUsersAndProgramsRecovery:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.getRecoveryListByProgram();case 2:return e.programs=t.sent,t.next=5,h.getUserOfRecoveryList();case 5:r=t.sent,a=r.data,e.usersTotal=a.map((function(e){return{name:e.fullName,id:e.id,status:e.statusListUser}}));case 8:case"end":return t.stop()}}),t)})))()},closeModal:function(){this.users=[],this.btnProgram=null,this.openModal=!1,this.removePreloader(),this.$emit("closeModalRecovery")}}}),D=E,A=(r("1b70"),Object(L["a"])(D,B,M,!1,null,null,null)),N=A.exports,G={components:{ModalCreateRecoveryList:N,TableListLeadsByUser:I,FilterSlot:p["a"]},props:{programId:{type:[Number,String]},userId:{type:[Number,String]}},data:function(){return{filter:y,arrayColumns:[],totalRows:0,paginate:{currentPage:1,perPage:10},startPage:null,toPage:null,isBusy:!1,sortBy:"created_at",sortDesc:!0,searchInput:"",filterPrincipal:{type:"input",inputType:"text",placeholder:"Client...",model:""},countPendingTask:0,countDoneTask:0,data:[],openModal:!1,userSelect:null,totalSum:{total:0,pending:0,done:0},userCreateModal:[]}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isCeo||e.isSupervisor||e.isTeamLeader?e.arrayColumns=b:e.arrayColumns=b.filter((function(e){return"user_name"!=e.key})),t.next=3,h.getUserOfRecoveryList();case 3:r=t.sent,a=r.data,e.userCreateModal=a,n=a.map((function(e){return{label:e.fullName,value:e.id}})).filter((function(t){return t.value===e.currentUser.user_id||e.isCeo||e.isSupervisor||e.isTeamLeader})),n.unshift({label:"All",value:null}),e.filter[2].options=n;case 9:case"end":return t.stop()}}),t)})))()},computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])({currentUser:"auth/currentUser",token:"auth/token",G_LANGUAGES:"CrmGlobalStore/G_LANGUAGES"})),{},{statusUserRedirected:function(){return null!=this.userId},clientRoute:function(){return"/social-network/recovery-list/search-recovery-by-user"}}),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])("SocialNetworkLeadsStore",["A_GET_OWNERS"])),{},{clickNameUSer:function(e,t,r){this.openModal=!0,this.userSelect={name:e,id:t,date:r}},getDateRecovery:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,h.getRecoveryListByUser({perpage:e.perPage,npage:e.currentPage,user_id:t.isCeo||t.isSupervisor||t.isTeamLeader?t.filter[2].model:t.currentUser.user_id,date_in:null,date_from:t.filter[0].model,date_to:t.filter[1].model,status:null,program_id:null,rol_id:11,update_status:null,id_list:null});case 2:return a=r.sent,n=a[0],t.paginate.currentPage=n.current_page,t.paginate.perPage=n.per_page,t.perPage=n.per_page,t.nextPage=t.startPage+1,t.endPage=n.last_page,t.totalRows=n.total,t.toPage=n.to,t.totalSum.total=0,t.totalSum.pending=0,t.totalSum.done=0,n.data.forEach((function(e){t.totalSum.total=t.totalSum.total+parseInt(e.t1),t.totalSum.pending=t.totalSum.pending+parseInt(e.pending),t.totalSum.done=t.totalSum.done+parseInt(e.done)})),r.abrupt("return",n.data||[]);case 16:case"end":return r.stop()}}),r)})))()},closeModalRecovery:function(){this.$refs["refClientsList"].refresh()},onChangeCurrentPage:function(e){this.paginate.currentPage=e,this.getDateRecovery()}}),watch:{}},F=G,$=(r("3121"),Object(L["a"])(F,c,d,!1,null,null,null)),q=$.exports,Y={components:{TabByProgram:q,vSelect:l.a},data:function(){return{pendingTotal:0,doneTotal:0,statusButton:!1,userId:null,keyUser:0,userOfRecoveryList:[],statusCompletedTaskU:!1}},computed:Object(o["a"])({statusUserRedirected:function(){return 10!=this.currentUser.role_id},getStatusButton:function(){return this.statusButton}},Object(u["c"])({currentUser:"auth/currentUser"})),methods:{statusLead:function(){this.keyUser++,this.firstRequestStatusButton()},statusCompletedTask:function(e,t,r){this.statusCompletedTaskU=e,this.pendingTotal=t,this.doneTotal=r},TaskCompleted:function(e){this.statusButton=e},getUserOfRecoveryList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(10==this.currentUser.role_id){e.next=14;break}return e.prev=1,e.next=4,h.getUserOfRecoveryList({});case 4:t=e.sent,this.userOfRecoveryList=t.data,null!=this.userOfRecoveryList&&(this.userId=this.userOfRecoveryList[0].id,this.keyUser++),this.firstRequestStatusButton(),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0),this.showToast("danger","top-right","Error","XIcon","Something went wrong with users!");case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(){return e.apply(this,arguments)}return t}(),firstRequestStatusButton:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={id_user:null!=this.userId?this.userId:parseInt(this.currentUser.user_id),count_list:null!=this.userId?this.userId:parseInt(this.currentUser.user_id)},e.next=4,h.searchRecoveryList(t);case 4:r=e.sent,this.pendingTotal=r.data.data[0].quantity_pending_total,this.doneTotal=r.data.data[0].quantity_done_total,a=parseInt(r.data.data[0].count_done),n=parseInt(r.data.data[0].count_pending),s=a-n==a,this.statusButton=s,this.statusCompletedTaskU=s,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),this.showToast("danger","top-right","Error","XIcon","Something went wrong for first status!");case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}(),sendForPusher:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.showConfirmSwal("Send to Team Leader","You won't be able to revert this!");case 2:if(t=e.sent,!t.isConfirmed){e.next=16;break}return e.prev=4,r={id_user:this.currentUser.user_id,fullname:"".concat(this.currentUser.first_name," ").concat(this.currentUser.last_name)},e.next=8,h.sendForPusher(r);case 8:e.sent,this.showToast("success","top-right","Success","CheckIcon","Message sent successfully to Team Leader "),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](4),console.log(e.t0),this.showToast("danger","top-right","Error","XIcon","Something went wrong with your message!");case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.getUserOfRecoveryList(),10==this.currentUser.role_id&&this.firstRequestStatusButton()}},X=Y,V=(r("73f9"),Object(L["a"])(X,a,n,!1,null,null,null));t["default"]=V.exports},"1b70":function(e,t,r){"use strict";r("1ee5")},"1ee5":function(e,t,r){},3121:function(e,t,r){"use strict";r("d341")},"73f9":function(e,t,r){"use strict";r("c04f")},"761e":function(e,t,r){"use strict";r("0947")},c04f:function(e,t,r){},d341:function(e,t,r){}}]);
//# sourceMappingURL=chunk-40c0b113.5ac512b0.js.map