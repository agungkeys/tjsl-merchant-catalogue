import { useQuery } from 'react-query';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';
import { paramsToString } from '../../helpers/utils';

const fetchMerchants = async (props) => {
  const {
    perPage = 9, 
    page= 1,
    sort = 'asc', 
    isFavorite = 'all',
    isFavoriteProduct,
    category,
  } = props;
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'tokenb': ENV.CURRENT_TOKENB,
    },
  };

  const queryParams = {
    perPage,
    page,
    sort,
    isFavorite,
    isFavoriteProduct,
    category
  }

  const params = paramsToString(queryParams);
  const result = await fetch(`${ENV.CURRENT_API}${ENDPOINTS.MERCHANTS}${params}`, requestOptions).then(response => response.json() || [])
  return result
}

export { fetchMerchants }
