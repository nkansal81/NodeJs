class AppError extends Error {
    type;
    message;
    // status code to throw.
    code;
    level;
    stackTrace; 
    isOperational;
    time;
    constructor(
        level,
        type,
        message,
        code,
        isOperational,
    )
    {
    super(message);
    this.type = type;
    this.message = message;
    // status code to throw.
    this.code = code;
    this.level = level;
    // true, when our app throws an error intentionally, e.g.: Missing some input
    this.isOperational = isOperational;
    this.time = new Date();
    this.stackTrace = this.stack || '';
    }
}

const badRequestError = (message,isOperational = true) => {
    return new AppError('Error','Bad Request',message,400,isOperational);
}

const notFound = (message,isOperational=true) =>{
    return new AppError('Error','Not Found',message,404,isOperational);
}

const internalServerError = (message,isOperational=true) =>{
    return new AppError('Error','Internal Server Error',message,500,isOperational);
}

const unAuthorized = (message,isOperational=true) =>{
    return new AppError('Error','Unauthorized',message,403,isOperational);
}
const unAuthenticated = (message,isOperational=true) =>{
    return new AppError('Error','Unauthenticated',message,402,isOperational);
}

// inherit from Error class
// AppError.prototype.__proto__ = Error.prototype;

module.exports = {
    AppError,
    badRequestError
};
