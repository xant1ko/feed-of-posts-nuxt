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

<style>
.bg-post-header {
    background-color: rgb(12, 23, 122);
}



.bg-post-primary {
    background-color: rgb(184, 191, 255);
}

.bg-post-primary.btn:hover {
    background-color: rgb(107, 114, 172);
}

.icon {
    background-color: rgb(87, 87, 87);
    color: aliceblue;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.align-center {
    align-items: center;
}

h3 {
    width: fit-content !important;
    margin: 0;
}

.icon {
    width: fit-content;
}
</style>