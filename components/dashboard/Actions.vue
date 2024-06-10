<template>
  <div>
    <button class="bg-secondary-red w-full py-2 px-6 rounded-[8px] hover:bg-[#faebe9] hover:text-error flex flex-row-reverse gap-2" @click="singOutUser">
      <span>Cerrar sesión</span>
      <img src="/icons/logout.svg" alt="">
    </button>
  </div>
</template>

<script setup lang="ts">
const { singOutUser } = useAuth();
</script>