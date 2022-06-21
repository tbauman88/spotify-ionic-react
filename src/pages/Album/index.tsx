import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import {
  arrowDownCircleOutline,
  ellipsisHorizontalSharp,
  heartOutline,
  playCircleSharp,
  shuffle,
} from 'ionicons/icons';
import { Fragment, useCallback } from 'react';
import './styles.scss';

const data = {
  artist: 'Zach Bryan',
  backgroundColor: '#3d4c6c',
  released: 2022,
  album: 'American Heartbreak',
  avatar: 'https://i.scdn.co/image/ab6761610000f1784fd54df35bfcfa0fc9fc2da7',
  tracks: [
    { title: 'Late July' },
    { title: "Something in the Orange (Z&E's Version)" },
    { title: 'Heavy Eyes' },
    { title: 'Mine Again' },
    { title: 'Happy Instead' },
    { title: 'Right Now the Best' },
    { title: 'The Outskirts' },
    { title: 'Younger Years' },
    { title: 'Cold Damn Vampires' },
    { title: 'Tishomingo' },
    { title: "She's Alright" },
    { title: 'You Are My Sunshine' },
    { title: 'Darling' },
    { title: 'Ninth Cloud' },
    { title: 'Oklahoma City' },
    { title: 'Sun to Me' },
    { title: 'Highway Boys' },
    { title: 'Whiskey Fever' },
    { title: 'Billy Stay' },
    { title: 'Sober Side of Sorry' },
    { title: 'High Beams' },
    { title: "The Good I'll Do" },
    { title: "Someday (Maggie's)" },
    { title: 'Poems and Closing Time' },
    { title: 'From Austin' },
    { title: 'If She Wants a Cowboy' },
    { title: "Corinthians (Proctor's)" },
    { title: 'Open the Gate' },
    { title: 'Half Grown' },
    { title: 'No Cure' },
    { title: "'68 Fastback" },
    { title: 'Blue' },
    { title: 'Morning Time' },
    { title: 'This Road I Know' },
  ],
};

const Tab2: React.FC = () => {
  const onScroll = useCallback((event) => {
    const scrollTop: number = event.detail.scrollTop;
    let newOpacity = Math.max(100 - scrollTop / 3, 0);

    let newPadding = 15 + scrollTop / 25;
    if (newPadding > 100) {
      newPadding = 100;
    }

    const image: HTMLImageElement | null = document.querySelector(
      `[alt="${data.album}"]`
    );

    if (image) {
      image.style.opacity = `${newOpacity}%`;
      image.style.paddingLeft = `${newPadding}%`;
      image.style.paddingRight = `${newPadding}%`;
    }
  }, []);

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              text=""
              color="light"
              defaultHref="/tabs/tab1"
            ></IonBackButton>
          </IonButtons>

          {/* <IonTitle>{data.album}</IonTitle> */}
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src="https://i.scdn.co/image/ab67616d00001e02ba30859a1ca79c5a372d177a"
                alt={data.album}
                srcSet="https://i.scdn.co/image/ab67616d00001e02ba30859a1ca79c5a372d177a 150w, https://i.scdn.co/image/ab67616d00001e02ba30859a1ca79c5a372d177a 300w, https://i.scdn.co/image/ab67616d0000b273ba30859a1ca79c5a372d177a 320w, https://i.scdn.co/image/ab67616d0000b273ba30859a1ca79c5a372d177a 640w"
                sizes="(min-width: 1280px) 232px, 192px"
              />
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        scrollEvents
        onIonScrollStart={(e) => console.log(e)}
        onIonScroll={onScroll}
        onIonScrollEnd={() => {}}
      >
        <IonGrid className="ion-padding">
          <h4>{data.album}</h4>
          <IonRow>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '4px',
              }}
            >
              <IonAvatar slot="start">
                <img aria-hidden="false" src={data.avatar} alt={data.artist} />
              </IonAvatar>
              <IonLabel>{data.artist}</IonLabel>
            </div>
          </IonRow>
          <IonText>
            <span>Album • {data.released}</span>
          </IonText>
          <IonRow className="icons ion-align-items-center">
            <IonIcon icon={heartOutline} />
            <IonIcon icon={arrowDownCircleOutline} />
            <IonIcon icon={ellipsisHorizontalSharp} />

            <IonIcon style={{ marginLeft: 'auto' }} icon={shuffle} />
            <IonIcon color="primary" icon={playCircleSharp} />
          </IonRow>
        </IonGrid>

        <IonList>
          {data.tracks.map((track, index) => {
            return (
              <Fragment key={index}>
                <IonItemSliding>
                  <IonItem lines="none">
                    <IonLabel className="track-item">
                      <h3>{track.title}</h3>
                      <p>{data.artist}</p>
                    </IonLabel>
                    <IonIcon
                      size="small"
                      slot="end"
                      color="secondary"
                      icon={ellipsisHorizontalSharp}
                    />
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption onClick={() => {}}>
                      <IonIcon icon={heartOutline}></IonIcon>
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              </Fragment>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
