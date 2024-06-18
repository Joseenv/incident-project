export const useStatus = () => {

  const supabaseClient = useSupabaseClient();  

  const getAllStatus = async () => {
    const { data, error } = await supabaseClient.from('status').select('*');
    if (error) throw error;
    return data;
  }

  return {
    getAllStatus,
  }
}