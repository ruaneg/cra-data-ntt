/**
 * Decode JSON/HTML function
 *
 * @private
 * @param {string} input string
 * @returns {string} parsed string with any special characters replaced (like HTML entities &quot; etc)
 */
export const htmlDecode = (input: string) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

/**
 * Simply returns the value if truthy or return Unknown
 *
 * @private
 * @param {string} value
 * @returns {string} value or Unknown
 */
export const valueOrUknown = (value: string | number | null) => {
  return value || "Unknown";
};
