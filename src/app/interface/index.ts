export interface UserLogin {
    email: string
    password: string
}

export interface UserRegister {
    pseudo: string
    email: string
    password: string
    avatar: string
}

export interface ResponseServer {
    id: number
    niveau: number
    email: string
    password: string
    token: string
}