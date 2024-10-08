export interface Coin {
  id: string;
  small: string;
  thumb: string;
  large: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  data?: {
    price?: string;
  };
}

export interface CoinItem {
  item: Coin;
}

export interface CoinResponse {
  coins: CoinItem[] | Coin[];
}
