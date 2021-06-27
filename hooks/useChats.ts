import {Chat, User} from "../types";

const chats : Chat[] = [
    {
        id: "chat1",
        name: "Chat num1",
        members: [{name: 'user1', id: '1'}, {name: 'user2', id: '2'}],
        messages: [
            {id: "1", sender: {name: 'user1', id: "1"}, content: 'Hello', timestamp: new Date()},
            {id: "2", sender: {name: 'user2', id: "2"}, content: 'Hi', timestamp: new Date()},
            {id: "3", sender: {name: 'user1', id: "1"}, content: 'How are you ?', timestamp: new Date()},
            {id: "4", sender: {name: 'user2', id: "2"}, content: 'I am fine, thanks', timestamp: new Date()},
            {id: "5", sender: {name: 'user2', id: "2"}, content: 'How about you ?', timestamp: new Date()},
            {id: "6", sender: {name: 'user1', id: "1"}, content: 'Same, more or less', timestamp: new Date()},
            {id: "7", sender: {name: 'user1', id: "1"}, content: 'What do you want us to do today ?', timestamp: new Date()},
            {id: "8", sender: {name: 'user2', id: "2"}, content: 'IDK, play games', timestamp: new Date()},
            {id: "9", sender: {name: 'user1', id: "1"}, content: 'Sounds good to me', timestamp: new Date()},
            {id: "10", sender: {name: 'user1', id: "1"}, content: 'One more thing', timestamp: new Date()},
            {id: "11", sender: {name: 'user2', id: "2"}, content: 'What is it', timestamp: new Date()},
            {id: "12", sender: {name: 'user1', id: "1"}, content: 'This is just a very, very, very long text to test the capabilities of this chat app', timestamp: new Date()},
        ],
    },
    {
        id: "chat2",
        name: "Chat num2",
        members: [{name: 'user1', id: '1'}, {name: 'user2', id: '2'}],
        messages: [
            {id: "1", sender: {name: 'user1', id: "1"}, content: 'second: Hello', timestamp: new Date()},
            {id: "2", sender: {name: 'user2', id: "2"}, content: 'second: Hi', timestamp: new Date()},
            {id: "3", sender: {name: 'user1', id: "1"}, content: 'second: How are you ?', timestamp: new Date()},
            {id: "4", sender: {name: 'user2', id: "2"}, content: 'second: I am fine, thanks', timestamp: new Date()},
            {id: "5", sender: {name: 'user2', id: "2"}, content: 'second: How about you ?', timestamp: new Date()},
            {id: "6", sender: {name: 'user1', id: "1"}, content: 'second: Same, more or less', timestamp: new Date()},
            {id: "7", sender: {name: 'user1', id: "1"}, content: 'second: What do you want us to do today ?', timestamp: new Date()},
            {id: "8", sender: {name: 'user2', id: "2"}, content: 'second: IDK, play games', timestamp: new Date()},
            {id: "9", sender: {name: 'user1', id: "1"}, content: 'second: Sounds good to me', timestamp: new Date()},
            {id: "10", sender: {name: 'user1', id: "1"}, content: 'second: One more thing', timestamp: new Date()},
            {id: "11", sender: {name: 'user2', id: "2"}, content: 'second: What is it', timestamp: new Date()},
            {id: "12", sender: {name: 'user1', id: "1"}, content: 'second: This is just a very, very, very long text to test the capabilities of this chat app', timestamp: new Date()},
        ],
    },
    {
        id: "chat3",
        name: "Chat between 2 and 3",
        members: [{name: 'user2', id: '2'}, {name: 'user3', id: '3'}],
        messages: [
            {id: "1", sender: {name: 'user1', id: "1"}, content: 'secret: Hello', timestamp: new Date()},
            {id: "2", sender: {name: 'user2', id: "2"}, content: 'secret: Hi', timestamp: new Date()},
            {id: "3", sender: {name: 'user1', id: "1"}, content: 'secret: How are you ?', timestamp: new Date()},
            {id: "4", sender: {name: 'user2', id: "2"}, content: 'secret: I am fine, thanks', timestamp: new Date()},
            {id: "5", sender: {name: 'user2', id: "2"}, content: 'secret: How about you ?', timestamp: new Date()},
            {id: "6", sender: {name: 'user1', id: "1"}, content: 'secret: Same, more or less', timestamp: new Date()},
            {id: "7", sender: {name: 'user1', id: "1"}, content: 'secret: What do you want us to do today ?', timestamp: new Date()},
            {id: "8", sender: {name: 'user2', id: "2"}, content: 'secret: IDK, play games', timestamp: new Date()},
            {id: "9", sender: {name: 'user1', id: "1"}, content: 'secret: Sounds good to me', timestamp: new Date()},
            {id: "10", sender: {name: 'user1', id: "1"}, content: 'secret: One more thing', timestamp: new Date()},
            {id: "11", sender: {name: 'user2', id: "2"}, content: 'secret: What is it', timestamp: new Date()},
            {id: "12", sender: {name: 'user1', id: "1"}, content: 'secret: This is just a very, very, very long text to test the capabilities of this chat app', timestamp: new Date()},
        ],
    },
]

export default function useChats(user: User) {
  return chats.filter(chat => chat.members.some(member => member.id === user.id));
}
