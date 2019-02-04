const fakeData = [1, 2, 3, 4, 5];

export const fakeApiCall1 = async () => {
  const response = await new Promise(resolve => {
    resolve(fakeData);
  });
  return response;
};
