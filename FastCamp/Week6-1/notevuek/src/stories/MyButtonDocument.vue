<template>
  <div>
    <my-button>My Button!</my-button>

    <h1>My Button</h1>
    <p>
      MyButton Component is awesome button!!
    </p>
  </div>
</template>

<script>
  import MyButton from "@/stories/MyButton";

  export default {
    name: 'MyButtonDocument',
    component: {
      MyButton
    }
  }
</script>
