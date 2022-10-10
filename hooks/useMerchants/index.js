import { useQuery } from 'react-query';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';
import { paramsToString } from '../../helpers/utils';

const fetchMerchants = async (props) => {
  console.log("🚀 ~ file: index.js ~ line 7 ~ fetchMerchants ~ props", props)
  const {
    limit = 15, 
    sort = 'asc', 
    isFavorite,
  } = props;
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'tokenb': ENV.CURRENT_TOKENB,
    },
  };

  const queryParams = {
    limit,
    sort,
    isFavorite
  }

  const params = paramsToString(queryParams);
  const result = await fetch(`${ENV.CURRENT_API}${ENDPOINTS.MERCHANTS}${params}`, requestOptions).then(response => response.json() || [])
  return result
}

export { fetchMerchants }
