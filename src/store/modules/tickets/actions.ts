import {Dispatch} from "redux";
import api from "../../../api/request";

export const getTicket = () => async (dispatch: Dispatch) => {
    try {
        const data = await api.get("/todos");
        await dispatch({type: 'GET_TICKETS', payload: data});
    } catch (e) {
        console.log(e)
        dispatch({type: 'ERROR_ACTION_TYPE'});
    }
}