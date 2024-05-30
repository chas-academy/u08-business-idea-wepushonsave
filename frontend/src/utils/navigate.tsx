import {useNavigate} from 'react-router-dom';

const setPath = useNavigate();
export const navigate = (param: string) => {
  const navigateToPath = async (params: string) => {
    setPath(params);
  };
  return navigateToPath;
};
