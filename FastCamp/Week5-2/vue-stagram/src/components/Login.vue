<template>
  <div>
    <md-button class="md-raised md-primary" href="https://www.instagram.com/oauth/authorize/?client_id=5c264c60bffd40dcb6dcf062ce5fd805&redirect_uri=http://localhost:8080&response_type=token&scope=public_content">
      인스타그램 로그인
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>
