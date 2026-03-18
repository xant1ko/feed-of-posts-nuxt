<template>

    <header>
        <ul>
            <li>
                <NuxtLink to="posts">Посты</NuxtLink>
            </li>
        </ul>
    </header>
    <slot></slot>


</template>

<style>
header {
    background-color: rgb(0, 9, 92);
    font-size: xx-large;
    padding: 20px;
}

header li {
    margin: 0%;
    color: rgb(255, 255, 255);
}

header ul {
    margin: 0%;
    display: flex;
}
</style>