import { useQuery } from 'react-query';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';
import { paramsToString } from '../../helpers/utils';

const fetchResponder = async (data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      tokenb: ENV.CURRENT_TOKENB,
    },
    body: JSON.stringify(data),
  };

  const result = await fetch(
    `${ENV.CURRENT_API}${ENDPOINTS.RESPONDER}`,
    requestOptions,
  ).then((response) => response.json() || []);
  return result;
};

export { fetchResponder };
