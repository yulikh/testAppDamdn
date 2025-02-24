import api from './api';

export const fetchPosts = async () => {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}