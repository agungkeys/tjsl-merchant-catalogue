import { combineReducers } from 'redux';

// A
// B
import storeBanners from './banners';
// C
import storeCategories from './categories';
import storeConfig from './config';
// D
import storeDistance from './distance';
// G
import storeGeneral from './general';
// M
import storeMerchant from './merchant';
import storeMerchants from './merchants';
// P
import storeProducts from './products';
// S
import storeSearch from './search';

const rootReducer = combineReducers({
	// A
	// B
	storeBanners,
	// C
	storeCategories,
	storeConfig,
	// D
	storeDistance,
	// G
	storeGeneral,
	// M
	storeMerchant,
	storeMerchants,
	// P
	storeProducts,
	// S
	storeSearch,
});

export default rootReducer;
