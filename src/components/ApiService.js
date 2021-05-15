import Axios from 'axios';

class ApiService {
  constructor() {
    this.axios = Axios.create();
    this.axios.interceptors.response.use(null, this.authInterceptor);

    this.get = this.axios.get.bind(this.axios);
    this.post = this.axios.post.bind(this.axios);
  }

  async login(username, password) {
    const { accessToken } = await this.axios.post('/api/login', {
      username,
      password,
    });
    this.setAccessToken(accessToken);
    return accessToken; // return it to the component that invoked it to store in some state
  }

  async getTrack(userId, spotifyToken) {
    return this.axios.get(
      `${process.env.REACT_APP_WEB_SERVICE_URL}/get-tracks/${userId}/${spotifyToken}`
    );
  }

  async updateAccessToken() {
    const { accessToken } = await this.axios.post(`/api/auth/refresh-token`, {});
    this.setAccessToken(accessToken);
  }

  async authInterceptor(error) {
    error.config.retries = error.config.retries || {
      count: 0,
    };

    if (this.isUnAuthorizedError(error) && this.shouldRetry(error.config)) {
      await this.updateAccessToken(); // refresh the access token
      error.config.retries.count += 1;

      return this.axios.rawRequest(error.config); // if succeed re-fetch the original request with the updated accessToken
    }
    return Promise.reject(error);
  }

  isUnAuthorizedError(error) {
    return error.config && error.response && error.response.status === 401;
  }

  shouldRetry(config) {
    return config.retries.count < 3;
  }

  setAccessToken(accessToken) {
    this.axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`; // assign all requests to use new accessToken
  }
}

export const apiService = new ApiService();