<template>
    <section class="timeline">
        <slot></slot>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .timeline {
        margin-top: 3em;
        margin-bottom: 3em;
        position: relative;
        padding: 2em 0;
        width: 90%;
        max-width: 1170px;
        margin: 0 auto;


        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 18px;
            height: 100%;
            width: 4px;
            background: #d7e4ed;
        }

        @media only screen and (min-width: 1170px) {
            &::before {
                left: 50%;
                margin-left: -2px;
            }
        }
    }
</style>
