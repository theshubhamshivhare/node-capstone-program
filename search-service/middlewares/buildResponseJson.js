exports.responseJson = (status, code, result) => {
    console.log('result is ', result);
    let response = {};
    response.status = status;
    response.code = code;
    if (result) {
        response.data = result
    }
    return response;
}


exports.loggerJson = (url, req, resp, err, filename) => {
    let response = {};
    response.url = url;
    response.req = req;
    response.resp = resp;
    response.err = err;
    response.filename = filename;
    return response;
}

