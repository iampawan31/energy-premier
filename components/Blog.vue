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
          <div class="blog-post" >
            <h2>{{post.title}}</h2>
            <img v-bind:src="post.image_url" alt="" class="img-responsive">
            <p class="blog-in" v-html="textString(post.content) + '...'"></p>
            <p>
              <router-link :to="{ name: 'post', params: { slug: post.slug}}">Continue reading...</router-link>
            </p>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BlogPostsApi from '../services/api/BlogPostsApi'
export default{
  name: 'Blog',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    textString: function (string) {
      return string.substr(0, 600)
    }
  },
  created () {
    var self = this
    BlogPostsApi.getPosts()
      .then(posts => {
        self.posts = posts
      })
  }
}
</script>
