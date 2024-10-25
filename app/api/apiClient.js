import axios from 'axios';

// Cấu hình baseURL của API, thay đổi URL cho phù hợp với backend của bạn
const apiClient = axios.create({
  baseURL: 'http://192.168.1.10:5129/api', // Sử dụng IP cục bộ nếu phát triển trên máy
  timeout: 10000, // Giới hạn thời gian phản hồi của request
});

// Hàm thêm token nếu có
apiClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('authToken'); // Lấy token từ local storage (nếu có)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
