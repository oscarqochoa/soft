<template>
  <div>
    <validation-observer ref="form">
      <b-row>
        <b-col cols="12">
          <b-form-group label="Current Password" label-for="current-password">
            <validation-provider vid="current" name="current" rules="required" v-slot="{ errors, valid }">
              <b-form-input
                id="current-password"
                type="password"
                placeholder="Current Password"
                v-model="userData.currentPassword"
                :state="errors[0] ? false : valid ? true : null"
              />
              <b-form-invalid-feedback>
                Current Password {{ errors[0] }}
              </b-form-invalid-feedback>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="New Password" label-for="new-password">
            <validation-provider rules="required|specialpassword|password:@confirm"  v-slot="{ errors, valid }">
              <b-form-input
                id="new-password"
                type="password"
                placeholder="New Password"
                :state="errors[0] ? false : valid ? true : null"
                v-model="userData.newPassword"
              />
              <b-form-invalid-feedback>
                New Password {{ errors[0] }}
              </b-form-invalid-feedback>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Confirm Password" label-for="confirm-password">
            <validation-provider rules="required" name="confirm" v-slot="{ errors, valid }">
              <b-form-input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                :state="errors[0] ? false : valid ? true : null"
                v-model="userData.confirmPassword"
              />
              <b-form-invalid-feedback>
                Confirm Password {{ errors[0] }}
              </b-form-invalid-feedback>
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
    </validation-observer>
  </div>
</template>

<script>
import UserService from '@/service/user/user.service';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      userData: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  computed:{
      ...mapGetters({
          currentUser: 'auth/currentUser'
      })
  },
  methods: {
    async changePassword() {
      const result = await this.$refs.form.validate();
      if (result) {
        const passswordResult = await UserService.validatePasswordUser({id_user: this.currentUser.user_id, password: this.userData.currentPassword}); 
        if(!passswordResult.data){
            this.$refs.form.setErrors({current: 'is incorrect'});
            return;
        }else{
            this.addPreloader()
            try {
                const changePass = await UserService.changePasswordUser({id_user: this.currentUser.user_id, new_password: this.userData.newPassword});
                this.removePreloader()
                this.showSuccessSwal('Password changed successfully');
                this.$emit('closeModal');
            } catch (error) {
                this.removePreloader()
                this.showErrorSwal(error);
            }
        }
      } else {
        console.log("error");
      }
    },
  },
};
</script>

<style>
</style>