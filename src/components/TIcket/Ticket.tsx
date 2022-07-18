import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import ITicket from '../../common/interfaces/ITicket';

import UserAvatar from '../UserAvatar/UserAvatar';
import './ticket.scss';

type PropsType = ITicket & {
    boardStatus: boolean;
    updateTicketStatus: (status: string, id: number) => void;
};

export default function Ticket(props: PropsType) {
    const useAppDispatch: () => ThunkDispatch<{}, {}, any> = useDispatch;
    const dispatch = useAppDispatch();
    function handleClick() {

        props.updateTicketStatus(props.status, props.id)
        // dispatch(props.updateTicketStatus(props.status, props.id));
    }

    return (
        <div className='ticket' onClick={handleClick} >
            <UserAvatar color={props.color} userName={props.userName.name} userSurname={props.userName.surname} />
            <h4 className="ticket__title">{props.title}</h4>
            {!props.boardStatus && <p className="ticket__status">{props.status}</p>}
        </div>
    );
}