## Developer Guidelines: Core Engineering Standards

Welcome to our Developer Guidelines. This document outlines the foundational technical standards and best practices defined by our engineering leadership. Adhering to these guidelines ensures consistency, security, and scalability across all our systems.

Below is a concise overview of our core technical policies:

* **Date and Time Management:** Mandatory storage in the UTC timezone and communication using the ISO 8601 standard.
* **API Design and Versioning:** Rules for URL structuring, pagination handling, and mandatory endpoint versioning (e.g., `/v1/users`).
* **Secrets Management:** Strict prohibition of hardcoded credentials in the source code and mandatory use of vault managers (e.g., AWS Secrets Manager, HashiCorp Vault).
* **Log Structure:** Requirement to record events in a structured format (such as JSON), standardizing logging levels (INFO, DEBUG, ERROR) and defining rules for masking Personally Identifiable Information (PII).
* **Authentication and Authorization:** Definition of the exact protocols to be used for sessions and third-party integrations (e.g., JWT, OAuth 2.0, SAML).
* **Error Handling:** A unified structure (a standard JSON payload) for returning error messages to the client, strictly avoiding the exposure of database or server traces (stack traces).
* **Identifier (ID) Strategy:** Guidelines on when to use UUIDs/GUIDs (unique alphanumeric strings) versus auto-incrementing integer IDs in our databases.
* **Data Deletion (Soft vs. Hard Delete):** Rules defining which type of information can be physically deleted from the database (hard delete) and which must only be marked as inactive for audit and compliance purposes (soft delete).
* **Quality Thresholds (CI/CD Gates):** Mandatory minimum percentage for test coverage (e.g., 80%) and passing static code analysis (e.g., SonarQube) required before allowing any deployment to production.
* **Currency and Money Management:** Requirement to store monetary values in their smallest unit (e.g., cents as integers) to prevent precision errors associated with floating-point decimals.
