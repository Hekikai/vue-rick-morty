import BaseService from "@/service/api";
import { ICharacter } from "@/types";

interface CharacterResponse {
  info: {
    count: number
    next: string
    pages: number
    prev: string | null
  },
  results: Array<ICharacter>
}

class CharacterService extends BaseService{
  async getAllCharacters(): Promise<CharacterResponse> {
    const res = await fetch(`${this.BASE_PATH}/character/?count=10`)
    const res1 = await res.json()
    return res1.results
  }
}

export default new CharacterService() as CharacterService