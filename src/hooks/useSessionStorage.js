const useSessionStorage = () => {
  const getItem = (key) => {
    const storedValue = sessionStorage.getItem(key);
    if (!storedValue) {
      return null;
    }
    return JSON.parse(storedValue);
  };

  const setItem = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const removeItem = (key) => {
    sessionStorage.removeItem(key);
  };
  const clear = () => {
    sessionStorage.clear();
  };
  return {
    getItem,
    setItem,
    removeItem,
    clear,
  };
};
export default useSessionStorage;
