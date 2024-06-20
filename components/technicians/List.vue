<template>
  <div class="w-full p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px]">
    <!-- Header -->
    <div class="flex justify-between items-center w-full mb-6">
      <div class="flex flex-col gap-4 mb-8">
        <h2 class="text-2xl font-medium">Lista de colaboradores</h2>
        <p class="text-gray-600">Consulta la lista completa de técnicos disponibles. Revisa sus especialidades y detalles de contacto para una rápida asignación de tareas.</p>
      </div>
      <!-- Actions -->
      <TechniciansCreationModal />
    </div>
    <div class="flex gap-8 flex-wrap w-full">
      <TechniciansElementModal/>
    </div>
  </div>
</template>