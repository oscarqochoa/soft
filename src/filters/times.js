import Vue from "vue";
import moment from 'moment';


Vue.filter('myHourTime', function (created) {
    return moment(created).format('h:mm A');
});

Vue.filter('myHourTimeComplete', function (created) {
    return moment(created).format('h:mm:ss A');
});