"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[3518],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,g=u["".concat(l,".").concat(y)]||u[y]||m[y]||i;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6614:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(8168),a=(t(6540),t(5680));const i={},o="Pixels",s={unversionedId:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Pixels/README",id:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Pixels/README",title:"Pixels",description:"You will solve this exercise starting from the pixels.c file located in the drills/tasks/pixels/support directory.",source:"@site/docs/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Pixels/README.md",sourceDirName:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Pixels",slug:"/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Pixels/",permalink:"/hardware-software-interface/20/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Pixels/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Deleting the First Occurrence of a Pattern from a String",permalink:"/hardware-software-interface/20/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Deleting the First Occurrence of a Pattern from a String/"},next:{title:"Find Maximum in Array",permalink:"/hardware-software-interface/20/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Find Maximum in Array/"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"pixels"},"Pixels"),(0,a.yg)("p",null,"You will solve this exercise starting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"pixels.c")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/pixels/support")," directory."),(0,a.yg)("p",null,"Consider the structure of a pixel and an image described in the ",(0,a.yg)("inlineCode",{parentName:"p"},"pixel.h")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"typedef struct Pixel {\n    unsigned char R;\n    unsigned char G;\n    unsigned char B;\n} Pixel;\n\ntypedef struct Picture {\n    int height;\n    int width;\n    Pixel **pix_array;\n} Picture;\n")),(0,a.yg)("p",null,"Implement the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"reverse_pic(struct picture *pic)")," function, which takes a Picture as a parameter and returns the reversed image.\nBy a reversed image, we mean the inversion of the rows of the ",(0,a.yg)("inlineCode",{parentName:"li"},"pix_array")," matrix in the Picture structure."),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"color_to_gray(struct picture *pic)")," function, which takes a Picture as a parameter and returns the new image by converting each pixel to its grayscale value.\nThe grayscale value of a pixel is calculated using the following formula:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"p.r = 0.3 * p.r;\np.g = 0.59 * p.g;\np.b = 0.11 * p.b;\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"IMPORTANT:"),"\nAccessing the elements of the pixel matrix will be done using pointer operations.\n",(0,a.yg)("strong",{parentName:"p"},"Hint:")," For simplicity, you can use the following macro:"),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-c"},"#define GET_PIXEL(a, i ,j) (*(*((a) + (i)) + (j)))\n"))),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/20/Lab%202%20-%20Memory%20Operations.%20Introduction%20to%20GDB/Memory%20Operations/Reading/#structures-and-pointers-to-structures"},"this")," reading material."))}m.isMDXComponent=!0}}]);