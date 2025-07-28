# Rosters and Schedules

## Overview

The **Rosters and Schedules** system generates multiple flying days with pre-configured duty assignments for an entire season or period. This eliminates manual scheduling for each day and ensures consistent duty coverage across instructors, winch drivers, launch marshals, and other essential roles.

The system integrates with **day templates**, **registration lists**, and **daily member registration**. When a roster period is activated, the system makes duties visible, creates registration lists on all days, and automatically generates member registrations for assigned duty holders.

## Core Concepts

### 1. Roster Period

A **Roster Period** defines a time range that generates multiple flying days with pre-configured duties. Each period contains settings that apply to all generated days.

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Description** | Name of the period | Season 2025 - First half |
| **Day type** | Type of flying activity | Normal flying days |
| **Briefing time** | Default briefing time for all days | 09:00 |
| **Location** | Airfield | Terlet |


### 2. Day Selection

Days are created based on "Day type" and "Location". If days with the same type and location already exist, the new roster merges with those existing days instead of creating duplicates. This enables you to create multiple rosters that apply to the same days.

### 3. Duties/Rotas

**Duties** are roles that need to be filled each day, such as instructors, winch drivers, or launch marshals. Each duty has configurable settings that control how assignments are made.

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Name** | Duty description | Instructor, Winch driver |
| **Groups** | User groups that can fulfill this duty | instructors, winch_operators


### 4. Autofill Methods

Three methods control how users are assigned to duties:

- **Empty:** Manual assignments only. Roster coordinators or members assign themselves.
- **Auto:** System automatically assigns users from the specified groups, respecting rest periods and excluding users from excluded groups.
- **Social:** Like Auto, but members first indicate preferences during **Open Registration**. Options: "Want this duty" (guaranteed assignment), "Prefer" (considered), "Not available" (skipped).

For Social autofill, the system prioritizes users who selected "Want this duty", then considers those who selected "Prefer", and skips those marked "Not available".

### 5. Registration Lists

**Registration Lists** configured in the roster period are automatically created on each day when the period is activated. This ensures consistent capacity-limited signup options across all days in the period.

### 6. Roster Status

Roster periods move through four lifecycle states:

| Status | Description | Example |
|--------|-------------|---------|
| **Concept** | Initial state, not visible to members | Setting up roster |
| **Open Registration** | Members can indicate duty preferences (for Social autofill only) | Preference collection phase |
| **Active** | Duties are visible, registration lists created, members can sign up for days | Live roster |
| **Closed** | Duties hidden from view | Season ended |

## Admin actions

### Create roster period

**What:** Generate multiple flying days with pre-configured duties and registration lists  
**When:** Setting up a new season or half-season schedule  
**Permission:** "Edit Roster"

**How:**
1. Go to **Flights** → **Rosters** → **+ New roster**
2. Follow the 6-step wizard 
3. Roster is created in "Concept" status

### Use Social autofill

**What:** Collect member preferences before automatically assigning duties  
**When:** Want to respect member availability and preferences for duty assignments  
**Permission:** "Edit Roster"

**How:**
1. Create roster period with one or multiple duties set to "Social" autofill
2. Change status to **Open Registration** 
3. Members within the limited groups can now add their preference
4. After preference period ends, click **Fill duties** 
5. System assigns duties: first "Want this duty", then "Prefer", skipping "Not available"
6. Click **Activate** to make roster live

### Activate roster period

**What:** Make duties visible to members and enable day registration  
**When:** After creating roster period and optionally running autofill  
**Permission:** "Edit Roster"

**How:**
1. Open roster period
2. Click **Activate**
3. System performs these actions automatically:
   - Makes all duties visible
   - Creates registration lists on all days
   - Generates member registrations for users assigned to duties