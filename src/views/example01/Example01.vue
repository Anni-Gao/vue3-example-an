<template>
  <div>
    <h1>Components&Router</h1>
    <p>HelloWorld</p>
    <hr />
    <h1>Data&Methods&Comeputed</h1>
    {{ message }}
    <p>文本内容倒置</p>
    {{ reverseMessage }}
    <hr />
    {{ user.name }}
    <br />
    <button type="button" @click="changeName">changeName</button>
    <hr />
    {{ user.address }}
    <br />
    <button @click="addAddress">addAddress</button>
    <br />
    <hr />
    {{ user.insertTime }}
    <p>基于计算属性方法替换</p>
    {{ myDate }}
    <br />
    {{ myReplace(user.insertTime) }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    isShow: false,
    message: "hello",
    user: {
      name: "An",
      insertTime: "2021-03-14T10:25:30",
      address: ""
    }
  }),
  methods: {
    changeName() {
      this.user.name = "Gao";
    },
    addAddress() {
      this.user.address = "NEFU";
    }
  },
  computed: {
    reverseMessage(): string {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    myDate(): string {
      return this.user.insertTime.replace("T", " ");
    },
    myReplace() {
      return (date: string) => date.replace("T", " ");
    }
  }
});
</script>
<style scoped>
h1 {
  color: red;
}
</style>
