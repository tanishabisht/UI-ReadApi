(this.webpackJsonpteslahack=this.webpackJsonpteslahack||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){"use strict";t.r(a);var i=t(0),r=t.n(i),s=t(11),n=t.n(s),d=t(15),o=t(13),l=(t(89),t(146)),c=(t(90),t(2)),j=function(){return Object(c.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",variant:"light",children:[Object(c.jsx)(l.a.Brand,{className:"nav_logo",href:"#/alldocs",children:"ReadAPI"}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(c.jsxs)("nav",{className:"ml-auto",children:[Object(c.jsx)(d.b,{activeClassName:"secLinkActive",className:"secLink",to:"/alldocs",children:"ALL DOCUMENTATION"}),Object(c.jsx)(d.b,{activeClassName:"secLinkActive",className:"secLink",to:"/adddocs",children:"ADD DOCUMENTATION"})]})})]})},m=(t(97),function(){return Object(c.jsx)("div",{className:"footer_container",children:Object(c.jsxs)("p",{className:"footer_text text-center",children:["BUILT BY ",Object(c.jsx)("a",{href:"https://github.com/tanishabisht",children:"TANISHA"})," AND ",Object(c.jsx)("a",{href:"https://github.com/ComputerScientist-01",children:"JAY"})]})})}),u=(t(45),t.p+"static/media/iconLink.2f98e9cf.svg"),h=function(e){var a=e.projName,t=e.projDesc;e.editLink;return Object(c.jsxs)("div",{className:"docscard_container",children:[Object(c.jsx)("h2",{children:a}),Object(c.jsx)("p",{children:t}),Object(c.jsx)("p",{style:{textAlign:"right"},children:Object(c.jsx)(d.b,{to:"/finaldoc",children:Object(c.jsx)("img",{className:"linkIcon",src:u,alt:"link"})})})]})},p=t.p+"static/media/iconEdit.10f62b7c.svg",b=t.p+"static/media/iconDelete.6e366819.svg",O=function(e){var a=e.modelName,t=e.schemaArr;return console.log(a,t),Object(c.jsxs)("div",{className:"modelcard_container",children:[Object(c.jsxs)("div",{className:"heading",children:[Object(c.jsx)("h2",{style:{color:"#fff"},children:a}),Object(c.jsxs)("span",{children:[Object(c.jsx)("a",{href:"#",children:Object(c.jsx)("img",{className:"crudIcon",src:p,alt:"edit link"})}),Object(c.jsx)("a",{href:"#",children:Object(c.jsx)("img",{className:"crudIcon",src:b,alt:"delete link"})})]})]}),Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"NAME"}),Object(c.jsx)("th",{children:"TYPE"}),Object(c.jsx)("th",{children:"DUMMY EXAMPLE"})]}),t.map((function(e){var a=e.id,t=e.name,i=e.type,r=e.eg;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:i}),Object(c.jsx)("td",{children:r})]},a)}))]})})]})},x=function(e){var a=e.content;return console.log(a),Object(c.jsx)("div",{className:"gray_container",children:a.map((function(e){var a=e.id,t=e.modelName,i=e.schemaArr;return Object(c.jsx)(O,{modelName:t,schemaArr:i},a)}))})},f=t(136),T=t(148),g=t(149),E=t(141),C=t(77),N=t.n(C),y=Object(f.a)((function(e){return{root:{width:"100%"},heading:{backgroundColor:"#7FA7F1",color:"#fff",margin:e.spacing(1)}}})),A=function(e){e.id;var a=e.httpType,t=e.link,i=e.info,r=e.reqHeader,s=e.reqVal,n=e.resBody,d=e.darkColor,o=e.lightColor,l=y();return Object(c.jsx)("div",{className:l.root,children:Object(c.jsxs)(T.a,{className:l.heading,style:{backgroundColor:"".concat(o)},children:[Object(c.jsx)(g.a,{expandIcon:Object(c.jsx)(N.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(c.jsxs)("div",{className:"api_header",children:[Object(c.jsx)("span",{style:{backgroundColor:"".concat(d)},className:"httpTypeColor",children:a}),Object(c.jsx)("span",{children:t}),Object(c.jsx)("span",{children:i})]})}),Object(c.jsx)(E.a,{children:Object(c.jsxs)("div",{className:"api_body",children:[Object(c.jsx)("span",{children:r}),Object(c.jsx)("span",{children:Object(c.jsx)("span",{style:{backgroundColor:"".concat(d)},className:"reqVal",children:s})}),Object(c.jsx)("span",{className:"resBody",children:n})]})})]})})},v=t.p+"static/media/iconAdd.5e1a98d6.svg",q=function(e){var a=e.modelName,t=e.apiCalls;return Object(c.jsxs)("div",{className:"gray_container",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsx)("h2",{children:a}),Object(c.jsx)(d.b,{to:"/create_api",children:Object(c.jsx)("img",{className:"crudIcon",src:v,alt:"add"})})]}),t.map((function(e){var a=e.id,t=e.httpType,i=e.link,r=e.info,s=e.reqHeader,n=e.reqVal,d=e.resBody,o=e.darkColor,l=e.lightColor;return Object(c.jsx)(A,{id:a,httpType:t,link:i,info:r,reqHeader:s,reqVal:n,resBody:d,darkColor:o,lightColor:l},a)}))]})},k=t(150),D=t(145),I=(t(46),Object(f.a)((function(e){return{textfield:{width:"100%",marginBottom:e.spacing(2)},addbutton:{marginBottom:e.spacing(2)}}}))),P=function(){var e=I();return Object(c.jsx)("div",{className:"container",style:{marginTop:"3rem"},children:Object(c.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(c.jsx)(k.a,{className:e.textfield,id:"project-name",label:"Project Name ...",variant:"outlined"}),Object(c.jsx)(k.a,{className:e.textfield,id:"project-desc",label:"Project Description ...",variant:"outlined",multiline:!0}),Object(c.jsx)("h1",{className:"header",children:"MODELS"}),Object(c.jsx)(d.b,{to:"/create_model",children:Object(c.jsx)(D.a,{variant:"outlined",className:e.addbutton,children:"ADD MODELS"})}),Object(c.jsx)(x,{content:[{id:0,modelName:"MODEL NAME 1",schemaArr:[{id:0,name:"name",type:"String",eg:"Tanisha"},{id:1,name:"name",type:"String",eg:"Tanisha"},{id:2,name:"name",type:"String",eg:"Tanisha"},{id:3,name:"name",type:"String",eg:"Tanisha"}]},{id:1,modelName:"MODEL NAME 2",schemaArr:[{id:0,name:"name",type:"String",eg:"Tanisha"},{id:1,name:"name",type:"String",eg:"Tanisha"},{id:2,name:"name",type:"String",eg:"Tanisha"},{id:3,name:"name",type:"String",eg:"Tanisha"}]}]}),Object(c.jsx)("h1",{className:"header",children:"APIs"}),[{id:0,modelName:"MODEL NAME 1",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]},{id:1,modelName:"MODEL NAME 2",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]},{id:2,modelName:"MODEL NAME 3",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]}].map((function(e){var a=e.id,t=e.modelName,i=e.apiCalls;return Object(c.jsx)(q,{modelName:t,apiCalls:i},a)})),Object(c.jsx)(d.b,{to:"/alldocs",children:Object(c.jsx)(D.a,{variant:"outlined",className:e.addbutton,children:"ADD DOCUMENT"})})]})})},L=Object(f.a)((function(e){return{}})),B=function(){L();return Object(c.jsxs)("div",{className:"container",style:{marginTop:"3rem"},children:[Object(c.jsx)("h1",{className:"header",children:"Project Name"}),Object(c.jsx)("p",{style:{textAlign:"justify"},children:"Project Description inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia"}),Object(c.jsx)("h1",{className:"header",children:"MODELS"}),Object(c.jsx)(x,{content:[{id:0,modelName:"MODEL NAME 1",schemaArr:[{id:0,name:"name",type:"String",eg:"Tanisha"},{id:1,name:"name",type:"String",eg:"Tanisha"},{id:2,name:"name",type:"String",eg:"Tanisha"},{id:3,name:"name",type:"String",eg:"Tanisha"}]},{id:1,modelName:"MODEL NAME 2",schemaArr:[{id:0,name:"name",type:"String",eg:"Tanisha"},{id:1,name:"name",type:"String",eg:"Tanisha"},{id:2,name:"name",type:"String",eg:"Tanisha"},{id:3,name:"name",type:"String",eg:"Tanisha"}]}]}),Object(c.jsx)("h1",{className:"header",children:"APIs"}),[{id:0,modelName:"MODEL NAME 1",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]},{id:1,modelName:"MODEL NAME 2",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]},{id:2,modelName:"MODEL NAME 3",apiCalls:[{id:0,httpType:"GET",link:"/user",info:"To get list of Users",reqHeader:"HEADER",reqVal:"Authorization",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#618CDB",lightColor:"#7FA7F1"},{id:1,httpType:"POST",link:"/user",info:"To add a new User",reqHeader:"URL PARAMS",reqVal:":id >> id of the user",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#3CC299",lightColor:"#6DE0BD"},{id:2,httpType:"PUT",link:"/user/:id",info:"To get list of Users",reqHeader:"FILES",reqVal:"True",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#C67535",lightColor:"#EDA063"},{id:3,httpType:"DELETE",link:"/user/:id",info:"To get list of Users",reqHeader:"URL QUERY",reqVal:"school=CPS/DPS",resBody:"{id:ObjId(12324),username:tanisha}",darkColor:"#B6334C",lightColor:"#E85B76"}]}].map((function(e){var a=e.id,t=e.modelName,i=e.apiCalls;return Object(c.jsx)(q,{modelName:t,apiCalls:i},a)}))]})},S=function(){return Object(c.jsx)("div",{className:"container",children:[{id:0,projName:"PROJECT NAME FOR THE API 1",projDesc:"proj desc for the api \u2026 PROJECT NAME FOR THE API \u2026. proj desc for the api \u2026 PROJECT NAME FOR THE API \u2026. proj desc for the api \u2026 PROJECT NAME FOR THE API \u2026. proj desc for the api \u2026 PROJECT NAME ",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:1,projName:"PROJECT NAME FOR THE API 2",projDesc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arut odit aut fugit",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:2,projName:"PROJECT NAME FOR THE API 3",projDesc:"quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreheill",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:3,projName:"PROJECT NAME FOR THE API 4",projDesc:"m fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat fsdger",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:4,projName:"PROJECT NAME FOR THE API 5",projDesc:"a est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusand",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"},{id:5,projName:"PROJECT NAME FOR THE API 6",projDesc:"s et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",editLink:"/documents/:docId",finalLink:"/documents/final/:docId"}].map((function(e){var a=e.id,t=e.projName,i=e.projDesc,r=e.editLink;return Object(c.jsx)(h,{projName:t,projDesc:i,editLink:r},a)}))})},U=t(63),R=t(144),H=t(152),M=t(147),F=t(153),V=Object(f.a)((function(e){return{textfield:{width:"100%",marginBottom:e.spacing(2)},addbutton:{marginTop:e.spacing(3)}}})),w=function(){var e=V(),a=Object(i.useState)(""),t=Object(U.a)(a,2),r=t[0],s=t[1],n=function(e){return s(e.target.value)};return Object(c.jsxs)("div",{className:"container",style:{marginTop:"3rem",height:"75vh"},children:[Object(c.jsx)("h1",{className:"formHeader",children:"Create API"}),Object(c.jsxs)(R.a,{variant:"outlined",className:e.textfield,children:[Object(c.jsx)(H.a,{id:"http-type",children:"HTTP Type ..."}),Object(c.jsxs)(M.a,{labelId:"http-type",label:"HTTP Type ...",value:r,onChange:n,children:[Object(c.jsx)(F.a,{value:"get",children:"GET"}),Object(c.jsx)(F.a,{value:"post",children:"POST"}),Object(c.jsx)(F.a,{value:"put",children:"PUT"}),Object(c.jsx)(F.a,{value:"patch",children:"PATCH"}),Object(c.jsx)(F.a,{value:"delete",children:"DELETE"})]})]}),Object(c.jsx)(k.a,{className:e.textfield,id:"link",label:"Link ...",variant:"outlined"}),Object(c.jsxs)(R.a,{variant:"outlined",className:e.textfield,children:[Object(c.jsx)(H.a,{id:"reqField",children:"Request Type ..."}),Object(c.jsxs)(M.a,{labelId:"reqField",label:"Request Type ...",value:r,onChange:n,children:[Object(c.jsx)(F.a,{value:"files",children:"Files"}),Object(c.jsx)(F.a,{value:"params",children:"Params"}),Object(c.jsx)(F.a,{value:"queries",children:"Queries"}),Object(c.jsx)(F.a,{value:"header",children:"Header"}),Object(c.jsx)(F.a,{value:"body",children:"Body"})]})]}),Object(c.jsx)(k.a,{className:e.textfield,id:"reqVal",label:"Request Value ...",variant:"outlined",multiline:!0}),Object(c.jsx)(k.a,{className:e.textfield,id:"reqBody",label:"Response Body ...",variant:"outlined",multiline:!0}),Object(c.jsx)(d.b,{to:"/adddocs",children:Object(c.jsx)(D.a,{variant:"contained",color:"primary",className:e.addbutton,children:"ADD API"})})]})},_=t(69),J=Object(f.a)((function(e){return{textfield:{width:"100%",marginBottom:e.spacing(2),marginLeft:e.spacing(2)},addbutton:{marginTop:e.spacing(3)}}})),Y=function(){var e=J(),a={name:"",type:"",dummyExample:""},t=Object(i.useState)([a]),r=Object(U.a)(t,2),s=r[0],n=r[1];return Object(c.jsxs)("div",{className:"container createmodel_container",children:[Object(c.jsx)("h1",{className:"formHeader",children:"Create Model"}),Object(c.jsx)(k.a,{className:e.textfield,id:"http-type",label:"Model Name ...",variant:"outlined"}),Object(c.jsxs)("h2",{className:"formHeader",children:["Schema",Object(c.jsx)("img",{onClick:function(){var e=Object(_.a)(s);e.push(a),n(e)},className:"crudIcon",src:v,alt:"add icon"})]}),s.map((function(a,t){return Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsx)(k.a,{className:e.textfield,id:"schemaName",label:"Schema Name ...",variant:"outlined"}),Object(c.jsx)(k.a,{className:e.textfield,id:"schemaType",label:"Schema Type ...",variant:"outlined"}),Object(c.jsx)(k.a,{className:e.textfield,id:"dummyExample",label:"Schema Dummy Example ...",variant:"outlined"}),Object(c.jsx)("img",{onClick:function(){return function(e){var a=Object(_.a)(s);a.splice(e,1),n(a)}(t)},className:"crudIcon",src:b,alt:"delete icon"})]},t)})),Object(c.jsx)(d.b,{to:"/adddocs",children:Object(c.jsx)(D.a,{variant:"contained",color:"primary",className:e.addbutton,children:"ADD MODEL"})})]})};t(102);var Q=function(){return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.a,{from:"/",to:"/alldocs",exact:!0}),Object(c.jsx)(o.b,{exact:!0,path:"/alldocs",component:S}),Object(c.jsx)(o.b,{exact:!0,path:"/adddocs",component:P}),Object(c.jsx)(o.b,{exact:!0,path:"/finaldoc",component:B}),Object(c.jsx)(o.b,{exact:!0,path:"/create_model",component:Y}),Object(c.jsx)(o.b,{exact:!0,path:"/create_api",component:w})]}),Object(c.jsx)(m,{})]})})};t(103);n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root"))},45:function(e,a,t){},46:function(e,a,t){},90:function(e,a,t){},97:function(e,a,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.7b435f89.chunk.js.map