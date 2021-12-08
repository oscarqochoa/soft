import Vue from "vue";
import moment from 'moment';


Vue.filter('myHourTime', function (created) {
    return moment(created).format('h:mm A');
});