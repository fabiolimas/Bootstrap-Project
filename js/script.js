$(document).ready(function(){
    //progress bar

    let containerA=document.querySelector('#circleA');

    let circleA= new ProgressBar.Circle(containerA, {
        color:'#64daf9',
        strokeWidth:8,
        duration:1400,
        from:{color: '#aaa'},
        to:{color:'#64daf9'},

        step:function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value=Math.round(circle.value()*60);
            circle.setText(value);
        }
    });
   

    let containerB=document.querySelector('#circleB');

    let circleB= new ProgressBar.Circle(containerB, {
        color:'#64daf9',
        strokeWidth:8,
        duration:1600,
        from:{color: '#aaa'},
        to:{color:'#64daf9'},

        step:function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value=Math.round(circle.value()*200);
            circle.setText(value);
        }
    });
    

    let containerC=document.querySelector('#circleC');

    let circleC= new ProgressBar.Circle(containerC, {
        color:'#64daf9',
        strokeWidth:8,
        duration:1800,
        from:{color: '#aaa'},
        to:{color:'#64daf9'},

        step:function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value=Math.round(circle.value()*380);
            circle.setText(value);
        }
    });
    

    let containerD=document.querySelector('#circleD');

    let circleD= new ProgressBar.Circle(containerD, {
        color:'#64daf9',
        strokeWidth:8,
        duration:2000,
        from:{color: '#aaa'},
        to:{color:'#64daf9'},

        step:function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value=Math.round(circle.value()*980);
            circle.setText(value);
        }
    });

    
let dataAreaOffset=$('#data-area').offset();
let stop=0;
$(window).scroll(function(e){
    let scroll=$(window).scrollTop();

    if(scroll> (dataAreaOffset.top-500) && stop ==0){
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);
    }
});
//paralax

setTimeout(function(){
    $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
}, 250);
});