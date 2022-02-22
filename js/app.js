//COCO accent challenge program

function coco(cocoID)
{
    var audio;
    console.log(cocoID);
    if (cocoID == 1)
    {
        audio = new Audio('/sounds/chii.mp3');
        audio.play();
    }
    else if(cocoID == 2)
    {
        audio = new Audio('/sounds/bii.mp3');
        audio.play();
    }
    else
    {
        audio = new Audio('/sounds/mmm.mp3');
        audio.play();
    }

  
    
   

}