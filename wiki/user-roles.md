# User roles

## User

Permissions:

- See their user
- Edit their user

Data:

- Name
- Username
- Password

## Doctor

Permissions:

- Create their prescriptions
- See their prescriptions
- Edit their prescriptions
- Delete their prescriptions

Data:

- Professional license
- College
- Address
- Specialties:
  - Name
  - License
  - Address

## Chief Doctor

Permissions:

- Inherit from Doctor
- See prescriptions
- Edit prescriptions
- Delete prescriptions

Data:

- Inherit from Doctor

## Pharmacy

Permissions:

- See drugs
- Deliver drugs under prescription
- Manage drug returns

Data:

## Sanitary Responsible

Permissions:

- Inherit from Pharmacy
- Register drug inputs:
  - Buy
  - Donation
  - Other
- Register drug outputs:
  - Expiration
  - Other
- Create drugs
- Edit drugs
- Deleate drugs

Data:

## Reception

Permissions:

- Register patients

Data:

## Admin:

Permissions:

- Create users
- See users
- Edit users
- Delete users
- Manage permissions

Data:


