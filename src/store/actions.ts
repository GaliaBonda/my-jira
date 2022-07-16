import { AxiosResponse } from 'axios';
import api from '../api/request'
import ITicket from '../common/interfaces/ITicket';
import IUser from '../common/interfaces/IUser';
import store from './store';

export async function getTickets() {
    try {
        let tickets: AxiosResponse<ITicket[], any> = await api.get('/todos');
        let users: AxiosResponse<IUser[], any> = await api.get('/users');
        store.dispatch({type: 'UPDATE_TICKETS', payload: tickets});
        console.log(tickets);
        console.log(users);
    } catch (error) {
        console.error(error);
    }


}