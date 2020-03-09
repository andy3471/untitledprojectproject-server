(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh LpR fFf"}},[a("q-header",{attrs:{bordered:""}},["electron"===this.mode?a("ElectronBar"):t._e(),a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.$q.screen.gt.sm?a("q-toolbar-title",{staticClass:"row items-center no-wrap"},[t._v("UPP")]):t._e(),a("q-space"),a("q-input",{staticClass:"q-ml-md search",attrs:{dark:"",dense:"",standout:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:"notifications"}},[a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("2")]),a("q-tooltip",[t._v("Notifications")])],1),a("q-btn",{attrs:{dense:"",flat:""}},[a("div",{staticClass:"row items-center no-wrap"},[a("q-icon",{attrs:{name:"add",size:"20px"}}),a("q-icon",{staticStyle:{"margin-left":"-2px"},attrs:{name:"arrow_drop_down",size:"16px"}})],1),a("q-menu",{attrs:{"auto-close":""}},[a("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",[t._v("New Project")])],1),a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",[t._v("New Team")])],1)],1)],1)],1),this.user?a("q-btn",{attrs:{dense:"",flat:"","no-wrap":""}},[a("q-avatar",{attrs:{rounded:"",size:"26px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("q-icon",{attrs:{name:"arrow_drop_down",size:"16px"}}),a("q-tooltip",[t._v("Account")]),a("q-menu",{attrs:{"auto-close":""}},[a("q-list",{attrs:{dense:""}},[a("q-item",{staticClass:"GL__menu-link-signed-in"},[a("q-item-section",[a("div",[a("strong",[t._v(t._s(t.user.name))])])])],1),a("q-separator"),a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",[t._v("Your profile")])],1),a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",[t._v("Your projects")])],1),a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",[t._v("Your Groups")])],1),a("q-separator"),a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",[t._v("Help")])],1),a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",[t._v("Settings")])],1),a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",{on:{click:t.logout}},[t._v("Sign out")])],1)],1)],1)],1):t._e()],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("Projects")]),t._l(t.projects,(function(e){return a("ProjectLink",t._b({key:e.title},"ProjectLink",e,!1))}))],2)],1),a("q-page-container",[t._v("\n    "+t._s(this.user)+"\n    "),a("router-view")],1)],1)},r=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),s=a.n(i),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank"}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},o=[],l={name:"ProjectLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},u=l,p=a("2877"),m=a("eebe"),d=a.n(m),b=a("66e5"),q=a("4074"),f=a("0016"),_=a("0170"),v=Object(p["a"])(u,c,o,!1,null,null,null),h=v.exports;d()(v,"components",{QItem:b["a"],QItemSection:q["a"],QIcon:f["a"],QItemLabel:_["a"]});var w=a("95b7"),g=a("bc3a"),k=a.n(g),O=a("2f62");function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?j(Object(a),!0).forEach((function(e){s()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}k.a.defaults.withCredentials=!0,k.a.defaults.baseURL="http://upp.local";var Q={name:"MainLayout",components:{ProjectLink:h,ElectronBar:w["a"]},computed:y({},Object(O["c"])({user:function(t){return t.auth.user}}),{},Object(O["b"])("auth",["loggedIn"])),mounted:function(){var t=this;k.a.get("/api/user").then((function(e){return[t.user=e.data]}))},methods:{logout:function(){var t=this;k.a.post("logout").then((function(e){t.$router.push("/login")}))}},data:function(){return{leftDrawerOpen:!1,mode:"spa",searchText:"",user:{},projects:[{title:"UPP",caption:"quasar.dev",icon:"school"},{title:"Rota",caption:"github.com/quasarframework",icon:"code"},{title:"Keyshare",caption:"chat.quasar.dev",icon:"chat"}]}}},P=Q,x=a("4d5a"),L=a("e359"),C=a("65c6"),S=a("9c40"),D=a("6ac5"),G=a("2c91"),I=a("27f9"),z=a("58a8"),T=a("05c0"),E=a("4e73"),B=a("1c1c"),$=a("cb32"),U=a("eb85"),A=a("9404"),H=a("09e3"),M=Object(p["a"])(P,n,r,!1,null,null,null);e["default"]=M.exports;d()(M,"components",{QLayout:x["a"],QHeader:L["a"],QToolbar:C["a"],QBtn:S["a"],QToolbarTitle:D["a"],QSpace:G["a"],QInput:I["a"],QIcon:f["a"],QBadge:z["a"],QTooltip:T["a"],QMenu:E["a"],QList:B["a"],QItem:b["a"],QItemSection:q["a"],QAvatar:$["a"],QSeparator:U["a"],QDrawer:A["a"],QItemLabel:_["a"],QPageContainer:H["a"]})},"95b7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-bar",{staticClass:"q-electron-drag"},[a("div",[t._v("UntitledProjectProject")]),a("q-space"),a("q-btn",{attrs:{dense:"",flat:"",icon:"minimize"},on:{click:t.minimize}}),a("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square"},on:{click:t.maximize}}),a("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:t.closeApp}})],1)},r=[],i={name:"ElectronBar",methods:{minimize:function(){0},maximize:function(){},close:function(){0}}},s=i,c=a("2877"),o=a("eebe"),l=a.n(o),u=a("d847"),p=a("2c91"),m=a("9c40"),d=Object(c["a"])(s,n,r,!1,null,null,null);e["a"]=d.exports;l()(d,"components",{QBar:u["a"],QSpace:p["a"],QBtn:m["a"]})}}]);