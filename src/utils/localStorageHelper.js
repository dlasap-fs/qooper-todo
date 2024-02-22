/**
 * return Local Storage Item based from key
 * @param   {string} key        Key
 * @return  {string}            String of Local Storage Item
 */
export const getLocalStorageItem = (key) => localStorage.getItem(key);

/**
 * return full name of the user
 * @param   {string} key        Key
 * @param   {string} value      Stringified value to be stored
 * @return  {null}              None
 */
export const setLocalStorageItem = (key, value) => localStorage.setItem(key, value);

/**
 * Remove Local Storage Item
 * @param   {string} key        Key
 * @return  {null}              None
 */
export const removeLocalStorageItem = (key) => localStorage.removeItem(key);
