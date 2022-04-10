(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5afdb64"],{1079:function(e,t,n){"use strict";var l=n("541c");t["a"]=l["a"]},f1d5:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{lg:"6"}},[n("file-input-basic")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-limiting")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-multiple")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-drag-drop")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-formatter")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-contextual-state")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-directory")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-slot")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-size")],1),n("b-col",{attrs:{lg:"6"}},[n("file-input-clearing")],1)],1)},o=[],r=n("a15b"),a=n("b28b"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"File Input Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[n("b-card-text",[e._v(" Customized, cross-browser consistent, file input control that supports single file, multiple files, and directory upload (for browsers that support directory mode) ")]),n("div",[n("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),n("b-card-text",{staticClass:"my-1"},[e._v(" Selected file: "),n("strong",[e._v(e._s(e.file?e.file.name:""))])]),n("b-card-text",[n("span",[e._v("You can have ")]),n("code",[e._v("<b-form-file>")]),n("span",[e._v(" render a browser native file input by setting the ")]),n("code",[e._v("plain")]),n("span",[e._v(" prop.")])]),n("b-form-file",{staticClass:"mt-1",attrs:{plain:""},model:{value:e.file2,callback:function(t){e.file2=t},expression:"file2"}}),n("div",{staticClass:"mt-1"},[e._v(" Selected file: "),n("strong",[e._v(e._s(e.file2?e.file2.name:""))])])],1)],1)},s=[],c=n("1079"),p=n("d6e4"),f=n("c43f"),d='\n<template>\n  <div>\n\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      v-model="file"\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n    />\n\n    <b-card-text class="my-1">\n      Selected file: <strong>{{ file ? file.name : \'\' }}</strong>\n    </b-card-text>\n\n    <b-card-text>\n      <span>You can have </span>\n      <code>&lt;b-form-file&gt;</code>\n      <span> render a browser native file input by setting the </span>\n      <code>plain</code>\n      <span> prop.</span>\n    </b-card-text>\n\n    \x3c!-- Plain mode --\x3e\n    <b-form-file\n      v-model="file2"\n      class="mt-1"\n      plain\n    />\n    <div class="mt-1">\n      Selected file: <strong>{{ file2 ? file2.name : \'\' }}</strong>\n    </div>\n  </div>\n</template>\n\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n data() {\n    return {\n      file: null,\n      file2: null,\n    }\n  },\n}\n<\/script>\n',m='\n<template>\n  <div>\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n      no-drop\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n}\n<\/script>\n',u="\n<template>\n  <div>\n    <div>\n      <b-form-file\n        multiple\n        :file-name-formatter=\"formatNames\"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n  methods: {\n    formatNames(files) {\n      if (files.length === 1) {\n        return files[0].name\n      }\n      return `${ files.length } files selected`\n    },\n  },\n}\n<\/script>\n",b='\n<template>\n  <div>\n    <div>\n      \x3c!-- Accept all image formats by IANA media type wildcard--\x3e\n      <label for="wildcard">Accept all image</label>\n      <b-form-file\n        id="wildcard"\n        accept="image/*"\n      />\n\n      \x3c!-- Accept specific image formats by IANA type --\x3e\n      <label\n        for="IANA"\n        class="mt-1"\n      >Accept specific image formats by IANA type</label>\n      <b-form-file\n        id="IANA"\n        accept="image/jpeg, image/png, image/gif"\n      />\n\n      \x3c!-- Accept specific image formats by extension --\x3e\n      <label\n        for="extension"\n        class="mt-1"\n      >Accept specific image formats by extension</label>\n      <b-form-file\n        id="extension"\n        accept=".jpg, .png, .gif"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormFile,\n  },\n}\n<\/script>\n',v='\n<template>\n  <div>\n    <b-form-file\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n      multiple\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div>\n    <b-form-group\n      label="Small:"\n      label-for="file-small"\n      label-cols-sm="2"\n      label-size="sm"\n    >\n      <b-form-file\n        id="file-small"\n        size="sm"\n      />\n    </b-form-group>\n\n    <b-form-group\n      label="Default:"\n      label-for="file-default"\n      label-cols-sm="2"\n    >\n      <b-form-file id="file-default" />\n    </b-form-group>\n\n    <b-form-group\n      label="Large:"\n      label-for="file-large"\n      label-cols-sm="2"\n      label-size="lg"\n    >\n      <b-form-file\n        id="file-large"\n        size="lg"\n      />\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormFile, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BFormGroup,\n  },\n}\n<\/script>\n',_='\n<template>\n  <div>\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      v-model="file"\n      :state="Boolean(file)"\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n  data: () => ({\n    file: null,\n  }),\n}\n<\/script>\n',h='\n<template>\n  <div>\n    <b-form-file\n      ref="file-input"\n      v-model="file"\n      class="mb-2"\n    />\n\n    <b-button\n      class="mr-2"\n      variant="primary"\n      @click="clearFiles"\n    >\n      Reset via method\n    </b-button>\n    <b-button\n      variant="primary"\n      @click="file = null"\n    >\n      Reset via v-model\n    </b-button>\n\n    <p class="mt-2">\n      Selected file: <strong>{{ file ? file.name : \'\' }}</strong>\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormFile, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BButton,\n  },\n  data: () => ({\n    file: null,\n  }),\n  methods: {\n    clearFiles() {\n      this.$refs[\'file-input\'].reset()\n    },\n  },\n}\n<\/script>\n',x='\n<template>\n  <div>\n    <b-form-file\n        v-model="file"\n        directory\n        placeholder="Choose a file or drop it here..."\n        drop-placeholder="Drop file here..."\n      />\n    </b-card-code>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    file:null\n  },\n}\n<\/script>\n',F='\n<template>\n  <b-form-file multiple>\n    <template\n      slot="file-name"\n      slot-scope="{ names }"\n    >\n      <b-badge variant="primary">\n        {{ names[0] }}\n      </b-badge>\n      <b-badge\n        v-if="names.length > 1"\n        variant="dark"\n        class="ml-1"\n      >\n        + {{ names.length - 1 }} More files\n      </b-badge>\n    </template>\n  </b-form-file>\n</template>\n\n\n<script>\nimport { BFormFile, BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BBadge,\n  },\n}\n<\/script>\n',B={components:{BCardCode:c["a"],BCardText:p["a"],BFormFile:f["a"]},data:function(){return{file:null,file2:null,codeBasic:d}}},y=B,C=n("2877"),S=Object(C["a"])(y,i,s,!1,null,null,null),k=S.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Multiple files"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeMultiple)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Multiple file uploading is supported by adding ")]),n("code",[e._v("multiple")]),n("span",[e._v(" prop to component.")])]),n("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",multiple:""}})],1)},D=[],w={components:{BCardCode:c["a"],BFormFile:f["a"],BCardText:p["a"]},data:function(){return{codeMultiple:v}}},I=w,z=Object(C["a"])(I,A,D,!1,null,null,null),j=z.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Drag and Drop support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDragDrop)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Drop mode is enabled by default. It can disabled by setting the ")]),n("code",[e._v("no-drop")]),n("span",[e._v("prop. ")])]),n("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...","no-drop":""}})],1)},T=[],$={components:{BCardCode:c["a"],BFormFile:f["a"],BCardText:p["a"]},data:function(){return{codeDragDrop:m}}},O=$,E=Object(C["a"])(O,N,T,!1,null,null,null),M=E.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Limiting to certain file types"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLimiting)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can limit the file types by setting the ")]),n("code",[e._v("accept")]),n("span",[e._v(" prop to a string containing the allowed file type(s). To specify more than one type, separate the values with a comma. ")])]),n("label",{attrs:{for:"wildcard"}},[e._v("Accept all image")]),n("b-form-file",{attrs:{id:"wildcard",accept:"image/*"}}),n("label",{staticClass:"mt-1",attrs:{for:"IANA"}},[e._v("Accept specific image formats by IANA type")]),n("b-form-file",{attrs:{id:"IANA",accept:"image/jpeg, image/png, image/gif"}}),n("label",{staticClass:"mt-1",attrs:{for:"extension"}},[e._v("Accept specific image formats by extension")]),n("b-form-file",{attrs:{id:"extension",accept:".jpg, .png, .gif"}})],1)},R=[],Y={components:{BCardCode:c["a"],BFormFile:f["a"],BCardText:p["a"]},data:function(){return{codeLimiting:b}}},G=Y,J=Object(C["a"])(G,L,R,!1,null,null,null),P=J.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSize)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use the ")]),n("code",[e._v("size")]),n("span",[e._v(" prop to control the visual size of the input. The default size is considered md (medium). Optional sizes are ")]),n("code",[e._v("lg")]),n("span",[e._v(" (large) and ")]),n("code",[e._v("sm")]),n("span",[e._v(" (small).")])]),n("b-form-group",{attrs:{label:"Small:","label-for":"file-small","label-cols-sm":"2","label-size":"sm"}},[n("b-form-file",{attrs:{id:"file-small",size:"sm"}})],1),n("b-form-group",{attrs:{label:"Default:","label-for":"file-default","label-cols-sm":"2"}},[n("b-form-file",{attrs:{id:"file-default"}})],1),n("b-form-group",{staticClass:"mb-0",attrs:{label:"Large:","label-for":"file-large","label-cols-sm":"2","label-size":"lg"}},[n("b-form-file",{attrs:{id:"file-large",size:"lg"}})],1)],1)},q=[],H=n("8226"),K={components:{BCardCode:c["a"],BFormFile:f["a"],BFormGroup:H["a"],BCardText:p["a"]},data:function(){return{codeSize:g}}},Q=K,V=Object(C["a"])(Q,U,q,!1,null,null,null),W=V.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"File name formatter function"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFormatter)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Set the prop ")]),n("code",[e._v("file-name-formatter")]),n("span",[e._v(" to a function that accepts a single argument which is an array of File objects.")])]),n("b-form-file",{attrs:{multiple:"","file-name-formatter":e.formatNames}})],1)},Z=[],ee=(n("b0c0"),{components:{BCardCode:c["a"],BFormFile:f["a"],BCardText:p["a"]},data:function(){return{codeFormatter:u}},methods:{formatNames:function(e){return 1===e.length?e[0].name:"".concat(e.length," files selected")}}}),te=ee,ne=Object(C["a"])(te,X,Z,!1,null,null,null),le=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Contextual state feedback"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeContextualState)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("To apply one of the contextual state icons on ")]),n("code",[e._v("<b-form-file>")]),n("span",[e._v(", set the ")]),n("code",[e._v("state")]),n("span",[e._v(" prop to ")]),n("code",[e._v("false")]),n("span",[e._v(" (for invalid), ")]),n("code",[e._v("true")]),n("span",[e._v(" (for valid), or ")]),n("code",[e._v("null")]),n("span",[e._v(" (no validation state).")])]),n("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)},re=[],ae={components:{BCardCode:c["a"],BFormFile:f["a"],BCardText:p["a"]},data:function(){return{file:null,codeContextualState:_}}},ie=ae,se=Object(C["a"])(ie,oe,re,!1,null,null,null),ce=se.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Clearing the file selection"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeClearing)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v(" You can clear the file input's selected files by setting the ")]),n("code",[e._v("v-model")]),n("span",[e._v(" to either ")]),n("code",[e._v("null")]),n("span",[e._v(" (for single mode) or an empty array ")]),n("code",[e._v("[]")]),n("span",[e._v(" (for multiple/directory mode).")])]),n("div",[n("b-form-file",{ref:"file-input",model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-2 mb-25",attrs:{variant:"outline-primary"},on:{click:e.clearFiles}},[e._v(" Reset via method ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(t){e.file=null}}},[e._v(" Reset via v-model ")])],1),n("b-card-text",{staticClass:"mt-1 mb-0"},[e._v(" Selected file: "),n("strong",[e._v(e._s(e.file?e.file.name:""))])])],1)],1)},fe=[],de=n("1947"),me=n("e009"),ue={components:{BCardCode:c["a"],BFormFile:f["a"],BButton:de["a"],BCardText:p["a"]},directives:{Ripple:me["a"]},data:function(){return{file:null,codeClearing:h}},methods:{clearFiles:function(){this.$refs["file-input"].reset()}}},be=ue,ve=Object(C["a"])(be,pe,fe,!1,null,null,null),ge=ve.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Directory mode"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDirectory)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("By adding ")]),n("code",[e._v("directory")]),n("span",[e._v(" prop, the user can select directories instead of files.")])]),n("b-form-file",{attrs:{directory:"",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)},he=[],xe={components:{BCardCode:c["a"],BFormFile:f["a"],BCardText:p["a"]},data:function(){return{file:null,codeDirectory:x}}},Fe=xe,Be=Object(C["a"])(Fe,_e,he,!1,null,null,null),ye=Be.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"File name formatting via scoped slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSlot)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can use the scoped slot ")]),n("code",[e._v("file-name")]),n("span",[e._v(" to render the file names. The scoped slot will receive the following properties: ")]),n("code",[e._v("files,names")])]),n("b-form-file",{attrs:{multiple:""},scopedSlots:e._u([{key:"file-name",fn:function(t){var l=t.names;return[n("b-badge",{attrs:{variant:"primary"}},[e._v(" "+e._s(l[0])+" ")]),l.length>1?n("b-badge",{staticClass:"ml-1",attrs:{variant:"dark"}},[e._v(" + "+e._s(l.length-1)+" More files ")]):e._e()]}}])})],1)},Se=[],ke=n("e98b"),Ae={components:{BCardCode:c["a"],BFormFile:f["a"],BCardText:p["a"],BBadge:ke["a"]},data:function(){return{codeSlot:F}}},De=Ae,we=Object(C["a"])(De,Ce,Se,!1,null,null,null),Ie=we.exports,ze={components:{BRow:r["a"],BCol:a["a"],FileInputBasic:k,FileInputMultiple:j,FileInputDragDrop:M,FileInputLimiting:P,FileInputSize:W,FileInputFormatter:le,FileInputContextualState:ce,FileInputClearing:ge,FileInputDirectory:ye,FileInputSlot:Ie}},je=ze,Ne=Object(C["a"])(je,l,o,!1,null,null,null);t["default"]=Ne.exports}}]);
//# sourceMappingURL=chunk-c5afdb64.0514d4e7.js.map