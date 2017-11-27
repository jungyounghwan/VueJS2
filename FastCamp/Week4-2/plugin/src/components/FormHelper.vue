<template>
  <b-form>
    <h2>{{ title }}</h2>
    <slot></slot>
    <b-button v-if="buttonName" @click.prevent="$emit('submit')">{{ buttonName }}</b-button>
  </b-form>
</template>

<script>
  export default {
    props: ['title', 'buttonName']
  }
</script>
