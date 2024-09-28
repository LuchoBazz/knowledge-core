"use strict";(self.webpackChunkessential_dev_utils=self.webpackChunkessential_dev_utils||[]).push([[318],{7547:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(4848),i=n(8453);const r={sidebar_position:1,title:"AWS - CloudWatch",sidebar_label:"AWS - CloudWatch"},l="AWS Cloud Watch",o={id:"aws/aws-cloudwatch",title:"AWS - CloudWatch",description:"This document provides useful queries for AWS CloudWatch logs to filter and sort error messages.",source:"@site/docs/aws/aws-cloudwatch.md",sourceDirName:"aws",slug:"/aws/aws-cloudwatch",permalink:"/essential-dev-utils/docs/aws/aws-cloudwatch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/aws/aws-cloudwatch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AWS - CloudWatch",sidebar_label:"AWS - CloudWatch"},sidebar:"tutorialSidebar",previous:{title:"AWS",permalink:"/essential-dev-utils/docs/category/aws"},next:{title:"New Relic",permalink:"/essential-dev-utils/docs/category/new-relic"}},c={},d=[{value:"Query for Uncaught Exceptions",id:"query-for-uncaught-exceptions",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Query for Unhandled Rejections",id:"query-for-unhandled-rejections",level:2},{value:"Explanation",id:"explanation-1",level:3}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"aws-cloud-watch",children:"AWS Cloud Watch"})}),"\n",(0,t.jsx)(s.p,{children:"This document provides useful queries for AWS CloudWatch logs to filter and sort error messages."}),"\n",(0,t.jsx)(s.h2,{id:"query-for-uncaught-exceptions",children:"Query for Uncaught Exceptions"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"fields @timestamp, @message, @logStream, @log\n| filter @message like 'uncaughtException'\n| sort @timestamp desc\n| limit 10000\n"})}),"\n",(0,t.jsx)(s.h3,{id:"explanation",children:"Explanation"}),"\n",(0,t.jsx)(s.p,{children:"This query retrieves log entries containing the term 'uncaughtException'. Here\u2019s a breakdown of the command:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"fields @timestamp, @message, @logStream, @log"}),": Specifies the fields to be displayed in the results."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@timestamp"}),": The time when the log entry was created."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@message"}),": The content of the log entry."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@logStream"}),": The stream from which the log entry originates."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@log"}),": The log group associated with the entry."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"filter @message like 'uncaughtException'"}),": Filters the log entries to include only those that contain the specified term."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"sort @timestamp desc"}),": Sorts the results by timestamp in descending order, showing the most recent entries first."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"limit 10000"}),": Limits the number of returned entries to 10,000."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"query-for-unhandled-rejections",children:"Query for Unhandled Rejections"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"fields @timestamp, @message, @logStream, @log\n| filter @message like 'unhandledRejection'\n| sort @timestamp desc\n| limit 10000\n"})}),"\n",(0,t.jsx)(s.h3,{id:"explanation-1",children:"Explanation"}),"\n",(0,t.jsx)(s.p,{children:"This query retrieves log entries containing the term 'unhandledRejection'. The breakdown is similar to the previous query:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"fields @timestamp, @message, @logStream, @log"}),": Specifies the fields to be displayed in the results."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@timestamp"}),": The time when the log entry was created."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@message"}),": The content of the log entry."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@logStream"}),": The stream from which the log entry originates."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@log"}),": The log group associated with the entry."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"filter @message like 'unhandledRejection'"}),": Filters the log entries to include only those that contain the specified term."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"sort @timestamp desc"}),": Sorts the results by timestamp in descending order."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"limit 10000"}),": Limits the number of returned entries to 10,000."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var t=n(6540);const i={},r=t.createContext(i);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);