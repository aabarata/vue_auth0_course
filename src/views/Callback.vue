<template>
    <div class="callback">
        <h1>Callbacking stuff...</h1>
    </div>
</template>

<script>
import { handleAuth } from '../utils/auth';

export default {
    name: 'Callback',
    beforeMount() {
        handleAuth((err) => { 
            if(err) {
                console.log(err);
            } else {
                this.$router.push('/secret');
            }
        });
    },
    props: {

    },
    methods: {

    }
}
</script>