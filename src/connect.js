// const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=ec894536c33661580c454ddd34987362';
const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=716b690d41721e95b8e5ddbf8fb589a9';

export const getData = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        if (response.status === 200) {
            return data;
        } else {
            console.warn('error: ', data.error.message);
        }
    } catch (error) {
        console.error(error.code);
    }
};

