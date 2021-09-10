<template>
  <div style="padding-top: 2px"></div>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item" style="padding-top: 10px">
          <router-link
            to="/dashboard"
            active-class="active"
            class="nav-link"
            aria-current="page"
            href="#"
          >
            Dashboard
          </router-link>
        </li>

        <li class="nav-item" v-if="user.canView('users')">
          <router-link
            to="/users"
            active-class="active"
            class="nav-link"
            aria-current="page"
            href="#"
          >
            Users
          </router-link>
        </li>

        <li class="nav-item" v-if="user.canView('roles')">
          <router-link
            to="/roles"
            active-class="active"
            class="nav-link"
            aria-current="page"
            href="#"
          >
            Roles
          </router-link>
        </li>

        <li class="nav-item" v-if="user.canView('products')">
          <router-link
            to="/products"
            active-class="active"
            class="nav-link"
            aria-current="page"
            href="#"
          >
            Products
          </router-link>
        </li>

        <li class="nav-item" v-if="user.canView('orders')">
          <router-link
            to="/orders"
            active-class="active"
            class="nav-link"
            aria-current="page"
            href="#"
          >
            Orders
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "Menu",
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return {
      user,
    };
  },
};
</script>
