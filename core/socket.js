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
      if (this.socket) this.socket.close()
      this.socket = new WebSocket('ws://127.0.0.1:19101/socket')
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
      if (this.socket) this.socket.close()
      setInterval(this.socketInitialize.bind(this), 2000)
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
