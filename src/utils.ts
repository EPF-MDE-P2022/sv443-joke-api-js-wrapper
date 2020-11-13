// Common functions used by this library
// All these functions defined here has to be `copy-paste`-able.
// They should be standalone functions

export const capitalize = (str: string): string => {
	if (["", null, undefined].includes(str)) return str;
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
};