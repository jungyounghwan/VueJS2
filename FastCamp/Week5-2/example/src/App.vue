<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card>
            <form-helper 
              title="로그인하기" 
              success-button-name="로그인"
              @submit="login"> 

              <h5>이메일을 입력해주세요.</h5>
              <b-form-input
                name="email"
                v-model="email"
                type="text"
                v-validate="'required|email'" 
                :state="errors.has('email') ? 'invalid' : null"
                placeholder="이메일"></b-form-input>
              <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>

              <br>

              <h5>비밀번호를 입력해주세요.</h5>
              <b-form-input v-model="password"
                type="password"
                placeholder="패스워드"></b-form-input>

              <br>
            </form-helper>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import FormHelper from './components/FormHelper'

  export default {
    name: 'app',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$validator.validateAll()
        if (!this.errors.any()) {
          alert('로그인 성공!')
        } else {
          alert('로그인 실패!')
        }
      }
    },
    components: {
      FormHelper
    }
  }
</script>

<style>
</style>
