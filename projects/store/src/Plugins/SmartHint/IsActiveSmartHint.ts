import { store } from '@App/Store/Store';

export const IsActiveSmartHint = (): boolean => store.getState().plugins.smartHint;
