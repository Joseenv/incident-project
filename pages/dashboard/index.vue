<script setup lang="ts">
import { rolesKeys } from '~/constants/rolesKeys';

definePageMeta({
  layout: 'dashboard'
})

const user = useSupabaseUser();
const { getIncidentsByUser, getAllIncidents } = useIncidents();
const { getUserData } = useUser();

const userData = ref({});
const incidents = ref([]);
  
onMounted(async () => {
  userData.value = await getUserData(user.value?.id as string);
  console.log(userData.value);
  getIncidents();
});

const isUserRol = (userData.value.role_id === rolesKeys.EMPLOYEE || userData.value.role_id === null)

const getIncidents = async () => {
  try {
    incidents.value = isUserRol ? await getIncidentsByUser(user.value?.id as string) : await getAllIncidents()
    console.log(incidents.value);
  } catch (error) {
    console.error(error);
  }
}

const title = isUserRol ? 'Mis incidentes reportados' : 'Incidentes reportados';

const description = isUserRol 
  ? 'Aquí puedes revisar y gestionar todos los incidentes que has reportado. Consulta el estado de cada reporte y asegúrate de que se estén tomando las medidas adecuadas para mejorar la seguridad y el bienestar de los laboratorios.' 
  : 'Aquí puedes revisar y gestionar todos los incidentes reportados por los empleados. Consulta el estado de cada reporte, actualiza la información necesario y asegúrate de que se estén tomando las medidas adecuadas para mejorar la seguridad y el bienestar de los laboratorios.';
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <span class="text-3xl font-medium">
      Bienvenido, {{ user?.email }}
    </span>
    <div v-if="!incidents.length" class="flex justify-center items-center h-full w-full">
      <DashboardNoItems/>
    </div>
    <div v-else class="w-full p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px] mt-10 h-full">
      <IncidentsList :incidents="incidents" :title="title" :description="description"/>
    </div>
  </div>
</template>
