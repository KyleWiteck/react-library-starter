module.exports = (componentName) => ({
  content: `
   describe("${componentName}", () => {
     it("does something", () => {
      //  test info
     });
   });
`,
  extension: `.test.tsx`,
});
