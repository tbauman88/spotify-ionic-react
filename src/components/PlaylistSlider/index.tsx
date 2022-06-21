import { IonicSlides, IonCard, IonCardTitle } from '@ionic/react';
import { Data3, Item } from '../../pages/Home/types';
import './styles.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import '@ionic/react/css/ionic-swiper.css';

const CARD_TYPES = {
  PLAYLIST: 'Playlist',
  ARTIST: 'Artist',
  ALBUM: 'Album',
  PODCAST: 'Podcast',
};

const PlaylistSlider: React.FC<{ item: Item }> = ({ item }) => {
  const imageSource = (data: Data3) => {
    switch (data.__typename) {
      case CARD_TYPES.PLAYLIST:
        return data.images?.items[0].sources[0].url;
      case CARD_TYPES.ARTIST:
        return data.visuals?.avatarImage.sources[0].url;
      case CARD_TYPES.ALBUM:
        return data.coverArt?.sources[0].url;
      case CARD_TYPES.PODCAST:
        return data.coverArt?.sources[1].url;

      default:
        return data.images?.items[0].sources[0].url;
    }
  };

  return (
    <Swiper
      style={{ marginBottom: '1.5rem' }}
      modules={[IonicSlides]}
      slidesPerView={2.4}
      slidesOffsetBefore={0}
      spaceBetween={16}
      freeMode={true}
    >
      {item.sectionItems.items.map(({ uri, content }) => {
        const {
          __typename: type,
          name,
          profile,
          artists,
          publisher,
          description,
        } = content.data;

        return (
          <SwiperSlide key={uri}>
            <IonCard
              className="ion-no-margin"
              style={{
                borderRadius: 0,
                backgroundColor: 'transparent',
              }}
            >
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src={imageSource(content.data)}
                alt=""
                style={{
                  borderRadius:
                    type === CARD_TYPES.ARTIST
                      ? '50%'
                      : type === CARD_TYPES.PODCAST
                      ? '8px'
                      : 0,
                }}
              />
              {type !== CARD_TYPES.PLAYLIST && (
                <IonCardTitle color="dark">
                  {name || profile?.name}
                </IonCardTitle>
              )}
              {type === CARD_TYPES.ALBUM && (
                <span className="description">
                  Album • {artists?.items[0].profile.name}
                </span>
              )}
              {type === CARD_TYPES.PODCAST && (
                <span className="description">Show • {publisher?.name}</span>
              )}

              {type !== CARD_TYPES.ALBUM && (
                <span
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: description ?? '',
                  }}
                ></span>
              )}
            </IonCard>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PlaylistSlider;
