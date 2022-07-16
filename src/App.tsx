import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ITicket from './common/interfaces/ITicket';
import { getTickets } from './store/actions';
import store from './store/store';

type StateType = {
  tickets: ITicket[];
};

function App() {
  
  useEffect(() => {
    getTickets();
     
   }, []);
  console.log(store.getState());
  let tickets: ITicket[] = store.getState().tickets;
  let ticketsList;
  if (tickets && tickets.length > 0) {
    ticketsList = tickets.map((item) => {
      return (
        <li key={item.id}>{item.title}</li>
      );
    });
  }
  return (
    <div className="App">
      <ul>
          {ticketsList}
        </ul>
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  ...state.tickets,
});

// export default App;
export default connect(mapStateToProps, { getTickets })(App);
