import BaseService from '@/service/api'
import { ICharacter } from '@/types'

interface CharacterResponse {
    info: {
        count: number
        next: string
        pages: number
        prev: string | null
    }
    results: Array<ICharacter>
}

class CharacterService extends BaseService {
    async getAllCharacters(
        page: number,
    ): Promise<CharacterResponse['results']> {
        const res = await fetch(`${this.BASE_PATH}/character/?page=${page}`)
        const jsonRes = await res.json()
        return jsonRes.results
    }
}

export default new CharacterService()
