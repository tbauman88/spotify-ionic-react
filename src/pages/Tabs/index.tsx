import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { homeSharp, searchSharp, librarySharp } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import Album from '../Album';
import Home from '../Home';
import Library from '../Library';
import Search from '../Search';

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/album">
          <Album />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon style={{ fontSize: '20px' }} icon={homeSharp} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search">
          <IonIcon style={{ fontSize: '20px' }} icon={searchSharp} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="library" href="/library">
          <IonIcon style={{ fontSize: '20px' }} icon={librarySharp} />
          <IonLabel>Your Library</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
