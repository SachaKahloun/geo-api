<template>
  <section>
    <div class="ion-page">
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Code postal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <!--<h1>Progressive Web App</h1>-->
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <img alt="" src="https://www.direct-signaletique.com/I-Autre-12484_459x459-.net.jpg">
        <ion-searchbar placeholder="ZipCode: Entre un code postal" :value="zip" @input="zip = $event.target.value" ></ion-searchbar>
        <ion-button expand="block" @click="res">Find</ion-button>
        <ion-list>
          <ion-item v-for="(zip, index) in zips" :key="index">
            <ion-label>Ville : {{zip.nom}} <br>Code Postal : {{zip.zipCode}}<br>Population : {{zip.population}} d'habitants</ion-label>
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
        name: "zip",
        data() {
            return{
              zip : "",
              zips : []
            }

        },

        methods:{
          res() {
            alert(this.zip);
            fetch('https://geo.api.gouv.fr/communes?codePostal='+this.zip,  {
            })
                    .then((res) => res.text())
                    .then((data) => {
                    this.zips = [];
                      let parsedData = JSON.parse(data);
                      for (let i=0; i<parsedData.length; i++){
                        for(let j=0;j<parsedData[i].codesPostaux.length;j++){
                          this.zips.push({
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
