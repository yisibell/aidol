<template>
  <el-button v-if="type==='btn'" size="mini" type="info" @click="link">{{ text }} <svg-icon v-if="passcode" icon-class="lock" /></el-button>
  <h4 v-else class="f-16 cursor-pointer" @click="link">{{ text }}</h4>
</template>

<script>
export default {
  name: 'LinkToPost',
  props: {
    type: {
      type: String,
      default: 'btn'
    },
    text: {
      type: String,
      default: '阅读全文'
    },
    path: {
      type: String,
      default: ''
    },
    passcode: {
      type: [String, Number, undefined],
      default: undefined
    }
  },
  data() {
    return {}
  },
  computed: {
    themeConfig() {
      return this.$site.themeConfig
    },
    passcodeLock() {
      return this.themeConfig.passcode
    }
  },
  methods: {
    link() {
      const passcode = this.passcode
      const path = this.path

      if (!passcode) return this.$router.push({ path })
      this.$layer.prompt(this.passcodeLock.tips_text, { inputType: 'text' }).then(code => {
        if (code === passcode.toString()) {
          this.$router.push({ path })
          return
        }
        this.$layer.notify(this.passcodeLock.error_text, { type: 'error' })
      })
    }
  }
}
</script>