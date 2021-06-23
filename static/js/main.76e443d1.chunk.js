(this["webpackJsonpsakura-blossoms"]=this["webpackJsonpsakura-blossoms"]||[]).push([[0],{66:function(n,e,t){"use strict";t.r(e);var o,r,i,c,a,s,l,d,u=t(0),p=t.n(u),h=t(14),f=t.n(h),x=t(6),m=t(13),b=t(5),g=t(1),y=b.c.div(o||(o=Object(x.a)(["\n  display: flex;\n  width: 100%;\n  gap: 8px 0;\n  flex-wrap: wrap;\n  & button {\n    margin: auto;\n    flex: 0 0 35%;\n  }\n"]))),j=t(17),O=t(18),v=Object(u.createContext)(void 0),C=function(n){var e=n.children,t=n.value;return Object(g.jsx)(v.Provider,{value:t,children:e})},S=function(){var n=Object(u.useContext)(v);if(void 0===n)throw new Error("useNavContext must be used within a NavProvider");return n},F=b.c.div(r||(r=Object(x.a)(["\n  position: absolute;\n  top: 16px;\n  right: 24px;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 16px;\n  width: 16px;\n  padding: 8px;\n  z-index: 1000;\n  color: ",";\n  .nav-control-open,\n  .nav-control-close {\n    position: absolute;\n    transition: all 0.5s;\n  }\n  & .icon-show {\n    opacity: 1;\n    visibility: visible;\n    transform: rotate(360deg);\n  }\n  & .icon-hide {\n    opacity: 0;\n    visibility: hidden;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor})),w=b.c.div(i||(i=Object(x.a)(["\n  flex: 1 1 10%;\n  width: 100%;\n  /* height: 100%; */\n  height: fit-content;\n  margin-top: auto;\n  color: ",";\n  background: ",";\n  font-family: ",";\n  font-weight: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight})),k=b.c.div(c||(c=Object(x.a)(["\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  min-height: 90%;\n  width: 100%;\n  overflow-y: auto;\n  padding: 16px 0;\n"]))),P=b.c.ul(a||(a=Object(x.a)(["\n  flex: 1 1 80%;\n  width: 100%;\n  max-height: 75%;\n  /* min-height: 75%; */\n  margin: auto 0 0;\n  padding: 0;\n  text-decoration: none;\n  list-style: none;\n  display: flex;\n  flex-direction: column-reverse;\n  background: ",";\n  font-family: ",";\n  font-weight: ",";\n  /* background: #000; */\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight})),z=b.c.li(s||(s=Object(x.a)(["\n  padding: 8px 16px;\n\n  color: ",";\n  cursor: pointer;\n  & a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor})),N=b.c.div(l||(l=Object(x.a)(["\n  flex: 1 1 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: 24px;\n  /* background: #000; */\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight})),M=b.c.nav(d||(d=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  background: ",";\n  position: fixed;\n  right: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transition: all 0.5s;\n  clip-path: ",";\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.navOpen?"circle(300% at 100% 0%)":"circle(20px at calc(100% - 31.5px) calc(0% + 23.5px) )"})),L=function(n){var e=n.children,t=Object(u.useState)(!1),o=Object(m.a)(t,2),r=o[0],i=o[1];return Object(g.jsx)(C,{value:{navOpen:r,handleNavToggle:function(){i(!r)},handleCloseNav:function(){i(!1)}},children:Object(g.jsx)(M,{navOpen:r,children:e})})};L.Control=function(){var n=S(),e=n.navOpen,t=n.handleNavToggle;return Object(g.jsxs)(F,{onClick:t,children:[Object(g.jsx)(j.a,{className:"nav-control-close ".concat(e?"icon-show":"icon-hide"),icon:O.d,size:"lg"}),Object(g.jsx)(j.a,{className:"nav-control-open ".concat(e?"icon-hide":"icon-show"),icon:O.a,size:"lg"})]})},L.Logo=function(n){var e=n.children;return Object(g.jsx)(N,{children:e})},L.List=function(n){var e=n.children;return Object(g.jsx)(P,{children:e})},L.ListItem=function(n){var e=n.children,t=S().handleCloseNav;return Object(g.jsx)(z,{onClick:t,children:Object(g.jsx)("a",{href:"/",children:e})})},L.ItemContainer=function(n){var e=n.children;return Object(g.jsx)(k,{children:e})},L.ButtonContainer=function(n){var e=n.children;return Object(g.jsx)(y,{children:e})},L.Footer=function(n){var e=n.children;return Object(g.jsx)(w,{children:e})};var W,B,_=L,I=t(4),H=b.c.button(W||(W=Object(x.a)(["\n  background: inherit;\n  color: inherit;\n  background: ",";\n  /* Manual Background color theme override */\n  background: ",";\n  color: ",";\n  /* Manual Background color theme override */\n  color: ",";\n  border: ",";\n  border: ",";\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 32px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-family: ",";\n  font-weight: ",";\n  ","\n"])),(function(n){return n.ghost?"transparent":n.inverted?n.theme.colors.primaryColor:n.theme.colors.secondaryColor}),(function(n){return n.ghost?"transparent":n.inverted?n.primaryColor:n.secondaryColor}),(function(n){return n.inverted?n.theme.colors.secondaryColor:n.theme.colors.primaryColor}),(function(n){return n.inverted?n.secondaryColor:n.primaryColor}),(function(n){return n.ghost?n.inverted?"5px solid ".concat(n.theme.colors.secondaryColor):"5px solid ".concat(n.theme.colors.primaryColor):"none"}),(function(n){return n.ghost?n.inverted?"5px solid ".concat(n.secondaryColor):"5px solid ".concat(n.primaryColor):"none"}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){var e=n.size;return"small"===e?"font-size: 12px;  padding: 12px 20px;":"regular"===e?"font-size: 16px;  padding: 12px 24px;":"medium"===e?"font-size: 24px;  padding: 15px 28px;":"large"===e?"font-size: 30px;  padding: 15px 32px;":void 0})),T=b.c.button(B||(B=Object(x.a)(["\n  background: inherit;\n  color: inherit;\n  /* box-sizing: border-box; */\n  &:after,\n  &::before {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  background: ",";\n  /* Manual Background color theme override */\n  background: ",";\n  color: ",";\n  /* Manual Background color theme override */\n  color: ",";\n  border: ",";\n  border: ",";\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 28px;\n  cursor: pointer;\n  font-family: ",";\n  font-weight: ",";\n\n  ","\n"])),(function(n){return n.ghost?"transparent":n.inverted?n.theme.colors.primaryColor:n.theme.colors.secondaryColor}),(function(n){return n.ghost?"transparent":n.inverted?n.primaryColor:n.secondaryColor}),(function(n){return n.inverted?n.theme.colors.secondaryColor:n.theme.colors.primaryColor}),(function(n){return n.inverted?n.secondaryColor:n.primaryColor}),(function(n){return n.ghost?n.inverted?"5px solid ".concat(n.theme.colors.secondaryColor):"5px solid ".concat(n.theme.colors.primaryColor):"none"}),(function(n){return n.ghost?n.inverted?"5px solid ".concat(n.secondaryColor):"5px solid ".concat(n.primaryColor):"none"}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){var e=n.size,t=n.ghost;return"small"===e?"font-size: 12px;  ".concat(t?"padding: 7px 23.5px; ":"padding: 12px 28px;"):"regular"===e?"font-size: 16px;  ".concat(t?"padding: 5.5px 25.5px; ":"padding: 10px 30px;"):"medium"===e?"font-size: 24px;  ".concat(t?"padding: 7px 27.5px; ":"padding: 12px 32px;"):"large"===e?"font-size: 30px; border-radius: 38px;  ".concat(t?"padding: 7px 33.5px; ":"padding: 12px 38px;"):void 0})),E=function(n,e){var t=n.children,o=n.type,r=n.inverted,i=n.ghost,c=n.primaryColor,a=n.secondaryColor,s=n.size;switch(o){case"pill":return Object(g.jsx)(T,Object(I.a)(Object(I.a)({},e),{},{primaryColor:c,secondaryColor:a,inverted:r,ghost:i,size:s,children:t}));default:return Object(g.jsx)(H,Object(I.a)(Object(I.a)({primaryColor:c,secondaryColor:a,inverted:r,ghost:i,size:s},e),{},{children:t}))}},V=function(){return Object(g.jsxs)(_,{children:[Object(g.jsx)(_.Control,{}),Object(g.jsx)(_.Logo,{children:"SakuraSeeds"}),Object(g.jsxs)(_.List,{children:[Object(g.jsxs)(_.ItemContainer,{children:[Object(g.jsx)(_.ListItem,{children:"Home"}),Object(g.jsx)(_.ListItem,{children:"Work"}),Object(g.jsx)(_.ListItem,{children:"About"}),Object(g.jsx)(_.ListItem,{children:"Contact"})]}),Object(g.jsxs)(_.ButtonContainer,{children:[Object(g.jsx)(E,{size:"small",type:"pill",inverted:!1,ghost:!1,children:"Sign In"}),Object(g.jsx)(E,{size:"small",type:"pill",inverted:!0,ghost:!0,children:"Sign Up"})]})]}),Object(g.jsx)(_.Footer,{children:"copyright SakuraSeeds\xa9 2021"})]})},D=t(41),A=t.n(D),R={gray:"240, 6%",red:"360, 42%",orange:"18, 42%",yellow:"50, 57%",green:"112, 41%",teal:"173, 40%",blue:"209, 42%",indigo:"241, 39%",purple:"281, 30%",pink:"349, 50%"},J={50:"95%",100:"90%",200:"80%",300:"70%",400:"60%",500:"50%",600:"40%",700:"30%",800:"20%",900:"10%"},U={Pacifico:"Pacifico",Poppins:"Poppins",Exo:"Exo",FredokaOne:"Fredoka One",Merriweather:"Merriweather",Roboto:"Roboto"},X={100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900},G=function(n){return R[n]},q=function(n){return J[n]},K=function(n){return U[n]},Q=function(n){return X[n]},Y=function(n,e,t,o){"FredokaOne"===n&&(n="Fredoka+One"),"FredokaOne"===t&&(t="Fredoka+One"),A.a.load({google:{families:[n,"".concat(n,":100,200,300,400,500,600,700,800,900"),t,"".concat(t,":100,200,300,400,500,600,700,800,900")]}})};function Z(n){var e=n.indexOf(",")>-1?",":" ",t=(n=n.substr(4).split(")")[0].split(e))[0],o=n[1].substr(0,n[1].length-1)/100,r=n[2].substr(0,n[2].length-1)/100;t.indexOf("deg")>-1?t=t.substr(0,t.length-3):t.indexOf("rad")>-1?t=Math.round(t.substr(0,t.length-3)*(180/Math.PI)):t.indexOf("turn")>-1&&(t=Math.round(360*t.substr(0,t.length-4))),t>=360&&(t%=360);var i=(1-Math.abs(2*r-1))*o,c=i*(1-Math.abs(t/60%2-1)),a=r-i/2,s=0,l=0,d=0;return 0<=t&&t<60?(s=i,l=c,d=0):60<=t&&t<120?(s=c,l=i,d=0):120<=t&&t<180?(s=0,l=i,d=c):180<=t&&t<240?(s=0,l=c,d=i):240<=t&&t<300?(s=c,l=0,d=i):300<=t&&t<360&&(s=i,l=0,d=c),s=Math.round(255*(s+a)).toString(16),l=Math.round(255*(l+a)).toString(16),d=Math.round(255*(d+a)).toString(16),1===s.length&&(s="0"+s),1===l.length&&(l="0"+l),1===d.length&&(d="0"+d),"#"+s+l+d}var $,nn,en,tn,on,rn,cn,an,sn=[{presetName:"Blue",presetID:0,presetStyles:{primaryHue:"blue",primaryLightness:500,secondaryHue:"blue",secondaryLightness:50,primaryFont:"Poppins",primaryFontWeight:400,secondaryFont:"Exo",secondaryFontWeight:100}},{presetName:"Green",presetID:1,presetStyles:{primaryHue:"green",primaryLightness:50,secondaryHue:"green",secondaryLightness:500,primaryFont:"Pacifico",primaryFontWeight:900,secondaryFont:"Merriweather",secondaryFontWeight:500}},{presetName:"Cherry Red",presetID:2,presetStyles:{primaryHue:"red",primaryLightness:100,secondaryHue:"red",secondaryLightness:500,primaryFont:"Poppins",primaryFontWeight:900,secondaryFont:"Roboto",secondaryFontWeight:100}},{presetName:"Totally Teal",presetID:3,presetStyles:{primaryHue:"teal",primaryLightness:200,secondaryHue:"blue",secondaryLightness:800,primaryFont:"Exo",primaryFontWeight:900,secondaryFont:"Pacifico",secondaryFontWeight:200}}],ln=t(44),dn=t(43),un=Object(b.c)(dn.a)($||($=Object(x.a)(["\n  & .Select__control {\n    background: ",";\n    box-shadow: 0px 2px 4px 3px rgba(23, 23, 23, 0.3);\n  }\n  & .Select__control--is-focused,\n  .Select__control--menu-is-open {\n    border: none;\n    box-shadow: none;\n    box-shadow: 0px 3px 4px 1px rgba(23, 23, 23, 0.5);\n  }\n  & .Select__value-container {\n    & .Select__placeholder,\n    .Select__single-value {\n      font-family: ",";\n      font-weight: ",";\n      color: ",";\n    }\n  }\n  & .Select__indicator-separator {\n    background-color: ",";\n  }\n  &.Select__indicator .Select__dropdown-indicator {\n    & svg {\n      & path {\n        color: '#fff' !important;\n      }\n    }\n  }\n  & .Select__menu-list {\n    background: ",";\n    color: ",";\n    font-family: ",";\n    font-weight: ",";\n    & .Select__option {\n      transition: all 0.1s;\n    }\n    & .Select__option::hover {\n      background: ",";\n      color: ",";\n    }\n    & .Select__option--is-focused {\n      background: ",";\n      color: ",";\n      border: 1px solid ",";\n      border-top: none;\n      border-bottom: none;\n      box-shadow: 0px 2px 4px 3px rgba(23, 23, 23, 0.3);\n    }\n    & .Select__option--is-selected {\n      border-top: none;\n      border-bottom: none;\n      background: ",";\n      color: ",";\n      font-weight: ",";\n      box-shadow: inset 0px 2px 4px 3px rgba(23, 23, 23, 0.3);\n    }\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.fonts.primaryFont.fontWeight})),pn=Object(b.d)((function(n){var e=Nn(),t=e.presetThemes,o=e.selectedStyles,r=e.setSelectedStyles,i=o.presetName,c=o.presetID,a=Object(u.useState)({value:"".concat(c),label:"".concat(i)}),s=Object(m.a)(a,2),l=s[0],d=s[1],p=Object(ln.a)(t.map((function(n){return{value:"".concat(n.presetID),label:"".concat(n.presetName),tabindex:2}}))),h={dropdownIndicator:function(n,e){return Object(I.a)(Object(I.a)({},n),{},{"& svg":{color:"".concat(e.theme.colors.primaryColor)}})}};return Object(g.jsx)(un,Object(I.a)(Object(I.a)({options:p,value:l.presetID,defaultValue:l,placeholder:i,onChange:function(n){var e=n.value;r(Object(I.a)({},t[e])),d(Object(I.a)({},n))},isSearchable:!0,tabSelectsValue:!1,tabIndex:"0"},n),{},{styles:h}))})),hn=t(19),fn=b.c.div(nn||(nn=Object(x.a)(["\n  height: 30px;\n  width: 30px;\n  margin: auto;\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: ",";\n\n  color: ",";\n  display: flex;\n  & .letterBox {\n    margin: auto;\n  }\n"])),(function(n){return n.hue?"hsl(".concat(n.hue,", ").concat(n.lightness,")"):n.theme.colors.primaryColor}),(function(n){return n.hue?"hsl(".concat(n.hue,", ").concat(n.value<=500?500===n.value?"100%":"".concat(n.value/10-10,"%"):"".concat(n.value/10+10,"%"),")"):n.theme.colors.secondaryColor})),xn=function(n){var e=n.children,t=n.hue,o=n.lightness,r=n.handleClick,i=n.id,c=n.isSelected,a=n.value,s=Object(u.useState)(!1),l=Object(m.a)(s,2),d=l[0],p=l[1];return Object(u.useEffect)((function(){c&&p(!0),c||p(!1)}),[c,i,d]),Object(g.jsx)(fn,{hue:t,lightness:o,onClick:function(){r(i)},className:"".concat(d?"highlighted":""),value:a,children:e})},mn=t(35),bn=(t(65),[{id:0,hue:"gray"},{id:1,hue:"red"},{id:2,hue:"orange"},{id:3,hue:"yellow"},{id:4,hue:"green"},{id:5,hue:"teal"},{id:6,hue:"blue"},{id:7,hue:"indigo"},{id:8,hue:"purple"},{id:9,hue:"pink"}]),gn=[{id:0,font:"Pacifico"},{id:1,font:"Poppins"},{id:2,font:"Exo"},{id:3,font:"FredokaOne"},{id:4,font:"Merriweather"},{id:5,font:"Roboto"},{id:6,font:"Poppins"},{id:7,font:"Poppins"},{id:8,font:"Poppins"},{id:9,font:"Poppins"}],yn=b.c.div(en||(en=Object(x.a)(["\n  position: absolute;\n  padding: 16px;\n  background-color: rgba(23, 23, 23, 0.9);\n  font-size: 14px;\n  top: 25%;\n  left: 5%;\n  color: white;\n  border-radius: 5px;\n  width: 220px;\n  max-height: 600px;\n  transition: all 0.75s ease-out;\n  visibility: ",";\n  opacity: ",";\n\n  &:before {\n    content: '';\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    border-right: 18px solid transparent;\n    border-top: 30px solid rgba(23, 23, 23, 0.9);\n    left: 25%;\n    top: 100%;\n  }\n\n  & .message-close {\n    position: absolute;\n    right: 8px;\n    top: 4px;\n  }\n"])),(function(n){return n.visible?"visible":"hidden"}),(function(n){return n.visible?1:0})),jn=function(n){var e=n.children,t=n.trigger,o=n.handleErrorMessageClick,r=Object(u.useState)(!1),i=Object(m.a)(r,2),c=i[0],a=i[1];return Object(u.useEffect)((function(){a(!!t)}),[t,a]),Object(g.jsxs)(yn,{visible:c,children:[Object(g.jsx)(j.a,{className:"message-close",icon:O.d,size:"lg",onClick:o}),e]})},On=b.c.div(tn||(tn=Object(x.a)(["\n  position: absolute;\n  top: 80%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 9px;\n  padding: 8px;\n  background: ","FF;\n  box-shadow: 5px 8px 10px 3px rgba(23, 23, 23, 0.4);\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n  cursor: auto;\n  z-index: 10;\n  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transform-origin: center;\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 900px) {\n    top: -8px;\n    left: -8px;\n    transform: translateX(0);\n  }\n  & .closeIcon {\n    position: absolute;\n    right: 8px;\n    top: 4px;\n  }\n  & .title {\n    font-size: 19px;\n    margin: 4px 8px;\n    min-height: 20px;\n  }\n  & .miniBoxMenuOptions {\n    flex: 1 1 100%;\n    border-radius: 5px;\n    margin: 8px 0;\n    display: flex;\n    flex-direction: column;\n    & h4 {\n      font-size: 14px;\n      margin: 8px 4px 4px;\n      font-weight: 500;\n    }\n    & .selectionBoxesContainer {\n      background-color: #fff;\n      flex: 1 1 100%;\n      margin: 0 4px 2.5%;\n      border-radius: 5px;\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-template-rows: repeat(2, 1fr);\n      padding: 4px;\n      gap: 4px;\n    }\n    & .selectionSliderContainer {\n      flex: 1 1 50%;\n      min-height: 48px;\n      display: flex;\n      flex-direction: column;\n      background-color: #fff;\n      border-radius: 5px;\n      margin: 0 4px 2.5%;\n      color: black;\n      & h5 {\n        margin: 8px auto 0;\n        font-family: ",";\n        font-weight: 500;\n        color: rgba(23, 23, 23, 1);\n        font-size: 12px;\n        line-height: 0;\n        height: 12px;\n      }\n      & .rc-slider {\n        width: 90%;\n        margin: auto auto 0 10px;\n\n        &-track {\n          background-color: rgba(23, 23, 23, 0.2);\n        }\n        &-mark {\n          display: none;\n        }\n        &-step {\n          display: none;\n        }\n        &-dot {\n          width: 1px;\n          height: 1px;\n          bottom: 0;\n          margin: 0;\n          border-color: ",";\n          background-color: ",";\n        }\n        &-handle {\n          border-color: ",";\n          background-color: ",";\n        }\n      }\n    }\n  }\n  & .miniBoxMenuSaveButton {\n    flex: 1 1 10%;\n    margin: auto 18px;\n  }\n  & .highlighted {\n    border: 2px solid rgba(23, 23, 23, 1);\n  }\n\n  ","\n"])),(function(n){return n.theme.colors.primaryHex}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){var e=n.open;return e?"\n        opacity: 1;\n        visibility: visible;\n        height: 320px;\n        width: 220px; \n        & .miniBoxMenuOptions * {\n            opacity: 1;\n            visibility: visible;\n            transition: opacity 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n        }":e?void 0:"\n        opacity: 0;\n        visibility: hidden;\n        height: 30px;\n        width: 30px; & \n        * {\n            opacity: 0;\n            visibility: hidden;\n        }"})),vn=function(n){var e=n.closeAllBoxes,t=n.open,o=n.name,r=n.type,i={0:{selected:!1,boxValue:"".concat("hue"===r?"gray":"Pacifico")},1:{selected:!1,boxValue:"".concat("hue"===r?"red":"Poppins")},2:{selected:!1,boxValue:"".concat("hue"===r?"orange":"Exo")},3:{selected:!1,boxValue:"".concat("hue"===r?"yellow":"FredokaOne")},4:{selected:!1,boxValue:"".concat("hue"===r?"green":"Merriweather")},5:{selected:!1,boxValue:"".concat("hue"===r?"teal":"Roboto")},6:{selected:!1,boxValue:"".concat("hue"===r?"blue":"Poppins")},7:{selected:!1,boxValue:"".concat("hue"===r?"indigo":"Poppins")},8:{selected:!1,boxValue:"".concat("hue"===r?"purple":"Poppins")},9:{selected:!1,boxValue:"".concat("hue"===r?"pink":"Poppins")}},c=Nn(),a=c.selectedStyles,s=c.setSelectedStyles,l=Object(u.useState)(500),d=Object(m.a)(l,2),p=d[0],h=d[1],f=Object(u.useState)({errorMessage:"Do not set Primary and Secondary lightness values to 100 of each other as it will make some things impossible to see!",showErrorMessage:!1}),x=Object(m.a)(f,2),b=x[0],y=x[1],v=Object(u.useState)(i),C=Object(m.a)(v,2),S=C[0],F=C[1];var w=function(n){F(Object(I.a)(Object(I.a)({},i),{},Object(hn.a)({},n,{selected:!0,boxValue:i[n].boxValue})))},k=function(n){h(n)},P=bn.map((function(n){return Object(g.jsx)(xn,{hue:R[n.hue],lightness:J[p],type:r,id:n.id,handleClick:w,isSelected:S[n.id].selected,value:p,children:Object(g.jsx)("div",{className:"letterBox"})},"".concat(n.id).concat(n.hue))})),z=gn.map((function(n){return Object(g.jsx)(xn,{type:r,id:n.id,handleClick:w,isSelected:S[n.id].selected,value:p,children:Object(g.jsxs)("div",{className:"letterBox",children:[n.font.split("")[0],n.font.split("")[1]]})},"".concat(n.id).concat(n.hue))}));return Object(g.jsxs)(On,{onClick:function(n){n.stopPropagation()},open:t,children:[Object(g.jsx)("span",{onClick:e,className:"closeIcon",children:Object(g.jsx)(j.a,{className:"nav-control-close",icon:O.d,size:"lg"})}),Object(g.jsx)("h2",{className:"title",children:o.split("y").join("y ")}),Object(g.jsxs)("div",{className:"miniBoxMenuOptions",children:[Object(g.jsxs)("h4",{children:["Pick a"," ","PrimaryColor"===o||"SecondaryColor"===o?"Hue":"Font"]}),Object(g.jsx)("div",{className:"selectionBoxesContainer",children:"hue"===r?P:z}),Object(g.jsxs)("h4",{children:["Pick a"," ","PrimaryColor"===o||"SecondaryColor"===o?"Lightness":"Font Weight"]}),Object(g.jsxs)("div",{className:"selectionSliderContainer",children:["hue"===r?Object(g.jsx)(mn.a,{onChange:k,min:50,max:900,defaultValue:500,marks:{50:50,100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900},step:null}):Object(g.jsx)(mn.a,{onChange:k,min:100,max:900,defaultValue:500,marks:{100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900},step:null}),Object(g.jsx)("h5",{children:p})]})]}),Object(g.jsx)(jn,{trigger:b.showErrorMessage,handleErrorMessageClick:function(){y(Object(I.a)(Object(I.a)({},b),{},{showErrorMessage:!1}))},children:b.errorMessage}),Object(g.jsx)("button",{className:"miniBoxMenuSaveButton",onClick:function(){var n,e,t=a.presetStyles,i=t.primaryLightness,c=t.secondaryLightness,l=o.split("".concat("hue"===r?"C":"F"))[0].toLowerCase()+r.charAt(0).toUpperCase()+r.slice(1),d=o.split("".concat("hue"===r?"C":"F"))[0].toLowerCase()+"".concat("hue"===r?"Lightness":"FontWeight");return"primaryLightness"===d&&(c===p||c===p+100||c===p-100||50===p&&50===c)||"secondaryLightness"===d&&(i===p||i===p+100||i===p-100||50===p&&50===i)?(y(Object(I.a)(Object(I.a)({},b),{},{showErrorMessage:!0})),void setTimeout((function(){y(Object(I.a)(Object(I.a)({},b),{},{showErrorMessage:!1}))}),5e3)):(Object.keys(S).forEach((function(n){var t=S[n].selected?S[n].boxValue:null;t&&(e=t)})),void s(Object(I.a)(Object(I.a)({},a),{},{presetName:"Custom",PresetID:4,presetStyles:Object(I.a)(Object(I.a)({},a.presetStyles),{},(n={},Object(hn.a)(n,l,"".concat(e||a.presetStyles[l])),Object(hn.a)(n,d,p),n))})))},children:"Save"})]})},Cn=b.c.div(on||(on=Object(x.a)(["\n  height: 30px;\n  width: 30px;\n  border-radius: 3px;\n  border: 1px solid ",";\n  margin-right: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: ",";\n  font-weight: ",";\n  cursor: pointer;\n  box-shadow: 0px 2px 4px 2px rgba(23, 23, 23, 0.3);\n  @media screen and (min-width: 900px) {\n    position: relative;\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight})),Sn=function(n){var e=n.children,t=n.className,o=n.name,r=n.handleClick,i=n.open,c=n.closeAllBoxes,a=n.type;return Object(g.jsxs)(Cn,{className:t,onClick:r,children:[e,Object(g.jsx)(vn,{name:o,onClick:r,open:i,closeAllBoxes:c,type:a})]})},Fn=b.c.div(rn||(rn=Object(x.a)(["\n  flex: 1 1 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 4px 4px 0;\n\n  & h3 {\n    font-size: 20px;\n    margin: 8px auto 0;\n  }\n  & .overridesContainer {\n    width: 100%;\n    flex: 1 1 100%;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    grid-template-areas:\n      '. . primary  swap  secondary'\n      'colors colors box1  swap1  box2'\n      'fonts fonts box3  swap2  box4';\n    gap: 4px 4px;\n    margin-top: 4px;\n  }\n  & .primary {\n    grid-area: primary;\n    font-family: ",";\n    font-weight: ",";\n  }\n  & .secondary {\n    grid-area: secondary;\n    font-family: ",";\n    font-weight: ",";\n  }\n  & .colors {\n    grid-area: colors;\n  }\n  & .fonts {\n    grid-area: fonts;\n  }\n  & .swap1,\n  .swap2 {\n    margin: auto;\n    font-size: 14px;\n    cursor: pointer;\n  }\n  & .swap1 {\n    grid-area: swap1;\n  }\n  & .swap2 {\n    grid-area: swap2;\n  }\n  & .box1 {\n    grid-area: box1;\n  }\n  & .box2 {\n    grid-area: box2;\n  }\n  & .box3 {\n    grid-area: box3;\n  }\n  & .box4 {\n    grid-area: box4;\n  }\n  & .box1,\n  .box2,\n  .box3,\n  .box4 {\n    margin: auto;\n  }\n  & .colors,\n  .fonts {\n    font-size: 16px;\n    margin: 6px auto auto;\n  }\n  & .primary,\n  .secondary {\n    font-size: 14px;\n    margin: auto auto 4px;\n  }\n"])),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight})),wn=function(){var n=Nn(),e=n.selectedStyles,t=n.setSelectedStyles,o=Object(u.useState)({PrimaryColorOpen:!1,SecondaryColorOpen:!1,PrimaryFontOpen:!1,SecondaryFontOpen:!1}),r=Object(m.a)(o,2),i=r[0],c=r[1],a=function(n){var e=i;Object.keys(e).forEach((function(n){return e[n]=!1})),c(Object(I.a)(Object(I.a)({},e),{},Object(hn.a)({},n,!0)))},s=function(){c({PrimaryColorOpen:!1,SecondaryColorOpen:!1,PrimaryFontOpen:!1,SecondaryFontOpen:!1})};return Object(g.jsxs)(Fn,{children:[Object(g.jsx)("h3",{children:"Preset Overrides"}),Object(g.jsxs)("div",{className:"overridesContainer",children:[Object(g.jsx)("h5",{className:"primary",children:"Primary"}),Object(g.jsx)("h5",{className:"secondary",children:"Secondary"}),Object(g.jsx)("h5",{className:"colors",children:"Colors"}),Object(g.jsx)("h5",{className:"fonts",children:"Fonts"}),Object(g.jsx)(j.a,{className:"swap1",icon:O.c,size:"lg",onClick:function(){var n=e.presetStyles.primaryHue,o=e.presetStyles.primaryLightness,r=e.presetStyles.secondaryHue,i=e.presetStyles.secondaryLightness;t(Object(I.a)(Object(I.a)({},e),{},{presetName:"Custom",PresetID:4,presetStyles:Object(I.a)(Object(I.a)({},e.presetStyles),{},{primaryHue:"".concat(r),primaryLightness:i,secondaryHue:"".concat(n),secondaryLightness:o})}))}}),Object(g.jsx)(j.a,{className:"swap2",icon:O.c,size:"lg",onClick:function(){var n=e.presetStyles.primaryFont,o=e.presetStyles.primaryFontWeight,r=e.presetStyles.secondaryFont,i=e.presetStyles.secondaryFontWeight;t(Object(I.a)(Object(I.a)({},e),{},{presetName:"Custom",PresetID:4,presetStyles:Object(I.a)(Object(I.a)({},e.presetStyles),{},{primaryFont:"".concat(r),primaryFontWeight:i,secondaryFont:"".concat(n),secondaryFontWeight:o})}))}}),Object(g.jsx)(Sn,{handleClick:function(){return a("PrimaryColorOpen")},open:i.PrimaryColorOpen,closeAllBoxes:s,className:"box1",name:"PrimaryColor",type:"hue",children:"Pc"}),Object(g.jsx)(Sn,{handleClick:function(){return a("SecondaryColorOpen")},open:i.SecondaryColorOpen,closeAllBoxes:s,className:"box2",name:"SecondaryColor",id:"Sc",type:"hue",children:"Sc"},"Sc"),Object(g.jsx)(Sn,{handleClick:function(){return a("PrimaryFontOpen")},open:i.PrimaryFontOpen,closeAllBoxes:s,className:"box3",name:"PrimaryFont",id:"Pf",type:"font",children:"Pf"},"Pf"),Object(g.jsx)(Sn,{handleClick:function(){return a("SecondaryFontOpen")},open:i.SecondaryFontOpen,closeAllBoxes:s,className:"box4",name:"SecondaryFont",id:"Sf",type:"font",children:"Sf"},"Sf")]})]})},kn=b.c.div(cn||(cn=Object(x.a)(["\n  height: 280px;\n  width: 250px;\n  position: fixed;\n  top: 8px;\n  left: ",";\n  border-radius: 9px;\n  box-shadow: 5px 8px 7px 4px rgba(23, 23, 23, 0.4);\n  padding: 8px;\n  background: ",";\n  color: ",";\n  font-family: ",";\n  font-weight: ",";\n  display: flex;\n  flex-direction: column;\n  z-index: 100000;\n  transition: left 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  & .title {\n    min-height: 40px;\n    display: flex;\n    margin-bottom: 4px;\n    & h2 {\n      font-family: ",";\n      font-weight: ",";\n      font-size: 24px;\n      margin: 0 auto auto;\n    }\n  }\n  & .themeMenuToggler {\n    position: absolute;\n    right: ",";\n    transform: ",";\n    top: 8px;\n    color: ",";\n    transition: ",";\n  }\n"])),(function(n){return n.ThemeMenuOpen?"8px":"-260px"}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.fonts.secondaryFont.font}),(function(n){return n.theme.fonts.secondaryFont.fontWeight}),(function(n){return n.theme.fonts.primaryFont.font}),(function(n){return n.theme.fonts.primaryFont.fontWeight}),(function(n){return n.ThemeMenuOpen?"12px":"-36px"}),(function(n){return n.ThemeMenuOpen?"rotate(180deg)":"rotate(0)"}),(function(n){return n.ThemeMenuOpen?n.theme.colors.secondaryColor:n.theme.colors.primaryColor}),(function(n){return n.ThemeMenuOpen?"all .1s .1s":"all 0.5s .75s"})),Pn=Object(u.createContext)(void 0),zn=function(n){var e=n.children,t=Object(u.useState)(Object(I.a)({},sn[Math.floor(Math.random()*sn.length)])),o=Object(m.a)(t,2),r=o[0],i=o[1],c=Object(u.useCallback)((function(){var n=function(n){var e=n.primaryHue,t=n.primaryLightness,o=n.secondaryHue,r=n.secondaryLightness,i=n.primaryFont,c=n.primaryFontWeight,a=n.secondaryFont,s=n.secondaryFontWeight;return Y(i,c,a,s),{primaryHue:G(e),primaryLightness:q(t),secondaryHue:G(o),secondaryLightness:q(r),primaryFont:K(i),primaryFontWeight:Q(c),secondaryFont:K(a),secondaryFontWeight:Q(s)}}(r.presetStyles);return function(n){var e=n.primaryHue,t=n.primaryLightness,o=n.secondaryHue,r=n.secondaryLightness,i=n.primaryFont,c=n.primaryFontWeight,a=n.secondaryFont,s=n.secondaryFontWeight,l=Z("hsl(".concat(e,", ").concat(t,")")),d=Z("hsl(".concat(o,", ").concat(r,")"));return{colors:{primaryColor:"hsl(".concat(e,", ").concat(t,")"),secondaryColor:"hsl(".concat(o,", ").concat(r,")"),primaryHex:"".concat(l),secondaryHex:"".concat(d)},fonts:{primaryFont:{font:"".concat(i),fontWeight:"".concat(c)},secondaryFont:{font:"".concat(a),fontWeight:"".concat(s)}}}}(Object(I.a)({},n))}),[r]);return Object(u.useEffect)((function(){c()}),[r,c]),Object(g.jsx)(Pn.Provider,{value:{updatedTheme:c,selectedStyles:r,setSelectedStyles:i,presetThemes:sn},children:Object(g.jsx)(b.a,{theme:c,children:e})})},Nn=function(){var n=Object(u.useContext)(Pn);if(void 0===n)throw new Error("useThemeBuilderContext must be used within a ThemeBuilderProvider");return n};zn.ThemeMenu=function(){var n=Object(u.useState)(!1),e=Object(m.a)(n,2),t=e[0],o=e[1];return Object(g.jsxs)(kn,{ThemeMenuOpen:t,children:[Object(g.jsx)("div",{className:"title",children:Object(g.jsx)("h2",{children:"Preset Select"})}),Object(g.jsx)("div",{className:"presetSelect",children:Object(g.jsx)(pn,{classNamePrefix:"Select"})}),Object(g.jsx)(wn,{}),Object(g.jsx)("div",{className:"themeMenuToggler",onClick:function(){o(!t)},children:Object(g.jsx)(j.a,{className:"swap1",icon:O.b,size:"lg"})})]})};var Mn,Ln=Object(b.b)(an||(an=Object(x.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n  }\n"]))),Wn=b.c.div(Mn||(Mn=Object(x.a)(["\n  height: 100vh;\n  background: ","BF;\n"])),(function(n){return n.theme.colors.secondaryHex}));var Bn=function(){return Object(g.jsxs)(zn,{children:[Object(g.jsx)(zn.ThemeMenu,{}),Object(g.jsx)(Wn,{children:Object(g.jsx)(V,{})}),Object(g.jsx)(Ln,{})]})},_n=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};f.a.render(Object(g.jsx)(p.a.StrictMode,{children:Object(g.jsx)(Bn,{})}),document.getElementById("root")),_n()}},[[66,1,2]]]);
//# sourceMappingURL=main.76e443d1.chunk.js.map