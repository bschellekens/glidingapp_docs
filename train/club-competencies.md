# Club competencies

## Overview

Club Competencies provides administrative tools for creating, importing, and managing competency tracking programs across the club. Programs are structured hierarchies of categories containing individual competencies that instructors mark as achieved on member profiles. The system supports two program types: DTO training programs, visible only to enrolled students and instructors, and club competency programs visible to all members for tracking licenses, launch methods, aircraft ratings, and club-specific qualifications.

Programs can be built from scratch, imported from national gliding associations (BGA, KNVvL, LVZC), or adopted from other clubs using standardized export files. Existing programs can be upgraded with new curriculum versions while preserving student achievement history. New clubs are initialized with three default programs (License, Ground, Flying) providing immediate competency tracking without configuration.

## Core Concepts

### 1. Training Programs vs Club Competencies

The **is Training** flag determines program visibility and purpose. DTO training programs appear only on profiles of students enrolled by chief instructors, providing structured formal training with regulatory compliance. Club competency programs (non-training) appear on all member profiles for ongoing qualification tracking without enrollment requirements. These track privileges and qualifications like winch operator certification, passenger flying privileges, or aircraft type endorsements.

| Parameter | Description | Example |
|-----------|-------------|---------|
| DTO training programs | Program visible only to enrolled students and instructors | SPL Pre-solo training, TMG rating instruction |
| Non-training club programs | Program visible to all members | License tracking, aircraft type ratings, ground crew qualifications |


### 2. Default Club Competencies

New clubs receive three pre-configured non-DTO programs: **License**, **Ground**, and **Flying**. These programs require customization to match club operations but provide immediate tracking structure.

**License** program tracks licences and launch methods including winch, aerotow, self-launch, bungee, car, TMG, and FCL ratings. Categories include "Launch Methods" containing competencies for each method, and "Instruction" covering instructor qualifications (Basic Instructor, Instructor in Training, Flight Examiner).

**Ground** program manages ground crew certifications including Launch Director, Winch Operator, and Signaler roles. These competencies often link to permission groups enabling roster duty assignments.

**Flying** program tracks aircraft-specific ratings and special privileges. Categories include "Local" (specific aircraft types) and "Cross-country" (distance flying qualifications). Passenger flying competency links to passenger recency tracking.

Program names appear as profile tabs, so keep names short: "Flying" rather than "Aircraft Privileges". Customize names according to club preferences.

### 3. Competency Configuration

Individual competencies support extensive configuration controlling how achievements are recorded and what actions they trigger. Configuration is documented in detail in [DTO progression](/pages/train/dto-progression-cards.html) but key admin-relevant parameters include:

| Parameter | Description | Example |
|-----------|-------------|---------|
| scoring | boolean, rank (1-5), or BD rank (briefing/demo/rank) | boolean for (licence) privileges, rank for skill assessment |
| remark | Requires instructor comment when marking achieved | true for training flights needing debrief notes |
| Recency key | Activates EASA (or UK SFCL) recency tracking | winch, aerotow, passenger (see recency keys) |
| Group | Assigns permission group upon achievement | Active glider pilot, Solo, winch operator |

### 4. Group Assignment

After initial club setup, configure **flying** groups including student, solo, license, and basic instructor. Competency cards provide the primary mechanism for managing group assignments. This applies to other groups including tow pilot, launch marshal, and winch operator.

Recommended practice: Manage all flying member assignments through club competency programs. For example, assign license group to winch and aerotow competencies. Default setup includes these assignments. Review group assignments when modifying competency configurations.

Group assignments automatically add members to permission groups when competencies are achieved and remove them when expired or revoked. This synchronises system access with current qualifications.


## Admin actions

### Import Program

**What:** Load pre-configured training program from national gliding association or other club  
**When:** Implementing standardized DTO training (BGA, KNVvL, LVZC programs), adopting another club's curriculum  
**Permission:** "Allowed to update DTO admin"

Programs are shared between clubs using standardized .txt format files. National gliding associations maintain DTO-compliant training programs in shared drive accessible to all clubs. 

**How:**
1. Navigate to **Admin** → **Competencies & DTO Programs**
2. Click **Import** button
3. Select desired program file downloaded from shared drive or association
4. Review imported program details:
   - **Name** and **Curriculum Version** display at top
   - Category and competency structure shows in checklist
   - Each item shows description and configuration
5. Click **Import** to create program
6. Program appears in competencies list ready for activation on student profiles (DTO training) or immediately visible (club competencies)

### Upgrade Program with New Curriculum Version

**What:** Update existing training program to newer version from association while preserving student progress  
**When:** Association releases updated curriculum, regulatory requirements change, program improvements available  
**Permission:** "Allowed to update DTO admin"

Curriculum upgrades compare existing program structure with new version file, identifying additions, modifications, and deletions. System marks changes for review before applying.

**How:**
1. Navigate to **Admin** → **Competencies & DTO Programs**
2. Open the program that requires updating, and click the **Update** button
3. Select and open the new training program, downloaded from the shared drive or from your association
4. System performs comparison and displays results:
   - **Added items** marked green: New categories or competencies
   - **Updated items** marked yellow: Modified descriptions, settings, or configurations
   - **Deleted items** marked red with warning: Removed from new version.

Deleted competencies permanently remove achievement records from all student profiles. Verify deletions are intentional before saving upgrade.

### Export Program for Sharing

**What:** Generate standardized .txt file for sharing program with other clubs or associations  
**When:** Contributing program to shared drive, transferring to another club installation, creating backup  
**Permission:** "Allowed to update DTO admin"

Exported files contain complete program structure including all categories, competencies, configurations, and curriculum version. Files are formatted for community sharing and maintain compatibility across GlidingApp installations.

**How:**
1. Navigate to **Admin** → **Competencies & DTO Programs**
2. Click **Export** and save file to location

Export files serve as program backups and enable collaboration between clubs developing similar training curricula.