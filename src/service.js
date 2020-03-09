import { authProvider } from "./AuthProvider";

// Example of remote service using accessToken to fetch data from API
class MyService {

    fetchData = () => {
        return new Promise((resolve, reject) => {
            try {
                const { accessToken } = await authProvider.getAccessToken(); // Fetch access token
                // Then, you can use "accessToken" to make your request like "Bearer {accessToken}"
            } catch (err) {
                reject(err);
            }
        });
    }
}