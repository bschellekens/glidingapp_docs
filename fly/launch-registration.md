# Launch Registration

## Overview

The **Launch Registration** system records takeoff and landing times for all flights at the airfield. It integrates with the Open Glider Network (OGN) to automatically detect flight events using FLARM transponders, eliminating manual timekeeping for most flights. The system works in the launch tower, accessed via a temporary password that expires after use.

The system connects to **daily member registration** (pilots signing up for the day), **personal pilot logbooks** (automatic flight entries), and **aircraft maintenance** (tracking flight hours and launches). When the day is closed, the system sends email summaries to all pilots with their flight details.

## Core Concepts

### 1. OGN Integration

**OGN (Open Glider Network)** receives FLARM signals from gliders and processes them to detect takeoff and landing events. The system connects via websocket to receive real-time position updates. Altitude changes and ground speed determine when flights start and land.

OGN integration requires an OGN receiver installed at the airfield with direct line-of-sight to launch and landing areas. Automatic flight registration augments manual timekeeping. Aircraft without FLARM or clubs with receiver issues can use manual mode.

### 2. Method of Timekeeping

Three modes control how times are recorded. The mode can be changed during the day if OGN receiver status changes.

| Parameter             | Description                                                   | Example                                                          |
| --------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Manual**            | All times recorded manually using Start/Land buttons          | Club without OGN receiver or poor internet connectivity          |
| **Automatic**         | System fills both takeoff and landing times from OGN data     | OGN receiver with good coverage of both launch and landing areas |
| **Automatic landing** | Only landing times filled automatically; takeoff times manual | OGN receiver with poor line-of-sight to launch area              |

### 3. Default Flight Categories

**Default flight categories** are pre-selected dropdown values for classifying flights. The values are club-configurable and can include flight type, height bracket, or billing category. Three separate category lists exist: glider flights, aerotow flights, and TMG flights.

Selected defaults apply to all new flights during the day. Launch marshal can change defaults at any time, and individual flight categories can be edited after creation.

### 4. Flight Types

**Flight types** classify flights for UK SFCL and EASA regulatory compliance. The system tracks these special flight types to monitor instructor and pilot recency requirements.

| Flight Type         | Purpose                               | Recency Impact                                                                                                  |
| ------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Training flight** | License holder flying with instructor | Counts toward second pilot (P2) recency (2 required per 24 months)                                              |
| **Exam**            | Skills test / exam                    | Exempts P2 from recency for 24 months after joining license group                                               |
| **FIS**             | Flight instruction on DTO aircraft    | Automatically set when instructor flies as PIC (Pilot in Command) on two-seater; counts toward PIC (P1) recency |

**Note:** Bear in mind that the administration around a proficiency check is often deemed so large that it makes more sense to fly the hours/launches under the supervision of an instructor. 

Available flight types depend on crew composition:

**Scenario 1: Instructor with License Holder**  
PIC/P1 is (basic) instructor, Second pilot (P2) is license holder (instructor, basic instructor, or license holder). Available flight types: **Training flight** or **Prof check**. Both count toward P2's recency requirements.

**Scenario 2: Instructor with Student**  
PIC/P1 is (basic) instructor, Second pilot (P2) is student or solo student. Available flight type: **Exam**. When student later joins license holder group, the exam date triggers a 24-month exemption from recency requirements.

**FIS (Flight Instruction Flight)** activates automatically when PIC/P1 is a (basic) instructor flying with any second pilot on a DTO aircraft (by default all club two-seaters, but this can be modified per aircraft). This counts toward the instructor's recency requirements.

### 5. Day Status and Locking

Flying days move through three lifecycle states:

| Status     | Description                                                    | When                                |
| ---------- | -------------------------------------------------------------- | ----------------------------------- |
| **Open**   | Active flight logging; pilots see flights they participated in | During flying operations            |
| **Closed** | Flight logging ended; system processes and emails summaries    | End of flying day                   |
| **Locked** | Only admins can view/edit; privacy mode applies                | After grace period (default 7 days) |

When a day is closed, the system sends individual email summaries to every pilot who flew. From this moment onwards, pilots are allowed to make changes. 

Our experience is that the majority of changes occur on the same evening that the email is sent out; however, some changes do occur in the week after the flight happened. This is why, by default, a grace period of 7 days is inserted (configurable in club settings) to allow for changes to be made. After locking, non-admin users are not allowed to make any changes.


### 7. Flight Queue

The **flight queue** displays aircraft registered for the day at the top of the launch logging interface. Launch marshal clicks an aircraft to load it into the flight entry form, then adds crew names and launch method.

Non-member names can be entered for trial flights (voucher holders), passengers (friends and family), or reciprocal visitors. The system warns about missing information but allows incomplete entries to be saved.

## Admin actions

### Configure OGN mode and default categories

**What:** Set automatic timekeeping method and pre-selected flight categories  
**When:** When changes need to be made during the flying day  
**Permission:** "Launch tower login"

**How:**
1. Open day in **Flight Logging**
2. Click connection status button (top-right, shows wifi icon or "offline")
3. Select default categories for flight types your club uses
4. Choose OGN mode:
   - Manual: No automation, click Start/Land buttons
   - Automatic: System fills both takeoff and landing times
   - Automatic landing: System fills only landing times
5. Click **Save**
6. Settings apply immediately to new flights

### Close day and send emails

**What:** Finalize day's flights and automatically email summaries to all pilots  
**When:** End of flying session 
**Permission:** "Edit Flights"

**How:**
1. Verify all flights have complete information:
   - Each two-seater has P2 entered
   - Non-member P2 entries have names in "non-member name" box
   - No missing data warnings visible
2. Click **Close Day** button
3. System automatically sends email to each pilot with their flights summary