<script setup lang="ts">
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'

import CharacterCard from '@/components/CharacterCard.vue'

import CharacterService from '@/service/character'

const listEl = ref<HTMLElement | null>(null)
const page = ref(1)
const characterList = ref(await CharacterService.getAllCharacters(page.value))

const getCharactersOnScroll = async () => {
    const newChars = await CharacterService.getAllCharacters(++page.value)
    characterList.value.push(...newChars)
}

useInfiniteScroll(
    listEl,
    async () => {
        await getCharactersOnScroll()
    },
    { distance: 10 },
)
</script>

<template>
    <main class="h-full w-3/4">
        <div
            ref="listEl"
            class="h-full overflow-y-scroll grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
            <character-card
                v-for="char in characterList"
                :char="char"
            />
        </div>
    </main>
</template>

<style scoped></style>
