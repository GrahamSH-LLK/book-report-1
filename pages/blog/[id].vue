<template>
  <div>
    <div v-if="!error">
    <h1 class="font-black text-4xl">{{ title }}</h1>
    <article class="prose" v-html="html"></article>
    </div>
    <div v-else>
      404
    </div>
  </div>
</template>
<script>
export default {
  async setup(props, ctx) {
    const $route = useRoute();
    const { id } = $route.params;
    let data = await $fetch(`/api/blog/${id}`);
    if (data.error) return {error: true}
    return { html: data.html, title: data.data.title, error: false };
  },
};
</script>
