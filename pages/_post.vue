<template>
  <section>
    <div>
      <vue-headful :title="post.title" :image="post.image_url" :url="url" />
    </div>
    <div class="blog-upper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p>
              <router-link to="/">Blog</router-link>
              > {{ post.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container blog">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="blog-post">
            <h2>{{ post.title }}</h2>
            <p class="posted">Posted on
              <span>{{ dateCreated(post.created_at) }}</span>
            </p>
            <img v-bind:src="post.image_url" alt="" class="img-responsive">
            <p v-html="post.content"></p>
            <div class="sharethis-inline-share-buttons st-left st-has-labels  st-inline-share-buttons st-animated" id="st-1">
              <div class="st-btn st-first" data-network="facebook" style="display: inline-block;">
                <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                  <g>
                    <path d="m21.7 16.7h5v5h-5v11.6h-5v-11.6h-5v-5h5v-2.1c0-2 0.6-4.5 1.8-5.9 1.3-1.3 2.8-2 4.7-2h3.5v5h-3.5c-0.9 0-1.5 0.6-1.5 1.5v3.5z"></path>
                  </g>
                </svg>
                <span class="st-label">Share</span>
              </div>
              <div class="st-btn" data-network="twitter" style="display: inline-block;">
                <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                  <g>
                    <path d="m31.5 11.7c1.3-0.8 2.2-2 2.7-3.4-1.4 0.7-2.7 1.2-4 1.4-1.1-1.2-2.6-1.9-4.4-1.9-1.7 0-3.2 0.6-4.4 1.8-1.2 1.2-1.8 2.7-1.8 4.4 0 0.5 0.1 0.9 0.2 1.3-5.1-0.1-9.4-2.3-12.7-6.4-0.6 1-0.9 2.1-0.9 3.1 0 2.2 1 3.9 2.8 5.2-1.1-0.1-2-0.4-2.8-0.8 0 1.5 0.5 2.8 1.4 4 0.9 1.1 2.1 1.8 3.5 2.1-0.5 0.1-1 0.2-1.6 0.2-0.5 0-0.9 0-1.1-0.1 0.4 1.2 1.1 2.3 2.1 3 1.1 0.8 2.3 1.2 3.6 1.3-2.2 1.7-4.7 2.6-7.6 2.6-0.7 0-1.2 0-1.5-0.1 2.8 1.9 6 2.8 9.5 2.8 3.5 0 6.7-0.9 9.4-2.7 2.8-1.8 4.8-4.1 6.1-6.7 1.3-2.6 1.9-5.3 1.9-8.1v-0.8c1.3-0.9 2.3-2 3.1-3.2-1.1 0.5-2.3 0.8-3.5 1z"></path>
                  </g>
                </svg>
                <span class="st-label">Tweet</span>
              </div>
              <div class="st-btn" data-network="pinterest" style="display: inline-block;">
                <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                  <g>
                    <path d="m37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3q-2.4 0-4.8-0.7 1.3-2 1.7-3.6 0.2-0.8 1.2-4.7 0.5 0.8 1.7 1.5t2.5 0.6q2.7 0 4.8-1.5t3.3-4.2 1.2-6.1q0-2.5-1.4-4.7t-3.8-3.7-5.7-1.4q-2.4 0-4.4 0.7t-3.4 1.7-2.5 2.4-1.5 2.9-0.4 3q0 2.4 0.8 4.1t2.7 2.5q0.6 0.3 0.8-0.5 0.1-0.1 0.2-0.6t0.2-0.7q0.1-0.5-0.3-1-1.1-1.3-1.1-3.3 0-3.4 2.3-5.8t6.1-2.5q3.4 0 5.3 1.9t1.9 4.7q0 3.8-1.6 6.5t-3.9 2.6q-1.3 0-2.2-0.9t-0.5-2.4q0.2-0.8 0.6-2.1t0.7-2.3 0.2-1.6q0-1.2-0.6-1.9t-1.7-0.7q-1.4 0-2.3 1.2t-1 3.2q0 1.6 0.6 2.7l-2.2 9.4q-0.4 1.5-0.3 3.9-4.6-2-7.5-6.3t-2.8-9.4q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path>
                  </g>
                </svg>
                <span class="st-label">Pin</span>
              </div>
              <div class="st-btn" data-network="email" style="display: inline-block;">
                <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                  <g>
                    <path d="m33.4 13.4v-3.4l-13.4 8.4-13.4-8.4v3.4l13.4 8.2z m0-6.8q1.3 0 2.3 1.1t0.9 2.3v20q0 1.3-0.9 2.3t-2.3 1.1h-26.8q-1.3 0-2.3-1.1t-0.9-2.3v-20q0-1.3 0.9-2.3t2.3-1.1h26.8z"></path>
                  </g>
                </svg>
                <span class="st-label">Email</span>
              </div>
              <div class="st-btn st-last" data-network="sharethis" style="display: inline-block;">
                <svg fill="#fff" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                  <g>
                    <path d="m30 26.8c2.7 0 4.8 2.2 4.8 4.8s-2.1 5-4.8 5-4.8-2.3-4.8-5c0-0.3 0-0.7 0-1.1l-11.8-6.8c-0.9 0.8-2.1 1.3-3.4 1.3-2.7 0-5-2.3-5-5s2.3-5 5-5c1.3 0 2.5 0.5 3.4 1.3l11.8-6.8c-0.1-0.4-0.2-0.8-0.2-1.1 0-2.8 2.3-5 5-5s5 2.2 5 5-2.3 5-5 5c-1.3 0-2.5-0.6-3.4-1.4l-11.8 6.8c0.1 0.4 0.2 0.8 0.2 1.2s-0.1 0.8-0.2 1.2l11.9 6.8c0.9-0.7 2.1-1.2 3.3-1.2z"></path>
                  </g>
                </svg>
                <span class="st-label">Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  methods: {
    dateCreated: function(date) {
      return moment(date).format("MMMM DD, YYYY");
      // return format(new Date(date), "MMMM DD, YYYY");
    }
  },
  computed: {
    post() {
      return this.$store.getters.GET_POST;
    }
  },
  fetch({ store, params, app }) {
    return app.$axios
      .get(
        "http://admin.inspironsolutions.com/api/posts/energyPremier/" +
          params.post
      )
      .then(res => {
        store.commit("SET_POST", res.data);
      });
  }
};
</script>

<style>
</style>
