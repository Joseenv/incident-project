export const useIncidents = () => {
  
  const supabaseClient = useSupabaseClient();

  const getIncidentsByUser = async (userId:string) => {
    console.log(userId);
      const { data, error } = await supabaseClient.from("incidents").select(`*, status (id, name ), services (id, name)`).eq("profile_id", userId)
      if (error) throw error;
      return data;
  }

  const createIncident = async (incident:any) => {
    const { data, error } = await supabaseClient.from("incidents").insert(incident).select();
    if (error) throw error;
    return data;
  }

  //Hacer una sola instancia de supabase con el composable
  

  return {
    getIncidentsByUser,
    createIncident
  };
};
