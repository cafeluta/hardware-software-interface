"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[658],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,y=c["".concat(l,".").concat(g)]||c[g]||p[g]||i;return a?n.createElement(y,s(s({ref:t},d),{},{components:a})):n.createElement(y,s({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9211:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(8168),r=(a(6540),a(5680));const i={},s="Lab 7 - Structures, vectors and strings",o={unversionedId:"Labs/lab7",id:"Labs/lab7",title:"Lab 7 - Structures, vectors and strings",description:"Structured Data (Structures, Arrays and String Operations)",source:"@site/docs/Labs/lab7.md",sourceDirName:"Labs",slug:"/Labs/lab7",permalink:"/hardware-software-interface/27/Labs/lab7",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Lab 6 - Registers and Memory Addressing",permalink:"/hardware-software-interface/27/Labs/lab6"},next:{title:"Lab 11 - Buffer Management. Buffer Overflow",permalink:"/hardware-software-interface/27/Labs/lab11"}},l={},u=[{value:"Structured Data (Structures, Arrays and String Operations)",id:"structured-data-structures-arrays-and-string-operations",level:2},{value:"Structures",id:"structures",level:3},{value:"Declaring a Structure",id:"declaring-a-structure",level:4},{value:"Instantiating a Structure",id:"instantiating-a-structure",level:4},{value:"Accessing Values from a Structure",id:"accessing-values-from-a-structure",level:4},{value:"Guide: Students",id:"guide-students",level:2},{value:"Task: Fibonacci Sum",id:"task-fibonacci-sum",level:2},{value:"Task: Modifying a Structure",id:"task-modifying-a-structure",level:2},{value:"Task: Getter-Setter",id:"task-getter-setter",level:2},{value:"Structured Data (Structures, Arrays and String Operations)",id:"structured-data-structures-arrays-and-string-operations-1",level:2},{value:"Arrays",id:"arrays",level:3},{value:"Declaring an Array",id:"declaring-an-array",level:4},{value:"Arrays of Structures",id:"arrays-of-structures",level:3},{value:"Declaring an Array of Structures",id:"declaring-an-array-of-structures",level:4},{value:"Traversing an Array of Structures",id:"traversing-an-array-of-structures",level:4},{value:"Guide: Max",id:"guide-max",level:2},{value:"Task: Finding a Substring in a String",id:"task-finding-a-substring-in-a-string",level:2},{value:"Task: Mul-arrays",id:"task-mul-arrays",level:2},{value:"Task: Courses",id:"task-courses",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"lab-7---structures-vectors-and-strings"},"Lab 7 - Structures, vectors and strings"),(0,r.yg)("h2",{id:"structured-data-structures-arrays-and-string-operations"},"Structured Data (Structures, Arrays and String Operations)"),(0,r.yg)("p",null,"We will introduce the concept of structures in assembly language and work with specialized operations on strings."),(0,r.yg)("h3",{id:"structures"},"Structures"),(0,r.yg)("p",null,"Structures are used to group data of different types that can be used together to create a composite type."),(0,r.yg)("p",null,"Next, we will go through the steps necessary to use a structure: declaration, instantiation, and accessing the fields of a structure."),(0,r.yg)("h4",{id:"declaring-a-structure"},"Declaring a Structure"),(0,r.yg)("p",null,"In NASM, a structure is declared using the construction ",(0,r.yg)("inlineCode",{parentName:"p"},"struc <structure name>"),", followed by a list of fields and terminated with ",(0,r.yg)("inlineCode",{parentName:"p"},"endstruc"),"."),(0,r.yg)("p",null,"Each field of the structure is defined by the following: a label (used to access members), the type specifier, and the number of elements."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"struc mystruct\n    a:    resw 1    ; a will refer to a single word-sized element\n    b:    resd 1    ; b will refer to a single double-word-sized element\n    c:    resb 1    ; c will refer to a single byte-sized element\n    d:    resd 1    ; d will refer to a single double-word-sized element\n    e:    resb 6    ; e will refer to 6 byte-sized elements\nendstruc\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": Here pseudo-instructions from the NASM ",(0,r.yg)("inlineCode",{parentName:"p"},"res")," family are used to define the data type and the number of elements for each of the structure fields.\nFor more details about the ",(0,r.yg)("inlineCode",{parentName:"p"},"res")," syntax, please follow this link: ",(0,r.yg)("a",{parentName:"p",href:"https://www.nasm.us/doc/nasmdoc3.html#section-3.2.2"},"NASM Documentation"))),(0,r.yg)("p",null,"Each label defining a field represents the offset of the field within the structure.\nFor example, ",(0,r.yg)("inlineCode",{parentName:"p"},"b")," will have the value 2, because there are 2 bytes from the beginning of the structure to the ",(0,r.yg)("inlineCode",{parentName:"p"},"b")," field (the first 2 bytes are occupied by the ",(0,r.yg)("inlineCode",{parentName:"p"},"a")," word)."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"WARNING"),": If you want to use the same field name in two different structures, you must prefix the label name with a dot (",(0,r.yg)("inlineCode",{parentName:"p"},"."),") like this:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"struc mystruct1\n    .a:    resw 1\n    .b:    resd 1\nendstruc\n\nstruc mystruct2\n    .a:    resd 16\n    .b:    resw 1\nendstruc\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Use the construction ",(0,r.yg)("inlineCode",{parentName:"p"},"mystruct2.b")," to find the offset value of 'b' within the structure ",(0,r.yg)("inlineCode",{parentName:"p"},"mystruct2"),".")),(0,r.yg)("h4",{id:"instantiating-a-structure"},"Instantiating a Structure"),(0,r.yg)("p",null,"One way to have a structure in memory is to declare it statically in the ",(0,r.yg)("inlineCode",{parentName:"p"},".data")," section.\nThe syntax uses NASM macros ",(0,r.yg)("inlineCode",{parentName:"p"},"istruc")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"iend")," along with the ",(0,r.yg)("inlineCode",{parentName:"p"},"at")," keyword."),(0,r.yg)("p",null,"In the following example, static instantiation of the structure declared above is presented, where ",(0,r.yg)("inlineCode",{parentName:"p"},"struct_var")," is the memory address where the data begins."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"struct_var:\n    istruc mystruct\n        at a, dw        -1\n        at b, dd        0x12345678\n        at c, db        ' '\n        at d, dd        23\n        at e, db        'Gary', 0\n    iend\n")),(0,r.yg)("p",null,"If you define the structure fields using a dot (",(0,r.yg)("inlineCode",{parentName:"p"},"."),"), the instantiation of the structure is done as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"struct_var:\n    istruc mystruct\n        at mystruct.a, dw        -1\n        at mystruct.b, dd        0x12345678\n        at mystruct.c, db        ' '\n        at mystruct.d, dd        23\n        at mystruct.e, db        'Gary', 0\n    iend\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"WARNING"),": To avoid initializing members incorrectly, you must ensure that for each field, the data type in instantiation matches the type in declaration.")),(0,r.yg)("h4",{id:"accessing-values-from-a-structure"},"Accessing Values from a Structure"),(0,r.yg)("p",null,"To access and/or modify a specific member of the instantiated structure, we need to know its address.\nThis address can be obtained by calculating the sum of the starting address of the structure and the offset within the structure of the desired member."),(0,r.yg)("p",null,"The following code sequence demonstrates setting a value in the ",(0,r.yg)("inlineCode",{parentName:"p"},"b")," field of the structure and subsequently displaying the value of this field."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"mov eax, 12345\nmov dword [mystruct + b], eax ; the address of field b is the base address of the statically instantiated structure + the offset of the field (given by the label 'b')\n\nmov ebx, dword [mystruct + b] ; putting the value from field b into the ebx register for display\nPRINTF32 `%d\\n\\x0`, ebx\n")),(0,r.yg)("h2",{id:"guide-students"},"Guide: Students"),(0,r.yg)("p",null,"To follow this guide, you'll need to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"students.asm")," file located in the ",(0,r.yg)("inlineCode",{parentName:"p"},"guides/students/support")," directory."),(0,r.yg)("p",null,"This program iterates through the array of structures representing ",(0,r.yg)("inlineCode",{parentName:"p"},"students")," and prints the name of each student."),(0,r.yg)("h2",{id:"task-fibonacci-sum"},"Task: Fibonacci Sum"),(0,r.yg)("p",null,"You will solve the exercises starting from the ",(0,r.yg)("inlineCode",{parentName:"p"},"fibo_sum.asm")," file located in the ",(0,r.yg)("inlineCode",{parentName:"p"},"drills/tasks/fibonacci")," directory.\nStarting from the ",(0,r.yg)("inlineCode",{parentName:"p"},"fibo_sum.asm")," file, implement a program that calculates the sum of the first N numbers in the Fibonacci sequence using the ",(0,r.yg)("inlineCode",{parentName:"p"},"loop")," instruction.\nThe sum of the first 9 numbers is 54."),(0,r.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,r.yg)("a",{parentName:"p",href:"/hardware-software-interface/27/Labs/lab7#structured-data-(structures,-arrays-and-string-operations)"},"this")," reading material."),(0,r.yg)("h2",{id:"task-modifying-a-structure"},"Task: Modifying a Structure"),(0,r.yg)("p",null,"Write code within the ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," function to modify the fields of the ",(0,r.yg)("inlineCode",{parentName:"p"},"sample_student")," structure so that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"the birth year is ",(0,r.yg)("inlineCode",{parentName:"p"},"1993"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"the age is ",(0,r.yg)("inlineCode",{parentName:"p"},"22"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"the group is ",(0,r.yg)("inlineCode",{parentName:"p"},"323CA")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"WARNING"),": Do not modify what is displayed, modify the structure code.\nDo not touch the display code, that code must remain the same.\nYou need to add at the beginning of the ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," function, in the place marked with ",(0,r.yg)("inlineCode",{parentName:"p"},"TODO"),", the code to modify the structure.\n",(0,r.yg)("strong",{parentName:"p"},"WARNING"),": You need to modify the content of the structure in the code, meaning you need to write to the memory area corresponding to the field in the structure.\nDo not modify the structure in the ",(0,r.yg)("inlineCode",{parentName:"p"},".data")," section, you need to use code to modify the structure.\n",(0,r.yg)("strong",{parentName:"p"},"TIP"),": For modifying the group, you will need to change the third byte/character of the ",(0,r.yg)("inlineCode",{parentName:"p"},"group")," field (i.e., the byte/character with index 2).")),(0,r.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,r.yg)("a",{parentName:"p",href:"/hardware-software-interface/27/Labs/lab7#structured-data-(structures,-arrays-and-string-operations)"},"this")," reading material."),(0,r.yg)("h2",{id:"task-getter-setter"},"Task: Getter-Setter"),(0,r.yg)("p",null,"Write in the ",(0,r.yg)("inlineCode",{parentName:"p"},"getter_setter_printf.asm")," file the instructions needed to display the values of the ",(0,r.yg)("inlineCode",{parentName:"p"},"int_x"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"char_y"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"string_s")," fields from the ",(0,r.yg)("inlineCode",{parentName:"p"},"sample_obj")," object."),(0,r.yg)("p",null,"The program's output after a correct solution should be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"int_x: 1000\nchar_y: a\nstring_s: My string is better than yours\n")),(0,r.yg)("p",null,"Next, overwrite the values of the ",(0,r.yg)("inlineCode",{parentName:"p"},"int_x"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"char_y"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"string_s")," fields in the ",(0,r.yg)("inlineCode",{parentName:"p"},"sample_obj")," object with the values from the ",(0,r.yg)("inlineCode",{parentName:"p"},"new_int"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"new_char"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"new_string")," variables."),(0,r.yg)("p",null,"Validate the results using the display sequence written earlier. After a correct solution, the program's output is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"int_x: 2000\nchar_y: b\nstring_s: Are you sure?\n")),(0,r.yg)("p",null,"Follow the comments marked with ",(0,r.yg)("strong",{parentName:"p"},"TODO"),"."),(0,r.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,r.yg)("a",{parentName:"p",href:"/hardware-software-interface/27/Labs/lab7#structured-data-(structures,-arrays-and-string-operations)"},"this")," reading material."),(0,r.yg)("h2",{id:"structured-data-structures-arrays-and-string-operations-1"},"Structured Data (Structures, Arrays and String Operations)"),(0,r.yg)("h3",{id:"arrays"},"Arrays"),(0,r.yg)("p",null,"We can consider an array as a sequence of elements of the same type, placed contiguously in memory.\nYou might have noticed something similar in previous labs when declaring static character strings in the ",(0,r.yg)("inlineCode",{parentName:"p"},".data")," section."),(0,r.yg)("h4",{id:"declaring-an-array"},"Declaring an Array"),(0,r.yg)("p",null,"In general, declared static data can be initialized or uninitialized.\nDifferentiation is made both by providing an initial value for initialized data and by the NASM syntax used."),(0,r.yg)("p",null,"For example, to declare an array of 100 words initialized with the value 42, we will use the construction:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"section .data\n    my_vect:    times 100    dw 42\n")),(0,r.yg)("p",null,'On the other hand, if we want to declare an uninitialized array of 20 double-word elements, we use instructions from the "res" family as follows:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"section .bss\n    my_vect:    resd 20\n")),(0,r.yg)("h3",{id:"arrays-of-structures"},"Arrays of Structures"),(0,r.yg)("p",null,"Often, we'll need arrays that contain elements larger than a double word.\nTo achieve this, we'll combine the two concepts presented earlier and use arrays of structures.\nOf course, string operation instructions will not work, so we'll have to resort to the classic method of accessing elements: explicit memory addressing."),(0,r.yg)("p",null,"For the example in this section, we create a structure representing a point in a 2D space."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"struc point\n    .x:    resd 1\n    .y:    resd 1\nendstruc\n")),(0,r.yg)("h4",{id:"declaring-an-array-of-structures"},"Declaring an Array of Structures"),(0,r.yg)("p",null,"Since NASM doesn't support any mechanism to explicitly declare an array of structures, we'll need to effectively declare a data section to accommodate our array."),(0,r.yg)("p",null,"Suppose we want a zero-initialized array of 100 elements of the structure type ",(0,r.yg)("inlineCode",{parentName:"p"},"point")," (which is 8 bytes in size), we need to allocate 100 * 8 (= 800) bytes."),(0,r.yg)("p",null,"We obtain:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"section .data\n    point_array:    times 800    db 0\n")),(0,r.yg)("p",null,"In addition, NASM provides an alternative to manually calculating the size of a structure by automatically generating the macro ",(0,r.yg)("inlineCode",{parentName:"p"},"<structure name>_size"),".\nThus, the previous example can become:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"section .data\n    point_array:    times point_size * 100    db 0\n")),(0,r.yg)("p",null,"If we want to declare an uninitialized array of structures, we can use:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"section .bss\n    point_array:    resb point_size * 100\n")),(0,r.yg)("h4",{id:"traversing-an-array-of-structures"},"Traversing an Array of Structures"),(0,r.yg)("p",null,'As mentioned before, to access a field of an element in an array, we need to use normal addressing (particularly "based-indexed with scale" addressing).\nThe formula to find the address of the element is ',(0,r.yg)("inlineCode",{parentName:"p"},"base_of_array + i * size_of_struct"),"."),(0,r.yg)("p",null,"Assuming we have the start address of the array in the ",(0,r.yg)("inlineCode",{parentName:"p"},"ebx")," register and the index of the element we want to access in the ",(0,r.yg)("inlineCode",{parentName:"p"},"eax")," register, the following example demonstrates printing the value of the y field of this element."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"mov ebx, point_array                            ; Move the start address of the array into ebx\nmov eax, 13                                     ; Assume we want the 14th element\nmov edx, [ebx + point_size * eax + point.y]     ; Calculate the address of the desired field between []\n                                                ; and then transfer the value from that address\n                                                ; into the edx register\n\nPRINTF32 `%u\\n\\x0`, edx\n")),(0,r.yg)("p",null,"We traverse the array, having the current index in the eax register at each iteration.\nWe can print the values from both fields of each element in the array with the following program:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"struc   point\n    .x: resd 1\n    .y: resd 1\nendstruc\n\nsection .data\n    point_array: times point_size * 100 db 0\n\nsection .text\n    global CMAIN\n\nCMAIN:\n    push ebp\n    mov ebp, esp\n\n    xor edx, edx\n    xor eax, eax\n\nlabel:\n    mov edx, [point_array + point_size * eax + point.x] ; access x member\n    PRINTF32 `%u\\n\\x0`, edx\n\n    mov edx, [point_array + point_size * eax + point.y] ; access y member\n    PRINTF32 `%u\\n\\x0`, edx\n\n    inc eax ; increment input index\n    cmp eax, 100\n    jl label\n\n    leave\n    ret\n")),(0,r.yg)("h2",{id:"guide-max"},"Guide: Max"),(0,r.yg)("p",null,"To follow this guide, you'll need to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"max.asm")," file located in the ",(0,r.yg)("inlineCode",{parentName:"p"},"guides/max/support")," directory."),(0,r.yg)("p",null,"The program finds the maximum value in an array of 16-bit integers (",(0,r.yg)("inlineCode",{parentName:"p"},"array"),").\nIt iterates through the array, updating the maximum value (",(0,r.yg)("inlineCode",{parentName:"p"},"dx"),") when it finds a larger value.\nFinally, it prints the maximum value using the ",(0,r.yg)("inlineCode",{parentName:"p"},"printf()")," function."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Note"),": For a detailed description of the instruction, check out the following page: ",(0,r.yg)("a",{parentName:"p",href:"https://www.tutorialspoint.com/assembly_programming/assembly_arrays.htm"},"Assembly Arrays Tutorial"))),(0,r.yg)("h2",{id:"task-finding-a-substring-in-a-string"},"Task: Finding a Substring in a String"),(0,r.yg)("p",null,"Find all occurrences of the ",(0,r.yg)("inlineCode",{parentName:"p"},"substring")," substring in the ",(0,r.yg)("inlineCode",{parentName:"p"},"source_text")," string in the ",(0,r.yg)("inlineCode",{parentName:"p"},"find_substring.asm")," file."),(0,r.yg)("p",null,"Display the results as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"Substring found at index: <N>\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"IMPORTANT"),": You cannot use the ",(0,r.yg)("inlineCode",{parentName:"p"},"strstr")," library function (or similar) for this subtask."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"TIP"),": For display, you can use both the ",(0,r.yg)("inlineCode",{parentName:"p"},"PRINTF32")," macro and the ",(0,r.yg)("inlineCode",{parentName:"p"},"printf")," function, as in previous exercises. The steps for display using ",(0,r.yg)("inlineCode",{parentName:"p"},"printf")," are as follows:"),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"push the value you want to display onto the stack (the position where the substring was found)"),(0,r.yg)("li",{parentName:"ul"},"push the address of the ",(0,r.yg)("inlineCode",{parentName:"li"},"print_format")," string onto the stack"),(0,r.yg)("li",{parentName:"ul"},"call the ",(0,r.yg)("inlineCode",{parentName:"li"},"printf")," function"),(0,r.yg)("li",{parentName:"ul"},"clean up the parameters added earlier from the stack by adding the value 8 to the ",(0,r.yg)("inlineCode",{parentName:"li"},"esp")," register (each parameter is 4 bytes)."))),(0,r.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,r.yg)("a",{parentName:"p",href:"/hardware-software-interface/27/Labs/lab7#structured-data-(structures,-arrays-and-string-operations)"},"this")," reading material."),(0,r.yg)("h2",{id:"task-mul-arrays"},"Task: Mul-arrays"),(0,r.yg)("p",null,"You will solve the exercises starting from the ",(0,r.yg)("inlineCode",{parentName:"p"},"mul_arrays.asm")," file located in the ",(0,r.yg)("inlineCode",{parentName:"p"},"drills/tasks/mul-arrays")," directory.\nWrite the Assembly instructions through which, for each pair of one-byte elements with identical indexes from ",(0,r.yg)("inlineCode",{parentName:"p"},"array1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"array2"),", their product is saved in ",(0,r.yg)("inlineCode",{parentName:"p"},"array3"),".\nThen print ",(0,r.yg)("inlineCode",{parentName:"p"},"array3"),"."),(0,r.yg)("p",null,"The program's output after a correct solution should be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"The array that results from the product of the corresponding elements in array1 and array2 is:\n405 12801 1330 59397 2024 6151 280 8449 289 48385\n")),(0,r.yg)("p",null,"Follow the comments marked with ",(0,r.yg)("strong",{parentName:"p"},"TODO"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"IMPORTANT"),": The product should be computed between two one-byte numbers.\nTherefore, the result is stored on two bytes."),(0,r.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,r.yg)("a",{parentName:"p",href:"/hardware-software-interface/27/Labs/lab7#structured-data-(structures,-arrays-and-string-operations)"},"this")," reading material."),(0,r.yg)("h2",{id:"task-courses"},"Task: Courses"),(0,r.yg)("p",null,"You will solve the exercises starting from the ",(0,r.yg)("inlineCode",{parentName:"p"},"courses.asm")," file located in the ",(0,r.yg)("inlineCode",{parentName:"p"},"drills/tasks/courses")," directory.\nFill in the instructions to display the course in which each student is enrolled.\nWe will assume that each student is enrolled in at most one course."),(0,r.yg)("p",null,"The program's output after a correct solution should be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"The students list is:\nVlad ---- Assembly\nAndrew ---- Linear Algebra\nKim ---- Linear Algebra\nGeorge ---- Physics\nKate ---- Student unassigned :(\n")),(0,r.yg)("p",null,"Follow the comments marked with ",(0,r.yg)("strong",{parentName:"p"},"TODO"),"."),(0,r.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,r.yg)("a",{parentName:"p",href:"/hardware-software-interface/27/Labs/lab7#structured-data-(structures,-arrays-and-string-operations)"},"this")," reading material."))}p.isMDXComponent=!0}}]);