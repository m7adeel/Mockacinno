import { create } from "zustand";
import useAuthStore from "./authStore";

type ChatUser = {
    id: string;
}

type ChatMessage = {
    id: string;
    sender: ChatUser;
    content: string;
    timestamp: Date;
}

type ChatState = {
    id: string;
    participants: ChatUser[];
    messages: ChatMessage[];
}

type ChatStoreType = {
    userChats: ChatState[];

    addUserToChat: () => void;
    sendMessageToChat: () => void;
}

type ChatStateType = {
    users: ChatUser[];
    messages: ChatMessage[];
    addUser: (user: ChatUser) => void;
    removeUser: (userId: string) => void;
    sendMessage: (message: ChatMessage) => void;
    receiveMessage: (message: ChatMessage) => void;
}

const useChatStore = create<ChatStateType>((set) => ({
    users: [],
    messages: [],
    addUser: (user) => set((state) => { 
        // Check if the user id already exists

        return { users: [...state.users, user] }
    }),
    removeUser: (userId) => set((state) => ({ users: state.users.filter(user => user.id !== userId) })),
    sendMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    receiveMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    getMessages: () => {
        const user = useAuthStore.getState().user;

        if (!user) {
            return [];
        }

        const userId = user.uid;

        // Find all of the related messages for the current user
    }
}));

export default useChatStore;