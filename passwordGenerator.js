var passkey ="";
class Password{
    constructor(len){
        console.log("Welcome to Password Generator !!!")
        this.len = len
        this.pass = ""
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let nums = "1234567890"
        let special = "!@#$%^&*()_+"
        if(len==0){

            document.getElementById('password').placeholder='Enter Atleast 3 character Password ?'
        }
        else if(len<3){
            password.value = "Atleast 3 Character Password !"
        }else{
            let i = 0;
           while(i<len){
                this.pass += chars[Math.floor(Math.random()*chars.length)] //4  pass = e  e4#z
                this.pass += nums[Math.floor(Math.random()*nums.length)] //3 pass = e4 e4#z5
                this.pass += special[Math.floor(Math.random()*special.length)] //2 pass = e4# e4#z5!
                i+=3
           }
          
           console.log(this.pass)
           this.pass = this.pass.substring(0,len)
           password.value = this.pass
            passkey = this.pass
        }
    }
    
}
function getValue(){
    let inputField = password.value
    var value = inputField
    let p = new Password()
    p.generatePassword(value)
    
}


// let b = document.getElementById("input").value
// console.log(b) 
// console.log(p.generatePassword(value))
function copy(){

  // Select the text field
   // Copy the text inside the text field
   navigator.clipboard.writeText(passkey);
   alert("Copied the text: " + passkey);

  // Alert the copied text
}