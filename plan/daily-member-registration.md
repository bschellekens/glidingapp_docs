# Daily Member Registration

## Overview

The **Daily Member Registration** system allows members to sign up for flying days in advance, indicating their availability, role preferences, and aircraft choices. This gives roster coordinators and instructors visibility into who will attend each day, enabling better planning of instruction and resource allocation.

The system integrates with **roster periods**, **duties/rotas**, and **registration lists**. When members sign off from a day, the system automatically removes their associated duties and registration list entries to maintain consistency.

## Core Concepts

### 1. Day Overview

The **Day Overview** provides a central view of all upcoming flying days. Each day displays the date, location, briefing time, day type (e.g., "Normal", "Evening flying", "Winter work", "Donor flights", "Theory"), and the number of registered members. Days where you are registered appear highlighted in blue.

When creating new days, you can select a **day template** that pre-configures duties and registration lists. These templates can be customized in **Roster** → **Day Templates**.

### 2. Registration Fields

Members provide specific information when signing up for a day:

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Roles** | Functions the member can fulfill that day | Instructor, Tow pilot, Check start |
| **Aircraft preference** | Preferred gliders to fly | ASK-21, Discus |

Members also specify their time availability (arrival and departure times), indicate if they plan a cross-country flight, and can add optional remarks (e.g., "Need briefing on new aircraft").

### 3. Roles

**Role options** appear only for users in specific groups. For example, only instructors see the option to indicate they want to instruct that day. This allows instructors to choose whether they want to provide instruction or fly recreationally on a particular day.

### 4. Registration Status Display

The registration list shows each member's photo, name, and current status. **Instructors** see additional information: the **6-month currency barometer**, **license validity warnings**, assigned roles, aircraft preferences, and time availability. This enables instructors to identify pilots approaching recency limits and plan appropriate refresher flights.

### 5. Sign-on/Sign-off

Members can sign on or off for a day at any time. When a member **signs off**, the system automatically:
- Marks the registration as inactive
- Removes any **duties/rotas** assigned to that member for the day
- Deletes their entries from **registration lists**

This automatic cleanup prevents inconsistencies between registrations, duties, and lists.

### 6. Automatic Day Creation

Flying days are typically created automatically when generating **roster periods**. The roster system creates days based on the configured schedule (e.g., all weekends, specific weekdays) and applies the selected day template to each day. For one-off events, you can manually create ad-hoc days.

## Admin actions

### Create ad-hoc flying day

**What:** Create a one-off flying day outside of the regular roster schedule  
**When:** Need a day for special events, extra flying days, or occasions not covered by roster periods  
**Permission:** "Adjust days" (default: all glider pilots)

**How:**
1. Go to **Sign-ups** → **+ New day**
2. Fill in date, location, briefing time, day type
3. Select day template (rotas and registration lists are pre-populated from template)
4. Save

### Register someone else

**What:** Create a registration on behalf of another member  
**When:** Managing registrations for members who can't access the system, or for clubhouse operations  
**Permission:** "Register others" (clubhouse account has this by default)

**How:**
1. Go to day overview
2. Select member
3. Fill in their registration details
4. Submit on their behalf

### Manage day templates

**What:** Configure default templates that determine which duties and registration lists are created on new days  
**When:** Setting up your club's standard day structure or adjusting for seasonal changes  
**Permission:** "Edit Roster"

**How:**
1. Go to **Roster** → **Day Templates**
2. View all day templates
3. Edit template to add/remove duties or lists
4. Save changes
