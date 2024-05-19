export interface PositionInterface {
  id: number;
  name: string;
}

export interface PositionsResponseInterface {
  data: {
    success: boolean;
    positions: PositionInterface[];
    message: string;
  };
}
