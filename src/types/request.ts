export interface RequestMessage {
  body: string;
  time: Date;
}

export interface RequestState {
  requesting: boolean;
  successful: boolean;
  messages: RequestMessage[];
  errors: RequestMessage[];
}
