(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2844fa18"],{"0661":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"inherit"}},[i("section",{attrs:{id:"ecommerce-header"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[i("div",{staticClass:"ecommerce-header-items"},[i("div",{staticClass:"result-toggler"},[i("feather-icon",{staticClass:"d-block d-lg-none",attrs:{icon:"MenuIcon",size:"21"},on:{click:function(e){t.mqShallShowLeftSidebar=!0}}}),i("div",{staticClass:"search-results"},[t._v(" "+t._s(t.totalProducts)+" results found ")])],1),i("div",{staticClass:"view-options d-flex"},[i("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{text:t.sortBy.text,right:"",variant:"outline-primary"}},t._l(t.sortByOptions,(function(e){return i("b-dropdown-item",{key:e.value,on:{click:function(i){t.sortBy=e}}},[t._v(" "+t._s(e.text)+" ")])})),1),i("b-form-radio-group",{staticClass:"ml-1 list item-view-radio-group",attrs:{buttons:"",size:"sm","button-variant":"outline-primary"},model:{value:t.itemView,callback:function(e){t.itemView=e},expression:"itemView"}},t._l(t.itemViewOptions,(function(t){return i("b-form-radio",{key:t.value,attrs:{value:t.value}},[i("feather-icon",{attrs:{icon:t.icon,size:"18"}})],1)})),1)],1)])])])]),i("div",{staticClass:"body-content-overlay"}),i("div",{staticClass:"ecommerce-searchbar mt-1"},[i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("b-input-group",{staticClass:"input-group-merge"},[i("b-form-input",{staticClass:"search-product",attrs:{placeholder:"Search Product"},model:{value:t.filters.q,callback:function(e){t.$set(t.filters,"q",e)},expression:"filters.q"}}),i("b-input-group-append",{attrs:{"is-text":""}},[i("feather-icon",{staticClass:"text-muted",attrs:{icon:"SearchIcon"}})],1)],1)],1)],1)],1),i("section",{class:t.itemView},t._l(t.products,(function(e){return i("b-card",{key:e.id,staticClass:"ecommerce-card",attrs:{"no-body":""}},[i("div",{staticClass:"item-img text-center"},[i("b-link",{attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:e.slug}}}},[i("b-img",{staticClass:"card-img-top",attrs:{alt:e.name+"-"+e.id,fluid:"",src:e.image}})],1)],1),i("b-card-body",[i("div",{staticClass:"item-wrapper"},[i("div",{staticClass:"item-rating"},[i("ul",{staticClass:"unstyled-list list-inline"},t._l(5,(function(t){return i("li",{key:t,staticClass:"ratings-list-item",class:{"ml-25":t-1}},[i("feather-icon",{class:[{"fill-current":t<=e.rating},t<=e.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"16"}})],1)})),0)]),i("div",[i("h6",{staticClass:"item-price"},[t._v(" $"+t._s(e.price)+" ")])])]),i("h6",{staticClass:"item-name"},[i("b-link",{staticClass:"text-body",attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:e.slug}}}},[t._v(" "+t._s(e.name)+" ")]),i("b-card-text",{staticClass:"item-company"},[t._v(" By "),i("b-link",{staticClass:"ml-25"},[t._v(" "+t._s(e.brand)+" ")])],1)],1),i("b-card-text",{staticClass:"item-description"},[t._v(" "+t._s(e.description)+" ")])],1),i("div",{staticClass:"item-options text-center"},[i("div",{staticClass:"item-wrapper"},[i("div",{staticClass:"item-cost"},[i("h4",{staticClass:"item-price"},[t._v(" $"+t._s(e.price)+" ")])])]),i("b-button",{staticClass:"btn-wishlist",attrs:{variant:"light",tag:"a"},on:{click:function(i){return t.toggleProductInWishlist(e)}}},[i("feather-icon",{staticClass:"mr-50",class:{"text-danger":e.isInWishlist},attrs:{icon:"HeartIcon"}}),i("span",[t._v("Wishlist")])],1),i("b-button",{staticClass:"btn-cart",attrs:{variant:"primary",tag:"a"},on:{click:function(i){return t.handleCartActionClick(e)}}},[i("feather-icon",{staticClass:"mr-50",attrs:{icon:"ShoppingCartIcon"}}),i("span",[t._v(t._s(e.isInCart?"View In Cart":"Add to Cart"))])],1)],1)],1)})),1),i("section",[i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("b-pagination",{attrs:{"total-rows":t.totalProducts,"per-page":t.filters.perPage,"first-number":"",align:"center","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[i("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[i("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.filters.page,callback:function(e){t.$set(t.filters,"page",e)},expression:"filters.page"}})],1)],1)],1),i("portal",{attrs:{to:"content-renderer-sidebar-detached-left"}},[i("shop-left-filter-sidebar",{attrs:{filters:t.filters,"filter-options":t.filterOptions,"mq-shall-show-left-sidebar":t.mqShallShowLeftSidebar},on:{"update:mqShallShowLeftSidebar":function(e){t.mqShallShowLeftSidebar=e},"update:mq-shall-show-left-sidebar":function(e){t.mqShallShowLeftSidebar=e}}})],1)],1)},s=[],r=i("dd9a"),n=i("9eaa"),c=i("2924"),o=i("9e14"),l=i("a15b"),d=i("b28b"),u=i("5e12"),p=i("ccc0"),f=i("4797"),m=i("205f"),h=i("6197"),v=i("aa59"),b=i("4918"),g=i("d6e4"),C=i("1947"),w=i("26d2"),S=i("e009"),I=i("ed09"),x=i("1bd7"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-detached sidebar-left"},[i("div",{staticClass:"sidebar"},[i("div",{staticClass:"sidebar-shop",class:{show:t.mqShallShowLeftSidebar}},[i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("h6",{staticClass:"filter-heading d-none d-lg-block"},[t._v(" Filters ")])])],1),i("b-card",[i("div",{staticClass:"multi-range-price"},[i("h6",{staticClass:"filter-title mt-0"},[t._v(" Multi Range ")]),i("b-form-radio-group",{staticClass:"price-range-defined-radio-group",attrs:{stacked:"",options:t.filterOptions.priceRangeDefined},model:{value:t.filters.priceRangeDefined,callback:function(e){t.$set(t.filters,"priceRangeDefined",e)},expression:"filters.priceRangeDefined"}})],1),i("div",{staticClass:"price-slider"},[i("h6",{staticClass:"filter-title"},[t._v(" Price Range ")]),i("vue-slider",{attrs:{direction:t.$store.state.appConfig.isRTL?"rtl":"ltr"},model:{value:t.filters.priceRange,callback:function(e){t.$set(t.filters,"priceRange",e)},expression:"filters.priceRange"}})],1),i("div",{staticClass:"product-categories"},[i("h6",{staticClass:"filter-title"},[t._v(" Categories ")]),i("b-form-radio-group",{staticClass:"categories-radio-group",attrs:{stacked:"",options:t.filterOptions.categories},model:{value:t.filters.categories,callback:function(e){t.$set(t.filters,"categories",e)},expression:"filters.categories"}})],1),i("div",{staticClass:"brands"},[i("h6",{staticClass:"filter-title"},[t._v(" Brands ")]),i("b-form-radio-group",{staticClass:"brands-radio-group",attrs:{stacked:"",options:t.filterOptions.brands},model:{value:t.filters.brands,callback:function(e){t.$set(t.filters,"brands",e)},expression:"filters.brands"}})],1),i("div",{staticClass:"ratings"},[i("h6",{staticClass:"filter-title"},[t._v(" Ratings ")]),t._l(t.filterOptions.ratings,(function(e){return i("div",{key:e.rating,staticClass:"ratings-list"},[i("b-link",[i("div",{staticClass:"d-flex"},[t._l(5,(function(t){return i("feather-icon",{key:t,class:[{"fill-current":t<=e.rating},t<=e.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"17"}})})),i("span",{staticClass:"ml-25"},[t._v("& up")])],2)]),i("div",{staticClass:"stars-received"},[i("span",[t._v(t._s(e.count))])])],1)}))],2)])],1)]),i("div",{staticClass:"body-content-overlay",class:{show:t.mqShallShowLeftSidebar},on:{click:function(e){return t.$emit("update:mq-shall-show-left-sidebar",!1)}}})])},k=[],y=i("4971"),B=i.n(y),P={components:{BRow:l["a"],BCol:d["a"],BFormRadioGroup:c["a"],BLink:v["a"],BCard:m["a"],VueSlider:B.a},props:{filters:{type:Object,required:!0},filterOptions:{type:Object,required:!0},mqShallShowLeftSidebar:{type:Boolean,required:!0}}},O=P,q=(i("9e41"),i("fc05"),i("2877")),R=Object(q["a"])(O,_,k,!1,null,"0f9303ea",null),W=R.exports,L=(i("99af"),i("4360")),$=function(){var t=Object(I["ref"])({q:"",priceRangeDefined:"all",priceRange:[0,100],categories:[],brands:[],ratings:null,page:1,perPage:9}),e={priceRangeDefined:[{text:"All",value:"all"},{text:"<= $10",value:"<=10"},{text:"$10 - $100",value:"10-100"},{text:"$100 - $500",value:"100-500"},{text:">= $500",value:">=500"}],categories:["Appliances","Audio","Cameras & Camcorders","Car Electronics & GPS","Cell Phones","Computers & Tablets","Health, Fitness & Beauty","Office & School Supplies","TV & Home Theater","Video Games"],brands:["Insignia™","Samsung","Metra","HP","Apple","GE","Sony","Incipio","KitchenAid","Whirlpool"],ratings:[{rating:4,count:160},{rating:3,count:176},{rating:2,count:291},{rating:1,count:190}]},i=Object(I["ref"])({text:"Featured",value:"featured"}),a=[{text:"Featured",value:"featured"},{text:"Lowest",value:"price-asc"},{text:"Highest",value:"price-desc"}];return{filters:t,filterOptions:e,sortBy:i,sortByOptions:a}},A=function(){var t="grid-view",e=[{icon:"GridIcon",value:"grid-view"},{icon:"ListIcon",value:"list-view"}],i=Object(I["ref"])(null);return{itemView:t,itemViewOptions:e,totalProducts:i}},j=function(){var t=Object(I["ref"])([]),e=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return L["a"].dispatch.apply(L["a"],["app-ecommerce/fetchProducts"].concat(e))};return{products:t,fetchProducts:e}},F=i("e316"),V={directives:{Ripple:S["a"]},components:{BDropdown:r["a"],BDropdownItem:n["a"],BFormRadioGroup:c["a"],BFormRadio:o["a"],BRow:l["a"],BCol:d["a"],BInputGroup:u["a"],BInputGroupAppend:p["a"],BFormInput:f["a"],BCard:m["a"],BCardBody:h["a"],BLink:v["a"],BImg:b["a"],BCardText:g["a"],BButton:C["a"],BPagination:w["a"],ShopLeftFilterSidebar:W},setup:function(){var t=$(),e=t.filters,i=t.filterOptions,a=t.sortBy,s=t.sortByOptions,r=Object(F["b"])(),n=r.handleCartActionClick,c=r.toggleProductInWishlist,o=A(),l=o.itemView,d=o.itemViewOptions,u=o.totalProducts,p=j(),f=p.products,m=p.fetchProducts,h=Object(x["a"])(),v=h.mqShallShowLeftSidebar,b=function(){m({q:e.value.q,sortBy:a.value.value,page:e.value.page,perPage:e.value.perPage}).then((function(t){f.value=t.data.products,u.value=t.data.total}))};return b(),Object(I["watch"])([e,a],(function(){b()}),{deep:!0}),{filters:e,filterOptions:i,sortBy:a,sortByOptions:s,itemView:l,itemViewOptions:d,totalProducts:u,toggleProductInWishlist:c,handleCartActionClick:n,products:f,mqShallShowLeftSidebar:v}}},T=V,D=(i("8330"),i("06e9"),Object(q["a"])(T,a,s,!1,null,"15eba8c6",null));e["default"]=D.exports},"06e9":function(t,e,i){"use strict";i("c67d")},"195a":function(t,e,i){},"1bd7":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("4360"),s=i("ed09"),r=function(){var t=Object(s["ref"])(!1),e=Object(s["computed"])((function(){return a["a"].getters["app/currentBreakPoint"]}));return Object(s["watch"])(e,(function(e,i){"md"===i&&"lg"===e&&(t.value=!1)})),{mqShallShowLeftSidebar:t}}},8330:function(t,e,i){"use strict";i("b9a2")},"9e41":function(t,e,i){"use strict";i("c789")},b9a2:function(t,e,i){},c67d:function(t,e,i){},c789:function(t,e,i){},e316:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n}));var a=i("4360"),s=i("ca6e"),r=function(){var t=function(t){return a["a"].dispatch("app-ecommerce/addProductInWishlist",{productId:t})},e=function(t){return a["a"].dispatch("app-ecommerce/removeProductFromWishlist",{productId:t})},i=function(t){return a["a"].dispatch("app-ecommerce/addProductInCart",{productId:t})},s=function(t){return a["a"].dispatch("app-ecommerce/removeProductFromCart",{productId:t})};return{addProductInWishlist:t,removeProductFromWishlist:e,addProductInCart:i,removeProductFromCart:s}},n=function(){var t=Object(s["d"])(),e=t.router,i=function(t){var e=r(),i=e.addProductInWishlist,a=e.removeProductFromWishlist;t.isInWishlist?a(t.id).then((function(){t.isInWishlist=!1})):i(t.id).then((function(){t.isInWishlist=!0}))},n=function(t){var i=r(),s=i.addProductInCart;t.isInCart?e.push({name:"apps-e-commerce-checkout"}):s(t.id).then((function(){t.isInCart=!0,a["a"].commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",a["a"].state["app-ecommerce"].cartItemsCount+1)}))},c=function(t,i){var s=r(),n=s.addProductInCart,c=s.removeProductFromWishlist;t.isInCart?e.push({name:"apps-e-commerce-checkout"}):n(t.id).then((function(){t.isInCart=!0,c(t.id),a["a"].commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",a["a"].state["app-ecommerce"].cartItemsCount+1)})).then((function(){t.isInWishlist=!1,i(t)}))};return{toggleProductInWishlist:i,handleCartActionClick:n,handleWishlistCartActionClick:c}}},fc05:function(t,e,i){"use strict";i("195a")}}]);
//# sourceMappingURL=chunk-2844fa18.95092458.js.map