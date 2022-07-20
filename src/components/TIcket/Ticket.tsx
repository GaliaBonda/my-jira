import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ITicket from '../../common/interfaces/ITicket';

import UserAvatar from '../UserAvatar/UserAvatar';
import './ticket.scss';

interface Props extends ITicket {
    boardStatus: boolean;
    updateTicketStatus: (status: string, id: number) => void;
};

function Ticket(props: Props) {
    const { title, status, id, color, userName, boardStatus, updateTicketStatus } = props;
    function handleClick() {
        updateTicketStatus(status, id)
    }

    return (
        <div className='ticket' onClick={handleClick} >
            <UserAvatar color={color} userName={userName.name} userSurname={userName.surname} />
            <h4 className="ticket__title">{title}</h4>
            {!boardStatus && <p className="ticket__status">{status}</p>}
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateTicketStatus: (status: string, ticketId: number) =>
            dispatch({ type: 'UPDATE_TICKET_STATUS', payload: { status, id: ticketId } })
    };
};

export default connect(null, mapDispatchToProps)(Ticket);