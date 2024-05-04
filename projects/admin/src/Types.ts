type StateColors = 'success' | 'danger' | 'warning' | 'info';
type Colors = 'primary' | 'secondary' | 'white';
type Themes = 'light' | 'dark';
export type ThemeColors = StateColors | Colors | Themes;

export type Click = (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
export type OnChange = (event?: React.ChangeEvent<HTMLElement>) => void;

export interface FirebaseArray<T> {
	[key: string]: T;
}
