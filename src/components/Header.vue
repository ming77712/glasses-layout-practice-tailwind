<script setup>

</script>

<template>
    <header class="bg-primary">
        <div class="justify-between items-center md:container md:flex md:py-4">
            <div class="p-4 md:p-0">
                <RouterLink
                    class="block w-20 h-[48.57px] bg-[url('@/assets/images/logo-white.png')] bg-cover"
                    to="/"
                ></RouterLink>
            </div>
            <nav class="grid grid-cols-2 md:flex md:gap-16">
                <RouterLink
                    class="text-white text-center border hover:opacity-70 py-3 md:text-xl md:border-0 md:py-2"
                    to="/optical"
                >系列鏡框</RouterLink>
                <RouterLink
                    class="text-white text-center border hover:opacity-70 py-3 md:text-xl md:border-0 md:py-2"
                    to="/store"
                >門市據點</RouterLink>
                <RouterLink
                    class="text-white text-center border hover:opacity-70 py-3 md:text-xl md:border-0 md:py-2"
                    to="/blog"
                >部落格</RouterLink>
                <RouterLink
                    class="text-white text-center border hover:opacity-70 py-3 md:text-xl md:border-0 md:py-2"
                    to="/faq"
                >常見問題</RouterLink>
            </nav>
        </div>
    </header>
</template>
