import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/postsApi';

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getPosts();
    }, []);

    return { posts, loading, error };
}

export default usePosts;