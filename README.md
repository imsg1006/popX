🚀 PopX – User Authentication & Account Settings

A responsive React-based authentication flow that allows users to sign up, log in, and manage their account settings. The project focuses on clean UI, form validation, client-side state handling, and basic security best practices.

📌 Features

User Signup & Login flow

Account Settings page with profile details

Form validation using Yup

Client-side session handling using Local Storage

Fully responsive UI (mobile-first)

Protected routes for authenticated users

🛠 Tech Stack

React

React Router

Tailwind CSS

Yup (Form Validation)

Lucide Icons

✅ Form Validation (Yup)

The project uses Yup to ensure robust and user-friendly form validation.

Validation includes:

Required field checks

Email format validation

Password length & constraints

Preventing invalid submissions

Why Yup?

Declarative and easy-to-maintain schemas

Improves UX by showing real-time error messages

Reduces invalid data being processed

💾 Local Storage Usage

Local Storage is used for client-side authentication handling.

Use cases:

Store registered user details after signup

Persist login session across page refresh

Prevent direct access to protected routes (e.g., Account Settings)

Redirect unauthenticated users to Login page

⚠️ Note: Local Storage is used only for demo purposes and not for storing sensitive production data.

🔐 Security Considerations

While this is a frontend-focused project, the following best practices are followed:

Protected routes using authentication checks

Login access blocked if user is not registered

No direct access to account pages without authentication

Minimal data stored in Local Storage

Clear separation of UI and auth logic

🔒 Production Recommendation:

Use HttpOnly cookies

Implement JWT or session-based authentication

Store sensitive data on the backend only

📱 Responsiveness

Mobile-first design

Optimized for small screen devices

Flexible layouts using Tailwind CSS utilities

Matches provided UI mockups closely

The UI adapts seamlessly across:

Mobile

Tablet

Desktop screens

🔁 Routing & Navigation

/signup – Create a new account

/login – Login for existing users

/account – Protected account settings page

Unauthorized users are automatically redirected to the login page.

📸 UI Highlights

Clean onboarding screen

Profile avatar with camera icon overlay

Dotted section separators

Consistent typography and spacing

🚧 Limitations

No backend integration

Local Storage is not encrypted

Profile data is static

🚀 Future Improvements

Backend authentication (Node / Firebase)

Password hashing

Profile image upload

Token-based auth (JWT)

Dark mode support

🧑‍💻 Author

Developed by Shlok Gupta
Frontend Developer | React | Tailwind | UI-focused Development
