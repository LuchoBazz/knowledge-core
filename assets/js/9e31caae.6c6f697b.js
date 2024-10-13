"use strict";(self.webpackChunkknowledge_core=self.webpackChunkknowledge_core||[]).push([[6507],{1680:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(4848),i=n(8453);const l={sidebar_position:1,title:"AWS - CloudWatch",sidebar_label:"AWS - CloudWatch"},r="AWS Cloud Watch",o={id:"essential-dev-utils/aws/aws-cloudwatch",title:"AWS - CloudWatch",description:"This document provides useful queries for AWS CloudWatch logs to filter and sort error messages.",source:"@site/docs/essential-dev-utils/aws/aws-cloudwatch.md",sourceDirName:"essential-dev-utils/aws",slug:"/essential-dev-utils/aws/aws-cloudwatch",permalink:"/knowledge-core/docs/essential-dev-utils/aws/aws-cloudwatch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/essential-dev-utils/aws/aws-cloudwatch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AWS - CloudWatch",sidebar_label:"AWS - CloudWatch"},sidebar:"tutorialSidebar",previous:{title:"AWS",permalink:"/knowledge-core/docs/category/aws"},next:{title:"New Relic",permalink:"/knowledge-core/docs/category/new-relic"}},a={},c=[{value:"Query for Uncaught Exceptions",id:"query-for-uncaught-exceptions",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Query for Unhandled Rejections",id:"query-for-unhandled-rejections",level:2},{value:"Explanation",id:"explanation-1",level:3},{value:"Count Messages and Calculate Size",id:"count-messages-and-calculate-size",level:2},{value:"Explanation",id:"explanation-2",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"aws-cloud-watch",children:"AWS Cloud Watch"})}),"\n",(0,t.jsx)(s.p,{children:"This document provides useful queries for AWS CloudWatch logs to filter and sort error messages."}),"\n",(0,t.jsx)(s.h2,{id:"query-for-uncaught-exceptions",children:"Query for Uncaught Exceptions"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"fields @timestamp, @message, @logStream, @log\n| filter @message like 'uncaughtException'\n| sort @timestamp desc\n| limit 10000\n"})}),"\n",(0,t.jsx)(s.h3,{id:"explanation",children:"Explanation"}),"\n",(0,t.jsx)(s.p,{children:"This query retrieves log entries containing the term 'uncaughtException'. Here\u2019s a breakdown of the command:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"fields @timestamp, @message, @logStream, @log"}),": Specifies the fields to be displayed in the results."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@timestamp"}),": The time when the log entry was created."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@message"}),": The content of the log entry."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@logStream"}),": The stream from which the log entry originates."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@log"}),": The log group associated with the entry."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"filter @message like 'uncaughtException'"}),": Filters the log entries to include only those that contain the specified term."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"sort @timestamp desc"}),": Sorts the results by timestamp in descending order, showing the most recent entries first."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"limit 10000"}),": Limits the number of returned entries to 10,000."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"query-for-unhandled-rejections",children:"Query for Unhandled Rejections"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"fields @timestamp, @message, @logStream, @log\n| filter @message like 'unhandledRejection'\n| sort @timestamp desc\n| limit 10000\n"})}),"\n",(0,t.jsx)(s.h3,{id:"explanation-1",children:"Explanation"}),"\n",(0,t.jsx)(s.p,{children:"This query retrieves log entries containing the term 'unhandledRejection'. The breakdown is similar to the previous query:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"fields @timestamp, @message, @logStream, @log"}),": Specifies the fields to be displayed in the results."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@timestamp"}),": The time when the log entry was created."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@message"}),": The content of the log entry."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@logStream"}),": The stream from which the log entry originates."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"@log"}),": The log group associated with the entry."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"filter @message like 'unhandledRejection'"}),": Filters the log entries to include only those that contain the specified term."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"sort @timestamp desc"}),": Sorts the results by timestamp in descending order."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"limit 10000"}),": Limits the number of returned entries to 10,000."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"count-messages-and-calculate-size",children:"Count Messages and Calculate Size"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"fields @message\n| stats count (*) as total, sum(strlen(@message))/1024/1024 as size by label, level, message\n| sort by size desc\n"})}),"\n",(0,t.jsx)(s.h3,{id:"explanation-2",children:"Explanation"}),"\n",(0,t.jsx)(s.p,{children:"This query counts the total number of messages and calculates their size, grouped by specific labels, levels, and messages. The following components detail the query's functionality:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"fields @message"}),": Specifies the field to analyze, which in this case is the message content."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"stats count (*) as total"}),": Computes the total count of messages and labels it as ",(0,t.jsx)(s.code,{children:"total"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"sum(strlen(@message))/1024/1024 as size"}),": Calculates the total size of messages in megabytes by summing the length of each message and converting the result from bytes to megabytes."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"by label, level, message"}),": Groups the results based on the specified fields: ",(0,t.jsx)(s.code,{children:"label"}),", ",(0,t.jsx)(s.code,{children:"level"}),", and ",(0,t.jsx)(s.code,{children:"message"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"sort by size desc"}),": Orders the output by message size in descending order, allowing for easy identification of the largest messages."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var t=n(6540);const i={},l=t.createContext(i);function r(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);