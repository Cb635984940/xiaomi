function setCookie() {
	if(arguments.length > 1) {
		document.cookie = arguments[0] + "=" + arguments[1]+";path=/";
	} else if(arguments[0].forEach) {
		arguments[0].forEach(function(val, index) {
			document.cookie = `${val.key}=${val.val};path=${val.path};max-age=${val.maxAge}`;
		});
	} else {
		document.cookie = `${arguments[0].key}=${arguments[0].val};path=${arguments[0].path?arguments[0].path:"/"};max-age=${arguments[0].maxAge}`;
	}
}
function getCookie() {
	let obj = {};
	let cookies = document.cookie;
	let arr = cookies.split("; ");
	arr.forEach(function(val, index) {
		let arr1 = val.split("=");
		obj[arr1[0]] = arr1[1];
	});
	return obj;
}
function clearCookie() {
	if(arguments.length > 0) {
		setCookie({
			key: arguments[0],
			val: "",
			path: "/",
			maxAge: -1
		});
	} else {
		let obj = getCookie();
		for(let i in obj) {
			setCookie({
				key: i,
				val: "",
				path: "/",
				maxAge: -1
			});
		}
	}
}
