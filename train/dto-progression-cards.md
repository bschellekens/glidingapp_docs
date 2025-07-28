# DTO progression cards

## Overview

DTO Progression Cards provide structured tracking of student training within Declared Training Organisation (DTO) programs. The system manages competency-based training curricula that comply with EASA/UK SFCL requirements, with programs typically imported from national gliding associations (BGA, KNVvL, LVZC). Training progress is tracked on student profiles through organized categories containing specific competencies that instructors mark as achieved using configurable scoring methods.

The progression card integrates with recency tracking (activating EASA requirements when specific competencies are achieved), and permission management (granting system access when students reach milestones like solo flight). Progress documentation is automatically generated and stored for regulatory compliance, with 3-year retention enforced for completed or discontinued programs.

## Core Concepts

### 1. Training Programs

**Training programs** organize competencies into structured curricula that appear as tabs on student profiles when activated by chief instructors. Each program contains multiple categories with specific competencies students must achieve to progress. Programs can be designated as DTO training (visible only to instructors with "Sees DTO instructor pages" permission and enrolled students) or general competency tracking visible to all members.

Authorization to assign competencies can be restricted to specific instructor groups beyond the default instructor access. Programs include version tracking for curriculum updates and can be linked to EASA training program types for compliance reporting.

### 2. Categories and Competencies

Categories divide training programs into logical phases such as "Pre-solo", "Solo consolidation", or "Cross-country preparation". Each category contains ordered competencies displayed in collapsible sections on the progression card. Categories show completion status (e.g., "8/12 achieved") and automatically expand when containing unachieved competencies.

Individual competencies support detailed descriptions, validity periods, and history tracking showing all instructor actions. Competencies can trigger group assignments, activate recency tracking, or require instructor remarks when marked as achieved.

### 3. Scoring Methods

Three scoring methods determine how instructors record competency achievement. Each competency has one method configured:

| Parameter    | Description                              | Example                                                                                      |
| ------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| Pass/No Pass | Simple achieved checkbox                 | Medical certificate verification, theory exam completion                                     |
| Rank         | 1-5 star rating scale                    | Flight maneuvers requiring skill assessment (typically 3+ stars indicates pass)              |
| BD-Rank      | Briefing → Demo → 1-5 rating progression | Complex procedures where instructor first briefs, then demonstrates, before student practice |

The scoring method appears in the competency modal when instructors click competency names. Pass/No Pass scoring shows a single checkbox, rank scoring displays star selection, and BD Rank scoring shows stage selection (Briefing/Demo) followed by star rating once the student progresses beyond demonstration.

The option to add a remark can also be turned on per competency.

### 4. EASA Recency Integration

Competencies can activate EASA recency tracking by linking to specific recency keys. When instructors mark the linked competency as achieved, the system automatically begins tracking the associated recency requirement on the student's profile. This connects training progression to ongoing license validity monitoring.

Available recency keys: winch, aerotow, selfstart, bungee, car, tmg-aerotow, tmg, passenger, bis, fis, fes, fcl. For example, marking "winch launches" as achieved activates winch recency tracking, requiring the pilot to maintain recency through regular winch launches going forward (in this case 5 launches per 24 months).

### 5. Competency Validity

Competencies can expire based on configured validity periods, triggering warnings before expiration. Two validity types are supported:

| Parameter                  | Description                                             | Example                                             |
| -------------------------- | ------------------------------------------------------- | --------------------------------------------------- |
| Validity (days)            | Days competency remains valid after achievement         | 365 days for annual medical certificate             |
| Validity DoY (day of year) | Specific calendar date when competency expires annually | Day 335 (December 1st) for winter currency renewals |
| Days warning               | Days before expiration to display warning indicator     | 120 days (4 months advance notice)                  |

The system calculates expiration dates automatically when instructors mark competencies as achieved. Expired competencies show warning indicators on the progression card and may trigger automatic removal from permission groups if group assignment was configured.

### 6. Group Assignment

Specific competencies automatically add students to permission groups when achieved, granting system access or privileges. For example, achieving "Solo" adds students to the "Solo" group, enabling self-registration for flying days and independent reservation management. Achieving winch operator competency adds members to roster duty assignments.

Group assignments are removed automatically if the competency expires or is revoked by an instructor. This ensures system permissions remain synchronised with current training status and competency validity.

### 7.  Manage Student Training Files

Student training files provide centralized document storage for training-related documentation on student profiles. Files support configurable visibility and protection settings to manage access between instructors, students, and regulatory compliance requirements. The system tracks file metadata including upload date, uploader identity, and retention status.

Files are managed through the student's **Files** tab and can include licenses, medical certificates, theory exam results, course completion forms, logbook copies, or other training records. Medical certificate files automatically integrate with the recency summary section for license validity monitoring.

| Parameter          | Description                                                                                     | Example                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Visible to student | Controls whether student can view file in own profile                                           | Medical certificates (visible), internal assessment notes (hidden) |
| Read-only          | Prevents deletion by student or non-admin users, enforcing retention for compliance documents   | Completed program exports (read-only), temporary uploads (editable) |

Instructors can upload files, set visibility toggles, and mark documents as read-only for regulatory retention. Files show name, upload date, uploader name, and visibility status in the file list. Non-read-only files can be deleted by the original uploader, while read-only files remain protected for compliance purposes.


## Actions

### Activate/Complete Training Program for Student

**What:** Start or finish structured training curriculum on student profile  
**When:** Student begins formal training, completes program, or discontinues training  
**Permission:** "Allowed to update DTO admin", usually only Chief Instructors have this permission

**How:**
1. Navigate to student profile → **DTO Training** tab
2. Click training program name (e.g., "SPL Winch Pre-solo")
3. Click **Start**, **Complete**, or **Discontinue** button in modal
4. Set date (defaults to today) and confirm
5. Training program now visible on student profile with all categories and competencies
6. Started/completed date and instructor name recorded automatically
7. For completed or discontinued programs, Excel file generated automatically and stored in student **Files** tab with read-only flag for retention compliance

### Mark Competency as Achieved

**What:** Record student achievement of specific competency with scoring and date  
**When:** Student demonstrates proficiency in skill or completes requirement during training flight  
**Permission:** All instructors with the permission "Sees DTO instructor pages". It is possible to further narrow the group that is allowed to grant privileges to a certain programme.

**How:**
1. Open student profile → select training program tab → select Competency
2. Select scoring based on scoring method
3. Set (optional) achievement date and (if configured) remark
4. If competency has validity period, expiration date calculated automatically

### Export Progress Card to Excel

**What:** Generate Excel file with all competencies, achievement dates, and scores  
**When:** Providing progress documentation to student, external club, or regulatory authority  
**Permission:** "Allowed to update DTO admin"

**How:**
1. Open student profile → **DTO Training** tab
2. Click export icon next to training program name
3. Excel file downloads with all underlying information

