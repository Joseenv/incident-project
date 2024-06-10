export const useAuth = () => {
  const supabaseClient = useSupabaseClient();

  const singUpUser = async (email: string, password: string) => {
    const { error } = await supabaseClient.auth.signUp({ email, password });
    if (error) throw error;
    navigateTo("/confirmation");
  };

  const loginUser = async (email: string, password: string) => {
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    navigateTo("/dashboard");
  };

  const singOutUser = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
    navigateTo("/login");
  };

  return {
    singUpUser,
    loginUser,
    singOutUser,
  };
};
