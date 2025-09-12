let jsonData = null;

window.onload = async function(){
    let jData =await fetch(" ./../Data/Data.json");
    jsonData = await jData.json();
}

let Ans = function(){
    let score = 0;
    let selector = $("#Score");

    score += trueOrFalse("Q1",jsonData.Music.Q1);
    score += trueOrFalse("Q2",jsonData.Music.Q2);
    score += trueOrFalse("Q3",jsonData.Music.Q3);
    score += trueOrFalse("Q4",jsonData.Music.Q4);

    console.log(`得点は${score}点`);

    selector.html(`得点は、${score}点です（満点は4点）`);

}
