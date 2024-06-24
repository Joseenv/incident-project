import { rolesKeys } from "~/constants/rolesKeys";

export const useTechnicians = () => {
  const supabaseClient = useSupabaseClient();  

  const createNewTechnician = async (technician: any) => {
    const { data, error } = await supabaseClient.from('employees').insert(technician).select();
    if (error) throw error;
    navigateTo('/dashboard/technicians');
  }

  const getAllTechnicians = async () => {
    const { data, error } = await supabaseClient.from('employees').select('*');
    if (error) throw error;
    return data;
  }

  const updateTechnician = async ({id, name, email, phone}: {id: number, name: string, email: string, phone: number}) => {
    const { data, error } = await supabaseClient.from('employees').update({ name, phone, email }).eq('id', id);
    if (error) throw error;
    // window.location.reload();
    navigateTo('/dashboard/technicians');
  }

  const deleteTechnician = async (employeeId: number) => {
    const { data, error } = await supabaseClient.from('employees').delete().eq('id', employeeId);
    if (error) throw error;
    window.location.reload();
  }
  // const _updateProfile = async (profileId: string) => {
  //   const { data, error } = await supabaseClient.from('profiles').update({ role_id: rolesKeys.EMPLOYEE }).eq('id', profileId);
  //   if (error) throw error;
  //   return data;
  // }

  return {
    createNewTechnician,
    getAllTechnicians,
    updateTechnician,
    deleteTechnician,
  }
}