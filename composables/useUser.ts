export const useUser = () => {
  const supabaseClient = useSupabaseClient();

  const getUserData = async (userId: string) => {
    const { data, error } = await supabaseClient.from("profiles").select().eq("id", userId).single();

    if (error) throw error

    return data
  }

  return {
    getUserData
  }
}