(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42a7f4b2"],{"1aab":function(t,e,s){"use strict";s("83cb")},"83cb":function(t,e,s){},"89c3":function(t,e,s){},b57b:function(t,e,s){"use strict";s("89c3")},bea3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header-slot",{scopedSlots:t._u([{key:"actions",fn:function(){return[s("div",[s("b-row",{staticStyle:{"justify-content":"right"}},[s("b-col",{attrs:{md:"9"}},[t.isCeo||t.isSupervisor||t.isTeamLeader?s("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.openInsertTaskModal(!1)}}},[t._v(" CREATE ACTIVITY ")]):t._e()],1)],1)],1)]},proxy:!0}])}),s("b-card",{attrs:{"no-body":""}},[s("b-container",{attrs:{fluid:""}},[s("div",{staticClass:"row"},[s("b-table-simple",{ref:"activities",attrs:{busy:t.isBusy,small:"","caption-top":"",responsive:""},on:{"update:busy":function(e){t.isBusy=e}}},[s("b-thead",[s("b-tr",[s("b-th",{staticClass:"text-center"},[t._v(" USER")]),s("b-th",{staticClass:"text-center"},[t._v(" MON")]),s("b-th",{staticClass:"text-center"},[t._v(" BREAK")]),s("b-th",{staticClass:"text-center"},[t._v(" TUE")]),s("b-th",{staticClass:"text-center"},[t._v(" BREAK")]),s("b-th",{staticClass:"text-center"},[t._v(" WED")]),s("b-th",{staticClass:"text-center"},[t._v(" BREAK")]),s("b-th",{staticClass:"text-center"},[t._v(" THU")]),s("b-th",{staticClass:"text-center"},[t._v(" BREAK")]),s("b-th",{staticClass:"text-center"},[t._v(" FRI")]),s("b-th",{staticClass:"text-center"},[t._v(" BREAK")]),s("b-th",{staticClass:"text-center"},[t._v(" SAT")]),s("b-th",{staticClass:"text-center"},[t._v(" BREAK")]),s("b-th",{staticClass:"text-center"},[t._v(" SUN")]),s("b-th",{staticClass:"text-center"},[t._v(" BREAK")]),s("b-th",{staticClass:"text-center"},[t._v(" ACTION")])],1)],1),s("b-tbody",t._l(t.schedules,(function(e,a){return s("b-tr",{key:a},[s("b-th",[t._v(t._s(e.name_user))]),t._l(e.json_data,(function(a,r){return s("td",{key:r},[0===a.isBreak?s("div",[null!=a.id_tasks?s("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"text-white cursor-pointer schedule",style:"background:"+a.color+"!important",attrs:{title:a.title_task},on:{click:function(s){return t.openSchedulesModal(a,e,!0)}}},[t._v(" "+t._s(a.clock_in)+" to "+t._s(a.clock_out)+" ")]):s("div",{staticClass:"cursor-pointer off",style:"dark"===t.skin?"background: black":"background: #f1f1f1;",on:{click:function(s){return t.openSchedulesModal(a,e,!1)}}},[t._v(" OFF ")])]):s("div",[t._v(" "+t._s(a.start_break)+" ")])])})),s("td",[s("b-icon",{staticClass:"rounded cursor-pointer",staticStyle:{"font-size":"10px"},attrs:{icon:"list-check",size:"50px",title:"SEE TRACKING"},on:{click:function(s){return t.openTrackingModal(t.schedule,e)}}},[t._v(" TRACKING ")])],1)],2)})),1),s("b-tfoot",[s("b-tr")],1)],1)],1)]),t.modalInsertTaskModal?s("modal-create-task",{attrs:{"edit-task":t.editTask,"task-out":t.taskOut},on:{getSchedules:t.getSchedulesIn,close:t.closeInsertTaskModal}}):t._e(),t.modalTrackingModal?s("modal-tracking",{attrs:{item:t.item,from:t.date.from,to:t.date.to,user:t.user},on:{close:t.closeTrackingModal}}):t._e(),t.modalSchedulesModal?s("modal-schedule",{attrs:{user:t.user,schedule:t.schedule,schedules:t.schedules,edit:t.edit},on:{getSchedules:t.getSchedulesIn,close:t.closeSchedulesModal}}):t._e(),s("div",{staticClass:"row",staticStyle:{margin:"1px !important"}},t._l(t.tasks,(function(e,a){return s("div",{key:a,staticClass:"col-sm-2",staticStyle:{margin:"0 !important",padding:"1px !important"}},[s("div",{staticClass:"border-task",style:"background:"+e.color+"!important",on:{click:function(s){return t.openInsertTaskModal(!0,e)}}},[e.title.length<24?s("p",{staticClass:"card-text text-white text-center cursor-pointer"},[t._v(" "+t._s(e.title)+" ")]):s("p",{staticClass:"card-text text-white text-center cursor-pointer"},[t._v(" "+t._s(e.title.substr(0,24))+"... ")])])])})),0)],1)],1)},r=[],n=s("1da1"),i=s("5530"),o=(s("96cf"),s("d81d"),s("4de4"),s("d3b7"),s("2f62")),c=s("ab96"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{attrs:{id:"modalTask",modal:"",scrollable:"","title-class":"h3 text-white font-weight-bolder","header-class":"class_modal_js",size:"lg"},on:{hidden:t.closeModal},scopedSlots:t._u([{key:"modal-header",fn:function(){return[!1===t.editTask?s("div",[s("div",{staticClass:"text-center"},[s("span",{staticStyle:{"font-size":"20px","font-weight":"900",color:"#ffffff"}},[t._v("Create Activity")])]),s("i",{staticClass:"fas fa-times-circle text-white",staticStyle:{color:"#ffffff","font-size":"20px",cursor:"pointer"},on:{click:t.closeModal}})]):t._e(),!0===t.editTask?s("div",[s("div",{staticClass:"text-center"},[s("span",{staticStyle:{"font-size":"20px","font-weight":"900",color:"#ffffff"}},[t._v("Update Activity")])]),s("i",{staticClass:"fas fa-times-circle text-white",staticStyle:{color:"#ffffff","font-size":"20px",cursor:"pointer"},on:{click:t.closeModal}})]):t._e()]},proxy:!0},{key:"modal-footer",fn:function(){return[!1===t.editTask?s("b-button",{attrs:{variant:"primary"},on:{click:t.createTask}},[t.spinnerOn?s("b-spinner",{attrs:{small:""}}):t._e(),t._v(" SAVE ")],1):t._e(),!0===t.editTask?s("b-button",{attrs:{variant:"primary"},on:{click:t.updateTask}},[t.spinnerOn?s("b-spinner",{attrs:{small:""}}):t._e(),t._v(" UPDATE ")],1):t._e()]},proxy:!0}]),model:{value:t.ownControl,callback:function(e){t.ownControl=e},expression:"ownControl"}},[s("validation-observer",{ref:"form"},[s("b-form-group",{},[s("validation-provider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.valid;return[s("b-input-group",[s("b-input-group-prepend",[s("b-input-group-text",{staticClass:"bg-primary text-white",staticStyle:{"padding-right":"5.25em"}},[s("span",[t._v("TITLE")])])],1),s("div",{staticClass:"d-flex align-items-center justify-content-around w-100"},[!1===t.editTask?s("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter title",state:!a[0]&&(!!r||null)},model:{value:t.task.title,callback:function(e){t.$set(t.task,"title",e)},expression:"task.title"}}):t._e(),!0===t.editTask?s("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter title",state:!a[0]&&(!!r||null)},model:{value:t.taskOut.title,callback:function(e){t.$set(t.taskOut,"title",e)},expression:"taskOut.title"}}):t._e()],1)],1),a[0]?s("span",{staticClass:"text-danger"},[t._v(" Title "+t._s(a[0])+" ")]):t._e()]}}])})],1),s("b-form-group",{},[s("validation-provider",{attrs:{name:"description",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.valid;return[s("b-input-group",[s("b-input-group-prepend",[s("b-input-group-text",{staticClass:"bg-primary text-white pr-2"},[s("span",[t._v("DESCRIPTION")])])],1),s("div",{staticClass:"w-100"},[!1===t.editTask?s("b-form-textarea",{staticClass:"input-form",attrs:{placeholder:"Enter description",state:!a[0]&&(!!r||null)},model:{value:t.task.description,callback:function(e){t.$set(t.task,"description",e)},expression:"task.description"}}):t._e(),!0===t.editTask?s("b-form-textarea",{staticClass:"input-form",attrs:{placeholder:"Enter description",state:!a[0]&&(!!r||null)},model:{value:t.taskOut.description,callback:function(e){t.$set(t.taskOut,"description",e)},expression:"taskOut.description"}}):t._e()],1)],1),a[0]?s("span",{staticClass:"text-danger"},[t._v(" Description "+t._s(a[0])+" ")]):t._e()]}}])})],1),!0===t.editTask?s("b-form-group",{},[s("b-input-group",[s("b-col",{staticClass:"p-0",attrs:{md:"3"}},[s("b-input-group-prepend",[s("b-input-group-text",{staticClass:"bg-primary text-white w-100"},[s("span",[t._v("COLOR")])])],1)],1),s("b-col",{staticClass:"p-0 ",attrs:{md:"9"}},[s("div",{staticClass:"w-100"},[!0===t.editTask?s("b-input",{attrs:{type:"color"},model:{value:t.taskOut.color,callback:function(e){t.$set(t.taskOut,"color",e)},expression:"taskOut.color"}}):t._e()],1)])],1)],1):t._e()],1)],1)},u=[],d=(s("99af"),s("a4d3"),s("e01a"),{props:["editTask","taskOut"],data:function(){return{ownControl:!1,comments:null,spinnerOn:!1,optionGenerate:1,task:{id:null,title:null,description:null,color:"#ffffff"},delete:null}},computed:Object(i["a"])({},Object(o["c"])({currentUser:"auth/currentUser",token:"auth/token",tasks:"SocialNetworkActivities/G_TASKS"})),created:function(){this.ownControl=!0,this.backgroundColor()},methods:{closeModal:function(){!0===this.editTask&&this.deleteClass(),this.$emit("close")},createClass:function(t,e){var s=document.createElement("style");s.type="text/css",document.getElementsByTagName("head")[0].appendChild(s),(s.sheet||{}).insertRule?s.sheet.insertRule("".concat(t,"{").concat(e,"}"),0):(s.styleSheet||s.sheet).addRule(t,e),this.delete=s},deleteClass:function(){this.delete.sheet.deleteRule(0)},backgroundColor:function(){!0===this.editTask&&this.createClass("#modalTask___BV_modal_header_","background-color:".concat(this.taskOut.color,"!important"))},createTask:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.spinnerOn=!0,e.next=4,t.$refs.form.validate();case 4:if(s=e.sent,!s){e.next=11;break}return a={title:t.task.title,description:t.task.description,created_by:t.currentUser.user_id,option:t.optionGenerate,color:t.task.color},e.next=9,c["a"].insertTask(a);case 9:r=e.sent,200===r.status&&(t.showSuccessSwal(),t.closeModal());case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e["catch"](0),t.showErrorSwal(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},updateTask:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.showConfirmSwal();case 3:if(s=e.sent,!s.isConfirmed){e.next=15;break}return e.next=7,t.$refs.form.validate();case 7:if(a=e.sent,!a){e.next=15;break}return t.spinnerOn=!0,r={id:t.taskOut.id,title:t.taskOut.title,description:t.taskOut.description,color:t.taskOut.color,colorModal:t.taskOut.color},e.next=13,c["a"].updateTask(r);case 13:n=e.sent,200===n.status&&(t.$emit("getSchedules"),t.showSuccessSwal(),t.closeModal());case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e["catch"](0),t.showErrorSwal(e.t0),e.abrupt("return",[]);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}}),p=d,h=s("2877"),k=Object(h["a"])(p,l,u,!1,null,null,null),m=k.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{attrs:{id:"modalTask",modal:"",scrollable:"","title-class":"h3 text-white font-weight-bolder","header-class":"class_modal_js",size:"lg"},on:{hidden:t.closeModal},scopedSlots:t._u([{key:"modal-title",fn:function(){return[s("span",{staticClass:"text-white",staticStyle:{"font-size":"20px","font-weight":"900"}},[t._v(t._s(t.user.name_user))])]},proxy:!0},{key:"modal-footer",fn:function(){return[!0===t.edit?s("b-button",{attrs:{variant:"primary"},on:{click:t.updateSchedule}},[t.spinnerOn?s("b-spinner",{attrs:{small:""}}):t._e(),t._v(" UPDATE ")],1):t._e(),!1===t.edit?s("b-button",{attrs:{variant:"primary"},on:{click:t.createSchedule}},[t.spinnerOn?s("b-spinner",{attrs:{small:""}}):t._e(),t._v(" CREATE ")],1):t._e()]},proxy:!0}]),model:{value:t.ownControl,callback:function(e){t.ownControl=e},expression:"ownControl"}},[s("validation-observer",{ref:"form"},[s("b-row",[s("b-col",{attrs:{md:"12"}},[s("b-form-group",{},[s("validation-provider",{attrs:{rules:"title-required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-input-group",[s("b-col",{staticClass:"p-0",attrs:{md:"3"}},[s("b-input-group-prepend",[s("b-input-group-text",{staticClass:"bg-primary text-white w-100"},[s("span",[t._v("TITLE")])])],1)],1),s("b-col",{staticClass:"p-0",attrs:{md:"8"}},[s("div",{staticClass:"w-100"},[!0===t.edit?s("v-select",{attrs:{options:t.tasks,reduce:function(t){return t},label:"title"},on:{input:function(e){return t.onChangeEditTaskSche()}},model:{value:t.taskSche,callback:function(e){t.taskSche=e},expression:"taskSche"}}):t._e(),!1===t.edit?s("v-select",{attrs:{options:t.tasks,reduce:function(t){return t},label:"title",placeholder:"Please select an option"},on:{input:function(e){return t.onChangeTaskSche()}},model:{value:t.taskSche,callback:function(e){t.taskSche=e},expression:"taskSche"}}):t._e()],1)]),s("b-col",{attrs:{md:"1"}},[s("div",{staticStyle:{"padding-top":"7px"}},[s("feather-icon",{staticClass:"cursor-pointer",attrs:{size:"20",icon:"PlusCircleIcon"},on:{click:function(e){return t.openInsertTaskModal(!1)}}})],1)])],1),a[0]?s("span",{staticClass:"text-danger"},[t._v(" "+t._s(a[0])+" ")]):t._e()]}}])})],1)],1)],1),s("b-form-group",{},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.valid;return[s("b-input-group",[s("b-input-group-prepend",[s("b-input-group-text",{staticClass:"bg-primary text-white w-100 description m-0"},[s("span",[t._v("DESCRIPTION")])])],1),s("div",{staticClass:"w-100"},[!0===t.edit?s("b-form-textarea",{staticClass:"input-form",attrs:{placeholder:"Enter description",disabled:""},model:{value:t.taskSche.description,callback:function(e){t.$set(t.taskSche,"description",e)},expression:"taskSche.description"}}):t._e(),!1===t.edit?s("b-form-textarea",{staticClass:"input-form",attrs:{state:!a[0]&&(!!r||null),placeholder:"Enter description",required:""},model:{value:t.taskSche.description,callback:function(e){t.$set(t.taskSche,"description",e)},expression:"taskSche.description"}}):t._e()],1)],1),a[0]?s("span",{staticClass:"text-danger"},[t._v(" Description "+t._s(a[0])+" ")]):t._e()]}}])})],1),s("b-row",[s("b-col",{attrs:{md:"12"}},[s("b-form-group",{},[s("b-input-group",[s("b-col",{staticClass:"p-0",attrs:{md:"3"}},[s("b-input-group-prepend",[s("b-input-group-text",{staticClass:"bg-primary text-white w-100"},[s("span",[t._v("COLOR")])])],1)],1),s("b-col",{staticClass:"p-0",attrs:{md:"9"}},[s("div",{staticClass:"w-100"},[!0===t.edit?s("b-input",{attrs:{disabled:"",type:"color"},model:{value:t.taskSche.color,callback:function(e){t.$set(t.taskSche,"color",e)},expression:"taskSche.color"}}):t._e(),!1===t.edit?s("b-input",{attrs:{disabled:"",type:"color"},model:{value:t.taskSche.color,callback:function(e){t.$set(t.taskSche,"color",e)},expression:"taskSche.color"}}):t._e()],1)])],1)],1)],1)],1),s("div",[s("b-card",[s("b-card-header",{staticClass:"\n            d-flex\n            justify-content-center\n            align-items-center align-content-center\n          "},[s("span",{staticStyle:{"font-size":"x-large","font-weight":"bold"}},[t._v(" "+t._s(t.dayText)+" ")])]),s("b-card-body",[s("b-row",[s("b-col",{staticClass:"d-flex justify-content-center align-items-center"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-group",[s("label",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"font-size":"small","font-weight":"bold"}},[t._v("CLOCK IN ")]),!0===t.edit?s("kendo-timepicker",{staticClass:"input-form",attrs:{min:t.min,max:t.max,name:"from",format:"HH:mm"},model:{value:t.taskSche.clock_in,callback:function(e){t.$set(t.taskSche,"clock_in",e)},expression:"taskSche.clock_in"}}):t._e(),!1===t.edit?s("kendo-timepicker",{staticClass:"input-form",attrs:{min:t.min,max:t.max,name:"from",format:"HH:mm"},model:{value:t.taskSche.clock_in,callback:function(e){t.$set(t.taskSche,"clock_in",e)},expression:"taskSche.clock_in"}}):t._e(),a[0]?s("span",{staticClass:"text-danger d-flex justify-content-center"},[t._v(" Clock in "+t._s(a[0])+" ")]):t._e()],1)]}}])})],1),s("b-col",{staticClass:"d-flex justify-content-center align-items-center"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-group",[s("label",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"font-size":"small","font-weight":"bold"}},[t._v("BREAK ")]),!0===t.edit?s("kendo-timepicker",{staticClass:"input-form",attrs:{min:t.min,max:t.max,name:"from",format:"HH:mm"},model:{value:t.taskSche.start_break,callback:function(e){t.$set(t.taskSche,"start_break",e)},expression:"taskSche.start_break"}}):t._e(),!1===t.edit?s("kendo-timepicker",{staticClass:"input-form",attrs:{min:t.min,max:t.max,name:"from",format:"HH:mm"},model:{value:t.taskSche.start_break,callback:function(e){t.$set(t.taskSche,"start_break",e)},expression:"taskSche.start_break"}}):t._e(),a[0]?s("span",{staticClass:"text-danger d-flex justify-content-center"},[t._v(" Start Break "+t._s(a[0])+" ")]):t._e()],1)]}}])})],1),s("b-col",{staticClass:"d-flex justify-content-center align-items-center"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("b-form-group",[s("label",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"font-size":"small","font-weight":"bold"}},[t._v("CLOCK OUT")]),!0===t.edit?s("kendo-timepicker",{staticClass:"input-form",attrs:{min:t.min,max:t.max,name:"from",format:"HH:mm"},model:{value:t.taskSche.clock_out,callback:function(e){t.$set(t.taskSche,"clock_out",e)},expression:"taskSche.clock_out"}}):t._e(),!1===t.edit?s("kendo-timepicker",{staticClass:"input-form",attrs:{min:t.min,max:t.max,name:"from",format:"HH:mm"},model:{value:t.taskSche.clock_out,callback:function(e){t.$set(t.taskSche,"clock_out",e)},expression:"taskSche.clock_out"}}):t._e(),a[0]?s("span",{staticClass:"text-danger d-flex justify-content-center"},[t._v(" Clock Out "+t._s(a[0])+" ")]):t._e()],1)]}}])})],1)],1)],1)],1)],1)],1),t.modalInsertTaskModal?s("modal-create-task",{attrs:{"edit-task":t.editTask},on:{close:t.closeInsertTaskModal}}):t._e()],1)},b=[],_=(s("3ca3"),s("ddb0"),s("c1df")),v=s.n(_),S=s("4a7a"),x=s.n(S),g={components:{vSelect:x.a,ModalCreateTask:m},props:["user","schedule","schedules","edit"],data:function(){return{idTask:" ",ownControl:!1,spinnerOn:!1,task:{title:""},modalInsertTaskModal:!1,taskSche:{},min:new Date(1950,0,1,8,0,0),max:new Date(2049,11,31,24,0,0),minDate:new Date(1e3,1,1),maxDate:new Date(2050,9,1),dayText:null,editTask:!1,delete:null}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.$store.dispatch("SocialNetworkActivities/A_GET_TASKS"),t.ownControl=!0,t.convert()]);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},mounted:function(){this.backgroundColor(),this.taskConvert()},computed:Object(i["a"])({},Object(o["c"])({currentUser:"auth/currentUser",token:"auth/token",tasks:"SocialNetworkActivities/G_TASKS"})),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])("SocialNetworkActivities",["A_GET_TASKS"])),{},{convert:function(){return this.dayText=v()(this.schedule.date).format("ddd"),this.dayText},closeModal:function(){!0===this.edit&&this.deleteClass(),this.$emit("close")},onChangeTaskSche:function(){this.$refs.form.reset(),this.taskSche||(this.taskSche={})},createClass:function(t,e){var s=document.createElement("style");s.type="text/css",document.getElementsByTagName("head")[0].appendChild(s),(s.sheet||{}).insertRule?s.sheet.insertRule("".concat(t,"{").concat(e,"}"),0):(s.styleSheet||s.sheet).addRule(t,e),this.delete=s},deleteClass:function(){this.delete.sheet.deleteRule(0)},backgroundColor:function(){!0===this.edit&&this.createClass("#modalTask___BV_modal_header_","background-color:".concat(this.schedule.color,"!important"))},onChangeEditTaskSche:function(){this.taskSche.clock_in=this.schedule.clock_in,this.taskSche.clock_out=this.schedule.clock_out,this.taskSche.start_break=this.schedule.start_break,this.taskSche.id_tasks=this.taskSche.id},taskConvert:function(){this.taskSche=this.schedule,this.taskSche.title=this.schedule.title_task},updateSchedule:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.form.validate();case 3:if(s=e.sent,!s){e.next=11;break}return t.spinnerOn=!0,a={id_task:t.taskSche.id_tasks,schedule:{id:t.schedule.id,clock_in:t.taskSche.clock_in,clock_out:t.taskSche.clock_out,color:t.schedule.color,date:t.schedule.date,description:t.schedule.description,id_tasks:t.schedule.id_tasks,isBreak:t.taskSche.isBreak,start_break:t.taskSche.start_break,end_break:t.taskSche.end_break,title_task:t.schedule.title},item:t.user,id_user:t.currentUser.user_id},e.next=9,c["a"].updateSchedules(a);case 9:r=e.sent,200===r.status&&(t.$emit("getSchedules"),t.showSuccessSwal("Schedule has been updated successfully"),t.closeModal());case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e["catch"](0),t.showErrorSwal(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},createSchedule:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.form.validate();case 3:if(s=e.sent,!s){e.next=11;break}return t.spinnerOn=!0,a={schedule:{clock_in:t.taskSche.clock_in,clock_out:t.taskSche.clock_out,date:t.schedule.date,start_break:t.taskSche.start_break},id_module:15,id_task:t.taskSche.id,id_user:t.user.id,created_by:t.currentUser.user_id},e.next=9,c["a"].createSchedules(a);case 9:r=e.sent,200===r.status&&(t.$emit("getSchedules"),t.showSuccessSwal(),t.closeModal());case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e["catch"](0),t.showErrorSwal(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},openInsertTaskModal:function(t){this.editTask=t,this.modalInsertTaskModal=!0},closeInsertTaskModal:function(){this.A_GET_TASKS(),this.modalInsertTaskModal=!1}})},C=g,y=(s("1aab"),Object(h["a"])(C,f,b,!1,null,"4504e27c",null)),w=y.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{attrs:{scrollable:"","hide-footer":"","title-class":"h3 text-white font-weight-bolder",title:"Tracking",size:"lg"},on:{hidden:t.closeModal},scopedSlots:t._u([{key:"modal-title",fn:function(){return[s("span",{staticClass:"text-white",staticStyle:{"font-size":"20px","font-weight":"900"}},[t._v(t._s(t.user.name_user))])]},proxy:!0}]),model:{value:t.ownControl,callback:function(e){t.ownControl=e},expression:"ownControl"}},[s("div",[s("b-card",{staticClass:"mb-0",attrs:{"no-body":""}},[s("b-table",{staticClass:"font-small-3 text-center",attrs:{small:"",fields:t.fields,items:t.search},scopedSlots:t._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-primary my-2"},[s("b-spinner",{staticClass:"align-middle mr-1"}),s("strong",[t._v("Loading ...")])],1)]},proxy:!0},{key:"cell(date)",fn:function(e){return[s("p",{staticClass:"mb-0 font-weight-bold "},[t._v(" "+t._s(t._f("myGlobal")(e.item.date))+" ")])]}},{key:"cell(previous)",fn:function(e){return[s("p",{staticClass:"mb-0 font-weight-bold "},[t._v(" "+t._s(e.item.prev)+" ")])]}},{key:"cell(change)",fn:function(e){return[s("p",{staticClass:"mb-0 font-weight-bold "},[t._v(" "+t._s(e.item.change_t)+" ")])]}},{key:"cell(created_by)",fn:function(e){return[s("p",{staticClass:"mb-0 font-weight-bold "},[t._v(" "+t._s(e.item.created_by)+" ")])]}},{key:"cell(created)",fn:function(e){return[s("p",{staticClass:"mb-0 font-weight-bold "},[t._v(" "+t._s(t._f("myGlobalDay")(e.item.created_at))+" ")])]}}])})],1)],1)])},O=[],E=[{key:"date",sortable:!1,label:"Date"},{key:"previous",sortable:!1,label:"Previous"},{key:"change",sortable:!1,label:"Change"},{key:"created_by",sortable:!1,label:"Created By"},{key:"created",sortable:!1,label:"Created"}],M={props:["item","from","to","user"],data:function(){return{ownControl:!1,fields:E,items:{},tracking:[]}},created:function(){this.ownControl=!0},methods:{closeModal:function(){this.$emit("close")},search:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s={item:t.item,from:t.from,to:t.to},e.next=4,c["a"].getTrackingChanges(s);case 4:return a=e.sent,t.items=a.data,e.abrupt("return",t.items);case 9:return e.prev=9,e.t0=e["catch"](0),t.showErrorSwal(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},A=M,R=Object(h["a"])(A,T,O,!1,null,"1879efe4",null),j=R.exports,I=[{type:"datepicker",margin:!0,showLabel:!0,label:"From",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6},{type:"datepicker",margin:!0,showLabel:!0,label:"To",placeholder:"Date",class:"font-small-3",model:null,locale:"en",dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},cols:6}],$={components:{ModalCreateTask:m,ModalTracking:j,ModalSchedule:w},data:function(){return{lenght:null,fields:[],filter:I,isBusy:!1,schedules:[],date:{from:"2021-10-18",to:"2021-10-24"},modalInsertTaskModal:!1,modalTrackingModal:!1,modalSchedulesModal:!1,item:{},schedule:{},user:{},edit:!1,editTask:!1,taskOut:null}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])({currentUser:"auth/currentUser",token:"auth/token",tasks:"SocialNetworkActivities/G_TASKS",skin:"appConfig/skin"})),{},{classAdd:function(){return"dark"===this.skin?"dark":""}}),created:function(){this.$store.commit("app/SET_LOADING",!0),this.getSchedulesIn(),this.A_GET_TASKS()},methods:Object(i["a"])(Object(i["a"])({dataByDay:function(t){this.fields=[];var e=[];this.fields.push({key:"field",label:"USER",sortable:!1}),t.map((function(t){e=t.json_data}));for(var s=0;s<e.length-1;s+=2){var a=new Date(e[s].date),r={weekday:"long",month:"numeric",day:"numeric"};this.fields.push({key:"field",label:a.toLocaleDateString("en-US",r)}),this.fields.push({key:"field",label:"Break"})}this.fields.push({key:"field",label:"Action",sortable:!1})}},Object(o["b"])("SocialNetworkActivities",["A_GET_TASKS"])),{},{getSchedulesIn:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={from:t.date.from,to:t.date.to},e.next=3,c["a"].getSchedules(s);case 3:return a=e.sent,200===a.status&&t.$store.commit("app/SET_LOADING",!1),t.schedules=a.data,e.abrupt("return",t.schedules);case 7:case"end":return e.stop()}}),e)})))()},openInsertTaskModal:function(t,e){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:(s.isCeo||s.isSupervisor||s.isTeamLeader)&&(s.editTask=t,s.modalInsertTaskModal=!0,s.taskOut=e);case 1:case"end":return a.stop()}}),a)})))()},closeInsertTaskModal:function(){this.A_GET_TASKS(),this.modalInsertTaskModal=!1},openSchedulesModal:function(t,e,s){(this.isCeo||this.isSupervisor||this.isTeamLeader)&&(this.modalSchedulesModal=!0,this.user=e,this.schedule=t,this.edit=s)},closeSchedulesModal:function(){this.modalSchedulesModal=!1},openTrackingModal:function(t,e){this.modalTrackingModal=!0,this.user.name_user=e.name_user,this.user.id=e.id,this.schedule=t,this.item=e},closeTrackingModal:function(){this.modalTrackingModal=!1},resetFilter:function(){this.filter.map((function(t){t.model=null})),this.$emit("reload")},sideBarSearch:function(){this.getSchedulesIn()}})},B=$,D=(s("b57b"),Object(h["a"])(B,a,r,!1,null,"7ece8901",null));e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-42a7f4b2.fe53f162.js.map