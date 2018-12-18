var webPush = require('web-push')

var pushSubscription = {
  "endpoint": "https://android.googleapis.com/gcm/send/cdBZ1nIenAE:APA91bGto686pJ05YUyCeuXahBpxu7aXoe8D8ty8WtoqDWSBd1lCXmVaJ2WW9rIi1fII7U8_36tfPqjN1bgzMMemDyo5omFIWcLfV8960aDkzuTw4LImZSh7Troi_oJC_sjxK4Q3AwvS",
  "keys": {
    "p256dh": "BI/MogJmpQupz9GTQKWwJPMtHt4XQnmmsIVX8PAA1VPeZVkcOLYsH8RtA5+zfu6jYWGrzKrnP9AhJkMJpyxnDd0=",
    "auth": "Y3tv+77e9TjieEfuv7FGug=="
  }
}

var payload = "here is payload"

var options = {
  gcmAPIKey: 'AAAA27e1R6w:APA91bHL4SpSGJZBNFCoCn29BJi9wBjiS67zHhjyBEwzB2q8X7wJD_1sQPVAY6e4_faFHxJQXCSztXryBXWPa8oqeIb1aVJOZdKgPnRzIXb6vpczL6zJEAmrKAml8Yf0A5RqOK8Bxl-m',
  TTL: 60
}

webPush.sendNotification(
  pushSubscription,
  payload,
  options
)