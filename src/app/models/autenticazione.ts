export interface Autenticazione {
    id: number,
    username: string,
    password: string,
    remember: boolean
}

export class AutenticazioneDTO {
    constructor(
        public id: number = 0,
        public username: string = "",
        public password: string = "",
        public remember: boolean = false
    ) { }
}