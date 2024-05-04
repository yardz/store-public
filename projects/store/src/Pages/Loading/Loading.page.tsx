import React from 'react';
import dynamic from 'next/dynamic';

const Spining = dynamic(() => import('@App/Components').then(mod => mod.Spining));

export const LoadingPage: React.FC = () => <Spining />;
