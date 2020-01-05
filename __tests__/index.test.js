const axios = require("axios");

const getSingleTodoTitle = require("./../index");

jest.mock("axios");

test("gets the uppercased title of the todo", async () => {
  let fakeResponse = {
    data: {
      userId: 1,
      id: 1,
      title: "Make me Uppercase",
      completed: false
    }
  };
  // axios.get = jest
  //   .fn()
  //   .mockImplementationOnce(() => Promise.resolve(fakeResponse));
  let todoTitle = await getSingleTodoTitle();
  expect(todoTitle).toBe("MAKE ME UPPERCASE");
});

test("gives an error and handles it correctly", async () => {
  let fakeError = {
    response: {
      status: 404,
      statusText: "Not Found"
    }
  };
  axios.get = jest.fn().mockImplementationOnce(() => Promise.reject(fakeError));
  let errorObj = await getSingleTodoTitle();
  expect(errorObj).toBe(fakeError.response);
});
