let jsonData = null;

window.onload = async function(){
    let jData =await fetch(" ./../Data/Data.json");
    jsonData = await jData.json();
}

let Ans = function(){
    let score = 0;
    let selector = $("#Score");

    score += trueOrFalse("Q1",jsonData.Koten.Q1);
    score += trueOrFalse("Q2",jsonData.Koten.Q2);
    score += trueOrFalse("Q3",jsonData.Koten.Q3);
    score += trueOrFalse("Q4",jsonData.Koten.Q4);
    score += trueOrFalse("Q5",jsonData.Koten.Q5);
    score += trueOrFalse("Q6",jsonData.Koten.Q6);
    score += trueOrFalse("Q7",jsonData.Koten.Q7);
    score += trueOrFalse("Q8",jsonData.Koten.Q8);

    console.log(`得点は${score}点`);

    selector.html(`得点は、${score}点です（満点は8点）`);

}
