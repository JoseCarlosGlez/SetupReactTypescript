export interface NewReleasesResponse {
    data: {
        albums: albums
    }
    status: number
    statusText: string
}

interface albums {
    href: string,
    items: Array<items>
    limit: number
    next: string
    offset: number
    total: number
}


export interface items {
    album_type: string
    artists: Array<artist>
    available_markets: Array<string>
    href: string
    id: string
    images: Array<images>
    name: string
    type: string
    uri: string
    release_date:string

}


export interface artist {
    href: string
    id: string
    name: string
    type: string
    uri: string
}

interface images {

    height: string
    url: string
    widht: Number
}
