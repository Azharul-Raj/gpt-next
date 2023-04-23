export type ChatIdProps={
    chatId:string
}

export type MessageProps={
    text:string;
    createdAt:admin.firestore.Timestamp;
    user:{
        _id:string;
        name:string;
        avatar:string;
    }
}