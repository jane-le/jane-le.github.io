(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(58),o=n(21),i=n(0),c=n.n(i),l=n(47),s=n.n(l),u=(n(69),n(70),n(71),n(57)),p=n(2),f={githubLink:"https://github.com/jane-le",githubTooltip:"View my projects on Github!",linkedinLink:"https://www.linkedin.com/in/janelamle/",linkedinTooltip:"Here's my LinkedIn!",resumeTooltip:"Check out my resume!",resume:"data",mailLink:"mailto:j39le@edu.uwaterloo.ca",mailTooltip:"Shoot me an email!",headerSubtitle:"Software Developer",about:{title:"Hey there!\ud83d\udc4b",subtitle:"I'm a ",description:"Hiya! I study Mechatronics Engineering student at UWaterloo and have a passion for software development. I've interned at <b>Bunch</b>, <b>Zynga</b>, <b>Climax Media</b> and <b>Siemens Healthineers</b>. Aside from code, I'm obsessed with houseplants and farming games like Stardew Valley! <br>I enjoy conversations about tech and games, please don't hesitate to reach out \ud83d\ude38."},aboutLoop:["software developer.","mother of two cats.","tetris champ.","frequent tea drinker.","boiled eggs enthusiast.","sometimes volleyball player.","loser for romcoms.","plant mom.","rookie boulderer."],projects:[{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"},{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"},{title:"PLACEHODLER",subtitle:"PLACEHOLDER",description:"PLACEHOLDER"}],footer:"Jane Le 2020 | Built with \ud83c\udf55",darkMode:"lights off \ud83c\udf19",defaultMode:"lights on \u2600\ufe0f",catPhotos:[n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),n(80),n(81),n(82),n(83),n(84),n(85),n(86),n(87),n(88)],catBtnText:"spawn cat pic \ud83d\ude3a"},d={socialIconSize:"50px",cardBackgroundColor:"#FFFFFF",cardPrimaryHeight:"200px",cardPrimaryWidth:"40%",cardHeight:"200px",cardWidth:"30%",cardLineColor:"#3C00B2",textColor:"black",defaultTheme:{colorBackground:"#F5F3F5",colorPrimary:"#588068",textColor:"#1F3B2C",font:"Karla",colorAccent:"#1F3B2C"},darkTheme:{colorBackground:"#202040",colorPrimary:"#602080",textColor:"#FFFFFF",font:"Karla",colorAccent:"#ffcc00"}},m=n(34),h=n(6),b=n(7),g=n(9),y=n(8),v=n(10),j=n(62),O=n(35),x=n(20),E="",w=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).width=function(){return n.container.current.offsetWidth},n.height=function(){return n.container.current.offsetHeight},n.container=c.a.createRef(),n.state={path:E},n.defaults={height:30,amplitude:20,speed:.4,points:3},n.options=Object(O.a)({},e.options,n.defaults),n.lastUpdate=0,n.elapsed=0,n.step=0,n.update=n.update.bind(Object(x.a)(Object(x.a)(n))),n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"calculateWavePoints",value:function(){for(var e=[],t=0;t<=Math.max(this.options.points,1);t++){var n=t/this.options.points*this.width(),a=(this.step+(t+t%this.options.points))*this.options.speed*100,r=Math.sin(a/100)*this.options.amplitude,o=Math.sin(a/100)*r+this.options.height;e.push({x:n,y:o})}return e}},{key:"buildPath",value:function(e){var t="M ".concat(e[0].x," ").concat(e[0].y),n={x:(e[1].x-e[0].x)/2,y:e[1].y-e[0].y+e[0].y+(e[1].y-e[0].y)},a=function(e,t){return" C ".concat(e.x," ").concat(e.y," ").concat(e.x," ").concat(e.y," ").concat(t.x," ").concat(t.y)};t+=a(n,e[1]);for(var r=n,o=1;o<e.length-1;o++)t+=a(r={x:e[o].x-r.x+e[o].x,y:e[o].y-r.y+e[o].y},e[o+1]);return t+=" L ".concat(this.width()," ").concat(this.height()),t+=" L 0 ".concat(this.height()," Z")}},{key:"redraw",value:function(){this.setState({path:this.buildPath(this.calculateWavePoints())})}},{key:"draw",value:function(){if(!this.props.paused){var e=new Date;this.elapsed+=e-this.lastUpdate,this.lastUpdate=e}this.step=this.elapsed*Math.PI/1e3,this.redraw()}},{key:"update",value:function(){this.draw(),this.frameId&&this.resume()}},{key:"resume",value:function(){this.frameId=window.requestAnimationFrame(this.update),this.lastUpdate=new Date}},{key:"componentDidUpdate",value:function(e){var t=this,n=function(e){"undefined"===typeof t.props.options?t.options[e]=t.defaults[e]:t.options[e]!==t.props.options[e]&&("undefined"===typeof t.props.options[e]?t.options[e]=t.defaults[e]:t.options[e]=t.props.options[e])};n("height"),n("amplitude"),n("speed"),n("points")}},{key:"componentDidMount",value:function(){this.frameId||this.resume()}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.frameId),this.frameId=0,E=this.buildPath(this.calculateWavePoints())}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,a=e.fill,r=(e.paused,e.options,e.children),o=e.id,i=Object(j.a)(e,["style","className","fill","paused","options","children","id"]);return c.a.createElement("div",{style:Object(O.a)({width:"100%",display:"inline-block"},t),className:n,id:o,ref:this.container},c.a.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r,c.a.createElement("path",Object.assign({d:this.state.path,fill:a},i))))}}]),t}(i.Component);w.defaultProps={paused:!1};var k=w,C=n(59),P=n(123),L=n(124),F=n(125),z=n(126),I=n(48),M=n.n(I),S=n(49),T=n.n(S),A="https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1&offset=0",H="BQDCp2kAbRDOcUCs9PZygaEhkrhs3BnfD2bjbDKrNbz715FKrqQQjIF_nQlhCKALcEuWIozLmvEAocvjgBS2YZmIOSVqvaaf9zGlp_Y4LIgQTJ11p27HP28MsussVd7Bb28_IB7a3abS1_zypWxtHmcVD7OBhL7oGFW74Xez7HacLDSOAng";var R=function(e){var t={title:{margin:0,fontFamily:"Karla",fontSize:"18px",lineHeight:"28px"},name:{margin:0,fontFamily:"Karla",fontSize:"22px",lineHeight:"28px",fontWeight:"bold",color:e.props.colorAccent},main:{padding:0,margin:0},colCenter:{display:"flex",flexDirection:"column",justifyContent:"center"}},n=Object(i.useState)(null),a=Object(o.a)(n,2),r=a[0],l=a[1];return Object(i.useEffect)(function(){T()({method:"GET",url:A,headers:{Authorization:"Bearer ".concat(H),Accept:"application/json","Content-Type":"application/json"}}).then(function(e){var t=e.data.items[0],n={name:t.name,artwork:t.album.images[0].url,artist:t.artists[0].name,spotifyLink:t.external_urls.spotify};l(n)})},[]),r?c.a.createElement(P.a,{style:t.main},c.a.createElement("h2",{style:t.title},"Fun fact! My most played track on Spotify this past month was:"),c.a.createElement(L.a,null,c.a.createElement(F.a,{style:{padding:"2rem 2rem 0 2rem"},md:3},c.a.createElement(z.a,{src:r.artwork,fluid:!0})),c.a.createElement(F.a,{style:t.colCenter,md:9},c.a.createElement("a",{href:r.spotifyLink},c.a.createElement("h2",{style:t.name},r.name)),c.a.createElement("h3",{style:t.title},r.artist)))):null};function B(){var e=Object(a.a)(["\n        color: ",";\n        word-break: break-word;\n        word-wrap: break-word;\n    "]);return B=function(){return e},e}function D(){var e=Object(a.a)(["\n        font-family: ",";\n        font-size: 24px;\n        line-height: 20px;\n        color: ",";\n        margin-top: 0.5rem;\n    "]);return D=function(){return e},e}function V(){var e=Object(a.a)(["\n        margin: 0; \n        font-family: ",";\n        font-size: 32px;\n        line-height: 28px;\n        color: ",";\n    "]);return V=function(){return e},e}function _(){var e=Object(a.a)(["\n        margin: 0; \n        padding: 0;\n        font-family: ",";\n        font-size: 18px;\n        color: ",";\n    \n    "]);return _=function(){return e},e}function W(){var e=Object(a.a)(["\n        margin-top: 20px;\n        margin-bottom: 10px;\n        padding: 0;\n        border-top: 1px solid ",";\n        padding-top: 15px;\n        \n    "]);return W=function(){return e},e}var N=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.subtitle,a=e.isPrimary,r=e.colorTheme,o=p.a.hr(W(),r.colorPrimary),i=p.a.p(_(),r.font,r.textColor),l=p.a.h2(V(),r.font,r.textColor),s=p.a.h3(D(),r.font,r.textColor),u=Object(p.a)(C.a)(B(),r.colorAccent),d={container:{background:r.colorBackground,color:r.textColor,padding:"4rem"},content:{padding:"3rem 3rem 0 3rem",textAlgin:"left"}};return c.a.createElement(P.a,{style:d.container},c.a.createElement(L.a,{className:"justify-content-md-center"},c.a.createElement(F.a,{md:4,xs:12,style:{padding:0}},c.a.createElement(z.a,{fluid:!0,src:M.a})),c.a.createElement(F.a,{md:8,xs:12,style:d.content},c.a.createElement(l,null,t),c.a.createElement(s,null,n,a?c.a.createElement(u,{children:f.aboutLoop}):c.a.createElement(s,null)),c.a.createElement(o,null),c.a.createElement(i,null,"Hiya! I study Mechatronics Engineering at UWaterloo and have a passion for software development. I've interned at ",c.a.createElement("b",null,"Bunch"),", ",c.a.createElement("b",null,"Zynga"),", ",c.a.createElement("b",null,"Climax Media")," and ",c.a.createElement("b",null,"Siemens Healthineers"),"."),c.a.createElement("br",null),c.a.createElement(i,null,"Aside from code, I'm obsessed with houseplants and farming games like Stardew Valley! I enjoy conversations about tech and pretty much anything else, please don't hesitate to reach out \ud83d\ude38."),c.a.createElement("br",null),c.a.createElement(R,{props:r}))))}}]),t}(i.Component);function U(){var e=Object(a.a)(["\n      color: #FFFFFF;\n      font-family: ",";\n      margin:0;\n      padding: 10px;\n      font-size: 12px;\n      position: absolute; \n      bottom: 0;\n    "]);return U=function(){return e},e}function K(){var e=Object(a.a)(["\n      background-attachment: fixed; \n      background: ",";\n      display: flex;\n\n      align-items: center;\n      height: 100vh;\n      @media only screen and (max-width: 600px) {\n        height: unset;\n      }\n      position: relative;\n      justify-content: center;\n    "]);return K=function(){return e},e}var J=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.colorTheme,t=p.a.div(K(),e.colorPrimary),n=p.a.h1(U(),e.font);return c.a.createElement(t,null,c.a.createElement(N,{colorTheme:e,title:f.about.title,subtitle:f.about.subtitle,isPrimary:!0}),c.a.createElement(n,null,f.footer))}}]),t}(i.Component);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q=c.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),G=function(e){var t=e.svgRef,n=Z(e,["svgRef"]);return c.a.createElement("svg",Q({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512",ref:t},n),q)},Y=c.a.forwardRef(function(e,t){return c.a.createElement(G,Q({svgRef:t},e))});n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ee=c.a.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}),te=function(e){var t=e.svgRef,n=$(e,["svgRef"]);return c.a.createElement("svg",X({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14",role:"img",viewBox:"0 0 448 512",ref:t},n),ee)},ne=c.a.forwardRef(function(e,t){return c.a.createElement(te,X({svgRef:t},e))});n.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var oe=c.a.createElement("path",{fill:"currentColor",d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"}),ie=function(e){var t=e.svgRef,n=re(e,["svgRef"]);return c.a.createElement("svg",ae({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"file",className:"svg-inline--fa fa-file fa-w-12",role:"img",viewBox:"0 0 384 512",ref:t},n),oe)},ce=c.a.forwardRef(function(e,t){return c.a.createElement(ie,ae({svgRef:t},e))});n.p;function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ue=c.a.createElement("path",{fill:"currentColor",d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}),pe=function(e){var t=e.svgRef,n=se(e,["svgRef"]);return c.a.createElement("svg",le({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),ue)},fe=c.a.forwardRef(function(e,t){return c.a.createElement(pe,le({svgRef:t},e))}),de=(n.p,n(16)),me=n(53),he=n.n(me);function be(){var e=Object(a.a)(["\n    border: 1px solid ",";\n    transition: all .1s ease;\n    &:hover {\n      background: ",";\n      color: white;\n      transform: scale(1.2);\n    }\n    display: inline-block;\n    margin: 1.5rem;\n    color: ",";\n    height: ",";\n    width: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);return be=function(){return e},e}function ge(){var e=Object(a.a)(["\n  list-style: none;\n  display: inline-flex;\n  margin: 0;\n  padding: 0;\n"]);return ge=function(){return e},e}var ye=p.a.ul(ge()),ve=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=(e.width,e.theme),a=p.a.a(be(),n.colorAccent,n.colorAccent,n.colorAccent,this.props.width,this.props.width),r={icons:{height:"30px",width:"30px"}};return c.a.createElement(ye,null,c.a.createElement("li",null,c.a.createElement(a,{"data-tip":t.githubTooltip,target:"_blank",href:t.githubLink},c.a.createElement(Y,{style:r.icons})),c.a.createElement(de.a,{"aria-haspopup":"true"})),c.a.createElement("li",null,c.a.createElement(a,{"data-tip":t.resumeTooltip,target:"_blank",href:he.a},c.a.createElement(ce,{style:r.icons})),c.a.createElement(de.a,{"aria-haspopup":"true"})),c.a.createElement("li",null,c.a.createElement(a,{"data-tip":t.linkedinTooltip,target:"_blank",href:t.linkedinLink},c.a.createElement(ne,{style:r.icons})),c.a.createElement(de.a,{"aria-haspopup":"true"})),c.a.createElement("li",null,c.a.createElement(a,{"data-tip":t.mailTooltip,href:t.mailLink},c.a.createElement(fe,{style:r.icons})),c.a.createElement(de.a,{"aria-haspopup":"true"})))}}]),t}(i.Component),je=n(54),Oe=n.n(je);function xe(){var e=Object(a.a)(["\n            width: 300px;\n        \n        "]);return xe=function(){return e},e}function Ee(){var e=Object(a.a)(["\n            width: 100%;\n            display: flex;\n            flex-direction: column; \n            align-items: center;\n            height: 95%;\n            justify-content: center;\n            position: fixed;\n        "]);return Ee=function(){return e},e}function we(){var e=Object(a.a)(["\n            color: ",";\n            font-family: ",";\n            margin:0;\n            padding: 0;\n            font-size: 22px;\n            z-index: 100;\n            word-break: break-word;\n            text-align: center;\n            @media screen and (max-width: 767px) {\n                width: 300px;\n                font-size: 18px;\n            }\n        "]);return we=function(){return e},e}function ke(){var e=Object(a.a)(["\n            color: ",";\n            font-family: ",";\n            font-weight: bold;\n            margin:0;\n            font-size: 58px;\n            cursor: pointer;\n            z-index: 100;\n            letter-spacing: 15px;\n\n            &:hover {\n                color: ",";\n                text-decoration: none;\n            }\n        "]);return ke=function(){return e},e}var Ce=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.colorTheme,a=p.a.a(ke(),n.colorAccent,n.font,n.colorAccent),r=p.a.h1(we(),n.colorAccent,n.font),o=p.a.div(Ee()),i=p.a.img(xe());return c.a.createElement(o,null,c.a.createElement(a,{"data-tip":!0,"data-for":"Tooltip"},"Jane Le"),c.a.createElement(de.a,{place:"right",id:"Tooltip"},c.a.createElement(i,{src:Oe.a})),c.a.createElement(r,null,t.headerSubtitle),c.a.createElement(ve,{theme:n,data:t,width:d.socialIconSize}))}}]),t}(i.Component);function Pe(){var e=Object(a.a)(["\n      width: 100%;\n      height: 100%;\n      background: ","\n    "]);return Pe=function(){return e},e}function Le(){var e=Object(a.a)(["\n  margin-top: 80vh;\n  position: relative;\n"]);return Le=function(){return e},e}var Fe=Object(p.a)(k)(Le()),ze=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.colorTheme,n=e.data,a=p.a.div(Pe(),t.colorBackground);return c.a.createElement(a,null,c.a.createElement(Ce,{data:n,colorTheme:t}),c.a.createElement(Fe,{fill:t.colorPrimary}),c.a.createElement(J,{colorTheme:t}))}}]),t}(i.Component);n(116);function Ie(){var e=Object(a.a)(["\n    font-family: ",";\n    &:hover {\n      transform: scale(1.1);\n      color: ",";\n      background: #FFFFFF;\n    }\n    background: ",";\n    border: 1px solid ",";\n  "]);return Ie=function(){return e},e}var Me=m.b.img({enter:{opacity:1},exit:{opacity:0}});function Se(e){var t=e.id,n=e.imageIndex,a=e.deleteImage,r=function(){return a(t)};Object(i.useEffect)(function(){var e=setTimeout(r,3e3);return function(){return clearTimeout(e)}},[]);var o={top:Math.floor(40*Math.random()+5).toString().concat("vh"),right:Math.floor(80*Math.random()).toString().concat("vw")};return c.a.createElement(m.a,null,c.a.createElement(Me,{className:"cat-image fade-in",style:o,key:"catImage",src:f.catPhotos[n]}))}var Te=0,Ae=d.defaultTheme,He=f.darkMode;function Re(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],l=Object(i.useState)([]),s=Object(o.a)(l,2),u=s[0],m=s[1],h=function(e){return a(function(t){return t.filter(function(t){return t.id!==e})})},b=p.a.a(Ie(),Ae.font,Ae.colorPrimary,Ae.colorPrimary,Ae.colorPrimary);return c.a.createElement(c.a.Fragment,null,c.a.createElement(ze,{data:f,colorTheme:Ae}),c.a.createElement(b,{className:"cat-btn",onClick:function(){return e=Math.floor(Math.random()*f.catPhotos.length),a([].concat(Object(r.a)(n),[{id:Te++,imageIndex:e}]));var e}},f.catBtnText),n.map(function(e){return c.a.createElement(Se,Object.assign({key:e.id},e,{deleteImage:h}))}),c.a.createElement(b,{className:"cat-btn dark-btn",onClick:function(){return m(!u),void(Ae===d.defaultTheme?(Ae=d.darkTheme,He=f.defaultMode):(Ae=d.defaultTheme,He=f.darkMode))}},He))}var Be=document.getElementById("root");s.a.render(c.a.createElement(u.a,null,c.a.createElement(Re,null)),Be)},48:function(e,t,n){e.exports=n.p+"static/media/me.d94c8fde.jpg"},53:function(e,t,n){e.exports=n.p+"static/media/Resume_Fall_2021_Jane_Le.0469e043.pdf"},54:function(e,t,n){e.exports=n.p+"static/media/portrait.1fc03bc7.jpg"},64:function(e,t,n){e.exports=n(122)},71:function(e,t,n){},72:function(e,t,n){e.exports=n.p+"static/media/1.3d7ca4a5.jpg"},73:function(e,t,n){e.exports=n.p+"static/media/2.370c16f3.jpg"},74:function(e,t,n){e.exports=n.p+"static/media/3.346a9de8.jpg"},75:function(e,t,n){e.exports=n.p+"static/media/4.27e43607.jpg"},76:function(e,t,n){e.exports=n.p+"static/media/5.cc339a3c.jpg"},77:function(e,t,n){e.exports=n.p+"static/media/6.f7f4dc4b.jpg"},78:function(e,t,n){e.exports=n.p+"static/media/7.5a8bce06.jpg"},79:function(e,t,n){e.exports=n.p+"static/media/8.f02a43bd.jpg"},80:function(e,t,n){e.exports=n.p+"static/media/9.e34730b7.jpg"},81:function(e,t,n){e.exports=n.p+"static/media/10.6dfe6d3e.jpg"},82:function(e,t,n){e.exports=n.p+"static/media/11.5d6ee329.jpg"},83:function(e,t,n){e.exports=n.p+"static/media/12.be195cf7.jpg"},84:function(e,t,n){e.exports=n.p+"static/media/13.41ed8a2c.jpg"},85:function(e,t,n){e.exports=n.p+"static/media/14.7f3ed760.jpg"},86:function(e,t,n){e.exports=n.p+"static/media/15.d86bd66d.jpg"},87:function(e,t,n){e.exports=n.p+"static/media/16.fdb15928.jpg"},88:function(e,t,n){e.exports=n.p+"static/media/17.14e4c0c1.jpg"}},[[64,1,2]]]);
//# sourceMappingURL=main.1612eb7d.chunk.js.map