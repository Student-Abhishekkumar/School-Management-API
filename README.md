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
  `- npm install`

## 4️⃣ Configure .env File
Create a .env file in the root directory and add:
  `DB_HOST=localhost
  DB_PORT=3360
  DB_USER=root  # Change this to your MySQL user
  DB_PASS=your_mysql_password
  DB_NAME=schoolDB`


## 5️⃣ Start the Server
To run the application:
`npm run dev  # Uses nodemon (for development)
npm start    # Runs standard server`


## ✅ After running, you should see:
**Server running on port 3360**


## 📌 API Endpoints
## ➕ Add a New School

- URL: POST http://localhost:3360/api/addSchool
- Request Body (JSON format)
  
{
    "name": "Test School",
    "address": "123 Main Street",
    "latitude": 40.7128,
    "longitude": -74.0060
}


- Expected Response

{ "message": "School added successfully", "schoolId": 1 }


🔍 List Schools Near Location
- URL: GET http://localhost:3360/api/listSchools?latitude=40.7128&longitude=-74.0060
- Expected Response (Sorted by Distance)

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



📌 Postman Collection
To test the API more efficiently: 1️⃣ Open Postman
2️⃣ Import school-api.postman_collection.json
3️⃣ Run requests for both POST and GET APIs

📌 Deployment
To deploy your API, consider:
- ✅ Render (Free hosting for Node.js apps)
- ✅ AWS EC2 (Production-ready server hosting)
- ✅ Railway.app (Managed database hosting)


📌 Notes
✅ Uses Port 3360 (Make sure MySQL is also running on 3360)
✅ Secured with MySQL2 (Prevents SQL injection & improves security)
✅ Modular code structure (Easy to scale API)
This guide ensures your API is easy to set up, test, and deploy. 🚀
Let me know if you need further refinements! 💡

** Now you can **upload it directly** to your project. Let me know if you need any modifications! 🚀 **
