"use strict";(self.webpackChunkknowledge_core=self.webpackChunkknowledge_core||[]).push([[714],{6320:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(4848),o=n(8453);const r={sidebar_position:1,title:"Compilation IO Guide",sidebar_label:"Compilation IO Guide"},c=void 0,s={id:"competitive-programming/c-cpp/compilation-io-guide",title:"Compilation IO Guide",description:"Compile and Execute C++ Program with Input and Output Redirection",source:"@site/docs/competitive-programming/c-cpp/compilation-io-guide.md",sourceDirName:"competitive-programming/c-cpp",slug:"/competitive-programming/c-cpp/compilation-io-guide",permalink:"/knowledge-core/docs/competitive-programming/c-cpp/compilation-io-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/competitive-programming/c-cpp/compilation-io-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Compilation IO Guide",sidebar_label:"Compilation IO Guide"},sidebar:"tutorialSidebar",previous:{title:"C/C++",permalink:"/knowledge-core/docs/category/cc"},next:{title:"Memory Guide",permalink:"/knowledge-core/docs/competitive-programming/c-cpp/memory"}},a={},d=[{value:"Compile and Execute C++ Program with Input and Output Redirection",id:"compile-and-execute-c-program-with-input-and-output-redirection",level:2},{value:"Explanation",id:"explanation",level:3}];function l(e){const i={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"compile-and-execute-c-program-with-input-and-output-redirection",children:"Compile and Execute C++ Program with Input and Output Redirection"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Standard"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"g++-14 -std=c++17 -Wall -O2 -fno-sanitize-recover -o A A.cpp\n"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Debug"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"g++-14 -std=c++17 -DDEBUG -Wall -O2 -fno-sanitize-recover -o A A.cpp\n"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Running"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"./A < A.in > A.out\n"})}),"\n",(0,t.jsx)(i.h3,{id:"explanation",children:"Explanation"}),"\n",(0,t.jsxs)(i.p,{children:["This command compiles and executes a C++ program, redirecting the input and output to specific files. Below is a breakdown of the command: ",(0,t.jsx)(i.em,{children:"(Useful for competitive programming)"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"g++-14"}),": Specifies the version of the GNU C++ Compiler, in this case, version 14."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"-std=c++17"}),": Instructs the compiler to use the C++17 standard for compilation."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"-Wall"}),": Enables all compiler warnings, which helps in identifying potential issues."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"-O2"}),": Activates a moderate level of optimization to improve the performance of the compiled program."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"-fno-sanitize-recover"}),": Ensures the program stops execution immediately when encountering a sanitization error, instead of attempting to recover."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"-DDEBUG"}),": Defines the macro ",(0,t.jsx)(i.code,{children:"DEBUG"}),", enabling any conditional compilation sections related to debugging within the source code."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"-o A"}),": Specifies that the output executable file will be named ",(0,t.jsx)(i.code,{children:"A"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"A.cpp"}),": The source file to be compiled."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"./A < A.in > A.out"}),": Executes the compiled program, reading input from the file ",(0,t.jsx)(i.code,{children:"A.in"})," and writing the output to the file ",(0,t.jsx)(i.code,{children:"A.out"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This method is efficient for running programs with predefined input and capturing the output into a file for further analysis or documentation purposes."})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>s});var t=n(6540);const o={},r=t.createContext(o);function c(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);