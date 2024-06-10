<template>
  <main class="w-full h-dvh">
    <section class="flex justify-between">
      <article class="w-full h-dvh bg-auth-pattern bg-cover p-6 flex flex-col justify-between">
        <SharedLogo
          logo-size="48"
          color="#32AB78"
          text-size="3xl"
          text-color="white"
        />
        <div class="text-offWhite flex flex-col gap-3">
          <q class="">
            <span class="font-semibold text-white">Incident Cure</span>
            <span> es una plataforma para gestionar incidentes en laboratorios universitarios. Facilita la documentación, monitoreo y resolución de problemas, ofreciendo análisis y reportes para identificar riesgos. Con notificaciones en tiempo real y acceso multiusuario, mejora la seguridad y eficiencia.</span>
          </q>
          <span class="block">-UNFV</span>
        </div>
      </article>
      <NuxtPage />
    </section>
  </main>
</template>

<style>
main {
  background-color: #FAFAFA;
}
</style>