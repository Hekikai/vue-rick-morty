<script setup lang="ts">
import { ref } from 'vue'

import CharacterCard from '@/components/CharacterCard.vue'

import CharacterService from '@/service/character'

const listEl = ref<HTMLElement | null>(null)
const characterList = ref(await CharacterService.getAllCharacters())
</script>

<template>
    <main class="h-full w-1/2">
        <div
            ref="listEl"
            class="h-full overflow-scroll grid grid-cols-3 gap-4"
        >
            <character-card
                v-for="char in characterList"
                :char="char"
            />
        </div>
    </main>
</template>

<style scoped></style>
