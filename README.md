# 🧒 Hero Kidz – Premium Kids E-Commerce Platform (Next.js)

![Hero Kidz Banner](public/assets/logo.png)

**Hero Kidz** is a modern, single-vendor e-commerce web application built with **Next.js** for selling premium kids products.  
The platform focuses on **safe, educational, and fun toys**, baby essentials, and creative learning items with a smooth and secure shopping experience.

🌐 **Live Demo:** https://hero-kidz-lime.vercel.app

---

## 📌 About The Project

Hero Kidz was developed as a **real-world e-commerce project** using modern frontend and backend practices.  
It demonstrates how a scalable online store can be built using **Next.js App Router**, 
**nextAuth authentication**, **API proxy middleware**, and **MongoDB**.

This project is ideal for:
- Portfolio showcase
- Junior / Frontend / Full-Stack developer interviews
- Expanding into a full commercial kids e-commerce platform

---

## 🧠 Key Highlights (Recruiter Focused)

- ✅ Built with **Next.js App Router**
- ✅ Secure authentication using **NextAuth**
- ✅ **Proxy Middleware** for secure API handling
- ✅ Modular & scalable folder structure
- ✅ Fully responsive UI (mobile-first)
- ✅ Production-ready UI & UX
- ✅ Clean code & reusable components

---

## ✨ Features

- 🛍️ **Product Catalog** – Toys, educational items & baby products  
- 🛒 **Shopping Cart** – Add, update & remove items  
- 🎁 **Special Offers** – Discounts & promotions  
- 🚚 **Free Delivery** – Orders above ৳1000  
- 👤 **User Authentication** – Login & registration  
- 🔐 **Protected Routes** – Auth-based access control  
- ⭐ **Product Reviews** – Ratings & testimonials  
- 📧 **Contact Form** – Email support via Nodemailer  
- 🔔 **Notifications** – Sonner & SweetAlert2  
- 📱 **Responsive Design** – Mobile, tablet & desktop  
- 🌙 **Dark / Light Mode** – daisyUI themes  

---

## 🔐 Authentication (NextAuth)

Hero Kidz uses **NextAuth** for secure authentication.

### Implemented Features:
- Credential-based authentication
- Secure session handling
- Protected pages & API routes
- Server-side session validation

Authentication ensures:
- Only logged-in users can access cart & checkout
- Secure handling of user data

---

## 🔁 API Proxy Middleware (Next.js)

This project uses **Next.js Middleware** as a proxy layer to:

- Secure API requests
- Protect private routes
- Attach authentication context
- Prevent direct client-side API exposure

### Benefits:
- Improved security
- Cleaner API architecture
- Better scalability

---

## 🧰 Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **daisyUI**

### Backend
- **Next.js API Routes**
- **MongoDB**
- **NextAuth**
- **Middleware (Proxy Layer)**

### Utilities
- **react-hook-form**
- **AOS / react-slick**
- **Sonner**
- **SweetAlert2**
- **Nodemailer**

### Deployment
- **Vercel**

---

## 🎨 Design System (Colors)

```css
/* Brand */
--color-primary: oklch(65% 0.23 35);
--color-secondary: oklch(58% 0.18 30);
--color-accent: oklch(72% 0.20 55);

/* Base */
--color-base-100: oklch(100% 0 0);
--color-base-200: oklch(97% 0.01 95);
--color-base-300: oklch(92% 0.015 95);

/* Neutral */
--color-neutral: oklch(35% 0.01 260);
--color-neutral-content: oklch(96% 0 0);

/* Feedback */
--color-success: oklch(70% 0.17 145);
--color-error: oklch(62% 0.24 28);
