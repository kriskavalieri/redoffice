<template>
    <auth-base>
        <div class="form-group" :class="{'has-error': errors.has('email')}">
            <div class="input-group">
                <input type="text" name="email" id="simple-input" required="required" v-validate="'required|email'"/> 
                <label for="simple-input" class="control-label">{{ $t('email') }}</label>
                <i class="bar"></i>
                <small v-show="errors.has('email')" class="help text-danger">
                    {{ errors.first('email') }}
                </small>
            </div>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-secondary btn-sm mt-3 mb-3" @click.prevent="submit">
               {{ $t('auth.reset') }}
            </button>
        </div>
    </auth-base>
</template>

<script>
import AuthBase from './AuthBase.vue'
export default {
    components: {AuthBase},
    name: "forgotten",
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

<style>

</style>
