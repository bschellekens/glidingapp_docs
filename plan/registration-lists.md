# Registration Lists

## Overview

The registration list system is a feature that works alongside existing sign-ups. It allows pilots to pre-register for specific activities or slots, with automatic waitlist management and limits on the number of registrations.

:::info Example Use Case: Students

As a starting point, two templates have been loaded for your club. One is an example DTO operation, where students can register in two blocks. A common use case is the creation of multiple lists per aircraft, or a morning/afternoon division. A third block contains a list for solo pilots to ensure there aren't too many sign-ups. As a club, you can adapt this template to your own situation.

:::


## Core Concepts

### 1. Day Templates

Day templates are blueprints that can contain both **duties** and **registration lists**. These templates can be reused when creating new flying days.

**Two types of configurations:**

- **Duties/Rota's**: are pre-filled and scheduled by roster coordinators (e.g., tow pilot, instructor)
- **Registration Lists**: Lists where pilots can self-register (e.g., tow flights, student pilots)

### 2. Settings

Each registration list has the following settings:

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Name** | Name of the list | "Morning tow flights", "ASK-21 reservations" |
| **List length** | Maximum number of spots on the list | 8 pilots |
| **List length type** | Either fixed or depending on # instructors available | e.g. 2 slots per instructor 
| **Waitlist** | Whether there should be a waitlist | Yes/No |
| **Cluster** | Users can register once per cluster per day | "students" |
| **Max future registrations** | How many times someone can register in total | 2 |
| **Groups** | Which user groups can register | ["members", "DTO"] |
| **Automatic assignment** | Automatically promote from waitlist | Yes/No |

### 3. Automatic Waitlist Management

When someone unregisters from a full list, the system can automatically promote members from the waitlist. In that case, users with the least recent flights get priority. A confirmation email is sent to promoted users.

### 4. Clusters

Clusters prevent duplicate registrations. For example, you can create a "students" cluster with a morning and afternoon block. Students can register for one list per cluster per day.


### 5. Max future registrations

This prevents one person claiming all slots. A maximum number of registrations in the future is allowed for the user to signup. The count includes the cluster and waitinglist slots.


## Admin actions

### Edit day settings

**What:** Modify registration list settings after a day is created  
**When:** Need to adjust capacity, change allowed groups, or modify list parameters after scheduling  
**Permission:** "Edit Roster"

**How:**
1. Open the flying day
2. Press **Adjust day**
3. Modify registration list settings (e.g., temporarily increase capacity)
4. Save changes

### Override user registration

**What:** Manual control over who's on main list vs waitlist  
**When:** Need exceptions to automatic promotion rules (e.g., prioritizing specific pilots or circumstances)  
**Permission:** "Register others"

**Available actions:**
- **Promote:** Move from waitlist → main list (even when full)
- **Demote:** Move from main list → waitlist
- **Add:** Direct add to main list (bypasses all capacity and max registration limits)
- **Remove:** Delete any registration from main list or waitlist



