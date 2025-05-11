## Project Overview

Learnify is a modern full-stack MERN (MongoDB, Express, React, Node.js) application that connects language learners with qualified tutors worldwide. It simplifies the process of finding, reviewing, and booking tutors in a user-friendly interface, featuring real-time authentication, secure bookings, and dynamic content management.

## Features

* **User Authentication**: Email/password and Google sign-in with JWT-based protection on private routes.
* **Tutor Listings**: Browse and search tutors by language category or keyword.
* **Tutor Details & Booking**: View detailed tutor profiles and securely book sessions.
* **My Tutorials**: Tutors can add, update, and delete their own tutorial listings.
* **My Booked Tutors**: Learners can view and manage their booked tutor sessions.
* **Review System**: Increment review counts to provide social proof for tutors.
* **Dark/Light Theme**: Toggle between dark and light modes for optimal user experience.
* **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.
* **Error & Loading Pages**: Custom error and loading states to handle edge cases.

## Tech Stack

* **Frontend**: React, React Router, Tailwind CSS, DaisyUI
* **Backend**: Node.js, Express.js, MongoDB (Atlas), JWT Authentication
* **Authentication**: Firebase Authentication (Email/Password, Google)
* **Styling & UI**: Tailwind CSS, DaisyUI, Framer Motion (optional animations)
* **Deployment**: Vercel (frontend), Heroku or DigitalOcean (backend)

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/muntasir-mahmud-abdullah/learnify-client.git
   git clone https://github.com/muntasir-mahmud-abdullah/learnify-server.git
   ```
2. **Server Setup**

   ```bash
   cd learnify-server
   npm install
   cp .env.example .env  # configure DB_USER, DB_PASS, SECRET_KEY, PORT
   npm run dev
   ```
3. **Client Setup**

   ```bash
   cd learnify-client
   npm install
   cp .env.example .env  # configure REACT_APP_FIREBASE_API_KEY, etc.
   npm start
   ```
4. **Access the Application**

   * Frontend: `http://localhost:3000`
   * Backend API: `http://localhost:5000`

## Live Link

* **Frontend**: [https://learnify-5acd7.web.app](https://learnify-5acd7.web.app/)
<!-- * **Backend**: [https://learnify-server.herokuapp.com](https://learnify-server.herokuapp.com) -->

## Default Credentials

> No default credentials are required. New users can register via the registration form, or sign in with a Google account.

## Screenshots

*Coverage of home page, tutor listing, booking flow, and mobile responsiveness.*

&#x20;&#x20;
