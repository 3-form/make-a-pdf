const jsreport = require('jsreport')();

function beforeRender(request, response, done) {
	// Set request.data.template.content to true if request.data.template.content
	// is not given but the request is otherwise to have chrome-pdf take a
	// screenshot of a given url.
	if (request.data.template) {
		request.data.template.content =
			!request.data.template.content &&
			!!request.data.template.chrome &&
			!!request.data.template.chrome.url ||
			request.data.template.content;
	}

	done();
};

jsreport.init().then(() => {
	// running
}).catch(e => {
	console.error(e.stack);
	process.exit(1);
});
