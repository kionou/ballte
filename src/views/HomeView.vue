<template>
     <form >
        <div>
            <label for="userEmail">Email</label>
            <input type="email" name="userEmail" placeholder="email@gmail.com" v-model="email">
        </div>
        <div class="error">
            <small>nom n'est pas valid</small>
        </div>
        <div>
            <label for="userPassword">Password</label>
            <input type="password" name="userPassword" placeholder="Password" v-model="password">
        </div>
        <div class="error">
            <small>nom n'est pas valid</small>
        </div>
        <div>
           
            <p @click="redirect"  value="Inscrire Toi" class="signUp">Inscrire Toi</p>
            <p class="signUp" @click.prevent="valider">Connexion</p>
            <!-- <a href="./inscrption.html"><input type="submit" value="Sign Up" class="signUp"></a> -->
            
        </div>
      </form>
</template>

<script>
    import {auth} from '@/database/Connect'
    import { onAuthStateChanged } from '@firebase/auth'
    import connectUser from '@/database/AuthUser'
export default {
  data() {
    return {
      email:'',
      password:''
      
    }
  },
  methods: {
    redirect(){
            this.$router.push('/inscription')
        },
        MessageErreur(into){
            if (into === "auth/wrong-password") {
                this.erreur = 'Mot de passe incorrect'
                
            } else {

                this.erreur = "Email ou le Mot de passe est incorrect !"
            } 

        },
        async  valider(){
         
             let   DataUser={
                    email:this.email,
                    password:this.password
                }
                console.log(DataUser);
                let connection = await connectUser.Userconnect(DataUser)
                console.log(connection);
                if (connection.erreur ) {
                  this.MessageErreur(connection.erreur)
                 } else{
                    this.$router.push('/accueil')
                 }

              
            
        }
  },
  mounted() {
    
  },
  created() {
    onAuthStateChanged(auth,(user)=>{
       console.log('use',user)
            
        })
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
  a{
      text-decoration: none;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin-top: 0.4em;
    margin-bottom: 1.25em;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 1em;
    box-sizing: border-box;
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
  
  .error{
    text-align: center;
  }

  small{
      color: red;
  }
  
  .signUp {
    float: right;
    width: 40%;
    background-color: #1919ff;
    color: white;
    padding: 0.8em 0.5em;
    margin: 1.2em 0;
    transition-duration: 600ms;
    transition-property: background-color, transform;
    border: none;
    border-radius: 1em;
    cursor: pointer;
  }
  .signUp:hover{
    transform: scale(1.15);
    background-color: #1313ad;
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
    height: 18em;
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