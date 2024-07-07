import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://auth-project-production.up.railway.app/api/auth'
})

export const regAuthApi = {
    async register(userData) {
        try {
            const response = await instance.post('/registration', userData);
            console.log(response.data);
        }catch(e) {
            console.log('Error during registration', e);
            throw e;
        }
    },

    async confirm() {

    },

    async resendConfirm() {

    },

    async login(loginData) {
        try {
            const response = await instance.post('/login', loginData, { withCredentials: true });
 
            console.log(response.data); 
            console.log('code: ', response.status)
            console.log('access token: ', response.data.accessToken)
            console.log('refresh token: ', response.data.refreshToken)
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;

        }catch(e) {
            console.log('Error during login: ', e);
            throw e;
        }

    }
}