import axios from 'axios'

const allColors = [
  '#ef5350', '#ec407a', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#29b6f6', '#26c6da', '#26a69a', '#66bb6a', '#9ccc65', '#d4e157', '#ffee58', '#ffca28', '#ffa726', '#ff7043', '#8d6e63', '#bdbdbd', '#78909c', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#e53935', '#d81b60', '#8e24aa', '#5e35b1', '#3949ab', '#1e88e5', '#039be5', '#00acc1', '#00897b', '#43a047', '#7cb342', '#c0ca33', '#fdd835', '#ffb300', '#fb8c00', '#f4511e', '#6d4c41', '#757575', '#546e7a', '#d32f2f', '#c2185b', '#7b1fa2', '#512da8', '#303f9f', '#1976d2', '#0288d1', '#0097a7', '#00796b', '#388e3c', '#689f38', '#afb42b', '#fbc02d', '#ffa000', '#f57c00', '#e64a19', '#5d4037', '#616161', '#455a64', '#c62828', '#ad1457', '#6a1b9a', '#4527a0', '#283593', '#1565c0', '#0277bd', '#00838f', '#00695c', '#2e7d32', '#558b2f', '#9e9d24', '#f9a825', '#ff8f00', '#ef6c00', '#d84315', '#4e342e', '#424242', '#37474f', '#b71c1c', '#880e4f', '#4a148c', '#311b92', '#1a237e', '#0d47a1', '#01579b', '#006064', '#004d40', '#1b5e20', '#33691e', '#827717', '#f57f17', '#ff6f00', '#e65100', '#bf360c', '#3e2723', '#212121', '#263238'
]


async function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s * 1000))
}

class AxiosOver {
  constructor(vue_ctxt, announce_errors, announce_400s){
    this.vue_ctxt = vue_ctxt
    this.announce_errors = announce_errors
    this.announce_400s = announce_400s
  }
}
['get', 'post', 'put', 'patch', 'delete'].forEach(method => {
  AxiosOver.prototype[method] = async function (url, opts={}, headers=null) {
    let query = opts.query
    let data = opts.data
    let params = query
    data = data ? JSON.stringify(data) : ""
    let axios_data = {
      url,
      method,
      headers,
      data,
      params,
      withCredentials: true
    }
    if(headers){
      axios_data['headers'] = headers
    }
    try {
      let resp = await axios(axios_data)
      if (resp.status >= 400 && this.announce_400s){
        let statusText = resp.data.detail
        this.vue_ctxt.error(statusText)
      }
      return resp
    } 
    catch (e) {
      let statusText = e.response.data.detail || e.response.statusText
      let status = e.response.status
      if (status >= 400 && this.announce_400s){
        this.vue_ctxt.error(statusText)
      }
      else if (status >= 500 && this.announce_errors) {
        this.vue_ctxt.error(statusText)
      }
      return {
        status,
        statusText: statusText,
        source: e
      }
    }
  }
})

export default {
  data(){
    return {
      axios_inst: new AxiosOver(this, true, false)
    }
  },
  methods: {
      sleep,
      *dealColors(max_len = 0, skip = 0){
        let L = 0
        const seq_len = allColors.length
        if(max_len > seq_len){
          throw Error("requested color sequence larger than the sequence itself!")
        }
        let color_repo = allColors.slice(skip)
        while (true) {
          yield color_repo[L]
          L += 1
          if (max_len && L === max_len) {
            break
          }
          if (L >= seq_len) {
            L = 0
          }
        }
    },
    showToast(msg, options) {
      this.$toasted.show(msg, options)
    },
    error(msg) {
      this.$toasted.error(msg)
    },
    success(msg) {
      this.$toasted.success(msg)
    },
    info(msg) {
      this.$toasted.info(msg, {icon: 'fa-info'})
    },
    question(msg, callback=() => {}) {
      this.$toasted.show(msg, {
        duration: 20000,
        action: {
          text: 'Cancel',
          onClick: (e, toastObject) => {
            toastObject.goAway(0)
          }
        }
      })
    }
  }
}