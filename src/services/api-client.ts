import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3afc42ed5799475fae253a430e45e56f'
    }
})