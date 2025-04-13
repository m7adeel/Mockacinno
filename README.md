# Mockacinno

Mockacinno is a mobile-first application designed to connect professionals for referral exchanges and mock interviews. The app aims to help users enhance their skills, expand their professional network, and achieve their career goals.

## Features

- **User Authentication**: Sign up and log in securely.
- **Onboarding**: Select your current and target professions, and specify your intent (e.g., referral exchange, mock interview).
- **Profile Management**: Edit your profile, including bio, skills, and availability.
- **Filters**: Search for professionals based on roles, preferences, and location.
- **Notifications**: Stay updated with real-time notifications.
- **Chat**: Communicate with other professionals.
- **Settings**: Manage account visibility, notifications, and more.

## Tech Stack

- **Frontend**: React Native with Expo
- **State Management**: Zustand
- **Styling**: Tailwind CSS (via NativeWind)
- **Backend**: Firebase (Authentication and Firestore)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mockacinno.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mockacinno
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Firebase configuration keys (refer to `.env` for example keys).

5. Start the development server:
   ```bash
   npm start
   ```

## Folder Structure

- `app/`: Contains all the screens and navigation logic.
- `components/`: Reusable UI components.
- `store/`: State management using Zustand.
- `firebase/`: Firebase configuration.
- `content/`: Static content like professions list.
- `assets/`: Images and other static assets.
