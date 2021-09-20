import axios from 'axios';
import {DataUsersPropsType, FollowUserPropsType, ProfileUserType} from '../redux/store';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
    'API-KEY':'5d9e2ad6-9759-43e9-a5e1-226b020868e0'
},
});

export const getUsers = (currentPage: number, pageSize: number) => {
   return instance.get<DataUsersPropsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
};

export const deleteUser = (id: number) => {
    return  instance.delete<FollowUserPropsType> (`follow/${id}`).then(response => response.data)
};

export const followUser = (id: number) => {
   return instance.post<FollowUserPropsType>(`follow/${id}`).then(response => response.data)
};

export const getProfile = (userId: string) => {
    return  instance.get<ProfileUserType>( `profile/` + userId).then(response => response.data)
};