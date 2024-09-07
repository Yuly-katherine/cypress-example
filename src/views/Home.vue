<template>
  <h1>Post List</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="{name: 'detail', params: {id: post.id}}">{{ post.title }}</RouterLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
// imports
import PostService from '@/services/PostService';
import { onMounted } from 'vue'
import IPost from '@/interfaces/IPost';

const postService = new PostService();
const posts = postService.getPosts()

onMounted (async () => {
  await postService.fetchAll()

})


</script>

