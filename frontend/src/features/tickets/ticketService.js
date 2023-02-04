import axios from "axios";

const TICKET_URL = '/api/tickets'

// Create Ticket
const formTicket = async(ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(TICKET_URL, ticketData, config)

    return response.data
}

// Get all tickets
const getTickets = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(TICKET_URL, config)

    return response.data
}

// Get single ticket
const getTicket = async(ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`/api/tickets/${ticketId}`, config)

    return response.data
}

// Close ticket
const closeTicket = async(ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(`/api/tickets/${ticketId}`, { status: 'closed' }, config)

    return response.data
}

const ticketService = {
    formTicket,
    getTickets,
    getTicket,
    closeTicket
}

export default ticketService