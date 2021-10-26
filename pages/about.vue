<template>
  <div>
    <h1 class="text-4xl font-black">Who am I?</h1>
    <article class="prose">
      I'm Skylar Reid. I love babysitting (mostly this little girl Sasha). My
      best friend is Calvin, who I'm still convincing to make a website. When I do, I'll put it here.
      <button v-show="!open" @click="readMore">Read more</button>
      <div v-show="open">
        Since you know the code, I'm assuming you're also a Greater Than. I am
        also a Greater Than, and I'm trying to save the girl I was just talking
        about, Sasha. I only recently learned that I'm a Greater Than. 
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return { open: false };
  },
  methods: {
    readMore() {
      if (localStorage.correct) {
        this.open = true;
        return;
      }
      let correct = prompt("Enter the passcode.") == "greaterThan21";
      if (correct) {
        localStorage.correct = "true";
      }
      this.open = correct;
    },
  },
};
</script>

<style></style>
