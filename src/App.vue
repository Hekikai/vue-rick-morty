<script setup lang="ts">
import CharacterList from "@/components/CharacterList.vue";
</script>

<template>
    <div class="bg-green-200 w-full h-screen flex justify-center pt-20">
      <suspense>
        <character-list />
        <template #fallback>
          <p>loading</p>
        </template>
      </suspense>
    </div>
</template>

<style scoped></style>
