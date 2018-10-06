<template>
    <div class="fretboard">

        <!-- Displays the fretboard background (no functionality)-->
        <div class="fretboard__display">
            <div class="fretboard__nut fret-0"></div>
            <div class="d-flex flex-row justify-content-start align-items-stretch w-100">
                <div class="fretboard__fret fret-1"></div>
                <div class="fretboard__fret fret-2"></div>
                <div class="fretboard__fret fret-3">
                    <div class="fretboard__dot"></div>
                </div>
                <div class="fretboard__fret fret-4"></div>
                <div class="fretboard__fret fret-5">
                    <div class="fretboard__dot"></div>
                </div>
                <div class="fretboard__fret fret-6"></div>
                <div class="fretboard__fret fret-7">
                    <div class="fretboard__dot"></div>
                </div>
                <div class="fretboard__fret fret-8"></div>
                <div class="fretboard__fret fret-9"></div>
                <div class="fretboard__fret fret-10">
                    <div class="fretboard__dot"></div>
                </div>
                <div class="fretboard__fret fret-11"></div>
                <div class="fretboard__fret fret-12">
                    <div class="fretboard__dot"></div>
                    <div class="fretboard__dot"></div>
                </div>
                <div class="fretboard__fret fret-13"></div>
                <div class="fretboard__fret fret-14"></div>
                <div class="fretboard__fret fret-15">
                    <div class="fretboard__dot"></div>
                </div>
                <div class="fretboard__fret fret-16"></div>
                <div class="fretboard__fret fret-17"></div>
                <div class="fretboard__fret fret-18"></div>
                <div class="fretboard__fret fret-19"></div>
            </div>
        </div>

        <string-interface></string-interface>
    </div>

</template>

<style lang="scss" scoped>
    .fretboard {
        background: rgb(43,38,35);
        background: -moz-linear-gradient(0deg, rgba(43,38,35,1) 0%, rgba(60,49,42,1) 50%, rgba(43,38,35,1) 100%);
        background: -webkit-linear-gradient(0deg, rgba(43,38,35,1) 0%, rgba(60,49,42,1) 50%, rgba(43,38,35,1) 100%);
        background: linear-gradient(0deg, rgba(43,38,35,1) 0%, rgba(60,49,42,1) 50%, rgba(43,38,35,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2b2623",endColorstr="#2b2623",GradientType=1);

        position: relative;
        height: 125px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
    }

    .fretboard__display {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
    }

    .fretboard__nut {
        background: #564c45;
        border-right: 4px solid #d8d8d8;
        box-sizing: border-box;
    }

    .fretboard__fret {
        border-right: 2px solid #564c45;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        &:last-of-type {
            border-right: none;
        }
    }

    .fretboard__dot {
        width: 20px;
        height: 20px;
        border-radius: 100px;
        background: #d6bc93; /* potentially replace with abalone pattern */
    }
</style>

<script>
    import StringInterface from '../components/StringInterface.vue';

	export default {
        components: {
            StringInterface
        },

		mounted() {
            console.log('App component mounted.')
        }
	}
</script>
