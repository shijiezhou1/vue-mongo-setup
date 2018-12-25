<template>
  <div class="containter">
    <div>
      <h1> Latest Posts </h1>
      <!-- Create Post Here -->
      <div class="create-post">
        <label for="create-post" class="">say something</label>
        <input type="text" id="create-post" v-model="text" placeholder="Create a Post" />
        <button v-on:click="createPost">Post!</button>
      </div>

      <hr>
      <p class="error" v-if="error">{{ error }}</p>
      <div class="post-container">
          <div class="post"
            v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post._id"
            v-on:dblclick="deletePost(post._id)"
          >
          {{ `${post.createdAt.getDate() } / ${post.createdAt.getMonth() } /
          ${post.createdAt.getFullYear() } ` }} 
          <p class="text">{{ post.text }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';
import { map } from 'async';

export default {
  name: 'PostComponent',
  data() { 
    return { 
      posts: [],
      error: '',
      text: ''
    }
  },
  async created(){
    try {
      this.posts = await PostService.getPosts();
    } catch (error) {
      this.error = error.message;      
    }
  },
  //custom method
  methods: {
    async createPost(){
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      console.log('success');
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-container{
  background-color: aquamarine;
}
</style>
