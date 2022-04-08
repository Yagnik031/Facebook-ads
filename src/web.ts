import { WebPlugin } from '@capacitor/core';

import type { FacebookAdsPlugin } from './definitions';

export class FacebookAdsWeb extends WebPlugin implements FacebookAdsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async createBanner(_options: any): Promise<boolean> {
    console.log('create banner', _options);
    return _options;
  }
}
