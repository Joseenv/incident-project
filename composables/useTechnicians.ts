import { rolesKeys } from "~/constants/rolesKeys";

export const useTechnicians = () => {
  const supabaseClient = useSupabaseClient();  

  const createNewTechnician = async (employeeName: string) => {
    const { data, error } = await supabaseClient.from('employees').insert([{ name: employeeName }] as never[]).select();
    if (error) throw error;
    return data;
  }

  // const _updateProfile = async (profileId: string) => {
  //   const { data, error } = await supabaseClient.from('profiles').update({ role_id: rolesKeys.EMPLOYEE }).eq('id', profileId);
  //   if (error) throw error;
  //   return data;
  // }

  return {
    createNewTechnician,
  }
}