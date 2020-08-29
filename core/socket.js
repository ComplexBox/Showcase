export default {
  head: {
    title: 'SimpleBox Showcase',
  },
  data() {
    return {
      socket: null,
      data1: {
        msg: '',
        response: '',
      },
      data2: {
        msg: '',
        response: '',
      },
      flag: false,
      loading: true,
    }
  },
  mounted() {
    this.socketInitialize()
  },
  destroyed() {
    this.socket.close()
  },
  methods: {
    socketInitialize() {
      const ReconnectingWebSocket = require('reconnectingwebsocket')
      if (this.socket) this.socket.close()
      this.socket = new ReconnectingWebSocket('ws://127.0.0.1:19101/socket')
      this.socket.onclose = this.socketOnErrorOrClose
      this.socket.onmessage = this.socketOnMessage
      this.socket.onopen = this.socketOnOpen
      this.socket.onerror = this.socketOnErrorOrClose
    },
    socketOnOpen() {
      this.loading = false
      this.socket.send('heart')
    },
    socketOnErrorOrClose() {
      this.loading = true
    },
    socketOnMessage(e) {
      this.loading = false
      const raw = e.data
      const socketMsg = JSON.parse(raw)
      const data = socketMsg.data
      const type = socketMsg.type
      switch (type) {
        case 'msg':
          if (data) {
            if (this.flag) this.data2 = data
            else this.data1 = data
            this.flag = !this.flag
          }
          break
      }
    },
  },
}
