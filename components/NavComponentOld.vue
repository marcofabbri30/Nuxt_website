<template>
    <div class="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <nav class="block w-full max-w-screen-2xl rounded-xl bg-transparent text-white shadow-none p-3">
        <div class="container mx-auto flex items-center justify-between text-white">
            <NuxtLink to="/">
            <p class="block antialiased font-sans text-base leading-relaxed text-inherit mr-4 ml-2 cursor-pointer py-1.5 font-bold">Marco Fabbri - Software Engineer</p>
            </NuxtLink>
        </div>
        <div class="hidden lg:block">
            <ul class="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li class="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize">
                <NuxtLink to="/" >              
                Home
                </NuxtLink>
            </li>
            </ul>
        </div>
        </nav>
    </div>
</template>
