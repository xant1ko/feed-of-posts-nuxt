<template>
    <div class="my-5 row">
        <div class="row align-center py-2 px-4 bg-post-header rounded-top-4">
            <div class="text-white row align-center p-0 m-0 col">
                <div class="icon">{{ postData.user.icon }}</div>
                <h3>{{ postData.user.login }}</h3>
            </div>
            <div class="col p-0 m-0">
                <p class="text-end text-grey m-0">{{ postData.date }}</p>
            </div>
        </div>
        <div class="row container bg-post-primary px-4  rounded-bottom-4 py-2">
            <h2>{{ postData.title }}</h2>
            <p>{{ postData.description }}</p>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { PostType } from '~/types/types';



defineProps<{
    postData: PostType
}>()


</script>