import Banner from '@components/banner';
import { ComingSoon } from '@components/coming-soon';
import FeatureCards from '@components/feature-cards';
import FeaturesIlles from '@components/feature-illas';
import React from 'react';

export default function Page() {
  return (
    <div>
      <Banner />
      <FeatureCards />
      <FeaturesIlles />
    </div>
  );
}
