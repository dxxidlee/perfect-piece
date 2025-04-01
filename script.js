// Emotion Slider
const emotionSlider = document.querySelector('.emotion-slider input[type="range"]');
const emotionValue = document.querySelector('.emotion-value');
const grayBox = document.querySelector('.gray-box');
const modal = document.getElementById('exitModal');

// Handle page leave attempts
let isLeaving = false;
let isModalVisible = false;

// Function to show modal and prevent default action
function showExitModal(e) {
    if (!isLeaving && !isModalVisible) {
        isModalVisible = true;
        e.preventDefault();
        e.returnValue = '';
        modal.style.display = 'block';
        return '';
    }
}

// Function to handle refresh/exit attempts
function handleExitAttempt(e) {
    if (!isLeaving && !isModalVisible) {
        isModalVisible = true;
        e.preventDefault();
        e.stopPropagation();
        modal.style.display = 'block';
        return false;
    }
}

// Prevent any page refresh or tab exit
window.addEventListener('beforeunload', showExitModal);

// Prevent all refresh attempts
window.addEventListener('keydown', handleExitAttempt, true);
window.addEventListener('keyup', handleExitAttempt, true);
window.addEventListener('keypress', handleExitAttempt, true);

// Prevent right-click menu
document.addEventListener('contextmenu', handleExitAttempt, true);

// Prevent browser back/forward buttons
window.addEventListener('popstate', handleExitAttempt, true);

// Prevent browser refresh button
window.addEventListener('unload', handleExitAttempt, true);

// Modal button handlers
document.querySelector('.modal-button.stay').addEventListener('click', () => {
    isModalVisible = false;
    modal.style.display = 'none';
});

document.querySelector('.modal-button.leave').addEventListener('click', () => {
    isLeaving = true;
    isModalVisible = false;
    window.location.href = 'about:blank';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        isModalVisible = false;
        modal.style.display = 'none';
    }
});

const emotionLabels = [
    'NO EMOTION',
    'MILD EMOTION',
    'EMOTION',
    'STRONG EMOTION',
    'INTENSE EMOTION'
];

// Define all possible values
const colorOptions = ['VERMILION', 'ULTRAMARINE', 'OCHRE', 'VIRIDIAN'];
const depthOptions = ['ABYSS', 'CHASM', 'GRADIENT', 'OBSCURITY'];

