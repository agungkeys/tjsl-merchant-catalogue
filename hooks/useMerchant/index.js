import { useQuery } from 'react-query';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';
import { paramsToString } from '../../helpers/utils';

const fetchMerchant = async (props) => {
  const {
    slug
  } = props;
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'tokenb': ENV.CURRENT_TOKENB,
    },
  };

  const result = await fetch(`${ENV.CURRENT_API}${ENDPOINTS.MERCHANTS}/${slug}`, requestOptions).then(response => response.json() || [])
  return result
}

export { fetchMerchant }
