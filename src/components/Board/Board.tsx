import React from 'react';
import ITicket from '../../common/interfaces/ITicket';
import Ticket from '../TIcket/Ticket';
import './board.scss';

type PropsType = {
    tickets: ITicket[] | undefined;
};

export default function Board(props: PropsType) {
    let todo: JSX.Element[] = [];
    let inprogress: JSX.Element[] = [];
    let done: JSX.Element[] = [];
    if (props.tickets) props.tickets.forEach((item) => {
        let ticket = <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
            userName={item.userName} color={item.color} boardStatus={true} key={item.id} />;
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
        </div>
    );
}