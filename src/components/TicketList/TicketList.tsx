import React, { useState } from 'react';
import ITicket from '../../common/interfaces/ITicket';
import Ticket from '../TIcket/Ticket';
import './ticketlist.scss'

interface Props {
    tickets: ITicket[];
};

export default function TicketList(props: Props) {
    const { tickets } = props;
    const [shownTicketsNum, setshownTicketsNum] = useState(5);

    return (
        <div className="ticket-list">
            <h2 className='ticket-list__title'>Ticket list</h2>
            <ul className="ticket-list__list">
                {tickets?.length > 0 && tickets.map((item, index) => (
                    <li key={item.id}
                        style={index <= shownTicketsNum ? { display: 'block' } : { display: 'none' }}>
                        <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
                            userName={item.userName} color={item.color} boardStatus={false} />
                    </li>
                ))}
            </ul>
            {(shownTicketsNum < props.tickets.length) && <button className="app-btn ticket-list__btn"
                onClick={() => setshownTicketsNum(props.tickets.length)} >Show all...</button>}
        </div>
    );
}