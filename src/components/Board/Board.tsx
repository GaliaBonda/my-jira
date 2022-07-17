import React, { useState } from 'react';
import ITicket from '../../common/interfaces/ITicket';
import Ticket from '../TIcket/Ticket';
import './board.scss';

type PropsType = {
    tickets: ITicket[];
    updateTicketStatus: (status: string, id: number) => void;
};

export default function Board(props: PropsType) {
    let todo: JSX.Element[] = [];
    let inprogress: JSX.Element[] = [];
    let done: JSX.Element[] = [];

    const [shownTicketsNum, setshownTicketsNum] = useState(10);

    if (props.tickets) props.tickets.forEach((item, index) => {
        let ticket = <li className="board__list-item" key={item.id}
            style={index <= shownTicketsNum ? { display: 'block' } : { display: 'none' }}>
            <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
                userName={item.userName} color={item.color} boardStatus={true}
                updateTicketStatus={props.updateTicketStatus} /></li>;

        if (item.status === 'todo') {
            todo.push(ticket);
        } else if (item.status === 'inprogress') {
            inprogress.push(ticket);
        } else if (item.status === 'done') {
            done.push(ticket);
        }
    });

    return (
        <div className="board">
            <ul className="board__list todo-list">
                <h2>To do</h2>
                {todo}
            </ul>
            <ul className="board__list inprogress-list">
                <h2>In progress</h2>
                {inprogress}
            </ul>
            <ul className="board__list done-list">
                <h2>Done</h2>
                {done}
            </ul>
            <button className="board__btn" onClick={() => setshownTicketsNum(props.tickets.length)} >Show all...</button>
        </div>
    );
}