module.exports = (hookName) => ({
  content: `//import { act, renderHook } from "@testing-library/react-hooks"
  
  describe("${hookName}", () => {
    it("does something", () => {
      // test info
    });
  });
`,
  extension: `.test.tsx`,
});
