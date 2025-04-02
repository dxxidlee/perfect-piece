// Emotion Slider
const emotionSlider = document.querySelector('.emotion-slider input[type="range"]');
const emotionValue = document.querySelector('.emotion-value');
const grayBox = document.querySelector('.gray-box');

const emotionLabels = [
    'NOT EMOTIONAL',
    'MILDLY EMOTIONAL',
    'EMOTIONAL',
    'STRONGLY EMOTIONAL',
    'INTENSELY EMOTIONAL'
];

// Define all possible values
const styleOptions = ['ABSTRACT', 'FIGURE', 'SURREALISTIC', 'MINIMALISTIC'];
const mediumOptions = ['PAINTING', 'SCULPTURE', 'POSTER', 'PHOTOGRAPHY'];

// Create mapping for all combinations
const imageMapping = {
    // ABSTRACT combinations (20)
    'ABSTRACT_NOT EMOTIONAL_PAINTING': 1,
    'ABSTRACT_NOT EMOTIONAL_SCULPTURE': 2,
    'ABSTRACT_NOT EMOTIONAL_POSTER': 3,
    'ABSTRACT_NOT EMOTIONAL_PHOTOGRAPHY': 4,
    'ABSTRACT_MILDLY EMOTIONAL_PAINTING': 5,
    'ABSTRACT_MILDLY EMOTIONAL_SCULPTURE': 6,
    'ABSTRACT_MILDLY EMOTIONAL_POSTER': 7,
    'ABSTRACT_MILDLY EMOTIONAL_PHOTOGRAPHY': 8,
    'ABSTRACT_EMOTIONAL_PAINTING': 9,
    'ABSTRACT_EMOTIONAL_SCULPTURE': 10,
    'ABSTRACT_EMOTIONAL_POSTER': 11,
    'ABSTRACT_EMOTIONAL_PHOTOGRAPHY': 12,
    'ABSTRACT_STRONGLY EMOTIONAL_PAINTING': 13,
    'ABSTRACT_STRONGLY EMOTIONAL_SCULPTURE': 14,
    'ABSTRACT_STRONGLY EMOTIONAL_POSTER': 15,
    'ABSTRACT_STRONGLY EMOTIONAL_PHOTOGRAPHY': 16,
    'ABSTRACT_INTENSELY EMOTIONAL_PAINTING': 17,
    'ABSTRACT_INTENSELY EMOTIONAL_SCULPTURE': 18,
    'ABSTRACT_INTENSELY EMOTIONAL_POSTER': 19,
    'ABSTRACT_INTENSELY EMOTIONAL_PHOTOGRAPHY': 20,

    // FIGURE combinations (20)
    'FIGURE_NOT EMOTIONAL_PAINTING': 21,
    'FIGURE_NOT EMOTIONAL_SCULPTURE': 22,
    'FIGURE_NOT EMOTIONAL_POSTER': 23,
    'FIGURE_NOT EMOTIONAL_PHOTOGRAPHY': 24,
    'FIGURE_MILDLY EMOTIONAL_PAINTING': 25,
    'FIGURE_MILDLY EMOTIONAL_SCULPTURE': 26,
    'FIGURE_MILDLY EMOTIONAL_POSTER': 27,
    'FIGURE_MILDLY EMOTIONAL_PHOTOGRAPHY': 28,
    'FIGURE_EMOTIONAL_PAINTING': 29,
    'FIGURE_EMOTIONAL_SCULPTURE': 30,
    'FIGURE_EMOTIONAL_POSTER': 31,
    'FIGURE_EMOTIONAL_PHOTOGRAPHY': 32,
    'FIGURE_STRONGLY EMOTIONAL_PAINTING': 33,
    'FIGURE_STRONGLY EMOTIONAL_SCULPTURE': 34,
    'FIGURE_STRONGLY EMOTIONAL_POSTER': 35,
    'FIGURE_STRONGLY EMOTIONAL_PHOTOGRAPHY': 36,
    'FIGURE_INTENSELY EMOTIONAL_PAINTING': 37,
    'FIGURE_INTENSELY EMOTIONAL_SCULPTURE': 38,
    'FIGURE_INTENSELY EMOTIONAL_POSTER': 39,
    'FIGURE_INTENSELY EMOTIONAL_PHOTOGRAPHY': 40,

    // SURREALISTIC combinations (20)
    'SURREALISTIC_NOT EMOTIONAL_PAINTING': 41,
    'SURREALISTIC_NOT EMOTIONAL_SCULPTURE': 42,
    'SURREALISTIC_NOT EMOTIONAL_POSTER': 43,
    'SURREALISTIC_NOT EMOTIONAL_PHOTOGRAPHY': 44,
    'SURREALISTIC_MILDLY EMOTIONAL_PAINTING': 45,
    'SURREALISTIC_MILDLY EMOTIONAL_SCULPTURE': 46,
    'SURREALISTIC_MILDLY EMOTIONAL_POSTER': 47,
    'SURREALISTIC_MILDLY EMOTIONAL_PHOTOGRAPHY': 48,
    'SURREALISTIC_EMOTIONAL_PAINTING': 49,
    'SURREALISTIC_EMOTIONAL_SCULPTURE': 50,
    'SURREALISTIC_EMOTIONAL_POSTER': 51,
    'SURREALISTIC_EMOTIONAL_PHOTOGRAPHY': 52,
    'SURREALISTIC_STRONGLY EMOTIONAL_PAINTING': 53,
    'SURREALISTIC_STRONGLY EMOTIONAL_SCULPTURE': 54,
    'SURREALISTIC_STRONGLY EMOTIONAL_POSTER': 55,
    'SURREALISTIC_STRONGLY EMOTIONAL_PHOTOGRAPHY': 56,
    'SURREALISTIC_INTENSELY EMOTIONAL_PAINTING': 57,
    'SURREALISTIC_INTENSELY EMOTIONAL_SCULPTURE': 58,
    'SURREALISTIC_INTENSELY EMOTIONAL_POSTER': 59,
    'SURREALISTIC_INTENSELY EMOTIONAL_PHOTOGRAPHY': 60,

    // MINIMALISTIC combinations (20)
    'MINIMALISTIC_NOT EMOTIONAL_PAINTING': 61,
    'MINIMALISTIC_NOT EMOTIONAL_SCULPTURE': 62,
    'MINIMALISTIC_NOT EMOTIONAL_POSTER': 63,
    'MINIMALISTIC_NOT EMOTIONAL_PHOTOGRAPHY': 64,
    'MINIMALISTIC_MILDLY EMOTIONAL_PAINTING': 65,
    'MINIMALISTIC_MILDLY EMOTIONAL_SCULPTURE': 66,
    'MINIMALISTIC_MILDLY EMOTIONAL_POSTER': 67,
    'MINIMALISTIC_MILDLY EMOTIONAL_PHOTOGRAPHY': 68,
    'MINIMALISTIC_EMOTIONAL_PAINTING': 69,
    'MINIMALISTIC_EMOTIONAL_SCULPTURE': 70,
    'MINIMALISTIC_EMOTIONAL_POSTER': 71,
    'MINIMALISTIC_EMOTIONAL_PHOTOGRAPHY': 72,
    'MINIMALISTIC_STRONGLY EMOTIONAL_PAINTING': 73,
    'MINIMALISTIC_STRONGLY EMOTIONAL_SCULPTURE': 74,
    'MINIMALISTIC_STRONGLY EMOTIONAL_POSTER': 75,
    'MINIMALISTIC_STRONGLY EMOTIONAL_PHOTOGRAPHY': 76,
    'MINIMALISTIC_INTENSELY EMOTIONAL_PAINTING': 77,
    'MINIMALISTIC_INTENSELY EMOTIONAL_SCULPTURE': 78,
    'MINIMALISTIC_INTENSELY EMOTIONAL_POSTER': 79,
    'MINIMALISTIC_INTENSELY EMOTIONAL_PHOTOGRAPHY': 80
};

