import Vue from "vue";
import moment from 'moment';


Vue.filter('myGlobal', function (created) {
    return moment(created).format('MM/DD/YYYY')
});
Vue.filter('myGlobalWithHour', function (created) {
    return moment(created).format('MM/DD/YYYY h:mm A')
});
Vue.filter('myDateGlobal', function (created) {
    return moment(created).format('ddd, D MMM YYYY hh:mm A');
});