export type LayoutType = "default" | "topLeft" | "top" | "cutMenu";
export interface AppType {
    collapse: boolean;
    footer: boolean;
    locale: boolean;
    layout: LayoutType;
    logo: boolean;
    dark: boolean;
    title: string;
    userInfo: string;
    fullScreen: boolean;
}
