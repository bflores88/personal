(window["webpackJsonpbrenda-web"]=window["webpackJsonpbrenda-web"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports={SideBar:"SideBar_SideBar__3-g60",Open:"SideBar_Open__3c7Ew",Close:"SideBar_Close__2_4B2",Logo:"SideBar_Logo__2eZXv"}},,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__1XByl",Desktop:"Toolbar_Desktop__3inmN"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__1eVc8",active:"NavigationItem_active__3i0Bk"}},,,,,,function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__2YZH7"}},,,function(e,t,a){e.exports={DrawerToggle:"BarToggle_DrawerToggle__Ni9T1"}},function(e,t,a){e.exports={Content:"Layout_Content__4iIFu"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__Vem4f"}},function(e,t,a){e.exports={Box:"Box_Box__1tmez"}},function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=a(12),l=(a(35),a(5)),s=a(6),u=a(8),m=a(7),d=a(9),p=a(10),f=a(16),_=a.n(f),h=a(23),g=a.n(h),E=a(17),b=a.n(E),v=function(e){return r.a.createElement("li",{className:b.a.NavigationItem},r.a.createElement(i.b,{to:e.link,activeClassName:b.a.active,exact:!0},e.children))},B=function(e){return r.a.createElement("ul",{className:g.a.NavigationItems},r.a.createElement(v,{link:"/"},"Home"),r.a.createElement(v,{link:"/about"},"About"),r.a.createElement(v,{link:"/projects"},"Projects"),r.a.createElement(v,{link:"/contact"},"Contact"))},k=a(26),w=a.n(k),j=function(e){return r.a.createElement("div",{onClick:e.clicked,className:w.a.DrawerToggle},r.a.createElement("i",{className:"fas fa-caret-square-down"}))},N=function(e){return r.a.createElement("header",{className:_.a.Toolbar},r.a.createElement(j,{clicked:e.barToggleClicked}),r.a.createElement("nav",{className:_.a.Desktop},r.a.createElement(B,null)))},O=a(27),C=a.n(O),x=a(14),S=a.n(x),T=a(28),y=a.n(T),I=function(e){return e.show?r.a.createElement("div",{className:y.a.Backdrop,onClick:e.clicked}):null},H=function(e){var t=[S.a.SideBar,S.a.Close];return e.open&&(t=[S.a.SideBar,S.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("nav",null,r.a.createElement(B,null))))},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showSideBar:!1},a.sideBarCloseHandler=function(){a.setState({showSideBar:!1})},a.sideBarToggleHandler=function(){a.setState(function(e){return{showSideBar:!e.showSideBar}})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{barToggleClicked:this.sideBarToggleHandler}),r.a.createElement(H,{open:this.state.showSideBar,closed:this.sideBarCloseHandler}),r.a.createElement("main",{className:C.a.Content},this.props.children))}}]),t}(n.Component),F=(a(41),a(29)),A=a.n(F),L=function(e){return r.a.createElement("div",{className:A.a.Box},e.children)},J=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,r.a.createElement("h1",null," Hi, I'm Brenda!")))}}]),t}(n.Component),P=(a(42),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Contact Page")}}]),t}(n.Component)),V=(a(43),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:J,exact:!0}),r.a.createElement(p.a,{path:"/contact",component:P})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=r.a.createElement(i.a,null,r.a.createElement(V,null));c.a.render(W,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[30,1,2]]]);
//# sourceMappingURL=main.5d0ba1a4.chunk.js.map