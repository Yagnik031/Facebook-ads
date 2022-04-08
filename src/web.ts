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

  async initialize(): Promise<void> {
    console.log('initialize');
  }

  async targetSettings(): Promise<void> {
    console.log('targetSettings');
  }

  async trackingAuthorizationStatus(): Promise<any> {
    return {
      status: 'authorized',
    };
  }

  async showBanner(options: any): Promise<void> {
    console.log('showBanner', options);
  }

  // Hide the banner, remove it from screen, but can show it later
  async hideBanner(): Promise<void> {
    console.log('hideBanner');
  }

  // Resume the banner, show it after hide
  async resumeBanner(): Promise<void> {
    console.log('resumeBanner');
  }

  // Destroy the banner, remove it from screen.
  async removeBanner(): Promise<void> {
    console.log('removeBanner');
  }

  async prepareInterstitial(options: any): Promise<any> {
    console.log('prepareInterstitial', options);
    return {
      adUnitId: options.adId,
    };
  }

  async showInterstitial(): Promise<void> {
    console.log('showInterstitial');
  }

  async prepareRewardVideoAd(options: any): Promise<any> {
    console.log(options);
    return {
      adUnitId: options.adId,
    };
  }

  async showRewardVideoAd(): Promise<any> {
    return {
      type: '',
      amount: 0,
    };
  }
}
