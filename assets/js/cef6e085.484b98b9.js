"use strict";(self.webpackChunkessential_dev_utils=self.webpackChunkessential_dev_utils||[]).push([[5597],{5967:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(4848),t=i(8453);const r={sidebar_position:1,title:"Queries",sidebar_label:"Queries"},c="New Relic Queries",a={id:"essential-dev-utils/new-relic/queries",title:"Queries",description:"This document contains a useful query for New Relic to count transactions within a specified time frame and filter by application name.",source:"@site/docs/essential-dev-utils/new-relic/queries.md",sourceDirName:"essential-dev-utils/new-relic",slug:"/essential-dev-utils/new-relic/queries",permalink:"/essential-dev-utils/docs/essential-dev-utils/new-relic/queries",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/essential-dev-utils/new-relic/queries.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Queries",sidebar_label:"Queries"},sidebar:"tutorialSidebar",previous:{title:"New Relic",permalink:"/essential-dev-utils/docs/category/new-relic"},next:{title:"Useful Scripts",permalink:"/essential-dev-utils/docs/category/useful-scripts"}},o={},l=[{value:"Query for Transaction Count",id:"query-for-transaction-count",level:2},{value:"Explanation",id:"explanation",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"new-relic-queries",children:"New Relic Queries"})}),"\n",(0,s.jsx)(n.p,{children:"This document contains a useful query for New Relic to count transactions within a specified time frame and filter by application name."}),"\n",(0,s.jsx)(n.h2,{id:"query-for-transaction-count",children:"Query for Transaction Count"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT count(*) FROM Transaction WHERE appName IN ('service-production') AND name LIKE '%queryName%' SINCE '2024-08-31T20:00 [America/Bogota]' UNTIL '2024-08-31T20:15  [America/Bogota]' FACET request.headers.origin\n"})}),"\n",(0,s.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsx)(n.p,{children:"This query counts the number of transactions for a specific application within a defined time range. Here\u2019s a breakdown of the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SELECT count(*)"}),": Selects the count of all transactions that meet the specified criteria."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FROM Transaction"}),": Indicates the data source, which in this case is the ",(0,s.jsx)(n.code,{children:"Transaction"})," event."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WHERE appName IN ('service-production')"}),": Filters the results to include only those transactions where the application name is ",(0,s.jsx)(n.code,{children:"service-production"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AND name LIKE '%queryName%'"}),": Further filters the transactions to include only those whose names match the specified pattern (",(0,s.jsx)(n.code,{children:"queryName"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SINCE '2024-08-31T20:00 [America/Bogota]'"}),": Defines the start time for the query."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"UNTIL '2024-08-31T20:15  [America/Bogota]'"}),": Defines the end time for the query."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FACET request.headers.origin"}),": Groups the results by the ",(0,s.jsx)(n.code,{children:"origin"})," header of the requests, allowing for insights into where the requests originated."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);