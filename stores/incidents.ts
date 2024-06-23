import { defineStore } from "pinia";

export const useIncidentsStore = defineStore('incidents', () => {
  const incidents = ref([])

  const setCurrentIncidents = (newIncidents: any) => {
    incidents.value = newIncidents
  }

  const getCurrentIncidents = () => {
    return incidents.value
  }

  return { incidents, setCurrentIncidents, getCurrentIncidents }
}, {
  persist: {
    storage: persistedState.localStorage,
  }
})