(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0288c37d"],{"2f73":function(t,e,n){},"895b":function(t,e,n){"use strict";n("2f73")},a395:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("quill-editor-snow"),n("quill-editor-bubble"),n("quill-editor-custom")],1)],1)},o=[],i=n("a15b"),s=n("b28b"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Snow Editor"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSnow)+" ")]},proxy:!0}])},[n("b-card-text",[t._v("Snow is a clean, flat toolbar theme")]),n("quill-editor",{attrs:{options:t.snowOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},a=[],c=n("d6e4"),u=n("541c"),d=n("953d"),p='\n<template>\n  <div>\n    <quill-editor\n      v-model="content"\n      :options="editorOption"\n    />\n  </div>\n</template>\n\n<script>\nimport { quillEditor } from \'vue-quill-editor\'\n\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    editorOption: {\n      theme: \'bubble\',\n    },\n    content: `<h2><span>Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>.</p><br />\n<iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>`,\n  }),\n}\n<\/script>\n',b='\n<template>\n  <quill-editor\n    v-model="content"\n    :options="snowOption"\n  />\n</template>\n\n<script>\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\n\nimport { quillEditor } from \'vue-quill-editor\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    content: `<h1>Quill Rich Text Editor</h1>\n  <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p>\n  <iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>\n  <p><br></p>\n  <h2>Getting Started is Easy</h2>\n  <p><br></p>\n  <pre>\n// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\n  var quill = new Quill(\'#editor\', {\n  modules: {\n  toolbar: \'#toolbar\'\n  },\n  theme: \'snow\'\n  });\n// Open your browser\'s developer console to try out the API!</pre>  `,\n  }),\n}\n<\/script>\n',h='\n<template>\n  <div>\n    <quill-editor\n      v-model="content"\n      :options="editorOption"\n      >\n      <div\n        id="toolbar"\n        slot="toolbar"\n      >\n        \x3c!-- Add a bold button --\x3e\n        <button class="ql-bold">\n          Bold\n        </button>\n        <button class="ql-italic">\n          Italic\n        </button>\n\n        \x3c!-- Add font size dropdown --\x3e\n        <select class="ql-size">\n          <option value="small" />\n          \x3c!-- Note a missing, thus falsy value, is used to reset to default --\x3e\n          <option selected />\n          <option value="large" />\n          <option value="huge" />\n        </select>\n\n        <select class="ql-font">\n          <option selected="selected" />\n          <option value="serif" />\n          <option value="monospace" />\n        </select>\n\n        \x3c!-- Add subscript and superscript buttons --\x3e\n        <button\n          class="ql-script"\n          value="sub"\n        />\n        <button\n          class="ql-script"\n          value="super"\n        />\n\n        \x3c!-- You can also add your own --\x3e\n        <button\n          style="width:auto"\n          @click="customButtonClick"\n        >\n          Click here\n        </button>\n      </div>\n    </quill-editor>\n  </div>\n</template>\n\n<script>\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\nimport { quillEditor } from \'vue-quill-editor\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    editorOption: {\n      modules: {\n        toolbar: \'#toolbar\',\n      },\n    },\n    content: `<h2><span class="ql-font-serif">Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p><br />\n<iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>`,\n  }),\n  methods: {\n    customButtonClick() {\n      alert(\'Button clicked!\')\n    },\n  },\n}\n<\/script>\n',m={components:{quillEditor:d["quillEditor"],BCardCode:u["a"],BCardText:c["a"]},data:function(){return{codeSnow:b,snowOption:{theme:"snow"},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'snow\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}}},q=m,f=n("2877"),w=Object(f["a"])(q,r,a,!1,null,null,null),x=w.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Bubble Editor"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBubble)+" ")]},proxy:!0}])},[n("b-card-text",[t._v("Bubble is a simple tooltip based theme.")]),n("quill-editor",{attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},y=[],g={components:{quillEditor:d["quillEditor"],BCardCode:u["a"],BCardText:c["a"]},data:function(){return{codeBubble:p,editorOption:{theme:"bubble",syntax:!1,modules:{toolbar:[["bold","italic"],[{header:[1,2,3,4,5,6,!1]}],["link","image"]]}},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'bubble\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}}},j=g,E=Object(f["a"])(j,v,y,!1,null,null,null),B=E.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Custom Toolbar"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeCustom)+" ")]},proxy:!0}])},[n("b-card-text",[t._v("You have freedom to create your own custom toolbar")]),n("quill-editor",{attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[n("div",{attrs:{slot:"toolbar",id:"toolbar"},slot:"toolbar"},[n("button",{staticClass:"ql-bold"},[t._v(" Bold ")]),n("button",{staticClass:"ql-italic"},[t._v(" Italic ")]),n("select",{staticClass:"ql-size"},[n("option",{attrs:{value:"small"}}),n("option",{attrs:{selected:""}}),n("option",{attrs:{value:"large"}}),n("option",{attrs:{value:"huge"}})]),n("select",{staticClass:"ql-font"},[n("option",{attrs:{selected:"selected"}}),n("option",{attrs:{value:"serif"}}),n("option",{attrs:{value:"monospace"}})]),n("button",{staticClass:"ql-script",attrs:{value:"sub"}}),n("button",{staticClass:"ql-script",attrs:{value:"super"}}),n("button",{staticClass:"w-auto btn btn-primary",on:{click:t.customButtonClick}},[t._v(" Click here ")])])])],1)},Q=[],k={components:{quillEditor:d["quillEditor"],BCardCode:u["a"],BCardText:c["a"]},data:function(){return{codeCustom:h,editorOption:{modules:{toolbar:"#toolbar"}},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'snow\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}},methods:{customButtonClick:function(){alert("Button clicked!")}}},S=k,_=Object(f["a"])(S,C,Q,!1,null,null,null),O=_.exports,I={components:{BRow:i["a"],BCol:s["a"],QuillEditorSnow:x,QuillEditorBubble:B,QuillEditorCustom:O}},W=I,Y=(n("895b"),Object(f["a"])(W,l,o,!1,null,null,null));e["default"]=Y.exports}}]);
//# sourceMappingURL=chunk-0288c37d.89abd477.js.map