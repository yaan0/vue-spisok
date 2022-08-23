<template lang="">
  <NavbarItem></NavbarItem>
  <div class="app">
    <router-view> </router-view>
  </div>
</template>
<script>
import NavbarItem from "@/components/NavbarItem.vue";
export default {
  components: {
    NavbarItem,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
