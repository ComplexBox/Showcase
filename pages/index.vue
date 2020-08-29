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
        <transition appear name="fade" mode="out-in">
          <div class="question-box">
            <div class="text-field">
              <transition appear name="fade" mode="out-in">
                <div v-if="flag" key="data1">{{ data1.msg }}</div>
                <div v-else key="data2">{{ data2.msg }}</div>
              </transition>
            </div>
            <div class="extra-field"></div>
          </div>
        </transition>
        <transition appear name="fade" mode="out-in">
          <div v-if="flag ? data1.response : data2.response" class="answer-box">
            <div class="text-field">
              <transition appear name="fade" mode="out-in">
                <div v-if="flag" key="data1">{{ data1.response }}</div>
                <div v-else key="data2">{{ data2.response }}</div>
              </transition>
            </div>
            <div class="extra-field"></div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import core from '@/core/socket'

export default core
</script>

<style scoped></style>
