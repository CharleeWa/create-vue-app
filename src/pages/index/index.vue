<template>
  <div class="container">
    <div class="vue-logo">
      <img v-if="name" :src="logo" alt="logo">
    </div>

    <div v-if="name" class="user-info"> Welcome ~ {{ avatar }} {{ name }} </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      name: '',
      avatar: '',
      logo: require('@/assets/images/vue-logo.png')
    }
  },

  mounted () {
    this.onload()
  },

  methods: {
    ...mapActions(['GetInfo']),

    onload () {
      const { GetInfo } = this

      GetInfo().then((res) => {
        let { username, avatar } = res.result
        this.name = username
        this.avatar = avatar
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.vue-logo {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);

  & > img {
    width: 80px;
    height: 80px;
  }
}

.user-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 16px;
}
</style>
