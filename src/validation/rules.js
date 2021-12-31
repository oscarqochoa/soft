import { extend } from 'vee-validate'
import {
    required,
    email,
    length,
    max,
    min,
    min_value
} from 'vee-validate/dist/rules';

extend('secret', {
    validate: value => value === 'example',
    message: 'This is not the magic word'
})
extend('length', {
    ...length,
    message: 'is length'
})
extend('min_value', {
    ...min_value,
    message: 'is min'
})
extend('min', {
    ...min,
    message: 'is min'
})
extend('max', {
    ...max,
    message: 'is max'
})
extend('required', {
    ...required,
    message: 'is required'
})
extend('email', {
    ...email,
    message: 'This field must be a valid email'

})

extend('mobile', {
    validate: value => value.length == 14,
    message: 'This field must be a valid mobile number'
})

extend('validate-amount', {
    validate: value => value > 0,
    message: "The amount must be greater than 0.00"
})
extend('array', {
    validate: value => value.length > 0,
    message: "This field is required"
})
extend('boolean', {
    validate: value => value == true,
    message: ""
})

extend('validate-hours-92', {
    validate: value => value >= 92,
    message: "The minimum of hours is 92"
})
extend('money-1', {
    validate: value => value >= 1,
    message: "Required"
})
extend('money-required', {
    validate: value => value > 0,
    message: "Required"
})
extend('validate-spaces', {
    validate: value => value.replace(/\s/g, "") != "",
    message: "The field is required"
})
extend('password', {
    params: ['confirm'],
    validate(value, { confirm }) {
        return value === confirm;
    },
    message: 'Password confirmation does not match'
});
extend('specialpassword', {
    validate: (value) => {
        let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return regularExpression.test(value)
    },
    message: 'The Format must have a minimum. A capital letter, a lowercase, a number, a special character, and a minimum of 8 characters. Example: Abcd1234@'
})