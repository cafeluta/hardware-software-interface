"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[7212],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={},i="GDB Tutorial: Debugging a Segfault",u={unversionedId:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Guides/GDB Tutorial - Debugging a Segfault/README",id:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Guides/GDB Tutorial - Debugging a Segfault/README",title:"GDB Tutorial: Debugging a Segfault",description:"To follow this guide, you'll need to use the segfault.c file located in the guides/segfault/support directory.",source:"@site/docs/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Guides/GDB Tutorial - Debugging a Segfault/README.md",sourceDirName:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Guides/GDB Tutorial - Debugging a Segfault",slug:"/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Guides/GDB Tutorial - Debugging a Segfault/",permalink:"/hardware-software-interface/20/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Guides/GDB Tutorial - Debugging a Segfault/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/hardware-software-interface/20/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Guides/"},next:{title:"Drills",permalink:"/hardware-software-interface/20/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Drills/"}},l={},s=[],c={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"gdb-tutorial-debugging-a-segfault"},"GDB Tutorial: Debugging a Segfault"),(0,a.yg)("p",null,"To follow this guide, you'll need to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"segfault.c")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"guides/segfault/support")," directory."),(0,a.yg)("p",null,"Compile and run the source code from the skeleton (if you are not using the Makefile, make sure to compile with the -g flag).\nIn short, the program takes a number n, allocates a vector of size n, and initializes it with the first n numbers from the Fibonacci sequence.\nHowever, after running the program, you see: Segmentation fault (core dumped)."),(0,a.yg)("p",null,"Start GDB with the executable:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"gdb ./segfault\n")),(0,a.yg)("p",null,"Once you have started GDB, all interaction happens through the GDB prompt.\nRun the program using the ",(0,a.yg)("inlineCode",{parentName:"p"},"run")," command.\nWhat do you notice?\nGDB hangs at the input reads."),(0,a.yg)("p",null,"Set a breakpoint at ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," using the ",(0,a.yg)("inlineCode",{parentName:"p"},"break main")," command.\nYou will see the message in the prompt:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"Breakpoint 1 at 0x7d3: file seg.c, line 21 /* The memory address should not be the same */\n")),(0,a.yg)("p",null,"Next, we will step through the instructions one by one.\nTo do this, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"next")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"n")," command (watch the GDB cursor to see the current instruction and repeat the process).\nYou will notice that GDB hangs at ",(0,a.yg)("inlineCode",{parentName:"p"},"scanf"),", so input a value for ",(0,a.yg)("inlineCode",{parentName:"p"},"n")," and continue stepping through.\nIf you have entered a large value for ",(0,a.yg)("inlineCode",{parentName:"p"},"n")," and want to skip the iteration, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"continue")," command.\nEventually, you will reach the line ",(0,a.yg)("inlineCode",{parentName:"p"},"v[423433] = 3;"),", and GDB will display:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"Program received signal SIGSEGV, Segmentation fault\n")),(0,a.yg)("p",null,"Inspect the memory at ",(0,a.yg)("inlineCode",{parentName:"p"},"v[423433]")," using ",(0,a.yg)("inlineCode",{parentName:"p"},"x &v[423433]")," and you will receive the message:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"Cannot access memory at address 0x5555558f3e94 /* The memory address should not be the same */\n")),(0,a.yg)("p",null,"What happened?\nWe accessed a memory area with restricted access."))}g.isMDXComponent=!0}}]);