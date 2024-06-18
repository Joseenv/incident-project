export const useEmployee = () => {

  const supabaseClient = useSupabaseClient();  

  const getAllEmployee = async () => {
    const { data, error } = await supabaseClient.from('employees').select('*');
    if (error) throw error;
    return data;
  }

  return {
    getAllEmployee,
  }
}