import axios from 'axios'

const NOTES_URL = '/api/tickets/'

// Get notes for a ticket
const getNotes = async(ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(NOTES_URL + ticketId + '/notes', config)

    return response.data
}

// Create ticket note
const createNote = async(noteText, ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(NOTES_URL + ticketId + '/notes',
     {
        text: noteText
     },
     config
    )

    return response.data
}

const noteService = {
    getNotes,
    createNote
}

export default noteService