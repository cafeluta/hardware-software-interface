"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[8561],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>g});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?t.createElement(g,a(a({ref:n},d),{},{components:r})):t.createElement(g,a({ref:n},d))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6001:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(8168),i=(r(6540),r(5680));const o={},a="Writeup",l={unversionedId:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/solution/README",id:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/solution/README",title:"Writeup",description:"The exercise requires finding a randomly generated value in the main function using gdb for data extraction and Ghidra for understanding the code (it is designed to be solved before the assembly language labs).",source:"@site/docs/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/solution/README.md",sourceDirName:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/solution",slug:"/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/solution/",permalink:"/hardware-software-interface/20/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/solution/",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"writeup"},"Writeup"),(0,i.yg)("p",null,"The exercise requires finding a randomly generated value in the ",(0,i.yg)("inlineCode",{parentName:"p"},"main")," function using ",(0,i.yg)("inlineCode",{parentName:"p"},"gdb")," for data extraction and Ghidra for understanding the code (it is designed to be solved before the assembly language labs)."),(0,i.yg)("p",null,"Upon completion, the code displays a link to a randomly chosen video from a list.\nThe list of encrypted and base64-encoded links is stored in the variable ",(0,i.yg)("inlineCode",{parentName:"p"},"enc_b64"),", and the list of links is stored in the variable ",(0,i.yg)("inlineCode",{parentName:"p"},"links"),"."),(0,i.yg)("p",null,"The plaintext list is defined only if the macro ",(0,i.yg)("inlineCode",{parentName:"p"},"REENCRYPT")," is defined.\nFor solving the exercises, the macro is not defined, and the list is not visible."))}u.isMDXComponent=!0}}]);