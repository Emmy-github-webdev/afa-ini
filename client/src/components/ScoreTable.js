import React from "react";
import './style.css';

const ScoreTable = () => {

  return (
    <div className="modal">
      <div className="modal-content">
        <table>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>10</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;