import { useEffect, useState } from 'react';
import { PositionInterface } from 'src/interfaces/position';
import useVisible from './useVisible';
import { getPositions } from 'src/services/positions';

export const usePositionsList = () => {
  const [positions, setPositions] = useState<PositionInterface[]>([]);
  const loadingPositions = useVisible(true);

  const init = async () => {
    const response = await getPositions();

    if (response.data.success) {
      const positions = response.data.positions;
      setPositions(positions);
    }

    loadingPositions.hide();
  };

  useEffect(() => {
    init();
  }, []);

  return { positions, loading: loadingPositions.visible };
};
