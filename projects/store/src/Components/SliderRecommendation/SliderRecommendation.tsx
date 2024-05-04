import React from 'react';
import dynamic from 'next/dynamic';

const SmartHint = dynamic(() => import('@App/Plugins/SmartHint').then(mod => mod.SmartHint), { ssr: false });

interface Props {
	position: 1 | 2 | 3 | 4 | 5;
}

export const SliderRecommendation: React.FC<Props> = ({ position }) => <SmartHint position={position} />;
