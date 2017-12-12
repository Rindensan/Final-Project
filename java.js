var yourname = "";
var favcolor = "";
var ifRandom = "";
var glowsticks = document.getElementsByClassName("glowsticks");
var counter = 0;
var correct = 0;
var array = [];
var results = document.getElementById('results');


function CloseEverything(){
    document.getElementById('main').style.display ="none";
    document.getElementById('quiz').style.display ="none";
    document.getElementById('tenfacts').style.display ="none";
    document.getElementById('Theshow').style.display ="none";
    document.getElementById('References').style.display ="none";
}


function Selected(chosen_button){
    chosen_button.style.backgroundColor ="brown";
    chosen_button.style.color = "white";
}


function DeSelected(chosen_button){
    chosen_button.style.backgroundColor ="beige";
    chosen_button.style.color ="black";
}


function getRandomColor(){
    var letter="0123456789ABCDEF"
    var color="#"
    for (var n=0; n < 6; n++){
        color += letter[Math.floor(Math.random()*16)];
    }
    
    return color
}

function createGlowsticks(){
    var newGlowstick = document.createElement('div');
    var glowstickleft = Math.round(Math.random()*100);
    var glowsticktop = Math.round(Math.random()*60);
    
    newGlowstick.className ="glowsticks";
    newGlowstick.style.left = glowstickleft+"%";
    newGlowstick.style.top = glowsticktop+"%";
    if (favcolor =="random"){
        ifRandom = getRandomColor();
        newGlowstick.style.backgroundColor = ifRandom;}
    else{
        newGlowstick.style.backgroundColor = favcolor;
    };
    
    document.getElementById("audience").appendChild(newGlowstick)
    
    
}


function DeSelectAll(){
    document.getElementById('AKB48Select').style.backgroundColor = "beige";
    document.getElementById('AKB48Select').style.color = "black";
    document.getElementById('AKB48').style.display = "none";
    document.getElementById('SyntheticSelect').style.backgroundColor = "beige";
    document.getElementById('SyntheticSelect').style.color = "black";
    document.getElementById('Miku').style.display = "none";
    document.getElementById('RockSelect').style.backgroundColor = "beige";
    document.getElementById('RockSelect').style.color = "black";
    document.getElementById('rock').style.display = "none";
    document.getElementById('JpopSelect').style.backgroundColor = "beige";
    document.getElementById('JpopSelect').style.color = "black";
    document.getElementById('Jpop').style.display = "none";
    document.getElementById('KpopSelect').style.backgroundColor = "beige";
    document.getElementById('KpopSelect').style.color = "black";
    document.getElementById('Kpop').style.display = "none";
    document.getElementById('PopSelect').style.backgroundColor = "beige";
    document.getElementById('PopSelect').style.color = "black";
    document.getElementById('Pop').style.display = "none";
    document.getElementById('CountrySelect').style.backgroundColor = "beige";
    document.getElementById('CountrySelect').style.color = "black";
    document.getElementById('Country').style.display = "none";
    document.getElementById('ParodySelect').style.backgroundColor = "beige";
    document.getElementById('ParodySelect').style.color = "black";
    document.getElementById('WeirdAl').style.display = "none";   
    document.getElementById('ClassicalSelect').style.backgroundColor = "beige";
    document.getElementById('ClassicalSelect').style.color = "black";
    document.getElementById('Classical').style.display = "none";
    document.getElementById('MetalSelect').style.backgroundColor = "beige";
    document.getElementById('MetalSelect').style.color = "black";
    document.getElementById('Metallica').style.display = "none";
}

function DeselectMain(){
    DeSelected(document.getElementById('tenfactsbutton'));
    DeSelected(document.getElementById('quizbutton'));
    DeSelected(document.getElementById('referencebutton'));
}


/*-----------------------------------------TITLE SCREEN----------------------------------------*/

