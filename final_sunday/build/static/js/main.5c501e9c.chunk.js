(this.webpackJsonpfinal_sunday=this.webpackJsonpfinal_sunday||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(5),r=n.n(a),o=(n(52),n(15)),s=(n(53),n(95)),u=n(89),l=n(3),j=Object(s.a)(u.a)({background:"linear-gradient(45deg, #FC766AFF 30%, #5B84B1FF 90%)",border:"none",borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",letterSpacing:"5px"});var d=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(j,{onClick:e.click,disabled:e.dis,children:e.text})})},b=n(92),h=n(93),x=n(96),O=n(40),p=n.n(O),f=n(94),g=n(91),m=Object(g.a)({iconB:{backgroundColor:"rgb(241, 241, 241)",position:"absolute",top:"0",right:"0",margin:"20px","&:hover":{backgroundColor:"grey",color:"white"},"&:media (max-width: 1100px)":{}},icon:{fontSize:"45px","@media (max-width: 1024px)":{fontSize:"35px"},"@media (max-width: 768px)":{fontSize:"30px"}}}),v=["Home","About","Contact","Cats"];var S=function(){var e=m(),t=i.a.useState(null),n=Object(o.a)(t,2),c=n[0],a=n[1],r=Boolean(c),s=function(){a(null)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(b.a,{className:e.iconB,"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},children:Object(l.jsx)(p.a,{className:e.icon})}),Object(l.jsx)(h.a,{id:"long-menu",anchorEl:c,keepMounted:!0,open:r,onClose:s,PaperProps:{style:{maxHeight:216,width:"20ch"}},children:v.map((function(e){return Object(l.jsx)(x.a,{selected:"Pyxis"===e,onClick:s,children:e},Object(f.a)())}))})]})};var C=function(){return Object(l.jsx)("div",{children:"Loading..."})};var k=function(e){var t=e.res,n=Object(c.useState)(!1),i=Object(o.a)(n,2),a=i[0],r=i[1];return Object(l.jsxs)("div",{className:"post",children:[Object(l.jsx)("h3",{children:t.title}),Object(l.jsxs)("p",{children:["Author: ",t.author]}),a?Object(l.jsx)("p",{children:t.description}):Object(l.jsx)(d,{click:function(){return r(!0)},text:"Show More"})]})};var y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!0),r=Object(o.a)(a,2),s=r[0],u=r[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),h=b[0],x=b[1],O=Object(c.useState)(!0),p=Object(o.a)(O,2),g=p[0],m=p[1],v=Object(c.useState)(""),y=Object(o.a)(v,2),w=(y[0],y[1]);return Object(c.useEffect)((function(){u(!1),fetch("./data/data.json").then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return i(null)})).finally((function(){return u(!0)}))}),[]),Object(l.jsxs)("div",{className:"homepage",children:[Object(l.jsx)(S,{}),Object(l.jsx)("h1",{children:"Title"}),s?n?n.map((function(e){return Object(l.jsx)(k,{res:e},Object(f.a)())})):Object(l.jsx)("div",{children:"Cant show data"}):Object(l.jsx)(C,{}),s&&g&&Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"Email:"}),Object(l.jsx)("input",{type:"email",placeholder:"Email",onChange:function(e){return x(e.target.value)}}),Object(l.jsx)(d,{text:"Subscribe",dis:!h.includes("."),click:function(){return fetch("./data/data.json",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:h})}).then((function(e){return w(!0)})).catch((function(e){return w(!1)})).finally((function(){return setTimeout(m(!1),5e3)})),void console.log(h)}})]})]})};var w=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(y,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),F()}},[[62,1,2]]]);
//# sourceMappingURL=main.5c501e9c.chunk.js.map