// src/apis/stackOverflowAPI.js
import axios from 'axios';

const BASE_URL = 'https://api.stackexchange.com/2.3';

export const fetchQuestions = async (sortType) => {
  try {
    let params = {
      order: 'desc',
      sort: 'activity',  // Default sort
      site: 'stackoverflow',
    };

    switch (sortType) {
      case 'interesting':
        params.sort = 'votes';
        break;
      case 'bountied':
        params.sort = 'activity'; 
        // params.min = 1; // Ensure at least 1 bounty
        break;
      case 'hot':
        params.sort = 'hot'; 
        break;
      case 'week':
        params.sort = 'week'; // Correct sort for week
        break;
      case 'month':
        params.sort = 'month'; // Correct sort for month
        break;
      default:
        params.sort = 'activity';
    }

    const response = await axios.get(`${BASE_URL}/questions`, { params });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

// New function for searching questions by query
export const searchQuestions = async (query) => {
  try {
    const params = {
      order: 'desc',
      sort: 'relevance',
      intitle: query,
      site: 'stackoverflow',
    };

    const response = await axios.get(`${BASE_URL}/search`, { params });
    return response.data.items;
  } catch (error) {
    console.error('Error searching questions:', error);
    return [];
  }
};
