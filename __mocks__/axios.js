const axios = {
  get(url) {
    if (url === "https://jsonplaceholder.typicode.com/todos/1") {
      return Promise.resolve({
        data: {
          userId: 1,
          id: 1,
          title: "Make me Uppercase",
          completed: false
        }
      });
    }
  }
};

module.exports = axios;
