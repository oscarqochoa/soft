import Vue from "vue";
import moment from 'moment';


Vue.filter('myGlobal', function (created) {
    if(created) return moment(created).format('MM/DD/YYYY')
    return '-'
});
Vue.filter('myGlobalWithHour', function (created) {
    return moment(created).format('MM/DD/YYYY h:mm A')
});
Vue.filter('myDateGlobal', function (created) {
    return moment(created).format('ddd, D MMM YYYY hh:mm A');

});

Vue.filter('myGlobalDay', function (created) {
    if (created) return moment(created).format('MM/DD/YYYY hh:mm A')
    else return '-'
});
