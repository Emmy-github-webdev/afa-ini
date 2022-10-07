import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './style.css';

const ScoreTable = () => {
 const [scores, setScores] = useState([]);

  const fetchScores = async() => {
    try {
      axios.get('/api/scores')
      .then((response) => {
        //console.log(response);
        const myScores = response.data;
        //console.log(myScores);
        setScores(myScores)
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        {scores.length > 0 ?(
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((scoreData, id) => {
                return (
                  <tr key={id}>
                    <td>{scoreData.name}</td>
                    <td>{scoreData.score}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ): (
          <p>No name and score found!</p>
        )}
        <div className="clearfix">
          <Link to='/'>
           <button type="submit" className="signupbtn">Back to Sign Up Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;