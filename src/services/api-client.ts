import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a901d8dd92c24837bcb3d6d25ce22cfa'
    }
})