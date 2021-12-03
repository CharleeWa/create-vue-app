<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  mounted () {
    this.onload()
  },
  methods: {
    ...mapActions(['GetInfo']),
    onload () {
      const { GetInfo } = this
      GetInfo()
        .then((res) => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped></style>
