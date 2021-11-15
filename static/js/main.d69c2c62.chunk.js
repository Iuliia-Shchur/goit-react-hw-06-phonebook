(this["webpackJsonpgoit-react-hw-06-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-06-hooks-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={App:"App_App__3IGEg",title:"App_title__22_Hm"}},16:function(e,t,n){e.exports={label:"Filter_label__3zZhe",input:"Filter_input__3urHx"}},22:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},27:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),o=(n(27),n(12)),i=n.n(o),l=n(17),b=n(6),u=n.n(b),d=n(4),m=n(40),j={addContacts:Object(d.b)("contacts/add",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(m.a)(),name:t,number:n}}})),deleteContacts:Object(d.b)("contacts/delete"),filterChange:Object(d.b)("contacts/filter")},p=n(3),O=function(e){return e.contacts.items},f=function(e){return e.contacts.filter},h=function(e){var t=O(e),n=f(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},x=n(1);var _=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],i=s[1],b=Object(p.c)(O),d=Object(p.b)(),m=function(e){switch(e.target.name){case"name":c(e.target.value);break;case"number":i(e.target.value);break;default:return}},f=function(){c(""),i("")};return Object(x.jsx)("div",{className:u.a.formWrapper,children:Object(x.jsxs)("form",{className:u.a.form,onSubmit:function(e){if(e.preventDefault(),b.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("This contact has already been added to the list");d(j.addContacts({name:n,number:o})),f()},children:[Object(x.jsxs)("label",{className:u.a.label,children:["Name",Object(x.jsx)("input",{className:u.a.input,value:n,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:m})]}),Object(x.jsxs)("label",{className:u.a.label,children:["Number",Object(x.jsx)("input",{className:u.a.input,type:"tel",value:o,name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:m})]}),Object(x.jsx)("button",{className:u.a.button,children:"Add contact"})]})})},C=n(7),v=n.n(C),N=function(){var e=Object(p.c)(h),t=Object(p.b)();return Object(x.jsx)("div",{className:v.a.listWrapper,children:Object(x.jsx)("ul",{className:v.a.list,children:e.map((function(e){var n=e.name,a=e.number,c=e.id;return Object(x.jsxs)("li",{className:v.a.item,children:[Object(x.jsxs)("p",{className:v.a.text,children:[n,":"]}),Object(x.jsx)("p",{className:v.a.text,children:a}),Object(x.jsx)("button",{className:v.a.button,type:"button",onClick:function(){return t(j.deleteContacts(c))},children:"Delete"})]},c)}))})})},g=n(16),k=n.n(g);var y=function(){var e=Object(p.c)(f),t=Object(p.b)();return Object(x.jsxs)("label",{className:k.a.label,children:["Find contacts by name",Object(x.jsx)("input",{className:k.a.input,type:"text",name:"name",value:e,onChange:function(e){return t(j.filterChange(e.target.value))}})]})};var A,w=function(){return Object(x.jsxs)("div",{className:i.a.App,children:[Object(x.jsx)("h1",{className:i.a.title,children:"Phonebook"}),Object(x.jsx)(_,{}),Object(x.jsx)("h2",{className:i.a.title,children:"Contacts"}),Object(x.jsx)(y,{}),Object(x.jsx)(N,{})]})},F=n(19),L=n(11),S=n(20),z=n.n(S),D=n(5),W=n(21),Z=n.n(W),E=n(13),H=n(2),I=n(22),J=Object(d.c)(I,(A={},Object(E.a)(A,j.addContacts,(function(e,t){var n=t.payload;return[].concat(Object(L.a)(e),[n])})),Object(E.a)(A,j.deleteContacts,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),A)),q=Object(d.c)("",Object(E.a)({},j.filterChange,(function(e,t){return t.payload}))),K=Object(H.b)({items:J,filter:q}),T=[].concat(Object(L.a)(Object(d.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[z.a]),B={key:"contacts",storage:Z.a,blacklist:["filter"]},G=Object(d.a)({reducer:{contacts:Object(D.g)(B,K)},middleware:T,devTools:!1}),M=Object(D.h)(G);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(F.a,{persistor:M,children:Object(x.jsx)(p.a,{store:G,children:Object(x.jsx)(w,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={formWrapper:"ContactForm_formWrapper__fyxlr",form:"ContactForm_form__3vLq9",label:"ContactForm_label__2aOyu",input:"ContactForm_input__3XDsO",button:"ContactForm_button__3k6um"}},7:function(e,t,n){e.exports={item:"ContactList_item__1DN1S",text:"ContactList_text__1_4Kq",button:"ContactList_button__1oh6I"}}},[[38,1,2]]]);
//# sourceMappingURL=main.d69c2c62.chunk.js.map