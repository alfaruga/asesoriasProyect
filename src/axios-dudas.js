import axios from "axios";

const instance = axios.create({
    baseURL: "https://alexis-ruiz-asesorias.firebaseio.com/"
})

export default instance;