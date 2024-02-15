// Import the necessary modules
var app = new ExternalObject("lib:\PlugPlugExternalObject");
var audition = app.getApplication("Adobe Audition");

// Define the path to the input .mp4 file
var inputFile = "path/to/input/file.mp4";

// Define the path to the output .mp4 file
var outputFile = "path/to/output/file.mp4";

// Open the input file in Adobe Audition
audition.openDocument(inputFile);

// Apply noise reduction effect
var noiseReductionEffect = audition.effects.noiseReduction;
noiseReductionEffect.enable = true;
noiseReductionEffect.reduceBy = 50;

// Save the modified audio to the output file
audition.saveDocumentAs(outputFile);

// Close the input file
audition.closeDocument();
