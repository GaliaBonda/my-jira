import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import api from '../api/request';
import ITodo from '../common/interfaces/ITodo';
import IUser from '../common/interfaces/IUser';
import store from './store';

export const thunkGetTickets = () => async (dispatch: Dispatch) => {
    try {
        const todos: AxiosResponse<ITodo[], any> = await api.get('/todos');
        const users: AxiosResponse<IUser[], any> = await api.get('/users');
        let colors: { [key: number]: string } = {};
        (users as unknown as IUser[]).forEach((item) => {
            colors[item.id] = `hsla(${Math.random() * 360}, 100%, 50%)`;
        });
        let tickets = (todos as unknown as ITodo[]).map((item) => {
            let userName = (users as unknown as IUser[]).find((user) => {
                return user.id === item.userId;
            });
            let ticket = {
                id: item.id,
                // status: item.completed ? 'done' : 'to do', //todo at the beginning! 
                status: 'to do',
                title: item.title,
                userId: item.userId,
                userName: {
                    name: userName?.name.split(' ')[0],
                    surname: userName?.name.split(' ')[1],
                },
                color: colors[item.userId],
            };
            return ticket;
        });
        dispatch({ type: 'UPDATE_TICKETS', payload: tickets });
        console.log(todos);
        console.log(users);
    } catch (error) {
        console.error(error);
    }
}



// export const updateTicketStatus = (status: string, ticketId: number) => (dispatch: Dispatch) => {
//     dispatch({ type: 'UPDATE_TICKET_STATUS', payload: { status: status, id: ticketId } });
// }