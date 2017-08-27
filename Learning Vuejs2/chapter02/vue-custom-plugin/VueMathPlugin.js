export default {
  install: function (Vue) {
    Vue.directive('square', function (el, binding) {
      el.innerHTML = Math.pow(binding.value, 2);
    });
    Vue.directive('sqrt', function (el, binding) {
      el.innerHTML = Math.sqrt(binding.value);
    });
      Vue.directive('sin', function (el, binding) {
          el.innerHTML = Math.sin(binding.value);
      });
      Vue.directive('cos', function (el, binding) {
          el.innerHTML = Math.cos(binding.value);
      });
      Vue.directive('show', function (el, binding) {
          el.innerHTML = Math.tan(binding.value);
        /*el.style.color = 'red';*/
      });
      /*Vue.directive('show', function (el, binding) {
          el.innerHTML = Math.tan(binding.value);
      });*/

  }
};
