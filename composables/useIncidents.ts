export const useIncidents = () => {
  
  const supabaseClient = useSupabaseClient();

  // interface Incident {
  //   id: number;
  //   title: string;
  //   description: string;
  //   service_id: number;
  //   date: string;
  //   status_id: number;
  //   employee_id: number;
  // }

  const getIncidentsByUser = async (userId:string) => {
    // console.log(userId);
      const { data, error } = await supabaseClient.from("incidents").select(`*, status (id, name ), services (id, name), employees (id, name)`).eq("profile_id", userId)
      if (error) throw error;
      return data;
  }

  // employees (id, name)

  const createIncident = async (incident:any) => {
    const { data, error } = await supabaseClient.from("incidents").insert(incident).select();
    if (error) throw error;
    return data;
  }

  const getAllIncidents = async () => {
    const { data, error } = await supabaseClient.from("incidents").select(`*, status (id, name ), services (id, name), employees (id, name)`)
    if (error) throw error;
    return data;
  }
  //Hacer una sola instancia de supabase con el composable
  
  const updateIncident = async (incident:any) => {
    console.log("Incident", {incident});
    const { data, error } = await supabaseClient.from("incidents").update([
      {
        title: incident.title,
        description: incident.description,
        service_id: incident.service_id,
        date: incident.date,
        status_id: incident.status_id,
        employee_id: incident.employee_id,
      }
    ]).eq("id", incident.id).select();
    if (error) throw error;
    navigateTo("/dashboard");
  }

  const getIncidetById = async (incidentId:any) => {
    console.log("Incident", {incidentId});
    const { data, error } = await supabaseClient.from("incidents").select(`*, status (id, name ), services (id, name), employees (id, name)`).eq("id", incidentId).single();
    if (error) throw error;
    return data;
  }

  return {
    getIncidentsByUser,
    createIncident,
    getAllIncidents,
    updateIncident,
    getIncidetById
  };
};
