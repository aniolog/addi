import { verifyUserData } from './goverment-service';
import { verifyPoliceRecords } from './police-service';
import { ACCEPTANCE_COEFFICIENT } from '../Constants';
import { getUserScore } from './addi-service';

export const validatePerson = async (data) => {
  try {
    let response = false;
    const [{ response: dataResponse }, { qty }] =
      await Promise.all([
          verifyUserData(data),
          verifyPoliceRecords(data.id)
      ]);
    if (dataResponse & qty === 0){
        const { score } = await getUserScore();
        response = score >= ACCEPTANCE_COEFFICIENT;
    }
    return response;
  } catch (error) {
    return false; 
  }
};