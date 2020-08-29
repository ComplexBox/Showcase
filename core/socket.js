export default {
  head: {
    title: 'SimpleBox Showcase',
  },
  data() {
    return {
      socket: null,
      msg: '',
      response: '',
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
      this.socket = new WebSocket('ws://127.0.0.1:19101/socket')
      this.socket.onmessage = this.socketOnMessage
      this.socket.onopen = this.socketOnOpen
      this.socket.onerror = this.socketOnError
    },
    socketOnOpen() {
      this.socket.send('heart')
    },
    socketOnError() {
      this.socketInitialize()
    },
    socketOnMessage(e) {
      const raw = e.data
      const socketMsg = JSON.parse(raw)
      const data = socketMsg.data
      const type = socketMsg.type
      switch (type) {
        case 'heart':
          this.socket.send('heart')
          break
        case 'msg':
          this.processMsg(data)
          break
      }
    },
    processMsg(data) {
      if (!data) return
      this.msg = data.msg
      this.response = data.response
    },
  },
}
