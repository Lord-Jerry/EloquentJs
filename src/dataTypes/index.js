
class DataTypes {
  /**
   * CHAR Holds a fixed length string that can contain letters, number and special characters
   * can store up to 255 characters
   * @param { integer } size - CHAR size
   * @returns { string }
   */
  static Char(size = 255) {
    return () => {
      if ((typeof size !== 'number') || /\D/.test(size)) {
        throw new TypeError(`Invalid Argument, Expected A Number But Got ${size} Instead`);
      }

      if (size > 255) {
        throw new Error('Maximium Length Of Characters For CHAR DataType Exceeded');
      }

      return `CHAR(${size})`;
    };
  }

  /**
   * VARCHAR Holds a variable length string that can contain letters, numbers,
   * and special characters. Can store up to 255 characters
   * NOTE: if you put a greater value than 255 it will be converted to a TEXT type
   * @param { size } size - VARCHAR size
   * @returns { string }
   */
  static VarChar(size = 255) {
    return () => {
      if ((typeof size !== 'number') || /\D/.test(size)) {
        throw new TypeError(`Invalid Argument, Expected A Number But Got ${size} Instead`);
      }

      if (size > 255) {
        throw new Error('Maximium Length Of Characters For VARCHAR DataType Exceeded');
      }

      return `VARCHAR(${size})`;
    };
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

  /**
   * MEDIUMTEXT Holds a string with a maximum length of 16,777,215 characters
   * @returns { string }
   */
  static MeduimText() {
    return 'MEDIUMTEXT';
  }

  /**
   * MEDIUMBLOB Holds up to 16,777,215 bytes of data
   * @returns { string }
   */
  static MediumBlob() {
    return 'MEDIUMBLOB';
  }

  /**
   * LONGTEXT Holds a string with a maximum length 0f 4,294,967,295 characters
   * @returns { string }
   */
  static LongText() {
    return 'LONGTEXT';
  }

  /**
   * LONGBLOB Holds up to 4,294,967,295 bytes of data
   */
  static LongBlob() {
    return 'LONGBLOB';
  }

  /**
   * ENUM(...params) lets you enter a list of possible values. You can list up to 65535 values
   * in an ENUM list. If a value is inserted that is not in the list, a blank value will be inserted
   * NOTE: The values are sorted in the order you enter them
   * @param { array } list - list of values to be inserted into the enum
   * @returns { string }
   */
  static Enum(list) {
    return () => {
      if (!Array.isArray(list)) {
        throw new TypeError(`Invalid Argument, Expected An Array But Got ${list} Instead`);
      }

      return `ENUM(${String(list)})`;
    };
  }

  /**
   * INTEGER Can hold integers from, -2,147,483,648 -> 2,147,483,647
   */
  static Integer() {
    return 'INTEGER';
  }

  /**
   * BIGINT Can hold integers from, -9,223,372,036,854,775,808 -> 9,223,372,036,854,775,807
   */
  static BigInt() {
    return 'BIGINT';
  }

  /**
   * SMALLINT Can hold integers from -32,768 -> 32,767
   */
  static SmallInt() {
    return 'SMALLINT';
  }

  /**
   * TINYINT can hold integers from 0 -> 255
   */
  static TinyInt() {
    return 'TINYINT';
  }
}


module.exports = DataTypes;
