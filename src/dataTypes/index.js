
/**
 *
 */
class DataTypes {
  /**
   * CHAR Holds a fixed length string that can contain letters, number and special characters
   * can store up to 255 characters
   * @param { integer } size - CHAR size
   * @returns { string }
   */
  static Char(size = 255) {
    if (typeof size !== 'number') {
      throw new Error(`invalid type expected a number but got a ${typeof size} instead`);
    }

    return `CHAR(${size})`;
  }

  /**
   * VARCHAR Holds a variable length string that can contain letters, numbers,
   * and special characters. Can store up to 255 characters
   * NOTE: if you put a greater value than 255 it will be converted to a TEXT type
   * @param { size } size - VARCHAR size
   * @returns { string }
   */
  static VarChar(size = 255) {
    if (typeof size !== 'number') {
      throw new Error(`invalid type expected a number but got a ${typeof size} instead`);
    }

    return `VARCHAR(${size})`;
  }

  /**
   * TINYTEXT Holds a string with a maximum length of 255 characters
   * @returns { string }
   */
  static TinyText() {
    return 'TINYTEXT';
  }

  /**
   * TEXT Holds s string with the maximum length of 65,535
   * @returns { string }
   */
  static Text() {
    return 'TEXT';
  }

  /**
   * BLOB Holds up to 65,535 bytes of data
   * @returns { string }
   */
  static Blob() {
    return 'BLOB';
  }
}

module.exports = DataTypes;
