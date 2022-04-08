export interface FacebookAdsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
