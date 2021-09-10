<template>
  <header
    class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
  >
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"
      >Company name</a
    >

    <div class="navbar-nav">
      <router-link to="/profile" class="nav-link px-3 text-white"
        >{{ user.name }}
      </router-link>

      <a class="nav-link px-3" href="javascript:void(0)" @click="logout"
        >Sign out</a
      >
    </div>
  </header>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Nav",
  setup() {
    const router = useRouter();
    const store = useStore();

    const user = computed(() => store.state.User.user);
    const logout = () => {
      localStorage.clear();
      router.push("/login");
    };
    return {
      user,
      logout,
    };
  },
};
</script>
