<template>
    <section>
        <div class="ion-page">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button default-href="/"></ion-back-button>
                    </ion-buttons>
                    <ion-title>Ville</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
                <!--<h1>Progressive Web App</h1>-->
                <!--<img alt="Vue logo" src="../assets/logo.png">-->
                <img alt="" src="https://www.direct-signaletique.com/I-Autre-12484_459x459-.net.jpg">
                <ion-searchbar placeholder="City: Entrer une ville" :value="city" @input="city = $event.target.value" ></ion-searchbar>
                <ion-button expand="block" @click="res">Find</ion-button>
                <ion-list>
                    <ion-item v-for="(city, index) in citys" :key="index">
                        <ion-label>Ville : {{city.nom}} <br>Code Postal : {{city.zipCode}}<br>Population : {{city.population}} d'habitants</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </div>
    </section>
</template>


<script>
    // @ is an alias to /src
    /*import HelloWorld from '@/components/HelloWorld.vue'*/

    export default {
        name: "city",
        data() {
            return{
                city : "",
                citys : []
            }

        },

        methods:{
            res() {
                alert(this.city);
                fetch('https://geo.api.gouv.fr/communes?nom='+this.city,  {
                })

                    .then((res) => res.text())
                    .then((data) => {
                        this.citys = [];
                        let parsedData = JSON.parse(data);
                        for (let i=0; i<parsedData.length; i++){
                            for(let j=0;j<parsedData[i].codesPostaux.length;j++){
                                this.citys.push({
                                    nom : parsedData[i].nom,
                                    population : parsedData[i].population,
                                    zipCode : JSON.parse(parsedData[i].codesPostaux[j]),
                                })
                            }
                        }

                    })
            },
        }
    }
</script>
