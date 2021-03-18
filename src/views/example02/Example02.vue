<template>
  <div>
    <h1>Ref</h1>
    <p>创建响应式对象</p>
    {{ userRef?.name }} / {{ userRef?.insertTime }} / {{ userRef?.address }}
    <br />
    <button type="button" @click="changeUserRef">changeUserRef</button>
    <br />
    <p>修改对象属性</p>
    {{ userRef?.insertTime }}
    <br />
    {{ userComputed }}
    <hr />
    <h1>Composition</h1>
    <p>分离独立的逻辑函数</p>
    {{ formatDateFunc(userRef.insertTime) }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, Ref } from "vue";
import { User } from "@/datasource/Types";
function useUser(user: Ref<User>) {
  const formatDateFunc = computed(() => (data: string) =>
    data.replace("T", " ")
  );
  const changeAddress = () => {
    user.value.address = "NEFU";
  };
  return {
    formatDateFunc,
    changeAddress
  };
}
export default defineComponent({
  setup() {
    const user: User = {
      name: "An",
      insertTime: "2021-03-18T15:55:25"
    };
    const userAsync: User = {
      name: "Gao",
      insertTime: "2021-03-18T16:02:12",
      address: "NEFU"
    };
    const userRef = ref(user);
    const changeUserRef = () => {
      setTimeout(() => {
        userRef.value = userAsync;
      }, 1000);
    };
    const userComputed = computed(() =>
      userRef.value.insertTime?.replace("T", " ")
    );
    const { formatDateFunc, changeAddress } = useUser(userRef);
    return {
      user,
      userRef,
      changeUserRef,
      userComputed,
      formatDateFunc,
      changeAddress
    };
  }
});
</script>
<style scoped>
h1 {
  color: red;
}
</style>
