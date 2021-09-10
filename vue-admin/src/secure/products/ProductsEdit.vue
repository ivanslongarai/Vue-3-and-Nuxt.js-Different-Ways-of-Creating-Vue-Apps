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
      <div
        class="input-group-append"
        style="padding-top: 10px; padding-bottom: 10px"
      >
        <ImageUpload @file-uploaded="image = $event" />
      </div>
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

<script lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import ImageUpload from "@/secure/components/ImageUpload.vue";
import { Product } from "@/classes/Product";

export default {
  name: "ProductsEdit",
  components: { ImageUpload },
  setup() {
    const title = ref("");
    const description = ref("");
    const image = ref("");
    const price = ref(0);
    const router = useRouter();
    const { params } = useRoute();

    const submit = async () => {
      await axios.put(`products/${params.id}`, {
        title: title.value,
        description: description.value,
        image: image.value,
        price: price.value,
      });

      await router.push("/products");
    };

    onMounted(async () => {
      const response = await axios.get(`products/${params.id}`);
      const product: Product = response.data.data;
      title.value = product.title;
      description.value = product.description;
      image.value = product.image;
      price.value = product.price;
    });

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
