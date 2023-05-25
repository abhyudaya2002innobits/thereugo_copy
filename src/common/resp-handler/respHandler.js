const ApiResponse = require('./apiResponse')
const { STATUS_CODE, ERROR_TYPE, RESPONSE_STATUS } = require('./constants')

let result

function sendResponse(res, rslt, statusCode = undefined) {
  let err = rslt && rslt.error
  if (err) {
switch (err.errType) {
      case ERROR_TYPE.UNAUTHORIZED:
        return res.status(RESPONSE_STATUS.UNAUTHORIZED).send({...rslt, statusCode:RESPONSE_STATUS.UNAUTHORIZED})
      case ERROR_TYPE.INTERNAL:
        return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send({...rslt, statusCode:RESPONSE_STATUS.INTERNAL_ERROR})
      case ERROR_TYPE.BAD_REQUEST:
        return res.status(RESPONSE_STATUS.BAD_REQUEST).send({...rslt, statusCode:RESPONSE_STATUS.BAD_REQUEST})
      case ERROR_TYPE.NOT_IMPLEMENTED:
        return res.status(RESPONSE_STATUS.NOT_IMPLEMENTED).send({...rslt, statusCode:RESPONSE_STATUS.NOT_IMPLEMENTED})
      case ERROR_TYPE.ALREADY_EXISTS:
        return res.status(RESPONSE_STATUS.ALREADY_EXISTS).send({...rslt, statusCode:RESPONSE_STATUS.ALREADY_EXISTS})
      case ERROR_TYPE.NOT_ALLOWED:
        return res.status(RESPONSE_STATUS.NOT_ALLOWED).send({...rslt, statusCode:RESPONSE_STATUS.NOT_ALLOWED})
      case ERROR_TYPE.FORBIDDEN:
        return res.status(RESPONSE_STATUS.FORBIDDEN).send({...rslt, statusCode:RESPONSE_STATUS.FORBIDDEN})
      case ERROR_TYPE.NOT_FOUND:
        return res.status(RESPONSE_STATUS.NOT_FOUND).send({...rslt, statusCode:RESPONSE_STATUS.NOT_FOUND})
      default:
        return res.status(RESPONSE_STATUS.INTERNAL_ERROR).send({...rslt, statusCode:RESPONSE_STATUS.INTERNAL_ERROR})
    }
  }

  if (statusCode) return res.status(statusCode).send({...rslt, statusCode})
  return res.status(RESPONSE_STATUS.SUCCESS).send({...rslt, statusCode:RESPONSE_STATUS.SUCCESS})
}

function sendError(res, err) {
  if (!err?.errType) {
    err = exception.internalServerError(err)
  }
  result = new ApiResponse(STATUS_CODE.ERROR, err)
  sendResponse(res, result)
}

function sendSuccess(res, result, statusCode = RESPONSE_STATUS.SUCCESS) {
  result = new ApiResponse(STATUS_CODE.SUCCESS, result)
  sendResponse(res, result, statusCode)
}

function sendSuccessWithMsg(res, msg, statusCode = RESPONSE_STATUS.SUCCESS) {
  let rslt = { message: msg }
  let result = new ApiResponse(STATUS_CODE.SUCCESS, rslt)
  sendResponse(res, result, statusCode)
}

module.exports = {
  sendResponse,
  sendError,
  sendSuccess,
  sendSuccessWithMsg,
}
