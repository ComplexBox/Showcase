export default {
  head: {
    title: 'SimpleBox Showcase',
  },
  data() {
    return {
      socket: null,
      data: {
        msg: '',
        response: '',
      },
      loading: true,
    }
  },
  mounted() {
    if (this.socket) this.socket.close()
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
      this.loading = false
      this.socket.send('heart')
    },
    socketOnError() {
      this.loading = true
      this.socketInitialize()
    },
    socketOnMessage(e) {
      this.loading = false
      const raw = e.data
      const socketMsg = JSON.parse(raw)
      const data = socketMsg.data
      const type = socketMsg.type
      switch (type) {
        case 'heart':
          this.socket.send('heart')
          break
        case 'msg':
          if (data) this.data = data
          break
      }
    },
  },
}
