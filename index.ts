import {
  T_COLOR_BLUE,
  T_COLOR_CYAN,
  T_COLOR_GREEN,
  T_COLOR_MAGENTA,
  T_COLOR_RED,
  COLOR_RESET,
  T_COLOR_WHITE,
  T_COLOR_YELLOW,
} from "./constants";

class Color2Console {
  private static buffer: string = null;

  private static addToBuffer(color: string, text?: string) {
    const textToAdd = color + (text ? text : "");
    if (Color2Console.buffer === null) {
      Color2Console.buffer = textToAdd;
    } else {
      Color2Console.buffer += textToAdd;
    }
  }

  static WRITE_LOG() {
    console.log(Color2Console.buffer + COLOR_RESET);
    Color2Console.buffer = null;
  }

  static T_RED(text: string) {
    Color2Console.addToBuffer(T_COLOR_RED, text);
    return this;
  }

  static T_BLUE(text: string) {
    Color2Console.addToBuffer(T_COLOR_BLUE, text);
    return this;
  }

  static T_GREEN(text: string) {
    Color2Console.addToBuffer(T_COLOR_GREEN, text);
    return this;
  }

  static T_YELLOW(text: string) {
    Color2Console.addToBuffer(T_COLOR_YELLOW, text);
    return this;
  }

  static T_MAGENTA(text: string) {
    Color2Console.addToBuffer(T_COLOR_MAGENTA, text);
    return this;
  }

  static T_CYAN(text: string) {
    Color2Console.addToBuffer(T_COLOR_CYAN, text);
    return this;
  }

  static T_WHITE(text: string) {
    Color2Console.addToBuffer(T_COLOR_WHITE, text);
    return this;
  }
  /*
  static BG_BLACK() {
    Color2Console.addToBuffer(BG_COLOR_BLACK);
    return this;
  }

  static BG_RED() {
    Color2Console.addToBuffer(BG_COLOR_RED);
    return this;
  }

  static BG_GREEN() {
    Color2Console.addToBuffer(BG_COLOR_GREEN);
    return this;
  }

  static BG_YELLOW() {
    Color2Console.addToBuffer(BG_COLOR_YELLOW);
    return this;
  }

  static BG_BLUE() {
    Color2Console.addToBuffer(BG_COLOR_BLUE);
    return this;
  }

  static BG_MAGENTA() {
    Color2Console.addToBuffer(BG_COLOR_MAGENTA);
    return this;
  }

  static BG_CYAN() {
    Color2Console.addToBuffer(BG_COLOR_CYAN);
    return this;
  }

  static BG_WHITE() {
    Color2Console.addToBuffer(BG_COLOR_WHITE);
    return this;
  }

  static BG_GRAY() {
    Color2Console.addToBuffer(BG_COLOR_GRAY);
    return this;
  }

  static BG_CRIMSON() {
    Color2Console.addToBuffer(BG_COLOR_CRIMSON);
    return this;
  }
  */
}
export default Color2Console;
