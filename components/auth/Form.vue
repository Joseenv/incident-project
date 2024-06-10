<template>
  <div class="flex flex-col items-start gap-2 p-4 min-w-[486px]">
    <div class="mb-4 flex flex-col items-start gap-3">
      <h2 class="text-5xl font-medium text-center">{{ props.title }}</h2>
      <p class="text-lg">{{ props.description }}</p>
    </div>
    <!-- Form aqui -->
    <form class="flex flex-col gap-6 w-full" @submit.prevent="handleActions(props.action)">
      <div class="flex flex-col gap-1">
        <label htmlFor="email" class="input-label mb-1 2xl:mb-2">
          Email
          <span v-if="isRegisterAction" className="pl-1 text-error">*</span>
        </label>
        <input v-model="userData.email" type="email" name="email" placeholder="joseenv.dev@test.com" class="p-3 border border-dark rounded-md outline-softDark" required>
      </div>
      <div class="flex flex-col gap-1 w-full">
        <label htmlFor="user" class="input-label mb-1 2xl:mb-2">
          Contraseña
          <span v-if="isRegisterAction" className="pl-1 text-error">*</span>
        </label>
        <input v-model="userData.password" type="password" name="user" placeholder="****" class="p-3 border border-dark rounded-md outline-softDark" required>
      </div>
      <!-- Errors -->
      <div v-if="responseError">
       <p class="text-error">{{ responseError }}</p>
      </div>
      <button type="submit" :disabled="isLoading" class="w-full bg-main justify-center mt-4 px-6 py-3 rounded-md text-white font-medium flex items-center gap-2">
        <span class="block">{{ props.actionName }}</span>
        <div v-if="isLoading">
          <shared-spinner/>
        </div>
      </button>
    </form>
  </div>
</template>
kk
<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  actionName: string;
  action: string;
}
const props = defineProps<Props>();

const userData = reactive({
  email: '',
  password: ''
});

const isRegisterAction = props.action === 'register';
const isLoading = ref(false);
const responseError = ref('');

const { loginUser, singUpUser } = useAuth();

const handleActions = async (action: string) => {
  try {
    isLoading.value = true;

    if (action === 'register') {
      await singUpUser( userData.email, userData.password );
    } else {
      await loginUser( userData.email, userData.password);
    }
  } catch (error: any) {
    responseError.value = error.message;
  } finally {
    isLoading.value = false;
  }
}
</script>