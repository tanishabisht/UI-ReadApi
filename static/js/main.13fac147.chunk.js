(this.webpackJsonpteslahack=this.webpackJsonpteslahack||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var i=t(0),s=t.n(i),r=t(11),d=t.n(r),n=t(15),o=t(13),l=(t(85),t(142)),c=(t(86),t(2));var m=()=>Object(c.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",variant:"light",children:[Object(c.jsx)(l.a.Brand,{className:"nav_logo",href:"#/alldocs",children:"ReadAPI"}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(c.jsxs)("nav",{className:"ml-auto",children:[Object(c.jsx)(n.b,{activeClassName:"secLinkActive",className:"secLink",to:"/alldocs",children:"ALL DOCUMENTATION"}),Object(c.jsx)(n.b,{activeClassName:"secLinkActive",className:"secLink",to:"/adddocs",children:"ADD DOCUMENTATION"})]})})]});t(93);var j=()=>Object(c.jsx)("div",{className:"footer_container",children:Object(c.jsxs)("p",{className:"footer_text text-center",children:["BUILT BY ",Object(c.jsx)("a",{href:"https://github.com/tanishabisht",children:"TANISHA"})," AND ",Object(c.jsx)("a",{href:"https://github.com/ComputerScientist-01",children:"JAY"})]})}),h=(t(45),t.p+"static/media/iconLink.111fabc6.svg");var u=e=>{let{projName:a,projDesc:t,editLink:i}=e;return Object(c.jsxs)("div",{className:"docscard_container",children:[Object(c.jsx)("h2",{children:a}),Object(c.jsx)("p",{children:t}),Object(c.jsx)("p",{style:{textAlign:"right"},children:Object(c.jsx)(n.b,{to:"/finaldoc",children:Object(c.jsx)("img",{className:"linkIcon",src:h,alt:"link"})})})]})},p=t.p+"static/media/iconEdit.ee6dadbb.svg",b=t.p+"static/media/iconDelete.dcc837b5.svg";var O=e=>{let{modelName:a,schemaArr:t}=e;return console.log(a,t),Object(c.jsxs)("div",{className:"modelcard_container",children:[Object(c.jsxs)("div",{className:"heading",children:[Object(c.jsx)("h2",{style:{color:"#fff"},children:a}),Object(c.jsxs)("span",{children:[Object(c.jsx)("a",{href:"#",children:Object(c.jsx)("img",{className:"crudIcon",src:p,alt:"edit link"})}),Object(c.jsx)("a",{href:"#",children:Object(c.jsx)("img",{className:"crudIcon",src:b,alt:"delete link"})})]})]}),Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"NAME"}),Object(c.jsx)("th",{children:"TYPE"}),Object(c.jsx)("th",{children:"DUMMY EXAMPLE"})]}),t.map((e=>{let{id:a,name:t,type:i,eg:s}=e;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:i}),Object(c.jsx)("td",{children:s})]},a)}))]})})]})};var x=e=>{let{content:a}=e;return console.log(a),Object(c.jsx)("div",{className:"gray_container",children:a.map((e=>{let{id:a,modelName:t,schemaArr:i}=e;return Object(c.jsx)(O,{modelName:t,schemaArr:i},a)}))})},T=t(132),g=t(144),E=t(145),C=t(137),f=t(73),N=t.n(f);const y=Object(T.a)((e=>({root:{width:"100%"},heading:{backgroundColor:"#7FA7F1",color:"#fff",margin:e.spacing(1)}})));var A=e=>{let{id:a,httpType:t,link:i,info:s,reqHeader:r,reqVal:d,resBody:n,darkColor:o,lightColor:l}=e;const m=y();return Object(c.jsx)("div",{className:m.root,children:Object(c.jsxs)(g.a,{className:m.heading,style:{backgroundColor:"".concat(l)},children:[Object(c.jsx)(E.a,{expandIcon:Object(c.jsx)(N.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(c.jsxs)("div",{className:"api_header",children:[Object(c.jsx)("span",{style:{backgroundColor:"".concat(o)},className:"httpTypeColor",children:t}),Object(c.jsx)("span",{children:i}),Object(c.jsx)("span",{children:s})]})}),Object(c.jsx)(C.a,{children:Object(c.jsxs)("div",{className:"api_body",children:[Object(c.jsx)("span",{children:r}),Object(c.jsx)("span",{children:Object(c.jsx)("span",{style:{backgroundColor:"".concat(o)},className:"reqVal",children:d})}),Object(c.jsx)("span",{className:"resBody",children:n})]})})]})})},v=t.p+"static/media/iconAdd.67168400.svg";var q=e=>{let{modelName:a,apiCalls:t}=e;return Object(c.jsxs)("div",{className:"gray_container",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsx)("h2",{children:a}),Object(c.jsx)(n.b,{to:"/create_api",children:Object(c.jsx)("img",{className:"crudIcon",src:v,alt:"add"})})]}),t.map((e=>{let{id:a,httpType:t,link:i,info:s,reqHeader:r,reqVal:d,resBody:n,darkColor:o,lightColor:l}=e;return Object(c.jsx)(A,{id:a,httpType:t,link:i,info:s,reqHeader:r,reqVal:d,resBody:n,darkColor:o,lightColor:l},a)}))]})},k=t(146),D=t(141);t(46);const I=Object(T.a)((e=>({textfield:{width:"100%",marginBottom:e.spacing(2)},addbutton:{marginBottom:e.spacing(2)}})));var P=()=>{const e=I();return Object(c.jsx)("div",{className:"container",style:{marginTop:"3rem"},children:Object(c.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(c.jsx)(k.a,{className:e.textfield,id:"project-name",label:"Project Name ...",variant:"outlined"}),Object(c.jsx)(k.a,{className:e.textfield,id:"project-desc",label:"Project Description ...",variant:"outlined",multiline:!0}),Object(c.jsx)("h1",{className:"header",children:"MODELS"}),Object(c.jsx)(n.b,{to:"/create_model",children:Object(c.jsx)(D.a,{variant:"outlined",className:e.addbutton,children:"ADD MODELS"})}),Object(c.jsx)(x,{content:[{id:0,modelName:"MODEL NAME 1",schemaArr:[{id:0,name:"name",type:"String",eg:"Tanisha"},{id:1,name:"name",type:"String",eg:"Tanisha"},{id:2,name:"name",type:"String",eg:"Tanisha"},{id:3,name:"name",type:"String",eg:"Tanisha"}]},{id:1,modelName:"MODEL NAME 2",schemaArr:[{id:0,name:"name",type:"String",eg:"Tanisha"},{id:1,name:"name",type:"String",eg:"Tanisha"},{id:2,name:"name",type:"String",eg:"Tanisha"},{id:3,name:"name",type:"String",eg:"Tanisha"}]}]}),Object(c.jsx)("h1",{className:"header",children:"APIs"}),[{id:0,modelName:"MODEL NAME 1",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]},{id:1,modelName:"MODEL NAME 2",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]},{id:2,modelName:"MODEL NAME 3",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]}].map((e=>{let{id:a,modelName:t,apiCalls:i}=e;return Object(c.jsx)(q,{modelName:t,apiCalls:i},a)})),Object(c.jsx)(n.b,{to:"/alldocs",children:Object(c.jsx)(D.a,{variant:"outlined",className:e.addbutton,children:"ADD DOCUMENT"})})]})})};const L=Object(T.a)((e=>({})));var B=()=>{L();return Object(c.jsxs)("div",{className:"container",style:{marginTop:"3rem"},children:[Object(c.jsx)("h1",{className:"header",children:"Project Name"}),Object(c.jsx)("p",{style:{textAlign:"justify"},children:"Project Description inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia"}),Object(c.jsx)("h1",{className:"header",children:"MODELS"}),Object(c.jsx)(x,{content:[{id:0,modelName:"MODEL NAME 1",schemaArr:[{id:0,name:"name",type:"String",eg:"Tanisha"},{id:1,name:"name",type:"String",eg:"Tanisha"},{id:2,name:"name",type:"String",eg:"Tanisha"},{id:3,name:"name",type:"String",eg:"Tanisha"}]},{id:1,modelName:"MODEL NAME 2",schemaArr:[{id:0,name:"name",type:"String",eg:"Tanisha"},{id:1,name:"name",type:"String",eg:"Tanisha"},{id:2,name:"name",type:"String",eg:"Tanisha"},{id:3,name:"name",type:"String",eg:"Tanisha"}]}]}),Object(c.jsx)("h1",{className:"header",children:"APIs"}),[{id:0,modelName:"MODEL NAME 1",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]},{id:1,modelName:"MODEL NAME 2",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]},{id:2,modelName:"MODEL NAME 3",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]}].map((e=>{let{id:a,modelName:t,apiCalls:i}=e;return Object(c.jsx)(q,{modelName:t,apiCalls:i},a)}))]})};var S=()=>Object(c.jsx)("div",{className:"container",children:[{id:0,projName:"PROJECT NAME FOR THE API 1",projDesc:"proj desc for the api \u2026 PROJECT NAME FOR THE API \u2026. proj desc for the api \u2026 PROJECT NAME FOR THE API \u2026. proj desc for the api \u2026 PROJECT NAME FOR THE API \u2026. proj desc for the api \u2026 PROJECT NAME ",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:1,projName:"PROJECT NAME FOR THE API 2",projDesc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arut odit aut fugit",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:2,projName:"PROJECT NAME FOR THE API 3",projDesc:"quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreheill",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:3,projName:"PROJECT NAME FOR THE API 4",projDesc:"m fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat fsdger",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:4,projName:"PROJECT NAME FOR THE API 5",projDesc:"a est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusand",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:5,projName:"PROJECT NAME FOR THE API 6",projDesc:"s et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"}].map((e=>{let{id:a,projName:t,projDesc:i,editLink:s}=e;return Object(c.jsx)(u,{projName:t,projDesc:i,editLink:s},a)}))}),U=t(140),R=t(148),H=t(143),M=t(149);const F=Object(T.a)((e=>({textfield:{width:"100%",marginBottom:e.spacing(2)},addbutton:{marginTop:e.spacing(3)}})));var V=()=>{const e=F(),[a,t]=Object(i.useState)(""),s=e=>t(e.target.value);return Object(c.jsxs)("div",{className:"container",style:{marginTop:"3rem",height:"75vh"},children:[Object(c.jsx)("h1",{className:"formHeader",children:"Create API"}),Object(c.jsxs)(U.a,{variant:"outlined",className:e.textfield,children:[Object(c.jsx)(R.a,{id:"http-type",children:"HTTP Type ..."}),Object(c.jsxs)(H.a,{labelId:"http-type",label:"HTTP Type ...",value:a,onChange:s,children:[Object(c.jsx)(M.a,{value:"get",children:"GET"}),Object(c.jsx)(M.a,{value:"post",children:"POST"}),Object(c.jsx)(M.a,{value:"put",children:"PUT"}),Object(c.jsx)(M.a,{value:"patch",children:"PATCH"}),Object(c.jsx)(M.a,{value:"delete",children:"DELETE"})]})]}),Object(c.jsx)(k.a,{className:e.textfield,id:"link",label:"Link ...",variant:"outlined"}),Object(c.jsxs)(U.a,{variant:"outlined",className:e.textfield,children:[Object(c.jsx)(R.a,{id:"reqField",children:"Request Type ..."}),Object(c.jsxs)(H.a,{labelId:"reqField",label:"Request Type ...",value:a,onChange:s,children:[Object(c.jsx)(M.a,{value:"files",children:"Files"}),Object(c.jsx)(M.a,{value:"params",children:"Params"}),Object(c.jsx)(M.a,{value:"queries",children:"Queries"}),Object(c.jsx)(M.a,{value:"header",children:"Header"}),Object(c.jsx)(M.a,{value:"body",children:"Body"})]})]}),Object(c.jsx)(k.a,{className:e.textfield,id:"reqVal",label:"Request Value ...",variant:"outlined",multiline:!0}),Object(c.jsx)(k.a,{className:e.textfield,id:"reqBody",label:"Response Body ...",variant:"outlined",multiline:!0}),Object(c.jsx)(n.b,{to:"/adddocs",children:Object(c.jsx)(D.a,{variant:"contained",color:"primary",className:e.addbutton,children:"ADD API"})})]})};const w=Object(T.a)((e=>({textfield:{width:"100%",marginBottom:e.spacing(2),marginLeft:e.spacing(2)},addbutton:{marginTop:e.spacing(3)}})));var _=()=>{const e=w();var a={name:"",type:"",dummyExample:""};const[t,s]=Object(i.useState)([a]);return Object(c.jsxs)("div",{className:"container createmodel_container",children:[Object(c.jsx)("h1",{className:"formHeader",children:"Create Model"}),Object(c.jsx)(k.a,{className:e.textfield,id:"http-type",label:"Model Name ...",variant:"outlined"}),Object(c.jsxs)("h2",{className:"formHeader",children:["Schema",Object(c.jsx)("img",{onClick:()=>{const e=[...t];e.push(a),s(e)},className:"crudIcon",src:v,alt:"add icon"})]}),t.map(((a,i)=>Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsx)(k.a,{className:e.textfield,id:"schemaName",label:"Schema Name ...",variant:"outlined"}),Object(c.jsx)(k.a,{className:e.textfield,id:"schemaType",label:"Schema Type ...",variant:"outlined"}),Object(c.jsx)(k.a,{className:e.textfield,id:"dummyExample",label:"Schema Dummy Example ...",variant:"outlined"}),Object(c.jsx)("img",{onClick:()=>(e=>{const a=[...t];a.splice(e,1),s(a)})(i),className:"crudIcon",src:b,alt:"delete icon"})]},i))),Object(c.jsx)(n.b,{to:"/adddocs",children:Object(c.jsx)(D.a,{variant:"contained",color:"primary",className:e.addbutton,children:"ADD MODEL"})})]})};t(98);var J=function(){return Object(c.jsx)(n.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{}),Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.a,{from:"/",to:"/alldocs",exact:!0}),Object(c.jsx)(o.b,{exact:!0,path:"/alldocs",component:S}),Object(c.jsx)(o.b,{exact:!0,path:"/adddocs",component:P}),Object(c.jsx)(o.b,{exact:!0,path:"/finaldoc",component:B}),Object(c.jsx)(o.b,{exact:!0,path:"/create_model",component:_}),Object(c.jsx)(o.b,{exact:!0,path:"/create_api",component:V})]}),Object(c.jsx)(j,{})]})})};t(99);d.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))},45:function(e,a,t){},46:function(e,a,t){},86:function(e,a,t){},93:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.13fac147.chunk.js.map