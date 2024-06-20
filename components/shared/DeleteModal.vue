<template>
  <button class="w-max text-white font-medium flex gap-4 justify-center items-center" @click="isOpen = true">
    <img src="/icons/delete-icon.svg" alt="ícono de eliminar">
  </button>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center">
      <div class="p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px] bg-[#FAFAFA] max-w-[720px] h-[380px] flex flex-col items-center justify-center">
        <div class="flex flex-col gap-4 mb-8">
          <h2 class="text-2xl font-medium">Eliminar colaborador</h2>
          <p class="text-gray-600">¿Estás seguro de que deseas eliminar a <span class="font-medium">{{ props.technician.name }}</span> de la lista de técnicos? Esta acción no se puede deshacer.</p>
        </div>
        <div class="flex gap-8 items-center">
          <button type="submit" class="bg-error text-white font-medium px-4 py-2 rounded-[6px] flex gap-4 justify-center items-center" @click="deleteEmployee">
            <span>Eliminar</span>
            <SharedSpinner v-if="isLoading"/>
          </button>
          <span @click="isOpen = false" class="text-error font-medium cursor-pointer">Cancelar</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { deleteTechnician } = useTechnicians();

interface Technician {
  id: number;
  name: string;
}

const props = defineProps<{
  technician: Technician;
}>();

const isOpen = ref(false);
const isLoading = ref(false);

const deleteEmployee = async () => {
  try {
    isLoading.value = true;
    await deleteTechnician(props.technician.id);
  } catch (error: any) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>