
function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/FeFGZ2Rag/model.json",modelReady);
    

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error)
    {
        console.log(error);

    }

    else {
        console.log(results);
        
            random_r = Math.floor(Math.random() * 255)+1;
            random_g = Math.floor(Math.random() * 255)+1; 
            random_b = Math.floor(Math.random() *255)+1;

            document.getElementById("result_label").innerHTML="I can Hear -" + results[0].label;
            document.getElementById("result_confidence").innerHTML="Accuracy -" + (results[0].confidence*100).toFixed(2) + "%" ;
            document.getElementById("result_label").style.color = "rgb("+ random_r +"," +random_g + ","+ random_r + ")";
            document.getElementById("result_confidence").style.color = "rgb("+ random_r +"," +random_g + ","+ random_r + ")";


            img1=document.getElementById("dog")
            img2=document.getElementById("cat")
            img3=document.getElementById("tiger")
            img4=document.getElementById("bgs")



            
        

    if(results[0].label== "Dog Barking")
    {
        img1.src="dog.gif";
        img2.src="cat.png";
        img3.src="tiger.png";
        img4.src="background soung.png";

    
    }

    else if(results[0].label== "Cat Meowing")
    {
        img1.src="dog.png";
        img2.src="cat.gif";
        img3.src="tiger.png";
        img4.src="background soung.png";

    }

    else if(results[0].label== "Tiger Roaring")
    {
        img1.src="dog.png";
        img2.src="cat.png";
        img3.src="tigergif.gif";
        img4.src="background soung.png"; 
    
    }

    else 
    {
        img1.src="dog.png";
        img2.src="cat.png";
        img3.src="tiger.png";
        img4.src="background.gif"; 
    
    }

}

}