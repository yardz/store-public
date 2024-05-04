import { pluginsSelector } from '@App/Store/Reducers/PluginsReducer';
import { useSelector } from 'react-redux';

export const useIsActiveSmartHint = (): boolean => {
	const plugin = useSelector(pluginsSelector.smartHint);
	return plugin;
};
