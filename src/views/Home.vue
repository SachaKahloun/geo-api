<!--<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>-->

<template>
  <section>
    <ion-header>
      <ion-toolbar>
        <ion-title>API-Geo</ion-title>
      </ion-toolbar>
    </ion-header>
    <img alt="" src="https://www.direct-signaletique.com/I-Autre-12484_459x459-.net.jpg" style="width: 30%; margin: auto"><br>
    <p>Recherchez autour ou loin de vous dans toute la France</p>
    <ion-button @click="searchZip()" expand="full">Rechercher à l'aide d'un code postal</ion-button><br>
    <ion-button @click="searchCity()" expand="full">Rechercher à l'aide d'une ville</ion-button><br>
    <ion-button @click="searchRegion()" expand="full">Rechercher à l'aide d'une région</ion-button><br>
  </section>
</template>
<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'*/

export default {
  name: "home",
  data() {
    return{}
  },

  methods: {
    searchCity () {
      this.$router.push('city')
    },
    searchZip () {
      this.$router.push('zip')
    },
    searchRegion () {
      this.$router.push('region')
    },
    returnHome (){
      this.$router.push('home')
    }
  }

  /*methods:{
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
  }*/
}
</script>
