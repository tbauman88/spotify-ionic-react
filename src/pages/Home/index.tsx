import {
  IonCard,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/react';
import {
  notificationsOutline,
  settingsOutline,
  timerOutline,
} from 'ionicons/icons';
import { drop, take } from 'lodash';
import { Fragment, useCallback, useEffect, useState } from 'react';
import Player from '../../components/Player';
import { data as homeData } from '../../data';
import './styles.scss';
import { Greeting, Item } from './types';
import PlaylistSlider from '../../components/PlaylistSlider';

const HomePage: React.FC = () => {
  const [greeting, setGreeting] = useState<Greeting>();
  const [firstSection, setFirstSection] = useState<Item>();
  const [lists, setLists] = useState<Item[]>();

  useEffect(() => {
    load();
  }, []);

  const load = useCallback(() => {
    const [first] = take(homeData.home.sectionContainer.sections.items);
    const list = drop(homeData.home.sectionContainer.sections.items);
    setGreeting(homeData.home.greeting);
    setFirstSection(first);
    setLists(list);
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="ion-padding">
          <IonRow className="ion-align-items-end title-row">
            <h3 className="ion-no-margin">{greeting?.text}</h3>
            <IonIcon icon={notificationsOutline} />
            <IonIcon icon={timerOutline} />
            <IonIcon icon={settingsOutline} />
          </IonRow>

          {firstSection != null && (
            <IonRow className="section-playlist">
              {firstSection.sectionItems.items.map(({ uri, content }) => {
                const {
                  __typename: type,
                  name,
                  coverArt,
                  images,
                } = content.data;
                return (
                  <IonCard className="ion-no-margin" key={uri}>
                    <IonGrid className="ion-no-padding">
                      <IonRow className="ion-align-items-center ion-nowrap">
                        <img
                          aria-hidden="false"
                          draggable="false"
                          loading="lazy"
                          alt={name}
                          src={
                            type === 'Album'
                              ? coverArt?.sources[0].url
                              : images?.items[0].sources[0].url
                          }
                        />

                        <IonText color="dark">
                          <p>{name}</p>
                        </IonText>
                      </IonRow>
                    </IonGrid>
                  </IonCard>
                );
              })}
            </IonRow>
          )}

          {lists?.map((item) => (
            <Fragment key={item.uri}>
              <IonRow className="title-row">
                <h3 className="ion-no-margin">{item.data.title?.text}</h3>
              </IonRow>

              <PlaylistSlider {...{ item }} />
            </Fragment>
          ))}
        </IonGrid>
      </IonContent>
      <Player />
    </IonPage>
  );
};

export default HomePage;
