# Foodwala

Foodwala is a MERN stack Restaurant Management website platform using MongoDB, Express.js, React.js, and Node.js. The platform allows users to manage food items and provides user authentication through Firebase.

---

## Project Details

### **Responsive Design**
The website is fully responsive across all devices.

### **Navbar**
- Contains the project logo, name, menu links, and a conditional login/register button or profile image on the right side.
- If the user is logged in, their profile image and name will be displayed.
- A dropdown menu appears on clicking the profile icon, showing links, user update options, and a logout option.

### **Banner Section**
- A beautiful banner with a "View All" button that redirects users to the "All Foods" page.

### **Top Menu Section**
- Displays up to 6 food cards fetched via API.
- Each food card includes an image, some information, and a "Details" button that redirects to the details page.

### **Details Page (Public)**
- Displays detailed information about the food item.
- Contains two buttons:
  - **Purchase Button:** Redirects the user to the purchase page.
  - **Go Back Button.**

### **Purchase Page (Private)**
- Includes a form with read-only fields (except for ordered quantity).
- Features include:
  1. If the available food quantity is 0, an error message is shown.
  2. If the ordered quantity exceeds the available quantity, an error message is displayed.
  3. Users cannot purchase food they have added themselves.
  4. Upon successful purchase, a success message is displayed, and the user is redirected to the "My Orders" page.

### **All Foods Page (Public)**
- Displays all food items added by all users.

### **Gallery Page (Public)**
- Displays static food images.
- Clicking on an image opens it in a larger format with additional functionality, implemented using React Lightbox and React Photo Gallery.

### **Add Food Page (Private)**
- Features input fields for adding a food item to the database.
- Clicking the "Add Food" button submits the data.

### **My Foods Page (Private)**
- Displays food items added by the logged-in user.
- Users can update or delete their food items.
- Access to food items added by other users is restricted.

### **My Orders Page (Private)**
- Displays ordered items of the logged-in user.
- Users can delete an ordered item by clicking the delete icon.
- A success message is displayed after deletion.

### **Update User Info Page (Private)**
- Allows users to update their name and profile image.

### **Authentication (Login, Registration, and Logout)**
- Firebase authentication is implemented for user login, registration, and logout.
- Google login is also supported and authenticated via Firebase.

### **Error Page**
- Displays an error page for invalid routes.

### **Spinner**
- A spinner is displayed while data is loading.

### **Private Routes**
- Private routes are accessible only to logged-in users.

### **Footer**
- A footer is displayed on all public and private routes.

---

## Features of this Project
1. Fully responsive design.
2. User authentication with Firebase.
3. Dynamic food management.
4. Private and public routes.
5. Gallery with advanced image functionality.
6. User-friendly interface.
7. Error handling and loading indicators.

---

## Tools, Frameworks, and Libraries Used
1. React.js
2. Tailwind CSS
3. Daisy UI
4. Firebase
5. Express.js
6. MongoDB Atlas
7. SweetAlert
8. Vite

---

## Project Live Link
[Foodwala](https://foodwala-63337.web.app/)

---

Thanks for visiting my project.

Best Regards,  
**Md. Rabiul Islam**


