"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1605],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6602:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(8168),a=(t(6540),t(5680));const o={},i="5. GCD - Greatest Common Divisor",s={unversionedId:"Lab 8 - The Stack/Introduction/Drills/Tasks/Bonus - GCD/README",id:"Lab 8 - The Stack/Introduction/Drills/Tasks/Bonus - GCD/README",title:"5. GCD - Greatest Common Divisor",description:"Open gcd.asm and run the program.",source:"@site/docs/Lab 8 - The Stack/Introduction/Drills/Tasks/Bonus - GCD/README.md",sourceDirName:"Lab 8 - The Stack/Introduction/Drills/Tasks/Bonus - GCD",slug:"/Lab 8 - The Stack/Introduction/Drills/Tasks/Bonus - GCD/",permalink:"/hardware-software-interface/22/Lab 8 - The Stack/Introduction/Drills/Tasks/Bonus - GCD/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"4. Local Var",permalink:"/hardware-software-interface/22/Lab 8 - The Stack/Introduction/Drills/Tasks/Local Var/"},next:{title:"Lab 11 - Buffer Management. Buffer Overflow",permalink:"/hardware-software-interface/22/Lab 11 - Buffer Management. Buffer Overflow/"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"5-gcd---greatest-common-divisor"},"5. GCD - Greatest Common Divisor"),(0,a.yg)("p",null,"Open ",(0,a.yg)("inlineCode",{parentName:"p"},"gcd.asm")," and run the program.\nThe code calculates the greatest common divisor (GCD) of two numbers given as parameters using the ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"edx")," registers, and then stores the calculated value back in the ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," register."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Make the necessary modifications so that the error message - ",(0,a.yg)("inlineCode",{parentName:"li"},"Segmentation fault (core dumped)")," - no longer appears."),(0,a.yg)("li",{parentName:"ol"},"Within the ",(0,a.yg)("inlineCode",{parentName:"li"},"print")," label, display the result in the following format:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"gcd(49,28)=7\n")),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/22/Lab%208%20-%20The%20Stack/Introduction/Reading/"},"this")," reading material"))}f.isMDXComponent=!0}}]);