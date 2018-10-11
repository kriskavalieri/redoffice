<template>
<auth>
    <div class="form-group" :class="{'has-error': errors.has('name')}">
        <div class="input-group">
            <input type="text" name="name" id="name" v-validate="'required'" required/> 
            <label for="name" class="control-label">{{ $t('name') }}</label>
            <i class="bar"></i>
            <small v-show="errors.has('name')" class="help text-danger">
                {{ errors.first('name') }}
            </small>
        </div>
    </div>
    <div class="form-group" :class="{'has-error': errors.has('email')}">
        <div class="input-group">
            <input type="text" name="email" id="email" required="required" v-validate="'required|email'"/> 
            <label for="email" class="control-label">{{ $t('email') }}</label>
            <i class="bar"></i>
            <small v-show="errors.has('email')" class="help text-danger">
                {{ errors.first('email') }}
            </small>
        </div>
    </div>
    <div class="form-group" :class="{'has-error': errors.has('password')}">
        <div class="input-group">
            <input type="password" id="simple-password" name="password" v-validate="'required|min:6|confirmed:password2'" required/> 
            <label for="simple-password" class="control-label">{{ $t('auth.pass') }}</label>
            <i class="bar"></i>
            <small v-show="errors.has('password')" class="help text-danger">
                {{ errors.first('password') }}
            </small>
        </div>
    </div>
    <div class="form-group" :class="{'has-error': errors.has('password2')}">
        <div class="input-group">
            <input type="password" ref="password2" id="password2" name="password2"  required/> 
            <label for="password2" class="control-label">{{ $t('auth.pass') }} ({{ $t('auth.confirm') }})</label>
            <i class="bar"></i>
            <small v-show="errors.has('password2')" class="help text-danger">
                {{ errors.first('password2') }}
            </small>
        </div>
    </div>
    <div class="text-center">
        <button type="submit" class="btn btn-dark btn-sm mt-3 mb-3" @click.prevent="submit">
            {{ $t('auth.register') }}
        </button>
    </div>
    <hr>
    <div class="text-center mt-4">
        <router-link class='with-link' :to="{name: 'auth.Login'}">{{ $t('auth.have_account') }}</router-link>
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