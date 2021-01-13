export interface CounterState {
  count: number,
}

export interface ComicsData {
  title: string;
  rating?: number;
  series?: string;
  cover?: File;
}

export interface Comics {
  key: string;
  title: string;
  rating?: number;
  series?: string;
  cover?: File;
}

export interface ComicsState {
  comics: Comics[];
}
