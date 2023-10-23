import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../models/InputValidator.js";
import { MESSAGES } from "../constants/StringMessages.js";

const InputView = {
  async getUserNumber(message) {
    const userNumber = await Console.readLineAsync(message);
    
    if (!InputValidator.hasValidNumber(userNumber)) throw new Error(MESSAGES.INPUT_ERROR);

    return parseInt(userNumber, 10);
  },

  async getUserCommand(message) {
    const userCommand = await Console.readLineAsync(message);

    if (!InputValidator.hasValidCommand(userCommand)) throw new Error(MESSAGES.INPUT_ERROR);

    return parseInt(userCommand, 10);
  },
}

export default InputView;