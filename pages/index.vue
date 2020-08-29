<template>
  <div class="container">
    <div v-if="loading" class="flex-center flex-column">
      <div class="flex-center">
        <img src="@/assets/splash.png" style="width: 200px" />
      </div>
      <p style="color: white">
        未能连接到主播端，请检查SimpleBox是否已经启动。
      </p>
    </div>
    <div v-else class="flex-center flex-column">
      <div class="question-box">
        <div class="text-field">{{ data.msg }}</div>
        <div class="extra-field"></div>
      </div>
      <div v-if="data.response" class="answer-box">
        <div class="text-field">{{ data.response }}</div>
        <div class="extra-field"></div>
      </div>
    </div>
  </div>
</template>

<script>
import core from '@/core/socket'

export default core
</script>

<style scoped></style>
