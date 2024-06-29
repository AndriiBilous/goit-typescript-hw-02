import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos?client_id=';

const clientId = 'oPUue__WoPseInTYGwOXPOCyn_4M8CzzN2yOi6FyxKs';
export const fetchPictureFromGallery = async (topic, currentPage) => {
  const response = await axios.get('search/photos', {
    params: {
      client_id: clientId,
      query: topic,
      page: currentPage,
      per_page: 4,
    },
  });
  return response.data.results;
};
