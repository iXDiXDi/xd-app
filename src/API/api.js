import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "8768cb5b - 5667 - 45e4 - ad78 - bd7a5e2b7910"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    });

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        debugger
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)

    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}