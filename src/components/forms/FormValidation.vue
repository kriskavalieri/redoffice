<template>
    <redoffice-widget :headerText="'Form validation'" class="mt-5">
        <template slot="widgetBody">
            <form action="." method="post">
                <div class="form-group" :class="{'has-error': errors.has('password')}">
                    <div class="input-group">
                        <input v-validate="'required|min:6|confirmed:pw_confirm'" id="password" type="password" name="password" required/>
                        <label class="control-label" for="password">Password</label><i class="bar"></i>
                        <small v-show="errors.has('password')" class="help text-danger">
                            {{ errors.first('password') }}
                        </small>
                    </div>
                </div>
                <div class="form-group" :class="{'has-error': errors.has('password2')}">
                    <div class="input-group">
                        <input name="pw_confirm" ref="pw_confirm" type="password" id="pw_confirm" required>
                        <label class="control-label" for="pw_confirm">Confirm password</label><i class="bar"></i>
                        <small v-show="errors.has('password2')" class="help text-danger">
                            {{ errors.first('password2') }}
                        </small>
                    </div>
                </div>
                <div class="form-group" :class="{'has-error': errors.has('number')}">
                    <div class="input-group">
                        <input name="number" id="number" data-vv-as="number" v-validate="'required|numeric'" type="text" required>
                        <label class="control-label" for="number">Enter a number</label><i class="bar"></i>
                        <small v-show="errors.has('number')" class="help text-danger">
                            {{ errors.first('number') }}
                        </small>
                    </div>
                </div>
                <button type="submit" @click.prevent="submitForm" class="btn btn-dark">Submit</button>
                <button class="ml-2 btn btn-info" @click.prevent="resetForm">Reset</button>
                
            </form>
        </template>
    </redoffice-widget>
</template>

<script>
export default {
    methods: {
        async submitForm(){
            let is_valid = await this.$validator.validateAll()
            console.log(is_valid, this.errors)
        },
        resetForm(){
            this.errors.clear()
        }
    }
}
</script>
