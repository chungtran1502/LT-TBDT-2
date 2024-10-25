import apiClient from './apiClient';

// Lấy danh sách category
export const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    throw new Error('Không thể lấy danh mục');
  }
};

// Lấy danh sách sản phẩm
export const getProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Không thể lấy sản phẩm');
  }
};
