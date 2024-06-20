<template>
  <article v-for="technician in technicians" :key="technician.id"
    @click="setCurrentTechnician(technician)"
    class="bg-white font-medium py-5 px-10 rounded-[8px] border border-main hover:bg-main hover:text-white transition-all cursor-pointer">
    <span>{{ technician.name }}</span>
  </article>
  <Teleport to="body">
    <div v-if="isOpen"
      class="fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center bg-[#30303080]">
      <div class="p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px] bg-[#FAFAFA] max-w-[720px]">
        <div class="flex flex-col gap-4 mb-8">
          <div class="flex justify-between items-center w-full">
            <h2 class="text-2xl font-medium">Actualizar información de técnico.</h2>
            <SharedDeleteModal :technician="currentTechnician"/>
          </div>
          <p class="text-gray-600">En esta sección, puedes actualizar la información de un colaborador existente. Asegúrate de guardar los cambios para reflejar la información más reciente.</p>
        </div>
        <form class="flex flex-col gap-10" @submit="updateEmployee">
          <div class="flex flex-col gap-4 mb-4">
            <div class="flex flex-col gap-2">
              <label for="incident-title">
                <span>Nombre del técnico</span>
                <span class="text-error"> *</span>
              </label>
              <input v-model="currentTechnician.name" type="text"
                class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" required>
            </div>
          </div>
          <div class="flex gap-8 items-center">
            <button type="submit"
              class="bg-main text-white font-medium px-4 py-2 rounded-[6px] flex gap-4 justify-center items-center">
              <span>Actualizar</span>
              <SharedSpinner v-if="isLoading" />
            </button>
            <span @click="isOpen = false" class="text-error font-medium cursor-pointer">Cancelar</span>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const isLoading = ref(false);

const { getAllTechnicians, updateTechnician } = useTechnicians();

const technicians = ref([]);
const currentTechnician = ref({});

onMounted(async () => {
  technicians.value = await getAllTechnicians();
  console.log(technicians.value);
});

const setCurrentTechnician = (technician) => {
  isOpen.value = true;
  currentTechnician.value = technician;
}

const updateEmployee = async () => {
  try {
    isLoading.value = true;
    await updateTechnician(currentTechnician.value.id, currentTechnician.value.name);
  } catch (error: any) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>