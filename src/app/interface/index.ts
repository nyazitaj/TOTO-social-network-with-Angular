export interface userIndex {
    /* email: string
    password: string
    avatar: string */
}

export interface UserRegister {
    pseudo: string
    email: string
    password: string
    avatar: string
}

export interface RetLogin {
    id: number
    niveau: number
    email: string
    password: string
    token: string
}