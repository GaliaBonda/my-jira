import React from 'react';
import ITicket from '../../common/interfaces/ITicket';
import UserAvatar from '../UserAvatar/UserAvatar';
import './ticket.scss';

type PropsType = ITicket & { boardStatus: boolean };

export default function Ticket(props: PropsType) {

    return (
        <div className='ticket'>
            <UserAvatar color={props.color} userName={props.userName.name} userSurname={props.userName.surname} />
            <h3 className="ticket__title">{props.title}</h3>
            {!props.boardStatus && <p className="ticket__status">{props.status}</p>}
        </div>
    );
}