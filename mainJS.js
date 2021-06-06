

var isSumEqual = function(firstWord, secondWord, targetWord) {
    var new_firstWord="";
    var new_secondWord="";
    var new_targetWord="";

    for(let i=0;i<new_firstWord.length;i++){
        if(firstWord[i]=="a"){
            new_firstWord=new_firstWord+"0";
        }
        else if(firstWord[i]=="b"){
            new_firstWord=new_firstWord+"1";
        }
        else if(firstWord[i]=="c"){
            new_firstWord=new_firstWord+"2";
        }
        else if(firstWord[i]=="d"){
            new_firstWord=new_firstWord+"3";
        }
        else if(firstWord[i]=="e"){
            new_firstWord=new_firstWord+"4";
        }
        else if(firstWord[i]=="f"){
            new_firstWord=new_firstWord+"5";
        }
        else if(firstWord[i]=="g"){
            new_firstWord=new_firstWord+"6";
        }
        else if(firstWord[i]=="h"){
            new_firstWord=new_firstWord+"7";
        }
        else if(firstWord[i]=="i"){
            new_firstWord=new_firstWord+"8";
        }
        else if(firstWord[i]=="j"){
            new_firstWord=new_firstWord+"9";
        }


    }
    console.log(new_firstWord);


};

isSumEqual("sadf","sadf","safd");