export const useServices = () => {

  const supabaseClient = useSupabaseClient();  

  const getAllServices = async () => {
    const { data, error } = await supabaseClient.from('services').select('*');
    if (error) throw error;
    return data;
  }

  return {
    getAllServices,
  }
}