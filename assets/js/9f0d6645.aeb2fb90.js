"use strict";(self.webpackChunkknowledge_core=self.webpackChunkknowledge_core||[]).push([[1219],{4236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var s=n(4848),r=n(8453);const i={sidebar_position:1,title:"Typescript Prompts",sidebar_label:"Typescript"},o=void 0,c={id:"prompts/programming/typescript",title:"Typescript Prompts",description:"Prompt to generate Jest tests for the provided TypeScript code, focusing on edge cases.",source:"@site/docs/prompts/programming/typescript.md",sourceDirName:"prompts/programming",slug:"/prompts/programming/typescript",permalink:"/knowledge-core/docs/prompts/programming/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/prompts/programming/typescript.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Typescript Prompts",sidebar_label:"Typescript"},sidebar:"tutorialSidebar",previous:{title:"Programming",permalink:"/knowledge-core/docs/category/programming"},next:{title:"Languages",permalink:"/knowledge-core/docs/category/languages"}},a={},p=[];function d(e){const t={code:"code",em:"em",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Prompt to generate Jest tests for the provided TypeScript code, focusing on edge cases."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="prompt"',children:'I have the following TypeScript code:\n\n"CODE_HERE"\n\nCan you provide me with a set of Jest tests using `describe.each` that robustly test the code with various edge cases?\n\nThe tests should have a structure similar to this:\n\ndescribe.each([\n  {\n    description: "should ...",\n    ...,\n    expected: ...,\n  },\n  {\n    description: "should ...",\n    ...,\n    expected: ...,\n  },\n])("given ...",\n  ({ description, ..., expected }: { description: string; ...; expected: ...; }) => {\n\n    beforeEach(() => {\n      ....\n    });\n\n    it(description, () => {\n      const result = function(...);\n      expect(result).toEqual(expected);\n    });\n  }\n);\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Prompt for reviewing TypeScript code and suggesting improvements based on clean code principles."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="prompt"',children:'I would like to improve the following TypeScript code by applying clean code practices.\nPlease review the code and suggest improvements based on clean code principles.\nThe focus should be on readability, maintainability, minimalism and efficiency.\nHere is the code:\n\n"CODE_HERE"\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Prompt for asking for unit tests to be added to a specific code snippet."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="prompt"',children:'Could you please add unit tests for the following code snippet in Jest with Typescript?\n\n"CODE_HERE"\n\nAdditionally, please integrate these new tests with the existing ones, ensuring that they maintain consistency in formatting and style with the current test suite. The existing tests are as follows:\n\n"TESTS_HERE"\n\nThank you for your assistance!\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Prompt for asking for unit tests to be added to a specific code snippet."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="prompt"',children:'Could you please add unit tests for the following code snippet in Jest with Typescript?\n\n"CODE_HERE"\n\nAdditionally, please integrate these new tests with the existing ones, ensuring that they maintain consistency in formatting and style with the current test suite. The existing tests are as follows:\n\n"TESTS_HERE"\n\nThank you for your assistance!\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Prompt for asking for a cURL command to be generated, which is a command-line tool used for making HTTP requests."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="prompt"',children:'Could you generate a cURL command for me, considering the fields in the body, parameters, and query strings from the following code?\n\n"CODE"\n\nPlease ensure that the cURL request correctly reflects the structure and data included in the body, URL parameters, and query strings as presented in the code\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);