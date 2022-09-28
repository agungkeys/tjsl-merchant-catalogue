import { fork } from 'redux-saga/effects';
// A
// B
import sagaBanners from './banners';
// C
import sagaCategories from './categories';
import sagaConfig from './config';
// D
import sagaDistance from './distance';
// G
import sagaGeneral from './general';
// M
import sagaMerchant from './merchant';
import sagaMerchants from './merchants';
// O
import sagaOrderHealth from './orderHealth';
// P
import sagaProducts from './products';
// S
import sagaSearch from './search';

export default function* rootSaga() {
	// A
	// B
	yield fork(sagaBanners);
	// C
	yield fork(sagaCategories);
	yield fork(sagaConfig);
	// D
	yield fork(sagaDistance);
	// G
	yield fork(sagaGeneral);
	// M
	yield fork(sagaMerchant);
	yield fork(sagaMerchants);
	// O
	yield fork(sagaOrderHealth);
	// P
	yield fork(sagaProducts);
	// S
	yield fork(sagaSearch);
}
