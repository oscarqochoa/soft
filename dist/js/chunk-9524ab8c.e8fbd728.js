(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9524ab8c"],{1079:function(e,t,n){"use strict";var i=n("541c");t["a"]=i["a"]},"1af0":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",e._g(e._b({staticClass:"timeline-item",class:["timeline-variant-"+e.variant,e.fillBorder?"timeline-item-fill-border-"+e.variant:null]},"li",e.$attrs,!1),e.$listeners),[e.icon?n("div",{staticClass:"timeline-item-icon d-flex align-items-center justify-content-center rounded-circle"},[n("feather-icon",{attrs:{icon:e.icon}})],1):n("div",{staticClass:"timeline-item-point"}),e._t("default",(function(){return[n("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[n("h6",{domProps:{textContent:e._s(e.title)}}),n("small",{staticClass:"timeline-item-time text-nowrap text-muted",domProps:{textContent:e._s(e.time)}})]),n("p",{staticClass:"mb-0",domProps:{textContent:e._s(e.subtitle)}})]}))],2)},a=[],s={props:{variant:{type:String,default:"primary"},title:{type:String,default:null},subtitle:{type:String,default:null},time:{type:String,default:null},icon:{type:String,default:null},fillBorder:{type:Boolean,default:!1}}},l=s,o=(n("6f80"),n("2877")),r=Object(o["a"])(l,i,a,!1,null,"4bbac430",null);t["a"]=r.exports},"3af1":function(e,t,n){},4079:function(e,t,n){},"6f80":function(e,t,n){"use strict";n("4079")},"8a4f":function(e,t,n){"use strict";n("3af1")},"8fb1":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12",md:"6"}},[n("timeline-basic")],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("timeline-with-icon")],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("timeline-custom-content")],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("timeline-custom-content-with-icon")],1)],1)},a=[],s=n("a15b"),l=n("b28b"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[n("app-timeline",[n("app-timeline-item",{attrs:{title:"Goal Achieved",subtitle:"All milestones are completed",time:"few minutes ago",variant:"success"}}),n("app-timeline-item",{attrs:{title:"Last milestone remain",subtitle:"You are just one step away from your goal",time:"3 minutes ago",variant:"info"}}),n("app-timeline-item",{attrs:{title:"Your are running low on time",subtitle:"Only 30 minutes left to finish milestone",time:"21 minutes ago",variant:"warning"}}),n("app-timeline-item",{attrs:{title:"Client Meeting",subtitle:"New event has been added to your schedule",time:"36 minutes ago"}}),n("app-timeline-item",{attrs:{title:"Product Design",subtitle:"Product design added in workflow",time:"1 hour ago",variant:"secondary"}})],1)],1)},r=[],m=n("1079"),p=n("e36d"),c=n("1af0"),u='\n<template>\n  <app-timeline>\n    <app-timeline-item\n      title="Goal Achieved"\n      subtitle="All milestones are completed"\n      time="few minutes ago"\n      variant="success"\n    />\n\n    <app-timeline-item\n      title="Last milestone remain"\n      subtitle="You are just one step away from your goal"\n      time="3 minutes ago"\n      variant="info"\n    />\n\n    <app-timeline-item\n      title="Your are running low on time"\n      subtitle="Only 30 minutes left to finish milestone"\n      time="21 minutes ago"\n      variant="warning"\n    />\n\n    <app-timeline-item\n      title="Client Meeting"\n      subtitle="New event has been added to your schedule"\n      time="36 minutes ago"\n    />\n\n    <app-timeline-item\n      title="Product Design"\n      subtitle="Product design added in workflow"\n      time="1 hour ago"\n      variant="secondary"\n    />\n  </app-timeline>\n</template>\n\n<script>\nimport AppTimeline from \'@core/components/app-timeline/AppTimeline.vue\'\nimport AppTimelineItem from \'@core/components/app-timeline/AppTimelineItem.vue\'\n\nexport default {\n  components: {\n    AppTimeline,\n    AppTimelineItem,\n  },\n}\n<\/script>\n',d='\n<template>\n  <app-timeline>\n    <app-timeline-item\n      title="Goal Achieved"\n      subtitle="All milestones are completed"\n      icon="AwardIcon"\n      time="few minutes ago"\n      variant="success"\n    />\n\n    <app-timeline-item\n      title="Last milestone remain"\n      subtitle="You are just one step away from your goal"\n      icon="InfoIcon"\n      time="3 minutes ago"\n      variant="info"\n    />\n\n    <app-timeline-item\n      title="Your are running low on time"\n      subtitle="Only 30 minutes left to finish milestone"\n      icon="ClockIcon"\n      time="21 minutes ago"\n      variant="warning"\n    />\n\n    <app-timeline-item\n      title="Client Meeting"\n      subtitle="New event has been added to your schedule"\n      icon="UserIcon"\n      time="36 minutes ago"\n    />\n\n    <app-timeline-item\n      title="Product Design"\n      subtitle="Product design added in workflow"\n      icon="GridIcon"\n      time="1 hour ago"\n      variant="success"\n    />\n  </app-timeline>\n</template>\n\n<script>\nimport AppTimeline from \'@core/components/app-timeline/AppTimeline.vue\'\nimport AppTimelineItem from \'@core/components/app-timeline/AppTimelineItem.vue\'\n\nexport default {\n  components: {\n    AppTimeline,\n    AppTimelineItem,\n  },\n}\n<\/script>\n',b='\n<template>\n  <app-timeline>\n\n    \x3c!-- 12 INVOICES HAVE BEEN PAID --\x3e\n    <app-timeline-item>\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>12 Invoices have been paid</h6>\n        <small class="text-muted">12 min ago</small>\n      </div>\n      <p>Invoices have been paid to the company.</p>\n      <p>\n        <b-img\n          :src="require(\'@/assets/images/icons/pdf.png\')"\n          height="auto"\n          width="20"\n          class="mr-1"\n        />\n        <span class="align-bottom">invoice.pdf</span>\n      </p>\n    </app-timeline-item>\n\n    <app-timeline-item variant="secondary">\n\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>Client Meeting</h6>\n        <small class="text-muted">45 min ago</small>\n      </div>\n      <p>Project meeting with john @10:15am.</p>\n      <b-media>\n        <template #aside>\n          <b-avatar :src="require(\'@/assets/images/avatars/12-small.png\')" />\n        </template>\n        <h6>John Doe (Client)</h6>\n        <p>CEO of Infibeam</p>\n      </b-media>\n    </app-timeline-item>\n\n    \x3c!-- FINANCIAL REPORT --\x3e\n    <app-timeline-item variant="success">\n\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>Financial Report</h6>\n        <small class="text-muted">2 hours ago</small>\n      </div>\n      <p>Click the button below to read financial reports</p>\n      <b-button\n        v-b-toggle.report-list\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        size="sm"\n        variant="outline-primary"\n      >\n        Show Report\n      </b-button>\n      <b-collapse id="report-list">\n        <b-list-group\n          flush\n          class="mt-1"\n        >\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>Last Year\'s Profit: $20,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>This Year\'s Profit: $25,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>Last Year\'s Commision: $5,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>This Year\'s Commision: $7,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>This Year\'s Total Balance: $70,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n        </b-list-group>\n      </b-collapse>\n    </app-timeline-item>\n\n    \x3c!-- INTERVIEW SCHEDULE --\x3e\n    <app-timeline-item variant="warning">\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>Interview Schedule</h6>\n        <small class="text-muted">03:00 PM</small>\n      </div>\n      <p>Have to interview Katy Turner for the developer job.</p>\n      <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">\n        <b-media>\n          <template #aside>\n            <b-avatar :src="require(\'@/assets/images/avatars/1-small.png\')" />\n          </template>\n          <h6>Katy Turner</h6>\n          <span class="text-muted">Javascript Developer</span>\n        </b-media>\n        <div>\n          <feather-icon\n            icon="MessageSquareIcon"\n            class="mr-1"\n          />\n          <feather-icon icon="PhoneCallIcon" />\n        </div>\n      </div>\n    </app-timeline-item>\n\n    \x3c!-- ONLINE STORE --\x3e\n    <app-timeline-item variant="danger">\n\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>Online Store</h6>\n        <small class="text-muted">03:00 PM</small>\n      </div>\n      <p>Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.</p>\n      <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">\n        \x3c!-- 1st Col --\x3e\n        <div class="mb-1 mb-sm-0">\n          <span class="text-muted mb-50">Developers</span>\n\n          <div>\n            <b-avatar\n              text="A"\n              class="mr-50"\n              size="24"\n              variant="light-primary"\n            />\n            <b-avatar\n              text="B"\n              class="mr-50"\n              size="24"\n              variant="light-success"\n            />\n            <b-avatar\n              text="C"\n              class="mr-50"\n              size="24"\n              variant="light-danger"\n            />\n          </div>\n        </div>\n        \x3c!-- 2nd Col --\x3e\n        <div class="mb-1 mb-sm-0">\n          <span class="text-muted mb-50 d-block">Deadline</span>\n          <span>20 Dec 2077</span>\n        </div>\n        \x3c!-- 3rd Col --\x3e\n        <div>\n          <span class="text-muted mb-50 d-block">Budget</span>\n          <span>$50,000</span>\n        </div>\n      </div>\n    </app-timeline-item>\n\n    \x3c!-- DESIGNING UI --\x3e\n    <app-timeline-item variant="info">\n\n      <div class="d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50">\n        <h6>Designing UI</h6>\n        <b-badge\n          pill\n          variant="light-primary"\n        >\n          Design\n        </b-badge>\n      </div>\n      <p>Our main goal is to design a new mobile application for our client. The customer wants a clean &amp; flat design.</p>\n      <div>\n        <span class="text-muted">\n          Participants\n        </span>\n        <b-avatar-group\n          size="32px"\n          class="mt-50"\n        >\n          <b-avatar\n            v-b-tooltip.hover\n            class="pull-up"\n            title="Jenny Looper"\n            :src="require(\'@/assets/images/portrait/small/avatar-s-5.jpg\')"\n          />\n          <b-avatar\n            v-b-tooltip.hover\n            class="pull-up"\n            title="Jennifer Lopez"\n            :src="require(\'@/assets/images/portrait/small/avatar-s-6.jpg\')"\n          />\n          <b-avatar\n            v-b-tooltip.hover\n            class="pull-up"\n            title="Arya Stark"\n            :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n          />\n        </b-avatar-group>\n      </div>\n    </app-timeline-item>\n  </app-timeline>\n</template>\n\n<script>\nimport {\n  BImg, BAvatar, BMedia, BButton, BCollapse, VBToggle, BListGroup, BListGroupItem, BAvatarGroup, BBadge, VBTooltip,\n} from \'bootstrap-vue\'\nimport AppTimeline from \'@core/components/app-timeline/AppTimeline.vue\'\nimport AppTimelineItem from \'@core/components/app-timeline/AppTimelineItem.vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    AppTimeline,\n    AppTimelineItem,\n    BImg,\n    BMedia,\n    BAvatar,\n    BButton,\n    BCollapse,\n    BListGroup,\n    BListGroupItem,\n    BAvatarGroup,\n    BBadge,\n  },\n  directives: { \'b-toggle\': VBToggle, \'b-tooltip\': VBTooltip, Ripple },\n}\n<\/script>\n',v='\n<template>\n  <app-timeline>\n\n    \x3c!-- 12 INVOICES HAVE BEEN PAID --\x3e\n    <app-timeline-item icon="DollarSignIcon">\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>12 Invoices have been paid</h6>\n        <small class="text-muted">12 min ago</small>\n      </div>\n      <p>Invoices have been paid to the company.</p>\n      <p>\n        <b-img\n          :src="require(\'@/assets/images/icons/pdf.png\')"\n          height="auto"\n          width="20"\n          class="mr-1"\n        />\n        <span class="align-bottom">invoice.pdf</span>\n      </p>\n    </app-timeline-item>\n\n    <app-timeline-item\n      variant="secondary"\n      icon="UserIcon"\n    >\n\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>Client Meeting</h6>\n        <small class="text-muted">45 min ago</small>\n      </div>\n      <p>Project meeting with john @10:15am.</p>\n      <b-media>\n        <template #aside>\n          <b-avatar :src="require(\'@/assets/images/avatars/12-small.png\')" />\n        </template>\n        <h6>John Doe (Client)</h6>\n        <p>CEO of Infibeam</p>\n      </b-media>\n    </app-timeline-item>\n\n    \x3c!-- FINANCIAL REPORT --\x3e\n    <app-timeline-item\n      variant="success"\n      icon="FileTextIcon"\n    >\n\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>Financial Report</h6>\n        <small class="text-muted">2 hours ago</small>\n      </div>\n      <p>Click the button below to read financial reports</p>\n      <b-button\n        v-b-toggle.report-list-with-icon\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        size="sm"\n        variant="outline-primary"\n      >\n        Show Report\n      </b-button>\n      <b-collapse id="report-list-with-icon">\n        <b-list-group\n          flush\n          class="mt-1"\n        >\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>Last Year\'s Profit: $20,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>This Year\'s Profit: $25,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>Last Year\'s Commision: $5,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>This Year\'s Commision: $7,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n          <b-list-group-item\n            href="#"\n            class="d-flex justify-content-between align-items-center bg-transparent"\n          >\n            <span>This Year\'s Total Balance: $70,000</span>\n            <feather-icon icon="Share2Icon" />\n          </b-list-group-item>\n        </b-list-group>\n      </b-collapse>\n    </app-timeline-item>\n\n    \x3c!-- INTERVIEW SCHEDULE --\x3e\n    <app-timeline-item\n      variant="warning"\n      icon="MapPinIcon"\n    >\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>Interview Schedule</h6>\n        <small class="text-muted">03:00 PM</small>\n      </div>\n      <p>Have to interview Katy Turner for the developer job.</p>\n      <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">\n        <b-media>\n          <template #aside>\n            <b-avatar :src="require(\'@/assets/images/avatars/1-small.png\')" />\n          </template>\n          <h6>Katy Turner</h6>\n          <span class="text-muted">Javascript Developer</span>\n        </b-media>\n        <div>\n          <feather-icon\n            icon="MessageSquareIcon"\n            class="mr-1"\n          />\n          <feather-icon icon="PhoneCallIcon" />\n        </div>\n      </div>\n    </app-timeline-item>\n\n    \x3c!-- ONLINE STORE --\x3e\n    <app-timeline-item\n      variant="danger"\n      icon="ShoppingBagIcon"\n    >\n\n      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">\n        <h6>Online Store</h6>\n        <small class="text-muted">03:00 PM</small>\n      </div>\n      <p>Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.</p>\n      <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">\n        \x3c!-- 1st Col --\x3e\n        <div class="mb-1 mb-sm-0">\n          <span class="text-muted mb-50">Developers</span>\n\n          <div>\n            <b-avatar\n              text="A"\n              class="mr-50"\n              size="24"\n              variant="light-primary"\n            />\n            <b-avatar\n              text="B"\n              class="mr-50"\n              size="24"\n              variant="light-success"\n            />\n            <b-avatar\n              text="C"\n              class="mr-50"\n              size="24"\n              variant="light-danger"\n            />\n          </div>\n        </div>\n        \x3c!-- 2nd Col --\x3e\n        <div class="mb-1 mb-sm-0">\n          <span class="text-muted mb-50 d-block">Deadline</span>\n          <span>20 Dec 2077</span>\n        </div>\n        \x3c!-- 3rd Col --\x3e\n        <div>\n          <span class="text-muted mb-50 d-block">Budget</span>\n          <span>$50,000</span>\n        </div>\n      </div>\n    </app-timeline-item>\n\n    \x3c!-- DESIGNING UI --\x3e\n    <app-timeline-item\n      variant="info"\n      icon="GridIcon"\n    >\n\n      <div class="d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50">\n        <h6>Designing UI</h6>\n        <b-badge\n          pill\n          variant="light-primary"\n        >\n          Design\n        </b-badge>\n      </div>\n      <p>Our main goal is to design a new mobile application for our client. The customer wants a clean &amp; flat design.</p>\n      <div>\n        <span class="text-muted">\n          Participants\n        </span>\n        <b-avatar-group\n          size="32px"\n          class="mt-50"\n        >\n          <b-avatar\n            v-b-tooltip.hover\n            class="pull-up"\n            title="Jenny Looper"\n            :src="require(\'@/assets/images/portrait/small/avatar-s-5.jpg\')"\n          />\n          <b-avatar\n            v-b-tooltip.hover\n            class="pull-up"\n            title="Jennifer Lopez"\n            :src="require(\'@/assets/images/portrait/small/avatar-s-6.jpg\')"\n          />\n          <b-avatar\n            v-b-tooltip.hover\n            class="pull-up"\n            title="Arya Stark"\n            :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n          />\n        </b-avatar-group>\n      </div>\n    </app-timeline-item>\n  </app-timeline>\n</template>\n\n<script>\nimport {\n  BImg, BAvatar, BMedia, BButton, BCollapse, VBToggle, BListGroup, BListGroupItem, BAvatarGroup, BBadge, VBTooltip,\n} from \'bootstrap-vue\'\nimport AppTimeline from \'@core/components/app-timeline/AppTimeline.vue\'\nimport AppTimelineItem from \'@core/components/app-timeline/AppTimelineItem.vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    AppTimeline,\n    AppTimelineItem,\n    BImg,\n    BMedia,\n    BAvatar,\n    BButton,\n    BCollapse,\n    BListGroup,\n    BListGroupItem,\n    BAvatarGroup,\n    BBadge,\n  },\n  directives: { \'b-toggle\': VBToggle, \'b-tooltip\': VBTooltip, Ripple },\n}\n<\/script>\n',f={components:{BCardCode:m["a"],AppTimeline:p["a"],AppTimelineItem:c["a"]},data:function(){return{codeBasic:u}}},g=f,h=n("2877"),x=Object(h["a"])(g,o,r,!1,null,null,null),w=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"With Icon"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeWithIcon)+" ")]},proxy:!0}])},[n("app-timeline",[n("app-timeline-item",{attrs:{title:"Goal Achieved",subtitle:"All milestones are completed",icon:"AwardIcon",time:"few minutes ago",variant:"success"}}),n("app-timeline-item",{attrs:{title:"Last milestone remain",subtitle:"You are just one step away from your goal",icon:"InfoIcon",time:"3 minutes ago",variant:"info"}}),n("app-timeline-item",{attrs:{title:"Your are running low on time",subtitle:"Only 30 minutes left to finish milestone",icon:"ClockIcon",time:"21 minutes ago",variant:"warning"}}),n("app-timeline-item",{attrs:{title:"Client Meeting",subtitle:"New event has been added to your schedule",icon:"UserIcon",time:"36 minutes ago"}}),n("app-timeline-item",{attrs:{title:"Product Design",subtitle:"Product design added in workflow",icon:"GridIcon",time:"1 hour ago",variant:"success"}})],1)],1)},I=[],y={components:{BCardCode:m["a"],AppTimeline:p["a"],AppTimelineItem:c["a"]},data:function(){return{codeWithIcon:d}}},A=y,B=Object(h["a"])(A,C,I,!1,null,null,null),j=B.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-card-code",{attrs:{title:"Custom Content"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCustomContent)+" ")]},proxy:!0}])},[i("app-timeline",[i("app-timeline-item",[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("12 Invoices have been paid")]),i("small",{staticClass:"text-muted"},[e._v("12 min ago")])]),i("p",[e._v("Invoices have been paid to the company.")]),i("p",[i("b-img",{staticClass:"mr-1",attrs:{src:n("f35f"),height:"auto",width:"20"}}),i("span",{staticClass:"align-bottom"},[e._v("invoice.pdf")])],1)]),i("app-timeline-item",{attrs:{variant:"secondary"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("Client Meeting")]),i("small",{staticClass:"text-muted"},[e._v("45 min ago")])]),i("p",[e._v("Project meeting with john @10:15am.")]),i("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[i("b-avatar",{attrs:{src:n("5e8f")}})]},proxy:!0}])},[i("h6",[e._v("John Doe (Client)")]),i("p",[e._v("CEO of Infibeam")])])],1),i("app-timeline-item",{attrs:{variant:"success"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("Financial Report")]),i("small",{staticClass:"text-muted"},[e._v("2 hours ago")])]),i("p",[e._v("Click the button below to read financial reports")]),i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.report-list",modifiers:{"report-list":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"outline-primary"}},[e._v(" Show Report ")]),i("b-collapse",{attrs:{id:"report-list"}},[i("b-list-group",{staticClass:"mt-1",attrs:{flush:""}},[i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("Last Year's Profit: $20,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("This Year's Profit: $25,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("Last Year's Commision: $5,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("This Year's Commision: $7,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("This Year's Total Balance: $70,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1)],1)],1)],1),i("app-timeline-item",{attrs:{variant:"warning"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("Interview Schedule")]),i("small",{staticClass:"text-muted"},[e._v("03:00 PM")])]),i("p",[e._v("Have to interview Katy Turner for the developer job.")]),i("div",{staticClass:"d-flex flex-sm-row flex-column justify-content-between align-items-start"},[i("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[i("b-avatar",{attrs:{src:n("28a5")}})]},proxy:!0}])},[i("h6",[e._v("Katy Turner")]),i("span",{staticClass:"text-muted"},[e._v("Javascript Developer")])]),i("div",[i("feather-icon",{staticClass:"mr-1",attrs:{icon:"MessageSquareIcon"}}),i("feather-icon",{attrs:{icon:"PhoneCallIcon"}})],1)],1)]),i("app-timeline-item",{attrs:{variant:"danger"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("Online Store")]),i("small",{staticClass:"text-muted"},[e._v("03:00 PM")])]),i("p",[e._v("Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.")]),i("div",{staticClass:"d-flex flex-sm-row flex-column justify-content-between align-items-start"},[i("div",{staticClass:"mb-1 mb-sm-0"},[i("span",{staticClass:"text-muted mb-50"},[e._v("Developers")]),i("div",[i("b-avatar",{staticClass:"mr-50",attrs:{text:"A",size:"24",variant:"light-primary"}}),i("b-avatar",{staticClass:"mr-50",attrs:{text:"B",size:"24",variant:"light-success"}}),i("b-avatar",{staticClass:"mr-50",attrs:{text:"C",size:"24",variant:"light-danger"}})],1)]),i("div",{staticClass:"mb-1 mb-sm-0"},[i("span",{staticClass:"text-muted mb-50 d-block"},[e._v("Deadline")]),i("span",[e._v("20 Dec 2077")])]),i("div",[i("span",{staticClass:"text-muted mb-50 d-block"},[e._v("Budget")]),i("span",[e._v("$50,000")])])])]),i("app-timeline-item",{attrs:{variant:"info"}},[i("div",{staticClass:"d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50"},[i("h6",[e._v("Designing UI")]),i("b-badge",{attrs:{pill:"",variant:"light-primary"}},[e._v(" Design ")])],1),i("p",[e._v("Our main goal is to design a new mobile application for our client. The customer wants a clean & flat design.")]),i("div",[i("span",{staticClass:"text-muted"},[e._v(" Participants ")]),i("b-avatar-group",{staticClass:"mt-50",attrs:{size:"32px"}},[i("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Jenny Looper",src:n("9a5e")}}),i("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Jennifer Lopez",src:n("fa7b")}}),i("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Arya Stark",src:n("b690")}})],1)],1)])],1)],1)},T=[],_=n("4918"),D=n("34b6"),N=n("e8a3"),E=n("1947"),R=n("5843"),M=n("3135"),G=n("d247"),L=n("3985"),Y=n("e98b"),P=n("39ba"),k=n("2616"),z=n("e009"),O={components:{AppTimeline:p["a"],AppTimelineItem:c["a"],BCardCode:m["a"],BImg:_["a"],BMedia:D["a"],BAvatar:N["a"],BButton:E["a"],BCollapse:R["a"],BListGroup:M["a"],BListGroupItem:G["a"],BAvatarGroup:L["a"],BBadge:Y["a"]},directives:{"b-toggle":P["a"],"b-tooltip":k["a"],Ripple:z["a"]},data:function(){return{codeCustomContent:b}}},U=O,J=Object(h["a"])(U,S,T,!1,null,null,null),F=J.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-card-code",{attrs:{title:"Custom Content"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCustomContentWithIcon)+" ")]},proxy:!0}])},[i("app-timeline",[i("app-timeline-item",{attrs:{icon:"DollarSignIcon"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("12 Invoices have been paid")]),i("small",{staticClass:"text-muted"},[e._v("12 min ago")])]),i("p",[e._v("Invoices have been paid to the company.")]),i("p",[i("b-img",{staticClass:"mr-1",attrs:{src:n("f35f"),height:"auto",width:"20"}}),i("span",{staticClass:"align-bottom"},[e._v("invoice.pdf")])],1)]),i("app-timeline-item",{attrs:{variant:"secondary",icon:"UserIcon"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("Client Meeting")]),i("small",{staticClass:"text-muted"},[e._v("45 min ago")])]),i("p",[e._v("Project meeting with john @10:15am.")]),i("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[i("b-avatar",{attrs:{src:n("5e8f")}})]},proxy:!0}])},[i("h6",[e._v("John Doe (Client)")]),i("p",[e._v("CEO of Infibeam")])])],1),i("app-timeline-item",{attrs:{variant:"success",icon:"FileTextIcon"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("Financial Report")]),i("small",{staticClass:"text-muted"},[e._v("2 hours ago")])]),i("p",[e._v("Click the button below to read financial reports")]),i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.report-list-with-icon",modifiers:{"report-list-with-icon":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"outline-primary"}},[e._v(" Show Report ")]),i("b-collapse",{attrs:{id:"report-list-with-icon"}},[i("b-list-group",{staticClass:"mt-1",attrs:{flush:""}},[i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("Last Year's Profit: $20,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("This Year's Profit: $25,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("Last Year's Commision: $5,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("This Year's Commision: $7,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1),i("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center bg-transparent",attrs:{href:"#"}},[i("span",[e._v("This Year's Total Balance: $70,000")]),i("feather-icon",{attrs:{icon:"Share2Icon"}})],1)],1)],1)],1),i("app-timeline-item",{attrs:{variant:"warning",icon:"MapPinIcon"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("Interview Schedule")]),i("small",{staticClass:"text-muted"},[e._v("03:00 PM")])]),i("p",[e._v("Have to interview Katy Turner for the developer job.")]),i("div",{staticClass:"d-flex flex-sm-row flex-column justify-content-between align-items-start"},[i("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[i("b-avatar",{attrs:{src:n("28a5")}})]},proxy:!0}])},[i("h6",[e._v("Katy Turner")]),i("span",{staticClass:"text-muted"},[e._v("Javascript Developer")])]),i("div",[i("feather-icon",{staticClass:"mr-1",attrs:{icon:"MessageSquareIcon"}}),i("feather-icon",{attrs:{icon:"PhoneCallIcon"}})],1)],1)]),i("app-timeline-item",{attrs:{variant:"danger",icon:"ShoppingBagIcon"}},[i("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[i("h6",[e._v("Online Store")]),i("small",{staticClass:"text-muted"},[e._v("03:00 PM")])]),i("p",[e._v("Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.")]),i("div",{staticClass:"d-flex flex-sm-row flex-column justify-content-between align-items-start"},[i("div",{staticClass:"mb-1 mb-sm-0"},[i("span",{staticClass:"text-muted mb-50"},[e._v("Developers")]),i("div",[i("b-avatar",{staticClass:"mr-50",attrs:{text:"A",size:"24",variant:"light-primary"}}),i("b-avatar",{staticClass:"mr-50",attrs:{text:"B",size:"24",variant:"light-success"}}),i("b-avatar",{staticClass:"mr-50",attrs:{text:"C",size:"24",variant:"light-danger"}})],1)]),i("div",{staticClass:"mb-1 mb-sm-0"},[i("span",{staticClass:"text-muted mb-50 d-block"},[e._v("Deadline")]),i("span",[e._v("20 Dec 2077")])]),i("div",[i("span",{staticClass:"text-muted mb-50 d-block"},[e._v("Budget")]),i("span",[e._v("$50,000")])])])]),i("app-timeline-item",{attrs:{variant:"info",icon:"GridIcon"}},[i("div",{staticClass:"d-flex align-items-start flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-50"},[i("h6",[e._v("Designing UI")]),i("b-badge",{attrs:{pill:"",variant:"light-primary"}},[e._v(" Design ")])],1),i("p",[e._v("Our main goal is to design a new mobile application for our client. The customer wants a clean & flat design.")]),i("div",[i("span",{staticClass:"text-muted"},[e._v(" Participants ")]),i("b-avatar-group",{staticClass:"mt-50",attrs:{size:"32px"}},[i("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Jenny Looper",src:n("9a5e")}}),i("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Jennifer Lopez",src:n("fa7b")}}),i("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Arya Stark",src:n("b690")}})],1)],1)])],1)],1)},H=[],V={components:{AppTimeline:p["a"],AppTimelineItem:c["a"],BCardCode:m["a"],BImg:_["a"],BMedia:D["a"],BAvatar:N["a"],BButton:E["a"],BCollapse:R["a"],BListGroup:M["a"],BListGroupItem:G["a"],BAvatarGroup:L["a"],BBadge:Y["a"]},directives:{"b-toggle":P["a"],"b-tooltip":k["a"],Ripple:z["a"]},data:function(){return{codeCustomContentWithIcon:v}}},W=V,Q=Object(h["a"])(W,Z,H,!1,null,null,null),q=Q.exports,X={components:{BRow:s["a"],BCol:l["a"],TimelineBasic:w,TimelineWithIcon:j,TimelineCustomContent:F,TimelineCustomContentWithIcon:q}},K=X,$=Object(h["a"])(K,i,a,!1,null,null,null);t["default"]=$.exports},e36d:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._g(e._b({staticClass:"app-timeline"},"ul",e.$attrs,!1),e.$listeners),[e._t("default")],2)},a=[],s={},l=s,o=(n("8a4f"),n("2877")),r=Object(o["a"])(l,i,a,!1,null,"484a211f",null);t["a"]=r.exports},f35f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABdCAYAAADzCKvfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODA4M0IxNEM4MzdEODk1OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTY5RDZFNjk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTY5RDZFNTk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiLz4gPC9yZGY6RGVzY3Jp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"}}]);
//# sourceMappingURL=chunk-9524ab8c.e8fbd728.js.map