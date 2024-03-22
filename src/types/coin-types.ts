export interface Coin {
  coin_id: number;
  small: string;
  thumb: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  data: {
    price: string;
  };
}

export interface CoinItem {
  item: Coin;
}

export interface CoinResponse {
  coins: CoinItem[];
}
