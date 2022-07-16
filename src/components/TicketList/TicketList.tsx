import React from 'react';
import ITicket from '../../common/interfaces/ITicket';
import Ticket from '../TIcket/Ticket';
import './ticketlist.scss'

type PropsType = {
    tickets: ITicket[] | undefined;
};

export default function TicketList(props: PropsType) {
    let tickets: ITicket[] | undefined = props.tickets;
    console.log(props.tickets);


    let ticketsList;

    if (tickets && tickets.length > 0) {
        ticketsList = tickets.map((item) => {

            return (
                <li key={item.id}>
                    <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
                        userName={item.userName} color={item.color} boardStatus={false} />
                </li>
            );
        });
    }
    return (
        <div className="ticket-list">
            <ul className="ticket-list__list">
                {ticketsList}
            </ul>
        </div>
    );
}