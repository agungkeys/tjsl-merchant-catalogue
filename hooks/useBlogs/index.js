import { useQuery } from 'react-query';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';
import { paramsToString } from '../../helpers/utils';

const fetchBlogs = async (props) => {
  const { limit = 10, sort = 'asc' } = props
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
  }

  const params = paramsToString(queryParams);
  const result = await fetch(`${ENV.CURRENT_API}${ENDPOINTS.BLOGS}${params}`, requestOptions).then(response => response.json() || [])
  return result
}

export { fetchBlogs }
