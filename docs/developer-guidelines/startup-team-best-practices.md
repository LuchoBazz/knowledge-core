---
sidebar_position: 2
sidebar_label: Startup Team Best Practices
---

## Best Practices for a Startup Software Team

A short list of practices that help a small team move fast without breaking things.

### 1. Use feature flags

Feature flags let you deploy code without releasing it.

* Merge code often, even if the feature is not finished.
* Use flags as a kill switch: turn a feature off without a new deploy.
* Give each flag an owner and a removal date. Delete the flag after the full rollout.

### 2. Centralize flags and configuration

Use one engine to manage flags and settings for all services.

* One source of truth, with values per environment (dev, staging, production).
* Keep an audit log of who changed what and when.
* Use an existing tool (for example Unleash, OpenFeature, or LaunchDarkly) before building your own.

### 3. Split features into phases

Do not build and release a whole feature at once.

* Break it into small phases that each give value and can work alone.
* Ship each phase behind its own flag and turn it on step by step (team, then a small percentage of users, then everyone).
* Smaller changes are easier to review, test, and roll back.

### 4. Turn postmortem action items into tasks

A postmortem is only useful if the fixes happen.

* Create a ticket for every action item, with an owner and a due date.
* Put these tickets in the normal backlog and planning, not in a separate list.
* Review open action items regularly.

### 5. Use a monorepo

Keep related services and shared code in one repository.

* Share code and tools easily, and change several packages in one pull request.
* One CI setup and one set of standards for everyone.
* Tools like Nx, Turborepo, or Bazel keep builds fast as the repo grows.

### 6. Prefer frameworks with clear conventions

Frameworks such as NestJS or Ruby on Rails have a fixed structure, so everyone writes code in a similar way.

* Less debate about folders, naming, and patterns.
* New people learn the project faster.
* If you use a flexible technology, write the conventions down clearly and enforce them with linters, templates, and code review.

### 7. Document the code structure for AI from day one

AI tools work better when they understand the project.

* Describe the folder structure, the architecture, and the main conventions.
* Keep it in the repo (for example `AGENTS.md` or `docs/architecture.md`) and update it with the code.
* Good documentation for AI is also good documentation for new teammates.

### 8. Keep cross-cutting feature documents

Write one document per feature that explains everything needed to turn it on.

* List the feature flags and configurations to add, and in which order to enable them.
* List the services and dependencies involved.
* Link it from the pull requests and the rollout plan.

Simple template:

```md
# Feature: <name>

- Goal: <one sentence>
- Phases: <phase 1, phase 2, ...>
- Feature flags: <flag name -> what it controls>
- Configurations: <key -> value per environment>
- Services involved: <list>
- Rollout steps: <order to enable each flag>
- Rollback: <how to turn it off>
```

### 9. Quantify user impact before rushing a critical fix

When an urgent support escalation lands and an immediate fix is not feasible, pull the metrics first.

* Query your logs, metrics, or database to determine exactly how many users or workflows are actually affected.
* What feels critical to a single vocal customer often turns out to have a very low blast radius across the broader platform.
* Concrete numbers eliminate urgency theater and knee-jerk patching, giving the engineering team composure to build the right solution.
* Share the verified impact data with Support and stakeholders to set realistic expectations and handle the situation calmly.

