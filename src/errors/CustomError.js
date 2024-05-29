const ErrorTypes = {
  BAD_REQUEST : 400,
  NOT_FOUND : 404,
  UNAUTHORIZED : 401,
  FORBIDDEN : 403,
  UNIQUE_VIOLATION : 409
}


export const HttpResponse = {
  NotFound (res,nessage) {
    return res.status(ErrorTypes.NOT_FOUND).json({"error": "not found", "message": nessage})
  },
  Unauthorized (req, res, next) {
    
  },
  UniqueViolation(res, message){
    return res.status(ErrorTypes.UNIQUE_VIOLATION).json({"error": "unique violation", "message":message})
  },

  FormatViolation(res, message){
    return res.status(ErrorTypes.BAD_REQUEST).json({"error": "format violation", "message":message})
  }
}

/* 
class CustomError extends Error {
  message;
  constructor(message) {
    super(message)
    this.message = message
  }
} */