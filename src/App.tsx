import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ITicket from './common/interfaces/ITicket';
import Ticket from './components/TIcket/Ticket';
import TicketList from './components/TicketList/TicketList';
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
  
  // let tickets: ITicket[] | undefined = props.tickets;
  // console.log(props.tickets);
 
  
  // let ticketsList;
  
  // if (tickets && tickets.length > 0) {
  //   ticketsList = tickets.map((item) => {
      
  //     return (
  //       <li key={item.id}>
  //         <Ticket title={item.title} id={item.id} status={item.status} userId={item.userId}
  //           userName={item.userName} color={item.color} boardStatus={false} />
  //       </li>
  //     );
  //   });
  // }
  return (
    <div className="App">
      <TicketList tickets={props.tickets}/>
      
    </div>
  );
}

const mapStateToProps = (state: StateType) => ({
  tickets: state.tickets,
});

// export default App;
export default connect(mapStateToProps, { getTickets })(App);
