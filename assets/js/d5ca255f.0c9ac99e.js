"use strict";(self.webpackChunkknowledge_core=self.webpackChunkknowledge_core||[]).push([[6700],{5813:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=r(4848),t=r(8453);const s={sidebar_position:1,title:"Configuration",sidebar_label:"Configuration"},a="AWS Credentials Management",o={id:"essential-dev-utils/terraform/config",title:"Configuration",description:"This document outlines how to manage AWS credentials for different environments using the AWS CLI and Terraform.",source:"@site/docs/essential-dev-utils/terraform/config.md",sourceDirName:"essential-dev-utils/terraform",slug:"/essential-dev-utils/terraform/config",permalink:"/knowledge-core/docs/essential-dev-utils/terraform/config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/essential-dev-utils/terraform/config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Configuration",sidebar_label:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Terraform",permalink:"/knowledge-core/docs/category/terraform"},next:{title:"AWS",permalink:"/knowledge-core/docs/category/aws"}},l={},c=[{value:"AWS Credentials Configuration",id:"aws-credentials-configuration",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Setting the AWS Profile",id:"setting-the-aws-profile",level:2},{value:"Staging",id:"staging",level:4},{value:"Production",id:"production",level:3},{value:"Explanation",id:"explanation-1",level:3},{value:"Remove Cache to Prevent Conflicts",id:"remove-cache-to-prevent-conflicts",level:2},{value:"Explanation",id:"explanation-2",level:3},{value:"Initialize and Plan Terraform Configuration",id:"initialize-and-plan-terraform-configuration",level:2},{value:"Explanation",id:"explanation-3",level:3},{value:"Applying Terraform Configuration",id:"applying-terraform-configuration",level:2},{value:"Explanation",id:"explanation-4",level:3},{value:"Delete All <code>.terraform</code> Directories Recursively",id:"delete-all-terraform-directories-recursively",level:2},{value:"Explanation",id:"explanation-5",level:3},{value:"Delete All <code>.terraform.lock.hcl</code> Files Recursively",id:"delete-all-terraformlockhcl-files-recursively",level:2},{value:"Explanation",id:"explanation-6",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"aws-credentials-management",children:"AWS Credentials Management"})}),"\n",(0,i.jsx)(n.p,{children:"This document outlines how to manage AWS credentials for different environments using the AWS CLI and Terraform."}),"\n",(0,i.jsx)(n.h2,{id:"aws-credentials-configuration",children:"AWS Credentials Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["File: ",(0,i.jsx)(n.code,{children:"~/.aws/credentials"})]}),"\n",(0,i.jsxs)(n.p,{children:["Command: ",(0,i.jsx)(n.code,{children:"aws configure"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"[default-staging]\naws_access_key_id = KEY-STAGING\naws_secret_access_key = SECRET-AWS\n\n[default-production]\naws_access_key_id = KEY-PRODUCTION\naws_secret_access_key = SECRET-AWS\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsx)(n.p,{children:"This configuration file stores the AWS access keys for different environments. Here\u2019s a breakdown of the sections:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[default-staging]"}),": Defines the credentials for the staging environment.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aws_access_key_id"}),": The access key ID for the staging environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aws_secret_access_key"}),": The secret access key for the staging environment."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[default-production]"}),": Defines the credentials for the production environment.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aws_access_key_id"}),": The access key ID for the production environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aws_secret_access_key"}),": The secret access key for the production environment."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setting-the-aws-profile",children:"Setting the AWS Profile"}),"\n",(0,i.jsxs)(n.p,{children:["To switch between the defined profiles, you can set the ",(0,i.jsx)(n.code,{children:"AWS_PROFILE"})," environment variable. Use the following commands:"]}),"\n",(0,i.jsx)(n.h4,{id:"staging",children:"Staging"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"export AWS_PROFILE=default-staging\n"})}),"\n",(0,i.jsx)(n.h3,{id:"production",children:"Production"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"export AWS_PROFILE=default-production\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explanation-1",children:"Explanation"}),"\n",(0,i.jsxs)(n.p,{children:["These commands set the ",(0,i.jsx)(n.code,{children:"AWS_PROFILE"})," variable to specify which set of credentials to use when interacting with AWS services. By changing this variable, you can easily switch between different environments (staging and production) without modifying the credentials file."]}),"\n",(0,i.jsx)(n.h2,{id:"remove-cache-to-prevent-conflicts",children:"Remove Cache to Prevent Conflicts"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"rm -rf .terraform .terraform.lock.hcl\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explanation-2",children:"Explanation"}),"\n",(0,i.jsx)(n.p,{children:"This command removes the Terraform cache and lock file to prevent potential conflicts in your environment. Here\u2019s a breakdown of the command:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rm -rf"}),": A command used to remove files and directories forcefully and recursively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".terraform"}),": This directory contains Terraform's cached state files and configurations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".terraform.lock.hcl"}),": This file locks the provider versions and configurations for the Terraform project.\nRemoving these files may help resolve issues related to outdated or conflicting state information."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"initialize-and-plan-terraform-configuration",children:"Initialize and Plan Terraform Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"terraform init && terraform plan\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explanation-3",children:"Explanation"}),"\n",(0,i.jsx)(n.p,{children:"This command performs two essential steps in managing infrastructure with Terraform: initializing the working directory and generating an execution plan. Here's a breakdown of the command:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"terraform init"}),": Prepares the working directory by downloading and installing any necessary provider plugins and setting up the backend for state management."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"terraform plan"}),": Generates an execution plan that shows what actions Terraform will take to apply the current configuration, without making any changes to your infrastructure."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This sequence ensures that the Terraform environment is correctly configured and provides an overview of the potential modifications before execution."}),"\n",(0,i.jsx)(n.h2,{id:"applying-terraform-configuration",children:"Applying Terraform Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"terraform apply\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explanation-4",children:"Explanation"}),"\n",(0,i.jsx)(n.p,{children:"This command applies the Terraform configuration by creating or updating infrastructure based on the configuration files. Below is a breakdown of the command:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"terraform apply: Executes the actions specified in the Terraform configuration files. This command will prompt for approval before making any changes unless the -auto-approve flag is used."}),"\n",(0,i.jsx)(n.li,{children:"Before running this command, ensure the Terraform configuration has been initialized with terraform init."}),"\n",(0,i.jsx)(n.li,{children:"The command generates a plan, detailing the resources to be added, modified, or destroyed, allowing for a careful review before proceeding with the changes."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"delete-all-terraform-directories-recursively",children:["Delete All ",(0,i.jsx)(n.code,{children:".terraform"})," Directories Recursively"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'find . -name ".terraform" -type d -exec rm -rf {} +\n'})}),"\n",(0,i.jsx)(n.h3,{id:"explanation-5",children:"Explanation"}),"\n",(0,i.jsxs)(n.p,{children:["This command recursively deletes all directories named ",(0,i.jsx)(n.code,{children:".terraform"})," from the current directory and its subdirectories. Here\u2019s a breakdown of the command:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"find ."}),": Searches the current directory and all its subdirectories."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'-name ".terraform"'}),": Specifies that only directories with the name ",(0,i.jsx)(n.code,{children:".terraform"})," will be targeted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-type d"}),": Ensures that only directories are included in the search."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-exec rm -rf {} +"}),": Executes the ",(0,i.jsx)(n.code,{children:"rm -rf"})," command to remove the found directories recursively. The ",(0,i.jsx)(n.code,{children:"{}"})," is replaced by the directory paths found by the ",(0,i.jsx)(n.code,{children:"find"})," command."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"delete-all-terraformlockhcl-files-recursively",children:["Delete All ",(0,i.jsx)(n.code,{children:".terraform.lock.hcl"})," Files Recursively"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'find . -name ".terraform.lock.hcl" -type f -exec rm -f {} +\n'})}),"\n",(0,i.jsx)(n.h3,{id:"explanation-6",children:"Explanation"}),"\n",(0,i.jsxs)(n.p,{children:["This command recursively deletes all ",(0,i.jsx)(n.code,{children:".terraform.lock.hcl"})," files from the current directory and its subdirectories. Here\u2019s a breakdown of the command:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"find ."}),": Searches the current directory and all its subdirectories."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'-name ".terraform.lock.hcl"'}),": Specifies that only files named ",(0,i.jsx)(n.code,{children:".terraform.lock.hcl"})," will be targeted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-type f"}),": Ensures that only files are included in the search."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-exec rm -f {} +"}),": Executes the ",(0,i.jsx)(n.code,{children:"rm -f"})," command to forcefully remove the found files. The ",(0,i.jsx)(n.code,{children:"{}"})," is replaced by the file paths found by the ",(0,i.jsx)(n.code,{children:"find"})," command."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);