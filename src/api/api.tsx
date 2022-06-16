import axios from 'axios';
import {
    DataLoginPropsType,
    DataUsersPropsType,
    FollowUserPropsType,
    ProfileUserType, StatusPropsType,
} from '../redux/Types';


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
    'API-KEY':'8c5dd338-08f2-464e-ab28-c05ffc72a5ec'
},
});

export const authAPI = {
    me() {
        return instance.get<DataLoginPropsType>(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<any>(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete<any>(`auth/login`);
    },
}

export const usersAPI = {
    requestUsers(currentPage: number, pageSize: number) {
        return instance.get<DataUsersPropsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId: number) {
        return instance.post<FollowUserPropsType>(`follow/${userId}`);
    },
    unfollow(userId: number) {
        return  instance.delete<FollowUserPropsType> (`follow/${userId}`);
    }
};

export const profileAPI = {
    getProfile (userId: string) {
        return  instance.get<ProfileUserType>( `profile/` + userId).then(response => response.data);
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put<StatusPropsType>(`profile/status`, {status: status});
    },
    savePhoto(photoFile: File) {
        let formData = new FormData();
        formData.append('image', photoFile)
return instance.put<any>(`profile/photo`, formData, {headers: {'Content-Type':'multipart/form-data'}})
    }
};