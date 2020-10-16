<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import vertex from 'static/glsl/sampleVertexShader.glsl'
import fragment from 'static/glsl/sampleFragmentShader.glsl'

export default {
  data() {
    return {}
  },
  mounted() {
    this.init()
    this.setup()

    // 最初の一回はmounted()で実行する（requestAnimationFrameを添えて）
    requestAnimationFrame(() => {
      this.animate()
    })
  },
  methods: {
    init() {
      this.scene = null
      this.camera = null
      this.renderer = null
      this.canvas = null
      this.mesh = null
      this.geometry = null
      this.material = null
    },
    setup() {
      // canvasを取得
      this.canvas = this.$refs.canvas

      // sceneを追加
      this.scene = new THREE.Scene()

      // cameraを追加
      this.WIDTH = window.innerWidth
      this.HEIGHT = window.innerHeight
      this.camera = new THREE.PerspectiveCamera(
        75, // 画角
        this.WIDTH / this.HEIGHT, // アスペクト比
        1, // near
        1000 // far
      )

      // rendererを追加
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
      })

      // rendererのサイズやPixelRatioを設定
      this.renderer.setSize(this.WIDTH, this.HEIGHT)
      this.renderer.setPixelRatio(window.devicePixelRatio)

      // geometryを追加
      this.geometry = new THREE.BoxBufferGeometry(
        3, // 幅
        3, // 高さ
        3 // 奥行き
      )

      // materialを追加
      this.material = new THREE.RawShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
      })

      // meshを追加
      this.mesh = new THREE.Mesh(this.geometry, this.material)

      // sceneにmeshを追加
      this.scene.add(this.mesh)

      // sceneにcameraを追加
      this.scene.add(this.camera)

      // cameraの位置を調整
      this.camera.position.z = 10

      // setup()内でのrenderは一旦削除
      // this.renderer.render(this.scene, this.camera)
    },
    animate() {
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.01
      this.mesh.rotation.z += 0.01

      // renderを実行
      this.renderer.render(this.scene, this.camera)

      // animateを自分自身で実行する
      requestAnimationFrame(() => {
        this.animate()
      })
    },
  },
}
</script>
