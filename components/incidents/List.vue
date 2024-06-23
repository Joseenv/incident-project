<template>
  <div class="flex flex-col gap-4 mb-8">
    <h2 class="text-2xl font-medium">{{ props.title }}</h2>
    <p class="text-gray-600">
      {{ props.description }}
    </p>
  </div>
  <section class="mb-8 flex items-center gap-10">
    <span class="text-main font-medium">Filtrar incidentes por:</span>
    <nav class="flex gap-6">
      <button v-for="filter in filters" :key="filter.id"
        class="px-4 py-2 border border-borderDefault rounded-[8px]"
        :class="filter.hasFilter ? 'bg-main text-white' : 'bg-white'"
        @click="filterByStatus(filter.id)"
      >
        {{ filter.name }}
      </button>
    </nav>
  </section>
  <div class="flex flex-col items-center justify-center">
    <div class="grid grid-cols-3 gap-4">
      <NuxtLink 
        v-for="incident in originalIncidents" :key="incident.id"
        :to="{ name: 'dashboard-id', params: { id: incident.id } }" 
      >
        <article class="p-4 bg-white border border-borderGray rounded-md w-[520px] flex flex-col justify-between h-full">
          <div class="flex flex-col mb-3">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-softDark">{{ incident.title }}</h3>
              <span class="text-softDark text-sm">{{ incident.date }}</span>
            </div>
            <span class="text-main text-sm inline-block">{{ incident.status.name }}</span>
          </div>
          <p class="text-gray-500 mb-4">{{ incident.description }}</p>
          <div class="flex justify-between items-center">
            <p class="text-softDark text-sm">
              <span class="text-softDark font-medium">Asignado a: </span>
              <span class="text-softDark font-medium">{{ incident?.employees?.name || "" }}</span>
            </p>
            <div class="">
              <span class="text-main text-sm">{{ incident.services.name }}</span>
            </div>
          </div>
        </article>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { statusKeys } from '~/constants/statusKeys';

const props = defineProps<{
  incidents: Array<any>,
  title: string,
  description: string
}>();

const originalIncidents = ref(props.incidents);

const filters = ref([
  { id: statusKeys.PENDING, name: 'Pendiente de revisión', hasFilter: false},
  { id: statusKeys.REVIEWING, name: 'En revisión', hasFilter: false },
  { id: statusKeys.ESCALATED, name: 'Escalado', hasFilter: false },
  { id: statusKeys.SOLVED, name: 'Resuelto', hasFilter: false },
  { id: statusKeys.CLOSED, name: 'Cerrado', hasFilter: false },
])

const filterByStatus = (statusId: number) => {
  // Verifica si el filtro activo es el mismo que se está aplicando
  const isFilterActive = filters.value.some(filter => filter.id === statusId && filter.hasFilter);

  if (isFilterActive) {
    originalIncidents.value = [...props.incidents];
    filters.value.forEach((filter) => {
      filter.hasFilter = false;
    });
  } else {
    originalIncidents.value = props.incidents.filter((incident) => incident.status.id === statusId);
    filters.value.forEach((filter) => {
      filter.hasFilter = filter.id === statusId;
    });
  }
}
</script>