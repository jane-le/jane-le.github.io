(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n.p+"static/media/resume.fe58b9ac.pdf"},43:function(e,t,n){e.exports=n.p+"static/media/portrait.017dbe4b.jpg"},50:function(e,t,n){e.exports=n(85)},57:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(38),o=n.n(i),c=(n(55),n(56),n(57),n(27)),l=n(14),u=n(3),s=n(4),p=n(6),f=n(5),d=n(7),h=n(13),m=n(1),b=n(47),g=n(32),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).width=function(){return n.container.current.offsetWidth},n.height=function(){return n.container.current.offsetHeight},n.container=r.a.createRef(),n.state={path:""},n.defaults={height:20,amplitude:20,speed:.25,points:3},n.options=Object(g.a)({},e.options,n.defaults),n.lastUpdate=0,n.elapsed=0,n.step=0,n.update=n.update.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"calculateWavePoints",value:function(){for(var e=[],t=0;t<=Math.max(this.options.points,1);t++){var n=t/this.options.points*this.width(),a=(this.step+(t+t%this.options.points))*this.options.speed*100,r=Math.sin(a/100)*this.options.amplitude,i=Math.sin(a/100)*r+this.options.height;e.push({x:n,y:i})}return e}},{key:"buildPath",value:function(e){var t="M ".concat(e[0].x," ").concat(e[0].y),n={x:(e[1].x-e[0].x)/2,y:e[1].y-e[0].y+e[0].y+(e[1].y-e[0].y)},a=function(e,t){return" C ".concat(e.x," ").concat(e.y," ").concat(e.x," ").concat(e.y," ").concat(t.x," ").concat(t.y)};t+=a(n,e[1]);for(var r=n,i=1;i<e.length-1;i++)t+=a(r={x:e[i].x-r.x+e[i].x,y:e[i].y-r.y+e[i].y},e[i+1]);return t+=" L ".concat(this.width()," ").concat(this.height()),t+=" L 0 ".concat(this.height()," Z")}},{key:"redraw",value:function(){this.setState({path:this.buildPath(this.calculateWavePoints())})}},{key:"draw",value:function(){if(!this.props.paused){var e=new Date;this.elapsed+=e-this.lastUpdate,this.lastUpdate=e}this.step=this.elapsed*Math.PI/1e3,this.redraw()}},{key:"update",value:function(){this.draw(),this.frameId&&this.resume()}},{key:"resume",value:function(){this.frameId=window.requestAnimationFrame(this.update),this.lastUpdate=new Date}},{key:"componentDidUpdate",value:function(e){var t=this,n=function(e){"undefined"===typeof t.props.options?t.options[e]=t.defaults[e]:t.options[e]!==t.props.options[e]&&("undefined"===typeof t.props.options[e]?t.options[e]=t.defaults[e]:t.options[e]=t.props.options[e])};n("height"),n("amplitude"),n("speed"),n("points")}},{key:"componentDidMount",value:function(){this.frameId||this.resume()}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.frameId),this.frameId=0}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,a=e.fill,i=(e.paused,e.options,e.children),o=e.id,c=Object(b.a)(e,["style","className","fill","paused","options","children","id"]);return r.a.createElement("div",{style:Object(g.a)({width:"100%",display:"inline-block"},t),className:n,id:o,ref:this.container},r.a.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i,r.a.createElement("path",Object.assign({d:this.state.path,fill:a},c))))}}]),t}(a.Component);v.defaultProps={paused:!1};var y=v,O={socialIconSize:"25px",cardBackgroundColor:"#FFFFFF",cardPrimaryHeight:"200px",cardPrimaryWidth:"40%",cardHeight:"200px",cardWidth:"30%",cardLineColor:"#3C00B2",textColor:"black",defaultTheme:{colorBackground:"#FFFFFF",colorPrimary:"#3C00B2",textColor:"#000000",font:"Karla",colorAccent:"#3C00B2"},darkTheme:{colorBackground:"#202040",colorPrimary:"#602080",textColor:"#FFFFFF",font:"Karla",colorAccent:"#ffcc00"}},j=n(2),x={githubLink:"https://github.com/jane-le",githubTooltip:"View my projects on Github!",linkedinLink:"https://www.linkedin.com/in/janelamle/",linkedinTooltip:"Here's my LinkedIn!",resumeTooltip:"Check out my resume!",resume:"data",about:{title:"Hey there!\ud83d\udc4b",subtitle:"I'm a ",description:"I have a passion for software development with a soft spot for the end-user. I enjoy leading projects, crafting elegant solutions, and having fun while doing it. Specializing in web/android development, I'm eager to apply my skills and be impactful! "},aboutLoop:["software developer.","mother of two cats.","tetris dominator.","frequent tea drinker.","boiled eggs enthusiast.","sometimes volleyball player.","loser for romcoms."],projects:[{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"},{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"},{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"}],footer:"Jane Le 2020 | Built with \u2764\ufe0f!",darkMode:"click here dark mode",defaultMode:"click here light mode"},E=n(46);function k(){var e=Object(m.a)(["\n        color: ","\n    "]);return k=function(){return e},e}function w(){var e=Object(m.a)(["\n        margin: 0; \n        padding: 0;\n        font-family: ",";\n        font-size: 16px;\n        line-height: 20px;\n        color: ",";\n    "]);return w=function(){return e},e}function C(){var e=Object(m.a)(["\n        margin: 0; \n        font-family: ",";\n        font-size: 24px;\n        line-height: 28px;\n        color: ",";\n    "]);return C=function(){return e},e}function P(){var e=Object(m.a)(["\n        margin: 0; \n        padding: 0;\n        font-family: ",";\n        font-size: 14px;\n        text-align: center;\n        color: ",";\n    \n    "]);return P=function(){return e},e}function L(){var e=Object(m.a)(["\n        margin-top: 20px;\n        margin-bottom: 10px;\n        padding: 0;\n        border-top: 1px solid ",";\n        padding-top: 15px;\n        \n    "]);return L=function(){return e},e}function z(){var e=Object(m.a)(["\n        background: ",";\n        color: ",";\n        flex-direction: column;\n        display: flex; \n        align-items: left;\n        overflow: hidden; \n        border-radius: 30px;\n        opacity: 100%;\n        padding: 10vh;\n        margin: 30px;\n        box-shadow: 1px 1px 8px ",";\n        height: ",";\n        width: ",";\n        @media screen and (max-width: 767px) {\n            height: 55vh;\n            width: 25vh;\n        }\n        \n    "]);return z=function(){return e},e}var F=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.subtitle,a=e.description,i=e.isPrimary,o=e.colorTheme,c=j.a.div(z(),o.colorBackground,o.textColor,o.colorBackground,i?O.cardPrimaryHeight:O.cardHeight,i?O.cardPrimaryWidth:O.cardWidth),l=j.a.hr(L(),o.colorPrimary),u=j.a.p(P(),o.font,o.textColor),s=j.a.h2(C(),o.font,o.textColor),p=j.a.h3(w(),o.font,o.textColor),f=Object(j.a)(E.a)(k(),o.colorAccent);return r.a.createElement(c,null,r.a.createElement(s,null,t),r.a.createElement(p,null,n,i?r.a.createElement(f,{children:x.aboutLoop}):r.a.createElement(p,null)),r.a.createElement(l,null),r.a.createElement(u,null,a))}}]),t}(a.Component);function R(){var e=Object(m.a)(["\n      color: #FFFFFF;\n      font-family: ",";\n      margin:0;\n      padding: 10px;\n      font-size: 12px;\n      position: absolute; \n      bottom: 0;\n    "]);return R=function(){return e},e}function M(){var e=Object(m.a)(["\n      color: ",";\n      font-family: ",";\n      margin:0;\n      font-size: 34px;\n      font-weight: bold;\n    "]);return M=function(){return e},e}function D(){var e=Object(m.a)(["\n      background-attachment: fixed; \n      background: ",";\n      width: 100%;\n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      height: 100vh;\n      position: relative;\n      justify-content: center;\n    "]);return D=function(){return e},e}var H=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.colorTheme,t=j.a.div(D(),e.colorPrimary),n=j.a.h1(M(),e.colorAccent,e.font),a=j.a.h1(R(),e.font);return r.a.createElement(t,null,r.a.createElement(n,null,"Me"),r.a.createElement(F,{colorTheme:e,description:x.about.description,title:x.about.title,subtitle:x.about.subtitle,isPrimary:!0}),r.a.createElement(a,null,x.footer))}}]),t}(a.Component);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T=r.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),B=function(e){var t=e.svgRef,n=A(e,["svgRef"]);return r.a.createElement("svg",I({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512",ref:t},n),T)},S=r.a.forwardRef(function(e,t){return r.a.createElement(B,I({svgRef:t},e))});n.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N=r.a.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}),U=function(e){var t=e.svgRef,n=W(e,["svgRef"]);return r.a.createElement("svg",V({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},n),N)},J=r.a.forwardRef(function(e,t){return r.a.createElement(U,V({svgRef:t},e))});n.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var K=r.a.createElement("path",{fill:"currentColor",d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}),G=function(e){var t=e.svgRef,n=q(e,["svgRef"]);return r.a.createElement("svg",_({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"file",className:"svg-inline--fa fa-file fa-w-12",role:"img",viewBox:"0 0 384 512",ref:t},n),K)},Z=r.a.forwardRef(function(e,t){return r.a.createElement(G,_({svgRef:t},e))}),Q=(n.p,n(15)),X=n.n(Q),Y=n(42),$=n.n(Y);function ee(){var e=Object(m.a)(["\n    border: 1px solid ",";\n    transition: all .1s ease;\n    &:hover {\n      background: ",";\n      color: white;\n    }\n    display: inline-block;\n    padding: 10px;\n    border-radius: 50px;\n    margin: 8px;\n    color: ",";\n    height: ",";\n    width: ",";\n  "]);return ee=function(){return e},e}function te(){var e=Object(m.a)(["\n  list-style: none;\n  display: inline-flex;\n  margin: 0;\n  padding: 0;\n"]);return te=function(){return e},e}var ne=j.a.ul(te()),ae=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.width,a=e.theme,i=j.a.a(ee(),a.colorPrimary,a.colorPrimary,a.colorPrimary,n,n);return r.a.createElement(ne,null,r.a.createElement("li",null,r.a.createElement(i,{"data-tip":t.githubTooltip,target:"_blank",href:t.githubLink},r.a.createElement(S,{height:n,width:n})),r.a.createElement(X.a,{"aria-haspopup":"true"})),r.a.createElement("li",null,r.a.createElement(i,{"data-tip":t.resumeTooltip,target:"_blank",href:$.a},r.a.createElement(Z,{height:n,width:n})),r.a.createElement(X.a,{"aria-haspopup":"true"})),r.a.createElement("li",null,r.a.createElement(i,{"data-tip":t.linkedinTooltip,target:"_blank",href:t.linkedinLink},r.a.createElement(J,{height:n,width:n})),r.a.createElement(X.a,{"aria-haspopup":"true"})))}}]),t}(a.Component),re=n(43),ie=n.n(re);function oe(){var e=Object(m.a)(["\n            width: 300px;\n        \n        "]);return oe=function(){return e},e}function ce(){var e=Object(m.a)(["\n            width: 100%;\n            display: flex;\n            flex-direction: column; \n            align-items: center;\n            height: 100%;\n            justify-content: center;\n            position: fixed;\n        "]);return ce=function(){return e},e}function le(){var e=Object(m.a)(["\n            color: ",";\n            font-family: ",";\n            font-weight: bold;\n            margin:0;\n            padding: 30px;\n            font-size: 58px;\n            cursor: pointer;\n            z-index: 100;\n            letter-spacing: 15px;\n        "]);return le=function(){return e},e}var ue=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.theme,a=j.a.a(le(),n.colorAccent,n.font),i=j.a.div(ce()),o=j.a.img(oe());return r.a.createElement(i,null,r.a.createElement(a,{"data-tip":!0,"data-for":"Tooltip"},"Jane Le"),r.a.createElement(X.a,{place:"right",id:"Tooltip"},r.a.createElement(o,{src:ie.a})),r.a.createElement(ae,{theme:n,data:t,width:n.socialIconSize}))}}]),t}(a.Component);function se(){var e=Object(m.a)(["\n      position: fixed; \n      padding: 10px;\n      top: 0;\n      right: 0; \n      color: black;\n      cursor: pointer;\n      font-family: ",";\n      z-index: 100;\n      font-size: 16px;\n      color: ","\n    "]);return se=function(){return e},e}function pe(){var e=Object(m.a)(["\n      width: 100%;\n      height: 100%;\n      background: ","\n    "]);return pe=function(){return e},e}function fe(){var e=Object(m.a)(["\n  margin-top: 80vh;\n  position: relative;\n"]);return fe=function(){return e},e}var de=Object(j.a)(y)(fe()),he=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={isDarkMode:!1},n.handleDarkClick=n.handleDarkClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleDarkClick",value:function(){this.setState({isDarkMode:!this.state.isDarkMode})}},{key:"render",value:function(){var e=this.state.isDarkMode,t=e?O.darkTheme:O.defaultTheme,n=j.a.div(pe(),t.colorBackground),a=j.a.a(se(),t.font,t.textColor);return r.a.createElement(n,null,r.a.createElement(a,{onClick:this.handleDarkClick},e?x.defaultMode:x.darkMode),r.a.createElement(ue,{data:x,theme:t}),r.a.createElement(de,{fill:t.colorPrimary}),r.a.createElement(H,{colorTheme:t}))}}]),t}(a.Component);function me(){var e=Object(m.a)(["\n  color: ",";\n  font-family: ",";\n  margin:0;\n  padding: 10px;\n  font-size: 34px;\n  font-weight: bold;\n"]);return me=function(){return e},e}function be(){var e=Object(m.a)(["\n    background-attachment: fixed; \n    background: ",";\n    width: 100%;\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    min-height: 100%;\n    padding-top: 5vh;\n    position: relative;\n"]);return be=function(){return e},e}var ge=j.a.div(be(),O.colorPrimary),ve=j.a.h1(me(),O.colorBackground,O.font),ye=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(ge,null,r.a.createElement(ve,null,"Projects"),x.projects.map(function(e){return r.a.createElement(F,{description:e.description,title:e.title,subtitle:e.subtitle,isPrimary:!1})}))}}]),t}(a.Component),Oe=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Resume"))}}]),t}(a.Component),je=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"))}}]),t}(a.Component),xe=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:he}),r.a.createElement(l.a,{path:"/projects",component:ye}),r.a.createElement(l.a,{path:"/resume",component:Oe}),r.a.createElement(l.a,{path:"/contact",component:je}))};var Ee=document.getElementById("root");o.a.render(r.a.createElement(c.a,null,r.a.createElement(function(){return r.a.createElement(xe,null)},null)),Ee)}},[[50,1,2]]]);
//# sourceMappingURL=main.9cc6b85c.chunk.js.map