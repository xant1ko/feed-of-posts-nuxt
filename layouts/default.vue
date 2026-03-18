<template>
    <header>
        <ul>
            <li>
                <RouterLink to="/posts">Посты</RouterLink>
            </li>
        </ul>
    </header>
    <main>

        <slot></slot>


    </main>

    <footer>
        <p class="text-center text-white m-0">Все права защищены</p>
    </footer>
</template>

<style>
main {
    background-color: rgb(216, 219, 255);
    min-height: 100vh;
}

footer {
    background-color: rgb(0, 9, 92);

    padding: 20px;

}

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