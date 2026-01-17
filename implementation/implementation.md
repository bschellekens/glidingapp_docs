# Club Implementation Guide

## Overview

Implementing GlidingApp at your club begins with **flight logging** and **DTO progress tracking**, the two core features of the GlidingApp. Flight logging automates record-keeping and eliminates paperwork, while DTO tracking provides structured visibility into student progression through competency-based training programs.

The implementation process consists of three main steps completed over **7 evenings across 2-4 weeks**: importing your data, configuring club operations, and training instructors. Once these core features are running successfully, you can optionally add material maintenance and club finance modules.

## Test Account

After registering for GlidingApp, you can test it thoroughly with a **12-month free test account**:

- **6 user limit** - Sufficient for representative group (chief instructor, 2-3 instructors, 1-2 students)
- **Full functionality** - Flight logging, DTO training, material tracking, all features available
- **No payment required** - Pure evaluation period with no obligation to continue

The test account lets your core team evaluate GlidingApp with real training flights and data before deciding to adopt it club-wide. Request a test account at [contact@gliding.app](mailto:contact@gliding.app), or register yourself via [gliding.app/registration](https://app.gliding.app/registration)


## Main Implementation Plan

The core implementation takes **7 evenings total** across 2-4 weeks. Each step builds on the previous one, so complete them in sequence.

### Step 1: Data Import (3 evenings)

Import your existing club data into GlidingApp using CSV templates. This step establishes the foundation for all other functionality.

**What to import:**

1. **Users first** - Import all club members (pilots, students, ground crew, administrators) using the user CSV template. Each user needs a (unique) email address and name.

2. **Bulk group assignment** - After users are imported, use the bulk assignment feature to place users in their appropriate flying groups (student, solo, license, instructor) and operational groups (launch marshal, winchdriver, towpilot). 

3. **Historical flights** - Import past flights using the flight CSV template. Include pilot IDs, flight times, aircraft registrations, and launch types. We advise to import at least 3 years of data so that instructor recency is complete, if you import less years instructors might be flagged *not recent* incorrectly. This will cause unnecessary anxiety with instructors. Pay attention to importing **FIS** (Flight Instructor Seat) and **training flights** whereby the instructor is recorded as **Pilot in Command**.

**Timeline:** Expect 1-2 evenings for data preparation (cleaning spreadsheets, mapping columns), then 1 evening for the actual import process.

**GlidingApp assistance:** We can help translate your existing data into the correct CSV format. If your data is in Excel spreadsheets, flight logs, or another database format, contact us and we'll provide guidance on data preparation. 

:::info Historical Flight Data Completeness

Your historical flight import provides a valuable start for pilot recency tracking and helps members see their flying history when they first log in. However, the imported data may be incomplete. External flights (ouside of your club) might not be included, and (depending on your source data) some flights might not be marked correctly as UK SFCL/EASA training flights. 

As such, all imported flights are marked as "private" and **editable by the pilot**. Encourage members to review their flight history for accuracy, correct any training flights where needed, and add/import additional flights themselves. 

By importing your club data makes it easier for pilots to start with a digital personal logbook, and the better the quality of the import the more it will encourage pilots to complete it.
:::

### Step 2: Configure Your Club (3 evenings)

Customize GlidingApp to match your club's operations, training programs, and administrative processes. The main configuration should be headed by one person, and supported by a small group (3-4 people) to make configuration decisions. The roles could include (depending on which modules you'd like to implement):
- **(Chief) instructor** - Defines competency requirements and progression criteria
- **Technical officer** - Configures aircraft, launch methods, and operational settings
- **Roster coordinator** - Sets up day templates and roster patterns

**What to configure:**

1. **Club settings** - Basic information like club name, location, contact details, and operational preferences
2. **Competencies** - Define what qualifications and skills your club tracks (see Club Competencies documentation)
3. **Training programs** - Set up DTO progression cards with competency requirements for each level (see DTO Progression Cards documentation)
4. **Rosters and day templates** - Create templates for typical flying days (weekdays, weekends, competitions) that define default duties
5. **Groups and permissions** - Review the automatically created groups and adjust permissions if needed (see Groups and Permissions documentation) <!-- TODO: Explain when/how groups are automatically created. What triggers this? Is it during account setup? -->

**Timeline:** 3 evenings with your core team, meeting together or working asynchronously depending on preference.

**GlidingApp assistance:** We can conduct a video call with your core team to guide the configuration process. During the call, we'll walk through each section, answer questions about how GlidingApp workflows map to your club operations, and help you make decisions that match your club culture. 

### Step 3: Instructor Training (1-hour video call)

Train your instructors on flight logging and DTO progress tracking. Instructors are the primary daily users of GlidingApp, so their comfort with the system is critical for successful adoption.

**Training agenda:**

1. **Login and authentication** - How instructors access their accounts and navigate the interface
2. **Marking training flights** - How to record which competencies were practiced during flights
3. **Monitoring student progression** - Viewing DTO cards, checking item completion
4. **Daily workflows** - Registering for flights, completing the daily report

**Format:** 1-hour video call with all instructors present. Plan for questions and discussion.

**GlidingApp assistance:** We can join the video call as background support to answer technical questions and clarify system functionality. 

### Step 4: Start Season (Day 1 activation)

Activate all user accounts so members receive invitation emails to login, advised to do this at least 2 weeks before the season starts.

**Important note:** After activation, your users can log in immediately, but their competency cards will likely be incomplete. Rather than having the chief instructor fill out every competency card manually, have each pilot visit an instructor on their first flying day to complete their competency profile together. This distributes the workload across multiple instructors and ensures accuracy through direct conversation.

**Timeline:** The activation itself takes minutes. Budget additional time on opening day for instructors to complete competency cards with pilots.

## Additional Modules

After core flight logging and DTO tracking are operational, consider implementing these optional modules:

### Material Maintenance

Track aircraft maintenance schedules, defect reporting, and inspection compliance. This module integrates with flight logging to automatically calculate flight hours and trigger maintenance intervals.

**When to implement:** After your club has 1-2 months of experience with flight logging. Material maintenance is most valuable when your flight data is already flowing smoothly.


### Club Finance

Manage financial flight administration, member balance tracking, invoice generation, and payment reconciliation. This module connects flight data to accounting, automating billing based on actual flight activity.

**When to implement:** After flight logging is stable and your club is ready to transition from manual invoicing. Finance implementation requires cooperation with your treasurer and clear decisions about pricing structures.

