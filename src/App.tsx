import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ITicket from './common/interfaces/ITicket';
import Board from './components/Board/Board';
import TicketList from './components/TicketList/TicketList';
import { getTickets, updateTicketStatus } from './store/actions';
import './app.scss';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';

type StateType = {
  tickets: ITicket[];
};
type PropsType = {
  tickets: ITicket[];
  getTickets: () => ThunkAction<Promise<void>, any, any, any>;
  updateTicketStatus: (status: string, id: number) => void
};

function App(props: PropsType) {

  const useAppDispatch: () => ThunkDispatch<{}, {}, any> = useDispatch;
  const dispatch = useAppDispatch();

  useEffect(() => {
    // props.getTickets();

    dispatch(getTickets());

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

const mapDispatchToProps = () => {
  return { getTickets, updateTicketStatus };
};



// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
