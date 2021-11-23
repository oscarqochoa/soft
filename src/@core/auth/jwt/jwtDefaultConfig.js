export default {
  // Endpoints
  loginEndpoint: process.env.VUE_APP_BASE_URL + '/api/v1/auth/login',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: process.env.VUE_APP_BASE_URL + '/api/v1/auth/refresh',
  logoutEndpoint: process.env.VUE_APP_BASE_URL + '/api/v1/auth/logout',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
