---
# MODULE SPECIFICATION 
module:
  name: "Personal Pilot Logbook"
  category: "fly"

code_references:
  backend:
    - "flights/models.py (Currency model with calculate_currency, Flight model with get_history for export)"
    - "flights/guest_club_view.py (syncronize_flights_from_guest_clubs, push_currency_to_guest_clubs)"
    - "accounts/guest_user.py (guest user creation, home_club linking)"
    - "flights/serializers.py (FlightGuestSerializer for guest club syncing)"
  frontend:
    - "src/pages/profile/mystarts.jsx (main logbook view with stats)"
    - "src/pages/profile/bulkimport.jsx (CSV flight import interface)"
    - "src/pages/profile/cards/cardGuestClubs.jsx (guest club management)"
    - "src/pages/profile/cards/cardGuestClubAddModal.jsx (add guest club workflow)"
    - "src/components/flightStats/flightStats.jsx (flight statistics display)"
  marketing:
    - "docs/features/fly.md (personal pilot logbook features)"
  docs:
    - "public/template_import_flights.csv (CSV import template)"

core_concepts:

  - name: "Flight Import CSV Fields"
    description: "CSV import supports bulk adding historical flights. Template defines required and optional fields."
    settings_table: false
    details: |
      **Non-self-descriptive fields explained:**
      - **uuid**: Leave empty to auto-generate. Only needed if reimporting same flights to update data
      - **pic_name**: Use actual name (will be mapped to member during import)
      - **start_method**: Must match exact values (case-sensitive)
      - **flightduration**: Total airtime in minutes
      - **blocktime**: For TMG, includes 5min startup + flight + 5min shutdown (default for TMG, can be modified per aircraft)
  
  - name: "Total Flight Time Correction"
    description: "Fix cumulative flight time by creating single flight with multiple launches representing historical totals."
    settings_table: false
    details: |
      When migrating to GlidingApp with existing flight history not fully imported:
      1. Calculate total historic launches and hours
      2. Create one flight dated before first imported flight
      3. Set starts = total historic launches (e.g., 450)
      4. Set flightduration = total historic hours in minutes (e.g., 15000 for 250 hours)
      5. System adds this to imported flights for correct totals
      
      This ensures currency calculations reflect true experience without importing every historic flight individually.
  
  - name: "Guest Club Linking"
    description: "Pilots can link home club and guest clubs. Flights automatically sync nightly between clubs for pilots who fly at multiple locations."
    settings_table: true
    settings:
      - param: "Home club"
        desc: "Club where pilot holds primary membership. Currency calculated here and pushed to guest clubs nightly"
        example: "Pilot member at Club A, flies regularly at Club B as guest"
      - param: "Guest club"
        desc: "Club where pilot flies as visitor. Flights made here sync to home club logbook automatically"
        example: "Club B receives pilot's currency from Club A, sends flight data to Club A"
      - param: "Visibility"
        desc: "Guest club instructors/admins can view pilot's profile and currency for competency verification"
        example: "Club B instructors see pilot's recency status from Club A"
    details: |
      **Sync behavior:**
      - Flights created at guest club → automatically copied to home club logbook (nightly sync)
      - Currency calculated at home club → pushed to guest club for instructor visibility
      - Data retention: After deactivation, guest club retains data for 3 years (EASA requirement)
      
      **Privacy:** Guest club instructors/admins override privacy mode to verify pilot competency

  - name: "Private Flights"
    description: "Flights outside club can be marked private. These count toward personal currency but aren't visible within wider club administration."
    settings_table: false
    details: "Use for flights at other clubs before guest club linking setup, or for flights in privately owned aircraft. Private flights marked with **private** flag, count in currency calculations, and export to ILenT/CAA but not visible in club statistics."

