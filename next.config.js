/*eslint no-undef: "error"*/
/*eslint-env node*/
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['https://apps.borneos.co', 'https://maps.googleapis.com', 'res.cloudinary.com'],
	},
	publicRuntimeConfig: {
		API: process.env.BASE_API,
		BASE_ENV: process.env.BASE_ENV,
		BASE_HOST: process.env.BASE_HOST,
		TOKENB: process.env.TOKENB,
		PATH_IMAGE: process.env.PATH_IMAGE,
		PATH_IMAGE_MERCHANT_EMPTY: process.env.PATH_IMAGE_MERCHANT_EMPTY,
		PATH_IMAGE_PRODUCT_EMPTY: process.env.PATH_IMAGE_PRODUCT_EMPTY,
		PATH_BANNER: process.env.PATH_BANNER,
		PATH_MERCHANT: process.env.PATH_MERCHANT,
		PATH_COVER: process.env.PATH_COVER,
		PATH_PRODUCT: process.env.PATH_PRODUCT,
		GOOGLE_API_KEY_SERVICE: process.env.GOOGLE_API_KEY_SERVICE,
	},
	swcMinify: true,
};
