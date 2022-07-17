import React, { useState } from 'react';
import ITicket from '../../common/interfaces/ITicket';
import Ticket from '../TIcket/Ticket';
import './ticketlist.scss'

type PropsType = {
    tickets: ITicket[];
    updateTicketStatus: (status: string, id: number) => void;
};

export default function TicketList(props: PropsType) {
    let tickets: ITicket[] = props.tickets;
    const [shownTicketsNum, setshownTicketsNum] = useState(10);
    console.log(props.tickets);


    let ticketsList;

    if (tickets && tickets.length > 0) {
        ticketsList = tickets.map((item, index) => {

            return (
                <li key={item.id}
                    style={index <= shownTicketsNum ? { display: 'block' } : { display: 'none' }}>
                    <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
                        userName={item.userName} color={item.color} boardStatus={false}
                        updateTicketStatus={props.updateTicketStatus} />
                </li>
            );
        });
    }
    return (
        <div className="ticket-list">
            <h2 className='ticket-list__title'>Ticket list</h2>
            <ul className="ticket-list__list">
                {ticketsList}
            </ul>
            <button className="app-btn ticket-list__btn" onClick={() => setshownTicketsNum(props.tickets.length)} >Show all...</button>
        </div>
    );
}