interface Title {
  text: string;
}

interface Data2 {
  __typename: string;
  title?: Title;
}

interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

interface CoverArt {
  sources: Source[];
}

interface Profile {
  name: string;
}

interface Item3 {
  uri: string;
  profile: Profile;
}

interface Artists {
  items: Item3[];
}

interface Item4 {
  sources: Source[];
}

interface Images {
  items: Item4[];
}

interface Data4 {
  __typename: string;
  name: string;
}

interface OwnerV2 {
  data: Data4;
}

interface AvatarImage {
  sources: Source[];
}

interface Visuals {
  avatarImage: AvatarImage;
}

interface Publisher {
  name: string;
}

export interface Data3 {
  __typename: string;
  uri?: string;
  name?: string | undefined;
  coverArt?: CoverArt;
  artists?: Artists;
  images?: Images;
  description?: string;
  ownerV2?: OwnerV2;
  profile?: Profile;
  visuals?: Visuals;
  publisher?: Publisher;
  mediaType?: string;
}

interface Content {
  __typename: string;
  data: Data3;
  uri?: string;
}

interface Data5 {
  __typename: string;
}

interface Item2 {
  uri: string;
  content: Content;
  data: Data5 | null;
}

interface SectionItems {
  items: Item2[];
  totalCount: number;
}

export interface Greeting {
  text: string;
}

export interface Item {
  uri: string;
  data: Data2;
  sectionItems: SectionItems;
}
