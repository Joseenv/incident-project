<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const user = useSupabaseUser();

const incidents = ref([]);
  
onMounted(() => {
  getIncidents();
});
  
const { getIncidentsByUser } = useIncidents();

const getIncidents = async () => {
  try {
    incidents.value = await getIncidentsByUser(user.value?.id as string);
  } catch (error) {
    console.error(error);
  }
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
      <IncidentsList :incidents="incidents"/>
    </div>
  </div>
</template>
