<template>
    <button @click="click(path)">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        'text' : String,
        'path' : String
    },
    methods: {
        click(path) {
            this.$router.push({name: `${path}`});
        }
    }
}
</script>

<style scoped>
button {
    position: relative;
    font-family: 'VT323', monospace;
    font-size: 5rem;
    margin-top: 4rem;
    outline: none;
    padding: 1rem 12rem;
    border-radius: 0%;
    background-color : var(--bg-color);
    color: white;
    border: 3px solid white;
    transition: all 0.2s ease;
    box-shadow: 1rem 1rem var(--accent-color);
}

button::-moz-focus-inner {
    border: none;
}

button:active {
    transform: translate(1rem, 1rem);
    box-shadow: 0px 0px var(--accent-color);
}       
</style>