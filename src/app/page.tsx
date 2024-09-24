"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [originalArray, setOriginalArray] = useState([
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ]);

  const handleReset = () => {
    setArray([
      [6, 1],
      [4, 3],
      [5, 1],
      [3, 4],
      [1, 1],
      [3, 4],
      [1, 2],
    ]);
    setSource(
      JSON.stringify([
        [6, 1],
        [4, 3],
        [5, 1],
        [3, 4],
        [1, 1],
        [3, 4],
        [1, 2],
      ])
    );
    doubleCount = 0;
  };

  let doubleCount = 0;

  const [array, setArray] = useState(originalArray);

  const [source, setSource] = useState(JSON.stringify(originalArray));

  useEffect(() => {
    setArray(originalArray); // reset array to original state on mount
  }, []);

  array.forEach(([top, bottom]) => {
    if (top === bottom) {
      doubleCount++;
    }
  });

  const handleSortASC = () => {
    const sortedArray = [...array].sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];
      if (totalA === totalB) {
        return a[0] - b[0]; // If totals are equal, sort by first element
      } else {
        return totalA - totalB; // Sort by total
      }
    });
    setArray(sortedArray);
  };

  const handleSortDESC = () => {
    const sortedArray = [...array].sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];
      if (totalA === totalB) {
        return b[0] - a[0]; // If totals are equal, sort by first element in descending order
      } else {
        return totalB - totalA; // Sort by total in descending order
      }
    });
    setArray(sortedArray);
  };

  const handleFlip = () => {
    const flippedArray = array.map(([top, bottom]) => [bottom, top]);
    setArray(flippedArray);
  };

  const handleRemoveDup = () => {
    const uniqueArray = array.filter((item, index, self) => {
      const sortedItem = item
        .slice()
        .sort((a, b) => a - b)
        .join(",");
      return (
        self.filter((t) => {
          const sortedT = t
            .slice()
            .sort((a, b) => a - b)
            .join(",");
          return sortedT === sortedItem;
        }).length === 1
      );
    });
    setArray(uniqueArray);
  };

  const [inputNumber, setInputNumber] = useState("");

  const handleRemove = () => {
    if (inputNumber !== "") {
      const newArray = array.filter(
        ([top, bottom]) => top + bottom !== parseInt(inputNumber)
      );
      setArray(newArray);
      setInputNumber("");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Dominoes</h1>
      <div className="mb-4">
        <div className="w-full p-2 border rounded bg-gray-100 my-3">
          <label className="block text-lg font-semibold mb-2">Source</label>
          {source}
        </div>
        <div className="w-full p-2 border rounded bg-gray-100 my-3">
          <label className="block text-lg font-semibold mb-2">
            Double Number
          </label>
          Double count: {doubleCount}
        </div>
      </div>
      <div className="flex space-x-2 mb-4 ">
        {array.map(([top, bottom], index) => (
          <div
            key={index}
            className="flex flex-col border p-2 text-center domino"
          >
            <div className="domino-half bg-gray-200 p-2 rounded">
              <span className="text-lg">{top}</span>
            </div>
            <div className="domino-divider">-</div>
            <div className="domino-half bg-gray-200 p-2 rounded">
              <span className="text-lg">{bottom}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mb-4">
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleSortASC}
  >
    Sort (ASC)
  </button>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleSortDESC}
  >
    Sort (DESC)
  </button>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleFlip}
  >
    Flip
  </button>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleRemoveDup}
  >
    Remove Dup
  </button>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleReset}
  >
    Reset
  </button>
</div>

<div className="mb-4">
  <input
    type="text"
    className="w-full p-2 border rounded mb-2"
    placeholder="Input Number"
    value={inputNumber}
    onChange={(e) => setInputNumber(e.target.value)}
  />
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleRemove}
  >
    Remove
  </button>
</div>
    </div>
  );
}
