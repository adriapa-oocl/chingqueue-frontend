import api from "./api";

export const getAllCinemaSeatsByCinemaId = (id)=>{
    return api.get(`/cinemaseats/${id}`)
}