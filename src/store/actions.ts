import { AxiosResponse } from 'axios';
import api from '../api/request'
import ITodo from '../common/interfaces/ITodo';
import IUser from '../common/interfaces/IUser';
import store from './store';

export async function getTickets() {
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
                status: item.completed ? 'done' : 'todo', //todo at the beginning! 
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
        store.dispatch({ type: 'UPDATE_TICKETS', payload: tickets });
        console.log(todos);
        console.log(users);
    } catch (error) {
        console.error(error);
    }


}