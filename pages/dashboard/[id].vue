<template>
  <div class="w-full p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px]">
    <div class="flex flex-col gap-4 mb-8">
      <h2 class="text-2xl font-medium">Editar incidente</h2>
      <p class="text-gray-600">En esta sección, podrás actualizar incidentes de manera rápida y sencilla. Tu colaboración es fundamental para mantener nuestro entorno seguro y bien informado. ¡Gracias por tu apoyo!</p>
    </div>
    <form class="p-8 grid grid-cols-2 gap-12" @submit="updateIncidentRegister">
      <div class="flex flex-col gap-2">
        <label for="incident-title">
          <span>Título del incidente</span>
          <span class="text-error"> *</span>
        </label>
        <input v-model="newIncident.title" type="text" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main">
      </div>
      <div class="flex flex-col gap-2">
        <label for="incident-title">
          <span>Servicio afectado</span>
          <span class="text-error"> *</span>
        </label>
        <select name="services" id="services" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" v-model="newIncident.service_id">
          <option value="">Selecciona un servicio</option>
          <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }}</option>
        </select>
      </div>
      <div class="col-span-2">
        <div class="flex justify-between gap-12">
          <div class="flex flex-col gap-2 w-full">
            <label for="incident-title">Descripción del incidente</label>
            <textarea name="" id="" cols="30" rows="10" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" v-model="newIncident.description"></textarea>
          </div>
          <div class="flex flex-col gap-10 w-full">
            <div class="flex flex-col gap-2">
              <label for="incident-title">Fecha del incidente</label>
              <input type="date" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" v-model="newIncident.date" >
            </div>
            <div v-if="userData.role_id === rolesKeys.ADMIN" class="flex flex-col gap-10 w-full">
              <div class="flex flex-col gap-2">
                <label for="incident-title">Trabajador asignado</label>
                <select name="employee" id="employee" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" v-model="newIncident.employee_id">
                  <option value="">Selecciona un servicio</option>
                  <option v-for="employee in employees" :key="employee.id" :value="employee.id">{{ employee.name }}</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label for="incident-title">Estado actual</label>
                <select name="status" id="status" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" v-model="newIncident.status_id">
                  <option value="">Selecciona un servicio</option>
                  <option v-for="state in status" :key="state.id" :value="state.id">{{ state.name }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="bg-main text-white font-medium py-3 px-4 w-[280px] rounded-[6px] flex gap-4 justify-center items-center">
        <span>Actualizar incidente</span>
        <SharedSpinner v-if="isLoading"/>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { rolesKeys } from '~/constants/rolesKeys';

const route = useRoute();

const user = useSupabaseUser();

definePageMeta({
  layout: 'dashboard',
})

const { getAllServices } = useServices();
const { updateIncident, getIncidetById } = useIncidents();
const { getAllEmployee } = useEmployee();
const { getAllStatus } = useStatus();
const { getUserData } = useUser();

const userData = ref({});
const services = ref();
const employees = ref();
const status = ref();
const isLoading = ref(false);
const newIncident = ref({});

onMounted(() => {
  getUserInfo();
  getEmployees();
  getStatus();
  getServices();
  getIncident();
})

const getUserInfo = async () => {
  try {
    userData.value = await getUserData(user.value?.id as string);
    console.log(userData.value);
  } catch (error: any) {
    console.error(error);
  }
}

const getEmployees = async () => {
  try {
    employees.value = await getAllEmployee();
  } catch (error: any) {
    console.error(error);
  }
}

const getStatus = async () => {
  try {
    status.value = await getAllStatus();
  } catch (error: any) {
    console.error(error);
  }
}

const getServices = async () => {
  try {
    services.value = await getAllServices();
  } catch (error: any) {
    console.error(error);
  }
}

const getIncident = async () => {
  try {
    newIncident.value = await getIncidetById(route.params.id);
  } catch (error: any) {
    console.error(error);
  }
}

const updateIncidentRegister = async () => {
  try {
    isLoading.value = true;
    await updateIncident(newIncident.value);
  } catch (error: any) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

</script>