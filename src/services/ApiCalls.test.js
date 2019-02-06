import { fetchIds, fetchArticleInfos } from "./apiCalls";

beforeEach(() => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
});

it("should fetch ids when you call fetchIds", done => {
  fetchIds("www.google.com");
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith("www.google.com");
  global.fetch.mockClear();
  done();
});

it("should fetch infos when you call fetchArticleInfos", done => {
  fetchArticleInfos([1, 2, 3]);
  expect(global.fetch).toHaveBeenCalledTimes(3);
  global.fetch.mockClear();
  done();
});
