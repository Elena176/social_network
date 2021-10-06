import axios from 'axios';
import {
    DataLoginPropsType,
    DataUsersPropsType,
    FollowUserPropsType,
    ProfileUserType,
    StatusPropsType
} from '../redux/Types';


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
    'API-KEY':'5d9e2ad6-9759-43e9-a5e1-226b020868e0'
},
});

export const authAPI = {
     me() {
         return instance.get<DataLoginPropsType>(`auth/me`)
     },
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<DataUsersPropsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<FollowUserPropsType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return  instance.delete<FollowUserPropsType> (`follow/${userId}`)
    }
};

export const profileAPI = {
    getProfile (userId: string) {
        return  instance.get<ProfileUserType>( `profile/` + userId).then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get<any>(`status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put<StatusPropsType>(`status`, {status: status})
    },
};