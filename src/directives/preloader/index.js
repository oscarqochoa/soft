import vueLoading from './preloader';
const install = (Vue, options = 'loading') => {
  if(typeof options !== 'string'){
    option = 'loading';
    console.warn("vue-loading options's type must be string")
  }
  Vue.directive(options, vueLoading(Vue));
};

export default install;