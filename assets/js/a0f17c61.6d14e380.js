"use strict";(self.webpackChunkessential_dev_utils=self.webpackChunkessential_dev_utils||[]).push([[890],{9018:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(4848),s=i(8453);const r={sidebar_position:1,title:"Configuration",sidebar_label:"Configuration"},a="AWS Credentials Management",o={id:"terraform/config",title:"Configuration",description:"This document outlines how to manage AWS credentials for different environments using the AWS CLI and Terraform.",source:"@site/docs/terraform/config.md",sourceDirName:"terraform",slug:"/terraform/config",permalink:"/essential-dev-utils/docs/terraform/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/terraform/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Configuration",sidebar_label:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Terraform",permalink:"/essential-dev-utils/docs/category/terraform"},next:{title:"AWS",permalink:"/essential-dev-utils/docs/category/aws"}},c={},l=[{value:"AWS Credentials Configuration",id:"aws-credentials-configuration",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Setting the AWS Profile",id:"setting-the-aws-profile",level:2},{value:"Staging",id:"staging",level:4},{value:"Production",id:"production",level:3},{value:"Explanation",id:"explanation-1",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"aws-credentials-management",children:"AWS Credentials Management"})}),"\n",(0,t.jsx)(n.p,{children:"This document outlines how to manage AWS credentials for different environments using the AWS CLI and Terraform."}),"\n",(0,t.jsx)(n.h2,{id:"aws-credentials-configuration",children:"AWS Credentials Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["File: ",(0,t.jsx)(n.code,{children:"~/.aws/credentials"})]}),"\n",(0,t.jsxs)(n.p,{children:["Command: ",(0,t.jsx)(n.code,{children:"aws configure"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:"[default-staging]\naws_access_key_id = KEY-STAGING\naws_secret_access_key = SECRET-AWS\n\n[default-production]\naws_access_key_id = KEY-PRODUCTION\naws_secret_access_key = SECRET-AWS\n"})}),"\n",(0,t.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,t.jsx)(n.p,{children:"This configuration file stores the AWS access keys for different environments. Here\u2019s a breakdown of the sections:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[default-staging]"}),": Defines the credentials for the staging environment.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aws_access_key_id"}),": The access key ID for the staging environment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aws_secret_access_key"}),": The secret access key for the staging environment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[default-production]"}),": Defines the credentials for the production environment.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aws_access_key_id"}),": The access key ID for the production environment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aws_secret_access_key"}),": The secret access key for the production environment."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-the-aws-profile",children:"Setting the AWS Profile"}),"\n",(0,t.jsxs)(n.p,{children:["To switch between the defined profiles, you can set the ",(0,t.jsx)(n.code,{children:"AWS_PROFILE"})," environment variable. Use the following commands:"]}),"\n",(0,t.jsx)(n.h4,{id:"staging",children:"Staging"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export AWS_PROFILE=default-staging\n"})}),"\n",(0,t.jsx)(n.h3,{id:"production",children:"Production"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"export AWS_PROFILE=default-production\n"})}),"\n",(0,t.jsx)(n.h3,{id:"explanation-1",children:"Explanation"}),"\n",(0,t.jsxs)(n.p,{children:["These commands set the ",(0,t.jsx)(n.code,{children:"AWS_PROFILE"})," variable to specify which set of credentials to use when interacting with AWS services. By changing this variable, you can easily switch between different environments (staging and production) without modifying the credentials file."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);