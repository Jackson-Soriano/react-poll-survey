import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Result = (props) => {
    const navigate = useNavigate();
    const { pollResults } = props;
    const handleVote = () => {
        navigate("/");
    }
    //////////////////
    //create progressbar 1
    const [pert1a, setPert1a] = useState(0);
    // calculate the percentage of progress
    let item1=pollResults.result1a + pollResults.result1b;
    const progCent1a = (pollResults.result1a / item1) * 100;
    const [pert1b, setPert1b] = useState(0);
    // calculate the percentage of progress
    const progCent1b = (pollResults.result1b / item1) * 100;
    ////////////////////////
    //create progressbar 2
    const [pert2a, setPert2a] = useState(0);
    // calculate the percentage of progress
    let item2=pollResults.result2a + pollResults.result2b;
    const progCent2a = (pollResults.result2a / item2) * 100;
    const [pert2b, setPert2b] = useState(0);
    // calculate the percentage of progress
    const progCent2b = (pollResults.result2b / item2) * 100;
    ////////////////////////
    //create progressbar 3
    const [pert3a, setPert3a] = useState(0);
    // calculate the percentage of progress
    let item3=pollResults.result3a + pollResults.result3b;
    const progCent3a = (pollResults.result3a / item3) * 100;
    const [pert3b, setPert3b] = useState(0);
    // calculate the percentage of progress
    const progCent3b = (pollResults.result3b / item3) * 100;
    useEffect(() => {
        setPert1a(progCent1a);
        setPert1b(progCent1b);
        setPert2a(progCent2a);
        setPert2b(progCent2b);
        setPert3a(progCent3a);
        setPert3b(progCent3b);
    }, [progCent1a,progCent1b,progCent2a,progCent2b,progCent3a,progCent3b]);
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
            <div>
                <div className="container col-sm-8">
                    <h1 className="text-center">Avengers Poll Results</h1>
                    <h6 className="d-flex justify-content-start offset-sm-2" >Question 1: Which character do you prefer?</h6>
                    <div className="d-flex flex-column justify-content-center offset-sm-3">
                        <div className="col-sm-8 d-inline-block justify-content-center mb-2">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-6 pb-3" src="/assets/images/captamerica.jpg" alt="v1" />
                                    <div class="progress bg-warning" role="progressbar" style={{ width: `${pert1a}%` }}></div>
                                    <div className="progress-label text-success">{`${pollResults.result1a} of ${item1}`}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 d-inline-block justify-content-center mb-2">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-6 pb-3" src="/assets/images/ironman.jpg" alt="v2" />
                                    <div class="progress bg-danger" role="progressbar" style={{ width: `${pert1b}%` }}></div>
                                    <div className="progress-label text-success">{`${pollResults.result1b} of ${item1}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* pollsurvey2 */}
                    <h6 className="d-flex justify-content-start offset-sm-2 mt-3" >Question 2: Which title do you prefer?</h6>
                    <div className="d-flex flex-column justify-content-center offset-sm-3">
                        <div className="col-sm-8 d-inline-block justify-content-center mb-2">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-6 pb-3" src="/assets/images/infinity.jpg" alt="v1" />
                                    <div class="progress bg-warning" role="progressbar" style={{ width: `${pert2a}%` }}></div>
                                    <div className="progress-label text-success">{`${pollResults.result2a} of ${item2}`}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 d-inline-block justify-content-center mb-2">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-6 pb-3" src="/assets/images/endgame.jpg" alt="v2" />
                                    <div class="progress bg-danger" role="progressbar" style={{ width: `${pert2b}%` }}></div>
                                    <div className="progress-label text-success">{`${pollResults.result2b} of ${item2}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* pollsurvey3 */}
                    <h6 className="d-flex justify-content-start offset-sm-2 mt-3" >Question 3: Which cinema do you prefer?</h6>
                    <div className="d-flex flex-column justify-content-center offset-sm-3">
                        <div className="col-sm-8 d-inline-block justify-content-center mb-2">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-6 pb-3" src="/assets/images/robinsons.jpg" alt="v1" />
                                    <div class="progress bg-warning" role="progressbar" style={{ width: `${pert3a}%` }}></div>
                                    <div className="progress-label text-success">{`${pollResults.result3a} of ${item3}`}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 d-inline-block justify-content-center mb-2">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img style={imgStyle} className="card-img-top mx-auto d-block img-fluid col-6 pb-3" src="/assets/images/imax.jpg" alt="v2" />
                                    <div class="progress bg-danger" role="progressbar" style={{ width: `${pert3b}%` }}></div>
                                    <div className="progress-label text-success">{`${pollResults.result3b} of ${item3}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleVote} className="btn btn-success mt-3 mb-5 col-sm-8 offset-sm-2"><span className="h4">Vote Again</span></button>
            </div>
        </div>
    )
}

export default Result;