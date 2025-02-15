import MusicTools from "./MusicTools.js";

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle conversion and display the result
    function handleConversion(inputId, resultId, conversionFunction) {
        const inputElement = document.getElementById(inputId);
        const resultElement = document.getElementById(resultId);
        const inputValue = inputElement.value;

        // Call the appropriate conversion function from MusicTools
        const result = conversionFunction(inputValue);

        // Display the result
        resultElement.textContent = result;
    }

    // Add event listeners to the buttons
    document.getElementById('midiToFreq').addEventListener('click', () => handleConversion('midiInput', 'freqResult', MusicTools.midiPitchToFrequency));
    document.getElementById('freqToMidi').addEventListener('click', () => handleConversion('freqInput', 'midiResult', MusicTools.frequencyToMidiPitch));
    document.getElementById('dbfsToLinear').addEventListener('click', () => handleConversion('dbfsInput', 'linearResult', MusicTools.dbfsToLinearAmplitude));
    document.getElementById('linearToDbfs').addEventListener('click', () => handleConversion('linearInput', 'dbfsResult', MusicTools.linearAmplitudeTodBFS));
});