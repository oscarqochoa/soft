import { amgApi } from "@/service/axios";

class StickyNotesService {

    async getUserNotes(userId) {
        const data = await amgApi.post('/getnotes', {
            id: userId,
            campo1: "",
            order: 7,
            orderby: "desc"
        })
        let notes = data.data;
        notes.forEach(element => {
            element.isSelected = false
        });
        return notes;
    }
    async getColorNotes() {
        const data = await amgApi.post('/getcategory-notes')
        return data.data
    }
    async saveUserNote(payload) {
        const data = await amgApi.post('/save-notes', {
            id: payload.userId,
            note_id: payload.noteId,
            subject: payload.title,
            content: payload.note,
            color_id: payload.colorId
        })
        return data.data
    }
    async deleteUserNote(selectedNoteIds, userId) {
        const data = await amgApi.post('/delete-note', {
            id: selectedNoteIds,
            userid: userId
        })
        return data.data
    }
}
export default new StickyNotesService()
