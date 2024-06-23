<template>
  <Table>
    <TableCaption v-if="!props.incidents.length">No presenta indicentes reportados en el día {{ props.day }}</TableCaption>
    <TableCaption v-else>Lista de incidentes reportados el día {{ props.day }}.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="max-w-max">
          Título
        </TableHead>
        <TableHead>Descripción</TableHead>
        <TableHead>Estado</TableHead>
        <TableHead>Servicio afectado</TableHead>
        <TableHead>
          Asignado a
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="incident in incidents" :key="incident.id">
        <TableCell class="font-medium">
          {{ incident.title }}
        </TableCell>
        <TableCell>{{ incident.description }}</TableCell>
        <TableCell>{{ incident.status.name }}</TableCell>
        <TableCell>{{ incident.services.name }}</TableCell>
        <TableCell>{{ incident?.employees?.name || "" }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const props = defineProps<{
  incidents: Array<any>,
    day: string
}>();

</script>