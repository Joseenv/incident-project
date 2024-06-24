<template>
  <nav>
    <ul class="flex flex-col gap-6">
      <li>
        <NuxtLink to="/dashboard" class="text-softDark py-2 px-10 hover:text-main flex gap-2 items-center">
          <img src="/icons/dashboard-icon.svg" alt="Action Icon" class="object-cover">
          <span>Dashboard</span>
        </NuxtLink>
      </li>
      <li v-if="userData.role_id === rolesKeys.ADMIN">
        <NuxtLink to="/dashboard/technicians" class="text-softDark py-2 px-10 hover:text-main flex gap-2 items-center">
          <img src="/icons/add-incidence.svg" alt="Action Icon" class="object-cover">
          <span>Colaboradores</span>
        </NuxtLink>
      </li>
      <li v-else>
        <NuxtLink to="/dashboard/incidents" class="text-softDark py-2 px-10 hover:text-main flex gap-2 items-center">
          <img src="/icons/add-incidence.svg" alt="Action Icon" class="object-cover">
          <span>Incidencias</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/reports" class="text-softDark py-2 px-10 hover:text-main flex gap-2 items-center">
          <img src="/icons/reports-icon.svg" alt="Action Icon" class="object-cover">
          <span>Reportes</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { rolesKeys } from '~/constants/rolesKeys';
const user = useSupabaseUser();
const userData = ref({});

const { getUserData } = useUser();

onMounted(async () => {
  userData.value = await getUserData(user.value?.id as string);
});
</script>

<style scoped>
.router-link-active {
  color: #1e7d56;
  transition: all 0.35s;
  background-color: #d8f3e3;
  padding: 0.5rem 2.5rem;
  border-radius: 8px;
}
</style>