(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e88b8284"],{1079:function(c,n,t){"use strict";var e=t("541c");n["a"]=e["a"]},dc6c:function(c,n,t){"use strict";t.r(n);var e=function(){var c=this,n=c.$createElement,t=c._self._c||n;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("switch-basic"),t("switch-color"),t("switch-icon"),t("switch-grouped")],1)],1)},s=[],o=t("a15b"),a=t("b28b"),i=function(){var c=this,n=c.$createElement,t=c._self._c||n;return t("b-card-code",{attrs:{title:"Basic Switch"},scopedSlots:c._u([{key:"code",fn:function(){return[c._v(" "+c._s(c.codeBasic)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[c._v("A single checkbox can be rendered with a switch appearance by setting the prop ")]),t("code",[c._v("switch")]),t("span",[c._v(" to ")]),t("code",[c._v("true")])]),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-checkbox",{attrs:{checked:"true",name:"check-button",switch:"",inline:""}},[c._v(" Active Switch ")]),t("b-form-checkbox",{attrs:{checked:"false",name:"check-button",switch:"",inline:""}},[c._v(" Inactive Switch ")]),t("b-form-checkbox",{attrs:{checked:"true",name:"check-button",switch:"",inline:"",disabled:""}},[c._v(" Disabled Active Switch ")]),t("b-form-checkbox",{attrs:{checked:"false",name:"check-button",switch:"",inline:"",disabled:""}},[c._v(" Disabled Inactive Switch ")])],1)],1)},r=[],l=t("1079"),h=t("c3e6"),b=t("d6e4"),d='\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-checkbox\n      checked="true"\n      name="check-button"\n      switch\n      inline\n    >\n      Active Switch\n    </b-form-checkbox>\n    <b-form-checkbox\n      checked="false"\n      name="check-button"\n      switch\n      inline\n    >\n      Inactive Switch\n    </b-form-checkbox>\n    <b-form-checkbox\n      checked="true"\n      name="check-button"\n      switch\n      inline\n      disabled\n    >\n      Disabled Active Switch\n    </b-form-checkbox>\n\n    <b-form-checkbox\n      checked="false"\n      name="check-button"\n      switch\n      inline\n      disabled\n    >\n      Disabled Inactive Switch\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormCheckbox,\n  },\n}\n<\/script>\n',m='\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- primary --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Primary\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-primary"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- secondary --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Secondary\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-secondary"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- success --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Success\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-success"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- danger --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Danger\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-danger"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- warning --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Warning\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-warning"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- info --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Info\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-info"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- dark --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Dark\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-dark"\n        name="check-button"\n        switch\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormCheckbox,\n  },\n}\n<\/script>\n',u='\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- primary --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Primary\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-primary"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="BellIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="BellOffIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- secondary --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Secondary\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-secondary"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="CheckIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="XIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- success --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Success\n      </b-card-text>\n      <b-form-checkbox\n        class="custom-control-success"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="Volume2Icon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="VolumeXIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- danger --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Danger\n      </b-card-text>\n      <b-form-checkbox\n        class="custom-control-danger"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="CameraIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="CameraOffIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- warning --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Warning\n      </b-card-text>\n      <b-form-checkbox\n        class="custom-control-warning"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="MicIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="MicOffIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- info --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Info\n      </b-card-text>\n      <b-form-checkbox\n        class="custom-control-info"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="WifiIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="WifiOffIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- dark --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Dark\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-dark"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="GithubIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="GitlabIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n  },\n}\n<\/script>\n',f="\n<template>\n  <div>\n    <b-form-group label=\"Inline switch style checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        switches\n        class=\"demo-inline-spacing\"\n      />\n    </b-form-group>\n    <b-form-group label=\"Stacked (vertical) switch style checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        switches\n        stacked\n      />\n    </b-form-group>\n  </div>\n</template>\n\n\n<script>\nimport { BFormCheckboxGroup, BFormGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormCheckboxGroup,\n  },\n  data() {\n    return {\n      options: [\n        { text: 'Red', value: 'red' },\n        { text: 'Green', value: 'green' },\n        { text: 'Yellow (disabled)', value: 'yellow', disabled: true },\n        { text: 'Blue', value: 'blue' },\n      ],\n      selected: [],\n    }\n  },\n}\n<\/script>\n",x={components:{BCardCode:l["a"],BFormCheckbox:h["a"],BCardText:b["a"]},data:function(){return{codeBasic:d}}},k=x,p=t("2877"),v=Object(p["a"])(k,i,r,!1,null,null,null),w=v.exports,C=function(){var c=this,n=c.$createElement,t=c._self._c||n;return t("b-card-code",{attrs:{title:"Colors"},scopedSlots:c._u([{key:"code",fn:function(){return[c._v(" "+c._s(c.codeColor)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[c._v("Use class ")]),t("code",[c._v(".custom-control-#{$color-name}")]),t("span",[c._v(" with ")]),t("code",[c._v("<b-form-checkbox switch>")]),t("span",[c._v(" to change switch's color ")])]),t("div",{staticClass:"demo-inline-spacing"},[t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Primary ")]),t("b-form-checkbox",{staticClass:"custom-control-primary",attrs:{checked:"true",name:"check-button",switch:""}})],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Secondary ")]),t("b-form-checkbox",{staticClass:"custom-control-secondary",attrs:{checked:"true",name:"check-button",switch:""}})],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Success ")]),t("b-form-checkbox",{staticClass:"custom-control-success",attrs:{checked:"true",name:"check-button",switch:""}})],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Danger ")]),t("b-form-checkbox",{staticClass:"custom-control-danger",attrs:{checked:"true",name:"check-button",switch:""}})],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Warning ")]),t("b-form-checkbox",{staticClass:"custom-control-warning",attrs:{checked:"true",name:"check-button",switch:""}})],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Info ")]),t("b-form-checkbox",{staticClass:"custom-control-info",attrs:{checked:"true",name:"check-button",switch:""}})],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Dark ")]),t("b-form-checkbox",{staticClass:"custom-control-dark",attrs:{checked:"true",name:"check-button",switch:""}})],1)])],1)},g=[],_={components:{BCardCode:l["a"],BFormCheckbox:h["a"],BCardText:b["a"]},data:function(){return{codeColor:m}}},I=_,y=Object(p["a"])(I,C,g,!1,null,null,null),B=y.exports,S=function(){var c=this,n=c.$createElement,t=c._self._c||n;return t("b-card-code",{attrs:{title:"Icons"},scopedSlots:c._u([{key:"code",fn:function(){return[c._v(" "+c._s(c.codeIcon)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[c._v("Use class ")]),t("code",[c._v(".switch-icon-left & .switch-icon-right")]),t("span",[c._v(" inside of")]),t("code",[c._v("<b-form-checkbox switch>")]),t("span",[c._v(" to create a switch with icon.")])]),t("div",{staticClass:"demo-inline-spacing"},[t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Primary ")]),t("b-form-checkbox",{staticClass:"custom-control-primary",attrs:{checked:"true",name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"BellIcon"}})],1),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"BellOffIcon"}})],1)])],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Secondary ")]),t("b-form-checkbox",{staticClass:"custom-control-secondary",attrs:{checked:"true",name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"CheckIcon"}})],1),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"XIcon"}})],1)])],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Success ")]),t("b-form-checkbox",{staticClass:"custom-control-success",attrs:{name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"Volume2Icon"}})],1),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"VolumeXIcon"}})],1)])],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Danger ")]),t("b-form-checkbox",{staticClass:"custom-control-danger",attrs:{name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"CameraIcon"}})],1),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"CameraOffIcon"}})],1)])],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Warning ")]),t("b-form-checkbox",{staticClass:"custom-control-warning",attrs:{name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"MicIcon"}})],1),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"MicOffIcon"}})],1)])],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Info ")]),t("b-form-checkbox",{staticClass:"custom-control-info",attrs:{name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"WifiIcon"}})],1),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"WifiOffIcon"}})],1)])],1),t("div",[t("b-card-text",{staticClass:"mb-0"},[c._v(" Dark ")]),t("b-form-checkbox",{staticClass:"custom-control-dark",attrs:{checked:"true",name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"GithubIcon"}})],1),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"GitlabIcon"}})],1)])],1)])],1)},G=[],F={components:{BCardCode:l["a"],BCardText:b["a"],BFormCheckbox:h["a"]},data:function(){return{codeIcon:u}}},O=F,D=Object(p["a"])(O,S,G,!1,null,null,null),W=D.exports,A=function(){var c=this,n=c.$createElement,t=c._self._c||n;return t("b-card-code",{attrs:{title:"Grouped switch "},scopedSlots:c._u([{key:"code",fn:function(){return[c._v(" "+c._s(c.codeGroupArray)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[c._v("Render groups of checkboxes with the look of a switches by setting the prop switches on ")]),t("code",[c._v("<b-form-checkbox-group>")]),c._v(". ")]),t("div",[t("b-form-group",{attrs:{label:"Inline switch style checkboxes"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:c.options,switches:""},model:{value:c.selected,callback:function(n){c.selected=n},expression:"selected"}})],1),t("b-form-group",{attrs:{label:"Stacked (vertical) switch style checkboxes"}},[t("b-form-checkbox-group",{attrs:{options:c.options,switches:"",stacked:""},model:{value:c.selected,callback:function(n){c.selected=n},expression:"selected"}})],1)],1),t("b-card-text",{staticClass:"mb-0"},[c._v(" "+c._s(c.selected)+" ")])],1)},$=[],j=t("8226"),E=t("3b99"),M={components:{BCardCode:l["a"],BCardText:b["a"],BFormGroup:j["a"],BFormCheckboxGroup:E["a"]},data:function(){return{options:[{text:"Red",value:"red"},{text:"Green",value:"green"},{text:"Yellow (disabled)",value:"yellow",disabled:!0},{text:"Blue",value:"blue"}],selected:[],codeGroupArray:f}}},P=M,R=Object(p["a"])(P,A,$,!1,null,null,null),T=R.exports,V={components:{BRow:o["a"],BCol:a["a"],SwitchBasic:w,SwitchColor:B,SwitchIcon:W,SwitchGrouped:T}},X=V,J=Object(p["a"])(X,e,s,!1,null,null,null);n["default"]=J.exports}}]);
//# sourceMappingURL=chunk-e88b8284.190fd277.js.map