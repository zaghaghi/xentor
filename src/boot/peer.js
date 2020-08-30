import Vue from 'vue'
import VuePeerJS from 'vue-peerjs'
import Peer from 'peerjs'

Vue.use(VuePeerJS, new Peer(undefined, {
  host: '/',
  path: '/peer',
  port: 3001,
  config: {
    iceServers: [
      { url: 'stun:call.inteliwar.com:5349' },
      { url: 'turn:call.inteliwar.com:5349', username: 'brucewayne', credential: '12345' }
    ]
  }
}))
