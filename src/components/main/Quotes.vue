<template>
    <div class="row">
        <template v-for="el in quotes">
            <Quote 
                @deleteQuote="onDeleteQuote" 
                :key="el.index" 
                v-bind="el"
            >
            </Quote>    
        </template> 
    </div>
</template>

<script>
import Quote from './Quote.vue';
import { eventBus } from '../../main';

export default {
    data: function () {
        return {
            nextId: 0,
            quotes: []
        }
    },
    methods: {
        onDeleteQuote(index) {
            this.quotes = this.quotes.filter(el => el.index != index);
            eventBus.$emit('quoteDeleted')
        }
    },
    components: {
        Quote
    },
    created() {
        eventBus.$on('newQuoteAdded', quote => {
            console.log(quote);
            if (this.quotes.length < 10) {
                this.quotes.push({
                    quote,
                    index: this.nextId++
                });
            } else {
                alert("You can't add more than 10 quotes");
            }
            
        })
    }
}
</script>

<style>

</style>