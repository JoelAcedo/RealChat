'use strict'

const xhr = require('xhr');
const webrtc2images = require('webrtc2images');

const rtc = new webrtc2images({
    width: 200,
    height: 200,
    frames: 10,
    type: 'images/jpeg',
    quality: 0.4,
    interval: 200
});

rtc.startVideo(function (err) {
    if (err) return console.log(err);
});

const record = document.querySelector('#record');

record.addEventListener('click', function (e) {
    e.preventDefault();

    rtc.recordVideo(function (err, frames) {
        if (err) return console.log(frames);

        xhr({
            uri: '/process',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ images : frames })
        }, function (err, res, body) {
            if (err) return console.log(err);

            console.log(JSON.parse(body));
        });
    });
}, false);
