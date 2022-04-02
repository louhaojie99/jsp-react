import axios from 'axios';

function getAction(url, data) {
	return axios({
		url,
		method: 'get',
		headers: {
			'Content-Type': 'text/html;charset=utf-8',
		},
		params: data,
	});
}

function postAction(url, data) {
	return axios({
		url,
		method: 'post',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		data,
	});
}

export { getAction, postAction };
