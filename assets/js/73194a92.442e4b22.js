"use strict";(self.webpackChunkknowledge_core=self.webpackChunkknowledge_core||[]).push([[3035],{615:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(4848),i=s(8453);const o={sidebar_position:1,title:"Utils Bash Commands",sidebar_label:"Utils"},a=void 0,r={id:"essential-dev-utils/bash-cmd/utils",title:"Utils Bash Commands",description:"Running a Test Multiple Times in Sequence",source:"@site/docs/essential-dev-utils/bash-cmd/utils.md",sourceDirName:"essential-dev-utils/bash-cmd",slug:"/essential-dev-utils/bash-cmd/utils",permalink:"/knowledge-core/docs/essential-dev-utils/bash-cmd/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/essential-dev-utils/bash-cmd/utils.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Utils Bash Commands",sidebar_label:"Utils"},sidebar:"tutorialSidebar",previous:{title:"Bash",permalink:"/knowledge-core/docs/category/bash"},next:{title:"Prompt Engineering",permalink:"/knowledge-core/docs/category/prompt-engineering"}},l={},d=[{value:"Running a Test Multiple Times in Sequence",id:"running-a-test-multiple-times-in-sequence",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Audit Command",id:"audit-command",level:2},{value:"Explanation",id:"explanation-1",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"running-a-test-multiple-times-in-sequence",children:"Running a Test Multiple Times in Sequence"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"for i in {1..10}; do npm run test test/loyalt.test.ts; done \n"})}),"\n",(0,n.jsx)(t.h3,{id:"explanation",children:"Explanation"}),"\n",(0,n.jsx)(t.p,{children:"This command executes a specific test script in your project multiple times in succession. It is useful when you need to validate the stability of the test or ensure consistent results over several runs. Below is a breakdown of the command:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"for i in {1..10}"}),": This loop iterates 10 times, where i takes values from 1 to 10."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"npm run test test/loyalt.test.ts"}),": Runs the specified test file (loyalt.test.ts) using the npm command, which is common in Node.js projects."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"done"}),": Marks the end of the loop, causing the test to be run again until the loop completes all 10 iterations."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This approach can be applied when conducting repetitive tests for reliability purposes or to observe any fluctuations in performance across multiple runs."}),"\n",(0,n.jsx)(t.h2,{id:"audit-command",children:"Audit Command"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm run users users.txt | tee audit_$(date +'%Y%m%d%H%M%S').txt\n"})}),"\n",(0,n.jsx)(t.h3,{id:"explanation-1",children:"Explanation"}),"\n",(0,n.jsx)(t.p,{children:"This command runs a task in a Node.js environment: processing user imports. It then captures the output of the user import process into a timestamped file for auditing purposes. Below is a detailed breakdown of the command:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"npm run users users.txt"}),": Runs the ",(0,n.jsx)(t.code,{children:"users"})," script, passing ",(0,n.jsx)(t.code,{children:"users.txt"})," as an argument. This script likely handles the import or processing of users from the provided file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"| tee"}),": Pipes the output of the ",(0,n.jsx)(t.code,{children:"users"})," command and writes it both to the console and to the specified file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"audit_import_users_$(date +'%Y%m%d%H%M%S').txt"}),": Creates a log file named with a timestamp (in the format ",(0,n.jsx)(t.code,{children:"YYYYMMDDHHMMSS"}),"), storing the output for later review or auditing. The ",(0,n.jsx)(t.code,{children:"date"})," command dynamically generates the timestamp to ensure each audit file has a unique name."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This approach ensures that user imports are tracked and verifiable, which is critical for auditing and troubleshooting in production environments."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(6540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);