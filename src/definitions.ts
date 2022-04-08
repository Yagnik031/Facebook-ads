export interface FacebookAdsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;


  // banner create....
  createBanner(options: any): Promise<boolean>;
}
