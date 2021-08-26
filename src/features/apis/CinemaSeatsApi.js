import api from "./api";

export const getAllCinemaSeatsByCinemaId = (id)=>{
    return api.get(`/cinemaseats/${id}`)
}


export const updateCinemaSeat =(id, {updateInfo}) =>{

return api.put(`/cinemaseats/${id}`,updateInfo)

}