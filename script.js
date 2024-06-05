let currentImageIndex = 1;
let Openness = 0;
let Conscientiousness = 0;
let Extraversion = 0;
let Agreeableness = 0;
let Neuroticism = 0;

document.getElementById('thumbs-up').addEventListener('click', function() {
    if (currentImageIndex === 1) {
        Openness--;
        Conscientiousness++;
        Agreeableness++;
    } 
    else if (currentImageIndex === 2) {
        Openness++;
        Conscientiousness--;
        Extraversion++;
        Agreeableness--;
        Neuroticism++;
    }
    else if (currentImageIndex === 3) {
        Extraversion++;
    }
    else if (currentImageIndex === 4) {
        Openness++;
        Conscientiousness--;
        Extraversion++;
        Agreeableness--;
        Neuroticism++;
    }
    else if (currentImageIndex === 5) {
        Neuroticism++;
    }
    else if (currentImageIndex === 6) {
        Openness--;
        Conscientiousness++;
    }
    else if (currentImageIndex === 7) {
        Openness--;
        Conscientiousness++;
    }
    else if (currentImageIndex === 8) {
        Openness++;
        Conscientiousness--;
    }
    else if (currentImageIndex === 9) {
        Openness++;
        Conscientiousness--;
    }
    else if (currentImageIndex === 10) {
        Openness++;
        Conscientiousness--;
    }
    changeImage();
});

document.getElementById('thumbs-down').addEventListener('click', function() {
    changeImage();
});

function changeImage() {
    currentImageIndex++;
    if (currentImageIndex > 10) {
        localStorage.setItem('Openness', Openness);
        localStorage.setItem('Conscientiousness', Conscientiousness);
        localStorage.setItem('Extraversion', Extraversion);
        localStorage.setItem('Agreeableness', Agreeableness);
        localStorage.setItem('Neuroticism', Neuroticism);
        window.location.href = 'result.html';
    } else {
        document.getElementById('current-image').src = `image${currentImageIndex}.jpg`;
    }
}

function interpretResult(id, positiveMessage, negativeMessage) {
    var capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);
    var value = parseInt(localStorage.getItem(capitalizedId), 10);
    var message = value > 0 ? positiveMessage : negativeMessage;
    document.getElementById(id).innerText = capitalizedId + ": " + message;
}