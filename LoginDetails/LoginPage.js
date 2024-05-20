let loginBtn,signupBtn,current_btn,toggleForLogin=0,toggleForSignUp=0;
loginBtn=document.getElementById('login-btn');
signupBtn=document.getElementById('signup-btn');

loginBtn.addEventListener('click',()=>{
    current_btn="login";
    loginBtn.style.opacity=1;
    signupBtn.style.opacity=.6;

    if(toggleForLogin%2===0)
    {
        loginForm.id="";
        setTimeout(() => {
        loginForm.id='main-outer-div-id';    
        document.querySelector('.heading').innerHTML="Login";

        document.querySelector('.inputs').innerHTML=`<input type="text" class="input-boxes" placeholder="username" required>
                                                <br>
                                                <input type="password" class="input-boxes" placeholder="Password" required>
                                                <div class="login-info"><p id="login-para">*click signup if didn't signed yet.</p></div>`;
        },1000);
        toggleForSignUp=0;
        toggleForLogin+=1;
    }
    else
    {
        console.log("nothing");
    }

});
signupBtn.addEventListener('click',()=>{
    current_btn="signup";
    loginBtn.style.opacity=.6;
    signupBtn.style.opacity=1;

    if(toggleForSignUp%2==0)
    {
        loginForm.id="";
        setTimeout(() => {
        loginForm.id='main-outer-div-id';    
        document.querySelector('.heading').innerHTML="Sign-Up";

        document.querySelector('.inputs').innerHTML=`<input type="text" class="input-boxes" placeholder="First name" required id="firstname">
                                                <br>
                                                <input type="text" class="input-boxes" placeholder="Last name" required id="lastname">
                                                <br>
                                                <input type="email" class="input-boxes" placeholder="Email id" required id="email">
                                                <br>
                                                <input type="password" class="input-boxes" placeholder="Password" required id="password">

                                                <div class="login-info"><p id="login-para">*click login if already signed up!</p></div>`;
        },1000);
        toggleForSignUp+=1;
        toggleForLogin=0;
    }
    else
    {
        console.log("nothing in signup");
    }
});

let loginForm=document.querySelector('.main-outer-login');
setTimeout(() => {
    loginForm.id='main-outer-div-id';
},100);

