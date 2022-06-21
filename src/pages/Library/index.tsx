import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './styles.scss';

const Library: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Header - No Border</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Navigation Bar</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ height: '5000px' }}>
          <ExploreContainer name="Tab 3" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Library;
