import Vue from "vue";
import moment from 'moment';


Vue.filter('myGlobal', function (created) {
    if (created) return moment(created).format('MM/DD/YYYY')
    else return '-'
});