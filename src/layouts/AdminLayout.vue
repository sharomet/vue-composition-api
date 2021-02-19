<template>
  <div class="admin-content">
    <Header />
    <LeftSidebar />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .admin-content {
    display: grid;
    min-height: 100vh;
    grid-template-areas: "header header" "left-sidebar main";
    grid-template-rows: max-content 1fr;
    grid-template-columns: 220px 1fr;
  }
  .main {
    grid-area: main;
  }
</style>

<script>
import Header from '@/components/partials/header/Header'
import LeftSidebar from '@/components/partials/leftSidebar/LeftSidebar'

export default {
  components: {
    Header,
    LeftSidebar
  }
}
</script>