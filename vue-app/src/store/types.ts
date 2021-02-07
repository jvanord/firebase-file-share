import firebase from 'firebase'

export interface IRootState {
    error: string
}

export interface IAuthState {
    user: firebase.User | null
}

export interface IFileInfo {
    name: string,
    uri: string,
    size: number
}

export interface IFileModuleState {
    files: firebase.storage.Reference[]
}