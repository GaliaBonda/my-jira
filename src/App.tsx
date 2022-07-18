import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ITicket from './common/interfaces/ITicket';
import Board from './components/Board/Board';
import TicketList from './components/TicketList/TicketList';
import { thunkGetTickets } from './store/actions';
import './app.scss';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';

type StateType = {
  tickets: ITicket[];
};
type PropsType = {
  tickets: ITicket[];
  getTickets: () => Promise<void>;
  updateTicketStatus: (status: string, id: number) => void
};

function App(props: PropsType) {

  const useAppDispatch: () => ThunkDispatch<{}, {}, any> = useDispatch;
  const dispatch = useAppDispatch();

  useEffect(() => {
    props.getTickets();

    // dispatch(getTickets());

  }, []);

  return (
    <div className="App">
      <TicketList tickets={props.tickets} updateTicketStatus={props.updateTicketStatus} />

      <Board tickets={props.tickets} updateTicketStatus={props.updateTicketStatus} />

    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  tickets: state.tickets,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any> & Dispatch) => {
  return {
    getTickets: () => dispatch(thunkGetTickets()),
    updateTicketStatus: (status: string, ticketId: number) => dispatch({ type: 'UPDATE_TICKET_STATUS', payload: { status: status, id: ticketId } })
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
