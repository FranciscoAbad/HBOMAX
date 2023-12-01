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
  name: string;
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  selectedProfile: Profile | null;
}
