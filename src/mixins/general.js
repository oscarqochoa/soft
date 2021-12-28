import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  data() {
    return { baseUrl: process.env.VUE_APP_BASE_URL_ASSETS }
  },
  methods: {
    convertProgramToModule(program) {
      let module = 0
      switch (program) {
        case 0:
          module = 0
        case 1:
          module = 3
          break
        case 2:
          module = 7
          break
        case 3:
          module = 6
          break
        case 4:
          module = 5
          break
        case 5:
          module = 8
          break
        case 6:
          module = 10
          break
        case 7:
          module = 11
          break
        case 8:
          module = 14
          break
        case 9:
          module = 12
          break
        case 15:
          module = 15
          break
        case null:
          module = null
      }

      return module
    },
    convertModuleToProgramString(program) {
      let module = 0
      if (program == 0) {
        module = 0
      } else {
        // eslint-disable-next-line default-case
        switch (program) {
          case '1':
            module = 3
            break
          case '2':
            module = 7
            break
          case '3':
            module = 6
            break
          case '4':
            module = 5
            break
          case '5':
            module = 8
            break
          case '6':
            module = 10
            break
          case '7':
            module = 11
            break
          case '8':
            module = 14
            break
          case '9':
            module = 12
            break
          case 'crm':
            module = 2
            break
          case 'adm':
            module = 4
            break
          case 'supervisorCrm':
            module = 2
            break
        }
      }
      return module
    },
    getModuleName(module) {
      switch (module) {
        case 2:
          return 'crm'
        case 3:
          return 'bussiness'
        case 4:
          return 'administration'
        case 5:
          return 'debtsolution'
        case 6:
          return 'creditexperts'
        case 7:
          return 'boostcredit'
        case 8:
          return 'taxresearch'
        case 10:
          return 'claimdepartment'
        case 11:
          return 'specialists'
        case 12:
          return 'ti'
        case 14:
          return 'bookeeping'
        case 15:
          return 'socialnetwork'
        case 18:
          return 'quality'
      }
    },
    // createClass(name, rules) {
    //   const style = document.createElement("style");
    //   style.type = "text/css";
    //   document.getElementsByTagName("head")[0].appendChild(style);
    //   if (!(style.sheet || {}).insertRule)
    //     (style.styleSheet || style.sheet).addRule(name, rules);
    //   else style.sheet.insertRule(`${name}{${rules}}`, 0);
    // },
    /* TOAST */
    showToast(variant, position, title, icon, text) {
      this.$toast(
        {
          component: ToastificationContent,
          props: {
            title,
            icon,
            text,
            variant,
          },
        },
        {
          position,
        },
      )
    },

    /** *** SWALS **** */
    showConfirmSwal(
      title = 'Are you sure?',
      text = "You won't be able to revert this!",
    ) {
      return this.$swal({
        title,
        text,
        imageUrl: '/assets/images/icons/swal/warning.svg',
        imageWidth: 70,
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'Yes',
        customClass: {
          confirmButton: 'btn btn-primary mr-1',
          cancelButton: 'btn btn-outline-danger  ',
        },
      })
    },

    showSuccessSwal(text = 'Successful Process') {
      this.$swal({
        title: 'Success!',
        text,
        imageUrl: '/assets/images/icons/swal/success.svg',
        imageWidth: 70,
        confirmButtonText: 'Ok',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
    showInfoSwal(text = 'Important Information', title = 'Very Important!') {
      this.$swal({
        title,
        text,
        imageUrl: '/assets/images/icons/swal/info.svg',
        imageWidth: 70,
        confirmButtonText: 'Ok',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },
    showWarningSwal(title = "Very Important!", text = "Important Information") {
      this.$swal({
        title,
        text,
        imageUrl: "/assets/images/icons/swal/warning.svg",
        imageWidth: 70,
        confirmButtonText: "Ok",
        customClass: {
          confirmButton: "btn btn-primary",
        },
        buttonsStyling: false,
      });
    },
    showErrorSwal(error) {
      this.$swal({
        html: `<h4><b>Sorry, there was an error... try again or contact support !!!</b></h4> <br/> <span class="font-small-3">${error}</span>`,
        imageUrl: '/assets/images/icons/swal/error.svg',
        imageWidth: 70,
        confirmButtonText: 'Ok',
        customClass: {
          confirmButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      })
    },

    showSwalGeneric(title, text, icon, config = {}) {
      return this.$swal({
        icon,
        title,
        text,
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'Yes',
        customClass: {
          confirmButton: 'btn btn-primary  mr-1 ',
          cancelButton: 'btn btn-outline-danger  ',
        },
        ...config,
      })
    },

    isResponseSuccess(response) {
      return (
        response
        && response.status
        && String(response.status).substr(0, 2) === '20'
      )
    },

    showSwalSuccess(title, text, icon, html) {
      this.$swal({
        title,
        text,
        icon,
        html,
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
    },

    getInternalErrors(error, split = '\n') {
      try {
        if (error.response && error.response.data) {
          const message = error.response.data.message || 'Something went wrong.'
          const errors = []
          for (const key in error.response.data.errors) {
            errors.push(error.response.data.errors[key])
          }
          return `${message + split}${errors.join(`.${split}`)}`
        }
        return 'Something went wrong'
      } catch (error) {
        console.log('Something went wrong getInternalErrors:', error)
        return 'Something went wrong'
      }
    },
    getCurrentMonth() {
      return this.$moment().format('MMM')
    },
    addPreloader() {
      this.$store.commit('app/SET_LOADING', true)
    },
    removePreloader() {
      this.$store.commit('app/SET_LOADING', false)
    },
    range(start, end) {
      const arr = []
      for (let i = start; i <= end; i += 1) {
        arr.push(i)
      }
      return arr
    },
    isPreloading (status = true) {
      this.$store.commit("app/SET_LOADING", status)
    }
  },
}
