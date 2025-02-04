# EdCare 🎓  
**A Collaborative Study Platform**  

EdCare is a modern platform that connects **students**, **tutors**, and **administrators** to streamline study session scheduling, resource sharing, and user management. Built with scalability and user experience in mind, EdCare is designed to meet the dynamic needs of today’s education system.

---

## 📸 Project Screenshot  
![EdCare Screenshot](https://i.ibb.co/1pbNL4s/Capture.jpg)  


 
---

## 🛠️ Main Technologies  

### **Frontend**
- **Languages**: HTML, CSS, JavaScript  
- **Frameworks/Libraries**:  
  - React.js  
  - Tailwind CSS  
  - React Router DOM  
  - Firebase Authentication  

### **Backend**  
- Node.js  
- Express.js  
- MongoDB  

### **Payment Integration**  
- Stripe API  

---

## 🌟 Core Features  
1. **Responsive Design**: Ensures accessibility across devices.  
2. **Role-Based Authentication & Authorization**: Students, Tutors, and Admins have distinct roles.  
3. **Dynamic Home Page**: Displays relevant information based on user role.  
4. **Study Session Management**: Schedule, track, and update study sessions.  
5. **Dashboards**:  
   - Student Dashboard  
   - Tutor Dashboard  
   - Admin Dashboard  
6. **Payment Integration**: Secure payments using **Stripe**.  
7. **Review & Rating System**: Share feedback for tutors and sessions.  
8. **Search & Filter Functionalities**: Find sessions, resources, or tutors efficiently.  

---

## 📦 Dependencies  

### **Core Dependencies**  
- `@stripe/react-stripe-js`  
- `@stripe/stripe-js`  
- `@tanstack/react-query`  
- `axios`  
- `firebase`  
- `react`  
- `react-dom`  
- `react-router-dom`  
- `react-toastify`  
- `sweetalert2`  

### **Additional Tools**  
- `moment`  
- `react-datepicker`  
- `react-icons`  
- `react-tooltip`  

---

## 🚀 How to Run the Project Locally  

### Step 1: Clone the Repository  
Clone the repository to your local machine using the following command:  

```bash
git clone https://github.com/yourusername/EdCare.git
cd EdCare
```

### Step 2: Install Dependencies
Install all required dependencies for the project by running:

```bash
npm install
```

### Step 3: Configure Environment Variables
Create a .env file in the root directory and add the following environment variables:

```bash
VITE_API_KEY=your_api_key_here
VITE_AUTH_DOMAIN=your_auth_domain_here
VITE_PROJECT_ID=your_project_id_here
VITE_STORAGE_BUCKET=your_storage_bucket_here
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_APP_ID=your_app_id_here
```
### Step 4: Start the Development Server
Run the project in development mode by executing:

```bash
npm start
```

### Step 5: Access the Application
Open your web browser and navigate to the following address:

```bash
http://localhost:3000
```


