import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Poll = ({ onPollSubmit }) => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    item1a: 0,
    item1b: 0,
    item2a: 0,
    item2b: 0,
    item3a: 0,
    item3b: 0,
  });
  const [vote, setVote] = useState({
    vote1a: false,
    vote1b: false,
    vote2a: false,
    vote2b: false,
    vote3a: false,
    vote3b: false,
  });
  // Event handler for updating the survey answers
  const vote1a = (e) => {
    setVote({ ...vote, vote1a: true, vote1b: false });
    setAnswers({ ...answers, item1a: 1, item1b: 0 });
    // console.log(vote)
  };
  // Event handler for updating the survey answers
  const vote1b = (e) => {
    setVote({ ...vote, vote1a: false, vote1b: true });
    setAnswers({ ...answers, item1a: 0, item1b: 1 });
  };
  //2nd item
  const vote2a = (e) => {
    setVote({ ...vote, vote2a: true, vote2b: false });
    setAnswers({ ...answers, item2a: 1, item2b: 0 });
  };
  // Event handler for updating the survey answers
  const vote2b = (e) => {
    setVote({ ...vote, vote2a: false, vote2b: true });
    setAnswers({ ...answers, item2a: 0, item2b: 1 });
  };
  //3rd item
  const vote3a = (e) => {
    setVote({ ...vote, vote3a: true, vote3b: false });
    setAnswers({ ...answers, item3a: 1, item3b: 0 });
  };
  // Event handler for updating the survey answers
  const vote3b = (e) => {
    setVote({ ...vote, vote3a: false, vote3b: true });
    setAnswers({ ...answers, item3a: 0, item3b: 1 });
    console.log(vote)
  };
  // Function for submitting the survey
  const handleSubmit = (e) => {
    e.preventDefault();
    onPollSubmit(answers);
    setAnswers({
      item1a: 0,
      item1b: 0,
      item2a: 0,
      item2b: 0,
      item3a: 0,
      item3b: 0,
    });
    //load component result with props
    navigate('/result');
  };

  //styles
  const imgStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <div className="bg-dark text-light">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="container col-sm-8">
            <h1 className="text-center">Avengers Poll Survey</h1>
            <h6 className="d-flex justify-content-start offset-sm-2" >Question 1: Which character do you prefer?</h6>
            <div className="d-flex justify-content-center">
              <div className="col-sm-4 d-inline-block pe-2">
                <div class="card text-center">
                  <div class="card-body">
                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-3" src="/assets/images/captamerica.jpg" alt="v1" />
                    <button type="button" disabled={vote.vote1a ? true : false} style={{ backgroundColor: vote.vote1a ? "red" : "" }} className="btn btn-primary mt-2 col-sm-6" onClick={vote1a}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 d-inline-block">
                <div class="card text-center">
                  <div class="card-body">
                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-3" src="/assets/images/ironman.jpg" alt="v2" />
                    <button type="button" disabled={vote.vote1b ? true : false} style={{ backgroundColor: `${vote.vote1b ? "red" : ""}` }} className="btn btn-primary mt-2 col-sm-6" onClick={vote1b}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* item 2 */}
            <h6 className="d-flex justify-content-start offset-sm-2 mt-3" >Question 2: Which title do you prefer?</h6>
            <div className="d-flex justify-content-center">
              <div className="col-sm-4 d-inline-block pe-2">
                <div class="card text-center">
                  <div class="card-body">
                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-3" src="/assets/images/infinity.jpg" alt="v3" />
                    <button type="button" disabled={vote.vote2a ? true : false} style={{ backgroundColor: vote.vote2a ? "red" : "" }} className="btn btn-primary mt-2 col-sm-6" onClick={vote2a}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 d-inline-block">
                <div class="card text-center">
                  <div class="card-body">
                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-3" src="/assets/images/endgame.jpg" alt="v4" />
                    <button type="button" disabled={vote.vote2b ? true : false} style={{ backgroundColor: `${vote.vote2b ? "red" : ""}` }} className="btn btn-primary mt-2 col-sm-6" onClick={vote2b}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* item 3 */}
            <h6 className="d-flex justify-content-start offset-sm-2 mt-3" >Question 3: Which cinema do you prefer?</h6>
            <div className="d-flex justify-content-center">
              <div className="col-sm-4 d-inline-block pe-2">
                <div class="card text-center">
                  <div class="card-body">
                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-3" src="/assets/images/robinsons.jpg" alt="v5" />
                    <button type="button" disabled={vote.vote3a ? true : false} style={{ backgroundColor: vote.vote3a ? "red" : "" }} className="btn btn-primary mt-2 col-sm-6" onClick={vote3a}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 d-inline-block">
                <div class="card text-center">
                  <div class="card-body">
                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-3" src="/assets/images/imax.jpg" alt="v6" />
                    <button type="button" disabled={vote.vote3b ? true : false} style={{ backgroundColor: `${vote.vote3b ? "red" : ""}` }} className="btn btn-primary mt-2 col-sm-6" onClick={vote3b}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3 mb-5 col-sm-8 offset-sm-2"><span className="h4">Submit</span></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Poll;
