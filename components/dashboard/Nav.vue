<template>
  <nav>
    <ul class="flex flex-col gap-6">
      <li v-for="link in dashboardLinks" :key="link.name">
        <NuxtLink :to="link.path" class="text-softDark py-2 px-10 hover:text-main flex gap-2 items-center">
          <img :src="link.icon" alt="Action Icon" class="object-cover">
          <span>{{ link.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import DashboardIcon from '/icons/dashboard-icon.svg'
import AddIncidentsIcon from '/icons/add-incidence.svg'
import ReportsIcon from '/icons/reports-icon.svg'

interface DashboardLink {
  name: string
  path: string
  icon: string
}

const dashboardLinks: DashboardLink[] = [
  { name: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
  { name: 'Incidencias', path: '/dashboard/incidents', icon: AddIncidentsIcon },
  { name: 'Reportes', path: '/dashboard/reports', icon: ReportsIcon },
  // { name: 'Servicios', path: '/dashboard/services' },
  // { name: 'Usuarios', path: '/dashboard/users' },
  // { name: 'Técnicos', path: '/dashboard/technicians' },
]
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