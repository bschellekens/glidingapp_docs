# Maintenance hours

## Overview

The maintenance hours system enables clubs to manage mandatory member maintenance obligations and provides technicians with structured logbooks for EASA Part-66 AML license documentation. Clubs typically establish winter maintenance periods where members contribute work hours based on their aircraft usage. The system calculates individual obligations using a configurable formula, tracks hour submissions, manages approval workflows, and generates exports for both club administration and regulatory compliance.

The system serves dual purposes: tracking club maintenance participation (formula-based winter hours) and documenting technician practical experience (categorized technical work). 

## Core Concepts

### 1. Winter Maintenance Period

Clubs create **maintenance periods** to organize seasonal maintenance work and calculate member obligations. Each period defines a date range (used to calculate club aircraft usage), a **formula** for hour calculations, a **minimum hour requirement**, and optional **excluded member groups**. Private aircraft hours are tracked separately and do not count toward club maintenance obligations.

Periods progress through three lifecycle states: "concept" for initial setup and calculation, "active" when members can view obligations and register hours, and "closed" when the season ends and no further registrations are accepted. 

### 2. Member Obligations and Tracking

The system automatically calculates each member's **maintenance obligation** by analysing their club aircraft usage during the period's date range. Admins can **manually adjust** any member's obligation to accommodate special circumstances such as medical exemptions, reduced flying commitments, or board duties. Adjusted obligations display alongside the calculated value for transparency. Members view their personal page showing obligation, hours completed, and completion percentage.

### 3. Hour Registration and Approval Workflow

Members submit **hour registrations** containing date, duration, equipment, optional workorder link, description, and technical categories. Each registration starts in "pending approval" status, requiring review before counting toward obligations. Users with **Can update winter maintenance hours** or **May approve winter hours** permission review submissions and accept or reject them. Rejected hours remain visible but do not count toward member obligations. The approval workflow provides accountability with timestamps and approver names recorded for each decision.

### 4. Technician Hour Logging for Part-66 AML

Technicians use the system to document **practical experience** required for EASA Part-66 Aircraft Maintenance License (AML) applications. Hours can be categorized using predefined technical categories covering all aspects of glider maintenance: General (weighing, documentation, inspections), Flight controls, Electrics, Avionics, Cabin equipment, Propeller, Piston Engines, Fuel systems, Ignition systems, Engine controls and indicating, Exhaust systems, and structural work (Wooden, Composite, Metal structures).

Each category contains specific sub-categories for detailed task documentation (e.g., under "Composite structures": laminate repair, sandwich structure repair, gel coat work). Technicians export their personal logbook showing AML number, dates, hours, equipment, workorder references, categories, and task descriptions to support initial license applications, category additions, or license renewals.

The technician's logbook can be exported to submit to local authority to apply for AML, both initial application as well as the renewals.

## Admin Actions

### Create and activate winter maintenance period

**What:** Set up a new maintenance season with formula configuration, calculate member obligations, and activate for member visibility  
**When:** At the start of each maintenance season (typically winter) to establish member obligations based on previous flying season usage  
**Permission:** "Can update winter maintenance hours"

**How:**
1. Go to **Maintenance Hours** page
2. Click **Add** to create new period
3. Enter period name (e.g., "Winter maintenance"), date range for flight calculations (e.g., April to October for previous flying season), formula factor (typically 0.8-1.2), minimum hours (typically 6-12), and excluded groups (e.g., board members, instructors)
4. Save period (created in "concept" status, not visible to members)
5. Click **Recalculate Hours** to populate member obligations based on their club flight activity during the specified date range (system analyzes all flights, counts launches and hours per member, applies formula)
6. Review generated obligations in **Obligations** tab, verify calculations are reasonable
7. Optionally adjust individual member obligations using the edit button next to their hours (for special circumstances like medical exemptions or board duties)
8. Click **Activate Period** to make obligations visible to all members (members can now view their obligations and start registering hours)
9. Optionally click **Send Update** to email all members with their current obligation and progress

### Export technician logbook for Part-66 AML application

**What:** Generate personal maintenance logbook formatted for license applications  
**When:** When applying for initial Part-66 AML, adding aircraft categories, or renewing license with documented experience  
**Permission:** "Active glider pilot" (exports own hours)

**How:**
1. Go to **My Profile** → **Maintenance Hours**
2. Ensure AML license number is filled in profile settings (appears on exported logbook)
3. Click **Export** button
4. Download Excel file with formatted logbook titled "Logbook: Practical experience Sailplane and Powered Sailplanes"
5. Logbook includes: name, AML license number, dates, hours, equipment worked on, workorder references, technical categories, sub-categories, work descriptions, and approval status
6. Use exported logbook as supporting documentation for Part-66 AML applications, category additions, or license renewals submitted to aviation authority