<template>
    <div>
        <nav class="nav">
        <div class="container">
            <div class="logo">
                <a href="#">FEED WELL</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#" @click="logout">Deconnexion</a></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>

    <section class="home">
        <div class="text">
            <h1>Votre Santé notre priorité</h1>
            <p>lcvbjhdfjcndnjkxfcjkndjnfkdjnfkgdjkfbjnbgfjknvjbgfjngbfvbjnbfnkx:jgbn:qfnkdiqenihfrqehiomrkfdfrgehidjfjfnfnjdjnkfjnkdfjndkjnfdjknfjkdjknfeutrfknjdefhidefiho</p>
        </div>
    </section>
    </div>

    
</template>

<script>
import connectUser from '@/database/AuthUser'
export default {
    name:"",
    data(){
        return{

        }
    },
    // setup() {
    //     $(window).scroll(function() {
    //         if ($(document).scrollTop() > 50) {
    //             $('.nav').addClass('affix');
    //             console.log("OK");
    //         } else {
    //             $('.nav').removeClass('affix');
    //         }
    //     });



    //     $('.navTrigger').click(function () {
    //         $(this).toggleClass('active');
    //         console.log("Clicked menu");
    //         $("#mainListDiv").toggleClass("show_list");
    //         $("#mainListDiv").fadeIn();

    //     });

        
    // }
    methods: {
        async  logout(){
            console.log('bon');
        await connectUser.LogoutUser()
        this.$router.push('/')

        }
    },

}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');
html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
    font-size: 62.5%;
    font-size: 10px;
}
/* Navbar section */

.nav {
    width: 100%;
    height: 65px;
    position: fixed;
    line-height: 65px;
    text-align: center;
}

.nav div.logo {
    float: left;
    width: auto;
    height: auto;
    padding-left: 3rem;
}

.nav div.logo a {
    text-decoration: none;
    color: #1313ad;;
    font-size: 5.5rem;
    font-weight: bold;
}

.nav div.logo a:hover {
    color: #1313ad;;
}

.nav div.main_list {
    height: 65px;
    float: right;
}

.nav div.main_list ul {
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav div.main_list ul li {
    width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
}

.nav div.main_list ul li a {
    text-decoration: none;
    color: #fff;
    line-height: 65px;
    font-size: 2.4rem;
    font-weight: bold;
    
}


.nav div.main_list ul li a:hover {
    background-color: #1313ad;
    padding: 10px;
    color: #fff;
    border-radius: 10px;
}


/* Home section */

.home {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/nut1.jpg");
    background-position: center top;
	background-size:cover;
}
.text{
    position: absolute;
    top: 40%;
    left: 25%;
}
.text h1{
    font-size: 9em;
}

.navTrigger {
    display: none;
}

.nav {
    padding-top: 20px;
    padding-bottom: 20px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}


/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .container {
        margin: 0;
    }
}

@media screen and (max-width:768px) {
    .navTrigger {
        display: block;
    }
    .nav div.logo {
        margin-left: 15px;
    }
    .nav div.main_list {
        width: 100%;
        height: 0;
        overflow: hidden;
    }
    .nav div.show_list {
        height: auto;
        display: none;
    }
    .nav div.main_list ul {
        flex-direction: column;
        width: 100%;
        height: 100vh;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #111;
        /*same background color of navbar*/
        background-position: center top;
    }
    .nav div.main_list ul li {
        width: 100%;
        text-align: right;
    }
    .nav div.main_list ul li a {
        text-align: center;
        width: 100%;
        font-size: 3rem;
        padding: 20px;
    }
    .nav div.media_button {
        display: block;
    }
}

.navTrigger {
    cursor: pointer;
    width: 30px;
    height: 25px;
    margin: auto;
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
}

.navTrigger i {
    background-color: #fff;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
}

.navTrigger i:nth-child(1) {
    -webkit-animation: outT 0.8s backwards;
    animation: outT 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}

.navTrigger i:nth-child(2) {
    margin: 5px 0;
    -webkit-animation: outM 0.8s backwards;
    animation: outM 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}

.navTrigger i:nth-child(3) {
    -webkit-animation: outBtm 0.8s backwards;
    animation: outBtm 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}

.navTrigger.active i:nth-child(1) {
    -webkit-animation: inT 0.8s forwards;
    animation: inT 0.8s forwards;
}

.navTrigger.active i:nth-child(2) {
    -webkit-animation: inM 0.8s forwards;
    animation: inM 0.8s forwards;
}

.navTrigger.active i:nth-child(3) {
    -webkit-animation: inBtm 0.8s forwards;
    animation: inBtm 0.8s forwards;
}

