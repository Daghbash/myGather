let model;

//openCvReady is the function that will be executed when the opencv.js file is loaded
function openCvReady() {
    cv['onRuntimeInitialized'] = () => {
        // The variable video extracts the video the video element
        let video = document.getElementById("cam_input"); // video is the id of video tag
        // navigator.mediaDevices.getUserMedia is used to access the webcam
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                console.log("An error occurred! " + err);
            });
    }
}
