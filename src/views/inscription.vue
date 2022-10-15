<template>
     <form>
      <div class="error">
            <small>{{erreur}}</small>
        </div>
       <div class="inscrire">
            <label for="nom">Nom</label>
            <input type="text" name="nom" placeholder="nom" v-model="nom">
       </div>
        
        <div>
            <label for="prenom">Prenom</label>
            <input type="text" name="prenom" placeholder="prenom" v-model="prenom">
        </div>

        <div>
            <label for="userEmail">Email</label>
            <input type="email" name="userEmail" placeholder="email@gmail.com" v-model="email">
        </div>
      
        <div>
            <label for="userPassword">Password</label>
            <input type="password" name="userPassword" placeholder="Password" v-model="password">
        </div>

        <div>
            <label for="numero">Numero</label>
            <input type="number" name="numero" placeholder="numero" v-model="numero">
        </div>
      
       <div class="btn" @click.prevent="valider">
            <input type="submit" value="Valider">
       </div>
      </form>
</template>

<script>
import connectUser from '@/database/AuthUser'
export default {
  data() {
    return {
     
        email:'',
        nom:'',
        prenom:'',
        numero:'',
        erreur:''
                      
                    
    }
  },
  methods: {
  async  valider(){
    let DataUser={
            email:this.email,
            nom:this.nom,
            prenom:this.prenom,
            numero:this.numero,
                    
          }
    console.log(DataUser)  
        let auth={
                        email:this.email,
                        password:this.password
                    }
                        let user = await connectUser.AddUser(DataUser,auth)
                    
                        if (user.erreur == "auth/email-already-in-use") {
                          this.erreur = "Votre Adresse Email existe  déjà donc veillez-vous connecté."
                        
                        } else {
                       this.$router.push('/')

                        }     

    }

  },

}
</script>

<style scoped>
    body {
    background: black;
  }
  
  label {
    bottom: 0;
  }
  
  input[type="text"],
  input[type="number"] {
    margin-top: 0.4em;
    margin-bottom: 0.5em;
    width: 100%;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 1em;
    box-sizing: border-box;
  }
  
  input[type="email"],
  input[type="password"]{
    width: 100%;
    padding: 12px 20px;
    margin-top: 0.4em;
    margin-bottom: 1.25em;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 1em;
    box-sizing: border-box;
  }
  .error{
    text-align: center;
  }

  small{
      color: red;
  }
  
  input[type="submit"] {
    width: 45%;
    background-color: #1919ff;
    color: white;
    padding: 0.8em 0.5em;
    margin: 1.5em 0;
    transition-duration: 600ms;
    transition-property: background-color, transform;
    border: none;
    border-radius: 1em;
    cursor: pointer;
    
  }
  .btn{
    text-align: center;
  }
  
  .signUp {
    float: right;
  }
  
  input[type="submit"]:hover {
    transform: scale(1.15);
    background-color: #1313ad;
  }
  
  form {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 15em;
    height: 30em;
    border-radius: 1em;
    background-color: #282829;
    color: white;
    padding: 1.5em;
    animation: rotate 5000ms infinite;
  }
  
  @keyframes rotate {
    50% {
      box-shadow: 0 0 1em 0.5em #00006e;
    }
  }
  
</style>