@-webkit-keyframes inM {
    50% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(45deg);
    }
}

@keyframes inM {
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(45deg);
    }
}

@-webkit-keyframes outM {
    50% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(45deg);
    }
}

@keyframes outM {
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(45deg);
    }
}

@-webkit-keyframes inT {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
        -webkit-transform: translateY(9px) rotate(0deg);
    }
    100% {
        -webkit-transform: translateY(9px) rotate(135deg);
    }
}

@keyframes inT {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(9px) rotate(0deg);
    }
    100% {
        transform: translateY(9px) rotate(135deg);
    }
}

@-webkit-keyframes outT {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
        -webkit-transform: translateY(9px) rotate(0deg);
    }
    100% {
        -webkit-transform: translateY(9px) rotate(135deg);
    }
}

@keyframes outT {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(9px) rotate(0deg);
    }
    100% {
        transform: translateY(9px) rotate(135deg);
    }
}

@-webkit-keyframes inBtm {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
        -webkit-transform: translateY(-9px) rotate(0deg);
    }
    100% {
        -webkit-transform: translateY(-9px) rotate(135deg);
    }
}

@keyframes inBtm {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-9px) rotate(0deg);
    }
    100% {
        transform: translateY(-9px) rotate(135deg);
    }
}

@-webkit-keyframes outBtm {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
        -webkit-transform: translateY(-9px) rotate(0deg);
    }
    100% {
        -webkit-transform: translateY(-9px) rotate(135deg);
    }
}

@keyframes outBtm {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-9px) rotate(0deg);
    }
    100% {
        transform: translateY(-9px) rotate(135deg);
    }
}

.affix {
    padding: 0;
    background-color: #111;
}

.myH2 {
	text-align:center;
	font-size: 4rem;
}
.myP {
	text-align: justify;
	padding-left:15%;
	padding-right:15%;
	font-size: 20px;
}
@media all and (max-width:700px){
	.myP {
		padding:2%;
	}
}
/* fin navbar */
/* banner */
.banner-header__item {
	background: center center/cover no-repeat scroll;
	height: 90vh;
}
	 
.banner-header__item .carousel-caption {
	background: -o-linear-gradient(80deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .38) 35%, rgba(0, 0, 0, 0.2) 58%, rgba(0, 0, 0, 0.1) 100%);
	background: linear-gradient(10deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .38) 35%, rgba(0, 0, 0, 0.2) 58%, rgba(0, 0, 0, 0.1) 100%);
	bottom: 0 !important;
	height: 100%;
	left: 0 !important;
	padding-bottom: 1.5rem;
	padding-top: 1.5rem;
	right: 0 !important;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	width: 100%;
}
	 
.banner-header__item .carousel-caption h2 {
	margin-bottom: 2rem !important;
}
	 
.banner-header .slick-dots {
	bottom: 5%;
	left: 0;
	list-style: none;
	padding: 0;
	position: absolute;
	text-align: center;
	width: 100%;
	z-index: 5;
}
	 
.banner-header .slick-dots li {
	cursor: pointer;
	display: inline-block;
	height: 5px;
	margin: 0 8px;
	position: relative;
	width: 100px;
}
	 
.banner-header .slick-dots li:last-child {
	margin-right: 0;
}
	 
.banner-header .slick-dots .slick-active button,
.banner-header .slick-dots li button:hover {
	background: white;
}
	 
.banner-header .slick-dots li button {
	background: rgba(255, 255, 255, .5);
	border: 0;
	border-radius: 0%;
	cursor: pointer;
	display: block;
	font-size: 0;
	height: 5px;
	padding: 0;
	-o-transition: all .4s cubic-bezier(.55, .085, .68, .53);
	-webkit-transition: all .4s cubic-bezier(.55, .085, .68, .53);
	transition: all .4s cubic-bezier(.55, .085, .68, .53);
	width: 100px;
}

.banner-hero {
  background-image: url("https://uh.edu/uh-research/_images/uh-research-header.jpg");
  background-size: cover;
  background-position: center center;
  height: 90vh;
}

.banner__title--gray--left {
  color: var(#191919);
}

.banner__title--white--left {
  color: white;
  font-weight: 700;
  text-align: left;
}

.banner__title--white--center {
  color: white;
  font-weight: 700;
  text-align: center;
}

.banner__content--white--large--left {
  font-size: 1.424rem;
  margin: 0;
  padding: 0;
  text-align: left;
}

.banner__content--white--center {
  color: white;
  text-align: center;
}
</style>