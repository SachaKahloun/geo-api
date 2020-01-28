<template>
    <div class="ion-page">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Region</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <img alt="" src="https://www.direct-signaletique.com/I-Autre-12484_459x459-.net.jpg">
            <ion-select placeholder="Selectionnez votre région" @ionChange="selectedOption = $event.target.value">
                <ion-select-option v-for="(regions) in choices" :key="regions.code" :value="regions.code">
                    {{regions.nom}}
                </ion-select-option>
            </ion-select>
            <ion-button color="primary" @click="showDepartement()">
                afficher les departements
            </ion-button>
            <ion-list>
                <ion-item v-for="(departement, index) in region" :key="index">
                    <p><strong>{{departement.nom}} </strong><br>code départemental : {{departement.codes}}</p>
                </ion-item>
            </ion-list>
        </ion-content>
    </div>
</template>


<script>
    export default {
        name: "region",
        data (){
            return {
                choices:[],
                region :[],
                selectedOption : null,
                error :"Erreur de recherche"
            }
        },
        methods:{
            selectchoice(){
                fetch('https://geo.api.gouv.fr/regions')
                    .then(responseChoices => responseChoices.text())
                    .then(dataChoices => {
                        let parsedDataChoices = JSON.parse(dataChoices)
                        for (let i=0; i<parsedDataChoices.length; i++){
                            this.choices.push({
                                nom : parsedDataChoices[i].nom,
                                code : parsedDataChoices[i].code,
                            })
                        }
                    })
            },
            showDepartement(){
                fetch('https://geo.api.gouv.fr/regions/'+this.selectedOption+'/departements')
                    .then(response => response.text())
                    .then(data => {
                        this.region = []
                        let parsedData = JSON.parse(data)
                        for (let i=0; i<parsedData.length; i++){
                            this.region.push({
                                nom : parsedData[i].nom,
                                codes : parsedData[i].code,
                            })
                            /*this.error = data
                            console.log(this.data)*/
                        }
                    })
            }
        },
        created: function(){
            this.selectchoice()
        },
        computed:{
        },
    }

</script>
