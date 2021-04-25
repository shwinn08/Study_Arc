import { leaveChat } from 'react-chat-engine';

const authObject = {'Project-ID': '038e76d8-5aa7-4216-8c79-ca8e4fb2f139', 'User-Name': 'adam', 'User-Secret': 'pass1234'}
const chatID = 1
const callback = (data) => console.log(data)

leaveChat(authObject, chatID, callback) 