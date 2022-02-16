import { 
    ADD,
    SUBTRACT
} from "../actions";

export const incAge = (data) => {
    return {
      type: ADD,
      payload: data,
    };
};

export const decAge = (data) => {
    return {
      type: SUBTRACT,
      payload: data,
    };
};

