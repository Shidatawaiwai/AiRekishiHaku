let jsonData = null;

window.onload = async function(){
    let jData =await fetch(" ./../Data/Data.json");
    jsonData = await jData.json();
}

let Ans = function(){
    let score = 0;
    let selector = $("#Score");

    score += trueOrFalse("Q1",jsonData.SekaTan.Q1);
    score += trueOrFalse("Q2",jsonData.SekaTan.Q2);
    score += trueOrFalse("Q3",jsonData.SekaTan.Q3);
    score += trueOrFalse("Q4",jsonData.SekaTan.Q4);
    score += trueOrFalse("Q5",jsonData.SekaTan.Q5);
    score += trueOrFalse("Q6",jsonData.SekaTan.Q6);


    console.log(`得点は${score}点`);

    selector.html(`得点は、${score}点です（満点は6点）`);

}
