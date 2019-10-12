export default function install (Vue) {
  class ModalMask {
    constructor () {
      const options = { ...arguments[0] }
      const data = {
        visible: false,
        transparent: !!options.transparent,
        zIndex: options.zIndex || 1000
      }
      delete options.zIndex
      delete options.transparent
      const { components = {}, modalComponent } = options
      if (modalComponent) components['slot-modal'] = modalComponent
      delete options.components
      delete options.modalComponent

      return new Vue({
        components,
        data,
        computed: {
          maskStyle () {
            const style = {
              visibility: 'visible'
            }
            if (this.transparent) style.background = 'url("data:image/gif; base64,AAAA")'
            if (this.zIndex) style.zIndex = this.zIndex
            return style
          }
        },
        methods: {
          show (options = {}) {
            if (!this.$el && !this.$parent) {
              this.$mount()
              document.body.appendChild(this.$el)
            }
            const { zIndex, transparent } = options
            if (transparent) this.transparent = transparent
            if (zIndex) this.zIndex = zIndex
            if (this._delayShowTimer) {
              clearTimeout(this._delayShowTimer)
              delete this._delayShowTimer
            }
            this._delayShowTimer = setTimeout(() => {
              this.visible = true
            }, 10)
          },
          hide (event) {
            if (this._delayShowTimer) {
              clearTimeout(this._delayShowTimer)
              delete this._delayShowTimer
            }
            this.visible = false
          }
        },
        render (h) {
          return (
            this.visible
              ? (
                <div class="modal-mask" style={ this.maskStyle }>
                  {
                    this.$options.components['slot-modal']
                      ? <slot-modal></slot-modal>
                      : ''
                  }
                </div>
              )
              : ''
          )
        }
      })
    }
  }

  ModalMask._mask = new ModalMask()

  ModalMask.showMask = function (options) {
    this._mask.show(options)
  }

  ModalMask.hideMask = function (options) {
    this._mask.hide()
  }

  return ModalMask
}