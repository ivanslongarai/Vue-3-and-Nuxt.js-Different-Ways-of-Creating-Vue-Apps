<template>
  <label class="btn btn-primary">
    Upload
    <input type="file" hidden @change="upload($event.target.files)" />
  </label>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "ImageUpload",
  emits: ["file-uploaded"],
  setup(_params : any, context : any) {
    const upload = async (files: FileList) => {
      const file = files.item(0);

      if (file !== null) {
        const data = new FormData();
        data.append("image", file);
        const response = await axios.post("upload", data);

        context.emit("file-uploaded", response.data.url);
      }
    };

    return {
      upload,
    };
  },
};
</script>
