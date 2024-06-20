<template>
  <button class="bg-main text-white font-medium px-4 py-3 rounded-[8px] flex items-center gap-4" @click="isOpen = true">
    <img src="/icons/add-incidence.svg" alt="Icono de agregar colaborador" class="">
    <span>Agregar nuevo técnico</span>
  </button>
  <Teleport to="body">
    <div v-if="isOpen"  class="fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center bg-[#30303080]">
      <div class="p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px] bg-[#FAFAFA] max-w-[720px]">
        <div class="flex flex-col gap-4 mb-8">
          <h2 class="text-2xl font-medium">Agregar técnico</h2>
          <p class="text-gray-600">Añade nuevos técnicos ingresando su información relevante. Asegúrate de que la información sea precisa para una asignación eficiente de tareas. ¡Gracias por tu colaboración!</p>
        </div>
        <form class="flex flex-col gap-10" @submit="createTechnician">
          <div class="flex flex-col gap-4 mb-4">
            <div class="flex flex-col gap-2">
              <label for="incident-title">
                <span>Nombre del técnico</span>
                <span class="text-error"> *</span>
              </label>
              <input v-model="employeeName" type="text" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" required>
            </div>
          </div>
          <div class="flex gap-8 items-center">
            <button type="submit" class="bg-main text-white font-medium px-4 py-2 rounded-[6px] flex gap-4 justify-center items-center">
              <span>Guardar</span>
              <SharedSpinner v-if="isLoading"/>
            </button>
            <span @click="isOpen = false" class="text-error font-medium cursor-pointer">Cancelar</span>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { createNewTechnician } = useTechnicians();

const isLoading = ref(false);
const isOpen = ref(false);

const employeeName = ref('');

const createTechnician = async () => {
  try {
    isLoading.value = true;
    await createNewTechnician(employeeName.value);
  } catch (error: any) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>