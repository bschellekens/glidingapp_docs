# Groups and Permissions

## Overview

The groups and permissions system controls who can access and modify data in the application. Users are assigned to **groups**, and groups have **permissions** that grant access to specific features. A user inherits all permissions from every group they belong to, accumulating capabilities across multiple memberships.

The system uses three categories of groups that serve different purposes: **Core Groups** define membership type and pricing plan inclusion (Flying Member, Guest Pilot, Non-Flying Member), **Flying Groups** track qualification level (Student through Instructor), and **Default/Club Groups** handle operational roles (Launch Director, Board, Tow Pilot, etc.). This structure separates membership status from flying qualifications from operational responsibilities, allowing flexible configuration as pilots progress and take on different roles at the club.

## Core Concepts

### 1. Permission Inheritance

Users gain permissions through group membership. A user can belong to multiple groups simultaneously, and the system grants access if **any** of their groups have the required permission. For example, a License Holder who is also on the Board has both flying permissions and administrative permissions. Removing a user from a group immediately revokes any permissions unique to that group.

### 2. Core Groups

Core groups are mutually exclusive - every active user belongs to exactly one. These groups determine pricing plan inclusion and basic flying permissions.

| Group | Pricing Plan | Typical Permissions | Typical Members |
|-------|--------------|-------------|-----------------|
| Flying Member | Included | Active glider pilot, Can register themselves for days | Regular club members |
| Guest Pilot | Exempt | Active glider pilot, Can register themselves for days | Visiting pilots from other clubs |
| Non-Flying Member | Exempt | None | Social members, supporters |

Only **Flying Members** count toward the active user subscription tier. Guest pilots and non-flying members do not affect pricing regardless of their activity.

**Guest pilots** have limited rights. If a guest pilot is connected via a club also using GlidingApp, their recency is synchronised and visible. For guest pilots without this connection, their recency is not calculated on the assumption that the flights logged at your club are insufficient to provide a complete enough picture of their recency. Because guest pilots 'belong' to other clubs, they will not count towards your subscription tier. 

### 3. Flying Groups

Flying groups track qualification level and are mutually exclusive - a member belongs to one flying group at a time. Progression typically happens through competency assignments.

| Group | Typical Permissions | Typical Path |
|-------|----------------|--------------|
| Student | None | New students starting training |
| Solo Pilot | None | After first solo flight |
| License Holder | May perform daily inspections | After passing license test |
| Basic Instructor | Sees DTO instructor pages, May grant privileges to members | UK SFCL only |
| Full Instructor | Sees DTO instructor pages, May grant privileges to members, Sees all user data | EASA or full UK rating |

The Basic Instructor group exists specifically for UK SFCL operations where there is a limited instructor rating. Most clubs using EASA regulations only use Full Instructor. The permissions can be modified to suit your club's needs.

### 4. Default Groups

Default groups are created during initial club setup and provide operational role permissions. Users can belong to multiple default groups. Group names can be changed, but their existence provides a good basis for the GlidingApp to function.

| Group | Typical Permissions | Use Case |
|-------|-------------|----------|
| Launch Tower | Can perform launch administration during the day, Can register others users | Shared device at launch point |
| Clubhouse | Can register others users | Shared device in clubhouse |
| Tow Pilot | Performs towing administration | Tug pilots logging tows |
| Roster Maker | Can update rosters | Duty roster coordinator |
| Board| Sees Staff admin pages, May send emails to members, Can update documents, Sees all user data, Edit financial | Board members, treasurer, secretary |
| Admin | Full system access | System administrators |
| Member Admin | Can update member administration, Sees all user data | Membership administrator |
| Instruction coordination | Allowed to update DTO admin, Sees DTO instructor pages | Head of training |

Special accounts like **Launch Tower** and **Clubhouse** are typically assigned to shared devices rather than individual users. These accounts enable launch point and clubhouse operations without requiring personal logins.

### 5. Assignment Methods

Users are assigned to groups through two mechanisms:

**Direct assignment:** Administrators assign groups manually in **Admin** → **Users** (individual user) or through bulk assignment tools. Use this for operational roles like Board or Roster Maker.

**Competency-based assignment:** Groups are assigned automatically when competencies configured with group assignment are marked as achieved. Use this for flying groups and qualifications that require formal validation. Competency-based assignment is the recommended approach because it ties group membership to demonstrated capabilities and maintains an audit trail.
