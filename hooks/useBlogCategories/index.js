import ENDPOINTS from '../../constants/endpoints';
import ENV from '../../constants/env';
import { paramsToString } from '../../helpers/utils';

const fetchBlogCategories = async (limit = 10, sort = 'asc', category) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      tokenb: ENV.CURRENT_TOKENB,
    },
  };

  const queryParams = {
    limit,
    sort,
    category,
  };

  const params = paramsToString(queryParams);
  const result = await fetch(
    `${ENV.CURRENT_API}${ENDPOINTS.BLOG_CATEGORIES}${params}`,
    requestOptions,
  ).then((response) => response.json() || []);
  return result;
};

export { fetchBlogCategories };
