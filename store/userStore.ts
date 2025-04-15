import { create } from "zustand";

import { db } from "~/firebase/config";
import { collection, getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { User } from "~/types";

type UserStoreType = {
    userData: User | null;
    setUserData: (user: User) => void;
    clearUserData: () => void;
    getUserData: (firebaseId: string) => void;
    createUserData: (firebaseID: string) => void;
    updateUserData: (updatedData: Partial<User>) => void;
}

const useUserStore = create<UserStoreType>((set, get) => ({
    userData: null,
    setUserData: (user) => set({ userData: user }),
    clearUserData: () => set({ userData: null }),

    getUserData: async (firebaseId) => {
        const userDoc = doc(db, "users", firebaseId);

        if (!userDoc) {
            console.error("User document not found");
            return;
        }
        
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
            const userData = userSnapshot.data() as User;
            set({ userData });
        } else {
            console.error("No such document!");
        }
    },

    createUserData: (firebaseID) => {
        const newUser: User = {
            firebaseId: firebaseID,
            name: "",
            city: "",
            bio: "",
            wantsToDo: [],
            skills: [],
            availableSchedules: [],
            hasPremium: false,
            currentRole: "Audio Engineer",
            targetRole: "Audio Engineer"
        };

        const userRef = collection(db, "users");
        setDoc(doc(userRef, firebaseID), newUser);
    },

    updateUserData: (updatedData) => set((state) => {
        if (updatedData.firebaseId && state.userData?.firebaseId !== updatedData.firebaseId) {
            throw new Error("Updating the firebaseId is not allowed.");
        }

        const userRef = collection(db, "users");
        const userDoc = doc(userRef, state.userData?.firebaseId || "");
        
        try {
            updateDoc(userDoc, updatedData);
        } catch (error) {
            console.error("Error updating user data:", error);
        }

        return {
            userData: { ...state.userData, ...updatedData } as User
        };
    })
}));

export default useUserStore;