document.getElementById('letsgobutt').addEventListener('click',function(){
    var welcome = document.getElementById('welcome');
    yourname = document.getElementById('yourname').value;
    favcolor = document.getElementById('favcolor').value;
    
    welcome.style.display='none';
    welcome.style.bottom = '-100px';
    document.getElementById("titlebanner").style.display = "none";
    document.getElementById('curtains').style.left = "-100vw";
});

/*--------------------------TOP SCREEN------------------------------*/

document.getElementById('tenfactsbutton').addEventListener('click', function(){
    DeselectMain();
    CloseEverything();
    document.getElementById('tenfacts').style.display = "block";
    Selected(document.getElementById('tenfactsbutton'))
});


document.getElementById('quizbutton').addEventListener('click', function(){
    DeselectMain();
    CloseEverything();
    document.getElementById('quiz').style.display = "block";
    Selected(document.getElementById('quizbutton'));
    document.getElementById('quizwelcome').style.display = "block";
    document.getElementById('results').style.display = "none";
    document.getElementById('save').style.display ="none";
    document.getElementById('load').style.display ="none";
    correct = 0;
});

document.getElementById("concertstagebutton").addEventListener('click', function(){
    DeselectMain();
    CloseEverything();
    document.getElementById('topbar').style.display ='none';
    document.getElementById('Theshow').style.display ='block';
    document.getElementById('howtoconcert').style.display ="block";
    
});

document.getElementById('referencebutton').addEventListener('click', function(){
    DeselectMain();
    CloseEverything();
    document.getElementById('References').style.display = "block";
    Selected(document.getElementById('referencebutton'))
});

document.getElementById('logout').addEventListener('click',function(){
    document.getElementById('welcome').style.display ="block";
    document.getElementById('curtains').style.left = "0px";
    document.getElementById('titlebanner').style.display ="block";
});

/*-----------------------MAIN-------------------------------------------*/

document.getElementById('tenfactsmain').addEventListener('click', function(){
    DeselectMain();
    CloseEverything();
    document.getElementById('tenfacts').style.display = "block";
    document.getElementById('tenfactsbutton').style.backgroundColor ="brown";
    document.getElementById('tenfactsbutton').style.color = "white";
});


document.getElementById('quizmain').addEventListener('click', function(){
    DeselectMain();
    CloseEverything();
    document.getElementById('quiz').style.display = "block";
    correct = 0;
    Selected(document.getElementById('quizbutton'));
    document.getElementById('quizwelcome').style.display = "block";
    document.getElementById('results').style.display = "none";
    document.getElementById('save').style.display ="none";
    document.getElementById('load').style.display ="none";
});

document.getElementById("concertstagemain").addEventListener('click', function(){
    DeselectMain();
    CloseEverything();
    document.getElementById('topbar').style.display ='none';
    document.getElementById('Theshow').style.display ='block';
    
});

document.getElementById('referencemain').addEventListener('click', function(){
    DeselectMain();
    CloseEverything();
    document.getElementById('References').style.display = "block";
    document.getElementById('referencebutton').style.backgroundColor ="brown";
    document.getElementById('referencebutton').style.color = "white";
});


document.getElementById('tenfactsmain').addEventListener('mouseover',function(){
    document.getElementsByClassName('mainbutton')[0].innerHTML = "Ten Different Concerts<br><br>Look at facts about different types of concerts";
    document.getElementsByClassName('mainbutton')[0].style.height = '100px';
});

document.getElementById('tenfactsmain').addEventListener('mouseout',function(){
    document.getElementsByClassName('mainbutton')[0].innerHTML ="Ten Different Concerts";
    document.getElementsByClassName('mainbutton')[0].style.height = "50px";
});

document.getElementById('quizmain').addEventListener('mouseover',function(){
    document.getElementsByClassName('mainbutton')[1].innerHTML = "Take the Online Quiz<br><br>Test your Knowledge";
    document.getElementsByClassName('mainbutton')[1].style.height = '100px';
});

