import { ImageBothOptional } from './Image';
import { Publish } from './Publish';

export interface SlideImage {
	_id: string;
	name: string;
	image: ImageBothOptional;
	slidePosition: string;
	url?: string;
	publish: Publish;
}

export interface SlidePosition {
	_id: string;
	name: string;
	type: 'carousel' | 'banner';
	rows: { desktop: number; mobile: number };
}

export interface Slide {
	_id: string;
	type: 'carousel' | 'banner';
	images: SlideImage[];
	rows: { desktop: number; mobile: number };
}
