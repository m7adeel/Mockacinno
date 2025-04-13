import { create } from "zustand";

import { auth } from '../firebase/config'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

export interface AuthState {
    user: any;
    setUser: (user: any) => void;
    clearUser: () => void;
    login: (email: String, password: String) => void;
    logout: () => void;
    signUpWithEmailAndPassword: (email: String, password: String) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),

    login: async (email: String, password: String) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email as string, password as string);
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

    signUpWithEmailAndPassword: async (email: String, password: String) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email as string, password as string);
            set({ user: userCredential.user });
        } catch (error) {
            console.error("Sign in error:", error);
        }
    },
}));

// Listen to auth state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        useAuthStore.getState().setUser(user);
    } else {
        useAuthStore.getState().clearUser();
    }
});

export default useAuthStore;