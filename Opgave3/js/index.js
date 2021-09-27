Vue.createApp({
    data() {
        return{
         myStr: null,
         myStr1: null,
         myStr2: null, 
         message: null
 
        }
 
    
 
    },
 
    methods:{
        showWord(myStr){
         if(!myStr)
             myStr = "skriv et ord"
 
         this.message = myStr
        },
 
        wordToLowerCase() {
             this.myStr1 =  
             this.myStr.toLowerCase();
        },
 
        wordToUpperCase() {
            this.myStr2 = 
            this.myStr.toUpperCase();
        }
    }
 
 }).mount("#app")