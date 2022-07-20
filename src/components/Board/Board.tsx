import React, { useState } from 'react';
import ITicket from '../../common/interfaces/ITicket';
import Ticket from '../TIcket/Ticket';
import './board.scss';

type Props = {
    tickets: ITicket[];
};

export default function Board(props: Props) {
    const { tickets } = props;
    const [shownTicketsNum, setshownTicketsNum] = useState(10);
    const todo = tickets?.filter((item) => item.status === 'to do');
    const inprogress = tickets?.filter((item) => item.status === 'in progress');
    const done = tickets?.filter((item) => item.status === 'done');

    return (
        <div className="board">
            <h2 className="board__title">Board</h2>
            <div className="board__inner">
                <ul className="board__list todo-list">
                    <h3 className="board__subtitle">To do</h3>
                    {todo.map((item, index) => {
                        return (index <= shownTicketsNum && <li className="board__list-item" key={item.id}>
                            <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
                                userName={item.userName} color={item.color} boardStatus={true} /></li>);
                    })}
                </ul>
                <ul className="board__list inprogress-list">
                    <h3 className="board__subtitle">In progress</h3>
                    {inprogress.map((item, index) => {
                        return (index <= shownTicketsNum && <li className="board__list-item" key={item.id}>
                            <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
                                userName={item.userName} color={item.color} boardStatus={true} /></li>);
                    })}
                </ul>
                <ul className="board__list done-list">
                    <h3 className="board__subtitle">Done</h3>
                    {done.map((item, index) => {
                        return (index <= shownTicketsNum && <li className="board__list-item" key={item.id}>
                            <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
                                userName={item.userName} color={item.color} boardStatus={true} /></li>);
                    })}
                </ul>
                {(shownTicketsNum < tickets.length) && <button className="app-btn board__btn"
                    onClick={() => setshownTicketsNum(tickets.length)} >Show all...</button>}
            </div>
        </div>
    );
}