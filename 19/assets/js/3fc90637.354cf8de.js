"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1464],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=i,y=m["".concat(o,".").concat(g)]||m[g]||d[g]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(8168),i=(r(6540),r(5680));const a={},l="Multiplying Two Numbers",s={unversionedId:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Multiply/README",id:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Multiply/README",title:"Multiplying Two Numbers",description:"1. Multiplying Two Numbers represented as Bytes",source:"@site/docs/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Multiply/README.md",sourceDirName:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Multiply",slug:"/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Multiply/",permalink:"/hardware-software-interface/19/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Multiply/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Division of Two Numbers",permalink:"/hardware-software-interface/19/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Divide/"},next:{title:"Sum of first N natural numbers squared",permalink:"/hardware-software-interface/19/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Sum of first N numbers squared/"}},o={},p=[{value:"1. Multiplying Two Numbers represented as Bytes",id:"1-multiplying-two-numbers-represented-as-bytes",level:2},{value:"2. Multiplying Two Numbers represented as Words / Double Words",id:"2-multiplying-two-numbers-represented-as-words--double-words",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"multiplying-two-numbers"},"Multiplying Two Numbers"),(0,i.yg)("h2",{id:"1-multiplying-two-numbers-represented-as-bytes"},"1. Multiplying Two Numbers represented as Bytes"),(0,i.yg)("p",null,"Go through, run, and test the code from the file ",(0,i.yg)("inlineCode",{parentName:"p"},"multiply.asm"),".\nIn this program, we multiply two numbers defined as bytes.\nTo access them, we use a construction like ",(0,i.yg)("inlineCode",{parentName:"p"},"byte [register]"),"."),(0,i.yg)("p",null,"When performing multiplication, the process is as follows, as described ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/X86_Assembly/Arithmetic"},"here"),":"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"We place the multiplicand in the multiplicand register, meaning:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"if we're operating on a byte (8 bits, one byte), we place the multiplicand in the ",(0,i.yg)("inlineCode",{parentName:"li"},"al")," register;"),(0,i.yg)("li",{parentName:"ul"},"if we're operating on a word (16 bits, 2 bytes), we place the multiplicand in the ",(0,i.yg)("inlineCode",{parentName:"li"},"ax")," register;"),(0,i.yg)("li",{parentName:"ul"},"if we're operating on a double word (32 bits, 4 bytes), we place the multiplicand in the ",(0,i.yg)("inlineCode",{parentName:"li"},"eax")," register."))),(0,i.yg)("li",{parentName:"ol"},"The multiplier is passed as an argument to the ",(0,i.yg)("inlineCode",{parentName:"li"},"mul")," mnemonic.\nThe multiplier must have the same size as the multiplicand."),(0,i.yg)("li",{parentName:"ol"},"The result is placed in two registers (the high part and the low part).")),(0,i.yg)("h2",{id:"2-multiplying-two-numbers-represented-as-words--double-words"},"2. Multiplying Two Numbers represented as Words / Double Words"),(0,i.yg)("p",null,"Update the marked area with ",(0,i.yg)("inlineCode",{parentName:"p"},"TODO")," in the file ",(0,i.yg)("inlineCode",{parentName:"p"},"multiply.asm")," to allow multiplication of ",(0,i.yg)("inlineCode",{parentName:"p"},"word")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"dword")," numbers, namely ",(0,i.yg)("inlineCode",{parentName:"p"},"num1_dw")," with ",(0,i.yg)("inlineCode",{parentName:"p"},"num2_dw"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"num1_dd")," with ",(0,i.yg)("inlineCode",{parentName:"p"},"num2_dd"),"."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"TIP"),": For multiplying word numbers (16 bits), the components are arranged as follows:"),(0,i.yg)("ul",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ul"},"Place the multiplicand in the ",(0,i.yg)("inlineCode",{parentName:"li"},"ax")," register."),(0,i.yg)("li",{parentName:"ul"},"The argument of the ",(0,i.yg)("inlineCode",{parentName:"li"},"mul")," instruction, the multiplier (possibly another register), is 16 bits (either a value or a register such as ",(0,i.yg)("inlineCode",{parentName:"li"},"bx"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"cx"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"dx"),")."),(0,i.yg)("li",{parentName:"ul"},"The result of the multiplication is arranged in the pair ",(0,i.yg)("inlineCode",{parentName:"li"},"dx:ax"),", where the high part of the result is in the ",(0,i.yg)("inlineCode",{parentName:"li"},"DX")," register, and the low part of the result is in the ",(0,i.yg)("inlineCode",{parentName:"li"},"AX")," register.")),(0,i.yg)("p",{parentName:"blockquote"},"For multiplying ",(0,i.yg)("inlineCode",{parentName:"p"},"dword")," numbers (32 bits), the components are arranged as follows:"),(0,i.yg)("ul",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ul"},"Place the multiplicand in the ",(0,i.yg)("inlineCode",{parentName:"li"},"eax")," register."),(0,i.yg)("li",{parentName:"ul"},"The argument of the ",(0,i.yg)("inlineCode",{parentName:"li"},"mul")," instruction, the multiplier (possibly another register), is 32 bits (either a value or a register such as ",(0,i.yg)("inlineCode",{parentName:"li"},"ebx"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"ecx"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"edx"),")."),(0,i.yg)("li",{parentName:"ul"},"The result of the multiplication is arranged in the pair ",(0,i.yg)("inlineCode",{parentName:"li"},"edx:eax"),", where the high part of the result is in the ",(0,i.yg)("inlineCode",{parentName:"li"},"edx")," register, and the low part of the result is in the ",(0,i.yg)("inlineCode",{parentName:"li"},"eax")," register.")),(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"NOTE"),": When displaying the result, use the ",(0,i.yg)("inlineCode",{parentName:"p"},"PRINTF32")," macro to display the two registers containing the result:"),(0,i.yg)("ul",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ul"},"Registers ",(0,i.yg)("inlineCode",{parentName:"li"},"dx")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"ax")," for multiplying word numbers."),(0,i.yg)("li",{parentName:"ul"},"Registers ",(0,i.yg)("inlineCode",{parentName:"li"},"edx")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"eax")," for multiplying dword numbers."))),(0,i.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,i.yg)("a",{parentName:"p",href:"/hardware-software-interface/19/Lab%206%20-%20Registers%20and%20Memory%20Addressing/Registers/Reading/"},"this")," reading material."))}d.isMDXComponent=!0}}]);