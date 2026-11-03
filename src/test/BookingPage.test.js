import { fetchAPI } from "../api";
import { initializeTimes, updateTimes } from "../pages/BookingPage";

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("BookingPage functions", () => {

  test("initializeTimes returns the available booking times", () => {
      const mockTimes = ["17:00", "18:00", "19:00"];

      fetchAPI.mockReturnValue(mockTimes);

      const result = initializeTimes();

      expect(result).toEqual(mockTimes);
      expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    });

    test("updateTimes returns the available times for the selected date", () => {
      const mockTimes = ["18:00", "20:00", "22:00"];
      const selectedDate = "2026-11-10";

      fetchAPI.mockReturnValue(mockTimes);

      const result = updateTimes([], selectedDate);

      expect(result).toEqual(mockTimes);
      expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
    });

});
