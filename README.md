# School Management API : 

## Description
This API allows users to add schools and retrieve a list sorted by proximity.

## Setup
1. Install dependencies: `npm install`
2. Configure `.env` file with your MySQL credentials.
3. Start server: `npm start`

## Endpoints
- **POST** `/api/addSchool` → Add a new school
- **GET** `/api/listSchools?latitude=XX&longitude=YY` → Retrieve schools sorted by proximity