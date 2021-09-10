<template>
  <div
    class="
      d-flex
      justity-content-between
      flex-wrap flex-md-nowrap
      align-items-center
      pt-3
      pb-2
      mb-3
      border-bottom
    "
  >
    <div class="btn-toolbar mb-2 mb-md-0" v-if="authenticate.canEdit('users')"
      >
      <router-link to="/roles/create" class="btn btn-sm btn-outline-secondary">
        Add
      </router-link>
    </div>
  </div>
  <h2>Roles</h2>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in roles" :key="role.id">
          <td>{{ role.id }}</td>
          <td>{{ role.name }}</td>
          <td>
            <div class="btn-group mr-2" v-if="authenticate.canEdit('users')"
              >
              <router-link
                :to="`/roles/${role.id}/edit`"
                class="btn btn-sm btn-outline-secondary"
                >Edit</router-link
              >
              <a
                href="javascript:void(0)"
                class="btn btn-sm btn-outline-secondary"
                @click="del(role.id)"
                >Del</a
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts">
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { Entity } from "@/interfaces/Entity";
import { useStore } from "vuex";

export default {
  name: "Roles",
  setup() {
    const roles = ref([]);

    const store = useStore();
    const authenticate = computed(() => store.state.User.user);

    onMounted(async () => {
      const response = await axios.get("roles");
      roles.value = response.data.data;
    });

    const del = async (id: number) => {
      if (confirm("Are you sure you want to delete this record?")) {
        await axios.delete(`roles/${id}`);

        roles.value = roles.value.filter((r: Entity) => r.id !== id);
      }
    };

    return { roles, del, authenticate };
  },
};
</script>
