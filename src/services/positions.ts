import { PositionsResponseInterface } from 'src/interfaces/position';
import axiosInstance from 'src/lib/axios';

const POSITIONS_BASE_PATH = '/positions';

export const getPositions = async (): Promise<PositionsResponseInterface> => {
  return await axiosInstance.get(`${POSITIONS_BASE_PATH}`);
};
