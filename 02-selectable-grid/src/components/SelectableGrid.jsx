import { useCallback, useState } from "react";

const SelectableGrid = ({ rows = 10, columns = 10 }) => {
  // console.log([...Array(rows*cols).keys()])  this will fill the array with the index values
  //     // eg: [
  //              0, 1, 2, 3, 4,
  //              5, 6, 7, 8, 9
  //            ]

  //   onMouseDown -> this will be triggered when user clicks on the div and it'll do something
  //   onMouseEnter -> this will track in which div the user is currently in
  //   onMouseUp -> it takes care of the release logic

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]); // array of all the selected boxes

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseDown = (boxNumber) => {
    setIsMouseDown(true);

    setSelectedBoxes([boxNumber]);
  };

  //   gotta use useCallback since its an expensive function

  const handleMouseEnter = useCallback(
    (boxNumber) => {
      if (isMouseDown) {
        const startBox = selectedBoxes[0]; // this is the first fox that was selected
        const endBox = boxNumber;

        const startRow = Math.floor((startBox - 1) / columns); // Math.floor((23 - 1) / 10) -> 2
        const startColumn = (startBox - 1) % columns; // (23 - 1) % 10 -> 2
        const endRow = Math.floor((endBox - 1) / columns);
        const endColumn = (endBox - 1) % columns;

        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);
        const minColumn = Math.min(startColumn, endColumn);
        const maxColumn = Math.max(startColumn, endColumn);

        const selected = [];

        for (let row = minRow; row <= maxRow; row++) {
          for (let col = minColumn; col <= maxColumn; col++) {
            selected.push(row * columns + col + 1);
          }
        }

        //   console.log(selected);

        setSelectedBoxes(selected);
      }
    },

    [isMouseDown]
  );

  return (
    <div
      className="grid"
      style={{ "--rows": rows, "--columns": columns }}
      onMouseUp={handleMouseUp}
    >
      {[...Array(rows * columns).keys()].map((i) => (
        <div
          key={i}
          className={`box ${selectedBoxes.includes(i + 1) ? "selected" : ""}`}
          onMouseDown={() => handleMouseDown(i + 1)}
          onMouseEnter={() => handleMouseEnter(i + 1)}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default SelectableGrid;
