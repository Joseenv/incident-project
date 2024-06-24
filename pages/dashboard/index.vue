<script setup lang="ts">
import { rolesKeys } from '~/constants/rolesKeys';
import { useIncidentsStore } from '~/stores/incidents';

definePageMeta({
  layout: 'dashboard'
})

const user = useSupabaseUser();
const incidentStore = useIncidentsStore();

const { getIncidentsByUser, getAllIncidents } = useIncidents();
const { getUserData } = useUser();

const userData = ref({});
const incidents = ref([]);

const isUserRol = ref(false);
const title = ref('');
const description = ref('');
  
onMounted(async () => {
  userData.value = await getUserData(user.value?.id as string);
  getIncidents();
  setInformation();
});


const getIncidents = async () => {
  try {
    isUserRol.value = (userData.value.role_id === rolesKeys.EMPLOYEE || userData.value.role_id === null)

    incidents.value = isUserRol.value ? await getIncidentsByUser(user.value?.id as string) : await getAllIncidents()
    incidentStore.setCurrentIncidents(incidents.value);
  } catch (error) {
    console.error(error);
  }
}

const setInformation = () => {
  title.value = isUserRol.value ? 'Mis incidentes reportados' : 'Incidentes reportados';
  
  description.value = isUserRol.value
    ? 'Aquí puedes revisar y gestionar todos los incidentes que has reportado. Consulta el estado de cada reporte y asegúrate de que se estén tomando las medidas adecuadas para mejorar la seguridad y el bienestar de los laboratorios.' 
    : 'Aquí puedes revisar y gestionar todos los incidentes reportados por los usuarios. Consulta el estado de cada reporte, actualiza la información necesario y asegúrate de que se estén tomando las medidas adecuadas para mejorar la seguridad y el bienestar de los laboratorios.';
}

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
