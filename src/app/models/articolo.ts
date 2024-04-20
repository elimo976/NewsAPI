export interface Info {
    status: string
    totalResults: number
    articles: Articolo[]
}

export interface Articolo {
    source: Fonte
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export interface Fonte {
    id: string
    name: string
}

export class InfoDTO {
    constructor(
        public status: string = "",
        public totalResults: number = 0,
        public articles: ArticoloDTO[] = []
    ) { }
}

export class ArticoloDTO {
    constructor(
        public source: FonteDTO = new FonteDTO(),
        public author: string = "",
        public title: string = "",
        public description: string = "",
        public url: string = "",
        public urlToImage: string = "",
        public publishedAt: string = "",
        public content: string = ""
    ) { }
}

export class FonteDTO {
    constructor(
        public id: string = "",
        public name: string = ""
    ) { }
}