<template>
    <div>
        <h3>
            ChildCount: {{childCount}}
        </h3>
        <button @click="incrementerChildCount">Incrementation</button>
    </div>
</template>

<script>
    export default {
        props: ['count'],
        data() {
            return {
                childCount: this.count
            }
        },
        methods: {
            incrementerChildCount() {
                this.childCount++;
                this.$emit("update:count", this.childCount);
            }
        }
    }
</script>