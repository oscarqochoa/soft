(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66159e3e"],{"0a77":function(e,s,t){e.exports=t.p+"img/01.2568fbfb.jpg"},1079:function(e,s,t){"use strict";var a=t("541c");s["a"]=a["a"]},"9e0c":function(e,s,t){e.exports=t.p+"img/07.c8932db3.jpg"},aada:function(e,s,t){e.exports=t.p+"img/08.dc359b45.jpg"},eab6:function(e,s,t){e.exports=t.p+"img/05.a01f52a7.jpg"},f6c9:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{md:"6"}},[t("carousel-basic")],1),t("b-col",{attrs:{md:"6"}},[t("carousel-caption")],1),t("b-col",{attrs:{md:"6"}},[t("carousel-interval")],1),t("b-col",{attrs:{md:"6"}},[t("carousel-pause")],1),t("b-col",{attrs:{md:"6"}},[t("carousel-wrap")],1),t("b-col",{attrs:{md:"6"}},[t("carousel-cross-fade")],1),t("b-col",{attrs:{md:"6"}},[t("carousel-keyboard")],1),t("b-col",{attrs:{md:"6"}},[t("carousel-vsupport")],1),t("b-col",{attrs:{md:"6"}},[t("carousel-programmatica-slide")],1)],1)},r=[],n=t("b28b"),i=t("a15b"),o=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Basic Example"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCarouselBasic)+" ")]},proxy:!0}])},[a("b-card-text",[e._v(" The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with a series of images, text, or custom markup. ")]),a("b-carousel",{attrs:{id:"carousel-example-generic",controls:"",indicators:""}},[a("b-carousel-slide",{attrs:{"img-src":t("0a77")}}),a("b-carousel-slide",{attrs:{"img-src":t("9b2b")}}),a("b-carousel-slide",{attrs:{"img-src":t("18ff")}})],1)],1)},l=[],c=t("d3b4"),u=t("febd"),d=t("d6e4"),p=t("1079"),m="\n<template>\n  <b-carousel\n    id=\"carousel-example-generic\"\n    controls\n    indicators\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/01.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n",b='\n<template>\n  <b-carousel\n    id="carousel-caption"\n    controls\n    indicators\n  >\n    <b-carousel-slide\n      caption-html="<span class=\'text-white\'>First Slide Label</span>"\n      class="card-img-overlay"\n      text="Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin."\n      :img-src="require(\'@/assets/images/slider/08.jpg\')"\n    />\n    <b-carousel-slide\n      caption-html="<span class=\'text-white\'>Second Slide Label</span>"\n      class="card-img-overlay"\n      text="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake."\n      :img-src="require(\'@/assets/images/slider/09.jpg\')"\n    />\n    <b-carousel-slide\n      caption-html="<span class=\'text-white\'>Third Slide Label</span>"\n      class="card-img-overlay"\n      text="Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin. Marshmallow cake powder icing."\n      :img-src="require(\'@/assets/images/slider/10.jpg\')"\n    />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n',g="\n<template>\n  <b-carousel\n    id=\"carousel-crossfade\"\n    controls\n    indicators\n    fade\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/01.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport {BCarousel, BCarouselSlide} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n",v='\n<template>\n  <b-carousel\n    id="carousel-interval"\n    controls\n    indicators\n    :interval="400"\n  >\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/01.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/02.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/03.jpg\')" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <b-carousel\n      id="carousel-1"\n      v-model="slide"\n      :interval="4000"\n      controls\n      indicators\n      background="#ababab"\n      img-width="924"\n      img-height="380"\n      @sliding-start="onSlideStart"\n      @sliding-end="onSlideEnd"\n    >\n      \x3c!-- Text slides with image --\x3e\n      <b-carousel-slide\n        text="Nulla vitae elit libero, a pharetra augue mollis interdum."\n        :img-src="require(\'@/assets/images/slider/05.jpg\')"\n      />\n\n      \x3c!-- Slides with custom text --\x3e\n      <b-carousel-slide :img-src="require(\'@/assets/images/slider/06.jpg\')" />\n\n      \x3c!-- Slides with image only --\x3e\n      <b-carousel-slide :img-src="require(\'@/assets/images/slider/03.jpg\')" />\n\n      \x3c!-- Slides with img slot --\x3e\n      \x3c!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment --\x3e\n      <b-carousel-slide>\n        <template #img>\n          <img\n            class="d-block img-fluid w-100"\n            width="924"\n            height="380"\n            :src="require(\'@/assets/images/slider/04.jpg\')"\n            alt="image slot"\n          >\n        </template>\n      </b-carousel-slide>\n    </b-carousel>\n\n    <b-card-text class="mt-1 mb-0">\n      <strong>Slide #:</strong> {{ slide }} <strong>Sliding:</strong> {{ sliding }}\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n    BCardText,\n  },\n  data: () => ({\n    slide: 0,\n    sliding: null,\n  }),\n  methods: {\n    onSlideStart() {\n      this.sliding = true\n    },\n    onSlideEnd() {\n      this.sliding = false\n    },\n  },\n}\n<\/script>\n',h='\n<template>\n  <div>\n    <b-carousel\n      id="carousel-1"\n      ref="myCarousel"\n      :interval="4000"\n      controls\n      indicators\n      background="#ababab"\n      img-width="924"\n      img-height="380"\n    >\n      \x3c!-- Text slides with image --\x3e\n      <b-carousel-slide\n        text="Nulla vitae elit libero, a pharetra augue mollis interdum."\n        :img-src="require(\'@/assets/images/slider/01.jpg\')"\n      />\n\n      \x3c!-- Slides with custom text --\x3e\n      <b-carousel-slide :img-src="require(\'@/assets/images/slider/02.jpg\')" />\n\n      \x3c!-- Slides with image only --\x3e\n      <b-carousel-slide :img-src="require(\'@/assets/images/slider/03.jpg\')" />\n\n      \x3c!-- Slides with img slot --\x3e\n      \x3c!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment --\x3e\n      <b-carousel-slide>\n        <template #img>\n          <img\n            class="d-block img-fluid w-100"\n            width="924"\n            height="380"\n            :src="require(\'@/assets/images/slider/04.jpg\')"\n            alt="image slot"\n          >\n        </template>\n      </b-carousel-slide>\n    </b-carousel>\n\n    \x3c!-- programmatically  --\x3e\n    <div class="d-flex align-items-center justify-content-center mt-1">\n      <b-button-group>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n          @click="prev"\n        >\n          Pre\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n          @click="start"\n        >\n          {{ status ? \'Start\' : \'Pause\' }}\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n          @click="next"\n        >\n          Next\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide, BButtonGroup, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  data: () => ({\n    status: false,\n  }),\n  methods: {\n    prev() {\n      if (!this.status) {\n        this.$refs.myCarousel.prev()\n      }\n    },\n    next() {\n      if (!this.status) {\n        this.$refs.myCarousel.next()\n      }\n    },\n    start() {\n      this.status = !this.status\n      if (this.status) {\n        this.$refs.myCarousel.pause()\n      } else {\n        this.$refs.myCarousel.start()\n      }\n    },\n  },\n}\n<\/script>\n',C='\n<template>\n  <b-carousel\n    id="carousel-interval"\n    no-wrap\n    controls\n    indicators\n    :interval="400"\n  >\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/01.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/02.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/04.jpg\')" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n',x='\n<template>\n  <b-carousel\n    id="carousel-interval"\n    no-hover-pause\n    controls\n    indicators\n    :interval="5000"\n  >\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/04.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/05.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/06.jpg\')" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n',B='\n<template>\n  <b-carousel\n    id="carousel-interval"\n    controls\n    indicators\n    :interval="400"\n  >\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/07.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/08.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/09.jpg\')" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n',_={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BCardText:d["a"]},data:function(){return{codeCarouselBasic:m}}},S=_,w=t("2877"),y=Object(w["a"])(S,o,l,!1,null,null,null),j=y.exports,k=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Optional captions"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCarouselCaption)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Add captions to your slides easily with the prop")]),a("code",[e._v("caption")]),a("span",[e._v("element within any")]),a("code",[e._v("<b-carousel-slide>")]),e._v(". ")]),a("b-carousel",{attrs:{id:"carousel-caption",controls:"",indicators:""}},[a("b-carousel-slide",{staticClass:"card-img-overlay",attrs:{"caption-html":"<span class='text-white'>First Slide Label</span>",text:"Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin.","img-src":t("aada")}}),a("b-carousel-slide",{staticClass:"card-img-overlay",attrs:{"caption-html":"<span class='text-white'>Second Slide Label</span>",text:"Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake.","img-src":t("1317")}}),a("b-carousel-slide",{staticClass:"card-img-overlay",attrs:{"caption-html":"<span class='text-white'>Third Slide Label</span>",text:"Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin. Marshmallow cake powder icing.","img-src":t("3270")}})],1)],1)},q=[],T={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BCardText:d["a"]},data:function(){return{codeCarouselCaption:b}}},$=T,I=Object(w["a"])($,k,q,!1,null,null,null),E=I.exports,P=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Crossfade"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCarouselCrossfade)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Set the")]),a("code",[e._v("<b-carousel>fade")]),a("span",[e._v("prop to")]),a("code",[e._v("true")]),a("span",[e._v("to animate slides with a fade transition instead of the default slide animation.")])]),a("b-carousel",{attrs:{id:"carousel-crossfade",controls:"",indicators:"",fade:""}},[a("b-carousel-slide",{attrs:{"img-src":t("0a77")}}),a("b-carousel-slide",{attrs:{"img-src":t("9b2b")}}),a("b-carousel-slide",{attrs:{"img-src":t("18ff")}})],1)],1)},O=[],N={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BCardText:d["a"]},data:function(){return{codeCarouselCrossfade:g}}},L=N,W=Object(w["a"])(L,P,O,!1,null,null,null),J=W.exports,K=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Carousel Interval"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCarouselInterval)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Carousel defaults to an ")]),a("code",[e._v("interval")]),a("span",[e._v(" of 5000ms (5 seconds).")])]),a("b-carousel",{attrs:{id:"carousel-interval",controls:"",indicators:"",interval:400}},[a("b-carousel-slide",{attrs:{"img-src":t("0a77")}}),a("b-carousel-slide",{attrs:{"img-src":t("9b2b")}}),a("b-carousel-slide",{attrs:{"img-src":t("18ff")}})],1)],1)},R=[],D={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BCardText:d["a"]},data:function(){return{codeCarouselInterval:v}}},F=D,G=Object(w["a"])(F,K,R,!1,null,null,null),V=G.exports,z=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Keyboard Option"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeKeyboard)+" ")]},proxy:!0}])},[a("b-card-text",[e._v(" Whether the carousel should react to keyboard events. User prop "),a("code",[e._v("controls")]),e._v(" for keyboard event. ")]),a("b-carousel",{attrs:{id:"carousel-interval",controls:"",indicators:"",interval:400}},[a("b-carousel-slide",{attrs:{"img-src":t("9e0c")}}),a("b-carousel-slide",{attrs:{"img-src":t("aada")}}),a("b-carousel-slide",{attrs:{"img-src":t("1317")}})],1)],1)},M=[],A={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BCardText:d["a"]},data:function(){return{codeKeyboard:B}}},U=A,H=Object(w["a"])(U,z,M,!1,null,null,null),Q=H.exports,X=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Programmatic slide control"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeProgrammaticSlide)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("The ")]),a("code",[e._v("<b-carousel>")]),a("span",[e._v(" instance provides several public methods for controlling sliding:")]),a("code",[e._v("setSlide(index), next(), prev(), pause(), start()")])]),a("div",[a("b-carousel",{ref:"myCarousel",attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"924","img-height":"380"}},[a("b-carousel-slide",{attrs:{text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":t("0a77")}}),a("b-carousel-slide",{attrs:{"img-src":t("9b2b")}}),a("b-carousel-slide",{attrs:{"img-src":t("18ff")}}),a("b-carousel-slide",{scopedSlots:e._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"924",height:"380",src:t("80d9"),alt:"image slot"}})]},proxy:!0}])})],1),a("div",{staticClass:"d-flex align-items-center justify-content-center mt-1"},[a("b-button-group",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:e.prev}},[e._v(" Pre ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:e.start}},[e._v(" "+e._s(e.status?"Start":"Pause")+" ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:e.next}},[e._v(" Next ")])],1)],1)],1)],1)},Y=[],Z=t("12aa"),ee=t("1947"),se=t("e009"),te={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BButtonGroup:Z["a"],BButton:ee["a"],BCardText:d["a"]},directives:{Ripple:se["a"]},data:function(){return{status:!1,codeProgrammaticSlide:h}},methods:{prev:function(){this.status||this.$refs.myCarousel.prev()},next:function(){this.status||this.$refs.myCarousel.next()},start:function(){this.status=!this.status,this.status?this.$refs.myCarousel.pause():this.$refs.myCarousel.start()}}},ae=te,re=Object(w["a"])(ae,X,Y,!1,null,null,null),ne=re.exports,ie=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"v-model support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVsupport)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Programmatically control which slide is showing via ")]),a("code",[e._v("v-model")]),a("span",[e._v(" (which binds to the ")]),a("code",[e._v("value")]),a("span",[e._v(" prop).")])]),a("div",[a("b-carousel",{attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"924","img-height":"380"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(s){e.slide=s},expression:"slide"}},[a("b-carousel-slide",{attrs:{text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":t("eab6")}}),a("b-carousel-slide",{attrs:{"img-src":t("7518")}}),a("b-carousel-slide",{attrs:{"img-src":t("18ff")}}),a("b-carousel-slide",{scopedSlots:e._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"924",height:"380",src:t("80d9"),alt:"image slot"}})]},proxy:!0}])})],1),a("b-card-text",{staticClass:"mt-1 mb-0"},[a("strong",[e._v("Slide #:")]),e._v(" "+e._s(e.slide)+" "),a("strong",[e._v("Sliding:")]),e._v(" "+e._s(e.sliding)+" ")])],1)],1)},oe=[],le={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BCardText:d["a"]},data:function(){return{slide:0,sliding:null,codeVsupport:f}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},ce=le,ue=Object(w["a"])(ce,ie,oe,!1,null,null,null),de=ue.exports,pe=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Pause Option"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codePause)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To disable this feature, set the")]),a("code",[e._v("no-hover-pause")]),a("span",[e._v(" prop on.")])]),a("b-carousel",{attrs:{id:"carousel-interval","no-hover-pause":"",controls:"",indicators:"",interval:5e3}},[a("b-carousel-slide",{attrs:{"img-src":t("80d9")}}),a("b-carousel-slide",{attrs:{"img-src":t("eab6")}}),a("b-carousel-slide",{attrs:{"img-src":t("7518")}})],1)],1)},me=[],be={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BCardText:d["a"]},data:function(){return{codePause:x}}},ge=be,ve=Object(w["a"])(ge,pe,me,!1,null,null,null),fe=ve.exports,he=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Wrap Option"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeWrap)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To disable carousel slide wrapping, set the ")]),a("code",[e._v("no-wrap")]),a("span",[e._v(" prop to true.")])]),a("b-carousel",{attrs:{id:"carousel-interval","no-wrap":"",controls:"",indicators:"",interval:400}},[a("b-carousel-slide",{attrs:{"img-src":t("0a77")}}),a("b-carousel-slide",{attrs:{"img-src":t("9b2b")}}),a("b-carousel-slide",{attrs:{"img-src":t("80d9")}})],1)],1)},Ce=[],xe={components:{BCardCode:p["a"],BCarousel:c["a"],BCarouselSlide:u["a"],BCardText:d["a"]},data:function(){return{codeWrap:C}}},Be=xe,_e=Object(w["a"])(Be,he,Ce,!1,null,null,null),Se=_e.exports,we={components:{BCol:n["a"],BRow:i["a"],CarouselCaption:E,CarouselBasic:j,CarouselCrossFade:J,CarouselInterval:V,CarouselKeyboard:Q,CarouselProgrammaticaSlide:ne,CarouselVsupport:de,CarouselPause:fe,CarouselWrap:Se}},ye=we,je=Object(w["a"])(ye,a,r,!1,null,null,null);s["default"]=je.exports}}]);
//# sourceMappingURL=chunk-66159e3e.4cb7fe78.js.map