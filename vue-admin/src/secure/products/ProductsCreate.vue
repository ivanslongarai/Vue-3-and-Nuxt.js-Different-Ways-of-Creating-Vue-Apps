<template>
  <div>
    <h5><label>Create a new Product record</label></h5>
  </div>
  <form class="form-group" @submit.prevent="submit">
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" name="title" v-model="title" />
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea
        type="text"
        class="form-control"
        name="description"
        v-model="description"
      />
    </div>
    <div class="form-group">
      <label>Image</label>
      <input type="text" class="form-control" name="image" v-model="image" />
    </div>
    <div class="form-group">
      <label>Price</label>
      <input type="number" class="form-control" name="price" v-model="price" />
    </div>
    <div style="padding-top: 10px">
      <button class="btn btn-outline-secondary">Save</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "ProductsCreate",

  setup() {
    const title = ref("");
    const description = ref("");
    const image = ref("");
    const price = ref(0);
    const router = useRouter();

    const submit = async () => {
      const response = await axios.post("products", {
        title: title.value,
        description: description.value,
        image: image.value,
        price: price.value,
      });

      await router.push("/products");
    };

    return {
      title,
      description,
      image,
      price,
      submit,
    };
  },
};
</script>
