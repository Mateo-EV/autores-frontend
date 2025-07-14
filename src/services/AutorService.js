import axios from "axios"

const API_URL = import.meta.env.VITE_BACKEND_URL + "/api/autores"

export const getAutores = () => axios.get(API_URL)
