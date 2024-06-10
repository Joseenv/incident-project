<template>
  <article class="w-full h-dvh flex flex-col justify-center items-center p-6">
    <AuthForm 
      title="¿Eres nuevo por aquí?" 
      description="Completa el formulario para continuar" 
      action-name="Registrarme"
      action="register" 
    />
    <p class="flex gap-2">
      <span>¿Ya tienes una cuenta?</span>
      <NuxtLink to="/login" class="font-semibold text-dark">Iniciar sesión</NuxtLink>
    </p>
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>