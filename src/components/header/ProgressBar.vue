<template>
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="70"
        aria-valuemin="0" aria-valuemax="100" :style="{ width: (count * 10) + '%'}">
            {{ count }} / 10
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    data: function() {
        return {
            count: 0
        }
    },
    created() {
        eventBus.$on('newQuoteAdded', () => {
            if (this.count < 10) {
                this.count++;
            }
        })
        eventBus.$on('quoteDeleted', () => {
            this.count--;
        })
    }
}
</script>

<style>

</style>