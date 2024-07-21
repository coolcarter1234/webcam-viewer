const video = document.getElementById('webcam');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.play();
        })
        .catch(error => {
            console.error("Error accessing webcam: ", error);
        });
} else {
    console.error("getUserMedia not supported in this browser.");
}
