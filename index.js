// import AWS SDK
var AWS = require('aws-sdk');

// config AWS
AWS.config.update({
	accesKeyId: 'YourAccessKey',
	secrectAccsKey: 'YourSecretKey',
	region: 'eu-west-1'
})

// class Rekognition
const rekognition = new AWS.Rekognition();

// input parameters for rekognition
var params = {
	Image: {
		S3Object: {
			Bucket: "MonBucket"
			Name: "MonImageLabel.jpg"
		}

	},
	MaxLabels: 5,
	MinConfidence: 80,
}

//Detection des label 
rekognition.detectlabels(params, function(err, data) {
	if (err) {
		console.log(err, err.stack); 	// Error
	} else {
		console.log(data); 				// Success
	}
})

// input parameters for rekognition
var params = {
	Image: {
		S3Object: {
			Bucket: "MonBucket"
			Name: "MonImageText.png"
		}

	}
}

//Detection des textes
rekognition.detectText(params, function(err, data) {
	if (err) {
		console.log(err, err.stack); 	// Error
	} else {
		console.log(data); 				// Success
	}
})

