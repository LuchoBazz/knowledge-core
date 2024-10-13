---
sidebar_position: 1
title: Github Actions Cron Jobs
sidebar_label: Github Actions
---

## Auto Slack Status Set for Lunch

```yaml
name: Auto Slack Status Set Lunch

on:
  schedule:
    # Runs at 12:30 AM from Monday to Friday
    - cron: '30 17 * * 1-5'

jobs:
  update-slack-status:
    runs-on: ubuntu-latest

    container:
      image: alpine/curl:latest

    steps:
    - name: Update Slack status using curl
      run: |
        current_time=$(date +%s)  # Get the current timestamp
        expiration_time=$((current_time + 3600))  # Expires in 1 hour (3600 seconds)
        
        curl --silent --output /dev/null -X POST https://slack.com/api/users.profile.set \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer ${{ secrets.INSTALEAP_SLACK_TOKEN }}" \
        -d '{
          "profile": {
            "status_text": "Lunch",
            "status_emoji": ":avocado:",
            "status_expiration": '"$expiration_time"'
          }
        }'
```

### Explanation
This configuration automates the setting of a Slack status to indicate that the user is on lunch. Below is a detailed breakdown of the key components:

- `name: Auto Slack Status Set Lunch`: Defines the name of the workflow for clarity and organization.
- `on: schedule`: Specifies the trigger for the workflow based on a cron schedule.
- `cron: '30 17 * * 1-5'`: Indicates that the workflow runs at 12:30 AM from Monday to Friday.
- `jobs: update-slack-status`: Defines a job named `update-slack-status`, which contains all steps necessary for executing the status update.
- `runs-on: ubuntu-latest`: Specifies the environment in which the job runs.
- `container: image: alpine/curl:latest`: Uses an Alpine container image with `curl` installed to perform HTTP requests.
- `steps`: Lists the individual steps that will be executed in the job.
- `- name: Update Slack status using curl`: The name of the step indicating that it updates the Slack status.
- `current_time=$(date +%s)`: Retrieves the current timestamp.
- `expiration_time=$((current_time + 3600))`: Calculates an expiration time for the status that is set to expire in one hour (3600 seconds).
- `curl --silent --output /dev/null -X POST ...`: Sends a POST request to the Slack API to update the user’s profile with the specified status, including status text, emoji, and expiration.

### Note
Please be aware that this cron job configuration only functions for cron jobs that repeat at intervals greater than 15 minutes, in accordance with GitHub's policies.