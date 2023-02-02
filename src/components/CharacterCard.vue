<script setup lang="ts">
import { ICharacter } from '@/types'
import { reformatDate } from '@/helpers'

defineProps<{
    char: ICharacter
}>()
</script>

<template>
    <div
        class="relative h-72 w-full bg-cover bg-center rounded-lg"
        :style="{ backgroundImage: `url(${char.image})` }"
    >
        <div
            class="absolute bottom-0 bg-white h-32 p-3 m-2 rounded-lg overflow-y-scroll"
        >
            <p>Character name: {{ char.name }}</p>
            <p>Status: {{ char.status }}</p>
            <p>Created at: {{ reformatDate(char.created) }}</p>
            <p>Location: {{ char.location.name }}</p>
        </div>
    </div>
</template>

<style scoped></style>
