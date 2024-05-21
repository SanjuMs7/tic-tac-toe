let loginBtn,signupBtn,toggleForLogin=0,toggleForSignUp=0;
loginBtn=document.getElementById('login-btn');
signupBtn=document.getElementById('signup-btn');

loginBtn.addEventListener('click',()=>{
    loginBtn.style.opacity=1;
    signupBtn.style.opacity=.6;

    if(toggleForLogin%2===0)
    {
        toLoginForm();
    }
    document.querySelector('.main-outer-login').style.keyframes=true;
});

signupBtn.addEventListener('click',()=>{
    loginBtn.style.opacity=.6;
    signupBtn.style.opacity=1;
    
    if(toggleForSignUp%2==0)
    {   
        toSignupForm();
    }
});

const toSignupForm=()=>
{
        document.querySelector('.heading').innerHTML="Sign-Up";
        document.querySelector('.inputs').innerHTML=`<input type="text" class="input-boxes" placeholder="First name" required id="firstname">
                                            
                                                <input type="text" class="input-boxes" placeholder="Last name" required id="lastname">
                                                
                                                <input type="email" class="input-boxes" placeholder="Email id" required id="email">
                                                
                                                <input type="password" class="input-boxes" placeholder="Password" required id="password">

                                                <div class="login-info"><p id="login-para">*click login if already signed up!</p></div>`;
        toggleForSignUp+=1;
        toggleForLogin=0;
}
const toLoginForm=()=>{

        document.querySelector('.heading').innerHTML="Login";
        document.querySelector('.inputs').innerHTML=`<input type="text" class="input-boxes" placeholder="username" required>
                                                
                                                    <input type="password" class="input-boxes" placeholder="Password" required>
                                                    <div class="login-info"><p id="login-para">*click signup if didn't signed yet.</p></div>`;

        toggleForSignUp=0;
        toggleForLogin+=1;
}


