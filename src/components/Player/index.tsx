import { IonFooter, IonIcon, IonProgressBar } from '@ionic/react';
import { playSharp } from 'ionicons/icons';
import './styles.scss';

const Player: React.FC = () => {
  return (
    <IonFooter>
      <div className="progress">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ba30859a1ca79c5a372d177a"
          alt=""
        />
        <p>Something in the Orange • Zach Bryan</p>
        <IonIcon size="large" icon={playSharp}></IonIcon>
      </div>
      <IonProgressBar color="dark" value={0.17}></IonProgressBar>
    </IonFooter>
  );
};

export default Player;