usage_workflows:
  - title: "Import flight history"
    what: "Bulk import historical flights from CSV file"
    when: "Migrating to GlidingApp, switching clubs, or importing flights from external logbook"
    permission: "All glider pilots (by group)"
    how:
      - "Go to **Profile** → **My Flights** → **Import**"
      - "Download CSV template from link provided"
      - "Fill template with historical flights (see CSV fields table above)"
      - "Key mappings:"
      - "  - pic_name: Use your name exactly as shown in member list"
      - "  - passenger_name: Use [passenger] for non-members"
      - "  - start_method: Must match: winch/tow/self/tmg/tmg-a/sep/sep-a/car/bungee"
      - "Upload completed CSV file"
      - "System shows preview with validation errors highlighted"
      - "Select yourself from pilot name dropdown (maps your flights to your account)"
      - "Review flights, fix any errors"
      - "Click **Import** to add flights to logbook"
      - "System recalculates currency automatically"
      
  - title: "Add flight outside club"
    what: "Manually add individual flight from other club or private aircraft"
    when: "Flying at another club (before guest club setup) or in private aircraft"
    permission: "All glider pilots (by group)"
    how:
      - "Go to **Profile** → **My Flights** → **Add Flight**"
      - "Fill flight details:"
      - "  - Date, departure/arrival airport"
      - "  - Aircraft registration and type"
      - "  - Launch method"
      - "  - Start/landing times or flight duration"
      - "  - Mark as **Private** if not club flight"
      - "Select role: PIC or P2"
      - "Click **Save**"
      - "Flight added to logbook, counts toward currency"
      - "Private flights not visible to club admins"
      
  - title: "Add club as guest pilot"
    what: "Link another club to automatically sync flights and share currency"
    when: "Flying regularly at another club using GlidingApp"
    permission: "Pilot (own profile)"
    how:
      - "Go to **Profile** → **Club Memberships** → **Add Guest Club**"
      - "Select country and club from dropdown"
      - "Confirm data sharing agreement (profile shared with guest club instructors/admins)"
      - "Confirm EASA data retention (3 years after deactivation)"
      - "Click **Save**"
      - "System sends request to guest club admin for approval"
      - "After approval, receive email with password setup link"
      - "Login to guest club using same email address"
      - "Flights at guest club automatically sync to home club nightly"
      - "Guest club instructors can view your currency for competency verification"

---

<!-- LLM GENERATION INSTRUCTIONS

CRITICAL STYLE REQUIREMENTS:
✓ Write like you're training an admin, not selling a product
✓ Items that are self-explaining do not need to be explained
✓ Be concise and direct - no fluff or marketing language
✓ Use bullet points and tables extensively
✓ Always specify required permissions before workflows
✓ Number subsections under Core Concepts (1. Concept Name, 2. Another Concept, etc.)

DOCUMENT STRUCTURE (follow exactly):
1. ## Overview
   - 1-2 short paragraphs
   - Explain WHAT it is and WHY it exists
   - Mention how it integrates with existing features
   - No marketing language

2. ## Core Concepts
   - Number each subsection: ### 1. [Concept Name]
   - Use markdown tables for settings/parameters with columns: Parameter | Description | Example
   - Keep explanations under 3-4 sentences per concept
   - Bold key terms on first mention
   - Include concrete examples in tables

