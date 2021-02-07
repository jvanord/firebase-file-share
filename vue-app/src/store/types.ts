import firebase from 'firebase'

export interface IRootState {
    error: string
}

export interface IAuthState {
    user: firebase.User | null
}