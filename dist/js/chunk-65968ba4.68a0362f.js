(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65968ba4"],{"40a8":function(a,t,e){},a28c:function(a,t,e){"use strict";e("40a8")},c346:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{cols:"12"}},[e("p",{staticClass:"mb-2"},[e("span",[a._v("A Vue.js component for ApexCharts. Read full documnetation")]),e("b-link",{attrs:{target:"_blank",href:"https://apexcharts.com/docs/installation/"}},[a._v(" here ")])],1)]),e("b-col",{attrs:{cols:"12"}},[e("apex-line-area-chart")],1),e("b-col",{attrs:{cols:"12"}},[e("apex-data-bar-chart")],1),e("b-col",{attrs:{cols:"12"}},[e("apex-scatter-chart")],1),e("b-col",{attrs:{cols:"12"}},[e("apex-line-chart")],1),e("b-col",{attrs:{md:"6"}},[e("apex-bar-chart")],1),e("b-col",{attrs:{md:"6"}},[e("apex-candlestick-chart")],1),e("b-col",{attrs:{md:"6"}},[e("apex-heat-map-chart")],1),e("b-col",{attrs:{md:"6"}},[e("apex-radial-bar-chart")],1),e("b-col",{attrs:{md:"6"}},[e("apex-radar-chart")],1),e("b-col",{attrs:{md:"6"}},[e("apex-donut-chart")],1)],1)},s=[],n=e("a15b"),o=e("b28b"),i=e("aa59"),l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("div",[e("b-card-title",{staticClass:"mb-1"},[a._v(" Balance ")]),e("b-card-sub-title",[a._v("Commercial networks & enterprises")])],1),e("div",{staticClass:"d-flex align-items-center flex-wrap mt-sm-0 mt-1"},[e("h5",{staticClass:"font-weight-bolder mb-0 mr-1"},[a._v(" $ 100,000 ")]),e("b-badge",{attrs:{variant:"light-secondary"}},[e("feather-icon",{staticClass:"text-danger mr-25",attrs:{icon:"ArrowDownIcon",size:"16"}}),e("span",{staticClass:"align-middle"},[a._v("20%")])],1)],1)]),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"line",height:"400",options:a.apexChatData.lineChartSimple.chartOptions,series:a.apexChatData.lineChartSimple.series}})],1)],1)},c=[],d=e("b885"),p=e("205f"),h=e("e98b"),b=e("6197"),u=e("4968"),m=e("ba06"),x=e("1321"),C=e.n(x),f=(e("d3b7"),e("25f0"),e("b680"),e("1dff"));function g(a,t){var e=0,r=[];while(e<a){var s="w".concat((e+1).toString()),n=Math.floor(Math.random()*(t.max-t.min+1))+t.min;r.push({x:s,y:n}),e++}return r}var y={column:{series1:"#826af9",series2:"#d2b0ff",bg:"#f8d3ff"},success:{shade_100:"#7eefc7",shade_200:"#06774f"},donut:{series1:"#ffe700",series2:"#00d4bd",series3:"#826bf8",series4:"#2b9bf4",series5:"#FFA1A1"},area:{series3:"#a4f8cd",series2:"#60f2ca",series1:"#2bdac7"}},w={lineChartSimple:{series:[{data:[280,200,220,180,270,250,70,90,200,150,160,100,150,100,50]}],chartOptions:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},markers:{strokeWidth:7,strokeOpacity:1,strokeColors:[f["b"].light],colors:[f["b"].warning]},colors:[f["b"].warning],dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{xaxis:{lines:{show:!0}}},tooltip:{custom:function(a){return'<div class="px-1 py-50"><span>'.concat(a.series[a.seriesIndex][a.dataPointIndex],"%</span></div>")}},xaxis:{categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12","21/12"]},yaxis:{}}},lineAreaChartSpline:{series:[{name:"Visits",data:[100,120,90,170,130,160,140,240,220,180,270,280,375]},{name:"Clicks",data:[60,80,70,110,80,100,90,180,160,140,200,220,275]},{name:"Sales",data:[20,40,30,70,40,60,50,140,120,100,140,180,220]}],chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!1,curve:"straight"},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"14px",fontFamily:"Montserrat"},grid:{xaxis:{lines:{show:!0}}},xaxis:{categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12"]},yaxis:{},fill:{opacity:1,type:"solid"},tooltip:{shared:!1},colors:[y.area.series3,y.area.series2,y.area.series1]}},columnChart:{series:[{name:"Apple",data:[90,120,55,100,80,125,175,70,88,180]},{name:"Samsung",data:[85,100,30,40,95,90,30,110,62,20]}],chartOptions:{chart:{stacked:!0,toolbar:{show:!1}},colors:[y.column.series1,y.column.series2],plotOptions:{bar:{columnWidth:"15%",colors:{backgroundBarColors:[y.column.bg,y.column.bg,y.column.bg,y.column.bg,y.column.bg],backgroundBarRadius:10}}},dataLabels:{enabled:!1},legend:{show:!0,position:"top",fontSize:"14px",fontFamily:"Montserrat",horizontalAlign:"left"},stroke:{show:!0,colors:["transparent"]},grid:{xaxis:{lines:{show:!0}}},xaxis:{categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12"]},yaxis:{},fill:{opacity:1}}},barChart:{series:[{data:[700,350,480,600,210,550,150]}],chartOptions:{chart:{toolbar:{show:!1}},colors:f["b"].info,plotOptions:{bar:{horizontal:!0,barHeight:"30%",endingShape:"rounded"}},grid:{xaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},xaxis:{categories:["MON, 11","THU, 14","FRI, 15","MON, 18","WED, 20","FRI, 21","MON, 23"]},yaxis:{}}},candlestickChart:{series:[{data:[{x:new Date(15387786e5),y:[150,170,50,100]},{x:new Date(15387804e5),y:[200,400,170,330]},{x:new Date(15387822e5),y:[330,340,250,280]},{x:new Date(1538784e6),y:[300,330,200,320]},{x:new Date(15387858e5),y:[320,450,280,350]},{x:new Date(15387876e5),y:[300,350,80,250]},{x:new Date(15387894e5),y:[200,330,170,300]},{x:new Date(15387912e5),y:[200,220,70,130]},{x:new Date(1538793e6),y:[220,270,180,250]},{x:new Date(15387948e5),y:[200,250,80,100]},{x:new Date(15387966e5),y:[150,170,50,120]},{x:new Date(15387984e5),y:[110,450,10,420]},{x:new Date(15388002e5),y:[400,480,300,320]},{x:new Date(1538802e6),y:[380,480,350,450]}]}],chartOptions:{chart:{toolbar:{show:!1}},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},grid:{xaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{candlestick:{colors:{upward:f["b"].success,downward:f["b"].danger}},bar:{columnWidth:"40%"}}}},scatterChart:{series:[{name:"Angular",data:[[5.4,170],[5.4,100],[6.3,170],[5.7,140],[5.9,130],[7,150],[8,120],[9,170],[10,190],[11,220],[12,170],[13,230]]},{name:"Vue",data:[[14,220],[15,280],[16,230],[18,320],[17.5,280],[19,250],[20,350],[20.5,320],[20,320],[19,280],[17,280],[22,300],[18,120]]},{name:"React",data:[[14,290],[13,190],[20,220],[21,350],[21.5,290],[22,220],[23,140],[19,400],[20,200],[22,90],[20,120]]}],chartOptions:{chart:{zoom:{enabled:!0,type:"xy"},toolbar:{show:!1}},grid:{xaxis:{lines:{show:!0}}},colors:[f["b"].warning,f["b"].primary,f["b"].success],legend:{show:!0,position:"top",horizontalAlign:"left"},xaxis:{tickAmount:10,labels:{formatter:function(a){return parseFloat(a).toFixed(1)}}},yaxis:{}}},heatMapChart:{series:[{name:"SUN",data:g(24,{min:0,max:60})},{name:"MON",data:g(24,{min:0,max:60})},{name:"TUE",data:g(24,{min:0,max:60})},{name:"WED",data:g(24,{min:0,max:60})},{name:"THU",data:g(24,{min:0,max:60})},{name:"FRI",data:g(24,{min:0,max:60})},{name:"SAT",data:g(24,{min:0,max:60})}],chartOptions:{dataLabels:{enabled:!1},legend:{show:!0,position:"bottom"},colors:["#7367F0"],plotOptions:{heatmap:{enableShades:!1,colorScale:{ranges:[{from:0,to:10,name:"0-10",color:"#b9b3f8"},{from:11,to:20,name:"10-20",color:"#aba4f6"},{from:21,to:30,name:"20-30",color:"#9d95f5"},{from:31,to:40,name:"30-40",color:"#8f85f3"},{from:41,to:50,name:"40-50",color:"#8176f2"},{from:51,to:60,name:"50-60",color:"#7367f0"}]}}},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{height:350,type:"heatmap",toolbar:{show:!1}}}},donutChart:{series:[85,16,50,50],chartOptions:{legend:{show:!0,position:"bottom",fontSize:"14px",fontFamily:"Montserrat"},colors:[y.donut.series1,y.donut.series5,y.donut.series3,y.donut.series2],dataLabels:{enabled:!0,formatter:function(a){return"".concat(parseInt(a),"%")}},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"2rem",fontFamily:"Montserrat"},value:{fontSize:"1rem",fontFamily:"Montserrat",formatter:function(a){return"".concat(parseInt(a),"%")}},total:{show:!0,fontSize:"1.5rem",label:"Operational",formatter:function(){return"31%"}}}}}},labels:["Operational","Networking","Hiring","R&D"],responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1.5rem"},value:{fontSize:"1rem"},total:{fontSize:"1.5rem"}}}}},legend:{show:!0}}}]}},radialBarChart:{series:[80,50,35],chartOptions:{colors:[y.donut.series1,y.donut.series2,y.donut.series4],plotOptions:{radialBar:{size:185,hollow:{size:"25%"},track:{margin:15},dataLabels:{name:{fontSize:"2rem",fontFamily:"Montserrat"},value:{fontSize:"1rem",fontFamily:"Montserrat"},total:{show:!0,fontSize:"1rem",label:"Comments",formatter:function(){return"80%"}}}}},legend:{show:!0,position:"bottom",horizontalAlign:"center"},stroke:{lineCap:"round"},labels:["Comments","Replies","Shares"]}},radarChart:{series:[{name:"iPhone 11",data:[41,64,81,60,42,42,33,23]},{name:"Samsung s20",data:[65,46,42,25,58,63,76,43]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!1,blur:8,left:1,top:1,opacity:.2}},legend:{show:!0,fontSize:"14px",fontFamily:"Montserrat"},yaxis:{show:!1},colors:[y.donut.series1,y.donut.series3],xaxis:{categories:["Battery","Brand","Camera","Memory","Storage","Display","OS","Price"]},fill:{opacity:[1,.8]},stroke:{show:!1,width:0},markers:{size:0},grid:{show:!1}}}},v={components:{VueApexCharts:C.a,BCardHeader:d["a"],BCard:p["a"],BBadge:h["a"],BCardBody:b["a"],BCardTitle:u["a"],BCardSubTitle:m["a"]},data:function(){return{apexChatData:w}}},B=v,k=e("2877"),D=Object(k["a"])(B,l,c,!1,null,null,null),_=D.exports,O=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("div",[e("b-card-title",{staticClass:"mb-1"},[a._v(" Line Chart ")]),e("b-card-sub-title",[a._v("Commercial networks")])],1),e("div",{staticClass:"d-flex align-items-center"},[e("feather-icon",{attrs:{icon:"CalendarIcon",size:"16"}}),e("flat-pickr",{staticClass:"form-control flat-picker bg-transparent border-0 shadow-none",attrs:{config:{mode:"range"},placeholder:"YYYY-MM-DD"},model:{value:a.rangePicker,callback:function(t){a.rangePicker=t},expression:"rangePicker"}})],1)]),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"area",height:"400",options:a.apexChatData.lineAreaChartSpline.chartOptions,series:a.apexChatData.lineAreaChartSpline.series}})],1)],1)},S=[],A=e("c38f"),M=e.n(A),z={components:{BCard:p["a"],VueApexCharts:C.a,BCardHeader:d["a"],BCardBody:b["a"],BCardTitle:u["a"],BCardSubTitle:m["a"],flatPickr:M.a},data:function(){return{apexChatData:w,rangePicker:["2019-05-01","2019-05-10"]}}},P=z,T=Object(k["a"])(P,O,S,!1,null,null,null),Y=T.exports,F=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",{staticClass:"mb-50"},[a._v(" Data Science ")]),e("div",{staticClass:"d-flex align-items-center"},[e("feather-icon",{attrs:{icon:"CalendarIcon",size:"16"}}),e("flat-pickr",{staticClass:"form-control flat-picker bg-transparent border-0 shadow-none",attrs:{config:{mode:"range"},placeholder:"YYYY-MM-DD"},model:{value:a.rangePicker,callback:function(t){a.rangePicker=t},expression:"rangePicker"}})],1)],1),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"bar",height:"400",options:a.apexChatData.columnChart.chartOptions,series:a.apexChatData.columnChart.series}})],1)],1)},E=[],I={components:{BCard:p["a"],BCardBody:b["a"],BCardHeader:d["a"],VueApexCharts:C.a,flatPickr:M.a,BCardTitle:u["a"]},data:function(){return{apexChatData:w,rangePicker:["2019-05-01","2019-05-10"]}}},L=I,V=Object(k["a"])(L,F,E,!1,null,null,null),$=V.exports,H=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("div",[e("b-card-sub-title",{staticClass:"mb-25"},[a._v(" Balance ")]),e("b-card-title",{staticClass:"font-weight-bolder"},[a._v(" $74,382.72 ")])],1),e("div",{staticClass:"d-flex align-items-center"},[e("feather-icon",{attrs:{icon:"CalendarIcon",size:"16"}}),e("flat-pickr",{staticClass:"form-control flat-picker bg-transparent border-0 shadow-none",attrs:{config:{mode:"range"},placeholder:"YYYY-MM-DD"},model:{value:a.rangePicker,callback:function(t){a.rangePicker=t},expression:"rangePicker"}})],1)]),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"bar",height:"350",options:a.apexChatData.barChart.chartOptions,series:a.apexChatData.barChart.series}})],1)],1)},R=[],j={components:{VueApexCharts:C.a,BCard:p["a"],BCardHeader:d["a"],flatPickr:M.a,BCardBody:b["a"],BCardSubTitle:m["a"],BCardTitle:u["a"]},data:function(){return{apexChatData:w,rangePicker:["2019-05-01","2019-05-10"]}}},N=j,W=Object(k["a"])(N,H,R,!1,null,null,null),U=W.exports,J=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("div",[e("b-card-title",{staticClass:"mb-50"},[a._v(" Stocks Prices ")]),e("b-card-text",{staticClass:"mb-0"},[a._v(" $50,863.98 ")])],1),e("div",{staticClass:"d-flex align-items-center"},[e("feather-icon",{attrs:{icon:"CalendarIcon",size:"16"}}),e("flat-pickr",{staticClass:"form-control flat-picker bg-transparent border-0 shadow-none",attrs:{config:{mode:"range"},placeholder:"YYYY-MM-DD"},model:{value:a.rangePicker,callback:function(t){a.rangePicker=t},expression:"rangePicker"}})],1)]),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"candlestick",height:"400",options:a.apexChatData.candlestickChart.chartOptions,series:a.apexChatData.candlestickChart.series}})],1)],1)},G=[],q=e("d6e4"),K={components:{BCard:p["a"],VueApexCharts:C.a,BCardBody:b["a"],BCardHeader:d["a"],BCardTitle:u["a"],BCardText:q["a"],flatPickr:M.a},data:function(){return{apexChatData:w,rangePicker:["2019-05-01","2019-05-10"]}}},Q=K,X=Object(k["a"])(Q,J,G,!1,null,null,null),Z=X.exports,aa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("h4",{staticClass:"card-title mb-50"},[a._v(" New Technologies Data ")]),e("b-button-group",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[a._v(" Daily ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[a._v(" Monthly ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[a._v(" Yearly ")])],1)],1),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"scatter",height:"400",options:a.apexChatData.scatterChart.chartOptions,series:a.apexChatData.scatterChart.series}})],1)],1)},ta=[],ea=e("1947"),ra=e("12aa"),sa=e("e009"),na={components:{BCard:p["a"],VueApexCharts:C.a,BCardHeader:d["a"],BCardBody:b["a"],BButton:ea["a"],BButtonGroup:ra["a"]},directives:{Ripple:sa["a"]},data:function(){return{apexChatData:w}}},oa=na,ia=Object(k["a"])(oa,aa,ta,!1,null,null,null),la=ia.exports,ca=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[a._v("Daily Sales States")]),e("b-dropdown",{attrs:{variant:"link","toggle-class":"p-0","no-caret":""},scopedSlots:a._u([{key:"button-content",fn:function(){return[e("feather-icon",{staticClass:"text-body",attrs:{icon:"MoreVerticalIcon"}})]},proxy:!0}])},[e("b-dropdown-item",[a._v(" Last 28 Days ")]),e("b-dropdown-item",[a._v(" Last Month ")]),e("b-dropdown-item",[a._v(" Last Year ")])],1)],1),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"heatmap",height:"350",options:a.apexChatData.heatMapChart.chartOptions,series:a.apexChatData.heatMapChart.series}})],1)],1)},da=[],pa=e("dd9a"),ha=e("9eaa"),ba={components:{BCard:p["a"],BCardHeader:d["a"],BCardBody:b["a"],VueApexCharts:C.a,BCardTitle:u["a"],BDropdown:pa["a"],BDropdownItem:ha["a"]},data:function(){return{apexChatData:w}}},ua=ba,ma=Object(k["a"])(ua,ca,da,!1,null,null,null),xa=ma.exports,Ca=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",[e("b-card-title",{staticClass:"mb-1"},[a._v(" Expense Ratio ")]),e("b-card-sub-title",{staticClass:"mb-2"},[a._v(" Spending on various categories ")]),e("vue-apex-charts",{attrs:{type:"donut",height:"350",options:a.apexChatData.donutChart.chartOptions,series:a.apexChatData.donutChart.series}})],1)},fa=[],ga={components:{VueApexCharts:C.a,BCard:p["a"],BCardTitle:u["a"],BCardSubTitle:m["a"]},data:function(){return{apexChatData:w}}},ya=ga,wa=Object(k["a"])(ya,Ca,fa,!1,null,null,null),va=wa.exports,Ba=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",{staticClass:"mb-sm-0 mb-1"},[a._v(" Statistics ")])],1),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"radialBar",height:"400",options:a.apexChatData.radialBarChart.chartOptions,series:a.apexChatData.radialBarChart.series}})],1)],1)},ka=[],Da={components:{VueApexCharts:C.a,BCard:p["a"],BCardTitle:u["a"],BCardBody:b["a"],BCardHeader:d["a"]},data:function(){return{apexChatData:w}}},_a=Da,Oa=Object(k["a"])(_a,Ba,ka,!1,null,null,null),Sa=Oa.exports,Aa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",{attrs:{title:"Mobile Comparison"}},[e("vue-apex-charts",{attrs:{type:"radar",height:"400",options:a.apexChatData.radarChart.chartOptions,series:a.apexChatData.radarChart.series}})],1)},Ma=[],za={components:{BCard:p["a"],VueApexCharts:C.a},data:function(){return{apexChatData:w}}},Pa=za,Ta=Object(k["a"])(Pa,Aa,Ma,!1,null,null,null),Ya=Ta.exports,Fa={components:{BRow:n["a"],BCol:o["a"],BLink:i["a"],ApexLineChart:_,ApexLineAreaChart:Y,ApexDataBarChart:$,ApexBarChart:U,ApexCandlestickChart:Z,ApexScatterChart:la,ApexHeatMapChart:xa,ApexDonutChart:va,ApexRadarChart:Ya,ApexRadialBarChart:Sa}},Ea=Fa,Ia=(e("a28c"),Object(k["a"])(Ea,r,s,!1,null,null,null));t["default"]=Ia.exports}}]);
//# sourceMappingURL=chunk-65968ba4.68a0362f.js.map