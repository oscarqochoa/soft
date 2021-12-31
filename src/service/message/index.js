import { amgApi } from '@/service/axios'

class MessageService {
    async getUserContacts(body) {
        try {
            const data = await amgApi.post('/listusermessage', body)
            return data
        } catch (error) {
            throw error
        }
    }
    async getAllQuickNotes(body) {
        try {
            const data = await amgApi.post('/allquicksselect', body)
            return data
        } catch (error) {
            throw error
        }
    }
    async getUsersToMessage() {
        try {
            const data = await amgApi.get('/allusersmessages')
            return data
        } catch (error) {
            throw error
        }
    }
    async saveMessageReply(body, endpoint = '/savemessage-reply') {
        try {
            const data = await amgApi.post(endpoint, body)
            return data
        } catch (error) {
            throw error
        }
    }
    async searchMessageSubject(body) {
        try {
            const data = await amgApi.post('/searchaccountnamemessage', {q: body})
            return data
        } catch (error) {
            throw error
        }
    }
    async getUserMessages(body) {
        try {
            const data = await amgApi.post('/messagesuser', body)
            let chatMessages = {
                chat: {
                    chat: [],
                    id: null,
                    unseenMsgs: 0,
                    userId: null
                },
                contact: {
                    about: "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
                    avatar: "/img/1.9cba4a79.png",
                    chat: {
                        id: 2,
                        lastMessage: {
                            message: "I will purchase it for sure. 👍",
                            senderId: 1,
                            time: "2021-12-21T22:53:42.883Z"
                        },
                        unseenMsgs: 1
                    },
                    fullName: "Felecia Rower",
                    id: 51,
                    role: "Frontend Developer",
                    status: "offline",
                    type: 1
                }
            }
            let messages = data.data.data;
            messages.forEach(message => {
                let chat = {
                    message: message.message,
                    senderId: message.sending_id,
                    time: message.created_at,
                    senderName: message.sending_name,
                    subject: message.subject,
                    contentresp: message.content_resp,
                    subjectresp: message.subject_resp,
                    files: JSON.parse(message.file_name),
                    route: JSON.parse(message.route),
                    own: message.own,
                    seen: message.seen,
                    image: message.image,
                    message_id: message.id,
                }
                chatMessages.chat.id = message.id
                chatMessages.chat.userId = message.receive_id
                chatMessages.contact.id = body.id_user
                chatMessages.contact.avatar = body.image
                chatMessages.contact.fullName = body.fullName
                chatMessages.contact.type = body.type
                chatMessages.chat.chat.push(chat)
            })
            return {
                data: chatMessages,
                total: data.data.total
            }
        } catch (error) {
            throw error
        }
    }
    async searchMessagesInChat(body) {
        try {
            const data = await amgApi.post('/idmessagesuser', body)
            return data
        } catch (error) {
            throw error
        }
    }
}

export default new MessageService()
