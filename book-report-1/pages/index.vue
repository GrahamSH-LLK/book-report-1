<template>
  <div>
    <div class="hero py-16">
      <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="col-span-6">
            <h1
              class="
                font-bold
                text-4xl
                md:text-5xl
                max-w-xl
                text-gray-900
                leading-tight
              "
            >
              Hi, I'm Skylar
            </h1>
            <hr class="w-12 h-1 bg-green-600 rounded-full mt-8" />
            <p
              class="text-gray-800 text-2xl leading-relaxed mt-8 font-semibold"
            >
            I'm a blogger based out of Florida
            </p>
            <div class="flex">
            <nuxt-link to="/blog" class="bg-green-400 rounded-md p-5 mr-2">Read my blog</nuxt-link>
            <nuxt-link to="/about" class="bg-green-400 rounded-md p-5 mx-2">About me</nuxt-link>
            </div>
          </div>
          <div class="col-span-6">
            <!--<img src="/logo.svg" height="300px" width="300px" />-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
