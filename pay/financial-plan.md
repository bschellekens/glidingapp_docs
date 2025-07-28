# Financial plan

## Overview

The GlidingApp **Financial plan** establishes member billing, payment collection, and accounting integration for clubs transitioning to automated financial management. The implementation process involves configuring products (flight charges and periodic fees), enabling payment methods (bank transfers or online payments), and establishing accounting workflows. GlidingApp's test mode enables risk-free configuration validation before exposing the financial system to members.

## Core Concepts

### 1. Balance-Based Accounting

**Balance-based accounting** maintains a running ledger for each member, aggregating all financial transactions into a single balance figure. Flight charges, periodic membership fees, and manual adjustments create negative entries that reduce the balance. Payments (bank transfers or online transactions) create positive entries that increase the balance. The system calculates current balance by summing all ledger entries for the account holder. This single-ledger approach eliminates reconciliation between multiple accounting records—GlidingApp's ledger balance is the authoritative financial state. Members view their balance, transaction history, and payment options via the account page. Administrators view all member balances in the accounts overview, with search, filter, and export capabilities.

### 2. Test Mode

**Test mode** isolates financial system configuration from member visibility during setup and validation. When test mode is active, all administrative functions operate normally: products calculate nightly, charges appear in ledger entries, administrators view balances and reports, and test product features work as expected. However, member-facing displays hide financial information: account pages show no balance, transaction history remains inaccessible, payment buttons disappear, and balance reminder emails do not send. This enables administrators to configure products, import starting balances, validate calculations against historical data, and refine pricing rules through multiple iterations without confusing members or generating false debt notifications. Disable test mode in **Financial** → **Settings** → toggle **Test Mode** off to make the financial system visible to members.

### 3. Payment Methods

**Payment methods** determine how members fund their accounts. GlidingApp supports two collection approaches with different administrative overhead and member convenience trade-offs. **Bank transfers** require members to transfer funds directly to the club's bank account using reference numbers. Administrators import bank statements monthly or quarterly via **Ledgers** → **Import Bank Statement**, supporting MT940 (European standard), OFX (international standard), and CSV formats. The import allows administrators to reconcile transactions to member accounts using name matching suggestions. **Online payments** integrate with Mollie payment provider, enabling members to pay directly from their account page via credit card, iDeal, SEPA direct debit, or Pay by Bank. Online payment is more convenient for members (as it works in app) and is more convenient for administrators as it does not require reconciliation and works in real-time. However, Mollie does apply transaction costs. UK clubs benefit from Mollie's Pay by Bank option, which offers lower transaction fees than card payments.

### 4. Financial Reports

**Financial reports** export financial data for external accounting system integration. Reports generate as Excel files from **Financial** → **Settings** → select period → **Download Report**. Each report contains three worksheets: **User Balances** (all members with transactions in the period, showing final balance), **Flights** (flight-by-flight details with total charge per flight), and **Summary** (aggregated statistics). The recommended accounting approach treats GlidingApp as the creditor/debitor system, and have export reports as revenue categories (winch launches, aerotows, glider hire) and open receivables (sum of negative member balances). The aggregated data can be imported in your club's bookkeeping software. 

### 5. Balance Reminders

**Balance reminders** notify members when their account requires payment attention. The system evaluates all member balances during nightly task execution (Monday mornings) and sends emails to members whose balance falls below the configured threshold (send_balance_min_amount). Reminder emails include current balance formatted in club currency, direct link to account page for payment, and customizable header message (send_balance_email_header) explaining payment instructions and club contact information. The reminder system respects test mode—emails do not send while payment_testmode = true, preventing confusion during financial system setup. Administrators enable automatic reminders in **Financial** → **Settings** → toggle **Send Balance Reminders** → set **Minimum Balance for Reminder** (e.g., -50 for members owing more than 50). Members receive at most one reminder per week regardless of balance changes.

