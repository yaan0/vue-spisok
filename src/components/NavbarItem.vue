<template>
  <div class="navbar">
    <div style="cursor: pointer" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/PostPage')">Посты</MyButton>
      <MyButton style="margin-left: 20px" @click="$router.push('/AboutPage')"
        >О сайте</MyButton
      >

      <MyButton style="margin-left: 20px" @click="$router.push('/store')"
        >Store</MyButton
      >
    </div>
  </div>
</template>
<script></script>
<style>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
