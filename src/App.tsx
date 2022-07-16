import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updatePartiallyEmittedExpression } from 'typescript';
import ITicket from './common/interfaces/ITicket';
import { getTickets } from './store/actions';
import store from './store/store';

type StateType = {
  tickets: ITicket[];
};
type PropsType = {
  tickets?: ITicket[];
};

function App(props: PropsType) {
  
  useEffect(() => {
    getTickets();
     
   }, []);
  // console.log(store.getState());
  let tickets: ITicket[] | undefined = props.tickets;
  console.log(props.tickets);
  
  let ticketsList;
  if (tickets && tickets.length > 0) {
    ticketsList = tickets.map((item) => {
      return (
        <li key={item.id}>{item.title} {item.status} {item.userName.name} {item.userName.surname}</li>
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
  tickets: state.tickets,
});

// export default App;
export default connect(mapStateToProps, { getTickets })(App);
