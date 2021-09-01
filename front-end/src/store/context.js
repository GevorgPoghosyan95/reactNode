import Helper from "../store/helper";
import React, {createContext} from "react";
const context = new Helper();
const Context = createContext({context})

export default Context;