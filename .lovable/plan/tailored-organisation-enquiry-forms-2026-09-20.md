# Tailored organisation enquiry forms

## Goal
Give Schools, Colleges, and Corporates a dedicated enquiry experience instead of sending them to the family join form.

## Changes
- Add one shared organisation enquiry page that automatically shows the correct form for the selected audience.
- Tailor the fields:
  - **Schools:** school name, contact person, role, phone, email, city, student count, and preferred pilot.
  - **Colleges:** college name, contact person, role/department, phone, email, city, student count, and preferred pilot group.
  - **Companies:** company name, contact person, HR/ESG role, phone, work email, city, employee count, and preferred rollout.
- Change each audience page’s final button to open its matching form.
- Keep the existing family “Join free” form and navigation unchanged.
- Add clear validation, accessible labels, completion confirmation, and unique search metadata.

## Technical details
- Use one reusable form with audience-specific field definitions and validated URL selection.
- Validate required fields, email, phone, and length limits before acceptance.
- Keep submissions as the current on-page confirmation flow; no data storage or email delivery is added.
- Verify all three form variants on desktop and mobile and confirm a clean build.
