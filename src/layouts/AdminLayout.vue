<template>
  <Header />
  <main class="main">
    <router-view />
  </main>
</template>

<script>
import Header from '@/components/partials/header/Header'

export default {
  components: {
    Header
  }
}
</script>