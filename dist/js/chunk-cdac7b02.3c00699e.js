(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdac7b02"],{1079:function(e,n,t){"use strict";var a=t("541c");n["a"]=a["a"]},"89f0":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{lg:"6"}},[t("form-timepicker-basic")],1),t("b-col",{attrs:{lg:"6"}},[t("form-timepicker-second")],1),t("b-col",{attrs:{lg:"6"}},[t("form-timepicker-state")],1),t("b-col",{attrs:{lg:"6"}},[t("form-timepicker-validation")],1),t("b-col",{attrs:{lg:"6"}},[t("form-timepicker-size")],1),t("b-col",{attrs:{lg:"6"}},[t("form-timepicker-button-only")],1),t("b-col",{attrs:{lg:"6"}},[t("form-timepicker-placeholder")],1),t("b-col",{attrs:{lg:"6"}},[t("form-timepicker-optional")],1),t("b-col",{attrs:{cols:"12"}},[t("form-timepicker-internationalization")],1)],1)},l=[],o=t("a15b"),r=t("b28b"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Basic Timepicker"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[t("b-card-text",[t("code",[e._v("<b-form-timepicker>")]),t("span",[e._v(" is a BootstrapVue custom time picker input form control, which provides full WAI-ARIA compliance and internationalization support. ")])]),t("b-form-timepicker",{attrs:{locale:"en"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("b-card-text",{staticClass:"mt-2 mb-0"},[e._v(" Value: '"+e._s(e.value)+"' ")])],1)},c=[],s=t("1079"),p=t("326b"),d=t("d6e4"),m="\n<template>\n  <div>\n    <b-form-timepicker v-model='value' locale='en' />\n    <div class='mt-2'>Value: '{{ value }}'</div>\n  </div>\n</template>\n\n<script>\nimport AppCard from '@core/components/app-card/AppCard.vue'\nimport { BFormTimepicker } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n  },\n  data: () => ({\n    value: '',\n  }),\n}\n<\/script>\n",u="\n<template>\n  <div>\n    <label for='example-input'>Choose a time</label>\n    <b-input-group class='mb-1'>\n      <b-form-input id='example-input' v-model='value' type='text' placeholder='HH:mm:ss' />\n      <b-input-group-append>\n        <b-form-timepicker v-model='value' button-only right show-seconds locale='en' aria-controls='example-input' />\n      </b-input-group-append>\n    </b-input-group>\n    <p>Value: '{{ value }}'</p>\n  </div>\n</template>\n\n<script>\nimport AppCard from '@core/components/app-card/AppCard.vue'\nimport {\n  BFormTimepicker, BInputGroup, BFormInput, BInputGroupAppend,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n    BInputGroup,\n    BFormInput,\n    BInputGroupAppend,\n  },\n  data: () => ({\n    value: '',\n  }),\n}\n<\/script>\n",b="\n<template>\n  <b-row>\n    <b-col\n      cols=\"12\"\n      class=\"mb-3\"\n    >\n      <label for=\"example-locales\">Locale:</label>\n      <b-form-select\n        id=\"example-locales\"\n        v-model=\"locale\"\n        :options=\"locales\"\n      />\n    </b-col>\n    <b-col md=\"6\">\n      <b-form-timepicker\n        v-model=\"value\"\n        v-bind=\"labels[locale] || {}\"\n        :locale=\"locale\"\n        show-seconds\n        @context=\"onContext\"\n      />\n    </b-col>\n    <b-col>\n      <p>\n        Value: <b>'{{ value }}'</b>\n      </p>\n      <p class=\"mb-0\">\n        Context:\n      </p>\n      <pre class=\"small\">{{ context }}</pre>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport AppCard from '@core/components/app-card/AppCard.vue'\nimport {\n  BFormTimepicker, BRow, BCol, BFormSelect,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n    BRow,\n    BCol,\n    BFormSelect,\n  },\n  data: () => ({\n    value: '',\n    context: null,\n    locale: 'en-US',\n    locales: [\n      { value: 'en-US', text: 'English US (en-US)' },\n      { value: 'de', text: 'German (de)' },\n      { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },\n      { value: 'zh', text: 'Chinese (zh)' },\n    ],\n    labels: {\n      de: {\n        labelHours: 'Stunden',\n        labelMinutes: 'Minuten',\n        labelSeconds: 'Sekunden',\n        labelIncrement: 'Erhöhen',\n        labelDecrement: 'Verringern',\n        labelSelected: 'Ausgewählte Zeit',\n        labelNoTimeSelected: 'Keine Zeit ausgewählt',\n        labelCloseButton: 'Schließen',\n      },\n      'ar-EG': {\n        labelHours: 'ساعات',\n        labelMinutes: 'الدقائق',\n        labelSeconds: 'ثواني',\n        labelAmpm: 'صباحا مساء',\n        labelAm: 'ص',\n        labelPm: 'م',\n        labelIncrement: 'زيادة',\n        labelDecrement: 'إنقاص',\n        labelSelected: 'الوقت المحدد',\n        labelNoTimeSelected: 'لا وقت المختار',\n        labelCloseButton: 'قريب',\n      },\n      zh: {\n        labelHours: '小时',\n        labelMinutes: '分钟',\n        labelSeconds: '秒',\n        labelAmpm: '上午下午',\n        labelAm: '上午',\n        labelPm: '下午',\n        labelIncrement: '增量',\n        labelDecrement: '减量',\n        labelSelected: '选定时间',\n        labelNoTimeSelected: '没有选择时间',\n        labelCloseButton: '关',\n      },\n    },\n  }),\n  methods: {\n    onContext(ctx) {\n      this.context = ctx\n    },\n  },\n}\n<\/script>\n",v='\n<template>\n  <div>\n    <label for="timepicker-buttons">Time picker with optional footer buttons</label>\n    <b-form-timepicker\n      id="timepicker-buttons"\n      now-button\n      reset-button\n      locale="en"\n    />\n  </div>\n</template>\n\n<script>\nimport AppCard from \'@core/components/app-card/AppCard.vue\'\nimport { BFormTimepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n  },\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <label for="timepicker-placeholder">Time picker with placeholder</label>\n    <b-form-timepicker\n      id="timepicker-placeholder"\n      placeholder="Choose a time"\n      local="en"\n    />\n  </div>\n</template>\n\n<script>\nimport AppCard from \'@core/components/app-card/AppCard.vue\'\nimport { BFormTimepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n  },\n}\n<\/script>\n',h="\n<template>\n  <div>\n    <b-form-timepicker\n      v-model=\"value\"\n      show-seconds\n      locale=\"en\"\n    />\n    <div class=\"mt-2\">\n      Value: '{{ value }}'\n    </div>\n  </div>\n</template>\n\n<script>\nimport AppCard from '@core/components/app-card/AppCard.vue'\nimport { BFormTimepicker } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n  },\n  data: () => ({\n    value: '',\n  }),\n}\n<\/script>\n",k='\n<template>\n  <div>\n    <label for="timepicker-sm">Small time picker</label>\n    <b-form-timepicker\n      id="timepicker-sm"\n      size="sm"\n      local="en"\n      class="mb-2"\n    />\n\n    <label for="timepicker-lg">Large time picker</label>\n    <b-form-timepicker\n      id="timepicker-lg"\n      size="lg"\n      local="en"\n    />\n  </div>\n</template>\n\n<script>\nimport AppCard from \'@core/components/app-card/AppCard.vue\'\nimport { BFormTimepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n  },\n}\n<\/script>\n',_='\n<template>\n  <div>\n    <b-form-group label="Select time picker interactive state">\n      <b-form-radio-group\n        v-model="state"\n        plain\n        class="vs-radio-con"\n        aria-controls="ex-disabled-readonly"\n      >\n        <b-form-radio\n          value="disabled"\n        >\n          <span class="vs-radio">\n            <span class="vs-radio--border" />\n            <span class="vs-radio--circle" />\n          </span>\n          <span class="vs-label">Disabled</span>\n        </b-form-radio>\n        <b-form-radio value="readonly">\n          <span class="vs-radio">\n            <span class="vs-radio--border" />\n            <span class="vs-radio--circle" />\n          </span>\n          <span class="vs-label">Readonly</span>\n        </b-form-radio>\n        <b-form-radio value="normal">\n          <span class="vs-radio">\n            <span class="vs-radio--border" />\n            <span class="vs-radio--circle" />\n          </span>\n          <span class="vs-label">Normal</span>\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n    <b-form-timepicker\n      id="ex-disabled-readonly"\n      :disabled="disabled"\n      :readonly="readonly"\n    />\n  </div>\n</template>\n\n<script>\nimport AppCard from \'@core/components/app-card/AppCard.vue\'\nimport {\n  BFormTimepicker, BFormGroup, BFormRadioGroup, BFormRadio,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n    BFormGroup,\n    BFormRadioGroup,\n    BFormRadio,\n  },\n  data: () => ({\n    state: \'disabled\',\n  }),\n  computed: {\n    disabled() {\n      return this.state === \'disabled\'\n    },\n    readonly() {\n      return this.state === \'readonly\'\n    },\n  },\n}\n<\/script>\n',x='\n<template>\n  <div>\n    <label for="timepicker-invalid">Choose a time (invalid style)</label>\n    <b-form-timepicker\n      id="datepicker-invalid"\n      :state="false"\n      class="mb-2"\n    />\n\n    <label for="timepicker-valid">Choose a time (valid style)</label>\n    <b-form-timepicker\n      id="datepicker-valid"\n      :state="true"\n    />\n  </div>\n</template>\n\n<script>\nimport AppCard from \'@core/components/app-card/AppCard.vue\'\nimport { BFormTimepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    AppCard,\n    BFormTimepicker,\n  },\n}\n<\/script>\n',C={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BCardText:d["a"]},data:function(){return{value:"",codeBasic:m}}},B=C,S=t("2877"),y=Object(S["a"])(B,i,c,!1,null,null,null),T=y.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Disabled and readonly states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeState)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Setting the ")]),t("code",[e._v("disabled")]),t("span",[e._v(" prop will remove all interactivity of the ")]),t("code",[e._v("<b-form-timepicker>")]),t("span",[e._v(" component.")])]),t("b-card-text",[t("span",[e._v("Setting the ")]),t("code",[e._v("readonly")]),t("span",[e._v(" prop will disable selecting a time, but will keep the component interactive, allowing for tabbing between spinbuttons. The ")]),t("code",[e._v("v-model")]),t("span",[e._v(" will not be updated in the readonly state.")])]),t("div",[t("b-form-group",{attrs:{label:"Select time picker interactive state"}},[t("b-form-radio-group",{attrs:{"aria-controls":"ex-disabled-readonly"},model:{value:e.state,callback:function(n){e.state=n},expression:"state"}},[t("b-form-radio",{attrs:{value:"disabled"}},[e._v(" Disabled ")]),t("b-form-radio",{attrs:{value:"readonly"}},[e._v(" Readonly ")]),t("b-form-radio",{attrs:{value:"normal"}},[e._v(" Normal ")])],1)],1),t("b-form-timepicker",{attrs:{id:"ex-disabled-readonly",disabled:e.disabled,readonly:e.readonly}})],1)],1)},w=[],A=t("8226"),F=t("2924"),E=t("9e14"),z={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BFormGroup:A["a"],BFormRadioGroup:F["a"],BFormRadio:E["a"],BCardText:d["a"]},data:function(){return{state:"disabled",codeState:_}},computed:{disabled:function(){return"disabled"===this.state},readonly:function(){return"readonly"===this.state}}},I=z,G=Object(S["a"])(I,g,w,!1,null,null,null),O=G.exports,V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Validation states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeValidation)+" ")]},proxy:!0}])},[t("b-card-text",[t("code",[e._v("<b-form-timepicker>")]),t("span",[e._v(" supports invalid and valid styling via the boolean ")]),t("code",[e._v("state")]),t("span",[e._v(" prop. Setting ")]),t("code",[e._v("state")]),t("span",[e._v(" to boolean ")]),t("code",[e._v("false")]),t("span",[e._v(" will style the input as invalid, while setting it to boolean ")]),t("code",[e._v("true")]),t("span",[e._v(" will style it as valid. Setting state to ")]),t("code",[e._v("null")]),t("span",[e._v(" will not show any validation state styling (the default).")])]),t("label",{attrs:{for:"timepicker-invalid"}},[e._v("Choose a time (invalid style)")]),t("b-form-timepicker",{staticClass:"mb-2",attrs:{id:"datepicker-invalid",state:e.selectedTime.length>0},model:{value:e.selectedTime,callback:function(n){e.selectedTime=n},expression:"selectedTime"}}),t("label",{attrs:{for:"timepicker-valid"}},[e._v("Choose a time (valid style)")]),t("b-form-timepicker",{attrs:{id:"datepicker-valid",state:!0}})],1)},H=[],R={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BCardText:d["a"]},data:function(){return{selectedTime:"",codeValidation:x}}},U=R,D=Object(S["a"])(U,V,H,!1,null,null,null),M=D.exports,N=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Enabling of seconds spinbutton"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSecond)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("To enable the section of seconds,set the ")]),t("code",[e._v("show-seconds")]),t("span",[e._v(" prop to ")]),t("code",[e._v("true")]),t("span",[e._v(" to enable the seconds selection spinbutton.")])]),t("b-form-timepicker",{attrs:{"show-seconds":"",locale:"en"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("b-card-text",{staticClass:"mt-2 mb-0"},[e._v(" Value: '"+e._s(e.value)+"' ")])],1)},j=[],P={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BCardText:d["a"]},data:function(){return{value:"",codeSecond:h}}},$=P,Z=Object(S["a"])($,N,j,!1,null,null,null),L=Z.exports,K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSize)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Fancy a smaller or larger ")]),t("code",[e._v("<b-form-timepicker>")]),t("span",[e._v(" control? Set the ")]),t("code",[e._v("size")]),t("span",[e._v(" prop to ")]),t("code",[e._v("'sm'")]),t("span",[e._v(" for a smaller form control, or ")]),t("code",[e._v("'lg'")]),t("span",[e._v(" for a larger form form control. Note this does not affect the size of the popup time selection dialog. ")])]),t("label",{attrs:{for:"timepicker-sm"}},[e._v("Small time picker")]),t("b-form-timepicker",{staticClass:"mb-2",attrs:{id:"timepicker-sm",size:"sm",local:"en"}}),t("label",{attrs:{for:"timepicker-lg"}},[e._v("Large time picker")]),t("b-form-timepicker",{attrs:{id:"timepicker-lg",size:"lg",local:"en"}})],1)},J=[],W={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BCardText:d["a"]},data:function(){return{codeSize:k}}},q=W,Q=Object(S["a"])(q,K,J,!1,null,null,null),X=Q.exports,Y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Placeholder"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codePlaceholder)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Add custom placeholder text to the control, when no date is selected, via the ")]),t("code",[e._v("placeholder")]),t("span",[e._v(" prop. If a placeholder is not provided, the value of the ")]),t("code",[e._v("label-no-time-selected")]),t("span",[e._v(" prop is used.")])]),t("label",{attrs:{for:"timepicker-placeholder"}},[e._v("Time picker with placeholder")]),t("b-form-timepicker",{attrs:{id:"timepicker-placeholder",placeholder:"Choose a time",local:"en"}})],1)},ee=[],ne={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BCardText:d["a"]},data:function(){return{codePlaceholder:f}}},te=ne,ae=Object(S["a"])(te,Y,ee,!1,null,null,null),le=ae.exports,oe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Optional controls"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeOptional)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Add optional control buttons to the bottom of the calendar popup via the props ")]),t("code",[e._v("now-button")]),t("span",[e._v(" or ")]),t("code",[e._v("reset-button")]),t("span",[e._v(". The default close button can be removed via the ")]),t("code",[e._v("no-close-button")]),t("span",[e._v(" prop.")])]),t("label",{attrs:{for:"timepicker-buttons"}},[e._v("Time picker with optional footer buttons")]),t("b-form-timepicker",{attrs:{id:"timepicker-buttons","now-button":"","reset-button":"",locale:"en"}})],1)},re=[],ie={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BCardText:d["a"]},data:function(){return{codeOptional:v}}},ce=ie,se=Object(S["a"])(ce,oe,re,!1,null,null,null),pe=se.exports,de=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Button only mode"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeButtonOnly)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v(" Fancy just a button that launches the timepicker dialog, or want to provide your own optional text input field? Use the ")]),t("code",[e._v("button-only")]),t("span",[e._v(" prop to render the timepicker as a dropdown button. The formatted time label will be rendered with the class ")]),t("code",[e._v("sr-only")]),t("span",[e._v(" (available only to screen readers).")])]),t("div",[t("label",{attrs:{for:"example-input"}},[e._v("Choose a time")]),t("b-input-group",{staticClass:"mb-1"},[t("b-form-input",{attrs:{id:"example-input",type:"text",placeholder:"HH:mm:ss"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("b-input-group-append",[t("b-form-timepicker",{attrs:{"button-only":"","button-variant":"outline-primary",right:"",size:"sm","show-seconds":"",locale:"en","aria-controls":"example-input"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1)],1),t("b-card-text",[e._v("Value: '"+e._s(e.value)+"'")])],1)],1)},me=[],ue=t("5e12"),be=t("4797"),ve=t("ccc0"),fe={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BInputGroup:ue["a"],BFormInput:be["a"],BCardText:d["a"],BInputGroupAppend:ve["a"]},data:function(){return{value:"",codeButtonOnly:u}}},he=fe,ke=Object(S["a"])(he,de,me,!1,null,null,null),_e=ke.exports,xe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Internationalization"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeInternationalization)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("By default ")]),t("code",[e._v("<b-form-timepicker>")]),t("span",[e._v(" will use the browser's default locale, but you can specify the locale (or locales) to use via the ")]),t("code",[e._v("locale")]),t("span",[e._v(" prop. The prop accepts either a single locale string, or an array of locale strings (listed in order of most preferred locale to least prefered). ")])]),t("b-row",[t("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[t("label",{attrs:{for:"example-locales"}},[e._v("Locale:")]),t("b-form-select",{attrs:{id:"example-locales",options:e.locales},model:{value:e.locale,callback:function(n){e.locale=n},expression:"locale"}})],1),t("b-col",{attrs:{md:"6"}},[t("b-form-timepicker",e._b({attrs:{locale:e.locale,"show-seconds":""},on:{context:e.onContext},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}},"b-form-timepicker",e.labels[e.locale]||{},!1))],1),t("b-col",[t("b-card-text",[e._v(" Value: "),t("b",[e._v("'"+e._s(e.value)+"'")])]),t("b-card-text",{staticClass:"mb-0"},[e._v(" Context: ")]),t("pre",{staticClass:"small"},[e._v(e._s(e.context))])],1)],1)],1)},Ce=[],Be=t("8361"),Se={components:{BCardCode:s["a"],BFormTimepicker:p["a"],BRow:o["a"],BCol:r["a"],BFormSelect:Be["a"],BCardText:d["a"]},data:function(){return{value:"",context:null,locale:"en-US",codeInternationalization:b,locales:[{value:"en-US",text:"English US (en-US)"},{value:"de",text:"German (de)"},{value:"ar-EG",text:"Arabic Egyptian (ar-EG)"},{value:"zh",text:"Chinese (zh)"}],labels:{de:{labelHours:"Stunden",value:"",context:null,locale:"en-US",codeInternationalization:b,locales:[{value:"en-US",text:"English US (en-US)"},{value:"de",text:"German (de)"},{value:"ar-EG",text:"Arabic Egyptian (ar-EG)"},{value:"zh",text:"Chinese (zh)"}],labels:{de:{labelHours:"Stunden",labelMinutes:"Minuten",labelSeconds:"Sekunden",labelIncrement:"Erhöhen",labelDecrement:"Verringern",labelSelected:"Ausgewählte Zeit",labelNoTimeSelected:"Keine Zeit ausgewählt",labelCloseButton:"Schließen"},"ar-EG":{labelHours:"ساعات",labelMinutes:"الدقائق",labelSeconds:"ثواني",labelAmpm:"صباحا مساء",labelAm:"ص",labelPm:"م",labelIncrement:"زيادة",labelDecrement:"إنقاص",labelSelected:"الوقت المحدد",labelNoTimeSelected:"لا وقت المختار",labelCloseButton:"قريب"},zh:{labelHours:"小时",labelMinutes:"分钟",labelSeconds:"秒",labelAmpm:"上午下午",labelAm:"上午",labelPm:"下午",labelIncrement:"增量",labelDecrement:"减量",labelSelected:"选定时间",labelNoTimeSelected:"没有选择时间",labelCloseButton:"关"}},labelMinutes:"Minuten",labelSeconds:"Sekunden",labelIncrement:"Erhöhen",labelDecrement:"Verringern",labelSelected:"Ausgewählte Zeit",labelNoTimeSelected:"Keine Zeit ausgewählt",labelCloseButton:"Schließen"},"ar-EG":{labelHours:"ساعات",labelMinutes:"الدقائق",labelSeconds:"ثواني",labelAmpm:"صباحا مساء",labelAm:"ص",labelPm:"م",labelIncrement:"زيادة",labelDecrement:"إنقاص",labelSelected:"الوقت المحدد",labelNoTimeSelected:"لا وقت المختار",labelCloseButton:"قريب"},zh:{labelHours:"小时",labelMinutes:"分钟",labelSeconds:"秒",labelAmpm:"上午下午",labelAm:"上午",labelPm:"下午",labelIncrement:"增量",labelDecrement:"减量",labelSelected:"选定时间",labelNoTimeSelected:"没有选择时间",labelCloseButton:"关"}}}},methods:{onContext:function(e){this.context=e}}},ye=Se,Te=Object(S["a"])(ye,xe,Ce,!1,null,null,null),ge=Te.exports,we={components:{BRow:o["a"],BCol:r["a"],FormTimepickerBasic:T,FormTimepickerState:O,FormTimepickerValidation:M,FormTimepickerSecond:L,FormTimepickerSize:X,FormTimepickerPlaceholder:le,FormTimepickerOptional:pe,FormTimepickerButtonOnly:_e,FormTimepickerInternationalization:ge}},Ae=we,Fe=Object(S["a"])(Ae,a,l,!1,null,null,null);n["default"]=Fe.exports}}]);
//# sourceMappingURL=chunk-cdac7b02.3c00699e.js.map