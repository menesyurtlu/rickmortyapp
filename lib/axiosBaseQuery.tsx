import axios from 'axios';

const axiosBaseQuery =
    () =>
        async ({url, method, body}: { url: string; method: string; body?: any }) => {
            try {
                const response = await axios({
                    url: `https://rickandmortyapi.com/api/${url}`,
                    method,
                    data: body,
                });

                console.log(`https://rickandmortyapi.com/api/${url}`)

                return {data: response.data};
            } catch (error: any) {
                return {
                    error: {
                        status: error.response?.status,
                        message: error.response?.data?.message || error.message,
                    },
                };
            }
        };

export default axiosBaseQuery;
