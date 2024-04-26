<script setup>

</script>

<template>
    <footer class="bg-primary">
        <div class="container">
            <div class="flex flex-row-reverse justify-between pt-6 md:block md:pt-0">
                <div class="flex justify-between mb-6 md:items-center md:pt-12">
                    <nav class="hidden gap-12 md:flex">
                        <RouterLink
                            class="text-white hover:opacity-70"
                            to="/"
                        >首頁</RouterLink>
                        <RouterLink
                            class="text-white hover:opacity-70"
                            to="/optical"
                        >系列鏡框</RouterLink>
                        <RouterLink
                            class="text-white hover:opacity-70"
                            to="/store"
                        >門市據點</RouterLink>
                        <RouterLink
                            class="text-white hover:opacity-70"
                            to="/blog"
                        >部落格</RouterLink>
                        <RouterLink
                            class="text-white hover:opacity-70"
                            to="/faq"
                        >常見問題</RouterLink>
                    </nav>
                    <ul>
                        <li class="inline mr-2 md:mr-4 lg:mr-8">
                            <a
                                class="hover:opacity-70"
                                href="#"
                            >
                                <img
                                    class="inline w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                                    src="@/assets/images/ic-social-fb.png"
                                    alt="fb"
                                ></a>
                        </li>
                        <li class="inline mr-2 md:mr-4 lg:mr-8">
                            <a
                                class="hover:opacity-70"
                                href="#"
                            >
                                <img
                                    class="inline w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                                    src="@/assets/images/ic_social_ig.png"
                                    alt="ig"
                                ></a>
                        </li>
                        <li class="inline">
                            <a
                                class="hover:opacity-70"
                                href="#"
                            >
                                <img
                                    class="inline w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
                                    src="@/assets/images/ic_social_line.png"
                                    alt="line"
                                ></a>
                        </li>
                    </ul>
                </div>
                <ul class="mb-6 md:mb-8">
                    <li class="flex items-center hover:opacity-70 mb-2">
                        <span class="material-icons-outlined text-2xl text-white mr-4 md:text-5xl"> phone </span>
                        <a
                            class="text-white md:text-4xl"
                            href="tel:+0800-000-000"
                        >0800-000-000</a>
                    </li>
                    <li class="flex items-center hover:opacity-70">
                        <span class="material-icons-outlined text-2xl text-white mr-4 md:text-5xl"> email </span>
                        <a
                            class="text-white md:text-4xl"
                            href="mailto:glasses@business.com"
                        >glasses@business.com</a>
                    </li>
                </ul>
            </div>
            <div class="justify-between items-center border-t border-white pt-4 pb-6 md:flex md:py-8">
                <p class="text-white mb-2 md:mb-0">
                    Copyright © 2020 Glasses.All rights reserved.
                </p>
                <ul class="gap-12 md:flex">
                    <li class="text-white  hover:opacity-70 mb-2 md:text-sm md:mb-0"><a href="#">隱私權政策</a></li>
                    <li class="text-white  hover:opacity-70 mb-2 md:text-sm md:mb-0"><a href="#">服務條款</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
