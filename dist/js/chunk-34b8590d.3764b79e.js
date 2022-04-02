(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34b8590d"],{1079:function(n,t,e){"use strict";var a=e("541c");t["a"]=a["a"]},eb55:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-basic")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-size")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-min-max")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-step")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-wrap")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-vertical")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-locale")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-width")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-inline")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-validation")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-formater")],1),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-disabled-readonly")],1),e("b-col",{attrs:{cols:"12"}},[e("form-spinbutton-slots")],1)],1)},o=[],l=e("a15b"),r=e("b28b"),s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Basic Spinbutton"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeBasic)+" ")]},proxy:!0}])},[e("b-card-text",[n._v(" Spin buttons allow for incrementing or decrementing a numerical value within a range of a minimum and maximum number, with optional step value. ")]),e("div",{staticClass:"mt-2"},[e("label",{attrs:{for:"demo-sb"}},[n._v("Spin Button")]),e("b-form-spinbutton",{attrs:{id:"demo-sb",min:"1",max:"100"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}}),e("b-card-text",{staticClass:"mt-1"},[n._v(" Value: "+n._s(n.value)+" ")]),e("b-alert",{staticClass:"mb-0",attrs:{show:"",variant:"success"}},[e("div",{staticClass:"alert-body"},[n._v(" The ArrowUp and ArrowDown keys can be used to increment or decrement the value. ")])])],1)],1)},i=[],c=e("1079"),u=e("93aa"),d=e("d6e4"),p=e("5fda"),b='\n<template>\n  <div>\n    <label for="demo-sb">Spin Button</label>\n    <b-form-spinbutton\n      id="demo-sb"\n      v-model="value"\n      min="1"\n      max="100"\n    />\n    <p class="mt-1">\n      Value: {{ value }}\n    </p>\n    <b-alert\n      class="mb-0"\n      show\n      variant="success"\n    >\n      <div class="alert-body">\n        <span>The </span>\n        <code>ArrowUp</code>\n        <span> and </span>\n        <code>ArrowDown</code>\n        <span> keys can be used to increment or decrement the value.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BAlert } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BAlert,\n  },\n  data: () => ({\n    value: 50,\n    codeBasic,\n  }),\n}\n<\/script>\n',m='\n<template>\n  <b-row>\n    <b-col\n      md="6"\n      class="mb-2"\n    >\n      <label for="sb-disabled">Disabled spin button</label>\n      <b-form-spinbutton\n        id="sb-disabled"\n        v-model="value"\n        disabled\n      />\n    </b-col>\n    <b-col\n      md="6"\n      class="mb-2"\n    >\n      <label\n        for="sb-readonly"\n        class=""\n      >Readonly spin button</label>\n      <b-form-spinbutton\n        id="sb-readonly"\n        v-model="value"\n        readonly\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormSpinbutton, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BRow,\n    BCol,\n  },\n  data: () => ({\n    value: 50,\n    codeDisabledReadonly,\n  }),\n}\n<\/script>\n',v='\n<template>\n  <div>\n    <label\n      for="sb-inline"\n      class="mr-1"\n    >Inline spin button</label>\n    <b-form-spinbutton\n      id="sb-inline"\n      v-model="value"\n      inline\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <label for="sb-locales">Locale</label>\n    <b-form-select\n      id="sb-locales"\n      v-model="locale"\n      :options="locales"\n    />\n    <label\n      for="sb-local"\n      class="mt-2"\n    >Spin button with locale</label>\n    <b-form-spinbutton\n      id="sb-locale"\n      v-model="value"\n      :locale="locale"\n      min="0"\n      max="10"\n      step="0.125"\n    />\n    <p class="mt-1">\n      Value: {{ value }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BFormSelect } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BFormSelect,\n  },\n  data: () => ({\n    value: 0,\n    locale: \'fr-CA\',\n    locales: [\n      { value: \'en\', text: \'English\' },\n      { value: \'de\', text: \'German\' },\n      { value: \'fr-CA\', text: \'French (Canadian)\' },\n      { value: \'fa\', text: \'Persian\' },\n      { value: \'ar-EG\', text: \'Arabic (Egyptian)\' },\n    ],\n  }),\n}\n<\/script>\n',_='\n<template>\n  <div>\n    <label for="sb-maxmin">Spin button with min 0 and max 10</label>\n    <b-form-spinbutton\n      id="sb-maxmin"\n      v-model="value"\n      min="0"\n      max="10"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n<\/script>\n',x='\n<template>\n  <div>\n    <div>\n      <label for="sb-small">Spin button - Small size</label>\n      <b-form-spinbutton\n        id="sb-small"\n        size="sm"\n        placeholder="--"\n        class="mb-1"\n      />\n\n      <label for="sb-default">Spin button - Default size</label>\n      <b-form-spinbutton\n        id="sb-default"\n        placeholder="--"\n        class="mb-1"\n      />\n\n      <label for="sb-large">Spin button - Large size</label>\n      <b-form-spinbutton\n        id="sb-large"\n        size="lg"\n        placeholder="--"\n        class="mb-1"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n}\n<\/script>\n',h='\n<template>\n  <div>\n    <label for="sb-vertical">Vertical spin button</label><br>\n    <b-form-spinbutton\n      id="sb-vertical"\n      v-model="value"\n      vertical\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n<\/script>\n',y='\n<template>\n  <div>\n    <label for="sb-wrap">Wrapping value spin button</label>\n    <b-form-spinbutton\n      id="sb-wrap"\n      wrap\n      min="1"\n      max="25"\n      placeholder="--"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n}\n<\/script>\n',S='\n<template>\n  <div>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model="value"\n        min="0"\n        max="10"\n        step="0.125"\n        class="w-100"\n      />\n    </b-form-group>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model="value"\n        min="0"\n        max="10"\n        step="0.125"\n        class="w-75"\n      />\n    </b-form-group>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model="value"\n        min="0"\n        max="10"\n        step="0.125"\n        class="w-50"\n      />\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BFormGroup,\n  },\n  data: () => ({\n    value: 0,\n  }),\n}\n<\/script>\n',B='\n<template>\n  <div>\n    <b-form-spinbutton\n      id="sb-inline"\n      v-model="value"\n      :state="Boolean(value >= 50)"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n<\/script>\n',w='\n<template>\n  <div>\n    <label for="sb-step">Spin button with step of 0.25</label>\n    <b-form-spinbutton\n      id="sb-step"\n      v-model="value1"\n      step="0.25"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value1: 50,\n  }),\n}\n<\/script>\n',C="\n<template>\n  <div>\n    <label\n      for=\"sb-days\"\n      class=\"mt-2\"\n    >Spin button with formatter</label>\n    <b-form-spinbutton\n      id=\"sb-days\"\n      v-model=\"value\"\n      :formatter-fn=\"dayFormatter\"\n      min=\"0\"\n      max=\"6\"\n      wrap\n    />\n    <p class=\"mt-1 mb-0\">\n      Value: {{ value }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 0,\n    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n  }),\n  methods: {\n    dayFormatter(value) {\n      return this.days[value]\n    },\n  },\n}\n<\/script>\n",F='\n<template>\n  <b-card-code\n    title="Basic Spinbutton"\n  >\n    <b-row>\n      <b-col md="6">\n        <b-form-spinbutton\n          v-model="value"\n          class="mb-md-0 mb-2"\n          min="1"\n          max="100"\n        >\n          <template #increment>\n            <feather-icon icon="ChevronUpIcon" />\n          </template>\n          <template #decrement>\n            <feather-icon icon="ChevronDownIcon" />\n          </template>\n        </b-form-spinbutton>\n      </b-col>\n      <b-col md="6">\n        <b-form-spinbutton\n          v-model="day"\n          min="0"\n          max="6"\n          wrap\n          :formatter-fn="dayFormatter"\n        >\n          <template #increment>\n            <feather-icon icon="ChevronRightIcon" />\n          </template>\n          <template #decrement>\n            <feather-icon icon="ChevronLeftIcon" />\n          </template>\n        </b-form-spinbutton>\n      </b-col>\n    </b-row>\n  </b-card-code>\n</template>\n\n<script>\nimport BCardCode from \'@core/components/b-card-code\'\nimport { BFormSpinbutton, BRow, BCol } from \'bootstrap-vue\'\nimport { codeBasic } from \'./code\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BCardCode,\n    BRow,\n    BCol,\n  },\n  data: () => ({\n    value: 50,\n    codeBasic,\n    day: 0,\n    days: [\'Sunday\', \'Monday\', \'Tuesday\', \'Wednesday\', \'Thursday\', \'Friday\', \'Saturday\'],\n  }),\n  methods: {\n    dayFormatter(value) {\n      return this.days[value]\n    },\n  },\n}\n<\/script>\n',g={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"],BAlert:p["a"]},data:function(){return{value:50,codeBasic:b}}},k=g,T=e("2877"),E=Object(T["a"])(k,s,i,!1,null,null,null),z=E.exports,V=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Min and Max"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeMinMax)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Spinbuttons have a default range from")]),e("code",[n._v("1")]),e("span",[n._v(" to")]),e("code",[n._v("100")]),n._v(", which can be changed by setting the "),e("code",[n._v("min")]),e("span",[n._v(" and ")]),e("code",[n._v("max")]),e("span",[n._v(" props.")])]),e("label",{attrs:{for:"sb-maxmin"}},[n._v("Spin button with min 0 and max 10")]),e("b-form-spinbutton",{attrs:{id:"sb-maxmin",min:"0",max:"10"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)},j=[],R={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"]},data:function(){return{value:5,codeMinMax:_}}},W=R,A=Object(T["a"])(W,V,j,!1,null,null,null),I=A.exports,O=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Step"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeStep)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("The default step increment is ")]),e("code",[n._v("1")]),e("span",[n._v(", and can be changed via the ")]),e("code",[n._v("step")]),e("span",[n._v("prop (decimal values allowed).")]),e("span",[n._v("When ")]),e("code",[n._v("step")]),e("span",[n._v(" is set, the value will always be a multiple of the step size plus the minimum value.")])]),e("label",{attrs:{for:"sb-step"}},[n._v("Spin button with step of 0.25")]),e("b-form-spinbutton",{attrs:{id:"sb-step",step:"0.25"},model:{value:n.value1,callback:function(t){n.value1=t},expression:"value1"}})],1)},$=[],D={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"]},data:function(){return{value1:50,codeStep:w}}},M=D,L=Object(T["a"])(M,O,$,!1,null,null,null),G=L.exports,U=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Number wrapping"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeWrap)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("To allow the spin button to wrap from max to min when incrementing (or min to max when decrementing), set the ")]),e("code",[n._v("wrap")]),e("span",[n._v(" prop to ")]),e("code",[n._v("true")]),e("span",[n._v(".")])]),e("label",{attrs:{for:"sb-wrap"}},[n._v("Wrapping value spin button")]),e("b-form-spinbutton",{attrs:{id:"sb-wrap",wrap:"",min:"1",max:"25",placeholder:"--"}})],1)},J=[],P={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"]},data:function(){return{codeWrap:y}}},Y=P,N=Object(T["a"])(Y,U,J,!1,null,null,null),q=N.exports,H=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Size"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeSize)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("As with other form controls, ")]),e("code",[n._v("<b-form-spinbutton>")]),e("span",[n._v(" supports small and large sizing via setting the ")]),e("code",[n._v("size")]),e("span",[n._v(" prop to either ")]),e("code",[n._v("'sm'")]),e("span",[n._v(" or ")]),e("code",[n._v("'lg'")]),e("span",[n._v(", respectively.")])]),e("div",[e("label",{attrs:{for:"sb-small"}},[n._v("Spin button - Small size")]),e("b-form-spinbutton",{staticClass:"mb-1",attrs:{id:"sb-small",size:"sm",placeholder:"--"}}),e("label",{attrs:{for:"sb-default"}},[n._v("Spin button - Default size")]),e("b-form-spinbutton",{staticClass:"mb-1",attrs:{id:"sb-default",placeholder:"--"}}),e("label",{attrs:{for:"sb-large"}},[n._v("Spin button - Large size")]),e("b-form-spinbutton",{staticClass:"mb-1",attrs:{id:"sb-large",size:"lg",placeholder:"--"}})],1)],1)},K=[],Q={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"]},data:function(){return{codeSize:x}}},X=Q,Z=Object(T["a"])(X,H,K,!1,null,null,null),nn=Z.exports,tn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Inline"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeInline)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("The spin button will automatically adjust it's width to fit the displayed value. Use the prop ")]),e("code",[n._v("inline")])]),e("div",[e("label",{staticClass:"mr-1",attrs:{for:"sb-inline"}},[n._v("Inline spin button")]),e("b-form-spinbutton",{attrs:{id:"sb-inline",inline:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)],1)},en=[],an={components:{BFormSpinbutton:u["a"],BCardText:d["a"],BCardCode:c["a"]},data:function(){return{value:50,codeInline:v}}},on=an,ln=Object(T["a"])(on,tn,en,!1,null,null,null),rn=ln.exports,sn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Vertical"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeVertical)+" ")]},proxy:!0}])},[e("b-card-text",[n._v("Spinbuttons can be oriented in vertical mode:")]),e("label",{attrs:{for:"sb-vertical"}},[n._v("Vertical spin button")]),e("br"),e("b-form-spinbutton",{attrs:{id:"sb-vertical",vertical:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)},cn=[],un={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"]},data:function(){return{value:50,codeVertical:h}}},dn=un,pn=Object(T["a"])(dn,sn,cn,!1,null,null,null),bn=pn.exports,mn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Locale"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeLocale)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("By default ")]),e("code",[n._v("<b-form-spinbutton>")]),e("span",[n._v(" will format the displayed number in the users browser default locale. You can change the localized formatting by specifying a locale (or array of locales) via the ")]),e("code",[n._v("locale")]),e("span",[n._v(" prop. ")])]),e("div",[e("label",{attrs:{for:"sb-locales"}},[n._v("Locale")]),e("b-form-select",{attrs:{id:"sb-locales",options:n.locales},model:{value:n.locale,callback:function(t){n.locale=t},expression:"locale"}}),e("label",{staticClass:"mt-2",attrs:{for:"sb-local"}},[n._v("Spin button with locale")]),e("b-form-spinbutton",{attrs:{id:"sb-locale",locale:n.locale,min:"0",max:"10",step:"0.125"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}}),e("b-card-text",{staticClass:"mt-1"},[n._v(" Value: "+n._s(n.value)+" ")])],1)],1)},vn=[],fn=e("8361"),_n={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BFormSelect:fn["a"],BCardText:d["a"]},data:function(){return{value:0,locale:"fr-CA",locales:[{value:"en",text:"English"},{value:"de",text:"German"},{value:"fr-CA",text:"French (Canadian)"},{value:"fa",text:"Persian"},{value:"ar-EG",text:"Arabic (Egyptian)"}],codeLocale:f}}},xn=_n,hn=Object(T["a"])(xn,mn,vn,!1,null,null,null),yn=hn.exports,Sn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Disabled and readonly states"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeDisabledReadonly)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Setting the prop ")]),e("code",[n._v("disabled")]),e("span",[n._v(" places the component in a disabled, non-interactive state. The ")]),e("code",[n._v("readonly")]),e("span",[n._v(" prop places the component in a readonly state (focusable, but the value cannot be changed by the user). ")])]),e("b-row",[e("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[e("label",{attrs:{for:"sb-disabled"}},[n._v("Disabled spin button")]),e("b-form-spinbutton",{attrs:{id:"sb-disabled",disabled:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1),e("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[e("label",{attrs:{for:"sb-readonly"}},[n._v("Readonly spin button")]),e("b-form-spinbutton",{attrs:{id:"sb-readonly",readonly:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)],1)],1)},Bn=[],wn={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"],BRow:l["a"],BCol:r["a"]},data:function(){return{value:50,codeDisabledReadonly:m}}},Cn=wn,Fn=Object(T["a"])(Cn,Sn,Bn,!1,null,null,null),gn=Fn.exports,kn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Width"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeWidth)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("The control (when not ")]),e("code",[n._v("vertical")]),e("span",[n._v(" or ")]),e("code",[n._v("inline")]),e("span",[n._v(") will expand to the maximum width of the parent container You can control width via utility classes such as ")]),e("code",[n._v("w-50, w-75, w-100")]),e("span",[n._v(", or use styles to set the width.")])]),e("b-form-group",[e("b-form-spinbutton",{staticClass:"w-100",attrs:{min:"0",max:"10",step:"0.125"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1),e("b-form-group",[e("b-form-spinbutton",{staticClass:"w-75",attrs:{min:"0",max:"10",step:"0.125"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1),e("b-form-group",[e("b-form-spinbutton",{staticClass:"w-50",attrs:{min:"0",max:"10",step:"0.125"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)],1)},Tn=[],En=e("8226"),zn={components:{BFormSpinbutton:u["a"],BFormGroup:En["a"],BCardText:d["a"],BCardCode:c["a"]},data:function(){return{value:0,codeWidth:S}}},Vn=zn,jn=Object(T["a"])(Vn,kn,Tn,!1,null,null,null),Rn=jn.exports,Wn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Validation states"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeValidation)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("When you default to a ")]),e("code",[n._v("null")]),e("span",[n._v(" value, and the user has not selected a value, you can use the ")]),e("code",[n._v("state")]),e("span",[n._v(" prop to apply one of the contextual validation styles to the component.")])]),e("b-form-spinbutton",{attrs:{id:"sb-inline",state:Boolean(n.value>=50)},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)},An=[],In={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"]},data:function(){return{value:50,codeValidation:B}}},On=In,$n=Object(T["a"])(On,Wn,An,!1,null,null,null),Dn=$n.exports,Mn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Spinbutton with Formater"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeFormater)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("To provide a formatter function, set the prop ")]),e("code",[n._v("formatter-fn")]),e("span",[n._v(" to a method reference.")])]),e("div",[e("label",{attrs:{for:"sb-days"}},[n._v("Spin button with formatter")]),e("b-form-spinbutton",{attrs:{id:"sb-days","formatter-fn":n.dayFormatter,min:"0",max:"6",wrap:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}}),e("b-card-text",{staticClass:"mt-1 mb-0"},[n._v(" Value: "+n._s(n.value)+" ")])],1)],1)},Ln=[],Gn={components:{BFormSpinbutton:u["a"],BCardText:d["a"],BCardCode:c["a"]},data:function(){return{value:0,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],codeFormater:C}},methods:{dayFormatter:function(n){return this.days[n]}}},Un=Gn,Jn=Object(T["a"])(Un,Mn,Ln,!1,null,null,null),Pn=Jn.exports,Yn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Slot"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeSlots)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Spin buttons provides two slots ")]),e("code",[n._v("increment")]),e("span",[n._v(" and ")]),e("code",[n._v("decrement")])]),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-form-spinbutton",{staticClass:"mb-md-0 mb-2",attrs:{min:"1",max:"100"},scopedSlots:n._u([{key:"increment",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronUpIcon"}})]},proxy:!0},{key:"decrement",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronDownIcon"}})]},proxy:!0}]),model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1),e("b-col",{attrs:{md:"6"}},[e("b-form-spinbutton",{attrs:{min:"0",max:"6",wrap:"","formatter-fn":n.dayFormatter},scopedSlots:n._u([{key:"increment",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronRightIcon"}})]},proxy:!0},{key:"decrement",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronLeftIcon"}})]},proxy:!0}]),model:{value:n.day,callback:function(t){n.day=t},expression:"day"}})],1)],1)],1)},Nn=[],qn={components:{BFormSpinbutton:u["a"],BCardCode:c["a"],BCardText:d["a"],BRow:l["a"],BCol:r["a"]},data:function(){return{value:50,codeSlots:F,day:0,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},methods:{dayFormatter:function(n){return this.days[n]}}},Hn=qn,Kn=Object(T["a"])(Hn,Yn,Nn,!1,null,null,null),Qn=Kn.exports,Xn={components:{BRow:l["a"],BCol:r["a"],FormSpinbuttonBasic:z,FormSpinbuttonMinMax:I,FormSpinbuttonStep:G,FormSpinbuttonWrap:q,FormSpinbuttonSize:nn,FormSpinbuttonInline:rn,FormSpinbuttonVertical:bn,FormSpinbuttonLocale:yn,FormSpinbuttonDisabledReadonly:gn,FormSpinbuttonWidth:Rn,FormSpinbuttonValidation:Dn,FormSpinbuttonFormater:Pn,FormSpinbuttonSlots:Qn}},Zn=Xn,nt=Object(T["a"])(Zn,a,o,!1,null,null,null);t["default"]=nt.exports}}]);
//# sourceMappingURL=chunk-34b8590d.3764b79e.js.map