export interface ThemeModeSwitch {
  /** Dark Mode */
  dark?: boolean;
}
export interface ThemeSetting {
  darkMode: boolean;
  followSystemTheme: boolean;
  themeColor: string;
  themeColorList: string[];
  otherColor: OtherColor;
  isCustomizeInfoColor: boolean;
}

interface OtherColor {
  info: string;
  success: string;
  warning: string;
  error: string;
}
