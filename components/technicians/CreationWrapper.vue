<template>
  <div class="w-full p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px]">
    <div class="flex flex-col gap-4 mb-8">
      <h2 class="text-2xl font-medium">Agregar técnicos</h2>
      <p class="text-gray-600">Añade nuevos técnicos ingresando su información relevante. Asegúrate de que la información sea precisa para una asignación eficiente de tareas. ¡Gracias por tu colaboración!</p>
    </div>
    <form class="p-8 flex flex-col gap-10" @submit.prevent="createTechnician">
      <div class="flex flex-col gap-4 mb-4">
        <h3 class="text-lg text-softDark font-medium">Información General</h3>
        <div class="flex flex-col gap-2">
          <label for="incident-title">
            <span>Nombre del técnico</span>
            <span class="text-error"> *</span>
          </label>
          <input v-model="employeeName" type="text" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" required>
        </div>
      </div>
      <!-- <div class="flex flex-col gap-4 mb-4">
        <h3 class="text-lg text-softDark font-medium">Datos para la autenticación</h3>
        <div class="flex justify-between gap-8">
          <div class="flex flex-col gap-2 w-full">
            <label for="incident-title">
              <span>Correo electrónico</span>
              <span class="text-error"> *</span>
            </label>
            <input type="email" v-model="technicalAuthData.email" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" required>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="incident-title">
              <span>Contraseña</span>
              <span class="text-error"> *</span>
            </label>
            <input type="password" v-model="technicalAuthData.password" class="bg-white border-[1px] border-solid border-borderDefault rounded-[4px] p-2 outline-main" required>
          </div>
        </div>
      </div> -->
      <button type="submit" class="bg-main text-white font-medium py-3 px-4 w-[280px] rounded-[6px] flex gap-4 justify-center items-center">
        <span>Guardar</span>
        <SharedSpinner v-if="isLoading"/>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { createNewTechnician } = useTechnicians();

const isLoading = ref(false);

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