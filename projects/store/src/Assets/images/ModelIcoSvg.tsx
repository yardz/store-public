import React from 'react';

export const ModelIcoSvg: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<circle cx="14" cy="14" r="14" fill="#181818" />
		<g clipPath="url(#clip0)">
			<path
				d="M20.5545 10.6663V17.999C20.5545 18.6737 20.0071 19.2211 19.3324 19.2211H8.74079C8.06608 19.2211 7.51868 18.6737 7.51868 17.999V10.6663C7.51868 9.99163 8.06608 9.44422 8.74079 9.44422H10.9813L11.2945 8.60657C11.4727 8.13045 11.9285 7.81474 12.4377 7.81474H15.633C16.1422 7.81474 16.5979 8.13045 16.7762 8.60657L17.0919 9.44422H19.3324C20.0071 9.44422 20.5545 9.99163 20.5545 10.6663ZM17.0919 14.3327C17.0919 12.6472 15.7221 11.2774 14.0366 11.2774C12.3511 11.2774 10.9813 12.6472 10.9813 14.3327C10.9813 16.0182 12.3511 17.3879 14.0366 17.3879C15.7221 17.3879 17.0919 16.0182 17.0919 14.3327ZM16.2771 14.3327C16.2771 15.5675 15.2714 16.5732 14.0366 16.5732C12.8018 16.5732 11.7961 15.5675 11.7961 14.3327C11.7961 13.0978 12.8018 12.0921 14.0366 12.0921C15.2714 12.0921 16.2771 13.0978 16.2771 14.3327Z"
				fill="white"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="13.0358" height="13.0358" fill="white" transform="translate(7.51868 7)" />
			</clipPath>
		</defs>
	</svg>
);