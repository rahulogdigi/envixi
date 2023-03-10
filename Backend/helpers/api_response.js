

exports.success_response = function (res, msg) {
	var data = {
		status: 200,
		message: msg
	};
	return res.status(200).json(data);
};

exports.success_response_with_data = function (res, msg, data) {
	var resData = {
		status: 200,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

exports.success_response_with_data_count = function (res, msg, total, data) {
	var resData = {
		status: 200,
		message: msg,
		total: total,
		data: data
	};
	return res.status(200).json(resData);
};


exports.error_response = function (res, msg) {
	var data = {
		status: 500,
		message: msg,
	};
	return res.status(500).json(data);
};

exports.not_found_response = function (res, msg) {
	var data = {
		status: 404,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.parameter_not_found_response = function (res, msg) {
	var data = {
		status: 409,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.validation_error_with_data = function (res, msg, data) {
	var resData = {
		status: 400,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.validation_error = function (res, msg, data) {
	var resData = {
		status: 400,
		message: msg
	};
	return res.status(400).json(resData);
};

exports.unauthorized_response = function (res, msg) {
	var data = {
		status: 401,
		message: msg,
	};
	return res.status(401).json(data);
};


exports.failed_response_already_exists = function (res, msg) {
	var data = {
		status: 409,
		message: msg
	};
	return res.status(409).json(data);
};

