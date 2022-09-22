const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5677f43143msh3e5d0531f92e92fp1badcajsn7934a00af09f',
		'X-RapidAPI-Host': 'myers-briggs-personality-test.p.rapidapi.com'
	}
};

fetch('https://myers-briggs-personality-test.p.rapidapi.com/personality/I%27m%20selfish,%20impatient%20and%20a%20little%20insecure.%20I%20make%20mistakes,%20I%20am%20out%20of%20control%20and%20at%20times%20hard%20to%20handle.%20But%20if%20you%20can%27t%20handle%20me%20at%20my%20worst,%20then%20you%20sure%20as%20hell%20don%27t%20deserve%20me%20at%20my%20best.', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));