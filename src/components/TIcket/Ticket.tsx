import React, { MouseEvent } from 'react';
import ITicket from '../../common/interfaces/ITicket';
import UserAvatar from '../UserAvatar/UserAvatar';
import './ticket.scss';

type PropsType = ITicket & {
    boardStatus: boolean,
    updateTicketStatus: (status: string) => void,
};

export default function Ticket(props: PropsType) {

    function handleClick(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        console.log('jj');

        props.updateTicketStatus(props.status);
    }

    return (
        <div className='ticket' onClick={handleClick}>
            <UserAvatar color={props.color} userName={props.userName.name} userSurname={props.userName.surname} />
            <h3 className="ticket__title">{props.title}</h3>
            {!props.boardStatus && <p className="ticket__status">{props.status}</p>}
        </div>
    );
}