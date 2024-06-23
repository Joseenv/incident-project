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

definePageMeta({
  layout: 'dashboard',
})

const DOCUMENT_OPTIONS = {
  orientation: 'landscape',
  unit: 'pt',
  format: 'letter',
}

const HTML_OPTIONS = {
  margin: [0, 0],
  html2canvas: {
    scale: 0.5,
  },
}

const { getDailyReports } = useReports()

const incidentsStore = useIncidentsStore()
const currentIncidents = ref(incidentsStore.getCurrentIncidents())
const currentDay = ref("");

const dailyIncidents = ref([]);

const getReports = () => {
  const reports = getDailyReports(currentIncidents.value, currentDay.value)
  dailyIncidents.value = reports
}

const pdfSection = ref<HTMLElement | null>(null)
</script>

<template>
  <div>
    <div class="flex items-center justify-center">
      <div class="w-full p-8 bg-bgMain border border-solid border-borderDefault rounded-[8px]">
        <header class="w-full flex items-center justify-between mb-6">
          <h1 class="text-2xl font-medium">Reportes</h1>
          <button 
            class="py-2 px-4 bg-main rounded-[8px] text-white font-medium"
            @click="exportToPDF(`repor_list_at_${currentDay}.pdf`, pdfSection, DOCUMENT_OPTIONS, HTML_OPTIONS)"
          >
            Imprimir reporte
          </button>
        </header>
        <section>
          <div class="flex items-center gap-4 mb-8">
            <label for="date" class="text-gray-600">Selecciona una fecha:</label>
            <input 
              type="date" 
              id="date" 
              v-model="currentDay"
              @change="getReports"
              class="bg-white px-4 py-2 border border-borderDefault rounded-[8px]"
            >
          </div>
        </section>
        <div ref="pdfSection">
          <ReportsPdfSection :incidents="dailyIncidents" :day="currentDay" />
        </div>
      </div>
    </div>
  </div>
</template>