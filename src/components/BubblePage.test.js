import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as mockFetchColors } from '../api/fetchColors';
import { colorsFixture } from './Bubbles.test';

jest.mock('../api/fetchColors');

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  render(<BubblePage />);
  mockFetchColors.mockResolvedValueOnce({
    data: colorsFixture
  })
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading