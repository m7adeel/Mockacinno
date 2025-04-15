import { PROFESSIONS } from "~/content";

type User = {
    readonly firebaseId: string;
    name: string;
    city: string;
    bio: string;
    wantsToDo: string[];
    skills: string[];
    availableSchedules: string[];
    hasPremium: boolean;
    currentRole: typeof PROFESSIONS[number];
    targetRole: typeof PROFESSIONS[number];
}

type Chat = {
    readonly id: string;
    participants: User[];
    messages: Message[];
}

type Message = {
    readonly senderId: string;
    readonly timestamp: Date;
    readonly content: string;
    isSent: boolean;
    isReceived: boolean;
    isRead: boolean;
}

export type { User, Chat, Message };
