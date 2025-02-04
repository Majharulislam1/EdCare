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

 <h2>📌 Setup Instructions</h2>

    <h3>Step 1: Clone the Repository</h3>
    <p>Clone the repository to your local machine using the following command:</p>
    <pre><code>git clone https://github.com/yourusername/EdCare.git
cd EdCare</code></pre>

    <h3>Step 2: Install Dependencies</h3>
    <p>Install all the required dependencies for the project by running:</p>
    <pre><code>npm install</code></pre>
    <p>This will install all the libraries and modules listed in the <code>package.json</code> file.</p>

    <h3>Step 3: Configure Environment Variables</h3>
    <p>Create a <code>.env</code> file in the root directory of the project and add the following environment variables:</p>
    <pre><code>VITE_API_KEY=your_api_key_here
VITE_AUTH_DOMAIN=your_auth_domain_here
VITE_PROJECT_ID=your_project_id_here
VITE_STORAGE_BUCKET=your_storage_bucket_here
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_APP_ID=your_app_id_here</code></pre>
    <p>🔹 <strong>Replace placeholders</strong> (<code>your_api_key_here</code>, etc.) with actual credentials.</p>
    <p>🔹 <strong>Ensure that your .env file is not committed to Git</strong> by adding <code>.env</code> to your <code>.gitignore</code> file:</p>
    <pre><code>.env</code></pre>

    <h3>Step 4: Start the Development Server</h3>
    <p>Run the project in development mode by executing:</p>
    <pre><code>npm run dev</code></pre>
    <p>If using <strong>Vite</strong>, the application will start at:</p>
    <p>➡️ <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a></p>

    <h3>✅ You're All Set! ✅</h3>
    <p>Now you can start using the project! 🚀</p>

    <h3>🔥 Fix Summary:</h3>
    <ul>
        <li>Removed duplicate "Step 1: Clone the Repository" section</li>
        <li>Properly closed all code blocks (<code>```</code>)</li>
        <li>Fixed missing backticks in "npm install" section</li>
    </ul>
