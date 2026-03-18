<template>
    <section class="container px-0 py-5">
        <h1 class="text-center mb-5">Посты за 2 недели</h1>




        <div class="row justify-center">
            <button @click="$router.push('/posts/add')" class="btn bg-post-primary">
                Добавить пост
            </button>
        </div>


        <Post v-for="p in posts" :postData="p" />
    </section>
</template>


<script setup lang="ts">

const posts = usePostsStore().postsData

</script>
