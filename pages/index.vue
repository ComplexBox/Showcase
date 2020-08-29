<template>
  <div class="container">
    <transition appear name="fade" mode="out-in">
      <div v-if="loading" key="loading" class="flex-center flex-column">
        <div class="flex-center">
          <img src="@/assets/splash.png" style="width: 200px" />
        </div>
        <p style="color: white">
          未能连接到主播端，请检查SimpleBox是否已经启动。
        </p>
      </div>
      <div v-else key="loaded" class="flex-center flex-column">
        <div class="question-box">
          <div class="text-field">
            <transition appear name="fade" mode="out-in">
              <div>
                {{ data.msg }}
              </div>
            </transition>
          </div>

          <div class="extra-field"></div>
        </div>
        <div v-if="data.response" class="answer-box">
          <div class="text-field">
            <transition appear name="fade" mode="out-in">
              <div>
                {{ data.response }}
              </div>
            </transition>
          </div>

          <div class="extra-field"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import core from '@/core/socket'

export default core
</script>

<style scoped></style>
