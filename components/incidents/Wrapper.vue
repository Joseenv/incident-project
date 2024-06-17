<template>
  <div class="w-full p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px]">
    <div class="flex flex-col gap-4 mb-8">
      <h2 class="text-2xl font-medium">Reportar incidentes</h2>
      <p class="text-gray-600">En esta sección, podrás reportar nuevos incidentes de manera rápida y sencilla. Proporciónanos detalles clave como la ubicación, la fecha, la descripción del incidente y cualquier otra información relevante. Tu colaboración es fundamental para mantener nuestro entorno seguro y bien informado. ¡Gracias por tu apoyo!</p>
    </div>
    <form class="p-8 grid grid-cols-2 gap-12" @submit="insertIncident">
      <div class="flex flex-col gap-2">
        <label for="incident-title">
          <span>Título del incidente</span>
          <span class="text-error"> *</span>
        </label>
        <input v-model="incident.title" type="text" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main">
      </div>
      <div class="flex flex-col gap-2">
        <label for="incident-title">
          <span>Servicio afectado</span>
          <span class="text-error"> *</span>
        </label>
        <select name="services" id="services" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" v-model="incident.service_id">
          <option value="">Selecciona un servicio</option>
          <option v-for="service in services
          " :key="service.id" :value="service.id">{{ service.name }}</option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label for="incident-title">Descripción del incidente</label>
        <textarea name="" id="" cols="30" rows="10" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" v-model="incident.description"></textarea>
      </div>
      <div class="flex flex-col gap-2">
        <label for="incident-title">Fecha del incidente</label>
        <input type="date" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" v-model="incident.date" >
      </div>
      <button type="submit" class="bg-main text-white font-medium py-3 px-4 w-[280px] rounded-[6px] flex gap-4 justify-center items-center">
        <span>Reportar incidente</span>
        <SharedSpinner v-if="isLoading"/>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { statusKeys } from '~/constants/statusKeys';

const { getAllServices } = useServices();
const { createIncident } = useIncidents();

const services = ref();
const responseError = ref('');
const isLoading = ref(false);
const user = useSupabaseUser();
const openedStatus = 1;

onMounted(() => {
  getServices();
})

const getServices = async () => {
  try {
    services.value = await getAllServices();
  } catch (error: any) {
    responseError.value = error.message;
  }
}

const incident = reactive({
  title: '',
  description: '',
  date: '',
  'service_id': '',
  'profile_id': user.value?.id,
  'status_id': statusKeys.PENDING,
});

const insertIncident = async () => {
  try {
    isLoading.value = true;
    await createIncident(incident);
  } catch (error: any) {
    responseError.value = error.message;
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>