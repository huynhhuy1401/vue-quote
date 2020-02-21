<template>
    <div class="row">
        <AddQuote></AddQuote>
        <Quotes></Quotes>
    </div>
</template>

<script>
import AddQuote from './AddQuote.vue';
import Quotes from './Quotes.vue';

export default {
    components: {
        AddQuote,
        Quotes
    }
}
</script>

<style>

</style>