(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{362:function(t,e,n){"use strict";n.r(e);var i={name:"CountUp",props:{startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},delay:{type:Number,default:0}},mounted(){this.init()},data:()=>({counter:null}),methods:{init(){n.e(36).then(n.bind(null,358)).then(t=>{this.$nextTick(()=>{this.counter=new t.CountUp(this.$refs.countUp,this.endVal,{startVal:this.startVal,decimalPlaces:this.decimalPlaces,duration:this.duration}),setTimeout(()=>{this.counter.start()},this.delay)})})}},beforeDestroy(){this.counter.reset(),this.counter=null}},s=n(14),u=Object(s.a)(i,(function(){var t=this._self._c;return t("div",[t("ClientOnly",[this._t("before"),this._v(" "),t("span",{ref:"countUp"})],2)],1)}),[],!1,null,null,null);e.default=u.exports}}]);