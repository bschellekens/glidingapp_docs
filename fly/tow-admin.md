# Tow Administration

## Overview

The **Tow Administration** system provides a dedicated interface for tow pilots to review and verify their aerotow flights. After completing a tow pilot stint, pilots access this view to confirm glider registration, tow height, landing times, and paying members for all their tows.

The system integrates with **automatic launch registration** (OGN fills tow heights automatically), **flight logging** (connects glider and tug flights), and **payment processing** (separate billing for tow and glider flights). Tow pilots see only their own tug flights, filtered by PIC assignment.

## Core Concepts

### 1. Two-Flight Model

GlidingApp represents each aerotow as **two separate flight records** connected via the `uuid` field. The glider flight has start_method="tow", and the tug flight has start_method="tmg-a" (TMG) or "sep-a" (SEP).

This model enables separate tracking for tow pilot hours, independent billing for tow and glider flights, and individual OGN detection for each aircraft. Tow pilots can view connected glider flights regardless of privacy settings. The connection is symmetrical: both flights reference each other via `uuid`.

:::info Migrating to a Two-Flight Aerotow Model
This architectural difference is important when implementing the system for clubs migrating from single-record systems. When importing the initial data, you will most probably not import the tug flight (only the glider "tow" flight). For the calculation of the recency of the glider pilots this is not a problem. However, when implementing the financial module, you will probably want to setup a price plan for the tug flight (tmg-a/sep-a) and the glider flight (tow). 
:::


### 2. Connecting Aerotow Flights

By default, the flight is automatically connected. However, in some cases the connection might not be made. For example, if the FLARM of the tow plane is not functioning. In this case, you can **manually** connect the flights. The launch marshal or tow pilot selects flights to connect from the list within 4 minutes of the departure time. 

If you **add a new tow**, this will create a new tug flight and connect to the existing glider flight in one action.

When flights connect, the system synchronizes start times if within 2 minutes delta, corrects start methods (glider="tow", tug="tmg-a" or "sep-a"), and applies category inheritance if enabled. The connection is symmetrical: both flights reference each other.

### 3. Tow Pilot View

The **Tow Pilot View** is a dedicated interface showing only flights where the pilot is PIC of a tug aircraft. This filtered view displays tow flights for the selected day, allowing pilots to verify glider registration, pilot names, tow heights, landing times, and paying members.

Tow pilots access this view after their flying stint to review and edit their tow data. The interface shows both the tug flight details and connected glider flight information in a single row.

### 4. Tow Height

**Tow height** is the maximum altitude reached during the tow, recorded in meters or feet depending on club settings. This value determines billing for the aerotow.

OGN automatically fills tow height from the tug aircraft's FLARM altitude data (maximum height reached during the tow). For billing purposes, the system rounds to the nearest standard height bracket. Manual adjustment is available if OGN height is incorrect or FLARM is unavailable.

### 5. Tow Categories

**Tow categories** are club-configurable dropdown values for classifying tow flights. Categories can represent billing rates, flight purpose, or height brackets.

Categories are configured in club settings (sleep_cat field). If inherit_sleep_cat is enabled, the glider flight automatically inherits the tug flight's category. The default category for new tow flights is set via default_sleep_cat.

## Admin actions

### Review and edit tow flights

**What:** Verify all tow flight data after completing tow pilot duty  
**When:** After finishing tow pilot stint for the day  
**Permission:** Performs towing administration (default for group tow pilots)

**How:**
1. Go to **Flights** → **Tow Administration** → **Select day**
2. System shows only the tow flights
3. For each flight, verify and adjust:
   - Glider registration and pilot name present
   - Tow height correct (OGN fills automatically if FLARM working)
   - Landing time recorded
   - Paying member assigned (defaults to glider pilot)
4. System saves changes immediately and syncs changes to the launch point