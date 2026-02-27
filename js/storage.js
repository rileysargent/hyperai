// storage.js

/**
 * LocalStorage Management Functions
 */

/**
 * Function to save data to localStorage
 * @param {string} key - The key under which the data is stored
 * @param {any} value - The value to be stored
 */
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Successfully saved to localStorage: ${key}`);
    } catch (error) {
        console.error('Error saving to localStorage', error);
    }
}

/**
 * Function to retrieve data from localStorage
 * @param {string} key - The key of the data to retrieve
 * @returns {any|null} - The retrieved value or null if not found
 */
function getFromLocalStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error retrieving from localStorage', error);
        return null;
    }
}

/**
 * Function to remove data from localStorage
 * @param {string} key - The key of the data to remove
 */
function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        console.log(`Successfully removed from localStorage: ${key}`);
    } catch (error) {
        console.error('Error removing from localStorage', error);
    }
}

/**
 * Function to clear all data from localStorage
 */
function clearLocalStorage() {
    try {
        localStorage.clear();
        console.log('Successfully cleared localStorage');
    } catch (error) {
        console.error('Error clearing localStorage', error);
    }
}
