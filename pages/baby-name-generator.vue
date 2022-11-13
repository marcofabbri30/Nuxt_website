<script setup lang="ts">
    import {Gender, Popularity, Length, names} from "@/data"
   

    interface OptionsState {
        gender: Gender;
        popularity: Popularity;
        length: Length;
    }

    const obj: OptionsState = {
        gender: Gender.GIRL,
        length: Length.SHORT,
        popularity: Popularity.UNIQUE
    }

    const options = reactive<OptionsState>({
        gender: Gender.GIRL,
        length: Length.SHORT,
        popularity: Popularity.UNIQUE
    })

    const selectedNames = ref<string[]>([]);

    const optionsArray = [
        {
            title: "Choose a gender",
            category: "gender",
            buttons: [Gender.BOY, Gender.UNISEX, Gender.GIRL]
        },
        {
            title: "Choose the name's popularity",
            category: "popularity",
            buttons: [Popularity.TRENDY, Popularity.UNIQUE]
        },
        {
            title: "Choose name's length",
            category: "length",
            buttons: [Length.SHORT, Length.ALL, Length.LONG]
        }
    ]
    
    const computeSelectedNames = () =>{
        const filterNames = names
            .filter((name) => name.gender === options.gender)
            .filter((name) => name.popularity === options.popularity)
            .filter((name) => {
                if(options.length === Length.ALL) return true
                else return name.length === options.length
            });
        selectedNames.value = filterNames.map(name => name.name);
    }

</script>

<template>
    <div class="container">
        <h1>Baby Name Generator</h1>
        <p>Choose your options and click the "Find Names" button below</p>
        <div class="options-container">
            <Option v-for="option in optionsArray"  :key="option.title" :option="option" :options ="options"/>
            <button class="primary" @click="computeSelectedNames">Find Names</button>
        </div>
        <div class="cards-container">
            <div v-for="name in selectedNames" :key="name" class="card">
                <h4>{{ name }}</h4>
                <p>x</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(27,60,138);
    max-width: 50rem;
    margin: 0 auto;
    text-align: center;
}

h1{
    font-size: 3rem;
}

.primary{
    background-color: rgb(249,87,89);
    color:white;
    border-radius: 6.5rem;
    border: none;
    padding: 0.75rem 4rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
}

.cards-container{
    display: flex;
    margin-top: 3rem;
    flex-wrap: wrap;
}
.card {
    background-color: rgb(27,60,138);
    width: 28%;
    color: white;
    border-radius: 1rem;
    padding: 0.1rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
}

.card p {
    position: absolute;
    top:-29%;
    left:92.5%;
    cursor: pointer;
    color:rgba(255,255,255,0.178);
}

</style>

<!-- https://www.youtube.com/watch?v=dZC4T4UiU1c&t=2015s&ab_channel=LaithAcademy -- minuto 1:28:20 -->