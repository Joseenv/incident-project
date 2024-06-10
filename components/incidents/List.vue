<template>
  <div class="flex flex-col gap-4 mb-8">
    <h2 class="text-2xl font-medium">Tus incidentes reportados</h2>
    <p class="text-gray-600">
      Aquí puedes revisar y gestionar todos los incidentes que has reportado. Consulta el estado de cada reporte, actualiza información relevante y asegúrate de que se estén tomando las medidas adecuadas. Mantén un seguimiento de tus contribuciones para mejorar la seguridad y el bienestar de los laboratorios.
    </p>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <article v-for="incident in incidents" :key="incident.id" class="p-4 bg-white border border-borderGray rounded-md min-w-[320px] flex flex-col gap-4 justify-between h-full">
        <!-- {{ incident }} -->
        <h2 class="text-xl font-semibold text-softDark">{{ incident.title }}</h2>
        <p class="text-gray-500">{{ incident.description }}</p>
        <p class="text-gray-500">{{ incident.date }}</p>
        <p class="text-main">{{ incident.service }}</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  incidents: Array<any>;
}>();
</script>