# Rolling Recency

## Overview

Rolling Recency automates EASA and UK SFCL compliance monitoring for gliding clubs by continuously tracking license holder and instructor currency requirements through integrated flight administration. The system eliminates manual recency calculations by automatically monitoring hours, launches, training flights, launch methods, and instructor activities from daily operations, while providing proactive warnings before privileges expire. 

The module integrates with launch registration (tracking hours, launches, and start methods), competency management (activating recency when students achieve privileges), and chief instructor workflows (adding refresher course dates and reviewing compliance). Nightly calculations update all pilot statuses, with chief instructors receiving weekly summary emails of members with expiring recency items.

:::warning Legal Compliance Responsibility
As clubs bear legal liability for instructor and passenger-carrying pilot recency, an automated compliance system reduces administrative burden and safety risk by ensuring all members maintain valid privileges through real-time tracking and alerting.
:::

## Core Concepts

### 1. EASA and UK SFCL Rolling Recency Requirements

**Rolling recency** defines the minimum recent flying experience required to exercise SPL license and instructor privileges. These are lifetime qualifications that remain valid subject to demonstrating recent activity within specified lookback periods—typically 24 months for license holders and 36 months for instructors.

The system tracks three categories of rolling recency:

**SPL License Holders** must maintain training flights, flight hours, launches, and launch method currency within 24 months, plus valid medical certification. Passenger carrying requires additional recent launches within 90 days.

**TMG privileged** pilots must also maintain training flights, flight hours, launches, in addition with recent experience for passenger carrying.

**Full Instructors (FI(S))** must demonstrate instruction activity over 36 months through a combination of instruction hours/launches, refresher seminar attendance, and periodic supervision flights with an FI Coach.

**Basic Instructors (BI(S))** under UK SFCL must maintain PIC activity over 24 months and periodically demonstrate instruction ability to an FI or BI Coach.

**Clubs are legally responsible** for ensuring instructors and passenger-carrying pilots maintain valid recency. The system automatically tracks all requirements per SFCL.155, SFCL.160, SFCL.360, and UK SFCL.365, displaying specific counts and expiration dates on pilot profiles.

### 2. Automatic Tracking Through Flight Administration

**Automatic calculation** derives recency from launch registration data without manual intervention. The system monitors flights, start methods and training flights. Recalculations occur nightly for all active pilots.

**Training flights** require explicit checkbox during flight registration to count toward SPL 2-per-24-months requirement. This distinguishes between instruction flights (where student flies on P2 and instructor as PIC is marked as FIS) and training flights (where license holder flies on P2 with instructor as PIC for a training flight).

**Exam/Proficiency checks** marked during flight registration exempt the P2 pilot from recency requirements for 24 months. This applies when students pass their skills test or when license holders complete a formal proficiency check after losing recency.

:::warning Training flights and Proficiency Check Requirements
Please note that training flights and proficiency checks are formal regulatory procedures under SFCL.160 and SFCL.410. Training flights include elements from the SPL skill test and require a briefing and debriefing. Proficiency checks can only be done by qualified examiners, and require a briefing, debrief and signed written report. Do not mark flights unless the regulatory requirements are met.
:::

**Instructor refresher dates** and **flights under supervision** are manually entered by chief instructors through the instructor profile interface, as these occur outside normal club operations.

### 4. Data Quality and External Flights
Recency calculations are only as accurate as the flight data in the system. Encourage all members (especially instructors) to maintain complete records by:

- **Manually entering external flights:** Have pilots log flights from other clubs, competitions, or private operations through their logbook interface
- **Connecting as guest pilot:** Members flying at multiple clubs can link their accounts, automatically syncing all flights across organizations
- **Benefits of guest pilot setup:** Chief instructors at both home and guest clubs can monitor the pilot's complete recency status, ensuring comprehensive compliance oversight regardless of where flying occurs


### 5. Competency-Based Recency Activation

**Recency tracking activates** when students achieve linked competencies in DTO progression cards. This connects initial training to ongoing license validity monitoring.

When an instructor marks a competency as achieved (e.g., "Winch launch training completed"), the system automatically:
1. Grants the student the associated privilege (ability to use winch launches)
2. Begins tracking the recency requirement (5 winch launches per 24 months)
3. Displays the recency item on the student's profile going forward

**Critical setup requirement:** During initial club configuration, ensure all DTO progression card competencies correctly link to their recency keys. If a student achieves "solo winch launch" competency but the competency is not linked to the "winch" recency key, the system will not track winch recency for that pilot, creating compliance gaps.

Refer to [DTO Progression Cards](/pages/train/dto-progression-cards) for details on configuring competency-to-recency mappings.


## Admin Actions

### Check Historic Recency Calculation

**What:** Calculate what a pilot's recency status was on a specific past date  
**When:** Investigating whether a pilot was current for a past flight. Auditing compliance for regulatory reviews. Verifying recency during incident investigations. Confirming when specific recency items expired.  
**Permission:** "Allowed to update DTO admin" (typically in instruction coordination group)

**How:**
1. Go to **Members** → select pilot → **Recency** tab
2. Click clock icon button next to recency display to open **Historic Recency Calculation** modal
3. Select target date using date picker to process all flights prior to this date.

**Important:** Only flights recorded in the system are included. If pilot flew externally and has not uploaded those flights, the historic calculation will be incomplete. 

### Add Instructor Refresher Course and Supervision Flight Dates

**What:** Record dates when FI(S) instructors completed required refresher seminars and flights under supervision  
**When:** After an FI(S) instructor completes their refresher seminar (required every 36 months per SFCL.360). After an instructor completes a flight under FI supervision (required every 9 years per SFCL.360). When instructor recency shows these items as expired or approaching expiration. For BI(S) instructors, after completing Ability to Instruct (AtI) or Assessment of Competency (AoC) demonstration.  
**Permission:** "Allowed to update DTO admin"

**How:**
1. Go to **Members** → select instructor (must have FI(S) or BI(S) in their groups)
2. Click **Recency** tab
3. Scroll to instructor recency section showing **FI(S) Refresher** or **BI(S) Details** form
4. Enter relevant dates

**Special cases:**
- If refresher completed in two parts over two days, enter both dates—system uses the most recent date for validity calculation
- Exam dates establish baseline when instructor achieved full privileges—typically and the start of the recency window (36 months) calculation. This exempts the instructor from recency for 36 months.

### Mark Training Flights, Exams and Proficiency Checks

**What:** Designate specific flights as training flights, exams or proficiency checks.  
**When:** Recording flights where a licence holder flew with an instructor or examiner. This is distinct from instruction flights (where student controls aircraft) which auto-flag when instructors fly PIC on DTO registered two-seaters.  
**Permission:** Any pilot, when altered notifications are sent to the chief instructors.

**How:**
1. During flight registration on day administration page
2. Enter flight with license holder as PIC and instructor as second occupant (or vice versa)
3. In **Flight Type** section, check **Training Flight** checkbox
4. Complete remaining flight details (start time, landing time, start method, remarks)

**Important distinctions:**
- **Instruction flight (FIS):** Student flying (P2), instructor teaching (P1) → Automatically flagged on DTO registered two-seater (do NOT also mark as training flight)
- **Exam:** Successfully passed skills test with student (P2) flying with examiner → Check "Exam" box (exempts second pilot from recency for 24 months)
- **Training flight:** Licence holder flies with instructor for currency/checkout → Check "Training Flight" box
- **Proficiency check:** Formal evaluation of licence holder (P2) flying with examiner → Check "Proficiency check" box (exempts second pilot from recency for 24 months)