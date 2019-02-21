var webpush = require('web-push');

var pushSubscription = {
    "endpoint" : "https://android.googleapis.com/gcm/send/fRG9QrjA_oI:APA91bFISk1pMWN3zo5iMTQDZaPt4RA1onERtv5GewFgh8tSj8ZluA46-2NC42sBMoBD_gkKfwN0QwqNwY5XjToN7VEja4f5YGQw1_SCjyGdW1nuo5T5wYFraaFYevQ8sUrY0IusTxaH",
    "keys" : {
        "p256dh" : "BNrsniFq2xej0fd/bsnfaRDiigOvBQLTTLKzvp+MIcwyWhnEnWBq4AGsze7G4VfU8m7cKvVZwloRgc7djLrkhLk=",
        "auth" : "Q4UXx4vaIpRoX/Um2o3ydw=="
    }
};

var payload = "Here is a payload!";

var options = {
    gcmAPIKey: 'AAAAmHfFYsc:APA91bFxzNoeuJKiscRZF93-QPUPmv56nA77DXnZ3fsaFI0SIHgbXPe1ECOTACThkmuoHGbhFZI6eH80Anu7nJIH1AxTPMU6QC--K5U9yu_LNbtpllD9KBD2-HMSyhwbdOptitSAlI3s',
    TTL: 60
};

webpush.sendNotification(
    pushSubscription,
    payload,
    options
).catch(function (err) {
    console.log(err)
});