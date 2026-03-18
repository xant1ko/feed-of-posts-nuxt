<template>
    <section class="container px-0 py-5">
        <h1 class="text-center mb-5">Добавить пост</h1>

        <div class="bg-post-primary p-5 rounded-4">
            <form>
                <div class="form-group">
                    <label>Никнейм</label>
                    <input v-model="dataToSend.user.login" class="form-control" placeholder="Введите имя">
                </div>
                <div class="form-group">
                    <label>Выберите иконку</label>
                    <select v-model="dataToSend.user.icon" class="form-control">
                        <option>:)</option>
                        <option>._.</option>
                        <option>:v</option>
                        <option>^-^</option>
                        <option>;)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Заголовок поста</label>
                    <input v-model="dataToSend.title" class="form-control" placeholder="Введите заголовок">
                </div>
                <div class="form-group">
                    <label>Подробное описание темы</label>
                    <textarea v-model="dataToSend.description" class="form-control" rows="3"
                        placeholder="Опишите тему"></textarea>
                </div>
                <button @click="sendData();" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { PostType } from '~/types/types';

// const router = useRouter()



const sendData = () => {
    usePostsStore().sendNewPost(dataToSend.value)
}


const dataToSend = ref<PostType>({
    user: {
        login: '',
        icon: '',
    },
    title: '',
    description: '',
    date: ''
})



</script>
