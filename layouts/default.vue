<template>
  <div>
    <app-header></app-header>
    <nuxt/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "~/components/Header.vue";
import AppFooter from "~/components/footer.vue";
export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
</style>
