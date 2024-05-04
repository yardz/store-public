import { SlidePosition } from '@lab77store/domain';
import { slidesService } from 'Services/slidesService';
import useSWR from 'swr';

export const useSlidePositions = () => {
	const positions = useSWR<SlidePosition[]>('get-slide-positions', () => slidesService.getPositions());

	return {
		isLoading: !positions.error && positions.data === undefined,
		...positions,
	};
};
