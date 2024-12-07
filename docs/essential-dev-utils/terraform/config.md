---
sidebar_position: 1
title: Configuration
sidebar_label: Configuration
---

# AWS Credentials Management

This document outlines how to manage AWS credentials for different environments using the AWS CLI and Terraform.

## AWS Credentials Configuration

File: `~/.aws/credentials`

Command: `aws configure`

```toml
[staging]
aws_access_key_id = KEY-STAGING
aws_secret_access_key = SECRET-AWS

[production]
aws_access_key_id = KEY-PRODUCTION
aws_secret_access_key = SECRET-AWS
```

### Explanation
This configuration file stores the AWS access keys for different environments. Here’s a breakdown of the sections:
- `[staging]`: Defines the credentials for the staging environment.
  - `aws_access_key_id`: The access key ID for the staging environment.
  - `aws_secret_access_key`: The secret access key for the staging environment.
  
- `[production]`: Defines the credentials for the production environment.
  - `aws_access_key_id`: The access key ID for the production environment.
  - `aws_secret_access_key`: The secret access key for the production environment.

## Setting the AWS Profile

To switch between the defined profiles, you can set the `AWS_PROFILE` environment variable. Use the following commands:

#### Staging
```shell
export AWS_PROFILE=staging
```

### Production
```shell
export AWS_PROFILE=production
```
### Explanation
These commands set the `AWS_PROFILE` variable to specify which set of credentials to use when interacting with AWS services. By changing this variable, you can easily switch between different environments (staging and production) without modifying the credentials file.


## Remove Cache to Prevent Conflicts

```shell
rm -rf .terraform .terraform.lock.hcl
```

### Explanation

This command removes the Terraform cache and lock file to prevent potential conflicts in your environment. Here’s a breakdown of the command:

- `rm -rf`: A command used to remove files and directories forcefully and recursively.
- `.terraform`: This directory contains Terraform's cached state files and configurations.
- `.terraform.lock.hcl`: This file locks the provider versions and configurations for the Terraform project.
Removing these files may help resolve issues related to outdated or conflicting state information.

## Initialize and Plan Terraform Configuration

```shell
terraform init && terraform plan
```

### Explanation
This command performs two essential steps in managing infrastructure with Terraform: initializing the working directory and generating an execution plan. Here's a breakdown of the command:
- `terraform init`: Prepares the working directory by downloading and installing any necessary provider plugins and setting up the backend for state management.
- `terraform plan`: Generates an execution plan that shows what actions Terraform will take to apply the current configuration, without making any changes to your infrastructure.

This sequence ensures that the Terraform environment is correctly configured and provides an overview of the potential modifications before execution.

## Applying Terraform Configuration

```shell
terraform apply
```

### Explanation
This command applies the Terraform configuration by creating or updating infrastructure based on the configuration files. Below is a breakdown of the command:
- terraform apply: Executes the actions specified in the Terraform configuration files. This command will prompt for approval before making any changes unless the -auto-approve flag is used.
- Before running this command, ensure the Terraform configuration has been initialized with terraform init.
- The command generates a plan, detailing the resources to be added, modified, or destroyed, allowing for a careful review before proceeding with the changes.

## Delete All `.terraform` Directories Recursively

```shell
find . -name ".terraform" -type d -exec rm -rf {} +
```

### Explanation
This command recursively deletes all directories named `.terraform` from the current directory and its subdirectories. Here’s a breakdown of the command:
- `find .`: Searches the current directory and all its subdirectories.
- `-name ".terraform"`: Specifies that only directories with the name `.terraform` will be targeted.
- `-type d`: Ensures that only directories are included in the search.
- `-exec rm -rf {} +`: Executes the `rm -rf` command to remove the found directories recursively. The `{}` is replaced by the directory paths found by the `find` command.


## Delete All `.terraform.lock.hcl` Files Recursively

```shell
find . -name ".terraform.lock.hcl" -type f -exec rm -f {} +
```

### Explanation
This command recursively deletes all `.terraform.lock.hcl` files from the current directory and its subdirectories. Here’s a breakdown of the command:
- `find .`: Searches the current directory and all its subdirectories.
- `-name ".terraform.lock.hcl"`: Specifies that only files named `.terraform.lock.hcl` will be targeted.
- `-type f`: Ensures that only files are included in the search.
- `-exec rm -f {} +`: Executes the `rm -f` command to forcefully remove the found files. The `{}` is replaced by the file paths found by the `find` command.
