webpackJsonp([0],{"9PyC":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_content"},[n("img",{staticClass:"bmi_logo",attrs:{src:i("ojRb"),alt:"bmiLogo"}}),t._v(" "),n("div",{staticClass:"bmi_input"},[n("h2",[t._v("身高cm")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],attrs:{type:"text",placeholder:"請輸入身高"},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=e.target.value)}}}),t._v(" "),n("h2",[t._v("體重kg")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],attrs:{type:"text",placeholder:"請輸入體重"},domProps:{value:t.weight},on:{input:function(e){e.target.composing||(t.weight=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"submit",on:{click:t.submit}},[t._v("看結果")])])},staticRenderFns:[]};var s={props:["height","weight"],data:function(){return{newHeight:this.height/100,newWeight:this.weight}},computed:{bmi:function(){return Math.round(this.newWeight/Math.pow(this.newHeight,2))},bmiRange:function(){return this.bmi<18.5?"良好":this.bmi>27?"努力減肥":"正常"},date:function(){var t=new Date;return t.getMonth()+1+"/"+t.getDate()}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",[t._v(t._s(t.bmiRange))]),t._v(" "),i("span",[t._v("BMI : "+t._s(t.bmi))]),t._v(" "),i("span",[t._v("身高 : "+t._s(t.height)+" cm")]),t._v(" "),i("span",[t._v("體重 : "+t._s(t.weight)+" kg")]),t._v(" "),i("span",[t._v("日期 : "+t._s(t.date))])])},staticRenderFns:[]};var h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:i("ojRb"),alt:"bmiLogo"}})])}]};var o={name:"App",components:{bmiInput:i("VU/8")({name:"BmiInput",data:function(){return{height:"",weight:""}},methods:{submit:function(){""!=this.height&&""!=this.weight&&(this.$emit("submitData",this.height,this.weight),this.height="",this.weight="")}}},r,!1,function(t){i("9PyC")},"data-v-4abf045e",null).exports,bmiResult:i("VU/8")(s,a,!1,function(t){i("e+Ik")},"data-v-df566dfc",null).exports,bmiLogo:i("VU/8")(null,h,!1,function(t){i("yhz2")},"data-v-03e7e6d2",null).exports},data:function(){return{datas:[{height:163,weight:58}]}},methods:{data:function(t,e){var i={height:t,weight:e};this.datas.push(i)}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"rootDiv"}},[e("header",[e("bmiInput",{on:{submitData:this.data}})],1),this._v(" "),e("main",[e("h1",[this._v("BMI記錄")]),this._v(" "),e("ul",this._l(this.datas,function(t){return e("bmiResult",{attrs:{height:t.height,weight:t.weight}})}),1)]),this._v(" "),e("footer",[e("bmiLogo")],1)])},staticRenderFns:[]};var u=i("VU/8")(o,d,!1,function(t){i("dMvG")},"data-v-d239c248",null).exports;new n.a({el:"#app",render:function(t){return t(u)}})},dMvG:function(t,e){},"e+Ik":function(t,e){},ojRb:function(t,e){t.exports="data:image/png;base64,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"},yhz2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f622789110205c27bc44.js.map