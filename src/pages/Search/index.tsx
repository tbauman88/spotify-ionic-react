import { IonContentCustomEvent } from '@ionic/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  ScrollDetail,
} from '@ionic/react';
import { cameraOutline } from 'ionicons/icons';
import { lowerCase } from 'lodash';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { searchData } from '../../data/search';
import './styles.scss';

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<any[]>();
  const history = useHistory();

  useEffect(() => {
    setData(searchData.content.items);
  }, []);

  const onScroll = useCallback((event: IonContentCustomEvent<ScrollDetail>) => {
    const header = document.querySelectorAll('.header')[0];

    event.detail.scrollTop > 55
      ? header.classList.add('fixed')
      : header.classList.remove('fixed');
  }, []);

  return (
    <IonPage className="search">
      <IonContent fullscreen scrollEvents onIonScroll={onScroll}>
        <IonHeader collapse="condense" className="ion-padding-top">
          <IonToolbar>
            <IonTitle title="search">Search</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon
                  color="dark"
                  size="large"
                  slot="icon-only"
                  icon={cameraOutline}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonHeader className="header ion-no-border">
          <IonToolbar color="light">
            <IonSearchbar
              className="searchbar"
              mode="ios"
              color="dark"
              type="search"
              placeholder="Artists, songs, or podcasts"
              debounce={1000}
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value!)}
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>

        <IonGrid className="ion-padding grid" fixed>
          {data?.map((section) => (
            <Fragment key={section.id}>
              <IonRow className="ion-margin-bottom">
                <h3 className="ion-no-margin sectionTitle">{section.name}</h3>
              </IonRow>

              <IonRow className="ion-align-items-end ion-margin-bottom">
                {section.content.items?.map((genre: any) => (
                  <IonCol
                    style={{ position: 'relative' }}
                    size="6"
                    sizeMd="3"
                    key={genre.href}
                  >
                    <h6
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '65%',
                        transform: 'translate(-50%, -65%)',
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        fontWeight: '500',
                        fontFamily: 'Spotify',
                      }}
                    >
                      {lowerCase(genre.name)}
                    </h6>
                    <a href={genre.href}>
                      <img
                        aria-hidden="false"
                        draggable="false"
                        loading="lazy"
                        src={genre.images[0].url}
                        alt=""
                      />
                    </a>
                  </IonCol>
                ))}
              </IonRow>
            </Fragment>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;
