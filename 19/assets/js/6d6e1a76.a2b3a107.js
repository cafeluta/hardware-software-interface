"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[2611],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>u});var o=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=o.createContext({}),s=function(e){var n=o.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=t,u=m["".concat(p,".").concat(d)]||m[d]||g[d]||i;return r?o.createElement(u,a(a({ref:n},c),{},{components:r})):o.createElement(u,a({ref:n},c))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:t,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7518:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=r(8168),t=(r(6540),r(5680));const i={},a="Online C Compiling",l={unversionedId:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Compiler Explorer Tutorial/README",id:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Compiler Explorer Tutorial/README",title:"Online C Compiling",description:"An interesting tool to observe how C code translates into assembly language is Compiler Explorer.",source:"@site/docs/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Compiler Explorer Tutorial/README.md",sourceDirName:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Compiler Explorer Tutorial",slug:"/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Compiler Explorer Tutorial/",permalink:"/hardware-software-interface/19/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Compiler Explorer Tutorial/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/hardware-software-interface/19/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/"},next:{title:"Ghidra Tutorial: Decompiling",permalink:"/hardware-software-interface/19/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Ghidra Tutorial/"}},p={},s=[],c={toc:s},m="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(m,(0,o.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"online-c-compiling"},"Online C Compiling"),(0,t.yg)("p",null,"An interesting tool to observe how C code translates into assembly language is Compiler Explorer."),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Go to ",(0,t.yg)("a",{parentName:"li",href:"https://gcc.godbolt.org/"},"Compiler Explorer"),"."),(0,t.yg)("li",{parentName:"ol"},'Load the "sum over array" program from the examples (accessible using the load button, shaped like a floppy disk).'),(0,t.yg)("li",{parentName:"ol"},"Make sure ",(0,t.yg)("inlineCode",{parentName:"li"},"x86-64 gcc 4.8.2")," is selected under ",(0,t.yg)("inlineCode",{parentName:"li"},"Compiler:"),"."),(0,t.yg)("li",{parentName:"ol"},"Use the option ",(0,t.yg)("inlineCode",{parentName:"li"},"-m32")," (in ",(0,t.yg)("inlineCode",{parentName:"li"},"Compiler options"),") to display code in 32-bit assembly language (as opposed to 64-bit by default)."),(0,t.yg)("li",{parentName:"ol"},"If you see the message ",(0,t.yg)("inlineCode",{parentName:"li"},"<Compilation failed>"),", add the option ",(0,t.yg)("inlineCode",{parentName:"li"},"-std=c99"),"."),(0,t.yg)("li",{parentName:"ol"},"Initially, the code might be quite cumbersome.\nTo make it more human-readable, add the option ",(0,t.yg)("inlineCode",{parentName:"li"},"-O2")," to the compilation options (",(0,t.yg)("inlineCode",{parentName:"li"},"Compiler options"),")."),(0,t.yg)("li",{parentName:"ol"},"You may notice the presence of symbols like ",(0,t.yg)("inlineCode",{parentName:"li"},".L3:")," and ",(0,t.yg)("inlineCode",{parentName:"li"},".L4:"),".\nThese represent fixed points in the program, labels, quite similar to what is found in C."),(0,t.yg)("li",{parentName:"ol"},"Go through the compilers corresponding to the following architectures one by one: ARM, ARM64, AVR, PowerPC.\n",(0,t.yg)("inlineCode",{parentName:"li"},"Note"),": for ARM, ARM64, and AVR, you will need to remove the previously set -m32 flag.\nYou can observe how the generated code differs from one architecture to another."),(0,t.yg)("li",{parentName:"ol"},"Also, try the following compilers: ",(0,t.yg)("inlineCode",{parentName:"li"},"clang")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"icc"),".\nAs you can see, even though it's the same C code and the same architecture, the generated code differs.\nThis happens because each compiler can have a different optimization and code generation strategy.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"NOTE"),":\n",(0,t.yg)("a",{parentName:"p",href:"https://clang.llvm.org/"},"clang")," is an open-source C/C++ compiler.\nIt is often used in IDEs due to its very suggestive compilation error messages."),(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"NOTE"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"icc")," is the C/C++ compiler from Intel.")),(0,t.yg)("p",null,"Write the following code sequence in the Code editor area:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-C"},"int simple_fn(void)\n{\n    int a = 1;\n    a++;\n    return a;\n}\n")),(0,t.yg)("p",null,"Observe the assembly code when the compilation options (",(0,t.yg)("inlineCode",{parentName:"p"},"Compiler options"),") are ",(0,t.yg)("inlineCode",{parentName:"p"},"-m32"),", and when the compilation options are ",(0,t.yg)("inlineCode",{parentName:"p"},"-m32 -O2"),".\nNotice the effect of optimization options on the generated assembly code."))}g.isMDXComponent=!0}}]);