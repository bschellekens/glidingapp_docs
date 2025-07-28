# Prepaid Vouchers

## Overview

**Prepaid Vouchers** enable clubs to sell flight packages directly to visitors and members through an online checkout system. Clubs create prepaid products (trial flights, training packages, gift experiences) that generate public purchase URLs. After payment, the system creates a voucher with a positive ledger balance that can be attached to flights in flight administration. This system eliminates the need for visitor accounts while maintaining organized billing records.

## Core Concepts

### 1. Prepaid Product to Voucher Flow

**Prepaid products** define purchasable voucher packages with base price, description, and optional configuration. When customers complete checkout at the generated URL, the system processes payment and creates a **voucher** with positive ledger balance matching the purchase amount. Flight administrators attach vouchers to flights via the voucher selector in flight administration. To deduct costs from the voucher balance, administrators must create separate **post-paid products** that filter for voucher accounts. Without corresponding post-paid products, vouchers maintain their full balance until expiration. This two-product architecture separates revenue collection (prepaid) from cost allocation (post-paid).

:::warning Critical Configuration Requirement
Prepaid products credit voucher balances but do not automatically deduct flight costs. Administrators must create matching post-paid products (e.g., glider hire, launch fees) filtered to voucher accounts. See [Flight Charges](/pages/pay/flight-charges.md) for post-paid product configuration.
:::

### 2. Voucher Lifecycle

**Voucher lifecycle** manages activation, usage, and deactivation states. Vouchers activate immediately upon successful payment with status "paid" and positive balance. Deactivated vouchers cannot be assigned to new flights but remain visible in admin interface for historical record-keeping. 

### 3. Scheduled and Flexible Vouchers

**Scheduled vouchers** require timeslot reservation during checkout, while **flexible vouchers** allow redemption on any flying day. Scheduled vouchers display available dates and times based on calendar availability configuration, existing bookings, and day type filters. The system generates bookable slots by dividing availability windows into intervals matching product duration (e.g., 60-minute slots from 09:00-17:00). The max per slot parameter limits concurrent reservations per timeslot. Flexible vouchers skip the reservation step, customers complete purchase and coordinate timing separately. Gift cards can be purchased as flexible vouchers, allowing recipients to book their preferred date after receiving the gift.

### 4. Voucher Addons

**Voucher addons** are optional purchasable extras that increase the total price and voucher balance. During checkout, customers select addon quantities using number inputs. Common addon use cases include extra flight time increments, additional passenger seats, photo packages, equipment rental, or extended validity periods.

### 5. Gift Card Functionality

**Gift cards** enable voucher purchases as gifts for recipients. During checkout, purchasers select gift card option and provide recipient name, email address and a personal note. After payment, the system generates two separate deliverables. The purchaser receives order confirmation while the recipient receives the gift presentation (with attached gift card as a PDF). Gift recipients access unique URL to view voucher details and book their timeslot if the product requires scheduling.

### 6. Custom Questions and Extra Fields

**Custom questions** (extras) collect additional information during checkout beyond standard contact fields. Common use cases include passenger weight for weight-and-balance calculations, experience level for instruction planning, medical conditions for safety awareness, or special requirements for accommodation. Collected data is displayed in admin voucher details via ExtrasDescription component. Flight administrators review this information before the scheduled flight.

### 7. Voucher-to-Flight Connection

**Voucher-to-flight connection** links purchased vouchers to actual flight records. Flight administrators open the voucher selector in flight administration (available during flight editing), search active vouchers by name or timeslot, and select the matching voucher. This connection triggers post-paid product calculations during nightly billing. Connected vouchers display in flight details showing name, phone, reserved timeslot, remaining balance, and any custom question responses. Administrators can disconnect vouchers to reassign or correct errors.