// Create mapping for all combinations
const imageMapping = {
    // VERMILION combinations (20)
    'VERMILION_NO EMOTION_ABYSS': 1,
    'VERMILION_NO EMOTION_CHASM': 2,
    'VERMILION_NO EMOTION_GRADIENT': 3,
    'VERMILION_NO EMOTION_OBSCURITY': 4,
    'VERMILION_MILD EMOTION_ABYSS': 5,
    'VERMILION_MILD EMOTION_CHASM': 6,
    'VERMILION_MILD EMOTION_GRADIENT': 7,
    'VERMILION_MILD EMOTION_OBSCURITY': 8,
    'VERMILION_EMOTION_ABYSS': 9,
    'VERMILION_EMOTION_CHASM': 10,
    'VERMILION_EMOTION_GRADIENT': 11,
    'VERMILION_EMOTION_OBSCURITY': 12,
    'VERMILION_STRONG EMOTION_ABYSS': 13,
    'VERMILION_STRONG EMOTION_CHASM': 14,
    'VERMILION_STRONG EMOTION_GRADIENT': 15,
    'VERMILION_STRONG EMOTION_OBSCURITY': 16,
    'VERMILION_INTENSE EMOTION_ABYSS': 17,
    'VERMILION_INTENSE EMOTION_CHASM': 18,
    'VERMILION_INTENSE EMOTION_GRADIENT': 19,
    'VERMILION_INTENSE EMOTION_OBSCURITY': 20,

    // ULTRAMARINE combinations (20)
    'ULTRAMARINE_NO EMOTION_ABYSS': 21,
    'ULTRAMARINE_NO EMOTION_CHASM': 22,
    'ULTRAMARINE_NO EMOTION_GRADIENT': 23,
    'ULTRAMARINE_NO EMOTION_OBSCURITY': 24,
    'ULTRAMARINE_MILD EMOTION_ABYSS': 25,
    'ULTRAMARINE_MILD EMOTION_CHASM': 26,
    'ULTRAMARINE_MILD EMOTION_GRADIENT': 27,
    'ULTRAMARINE_MILD EMOTION_OBSCURITY': 28,
    'ULTRAMARINE_EMOTION_ABYSS': 29,
    'ULTRAMARINE_EMOTION_CHASM': 30,
    'ULTRAMARINE_EMOTION_GRADIENT': 31,
    'ULTRAMARINE_EMOTION_OBSCURITY': 32,
    'ULTRAMARINE_STRONG EMOTION_ABYSS': 33,
    'ULTRAMARINE_STRONG EMOTION_CHASM': 34,
    'ULTRAMARINE_STRONG EMOTION_GRADIENT': 35,
    'ULTRAMARINE_STRONG EMOTION_OBSCURITY': 36,
    'ULTRAMARINE_INTENSE EMOTION_ABYSS': 37,
    'ULTRAMARINE_INTENSE EMOTION_CHASM': 38,
    'ULTRAMARINE_INTENSE EMOTION_GRADIENT': 39,
    'ULTRAMARINE_INTENSE EMOTION_OBSCURITY': 40,

    // OCHRE combinations (20)
    'OCHRE_NO EMOTION_ABYSS': 41,
    'OCHRE_NO EMOTION_CHASM': 42,
    'OCHRE_NO EMOTION_GRADIENT': 43,
    'OCHRE_NO EMOTION_OBSCURITY': 44,
    'OCHRE_MILD EMOTION_ABYSS': 45,
    'OCHRE_MILD EMOTION_CHASM': 46,
    'OCHRE_MILD EMOTION_GRADIENT': 47,
    'OCHRE_MILD EMOTION_OBSCURITY': 48,
    'OCHRE_EMOTION_ABYSS': 49,
    'OCHRE_EMOTION_CHASM': 50,
    'OCHRE_EMOTION_GRADIENT': 51,
    'OCHRE_EMOTION_OBSCURITY': 52,
    'OCHRE_STRONG EMOTION_ABYSS': 53,
    'OCHRE_STRONG EMOTION_CHASM': 54,
    'OCHRE_STRONG EMOTION_GRADIENT': 55,
    'OCHRE_STRONG EMOTION_OBSCURITY': 56,
    'OCHRE_INTENSE EMOTION_ABYSS': 57,
    'OCHRE_INTENSE EMOTION_CHASM': 58,
    'OCHRE_INTENSE EMOTION_GRADIENT': 59,
    'OCHRE_INTENSE EMOTION_OBSCURITY': 60,

    // VIRIDIAN combinations (20)
    'VIRIDIAN_NO EMOTION_ABYSS': 61,
    'VIRIDIAN_NO EMOTION_CHASM': 62,
    'VIRIDIAN_NO EMOTION_GRADIENT': 63,
    'VIRIDIAN_NO EMOTION_OBSCURITY': 64,
    'VIRIDIAN_MILD EMOTION_ABYSS': 65,
    'VIRIDIAN_MILD EMOTION_CHASM': 66,
    'VIRIDIAN_MILD EMOTION_GRADIENT': 67,
    'VIRIDIAN_MILD EMOTION_OBSCURITY': 68,
    'VIRIDIAN_EMOTION_ABYSS': 69,
    'VIRIDIAN_EMOTION_CHASM': 70,
    'VIRIDIAN_EMOTION_GRADIENT': 71,
    'VIRIDIAN_EMOTION_OBSCURITY': 72,
    'VIRIDIAN_STRONG EMOTION_ABYSS': 73,
    'VIRIDIAN_STRONG EMOTION_CHASM': 74,
    'VIRIDIAN_STRONG EMOTION_GRADIENT': 75,
    'VIRIDIAN_STRONG EMOTION_OBSCURITY': 76,
    'VIRIDIAN_INTENSE EMOTION_ABYSS': 77,
    'VIRIDIAN_INTENSE EMOTION_CHASM': 78,
    'VIRIDIAN_INTENSE EMOTION_GRADIENT': 79,
    'VIRIDIAN_INTENSE EMOTION_OBSCURITY': 80
};

// Track all selections
let selections = {
    color: null,
    emotion: null,
    depth: null
};

// Function to check if all selections are made and show appropriate image
function checkAndShowImage() {
    if (selections.color && selections.emotion && selections.depth) {
        const combination = `${selections.color}_${selections.emotion}_${selections.depth}`;
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
                    selections.color = selectedValue;
                } else if (number === '(03)') {
                    selections.depth = selectedValue;
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