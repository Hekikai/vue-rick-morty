type URL = string

export interface ICharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: URL
    }
    location: {
        name: string
        url: URL
    }
    image: string
    episode: URL[]
    url: URL
    created: string
}
