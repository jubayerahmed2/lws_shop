const debounce = (func, delay) => {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    const context = this;
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

export { debounce };
