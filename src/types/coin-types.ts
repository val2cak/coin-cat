export interface Coin {
  small: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  data: {
    price: string;
  };
  favorite?: boolean;
}
