export const useIncidents = () => {
  
  const supabaseClient = useSupabaseClient();

  const getIncidentsByUser = async (userId:string) => {
    const { data, error } = await supabaseClient.from("incidents").select(`*, status (id, name ), services (id, name), employees (id, name)`).eq("profile_id", userId)
    if (error) throw error;
    return data;
  }
  
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
  
  const updateIncident = async (incident:any) => {
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

  const deleteIncident = async (incidentId:any) => {
    const { data, error } = await supabaseClient.from("incidents").delete().eq("id", incidentId);
    if (error) throw error;
    navigateTo("/dashboard");
  }

  return {
    getIncidentsByUser,
    createIncident,
    getAllIncidents,
    updateIncident,
    getIncidetById,
    deleteIncident,
  };
};
