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

## 3️⃣ Install Dependencies
Run this command inside the project folder :
```javascript
npm install
```

## 4️⃣ Configure .env File
Create a .env file in the root directory and add:

```javascript
DB_HOST=localhost
DB_PORT=3306
DB_USER=root  # Change this to your MySQL user
DB_PASS=your_mysql_password
DB_NAME=schoolDB
```


## 5️⃣ Start the Server
To run the application:
```javascript
npm run dev  # Uses nodemon (for development)
npm start    # Runs standard server
```


## ✅ After running, you should see:
**Server running on port 3306**


## 📌 API Endpoints
## ➕ Add a New School

- URL: POST http://127.0.0.1:3306/api/addSchool
- Request Body (JSON format)

```javascript  
{
    "name": "Test School",
    "address": "123 Main Street",
    "latitude": 40.7128,
    "longitude": -74.0060
}
```

- Expected Response
```javascript
{ "message": "School added successfully", "schoolId": 1 }
```

## 🔍 List Schools Near Location
- URL: GET http://127.0.0.1:3306/api/listSchools?latitude=40.7128&longitude=-74.0060
- Expected Response (Sorted by Distance)
```javascript
[
    {
        "id": 1,
        "name": "Test School",
        "address": "123 Main Street",
        "latitude": 40.7128,
        "longitude": -74.0060,
        "distance": 0.5
    }
]
```
