import { create } from "zustand";

import { auth } from '../firebase/config'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import useUserStore from "./userStore";

export interface AuthState {
    user: any;
    setUser: (user: any) => void;
    clearUser: () => void;
    login: (email: string, password: string) => void;
    logout: () => void;
    signUpWithEmailAndPassword: (email: string, password: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),

    login: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            set({ user: userCredential.user });
        } catch (error) {
            console.error("Login error:", error);
        }
    },

    logout: async () => {
        try {
            await signOut(auth);
            set({ user: null });
        } catch (error) {
            console.error("Logout error:", error);
        }
    },

    signUpWithEmailAndPassword: async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            set({ user: userCredential.user });

            // Create user data in Firestore
            useUserStore.getState().createUserData(userCredential.user.uid);
        } catch (error) {
            console.error("Sign in error:", error);
        }
    },
}));

// Listen to auth state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        useAuthStore.getState().setUser(user);

        // Get the User Data from Firestore
        console.log("Auth state changed: User is signed in:", user);
        // Fetch user data from Firestore
        useUserStore.getState().getUserData(user.uid);
    } else {
        useAuthStore.getState().clearUser();
    }
});

export default useAuthStore;