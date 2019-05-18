function getScore(input2){
    var input = input2;
    var newScore = 0;

    if (input.length >= 7) {
        return;
    }

    // Count
    var counter = { 1:0, 2:0,3:0,4:0,5:0,6:0 };
    for (let i = 0; i < input.length; i++) {
        counter[input[i]] += 1;
        console.log(input[i]);
    }

    // Rule for score
    // straight

    if (counter[1] === 1 && counter[2] === 1 && counter[3] === 1 && counter[4] === 1 && counter[5] === 1 && counter[6] === 1) {
        newScore += 1500;
        for (let i = 1; i <= 6; i++) {
            counter[i] = 0;
        }
    }

    for (let i = 1; i <= 6; i++) {
        if (counter[i] === 6) {
            newScore += 5000;
            counter[i] = 0;
        } else if (counter[i] === 5) {
            pendingScore *= 3;
            counter[i] = 0;
        } else if (counter[i] === 4) {
            pendingScore *= 2;
            counter[i] = 0;
        }
    }

    // 2x3 and 3 pairs
    var count2 = 0;
    var count3 = 0;
    var store2 = [];
    var store3 = [];
    for (let i = 1; i <= 6; i++) {
        if (counter[i] === 3) {
            count3 += 1;
            store3.push(i);
        } else if (counter[i] === 2) {
            count2 += 1;
            store2.push(i);
        }
    }

    if (count2 >= 1 && count3 >= 1) {
        newScore += 2000;
        count2 -= 1;
        count3 -= 1;
        counter[store2[0]] = 0;
        counter[store3[0]] = 0;
    }
    if(count2 >= 3){
        newScore += 1000;
        count2 = 0;
    }

    // 6x, 5x, 4x and 3x?
    for (let i = 1; i <= 6; i++) {
        if (counter[i] === 3) {
            if (i === 1) {
                newScore += 1000;
            } else {
                newScore += i * 100;
            }
            counter[i] = 0;
        }
    }

    // 1's and 5's
    newScore += counter[1] * 100;
    newScore += counter[5] * 50;

    // count
    if (newScore === 0) {
        pendingScore = 0;
    } else {
        pendingScore += newScore;
    }

    score += newScore;
    document.getElementById("score").innerHTML = score;
    cleanSelection();
    getDice();
}