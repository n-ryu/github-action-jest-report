describe("I", () => {
  describe("가", () => {
    describe("A", () => {
      it("1", () => {
        expect(1).toBe(1);
      });

      it("2", () => {
        expect(1).toBe(1);
      });
    });

    describe("B", () => {
      it("1", () => {
        expect(1).toBe(1);
      });

      it("2", () => {
        expect(1).toBe(1);
      });
    });
  });
  describe("나", () => {
    describe("A", () => {
      it("1", () => {
        expect(1).toBe(2);
      });

      it("2", () => {
        expect(1).toBe(3);
      });
    });

    describe("B", () => {
      it("1", () => {
        expect(1).toBe('s');
      });

      it("2", () => {
        expect(1).toBe(1);
      });
    });
  });
});
