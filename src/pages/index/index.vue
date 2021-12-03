<template>
  <div class="container">
    <div class="user-info"> Hello! {{ avatar }} - {{ name }} </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      name: '',
      avatar: ''
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
        let { name, avatar } = res.result
        this.name = name
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

.user-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 13px;
}
</style>
