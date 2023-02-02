<script setup lang="ts">
import { ref } from 'vue'
import { ICharacter } from '@/types'

defineProps<{
    char: ICharacter
}>()
</script>

<template>
    <div class="bg-amber-100">
        <p>{{ char.name }}</p>
    </div>
</template>

<style scoped></style>
