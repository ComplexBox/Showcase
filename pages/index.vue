<template>
  <div class="container">
    <div v-if="loading" class="flex-center flex-column">
      <div class="flex-center">
        <img src="@/assets/splash.png" style="width: 200px" />
      </div>
      <p>未能连接到主播端，请检查SimpleBox是否已经启动。</p>
    </div>
    <div v-else>
      <p>{{ msg }}</p>
      <p>{{ response }}</p>
    </div>
  </div>
</template>

<script>
import core from '@/core/socket'

export default core
</script>

<style></style>
