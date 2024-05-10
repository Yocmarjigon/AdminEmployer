import { HttpResponse } from "../errors/CustomError.js";
import Admin from "../models/Admin.js";
import { findAll, create, findById, remove} from "../services/AdminService.js";

const _findAll = async (req, res) => {
  const result = await findAll();
  res.send(result);
};

const _findById = async (req, res) => {
  const result = await findById(req.params.id);
  console.log(result.length);
  if (result.length === 0) {
    return HttpResponse.NotFound(res, "Admin not found");
  }
  res.send(result);
};

const _create = async (req, res) => {
  try {
    const result = await create(new Admin(req.body.email, req.body.password));
    if (result.length === 0) {
      return HttpResponse.NotFound(res, "Admin not found");
    }
}catch(error) {
  return HttpResponse.UniqueViolation(res, "Admin already exists");
}
  
  console.log(result);
  res.json(result);
};
const _remove = async(req, res)=>{
try{
  const result = await remove(req.params.id);
  
  if (result.length === 0) {
    return HttpResponse.NotFound(res, "Admin not found");
  }
  res.send({"message": "Admin deleted", "result": result});

}catch(error){
  console.log(error);
}
}

export { _findAll, _create, _findById, _remove }
