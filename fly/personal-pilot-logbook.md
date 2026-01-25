# Personal Pilot Logbook

## Overview

The **Personal Pilot Logbook** tracks every flight you make, automatically calculates currency for UK SFCL and EASA regulations, and syncs across clubs when flying as a guest pilot. The system maintains starts, hours, PIC time, FIS hours, DBO hours, and recency status for each pilot. Currency calculations run automatically after every flight and can be exported for CAA or ILenT submissions.

The logbook integrates with **Automatic Launch Registration** (flights created from OGN data), **Manual Flight Entry** (adding flights from other clubs), and **Guest Club Linking** (automatic sync between home and guest clubs). Historical flights can be imported via CSV for pilots migrating from paper logbooks or other systems.

## Core Concepts

### 1. Flight Import CSV Fields

CSV import supports bulk adding historical flights using a template with 23 fields (8 required, 15 optional). The system validates field formats during preview and highlights errors before import.

| Field | Description | Example |
|-------|-------------|---------|
| **uuid** | Leave empty for auto-generation. Only needed when reimporting same flights to update data | `a7f3c2e1-8b9d-4e5f-a1b2-c3d4e5f6a7b8` |
| **pic_name** | Pilot name exactly as shown in member list. System maps name to member account during import | `Jan de Vries` |
| **passenger_name** | Use `[passenger]` for non-members. For members, use exact name from member list | `[passenger]` or `Maria Jansen` |
| **start_method** | Must match exact values (case-sensitive): winch/tow/self/tmg/tmg-a/sep/sep-a/car/bungee | `winch` |
| **is_fis** | Mark FIS training flights. Counts toward FIS hour requirements | `TRUE` |
| **is_training** | Mark dual instruction flights. Used for training records | `TRUE` |
| **is_exam** | Mark skill test or proficiency check flights | `TRUE` |
| **is_profcheck** | Mark EIR proficiency check flights | `TRUE` |
| **flightduration** | Total airtime in minutes. For multiple launches in one flight, sum all launch durations | `45` |
| **blocktime** | TMG only: includes 5min startup + flight + 5min shutdown. Default calculated per aircraft, can be modified | `55` |
| **height** | Release height in meters for winch/tow launches | `400` |

### 2. Total Flight Time Correction

When migrating to GlidingApp with partial flight history, create a single correction flight to represent total historic experience. This ensures currency calculations reflect true totals without importing every flight individually.

**Process:** Calculate the total historic launches and hours from your paper logbook or previous system. Create one flight dated before the first imported flight. Set the starts field to the total historic launches (e.g., 450) and flightduration to the total historic hours in minutes (e.g., 15000 for 250 hours). The system adds this correction to all imported flights for accurate currency totals.

**Example:** Pilot has 300 historic flights totalling 200 hours that are not being imported. Create correction flight dated 1 Jan 2020 (before first imported flight) with starts=300, flightduration=12000 (200 hours × 60 minutes). All future currency calculations include this baseline.

### 3. Guest Club Linking

Pilots flying at multiple clubs can link their home club (primary membership) with guest clubs (regular visiting locations). Flights automatically sync nightly between clubs, and the currency calculated at the home club is shared with guest club instructors for competency verification.

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Home club** | Club where pilot holds primary membership. Currency calculated here and pushed to guest clubs nightly | Pilot at Club A flies regularly at Club B as guest |
| **Guest club** | Club where pilot flies as visitor. Flights created here sync to home club logbook automatically | Club B receives currency from Club A, sends flight data to Club A |
| **Visibility** | Guest club instructors/admins can view pilot profile and currency, overriding privacy mode for safety | Club B instructors see pilot's recency status from Club A |

**Sync behavior:** Runs nightly, copying flights created at guest clubs to the home club logbook. Pilot's recency is shared with guest clubs so instructors can verify pilot competency before authorizing flights. After deactivation, guest clubs retain pilot data for 3 years (EASA requirement).

:::info **ℹ️ One-way sync: What you see at each club**

Flight sync is **one-way only**: guest club → home club. This ensures a single source of truth, as each club maintains its own database.

**At your home club:** You see ALL flights: those made at your home club + synced flights from guest clubs. This is your complete logbook.

**At your guest club:** You see ONLY flights made at that specific guest club. Individual flights from your home club are NOT imported to the guest club database.

**Total starts and currency:** Your total starts and recency displayed at the guest club ARE correct because they are directly retrieved from your home club data. The home club pushes summary statistics (total starts, hours, recency) to the guest club, so instructors see accurate currency.

**To view your complete flight history:** Always check your home club logbook, where all flights from all clubs are synced together.
:::

### 4. Private Flights

Flights marked as **private** count toward personal currency but aren't visible in club-wide statistics or admin reports. Use private flights for activity in personally owned aircraft or at other clubs before guest club linking is established.

Private flights appear in personal logbook, count in recency calculations, and in any flight exports. However, they don't appear in club flight statistics, duty roster calculations, or billing reports. This separates personal activity from club-managed operations whilst maintaining complete pilot records.

## Admin actions

### Add flight outside club

**What:** Manually add individual flight from other club or private aircraft  
**When:** Flying at another club before guest club setup, or flying in privately owned aircraft  
**Permission:** "All glider pilots" (by group)

**How:**
1. Go to **My Flights** → **Add Flight**
2. Fill flight details: date, departure/arrival airport, aircraft registration and type, launch method
3. Enter start/landing times or flight duration
4. Select role: PIC or P2 (passenger/student)
5. Click **Save**
6. Flight added to logbook and counts toward currency calculations

### Add club as guest pilot

**What:** Link another club to automatically sync flights and share currency  
**When:** Flying regularly at another club using GlidingApp (both clubs must use system)  
**Permission:** "Pilot" (own profile only)

**How:**
1. Go to **Profile** → **Club Memberships** → **Add Guest Club**
2. Select country from dropdown, then select club from filtered list
3. Click **Save** to send request
4. System sends request to guest club admin for approval
5. After admin approval, receive email with password setup link for guest club
6. Login to guest club using same email address (single sign-on)
7. Flights created at guest club automatically sync to home club nightly
