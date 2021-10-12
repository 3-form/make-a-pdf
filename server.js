const jsreport = require('jsreport')();

function beforeRender(req, res, done) {
	// Set req.data.template.content to true if req.data.template.content is not
	// given but the request is otherwise to have chrome-pdf take a screenshot of
	// a given url.
	if (req.data.template) {
		req.data.template.content =
			!req.data.template.content &&
			!!req.data.template.chrome &&
			!!req.data.template.chrome.url ||
			req.data.template.content;
	}

	done();
};

jsreport.init().then(() => {
	// running
}).catch(e => {
	console.error(e.stack);
	process.exit(1);
});
