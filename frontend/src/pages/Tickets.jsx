import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'

function Tickets() {
    const {tickets, isLoading} = useSelector((state) => state.ticket)

    const dispatch = useDispatch()


    //Getting the tickets
    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])
    
    if(isLoading) {
        return <Spinner />
    }

  return (
    <>
    <BackButton url='/'/>
     <div className="tickets">
        <div className="ticket-headings">
            <div>Date</div>
            <div>Product</div>
            <div>Status</div>
            <div></div>
        </div>
        {tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket}/>
        ))}
     </div>
    </>
  )
}

export default Tickets