(this["webpackJsonpsakura-blossoms"]=this["webpackJsonpsakura-blossoms"]||[]).push([[0],{31:function(n,e,t){"use strict";t.r(e);var o,r,i,c,a,s,l,d,u=t(1),h=t.n(u),p=t(16),f=t.n(p),m=t(3),x=t(8),y=t(2),g=t(0),b=y.c.div(o||(o=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  gap: 8px 0;\n  flex-wrap: wrap;\n  & button {\n    margin: auto;\n    flex: 0 0 35%;\n  }\n"]))),j=t(12),v=t(13),O=Object(u.createContext)(void 0),C=function(n){var e=n.children,t=n.value;return Object(g.jsx)(O.Provider,{value:t,children:e})},F=function(){var n=Object(u.useContext)(O);if(void 0===n)throw new Error("useNavContext must be used within a NavProvider");return n},w=y.c.div(r||(r=Object(m.a)(["\n  position: absolute;\n  top: 12px;\n  right: 24px;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 16px;\n  width: 16px;\n  z-index: 1000;\n  color: ",";\n  .nav-control-open,\n  .nav-control-close {\n    position: absolute;\n    transition: all 0.5s;\n  }\n  & .icon-show {\n    opacity: 1;\n    visibility: visible;\n    transform: rotate(360deg);\n  }\n  & .icon-hide {\n    opacity: 0;\n    visibility: hidden;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor})),k=y.c.div(i||(i=Object(m.a)(["\n  flex: 1 1 10%;\n  width: 100%;\n  margin-top: auto;\n  color: ",";\n  background: ",";\n  font-family: ",";\n  font-weight: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight})),z=y.c.div(c||(c=Object(m.a)(["\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  min-height: 90%;\n  width: 100%;\n  overflow-y: auto;\n  padding: 16px 0;\n"]))),B=y.c.ul(a||(a=Object(m.a)(["\n  flex: 1 1 80%;\n  width: 100%;\n  max-height: 75%;\n  /* min-height: 75%; */\n  margin: auto 0 0;\n  padding: 0;\n  text-decoration: none;\n  list-style: none;\n  display: flex;\n  flex-direction: column-reverse;\n  background: ",";\n  font-family: ",";\n  font-weight: ",";\n  /* background: #000; */\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight})),S=y.c.li(s||(s=Object(m.a)(["\n  padding: 8px 16px;\n\n  color: ",";\n  cursor: pointer;\n  & a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor})),W=y.c.div(l||(l=Object(m.a)(["\n  flex: 1 1 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: 24px;\n  /* background: #000; */\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight})),L=y.c.nav(d||(d=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  background: ",";\n  position: fixed;\n  inset: 0;\n  margin: 0;\n  padding: 0;\n  transition: all 0.5s;\n  clip-path: ",";\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.navOpen?"circle(300% at 100% 0%)":"circle(18px at calc(100% - 31.5px) calc(0% + 19.5px) )"})),N=function(n){var e=n.children,t=Object(u.useState)(!1),o=Object(x.a)(t,2),r=o[0],i=o[1];return Object(g.jsx)(C,{value:{navOpen:r,handleNavToggle:function(){i(!r)},handleCloseNav:function(){i(!1)}},children:Object(g.jsx)(L,{navOpen:r,children:e})})};N.Control=function(){var n=F(),e=n.navOpen,t=n.handleNavToggle;return Object(g.jsxs)(w,{onClick:t,children:[Object(g.jsx)(j.a,{className:"nav-control-close ".concat(e?"icon-show":"icon-hide"),icon:v.b,size:"lg"}),Object(g.jsx)(j.a,{className:"nav-control-open ".concat(e?"icon-hide":"icon-show"),icon:v.a,size:"lg"})]})},N.Logo=function(n){var e=n.children;return Object(g.jsx)(W,{children:e})},N.List=function(n){var e=n.children;return Object(g.jsx)(B,{children:e})},N.ListItem=function(n){var e=n.children,t=F().handleCloseNav;return Object(g.jsx)(S,{onClick:t,children:Object(g.jsx)("a",{href:"/",children:e})})},N.ItemContainer=function(n){var e=n.children;return Object(g.jsx)(z,{children:e})},N.ButtonContainer=function(n){var e=n.children;return Object(g.jsx)(b,{children:e})},N.Footer=function(n){var e=n.children;return Object(g.jsx)(k,{children:e})};var I,P,H,D,M,T,E=N,R=t(5),A=y.c.button(I||(I=Object(m.a)(["\n  background: inherit;\n  color: inherit;\n  background: ",";\n  /* Manual Background color theme override */\n  background: ",";\n  color: ",";\n  /* Manual Background color theme override */\n  color: ",";\n  border: ",";\n  border: ",";\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 32px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-family: ",";\n  font-weight: ",";\n  ","\n"])),(function(n){return n.ghost?"transparent":n.inverted?n.theme.colors.primaryColor:n.theme.colors.secondaryColor}),(function(n){return n.ghost?"transparent":n.inverted?n.primaryColor:n.secondaryColor}),(function(n){return n.inverted?n.theme.colors.secondaryColor:n.theme.colors.primaryColor}),(function(n){return n.inverted?n.secondaryColor:n.primaryColor}),(function(n){return n.ghost?n.inverted?"5px solid ".concat(n.theme.colors.secondaryColor):"5px solid ".concat(n.theme.colors.primaryColor):"none"}),(function(n){return n.ghost?n.inverted?"5px solid ".concat(n.secondaryColor):"5px solid ".concat(n.primaryColor):"none"}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){var e=n.size;return"small"===e?"font-size: 12px;  padding: 12px 20px;":"regular"===e?"font-size: 16px;  padding: 12px 24px;":"medium"===e?"font-size: 24px;  padding: 15px 28px;":"large"===e?"font-size: 30px;  padding: 15px 32px;":void 0})),J=y.c.button(P||(P=Object(m.a)(["\n  background: inherit;\n  color: inherit;\n  /* box-sizing: border-box; */\n  &:after,\n  &::before {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  background: ",";\n  /* Manual Background color theme override */\n  background: ",";\n  color: ",";\n  /* Manual Background color theme override */\n  color: ",";\n  border: ",";\n  border: ",";\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 28px;\n  cursor: pointer;\n  font-family: ",";\n  font-weight: ",";\n\n  ","\n"])),(function(n){return n.ghost?"transparent":n.inverted?n.theme.colors.primaryColor:n.theme.colors.secondaryColor}),(function(n){return n.ghost?"transparent":n.inverted?n.primaryColor:n.secondaryColor}),(function(n){return n.inverted?n.theme.colors.secondaryColor:n.theme.colors.primaryColor}),(function(n){return n.inverted?n.secondaryColor:n.primaryColor}),(function(n){return n.ghost?n.inverted?"5px solid ".concat(n.theme.colors.secondaryColor):"5px solid ".concat(n.theme.colors.primaryColor):"none"}),(function(n){return n.ghost?n.inverted?"5px solid ".concat(n.secondaryColor):"5px solid ".concat(n.primaryColor):"none"}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){var e=n.size,t=n.ghost;return"small"===e?"font-size: 12px;  ".concat(t?"padding: 7px 23.5px; ":"padding: 12px 28px;"):"regular"===e?"font-size: 16px;  ".concat(t?"padding: 5.5px 25.5px; ":"padding: 10px 30px;"):"medium"===e?"font-size: 24px;  ".concat(t?"padding: 7px 27.5px; ":"padding: 12px 32px;"):"large"===e?"font-size: 30px; border-radius: 38px;  ".concat(t?"padding: 7px 33.5px; ":"padding: 12px 38px;"):void 0})),G=function(n,e){var t=n.children,o=n.type,r=n.inverted,i=n.ghost,c=n.primaryColor,a=n.secondaryColor,s=n.size;switch(o){case"pill":return Object(g.jsx)(J,Object(R.a)(Object(R.a)({},e),{},{primaryColor:c,secondaryColor:a,inverted:r,ghost:i,size:s,children:t}));default:return Object(g.jsx)(A,Object(R.a)(Object(R.a)({primaryColor:c,secondaryColor:a,inverted:r,ghost:i,size:s},e),{},{children:t}))}},U=function(){return Object(g.jsxs)(E,{children:[Object(g.jsx)(E.Control,{}),Object(g.jsx)(E.Logo,{children:"SakuraSeeds"}),Object(g.jsxs)(E.List,{children:[Object(g.jsxs)(E.ItemContainer,{children:[Object(g.jsx)(E.ListItem,{children:"Home"}),Object(g.jsx)(E.ListItem,{children:"Work"}),Object(g.jsx)(E.ListItem,{children:"About"}),Object(g.jsx)(E.ListItem,{children:"Contact"})]}),Object(g.jsxs)(E.ButtonContainer,{children:[Object(g.jsx)(G,{size:"small",type:"pill",inverted:!1,ghost:!1,children:"Sign In"}),Object(g.jsx)(G,{size:"small",type:"pill",inverted:!0,ghost:!0,children:"Sign Up"})]})]}),Object(g.jsx)(E.Footer,{children:"copyright SakuraSeeds\xa9 2021"})]})},q=t(20),K=t.n(q),Q={gray:"240, 6%",red:"360, 42%",orange:"18, 42%",yellow:"50, 57%",green:"112, 41%",teal:"173, 40%",blue:"209, 42%",indigo:"241, 39%",purple:"281, 30%",pink:"349, 50%"},V={50:"95%",100:"90%",200:"80%",300:"70%",400:"60%",500:"50%",600:"40%",700:"30%",800:"20%",900:"10%"},X={Pacifico:"Pacifico",Poppins:"Poppins",Exo:"Exo",FredokaOne:"FredokaOne",Merriweather:"Merriweather",Roboto:"Roboto"},Y={thinest:100,thin:200,lighter:300,light:400,regular:500,medium:600,bold:700,extraBold:800,black:900},Z=function(n){return Q[n]},$=function(n){return V[n]},_=function(n){return X[n]},nn=function(n){return Y[n]},en=function(n,e,t,o){K.a.load({google:{families:[n,"".concat(n,":100,200,300,400,500,600,700,800,900"),t,"".concat(t,":100,200,300,400,500,600,700,800,900")]}})},tn=[{presetName:"Blue",presetID:0,presetStyles:{primaryHue:"blue",primaryLightness:500,secondaryHue:"blue",secondaryLightness:50,primaryFont:"Poppins",primaryFontWeight:"regular",secondaryFont:"Exo",secondaryFontWeight:"thin"}},{presetName:"Green",presetID:1,presetStyles:{primaryHue:"green",primaryLightness:50,secondaryHue:"green",secondaryLightness:500,primaryFont:"Pacifico",primaryFontWeight:"black",secondaryFont:"Merriweather",secondaryFontWeight:"regular"}},{presetName:"Cherry Red",presetID:2,presetStyles:{primaryHue:"red",primaryLightness:100,secondaryHue:"red",secondaryLightness:500,primaryFont:"Poppins",primaryFontWeight:"black",secondaryFont:"Roboto",secondaryFontWeight:"thin"}},{presetName:"Totally Teal",presetID:3,presetStyles:{primaryHue:"teal",primaryLightness:200,secondaryHue:"blue",secondaryLightness:800,primaryFont:"Exo",primaryFontWeight:"black",secondaryFont:"Pacifico",secondaryFontWeight:"thin"}}],on=y.c.option(H||(H=Object(m.a)([""]))),rn=function(n){var e=n.name,t=n.value;return Object(g.jsx)(on,{value:t,children:e})},cn=y.c.select(D||(D=Object(m.a)(["\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  background: ",";\n  color: ",";\n  cursor: pointer;\n  min-height: 30px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 16px;\n  margin: 0;\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight})),an=function(){var n=un(),e=n.presetThemes,t=n.selectedStyles,o=n.setSelectedStyles,r=e.map((function(n){return Object(g.jsx)(rn,{value:n.presetID,name:n.presetName},n.presetID)}));return Object(g.jsx)(cn,{value:t.presetID,name:t.presetName,onChange:function(n){o(Object(R.a)({},e[n.target.value]))},children:r})},sn=y.c.div(M||(M=Object(m.a)(["\n  height: 200px;\n  width: 200px;\n  position: fixed;\n  top: 8px;\n  left: 8px;\n  border-radius: 9px;\n  padding: 8px;\n  background: ",";\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n  display: flex;\n  flex-direction: column;\n  & .title {\n    min-height: 40px;\n    display: flex;\n    margin-bottom: 4px;\n    & h2 {\n      font-family: ",";\n      font-weight: ",";\n      font-size: 24px;\n      margin: 0 auto auto;\n    }\n  }\n  & .presetSelect {\n    display: flex;\n    outline: 1px solid ",";\n  }\n  & .presetOverridesBox {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 4px 4px 0;\n    & h3 {\n      font-size: 20px;\n      margin: auto;\n    }\n    & .colorOverridesBox,\n    .fontOverridesBox {\n      width: 100%;\n      margin: auto;\n      display: flex;\n      align-items: center;\n      & span {\n        margin-right: auto;\n        margin-left: 8px;\n        font-size: 20px;\n      }\n      & .miniDisplayBox {\n        height: 30px;\n        width: 30px;\n        border-radius: 3px;\n        border: 1px solid ",";\n        margin-right: 18px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: ",";\n        font-weight: ",";\n        cursor: pointer;\n      }\n      & .miniColorBox1 {\n        font-family: ",";\n        font-weight: ",";\n        background: ",";\n        color: ",";\n      }\n      & .miniColorBox2 {\n        background: ",";\n        color: ",";\n      }\n\n      & .miniFontBox2 {\n        font-family: ",";\n        font-weight: ",";\n        background: ",";\n        color: ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor})),ln=Object(u.createContext)(void 0),dn=function(n){var e=n.children,t=Object(u.useState)(Object(R.a)({},tn[Math.floor(Math.random()*tn.length)])),o=Object(x.a)(t,2),r=o[0],i=o[1],c=function(n){var e=n.primaryHue,t=n.primaryLightness,o=n.secondaryHue,r=n.secondaryLightness,i=n.primaryFont,c=n.primaryFontWeight,a=n.secondaryFont,s=n.secondaryFontWeight;return en(i,c,a,s),{primaryHue:Z(e),primaryLightness:$(t),secondaryHue:Z(o),secondaryLightness:$(r),primaryFont:_(i),primaryFontWeight:nn(c),secondaryFont:_(a),secondaryFontWeight:nn(s)}}(r.presetStyles),a=function(n){var e=n.primaryHue,t=n.primaryLightness,o=n.secondaryHue,r=n.secondaryLightness,i=n.primaryFont,c=n.primaryFontWeight,a=n.secondaryFont,s=n.secondaryFontWeight;return{colors:{primaryColor:"hsl(".concat(e,", ").concat(t,")"),secondaryColor:"hsl(".concat(o,", ").concat(r,")")},fonts:{primaryFont:{font:"".concat(i),fontWeight:"".concat(c)},secondaryFont:{font:"".concat(a),fontWeight:"".concat(s)}}}}(Object(R.a)({},c));return Object(g.jsx)(ln.Provider,{value:{theme:a,selectedStyles:r,setSelectedStyles:i,presetThemes:tn},children:Object(g.jsx)(y.a,{theme:a,children:e})})},un=function(){var n=Object(u.useContext)(ln);if(void 0===n)throw new Error("useThemeBuilderContext must be used within a ThemeBuilderProvider");return n};dn.ThemeMenu=function(){var n=un(),e=n.selectedStyles;n.setSelectedStyles;return console.log("selectedStyles",e),Object(g.jsxs)(sn,{children:[Object(g.jsx)("div",{className:"title",children:Object(g.jsx)("h2",{children:"Preset Select"})}),Object(g.jsx)("div",{className:"presetSelect",children:Object(g.jsx)(an,{})}),Object(g.jsxs)("div",{className:"presetOverridesBox",children:[Object(g.jsx)("h3",{children:"Preset Overrides"}),Object(g.jsxs)("div",{className:"colorOverridesBox",children:[Object(g.jsx)("span",{children:"Colors"}),Object(g.jsx)("div",{className:"miniDisplayBox miniColorBox1",children:"Pc"}),Object(g.jsx)("div",{className:"miniDisplayBox miniColorBox2",children:"Sc"})]}),Object(g.jsxs)("div",{className:"fontOverridesBox",children:[Object(g.jsx)("span",{children:"Fonts"}),Object(g.jsx)("div",{className:"miniDisplayBox miniFontBox1",children:"Aa"}),Object(g.jsx)("div",{className:"miniDisplayBox miniFontBox2",children:"Aa"})]})]})]})};var hn,pn=Object(y.b)(T||(T=Object(m.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n  }\n"]))),fn=y.c.div(hn||(hn=Object(m.a)(["\n  height: 100vh;\n  background: ",";\n"])),(function(n){return n.theme.colors.secondaryColor}));var mn=function(){return Object(g.jsxs)(dn,{children:[Object(g.jsx)(dn.ThemeMenu,{}),Object(g.jsx)(fn,{children:Object(g.jsx)(U,{})}),Object(g.jsx)(pn,{})]})},xn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};f.a.render(Object(g.jsx)(h.a.StrictMode,{children:Object(g.jsx)(mn,{})}),document.getElementById("root")),xn()}},[[31,1,2]]]);
//# sourceMappingURL=main.e44d4105.chunk.js.map