document.getElementById('quizmain').addEventListener('mouseout',function(){
    document.getElementsByClassName('mainbutton')[1].innerHTML ="Take the Online Quiz";
    document.getElementsByClassName('mainbutton')[1].style.height = "50px";
});

document.getElementById('concertstagemain').addEventListener('mouseover',function(){
    document.getElementsByClassName('mainbutton')[2].innerHTML = "Enter the Concert<br><br>Find yourself in a concert experience";
    document.getElementsByClassName('mainbutton')[2].style.height = '100px';
});

document.getElementById('concertstagemain').addEventListener('mouseout',function(){
    document.getElementsByClassName('mainbutton')[2].innerHTML ="Enter the Concert";
    document.getElementsByClassName('mainbutton')[2].style.height = "50px";
});

/*-----------------------------10 FACTS---------------------------------*/
document.getElementById('AKB48Select').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('AKB48Select'));
    document.getElementById('AKB48').style.display ="block";
    document.getElementById('infobar').innerHTML ="Did you know that in Japan, there is an group of idols in Japan that contains over 130 ladies that range from mid-teens to mid-20's. They are know as the group AKB48. Founded in 2005, Over 13,000 ladies auditioned to be apart of the group. Only 48 were chosen at the time. The idols are separated into different groups throughout Japan.";
});

document.getElementById('SyntheticSelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('SyntheticSelect'));
    document.getElementById('Miku').style.display ="block";
    document.getElementById('infobar').innerHTML ="Hatsune Miku, the idol in the video, was created as a voice synthesizer program by the company Crypton Media. Ever since her debut in 2007, she has brought in over 10,000,000,000 yen, or $112,800,000 CAD, through her merchandise. Though the most popular vocaloids are Japanese, the original vocaloids were English";
});

document.getElementById('RockSelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('RockSelect'));
    document.getElementById('rock').style.display ="block";
    document.getElementById('infobar').innerHTML ="Rock and roll was first introduced in America in the early 1950's. It quickly spread through to the rest of the world. This music typically was centered around the electrical guitar. There are many different subtypes of rock, including soft rock, hard rock, metal, punk rock and many more.";
});
document.getElementById('JpopSelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('JpopSelect'));
    document.getElementById('Jpop').style.display ="block";
    document.getElementById('infobar').innerHTML ="J-pop entered the mainstream of Japan during the 90's. J-pop takes its roots from traditional Japanese music, but was impacted by bands like The Beatles and The Beach Boys. Certain bands like Glay and B'z were breaking records with 4.87 million copies sold and 5.12 million copies respectively in 1998. During the late 2000s and early 2010, the anime industry added weight to the Japanese music. Japanese indie music influenced the genre at the 2006 FanimeCon.";
});
document.getElementById('KpopSelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('KpopSelect'));
    document.getElementById('Kpop').style.display ="block";
    document.getElementById('infobar').innerHTML ="K-pop, despite originating from South Korea, is popular across the entire globe. Gaining increasing popularity among the Middle East and Africa. Some concerts bring in a very large audience which can include over 500,000 people for one tour to 1.5 million.";
});
document.getElementById('PopSelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('PopSelect'));
    document.getElementById('Pop').style.display ="block";
    document.getElementById('infobar').innerHTML ="Pop music was originally defined as music that was distiguishable from popular, jazz, and folk music. That definition has evolved over the years. According to the website <i>The New Grove Dictionary of Music and Musicians</i> the term pop music originated in Britain as a description of rock and roll and the new youth styles that influenced it.";
});
document.getElementById('CountrySelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('CountrySelect'));
    document.getElementById('Country').style.display ="block";
    document.getElementById('infobar').innerHTML ="Country Music originated from Southern America in the early 1920's. Bristol,Tennessee, has been formally recognized by the US Congress as the \"Birthplace of Country Music\". Country music often consists of banjos, electric and acoustic guitars and fiddles as well as harmonicas." 
});
document.getElementById('ParodySelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('ParodySelect'));
    document.getElementById('WeirdAl').style.display ="block";
    document.getElementById('infobar').innerHTML ="Parody Music involves changing or copying musical ideas and lyrics. A parody does not have to be made for comedic effect. Parody music existed in the 16th century which took existing lyrics from multiple pieces to create their own.";
});
document.getElementById('ClassicalSelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('ClassicalSelect'));
    document.getElementById('Classical').style.display ="block";
    document.getElementById('infobar').innerHTML ="Did you know that classical music only describes one of the three periods in history known as the Common Practice Period. The other two are Baroque and Romantic. This period is often associated with composers like Haydn, Mozart and Beethoven.";
});
document.getElementById('MetalSelect').addEventListener('click',function(){
    DeSelectAll();
    Selected(document.getElementById('MetalSelect'));
    document.getElementById('Metallica').style.display ="block";
    document.getElementById('infobar').innerHTML ="A genre of music associated with thick, massive sounds, amplified distortions and just generally loud. Many subgenres of heavy metal developed including: Alternative Metal, Nu Metal, Avant-garde Metal, Black Metal, Christian Metal, Death Metal, Folk Metal, Kawaii Metal, Metalcore, Thrash Metal, etc.";
});


