export function setLocalStorageVariable(key, value) {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  }
}

export function getLocalStorageVariable(value) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(value);
  }
}
