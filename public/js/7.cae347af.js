(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"013f":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("q-page",{staticClass:"flex flex-center",attrs:{padding:""}},[s("q-form",{staticClass:"q-gutter-md"},[e.errorMessage?s("p",[e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),s("q-input",{attrs:{outlined:"",label:"Email"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),s("q-input",{attrs:{outlined:"",type:"password",label:"Password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("div",[s("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Register",color:"primary",flat:""},on:{click:e.register}}),s("q-btn",{attrs:{label:"Sign In",type:"submit",color:"primary"},on:{click:function(a){return a.preventDefault(),e.login(a)}}})],1)],1)],1)},r=[],o=(s("ac6a"),s("cadf"),s("06db"),s("456d"),s("bc3a")),n=s.n(o);n.a.defaults.withCredentials=!0,n.a.defaults.baseURL="http://upp.local";var i={name:"PageLogin",data:function(){return{mode:"spa",email:"",password:"",errorMessage:""}},methods:{login:function(){var e=this;"spa"===this.mode?n.a.get("/airlock/csrf-cookie").then((function(a){console.log(a),n.a.post("/login",{email:e.email,password:e.password}).then((function(a){e.$router.push("/")})).catch((function(a){var s=Object.keys(a.response.data.errors)[0];e.errorMessage=a.response.data.errors[s][0]}))})):n.a.get("/api/login",{email:this.email,password:this.password}).then((function(e){console.log(e)})).catch((function(a){var s=Object.keys(a.response.data.errors)[0];e.errorMessage=a.response.data.errors[s][0]}))},register:function(){this.$router.push("register")}}},l=i,c=s("2877"),p=s("eebe"),u=s.n(p),d=s("9989"),f=s("0378"),m=s("27f9"),g=s("9c40"),b=Object(c["a"])(l,t,r,!1,null,null,null);a["default"]=b.exports;u()(b,"components",{QPage:d["a"],QForm:f["a"],QInput:m["a"],QBtn:g["a"]})}}]);