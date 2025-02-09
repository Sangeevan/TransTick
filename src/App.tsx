import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Menu from './components/MenuComponent/MenuContainer';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';
import Home from './pages/HomePage/Home';
import ViewTickets from './pages/ViewTicketsPage/ViewTickets';
import AllTickets from './pages/AllTicketsPage/AllTickets';
import AddTicket from './pages/AddTicketPage/AddTicket';
import MyTickets from './pages/MyTicketsPage/MyTickets';
import TicketDetails from './pages/TicketDetailsPage/TicketDetails';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { useSelector } from 'react-redux';

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
      {useSelector((state:any) => state.user.username) && <Menu/>}
        <IonRouterOutlet>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/signup" component={Signup} exact={true} />
          {useSelector((state:any) => state.user.username) ? <Route path="/home" component={Home} exact={true} /> : <Redirect to="/login" />}
          {useSelector((state:any) => state.user.username) ? <Route path="/viewtickets" component={ViewTickets} exact={true} /> : <Redirect to="/login" />}
          {useSelector((state:any) => state.user.username) ? <Route path="/alltickets" component={AllTickets} exact={true} /> : <Redirect to="/login" />}
          {useSelector((state:any) => state.user.username) ? <Route path="/addticket" component={AddTicket} exact={true} /> : <Redirect to="/login" />}
          {useSelector((state:any) => state.user.username) ? <Route path="/mytickets" component={MyTickets} exact={true} /> : <Redirect to="/login" />}
          {useSelector((state:any) => state.user.username) ? <Route path="/ticketdetails" component={TicketDetails} exact={true} /> : <Redirect to="/login" />}
          <Route path="/*path" component={Login} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
);

export default App;
