<template>
    <div class="col-xs-12 col-lg-3 col-sm-4 col-md-6">
        <div 
            class="panel panel-default" 
            @mouseover="isHover = true" 
            @mouseleave="isHover = false"
            @click="onDelete"
            :class="{hover: isHover}"
        >
            <div class="panel-body">
                {{ quote }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['quote', 'index'],
    data: function() {
        return {
            isHover: false
        }
    },
    methods: {
        onDelete() {
            this.$emit('deleteQuote', this.index)
        }
    }
}
</script>

<style scoped>
.hover {
    background-color: lightcoral;
    cursor: pointer;
}
</style>