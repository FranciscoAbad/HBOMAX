interface ThemeColors {
  blue: string;
  black: string;
  darkGray: string;
  gray: string;
  lightGray: string;
  white: string;
  error: string;
}

export interface Theme {
  colors: ThemeColors;
}

export interface StyledInputProps {
  active: boolean;
  valid: boolean;
  theme: Theme;
  color?: string;
}

export interface ValidatedInputState {
  active: boolean;
  valid: boolean;
  typedIn: boolean;
  labelActive: boolean;
  labelColor: string;
  value: string;
}

interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface SVGProps {
  height: number;
  width: number;
  color?: string;
}

export interface Profile {
  profileId: number;
  name: string;
  profilePicture: Image;
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  selectedProfile: Profile | null;
}

export interface Image {
  imageId: number;
  imageName: string;
  imageType: string;
  imageURL: string;
  imagePrefix: string;
}

export interface Genre {
  id: number;
  genre: string;
  genrePicture: Image | null;
}

export interface Country {
  countryId: number;
  country: string;
}

export interface Lenguage {
  lenguageId: number;
  lenguage: string;
}

export interface Brand {
  brandId: number;
  brand: string;
  brandLogo: Image;
}

export interface FullTitle {
  titleId: number;
  title: string;
  overview: string;
  seasonNr: number;
  episodeNr: number;
  episodeName: string;
  quality: string;
  runtime: number;
  releaseDate: string;
  popularity: number;
  rating: string;
  type: string;
  posterPicture: Image | null;
  bannerPicture: Image;
  namePicture: Image | null;
  genres: Genre[];
  brands: Brand[];
}

export interface TitleRole {
  roleId: number;
  role: string;
}

export interface Person {
  personId: number;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  birthplace: string;
  bio: string;
}

export interface Cast {
  castInfoId: number;
  person: Person;
  role: TitleRole;
  image: Image;
  characterName: string;
  producerRole: string;
  writerRole: string;
}

export interface TitleDTO {
  titleId: number;
  title: string;
  brandName: string;
  type: string;
  episodeNr: number;
  episodeName: string;
  runtime: number;
  rating: string;
  banner: Image;
  poster: Image;
}
