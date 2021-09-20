import axios from 'axios';
import {DataUsersPropsType, FollowUserPropsType, ProfileUserType} from '../redux/store';

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;
export const getUsers = (currentPage: number, pageSize: number) => {
   return axios.get<DataUsersPropsType>(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)
};

export const deleteUser = (id: number) => {
    return  axios.delete<FollowUserPropsType> (
        baseUrl + `follow/${id}`,{
            withCredentials: true,
            headers: {
                'API-KEY':'5d9e2ad6-9759-43e9-a5e1-226b020868e0'
            }
        }).then(response => response.data)
};

export const followUser = (id: number) => {
   return axios.post<FollowUserPropsType>(
        baseUrl + `follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY':'5d9e2ad6-9759-43e9-a5e1-226b020868e0'
            }
        }).then(response => response.data)
};

export const getProfile = (userId: string) => {
    return  axios.get<ProfileUserType>(baseUrl + `profile/` + userId)
        .then(response => response.data)
};