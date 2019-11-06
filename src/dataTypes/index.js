
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
}

module.exports = DataTypes;
