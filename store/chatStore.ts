import { create } from "zustand";

type ChatUser = {
    id: string;
    name: string;
    avatarUrl: string;
    status: string; // e.g., "online", "offline", "busy"
    lastSeen: Date; // last seen time
    isTyping: boolean; // typing status
    unreadMessages: number; // count of unread messages
}

type ChatMessage = {
    id: string;
    sender: ChatUser;
    content: string;
    timestamp: Date;
}

type ChatState = {
    users: ChatUser[];
    messages: ChatMessage[];
    addUser: (user: ChatUser) => void;
    removeUser: (userId: string) => void;
    sendMessage: (message: ChatMessage) => void;
    receiveMessage: (message: ChatMessage) => void;
}

const useChatStore = create<ChatState>((set) => ({
    users: [],
    messages: [],
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
    removeUser: (userId) => set((state) => ({ users: state.users.filter(user => user.id !== userId) })),
    sendMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    receiveMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));