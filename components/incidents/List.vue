<template>
  <div class="flex flex-col gap-4 mb-8">
    <h2 class="text-2xl font-medium">{{ props.title }}</h2>
    <!-- <h2 class="text-2xl font-medium">Tus incidentes reportados</h2> -->
    <p class="text-gray-600">
      {{ props.description }}
    </p>
    <!-- <p class="text-gray-600">
      Aquí puedes revisar y gestionar todos los incidentes que has reportado. Consulta el estado de cada reporte, actualiza información relevante y asegúrate de que se estén tomando las medidas adecuadas. Mantén un seguimiento de tus contribuciones para mejorar la seguridad y el bienestar de los laboratorios.
    </p> -->
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="grid grid-cols-3 gap-4">
      <NuxtLink 
        v-for="incident in incidents" :key="incident.id"
        :to="{ name: 'dashboard-id', params: { id: incident.id } }" 
      >
        <article class="p-4 bg-white border border-borderGray rounded-md min-w-[320px] flex flex-col justify-between h-full">
          <div class="flex flex-col mb-3">
            <h3 class="text-lg font-semibold text-softDark">{{ incident.title }}</h3>
            <span class="text-main text-sm inline-block">{{ incident.status.name }}</span>
          </div>
          <p class="text-gray-500 mb-4">{{ incident.description }}</p>
          <div class="flex justify-between">
            <span class="text-softDark text-sm">{{ incident.date }}</span>
            <div class="">
              <span class="text-main text-sm">{{ incident.services.name }}</span>
              <!-- <span v-if="incident.employees.name" class="text-softDark text-sm">Asignado a: {{ incident.employees.name}}</span> -->
            </div>
          </div>
        </article>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  incidents: Array<any>,
  title: string,
  description: string
}>();

// console.log(props.incidents);
</script>