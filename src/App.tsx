import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import ITicket from './common/interfaces/ITicket';
import Board from './components/Board/Board';
import TicketList from './components/TicketList/TicketList';
import { thunkGetTickets } from './store/actions';
import './app.scss';


interface State {
  tickets: ITicket[];
};
interface Props {
  tickets: ITicket[];
  getTickets: () => Promise<void>;
};

function App(props: Props) {
  const { tickets, getTickets } = props;
  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div className="App">
      <TicketList tickets={tickets} />
      <Board tickets={tickets} />
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  tickets: state.tickets,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  return {
    getTickets: () => dispatch(thunkGetTickets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