3. ## Admin actions
   - NOTE: Only document workflows that are NOT self-explaining
   - Focus on admin tasks for implementing the tool (admin knows club, not software)
   - Use card-style format with consistent structure
   
   CARD FORMAT (follow exactly for each workflow):
   ### [Action Name]
   
   **What:** [Brief description of what this action does]  
   **When:** [When/why you'd use this - concrete use cases]  
   **Permission:** "[Permission name]" (with any relevant notes like defaults)
   
   **How:**
   1. Sequential step one
   2. Sequential step two
   
   OR (for non-sequential actions):
   
   **Available actions:**
   - **Action name:** Description
   - **Action name:** Description
   
   FORMATTING WITHIN CARDS:
   - Use → for navigation paths (e.g., **Roster** → **Day Templates**)
   - Keep "What" to one line
   - "When" should explain use cases, not repeat "What"
   - Include permission defaults/notes in parentheses if relevant
   - Use numbered lists (1. 2. 3.) for sequential "How" steps
   - Use bullet points with bold labels for non-sequential actions

FORMATTING RULES:
- Use **bold** for UI elements, permissions, and first mentions of key terms
- Use "quotes" for specific names/values and day types
- Tables should have 3 columns max for readability
- Keep line length reasonable (don't write paragraph-long sentences)
- Use → for navigation paths
- Use bullet points (- or •) for lists, numbered lists (1. 2. 3.) for sequential steps

TONE & LANGUAGE:
- Instructional, not conversational
- Assume admin knows their club but not the software
- Avoid: "you can also...", "feel free to...", "simply...", "just..."
- Prefer: "Go to X", "Select Y", "The system automatically..."
- No exclamation marks or enthusiasm
- Use present tense for system behavior

LENGTH: 500-1500 words total
-->

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

**Process:** Calculate total historic launches and hours from paper logbook or previous system. Create one flight dated before first imported flight. Set starts field to total historic launches (e.g., 450) and flightduration to total historic hours in minutes (e.g., 15000 for 250 hours). The system adds this correction to all imported flights for accurate currency totals.

**Example:** Pilot has 300 historic flights totaling 200 hours not being imported. Create correction flight dated 1 Jan 2020 (before first imported flight) with starts=300, flightduration=12000 (200 hours × 60 minutes). All future currency calculations include this baseline.

### 3. Guest Club Linking

Pilots flying at multiple clubs can link their home club (primary membership) with guest clubs (regular visiting locations). Flights automatically sync nightly between clubs, and currency calculated at home club is shared with guest club instructors for competency verification.

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Home club** | Club where pilot holds primary membership. Currency calculated here and pushed to guest clubs nightly | Pilot at Club A flies regularly at Club B as guest |
| **Guest club** | Club where pilot flies as visitor. Flights created here sync to home club logbook automatically | Club B receives currency from Club A, sends flight data to Club A |
| **Visibility** | Guest club instructors/admins can view pilot profile and currency, overriding privacy mode for safety | Club B instructors see pilot's recency status from Club A |

**Sync behavior:** The `syncronize_flights_from_guest_clubs` function runs nightly, copying flights created at guest clubs to the home club logbook. The `push_currency_to_guest_clubs` function shares home club currency with guest clubs so instructors can verify pilot competency before authorizing flights. After deactivation, guest clubs retain pilot data for 3 years (EASA requirement).

### 4. Currency Calculations

The **Currency** model tracks starts, hours, PIC time, DBO time, and FIS hours. The `calculate_currency` method runs automatically after every flight, updating totals and recency status. Currency is calculated only at the home club for pilots with guest club memberships (prevents double-counting).

**Tracked metrics:** Total starts, total hours, PIC starts, PIC hours, FIS total hours, DBO starts, DBO hours, recency status (JSON with last flight dates per category). Currency exports to CSV for ILenT or CAA submission use the `get_history` method, which formats flights according to regulatory requirements.

**Tags:** Pilots are tagged based on qualifications: instructeur, basic_instructor, dbo, solist, brevet, gastvlieger (guest pilot), niet_vliegend (non-flying member). Tags determine which currency metrics apply and which permissions the pilot has.

### 5. Private Flights

Flights marked as **private** (is_prive flag) count toward personal currency but aren't visible in club-wide statistics or admin reports. Use private flights for activity in personally owned aircraft or at other clubs before guest club linking is established.

Private flights appear in personal logbook, count in currency calculations, and export to ILenT/CAA. However, they don't appear in club flight statistics, duty roster calculations, or billing reports. This separates personal aviation activity from club-managed operations while maintaining complete pilot records.

## Admin actions

### Import flight history

**What:** Bulk import historical flights from CSV file  
**When:** Migrating to GlidingApp, switching clubs, or importing flights from external logbook  
**Permission:** "All glider pilots" (by group)

**How:**
1. Go to **Profile** → **My Flights** → **Import**
2. Download CSV template (link provided at top of import page)
3. Fill template with historical flights using field definitions from Core Concepts
4. Key field mappings:
   - pic_name: Use exact name as shown in member list
   - passenger_name: Use `[passenger]` for non-members
   - start_method: Must match exact values (case-sensitive): winch/tow/self/tmg/tmg-a/sep/sep-a/car/bungee
5. Upload completed CSV file
6. System displays preview with validation errors highlighted in red
7. Select your name from pilot dropdown (maps flights to your account)
8. Review flights, fix any validation errors
9. Click **Import** to add flights to logbook
10. System recalculates currency automatically and displays updated totals

### Add flight outside club

**What:** Manually add individual flight from other club or private aircraft  
**When:** Flying at another club before guest club setup, or flying in privately owned aircraft  
**Permission:** "All glider pilots" (by group)

**How:**
1. Go to **Profile** → **My Flights** → **Add Flight**
2. Fill flight details: date, departure/arrival airport, aircraft registration and type, launch method
3. Enter start/landing times or flight duration
4. Mark as **Private** if flight not at club (checkbox)
5. Select role: PIC or P2 (passenger/student)
6. Click **Save**
7. Flight added to logbook and counts toward currency calculations
8. Private flights not visible to club admins or in club statistics

### Add club as guest pilot

**What:** Link another club to automatically sync flights and share currency  
**When:** Flying regularly at another club using GlidingApp (both clubs must use system)  
**Permission:** "Pilot" (own profile only)

**How:**
1. Go to **Profile** → **Club Memberships** → **Add Guest Club**
2. Select country from dropdown, then select club from filtered list
3. Review data sharing agreement: profile shared with guest club instructors/admins for safety verification
4. Confirm EASA data retention notice: guest club retains data for 3 years after deactivation
5. Click **Save** to send request
6. System sends request to guest club admin for approval
7. After admin approval, receive email with password setup link for guest club
8. Login to guest club using same email address (single sign-on)
9. Flights created at guest club automatically sync to home club nightly
10. Home club currency pushed to guest club for instructor visibility
11. Guest club instructors can view your profile and currency for competency verification
