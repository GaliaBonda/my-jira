import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ITicket from './common/interfaces/ITicket';
import Board from './components/Board/Board';
import TicketList from './components/TicketList/TicketList';
import { getTickets, updateTicketStatus } from './store/actions';

type StateType = {
  tickets: ITicket[] | [];
};
type PropsType = {
  tickets: ITicket[] | [];
  getTickets: () => Promise<void>;
  // updateTicketStatus: (status: string) => void;
};

function App(props: PropsType) {

  useEffect(() => {
    props.getTickets();

  }, []);

  return (
    <div className="App">
      <TicketList tickets={props.tickets} />
      <Board tickets={props.tickets} />
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  tickets: state.tickets,
});

// export default App;
export default connect(mapStateToProps, { getTickets })(App);
