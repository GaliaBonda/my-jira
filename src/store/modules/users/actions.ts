import {Dispatch} from "redux";
import api from "../../../api/request";

export const getUser = () => async (dispatch: Dispatch) => {
    try {
        const data = await api.get("/users");
        dispatch({type: 'UPDATE_USER', payload: data});
    } catch (e) {
        console.log(e)
        dispatch({type: 'ERROR_ACTION_TYPE'});
    }
}