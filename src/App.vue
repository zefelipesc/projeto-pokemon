
<script>
// importa a sidebar e retorna no setup
import Sidebar from "./components/sidebar/Sidebar.vue";
import { sidebarWidth } from "./components/sidebar/State";

export default {
  components: { Sidebar },

  setup() {
    return { sidebarWidth };
  },
};
</script>


<template>
  <Sidebar />
  <!--aqui define o tamanho da margem esquerda, isso vai garantir a largura que a page deve usar-->
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>

  <div class="container">
    <h1></h1>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme");
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);
  background: radial-gradient(#d1c167, #0a2e50);
  font-family: "Acme", arial;
  font-size: 1.5rem;
  font-weight: normal;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>