import { rolesKeys } from "~/constants/rolesKeys";

export const useTechnicians = () => {
  const supabaseClient = useSupabaseClient();  

  const createNewTechnician = async (employeeName: string) => {
    const { data, error } = await supabaseClient.from('employees').insert([{ name: employeeName }] as never[]).select();
    if (error) throw error;
    navigateTo('/dashboard/technicians');
  }

  const getAllTechnicians = async () => {
    const { data, error } = await supabaseClient.from('employees').select('*');
    if (error) throw error;
    return data;
  }

  const updateTechnician = async (employeeId: number, employeeName: string) => {
    const { data, error } = await supabaseClient.from('employees').update({ name: employeeName }).eq('id', employeeId);
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