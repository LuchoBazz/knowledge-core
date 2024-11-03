---
sidebar_position: 1
sidebar_label: Long-Running Query Pattern
---

# Long-Running Query Pattern

### Step 1: Initiate the Import
The client makes a request to initiate the import of records, which returns an identifier (ID) that can be used to check the status of the import.

### Step 2: Check the Status
The client can periodically make requests to check the operation's status using the provided ID until the import is complete.

## Steps to Implement This Pattern

### 1. Initiate Import (Asynchronous Phase)
When the client initiates the import, the API should return a task ID that can be used to track progress. The actual import process should run in the background so that the REST API does not block the response while the import is ongoing.

**Request:**
```http
POST /api/tools/import
```

**Body:**
```json
{
  "data": [
    {
      "tool_name": "University Scraper",
      "tool_id": "V001",
      "category": "Education",
      "description": "Extracts data on requirements, fees, and programs from Russian universities to keep budget information up-to-date.",
      "features": ["Data extraction", "Requirement updates", "Program information", "Fee updates"],
      "url": "https://example.com/university-scraper"
    },
    {
      "tool_name": "Currency Converter",
      "tool_id": "V002",
      "category": "Finance",
      "description": "Calculates real-time exchange rates to convert prices in your budget across various currencies.",
      "features": ["Real-time rates", "Multiple currencies", "Conversion history"],
      "url": "https://example.com/currency-converter"
    },
    {
      "tool_name": "Study Cost Simulator",
      "tool_id": "V003",
      "category": "Education",
      "description": "Estimates the total cost of studying in various Russian cities, accounting for tuition, accommodation, and other expenses.",
      "features": ["Tuition cost estimation", "Accommodation costs", "Other expenses", "City comparison"],
      "url": "https://example.com/study-cost-simulator"
    }
  ]
}
```

**Response:**

```json
{
  "task_reference": "HD6EKSD8DO9",
  "status": "IN_PROGRESS"
}
```

### 2. Polling the Import Status
The client uses the `task_reference` to periodically check the status of the process. The response should include the current status of the import and, once complete, details about the result.

**Request:**

```http
GET /api/tools/import/status/HD6EKSD8DO9
```

**Response:**

If the process is ongoing:

```json
{
  "task_reference": "HD6EKSD8DO9",
  "status": "IN_PROGRESS",
  "progress": "45%"
}
```

If the process is complete:

```json
{
  "task_reference": "HD6EKSD8DO9",
  "status": "COMPLETED",
  "progress": "100%",
  "imported_records": 1000,
  "errors": []
}
```

If the process has failed:

```json
{
  "task_reference": "HD6EKSD8DO9",
  "status": "COMPLETED",
  "progress": "100%",
  "imported_records": 5,
  "errors": [
    {
      "tool_name": "Currency Converter",
      "tool_id": "V002",
      "category": "Finance",
      "description": "Calculates real-time exchange rates to convert prices in your budget across various currencies.",
      "features": ["Real-time rates", "Multiple currencies", "Conversion history"],
      "url": "https://example.com/currency-converter"
    },
    {
      "tool_name": "Study Cost Simulator",
      "tool_id": "V003",
      "category": "Education",
      "description": "Estimates the total cost of studying in various Russian cities, accounting for tuition, accommodation, and other expenses.",
      "features": ["Tuition cost estimation", "Accommodation costs", "Other expenses", "City comparison"],
      "url": "https://example.com/study-cost-simulator"
    }
  ]
}
```

## Task State Storage

### `tasks` Table
This table will contain one row per initiated task, with details about its current status.

```sql
CREATE TABLE IF NOT EXISTS xforce.tasks (
  task_id             UUID NOT NULL,
  task_reference      VARCHAR(32) NOT NULL, -- e.g., HD6EKSD8DO9
  task_name           VARCHAR(255),
  status              VARCHAR(50) NOT NULL,
  progress            INT DEFAULT 0,
  total_records       INT DEFAULT 0,
  imported_records    INT DEFAULT 0,
  failed_records      INT DEFAULT 0,
  error_message       TEXT,
  is_active           BOOLEAN NOT NULL DEFAULT TRUE,
  created_at          TIMESTAMP DEFAULT NOW(),
  updated_at          TIMESTAMP DEFAULT NOW(),
  CONSTRAINT tasks_pk PRIMARY KEY (task_id)
);
```

### `task_progress` Table
This table stores the progress of each task.

```sql
CREATE TABLE IF NOT EXISTS xforce.task_progress (
  progress_id        UUID NOT NULL,
  task_id            UUID NOT NULL REFERENCES tasks(task_id),
  status             VARCHAR(50) NOT NULL, -- e.g., COMPLETED, FAILED
  record             JSONB NOT NULL, -- Record details in JSON format
  created_at         TIMESTAMP DEFAULT NOW(),
  CONSTRAINT task_progress_pk PRIMARY KEY (progress_id)
);
```

### Sample Payload

```json
[
  {
    "tool_name": "University Scraper",
    "tool_id": "V001",
    "category": "Education",
    "description": "Extracts data on requirements, fees, and programs from Russian universities to keep budget information up-to-date.",
    "features": ["Data extraction", "Requirement updates", "Program information", "Fee updates"],
    "url": "https://example.com/university-scraper"
  },
  {
    "tool_name": "Currency Converter",
    "tool_id": "V002",
    "category": "Finance",
    "description": "Calculates real-time exchange rates to convert prices in your budget across various currencies.",
    "features": ["Real-time rates", "Multiple currencies", "Conversion history"],
    "url": "https://example.com/currency-converter"
  },
  {
    "tool_name": "Study Cost Simulator",
    "tool_id": "V003",
    "category": "Education",
    "description": "Estimates the total cost of studying in various Russian cities, accounting for tuition, accommodation, and other expenses.",
    "features": ["Tuition cost estimation", "Accommodation costs", "Other expenses", "City comparison"],
    "url": "https://example.com/study-cost-simulator"
  },
  {
    "tool_name": "Vocabulary Flashcard Generator",
    "tool_id": "V004",
    "category": "Language Learning",
    "description": "Practice essential Russian vocabulary for daily life and studies in Russia using digital flashcards.",
    "features": ["Custom vocabulary sets", "Review schedules", "Digital flashcards"],
    "url": "https://example.com/vocabulary-flashcard-generator"
  },
  {
    "tool_name": "Travel and Route Planner",
    "tool_id": "V005",
    "category": "Travel",
    "description": "Calculates and optimizes routes within Russia, considering travel time and costs.",
    "features": ["Route optimization", "Cost calculation", "Travel time estimation"],
    "url": "https://example.com/travel-route-planner"
  }
]
```
