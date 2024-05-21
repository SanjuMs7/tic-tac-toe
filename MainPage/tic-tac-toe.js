let toggle=0,array=[9],started=false,isAutoPlayOn=false,mode=0;

const clicked=(id)=>{
    setImage(id);
    check();
    if(isAutoPlayOn)
    {
        compareOpponent(id);
    }
}

let x_icon="../images/X-icon-removebg-preview.png";
let o_icon="../images/O-icon-removebg-preview.png";
let won,title;
title=document.querySelector('#game-title');

const setImage=(id)=>{
    if(!isAutoPlayOn)
    {
        if(!started)
            {
                if(toggle%2==0)
                {
                    if(array[id]!='x'&&array[id]!='o')
                    {
                        document.getElementById(id).innerHTML=`<img class="icon" src="${x_icon}">`;
                        array[id]='x';
                        toggle+=1;
                    }
                }
                else
                {
                    if(array[id]!='x'&&array[id]!='o')
                    {
                        document.getElementById(id).innerHTML=`<img class="icon" src="${o_icon}">`;
                        array[id]='o';
                        toggle+=1;
                    }
                }
            }
    }
    else
    {
        if(array[id]!='x'&&array[id]!='o')
        {
            document.getElementById(id).innerHTML=`<img class="icon" src="${x_icon}">`;
            array[id]='x';
        }
        else
        {
            alert("You mis-clicked\nClick Auto Play to restart");
            reset();
        }
    }
}
const check=()=>{
    if(array[0]===array[1] && array[1]===array[2] && array[0]!=null)
    {
        started=true;
        won=array[1];
    }
    else if(array[0]===array[4] && array[4]===array[8] && array[0]!=null)
    {
        started=true;
        won=array[4];
    }
    else if(array[0]===array[3]&&array[3]===array[6]&&array[0]!=null)
    {
        started=true;
        won=array[3];
    }
    else if(array[2]===array[5] && array[5]===array[8] && array[2]!=null)
    {
        started=true;
        won=array[2];
    }
    else if(array[2]===array[4] && array[4]===array[6] && array[2]!=null)
    {
        started=true;
        won=array[2];
    }
    else if(array[6]===array[7] && array[7]===array[8] && array[6]!=null)
    {
        started=true;
        won=array[6];
    }
    else if(array[1]===array[4] && array[4]===array[7] && array[1]!=null)
    {
        started=true;
        won=array[1];
    }
    else if(array[3]===array[4]&&array[4]===array[5]&&array[3]!=null)
    {
        started=true;
        won=array[3];
    }
    else if(array[1]===array[4]&&array[4]===array[7]&&array[1]!=null)
    {
        started=true;
        won=array[1];
    }

    wonchecking();
}
const wonchecking=()=>{
    if(started)
        {
            if(won =='x')
            {
                title.innerHTML=`Congratulations <img src="${x_icon}" class="icons"> Won`
            }
            else if(won=='o')
            {
                title.innerHTML=`Congratulations <img src="${o_icon}" class="icons"> Won`
            }
            isAutoPlayOn=false;
        }
}
const reset=()=>
{
    title.innerHTML="Tic-Tac-Toe"
    started=false;
    toggle=0;
    isAutoPlayOn=false;
    document.querySelector("#autoplaybtn").innerHTML="Auto Play";
    for(let i=0;i<9;i++)
    {
        array[i]=null;
    }
    let temp=document.querySelectorAll(".boxes");
    temp.forEach((index)=>{
        index.innerHTML="";
    });
}
const autoplay=()=>
{
    if(mode%2===0)
    {
        isAutoPlayOn=true;
        alert("first turn is yours!");
        startTextAnimation();
        document.querySelector("#autoplaybtn").innerHTML="Auto Play On";
        mode+=1;
    }
    else
    {
        isAutoPlayOn=false;
        document.querySelector("#autoplaybtn").innerHTML="Auto Play";
        mode-=1;
        reset();
    }
}
const startTextAnimation=()=>
{
    document.querySelector(".display").className="displayAfterAnimated";
    setTimeout(() => {
        document.querySelector(".displayAfterAnimated").className="display";
    },1500);
}
const compareOpponent=(id)=>{
    let oppoId=id;
    setTimeout(() => {
        if(oppoId==='0')
            {
                if(array[0]===array[1]&&array[2]!='x'&&array[2]!='o')
                {
                    array[2]='o';
                    document.getElementById('2').innerHTML=`<img src="${o_icon}" class="icon" >`   

                    check();
                }   
                else if(array[0]===array[2]&&array[1]!='x'&&array[1]!='o')
                {
                    array[1]='o';
                    document.getElementById('1').innerHTML=`<img src="${o_icon}" class="icon" >`
                    check();
                } 
                else if(array[0]===array[3]&&array[6]!='x'&&array[6]!='o')
                {
                    array[6]='o';
                    document.getElementById('6').innerHTML=`<img src="${o_icon}" class="icon" >`
                    check();
                }
                else if(array[0]===array[6]&&array[3]!='x'&&array[3]!='o')
                {
                    array[3]='o';
                    document.getElementById('3').innerHTML=`<img src="${o_icon}" class="icon" >`
                    check();
                }
                else if(array[0]===array[8]&&array[4]!='x'&&array[4]!='o')
                {
                    array[4]='o';
                    document.getElementById('4').innerHTML=`<img src="${o_icon}" class="icon" >`
                    check();
                }
                else if(array[0]===array[4]&&array[8]!='x'&&array[8]!='o')
                {
                    array[8]='o';
                    document.getElementById('8').innerHTML=`<img src="${o_icon}" class="icon" >`
                    check();
                }
                else
                {
                    for(let i=0;i<9;i++)
                        {
                            if(array[i]!='x'&&array[i]!='o'&&i!=3&&i!=7)
                            {
                                array[i]='o';
                                document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                break;
                            }
                        }
                        check();
                }
            }
            else if(oppoId==='1')
            {
                if(array[1]===array[0]&&array[2]!='x'&&array[2]!='o')
                {
                    array[2]='o';
                    document.getElementById('2').innerHTML=`<img src="${o_icon}" class="icon" >`;
                    check();
                }
                else if(array[1]===array[2]&&array[3]!='x'&&array[3]!='o')
                {
                    array[3]='o';
                    document.getElementById('3').innerHTML=`<img src="${o_icon}" class="icon" >`;
                    check();
                }
                else if(array[1]===array[4]&&array[7]!='x'&&array[7]!='o')
                {
                    array[7]='o';
                    document.getElementById('7').innerHTML=`<img src="${o_icon}" class="icon" >`;
                    check();
                }
                else if(array[1]===array[7]&&array[4]!='x'&&array[4]!='o')
                {
                    array[4]='o';
                    document.getElementById('4').innerHTML=`<img src="${o_icon}" class="icon" >`;
                    check();
                }
                else 
                {
                    for(let i=0;i<9;i++)
                        {
                            if(array[i]!='x'&&array[i]!='o'&&i!=3&&i!=5&&i!=6&&i!=8&&i!=7)
                            {
                                array[i]='o';
                                document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                break;
                            }
                        }
                        check();
                }
            }
            else if(oppoId==='2')
            {
                    if(array[2]===array[1]&&array[0]!='x'&&array[0]!='o')
                    {
                        array[0]='o';
                        document.getElementById('0').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }   
                    else if(array[0]===array[2]&&array[1]!='x'&&array[1]!='o')
                    {
                        array[1]='o';
                        document.getElementById('1').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    } 
                    else if(array[2]===array[4]&&array[6]!='x'&&array[6]!='o')
                    {
                        array[6]='o';
                        document.getElementById('6').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[2]===array[6]&&array[4]!='x'&&array[4]!='o')
                    {
                        array[4]='o';
                        document.getElementById('4').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[2]===array[8]&&array[5]!='x'&&array[5]!='o')
                    {
                        array[5]='o';
                        document.getElementById('5').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[2]===array[5]&&array[8]!='x'&&array[8]!='o')
                    {
                        array[8]='o';
                        document.getElementById('8').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else
                    {
                        for(let i=0;i<9;i++)
                        {

                            if(array[i]!='x'&&array[i]!='o'&&i!=3&&i!=7)
                            {
                                array[i]='o';
                                document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                break;
                            }
                        }
                        check();
                    }
            }
            else if(oppoId==='3')
            {
                    if(array[3]===array[0]&&array[6]!='x'&&array[6]!='o')
                    {
                        array[6]='o';
                        document.getElementById('6').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else if(array[3]===array[6]&&array[0]!='x'&&array[0]!='o')
                    {
                       
                        array[0]='o';
                        document.getElementById('0').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else if(array[3]===array[4]&&array[5]!='x'&&array[5]!='o')
                    {
                        array[5]='o';
                        document.getElementById('5').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else if(array[3]===array[5]&&array[4]!='x'&&array[4]!='o')
                    {
                        array[4]='o';
                        document.getElementById('4').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else 
                    {
                        console.log("working")
                        for(let i=0;i<9;i++)
                            {
                                if(array[i]!='x'&&array[i]!='o'&&i!=1&&i!=2&&i!=7&&i!=8)
                                {
                                    array[i]='o';
                                    document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                    break;
                                }
                            }
                            check();
                    }
            }
            else if(oppoId==='4')
            {
                    if(array[4]===array[0]&&array[8]!='x'&&array[8]!='o')
                    {
                        array[8]='o';
                        check();
                        document.getElementById('8').innerHTML=`<img src="${o_icon}" class="icon" >`
                    }   
                    
                    else if(array[2]===array[4]&&array[6]!='x'&&array[6]!='o')
                    {
                        array[6]='o';
                        document.getElementById('6').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[4]===array[5]&&array[3]!='x'&&array[3]!='o')
                    {
                        array[3]='o';
                        document.getElementById('3').innerHTML=`<img src="${o_icon}" class="icon" >`
                    }
                    else if(array[4]===array[8]&&array[0]!='x'&&array[0]!='o')
                    {
                        array[0]='o';
                        document.getElementById('0').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    } 
                    else if(array[4]===array[3]&&array[5]!='x'&&array[5]!='o')
                    {
                        array[5]='o';
                        check();
                        document.getElementById('5').innerHTML=`<img src="${o_icon}" class="icon" >`
                    }
                    else if(array[1]===array[4]&&array[7]!='x'&&array[7]!='o')
                    {
                        array[7]='o';
                        document.getElementById('7').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[4]===array[7]&&array[1]!='x'&&array[1]!='o')
                    {
                        array[1]='o';
                        document.getElementById('1').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[4]==array[6]&&array[2]!='x'&&array[2]!='o')
                    {
                        array[2]='o';
                        document.getElementById('2').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else 
                    {
                        for(let i=0;i<9;i++)
                        {
                            if(array[i]!='x'&&array[i]!='o')
                            {
                                array[i]='o';
                                document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                break;
                            }
                        }
                        check();
                    }
            }
            else if(oppoId==='5')
            {
                    if(array[5]===array[2]&&array[8]!='x'&&array[8]!='o')
                    {
                        array[8]='o';
                        document.getElementById('8').innerHTML=`<img src="${o_icon}" class="icon" >`;

                        check();
                    }
                    else if(array[5]===array[8]&&array[2]!='x'&&array[2]!='o')
                    {
                        array[2]='o';
                        check();
                        document.getElementById('2').innerHTML=`<img src="${o_icon}" class="icon" >`;
                    }
                    else if(array[3]===array[5]&&array[4]!='x'&&array[4]!='o')
                    {
                        array[4]='o';
                        document.getElementById('4').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else if(array[4]===array[5]&&array[3]!='x'&&array[3]!='o')
                    {
                        array[3]='o';
                        document.getElementById('3').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else 
                    {
                        for(let i=0;i<9;i++)
                            {
                                if(array[i]!='x'&&array[i]!='o'&&i!=0&&i!=7&&i!=1&&i!=6)
                                {
                                    array[i]='o';
                                    document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                    break;
                                }
                            }
                            check();
                    }
            }
            else if(oppoId==='6')
            {
                    if(array[3]===array[6]&&array[0]!='x'&&array[0]!='o')
                    {
                        array[0]='o';
                        document.getElementById('0').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }   
                    else if(array[0]===array[6]&&array[3]!='x'&&array[3]!='o')
                    {
                        array[3]='o';
                        document.getElementById('3').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    } 
                    else if(array[6]===array[8]&&array[7]!='x'&&array[7]!='o')
                    {
                        array[7]='o';
                        document.getElementById('7').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[6]===array[7]&&array[8]!='x'&&array[8]!='o')
                    {
                        array[8]='o';
                        check();
                        document.getElementById('8').innerHTML=`<img src="${o_icon}" class="icon" >`
                    }
                    else if(array[2]===array[6]&&array[4]!='x'&&array[4]!='o')
                    {
                        array[4]='o';
                        document.getElementById('4').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[6]===array[4]&&array[2]!='x'&&array[2]!='o')
                    {
                        array[2]='o';
                        check();
                        document.getElementById('2').innerHTML=`<img src="${o_icon}" class="icon" >`
                    }
                    else
                    {
                        for(let i=0;i<9;i++)
                        {
                            if(array[i]!='x'&&array[i]!='o'&&i!=1&&i!=5)
                            {
                                array[i]='o';
                                document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                break;
                            }
                        }
                        check();
                    }
            }
            else if(oppoId==='7')
            {
                    if(array[7]===array[4]&&array[1]!='x'&&array[1]!='o')
                    {
                        array[1]='o';
                        document.getElementById('1').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else if(array[7]===array[1]&&array[4]!='x'&&array[4]!='o')
                    {
                        array[4]='o';
                        document.getElementById('4').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else if(array[7]===array[6]&&array[8]!='x'&&array[8]!='o')
                    {
                        array[8]='o';
                        document.getElementById('8').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else if(array[7]===array[8]&&array[6]!='x'&&array[6]!='o')
                    {
                        array[6]='o';
                        document.getElementById('6').innerHTML=`<img src="${o_icon}" class="icon" >`;
                        check();
                    }
                    else 
                    {
                        for(let i=0;i<9;i++)
                            {
                                if(array[i]!='x'&&array[i]!='o'&&i!=0&&i!=2&&i!=3&&i!=5)
                                {
                                    array[i]='o';
                                    document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                    break;
                                }
                            }
                            check();
                    }
            }
            else if(oppoId=='8')
            {
                    if(array[8]===array[0]&&array[4]!='x'&&array[4]!='o')
                    {
                        array[4]='o';
                        document.getElementById('4').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }   
                    else if(array[4]===array[8]&&array[0]!='x'&&array[0]!='o')
                    {
                        array[0]='o';
                        document.getElementById('0').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    } 
                    else if(array[6]===array[8]&&array[7]!='x'&&array[7]!='o')
                    {
                        array[7]='o';
                        document.getElementById('7').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[8]===array[7]&&array[6]!='x'&&array[6]!='o')
                    {
                        array[6]='o';
                        document.getElementById('6').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[2]===array[8]&&array[5]!='x'&&array[5]!='o')
                    {
                        array[5]='o';
                        document.getElementById('5').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else if(array[8]===array[5]&&array[2]!='x'&&array[2]!='o')
                    {
                        array[2]='o';
                        document.getElementById('2').innerHTML=`<img src="${o_icon}" class="icon" >`
                        check();
                    }
                    else
                    {
                        for(let i=0;i<9;i++)
                        {
                            if(array[i]!='x'&&array[i]!='o'&&i!=1&&i!=3&&i!=8)
                            {
                                array[i]='o';
                                document.getElementById(i).innerHTML=`<img src="${o_icon}" class="icon" >`;
                                break;
                            }
                        }
                        check();
                    }
            }
    },1000);                                                                                           
}