"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[5820],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>g});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8449:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(8168),a=(n(6540),n(5680));const o={},i="Reverse: Old hits",s={unversionedId:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/README",id:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/README",title:"Reverse: Old hits",description:"Using Ghidra, as well as gdb, analyze the old-hits/support/old-hits binary and obtain the secret information.",source:"@site/docs/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/README.md",sourceDirName:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits",slug:"/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/",permalink:"/hardware-software-interface/19/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/19/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/"},next:{title:"Lab 5 - Introduction to Assembly Language",permalink:"/hardware-software-interface/19/Lab 5 - Introduction to Assembly Language/"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"reverse-old-hits"},"Reverse: Old hits"),(0,a.yg)("p",null,"Using ",(0,a.yg)("inlineCode",{parentName:"p"},"Ghidra"),", as well as ",(0,a.yg)("inlineCode",{parentName:"p"},"gdb"),", analyze the ",(0,a.yg)("inlineCode",{parentName:"p"},"old-hits/support/old-hits")," binary and obtain the secret information.\nThe program generates a random value and asks you to guess another value calculated based on the aforementioned one."),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"../../../Guides/Ghidra%20Tutorial/README#ghidra-tutorial-decompiling"},"this")," reading material."))}d.isMDXComponent=!0}}]);