<template>
    <div>
        <p>This is the top level <span class="test-scss">App</span> component (view).</p>
        <example-component />
    </div>
</template>

<style lang="scss" scoped>
    p {
        .test-scss {
            color: green;
        }
    }
</style>

<script>
    import ExampleComponent from '../components/ExampleComponent.vue';

	export default {
        components: {
            ExampleComponent
        },

		mounted() {
            console.log('App component mounted.')
        }
	}
</script>