// Track all selections
let selections = {
    style: null,
    emotion: null,
    medium: null
};

// Function to check if all selections are made and show appropriate image
function checkAndShowImage() {
    if (selections.style && selections.emotion && selections.medium) {
        const combination = `${selections.style}_${selections.emotion}_${selections.medium}`;
        const imageNumber = imageMapping[combination];
        
        if (imageNumber) {
            grayBox.style.backgroundImage = `url("img/img_${imageNumber}.png")`;
            grayBox.style.backgroundSize = 'cover';
            grayBox.style.backgroundPosition = 'center';
        } else {
            grayBox.style.backgroundImage = 'none';
            grayBox.style.backgroundColor = '#808080';
        }
    } else {
        grayBox.style.backgroundImage = 'none';
        grayBox.style.backgroundColor = '#808080';
    }
}

emotionSlider.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    emotionValue.textContent = emotionLabels[value];
    
    // Update the button text with the selected emotion
    const emotionButton = document.querySelector('.hover-button:nth-child(2)');
    const buttonText = emotionButton.querySelector('span');
    buttonText.textContent = `(02)${emotionLabels[value]}`;
    
    // Update selections
    selections.emotion = emotionLabels[value];
    checkAndShowImage();
});

// Hover behavior for dropdowns and emotion slider
const hoverButtons = document.querySelectorAll('.hover-button');

hoverButtons.forEach(button => {
    const dropdown = button.querySelector('.dropdown');
    const emotionSlider = button.querySelector('.emotion-slider');
    let timeout;

    // Mouse enter on button
    button.addEventListener('mouseenter', () => {
        if (dropdown) dropdown.style.display = 'block';
        if (emotionSlider) emotionSlider.style.display = 'block';
        button.querySelector('span').style.color = '#808080';
    });

    // Mouse leave from button
    button.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            if (dropdown) dropdown.style.display = 'none';
            if (emotionSlider) emotionSlider.style.display = 'none';
            button.querySelector('span').style.color = '#000';
        }, 100);
    });

    // Mouse enter on dropdown/slider
    if (dropdown) {
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            dropdown.style.display = 'block';
            button.querySelector('span').style.color = '#808080';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
            button.querySelector('span').style.color = '#000';
        });

        // Handle option hover and click events
        const options = dropdown.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('mouseenter', () => {
                option.style.color = '#808080';
            });

            option.addEventListener('mouseleave', () => {
                option.style.color = '#000';
            });

            option.addEventListener('click', () => {
                // Store the selected value
                const selectedValue = option.textContent;
                const buttonText = button.querySelector('span');
                const number = buttonText.textContent.match(/\(\d+\)/)[0];
                buttonText.textContent = `${number}${selectedValue}`;
                
                // Update selections based on which dropdown was clicked
                if (number === '(01)') {
                    selections.style = selectedValue;
                } else if (number === '(03)') {
                    selections.medium = selectedValue;
                }
                
                // Hide the dropdown
                dropdown.style.display = 'none';
                button.querySelector('span').style.color = '#000';

                // Check if we should show an image
                checkAndShowImage();
            });
        });
    }

    if (emotionSlider) {
        emotionSlider.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            emotionSlider.style.display = 'block';
            button.querySelector('span').style.color = '#808080';
        });

        emotionSlider.addEventListener('mouseleave', () => {
            emotionSlider.style.display = 'none';
            button.querySelector('span').style.color = '#000';
        });
    }
}); 