"use strict";(self.webpackChunkprompt_engineering=self.webpackChunkprompt_engineering||[]).push([[920],{1882:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(4848),r=i(8453);const s={sidebar_position:1,title:"Git Utils",sidebar_label:"Git Utils"},a=void 0,o={id:"git-github/git",title:"Git Utils",description:"Remove branches that have already been pushed",source:"@site/docs/git-github/git.md",sourceDirName:"git-github",slug:"/git-github/git",permalink:"/prompt-engineering/docs/git-github/git",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git-github/git.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Git Utils",sidebar_label:"Git Utils"},sidebar:"tutorialSidebar",previous:{title:"Git/Github",permalink:"/prompt-engineering/docs/category/gitgithub"}},c={},d=[];function u(e){const t={code:"code",em:"em",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git ls-files | grep -v 'lock' | grep -v 'svg' | xargs wc -l\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Remove branches that have already been pushed"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'git fetch -p && for branch in $(git for-each-ref --format \'%(refname) %(upstream:track)\' refs/heads | awk \'$2 == "[gone]" {sub("refs/heads/", "", $1); print $1}\'); do git branch -D $branch; done\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);