<template>
  <q-toolbar>
    <q-space />
    <q-btn v-show="!recording" flat icon="present_to_all" label="Share Screen" @click="startShare()" />
    <q-btn v-show="recording" flat icon="present_to_all" label="Stop Sharing" @click="stopShare()" />
    <!-- <q-btn flat icon="mic_off" label="Stop Mic" /> -->
    <q-space />
  </q-toolbar>
</template>

<script>
export default {
  name: 'ActionToolbar',
  data () {
    return {
      recording: false,
      audioStream: null,
      videoStream: null
    }
  },
  methods: {
    async startShare (event) {
      await this.buildStreams()
    },
    stopShare (event) {
      this.stopTracks(this.audioStream)
      this.stopTracks(this.videoStream)
      this.audioStream = null
      this.videoStream = null
      this.recording = false
      this.$root.$emit('stream-stopped')
    },
    stopTracks (stream) {
      if (!stream) {
        return
      }
      stream.getTracks().forEach((track) => {
        if (track.readyState === 'live') {
          track.stop()
        }
      })
    },
    async buildStreams () {
      try {
        this.audioStream = await navigator.mediaDevices.getUserMedia({ audio: true })
      } catch (error) {
        console.log('Can\'t get audio stream')
      }
      try {
        this.videoStream = await navigator.mediaDevices.getDisplayMedia({ video: true })
      } catch (error) {
        console.log('Can\'t get screen stream')
      }
      if (!this.audioStream || !this.videoStream) {
        this.stopShare()
        return
      }
      this.recording = true
      console.log(this.audioStream)
      console.log(this.videoStream)
      window.audioStream = this.audioStream
      window.videoStream = this.videoStream
      this.$root.$emit('stream-ready', this.audioStream, this.videoStream)
    }
  }
}
</script>
