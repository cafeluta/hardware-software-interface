"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[4849],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,g=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},i="Sets",s={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Sets/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Sets/README",title:"Sets",description:"You will solve the exercises starting from the sets.asm file located in the drills/tasks/sets directory.",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Sets/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Sets",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Sets/",permalink:"/hardware-software-interface/22/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Sets/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Grumpy Jumps",permalink:"/hardware-software-interface/22/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Grumpy Jumps/"},next:{title:"Min",permalink:"/hardware-software-interface/22/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Min/"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sets"},"Sets"),(0,a.yg)("p",null,"You will solve the exercises starting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"sets.asm")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/sets")," directory."),(0,a.yg)("p",null,"You need to implement operations on sets that can contain elements between 0 and 31.\nAn efficient way to do this (both in terms of space and speed) would be to represent sets so that a register represents a set.\nEach bit in the register represents an element in the set (if bit i is set, then the set contains element i)."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),": For example: if ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," contains the representation of the set ",(0,a.yg)("inlineCode",{parentName:"p"},"{0,2,4}"),", the register value would be ",(0,a.yg)("inlineCode",{parentName:"p"},"2^0 + 2^2 + 2^4 = 1 + 4 + 16 = 21"),".\nEducate yourself about the available instructions on the ",(0,a.yg)("a",{parentName:"p",href:"http://www.cs.virginia.edu/~evans/cs216/guides/x86.html"},"x86 architecture"),".")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"You have two defined sets.\nWhat values do they contain?\nPerform the union of the two sets.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Use the ",(0,a.yg)("inlineCode",{parentName:"p"},"or")," instruction to add two new elements to the set."))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),': Take advantage of the fact that the current sets, although they have "space" for 32 bits, only use 8 bits.\nIf you ',(0,a.yg)("inlineCode",{parentName:"p"},"or")," with a number greater than 255 (",(0,a.yg)("inlineCode",{parentName:"p"},"0xff"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"2^8-1"),") which has two active bits, you will effectively add two new elements to the set.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Perform the intersection of the two sets.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Determine the elements missing from the ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," set for it to be complete."))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),": You need to take the complement of the number using the ",(0,a.yg)("inlineCode",{parentName:"p"},"not")," instruction.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Remove an element from the first set.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Find the difference between the sets."))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE"),": In order to display the answer, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"PRINTF32")," macro.\nFor example:"),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-assembly"},"PRINTF32 `The union is: \\x0`\nPRINTF32 `%u\\n\\x0`, `EAX`\n"))),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/22/Lab%205%20-%20Introduction%20to%20Assembly%20Language/x86%20Architecture%20Family/Reading/"},"this")," reading material."))}m.isMDXComponent=!0}}]);