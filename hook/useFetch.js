import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": '170b2cd324msh206813dbfa26a7ap15bd8ajsn28e10db48e62',
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    const fetchData = async () => {

        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {

            setError(error);
            console.log('Erro no fetch data >>>>>', error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {


        fetchData()
    }, []);

    const refetch = () => {

        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
