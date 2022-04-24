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

export interface articleList {
    id: number
    id_article: number
    titre: string
    contenu: string
    creation: number
}

export interface interfaceAddArticle {
    titre: string
    contenu: string
}

export interface interfaceUserList {
    id: number
    id_article: number
    titre: string
    contenu: string
    creation: number
}

export interface interfaceSingleUser {
    id: number
    pseudo: string
    email: string
    avatar: string
    niveau: number
    password: string
}

export interface interfaceCommentList {
    id: number
    id_article: number
    id_commentaire: number
    contenu: string
    creation: number
}