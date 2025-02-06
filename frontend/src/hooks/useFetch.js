import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(endpoint, baseUrl= 'https://npowersitecms-production.up.railway.app/api/') {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const api = "https://npowersitecms-production.up.railway.app"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}${endpoint}`);
                setData(response.data.data);
            } catch (err){
                setError(err);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint, baseUrl]);

    return{data, loading, error, api}
}

export default useFetch;