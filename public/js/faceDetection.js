// $(document).ready(function () {
//     $("#detect").click(function(){
// // use jquery.facedetection.js package
//         // alert("Detecting Face ..............");
//         // $(".pic").faceDetection({
//         //     complete:function(faces){
//         //         console.log(faces, $(this).offset().left, $(this).offset().top)
//         //         alert("Detection Complete");
//         //         for (const element of faces) {
//         //             console.log(element)
//         //             $('<div>', {
//         //                 'class': 'face',
//         //                 'css': {
//         //                     'position': 'absolute',
//         //                     'left':     (element.x * element.scaleX) + 'px',
//         //                     'top':      (element.y * element.scaleY) + 'px',
//         //                     'width':    (element.width * element.scaleX) + 'px',
//         //                     'height':   (element.height * element.scaleY) +'px'
//         //                 }
//         //             })
//         //                 .insertAfter(this);
//         //         }
//         //     },
//         //     error:function(code,message){
//         //         alert("Error: "+message);
//         //     }
//         // });
//     });

//    use face-api.js package
//     document.addEventListener('DOMContentLoaded', async () => {
//         const imageInput = document.getElementById('imageInput');
//         const trainButton = document.getElementById('trainButton');
//
//         trainButton.addEventListener('click', async () => {
//             const files = Array.from(imageInput.files);
//             const labeledImages = await Promise.all(files.map(loadLabeledImage));
//             const model = await trainModel(labeledImages);
//             console.log(files, model)
//             console.log('Model trained:', model);
//         });
//
//         const loadLabeledImage = async (file) => {
//             return new Promise((resolve, reject) => {
//                 const img = new Image();
//                 img.onload = () => resolve(new faceapi.LabeledFaceDescriptors(file.name, [img]));
//                 img.onerror = reject;
//                 img.src = URL.createObjectURL(file);
//             });
//         };
//
//         const descriptors = [
//             new Float32Array([...descriptor1Values]),
//             new Float32Array([...descriptor2Values]),
//             // Add more descriptors as needed
//         ];
//         const trainModel = async (labeledImages) => {
//             const maxDescriptorDistance = 0.6;
//             const labeledFaceDescriptors = new faceapi.LabeledFaceDescriptors(
//                 label,
//                 descriptors
//             );
//             labeledImages.forEach((labeledImage) => labeledFaceDescriptors.set(labeledImage.label, labeledImage.descriptors));
//             const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance);
//             return faceMatcher;
//         };
//     });
// })

// Load models and initialize face-api.js
Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromDisk('node_modules/face-api.js'),
    faceapi.nets.faceRecognitionNet.loadFromDisk('node_modules/face-api.js'),
    faceapi.nets.faceLandmark68Net.loadFromDisk('node_modules/face-api.js')
]).then(start);

// Start the face recognition script
function start() {
    // Event listeners for train button and recognize button
    const trainButton = document.getElementById('trainButton');
    const recognizeButton = document.getElementById('recognizeButton');
    trainButton.addEventListener('click', trainModel);
    recognizeButton.addEventListener('click', recognizeFace);

    // Array to store labeled face descriptors
    const labeledFaceDescriptors = [];

    // Train the face recognition model
    async function trainModel() {
        const trainImageInput = document.getElementById('trainImageInput');
        const files = trainImageInput.files;
        if (files.length === 0) return;

        // Loop through selected images and extract face descriptors
        for (let i = 0; i < files.length; i++) {
            const img = await faceapi.bufferToImage(files[i]);
            const detections = await faceapi.detectSingleFace(img).withFaceDescriptor();
            if (!detections) {
                console.error(`No face detected in image ${i + 1}`);
                continue;
            }

            // Push labeled face descriptor to the array
            const descriptor = detections.descriptor;
            const label = `Person ${i + 1}`;
            labeledFaceDescriptors.push(new faceapi.LabeledFaceDescriptors(label, [descriptor]));
            console.log(`Face ${i + 1} trained`);
        }

        console.log('Training completed');
    }

    // Recognize faces in the test image
    async function recognizeFace() {
        const testImageInput = document.getElementById('testImageInput');
        const file = testImageInput.files[0];
        if (!file) return;

        const img = await faceapi.bufferToImage(file);
        const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();

        if (detections.length === 0) {
            console.error('No faces detected in the test image');
            return;
        }

        // Compare face descriptors with the labeled face descriptors
        const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);
        const results = detections.map(descriptor => faceMatcher.findBestMatch(descriptor.descriptor));

        // Display the results
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Results: ';
        results.forEach((result, i) => {
            const label = result.label;
            const distance = result.distance.toFixed(2);
            resultElement.textContent += `Face ${i + 1}: ${label} (${distance}), `;
        });
    }
}

