import { registerPlugin } from '@capacitor/core';

import type { FacebookAdsPlugin } from './definitions';

const FacebookAds = registerPlugin<FacebookAdsPlugin>('FacebookAds', {
  web: () => import('./web').then(m => new m.FacebookAdsWeb()),
});

export * from './definitions';
export { FacebookAds };
