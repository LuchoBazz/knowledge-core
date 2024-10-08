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
[default-staging]
aws_access_key_id = KEY-STAGING
aws_secret_access_key = SECRET-AWS

[default-production]
aws_access_key_id = KEY-PRODUCTION
aws_secret_access_key = SECRET-AWS
```

### Explanation
This configuration file stores the AWS access keys for different environments. Here’s a breakdown of the sections:
- `[default-staging]`: Defines the credentials for the staging environment.
  - `aws_access_key_id`: The access key ID for the staging environment.
  - `aws_secret_access_key`: The secret access key for the staging environment.
  
- `[default-production]`: Defines the credentials for the production environment.
  - `aws_access_key_id`: The access key ID for the production environment.
  - `aws_secret_access_key`: The secret access key for the production environment.

## Setting the AWS Profile

To switch between the defined profiles, you can set the `AWS_PROFILE` environment variable. Use the following commands:

#### Staging
```shell
export AWS_PROFILE=default-staging
```

### Production
```shell
export AWS_PROFILE=default-production
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
