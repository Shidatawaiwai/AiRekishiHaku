
let trueOrFalse = function(Name,correct){

    let element = document.getElementsByName(Name);

    let score = 0;

    for(let i = 0;i<element.length;i++){

        if(element.item(i).checked){
            if(i+1 == correct){
                score = 1;
            }else{
                score =  0;
            }
            break;
        }
    }
    return score;

}