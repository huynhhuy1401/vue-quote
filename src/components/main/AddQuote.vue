<template>
    <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
            <form @submit.prevent="onSubmit">
                
                    <div class="form-group">
                        <label for="quoteForm">Quote</label>
                        <textarea v-model="quote" class="form-control" rows="10" id="quoteForm"></textarea>
                    </div>
                    <button class="btn btn-primary">Add Quote</button>
            </form>
        </div>
    </div>
    
</template>

<script>
import { eventBus } from '../../main';

export default {
    data: function () {
        return {
            quote: ''
        }
    },
    methods: {
        onSubmit() {
            eventBus.$emit('newQuoteAdded', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style scoped>
form {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>