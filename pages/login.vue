<template>
  <article class="w-full h-dvh flex flex-col justify-center items-center p-6">
    <AuthForm 
      title="Bienvenido de nuevo" 
      description="Ingresa tus datos para continuar" 
      action-name="Iniciar sesión"
      action="login" 
    />
    <p class="flex gap-2">
      <span>¿No tienes una cuenta?</span>
      <NuxtLink to="/register" class="font-semibold text-dark">Registrate</NuxtLink>
    </p>
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>

<style scoped></style>