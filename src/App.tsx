import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ITicket from './common/interfaces/ITicket';
import Board from './components/Board/Board';
import TicketList from './components/TicketList/TicketList';
import { getTickets, updateTicketStatus } from './store/actions';
import './app.scss';

type StateType = {
  tickets: ITicket[];
};
type PropsType = {
  tickets: ITicket[];
  getTickets: () => Promise<void>;
  updateTicketStatus: (status: string, id: number) => void
};

function App(props: PropsType) {

  useEffect(() => {
    props.getTickets();

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

// export default App;
export default connect(mapStateToProps, { getTickets, updateTicketStatus })(App);
