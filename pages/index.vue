<template>
  <section>
    <div class="blog-upper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Welcome in our blog</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container blog">
      <div class="row">
        <div class="box col-md-8 offset-md-2" v-for="post in posts" v-bind:key="post.id">
          <div class="blog-post">
            <h2>{{post.title}}</h2>
            <img v-bind:src="post.image_url" alt="" class="img-responsive">
            <p class="blog-in" v-html="textString(post.content) + '...'"></p>
            <p>
              <nuxt-link :to="'/' + post.slug">Continue reading...</nuxt-link>
            </p>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.getters.GET_POSTS;
    }
  },
  methods: {
    textString(string) {
      return string.substr(0, 600);
    }
  },
  created() {}
};
</script>

<style>
</style>
