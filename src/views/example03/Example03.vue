<template>
  <div>
    <h1>Vuex</h1>
    <h2>State</h2>
    <p>1.直接通过$store.state获取state中数据</p>
    {{ $store.state.user.name }} / {{ $store.state.user.address }}
    <p>2.通过useStore()函数在组件setup()函数中获取store对象，再获取state对象</p>
    {{ userS.name }} / {{ userS.address }}
    <p>3.基于vuex的mapState辅助函数及对象扩展符，声明绑定组件计算属性</p>
    {{ user.name }} / {{ user.address }}
    <hr />
    <h2>Mutations</h2>
    <p>
      修改名称：
      <input type="text" v-model="myUser.name" />
      <br />
      修改地址：
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="updateUser">update</button>
    </p>
  </div>
</template>
<script lang="ts">
import { User } from "@/datasource/Types";
import { State } from "@/store";
import { computed, defineComponent, ref } from "vue";
import { mapState, Store, useStore } from "vuex";
import { UPDATE_USER } from "@/store/VuexTypes";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const userS = computed(() => store.state.user);
    // 创建一个响应式对象用于双向绑定
    const myUser = ref<User>({});
    // 执行updateUser()函数时，从双向绑定的响应式对象中获取值
    // 而非直接传递myUser响应式对象
    const updateUser = () => {
      store.commit(UPDATE_USER, {
        name: myUser.value.name,
        address: myUser.value.address
      } as User);
    };
    return {
      userS,
      myUser,
      updateUser
    };
  },
  computed: {
    ...mapState(["user"])
  }
});
</script>
<style scoped>
h1 {
  color: red;
}
</style>
