import React from 'react';
import { render, screen } from '@testing-library/react';
import Bubbles from './Bubbles';

export const colorsFixture = [
    {
      color: "aqua",
      code: {
        hex: "#00ffff",
      },
      id: 3,
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4",
      },
      id: 4,
    },
    {
      color: "lilac",
      code: {
        hex: "#9a99dd",
      },
      id: 5,
    }
  ];

  test('Bubbles render', () => {
      const { rerender } = render(<Bubbles colors={[]} />);
      let bubbleObjects = screen.queryAllByTestId('bubble');
      expect(bubbleObjects).toHaveLength(0);
      rerender(<Bubbles colors={colorsFixture} />);
      bubbleObjects = screen.queryAllByTestId('bubble');
      expect(bubbleObjects).toHaveLength(0);
  });