/*----------------------------VIDEO PLAYER----------------------------*/
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}


/*-------------------------------------CONCERT-----------------------------------------------------*/
document.getElementById('exitshow').addEventListener('click',function(){
    CloseEverything();
    document.getElementById('topbar').style.display = "block";
    document.getElementById('main').style.display ="block";
    document.getElementById('Theshow').style.display = "none";
});

document.getElementById('insertglowsticks').addEventListener('click',function(){
    createGlowsticks()
    counter+=1
    document.getElementById("counter").innerHTML = counter+"/50"
});

document.getElementById('howtoconcert').addEventListener('click',function(){
    document.getElementById('howtoconcert').style.display ="none";
});
/*----------------------ROTATING GLOWSTICKS-----------------------------------*/
var rotated = false;

window.addEventListener('keyup',function(ev) {   
    if(ev.keyCode == 32){
        deg = rotated ? 0 : 66;
        for(var n=0; n < glowsticks.length; n++){
            if (parseInt(glowsticks[n].style.left) < 50){
                glowsticks[n].style.transform = 'rotate('+deg+'deg)'; 
                
                rotated = !rotated;
                }
            else{
            glowsticks[n].style.transform = 'rotate(-'+deg+'deg)'; 

            rotated = !rotated;
            }
        }
    }
});



/*--------------------------------------------------------QUIZ------------------------------------------------------------*/
var question = document.getElementById('questionbox');
var response = document.getElementById('response');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var n = 0

var QArray = ["Question 1: K-pop is popular in what parts of the globe?","Question 2: Does Parody Music have to be comedic?","Question 3: Pop music was originally defined as:","Question 4: Where is the Birthplace of Country Music?","Question 5: How many members are currently in AKB48?","Question 6: Which company created Hatsune Miku?","Question 7: What are the three periods in the Common Practice Era?","Question 8: When was Rock and Roll first Introduced?","Question 9: What bands impacted the J-pop scene?","Question 10: Which of these is not a subgenre of heavy metal?"];
var A1Array = ["America","Yes","Music that isn't jazz, folk, or popular","Nashville, Tennesse","48","Yamaha","Jurassic, Triassic, Creataceous","1940's","British Rock Bands","Alternative Metal"];
var A2Array = ["Asia","No","Music to listen to when you drink soda","Bristol,Tennesse","over 130","Crypton Media","Classical, Post-Modernism, Neo-classical","1950's","Korean Pop","Kawaii Metal"];
var A3Array = ["Africa","","Music that defines a generation","Memphis, Tennesse","6","Capcom","Baroque, Classical, Romantic","1960's","Jazz","Death Metal"]
var A4Array = ["All over the globe","","Your father's music","Knoxville, Tennesse","24","Sega", "Middle Ages, Rennaisance, Classical","1970's","Indian Folk Music","Romantic Metal"]

document.getElementById('quizwelcome').addEventListener('click',function(){
    document.getElementById('quizwelcome').style.display ="none";
    document.getElementById('answerbox').style.display ="block";
    document.getElementById('questionbox').style.display="block"; 
    n = 0;
    question.innerHTML = QArray[0];
    answer1.innerHTML = A1Array[0];
    answer2.innerHTML = A2Array[0];
    answer3.innerHTML = A3Array[0];
    answer4.innerHTML = A4Array[0];
    if (n > 9){
        document.getElementById('quiz').style.display = "none";
    }
});

function Response(score){
    if (score < 5){results.innerHTML = "<br>You got "+correct+" correct out of 10<br><br>You still have some ways to go"}
    else if (score >= 5 && score < 7){results.innerHTML = "<br>You got "+correct+" correct out of 10<br><br>You get a passing grade."}
    else if (score >= 7 && score < 9){results.innerHTML = "<br>You got "+correct+" correct out of 10<br><br>Wow, you're pretty good at this."}
    else if (score ==9){results.innerHTML = "<br>You got "+correct+" correct out of 10<br><br>Holy Moly, you almost made a perfect score."}
    else if (score == 10){results.innerHTML ="<br>You got "+correct+" correct out of 10<br><br>You've been practicing haven't you. Congratulations on a perfect score."}
    else {response.innerHTML = "<br>You got "+correct+" correct out of 10<br><br>You've been caught cheating mister!!!"}
    
}

function PickAnswer(answer){
    if (answer.innerHTML == A4Array[0]||answer.innerHTML == A2Array[1]||answer.innerHTML == A1Array[2]||answer.innerHTML == A2Array[3]||answer.innerHTML == A2Array[4]||answer.innerHTML == A2Array[5]||answer.innerHTML == A3Array[6]||answer.innerHTML == A2Array[7]||answer.innerHTML == A1Array[8]||answer.innerHTML == A4Array[9]){correct+=1};
    n+=1;
    question.innerHTML = QArray[n];
    answer1.innerHTML = A1Array[n];
    answer2.innerHTML = A2Array[n];
    answer3.innerHTML = A3Array[n];
    answer4.innerHTML = A4Array[n];
    if (n > 9){
        document.getElementById("questionbox").style.display = "none";
        document.getElementById("answerbox").style.display = "none";
        document.getElementById("results").style.display ="block";
        document.getElementById("save").style.display ="block";
        document.getElementById("load").style.display ="block";
        document.getElementById("results").innerHTML = "<br>You got "+correct+" correct out of 10";
        Response(correct);
    };
}

answer1.addEventListener("click",function(){
    PickAnswer(answer1)
});
answer2.addEventListener("click",function(){
    PickAnswer(answer2)
});
answer3.addEventListener("click",function(){
    PickAnswer(answer3)
});
answer4.addEventListener("click",function(){
    PickAnswer(answer4)
});

/*---------------------------STORE LOCALLY----------------------*/
var localname = localStorage.getItem('name');
document.getElementById('save').addEventListener('click',function(){
    var obj = {
        name: document.getElementById('yourname').value,
        favoriteColor: document.getElementById('favcolor').value,
        score: correct
    };
    array.push(obj);
    
    var txt = JSON.stringify(array);
    console.log(txt,array);
    localStorage.setItem("name",txt)
    });

document.getElementById('load').addEventListener('click',function(){
    results.innerHTML =""
    for (var n in array){
        results.innerHTML+= "Name: "+array[n].name+"<br>Favorite Color: "+array[n].favoriteColor+"<br>Score: "+array[n].score+"/10<br><br>"}
        
    });