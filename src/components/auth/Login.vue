<template>
    <auth>
        <div class="form-group" :class="{'has-error': errors.has('login')}">
            <div class="input-group">
                <input type="text" name="login" id="simple-input" v-validate="'required'" required/> 
                <label for="simple-input" class="control-label">{{ $t('login') }}</label>
                <i class="bar"></i>
                <small v-show="errors.has('login')" class="help text-danger">
                    {{ errors.first('login') }}
                </small>
            </div>
        </div>
        <div class="form-group" :class="{'has-error': errors.has('password')}">
            <div class="input-group">
                <input type="password" id="simple-password" name="password" v-validate="'required'" required/> 
                <label for="simple-password" class="control-label">{{ $t('auth.pass') }}</label>
                <i class="bar"></i>
                <small v-show="errors.has('password')" class="help text-danger">
                    {{ errors.first('password') }}
                </small>
            </div>
        </div>
        <div class="row">
            <div class="col-6 ">
                <div>
                    <redoffice-checkbox class="pl-2" :label="$t('auth.remember_me')" :checked="false"  brandColor="danger"/>
                </div>
            </div>
            <div class="col-6 pr-3 m-0 text-right">
                <div class='pt-1'>
                    <router-link class='with-link' :to="{name: 'auth.Forgotten'}">{{ $t('auth.forgotten_pass') }}</router-link>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-dark btn-sm mt-3 mb-3" @click.prevent="submit">
                Login
            </button>
        </div>
        <hr>
        <div class="text-center mt-4">
            <router-link class='with-link' :to="{name: 'auth.Signup'}">{{ $t('auth.no_account') }}</router-link>
        </div>
    </auth>
</template>

<script>
import Auth from "./AuthBase.vue"
export default {
    components: {Auth},
    methods: {
        async submit(){
            if(await this.$validator.validateAll()){
                this.$router.push({
                    name: 'Overview'
                })
            }
        }
    }
}
</script>
