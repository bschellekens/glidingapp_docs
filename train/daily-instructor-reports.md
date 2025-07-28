# Daily Instructor Reports

## Overview

Daily instructor reports provide comprehensive end-of-day summaries for instructors to review flight operations, sign training flights, and document member progress. The system aggregates all flights, registrations, and roster assignments into a single view accessible through **Flights** → **Daily reports**. This centralized reporting reduces administrative burden by allowing instructors to bulk-sign multiple flights, add training notes, and review member activity without navigating between multiple screens. The reports integrate with flight logging, member profiles, and competency tracking to maintain complete training records.

## Core Concepts

### 1. Daily Report Overview

The daily report aggregates comprehensive data for a specific flying day into organized tabs. The **Members** tab displays flight counts, currency status, and signed flights per pilot. The **Flights** tab lists all flights chronologically. The **Registrations** tab shows who registered and their status. Statistics shown at the top include total starts, launch methods used, aircraft types flown, maximum flight duration, and maximum altitude reached. For non-flying days, only registrations and roster assignments are displayed.

### 2. Instructor Notes

Training notes document pilot progress, concerns, achievements, or general day observations. Notes attached to specific pilots appear in the member's profile and training history. Day notes without a pilot (general observations) appear only in the daily report.

| Parameter | Description | Example |
|-----------|-------------|---------|
| `only visible to instructors` | Makes note invisible to user; user will only receive email if note is made visible to the member | By default visible to member |
| `Important note` | If true, emails chief instructor via contact found in club settings | Use whenever it concerns safety or an urgent matter |

### 3. Flight Signing

Instructors sign flights using their personal pincode to confirm supervision of training flights or solo operations. Signing is primarily used for flights where the instructor was not a pilot but provided supervision from the ground. Training flights flown with the instructor on board should be flagged with `is_training` but do not necessarily require signing since the instructor already participated. Signatures can only be revoked by the instructor who created them.

### 4. Bulk Signing Workflow

The bulk signing modal efficiently signs multiple flights for one pilot in a single operation. The system pre-selects flights that have flight remarks filled in, as these indicate the pilot reflected on the flight. Flights without remarks trigger a warning prompting the instructor to ask the pilot to add them first. Remarks entered during bulk signing are saved to the last selected flight and automatically added as an instructor note on the pilot's profile. The workflow reduces end-of-day workload by allowing instructors to review and sign all of a pilot's flights at once.


