import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Guidelines extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row" style={{ fontFamily: "Ariel" }}>
                        <div className="col-12">
                            <h2>Basic protective measures against the new coronavirus</h2><hr />
                        </div>
                        <div className="col-12">
                            <p>
                                Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Most people who become infected experience mild illness and recover, but it can be more severe for others. Take care of your health and protect others by doing the following:<br />
                            </p>
                            <center><iframe style={{width:"90vw",height:"70vh",maxHeight:"475px",maxWidth:"902px"}} src="https://www.youtube.com/embed/bPITHEiFWLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                            <h4>Wash your hands frequently</h4>
                            <p>
                                Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
                            </p>
                            <p>
                                <b>Why?</b> Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.
                            </p>
                            <h4>Maintain social distancing</h4>
                            <p>
                                Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
                            </p>
                            <p>
                                <b>Why?</b> When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.
                            </p>
                            <center><iframe style={{width:"90vw",height:"70vh",maxHeight:"475px",maxWidth:"902px"}} src="https://www.youtube.com/embed/6Ooz1GZsQ70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                            <h4>Avoid touching eyes, nose and mouth</h4>
                            <p>
                                <b>Why?</b> Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.
                            </p>
                            <h4>Practice respiratory hygiene</h4>
                            <p>
                                Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.
                            </p>
                            <p>
                                <b>Why?</b> Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.
                            </p>
                            <h4>If you have fever, cough and difficulty breathing, seek medical care early</h4>
                            <p>
                                Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.
                            </p>
                            <p>
                                <b>Why?</b> National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
                            </p>
                            <center><iframe style={{width:"90vw",height:"70vh",maxHeight:"475px",maxWidth:"902px"}} src="https://www.youtube.com/embed/qF42gZVm1Bo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                            <h4>Stay informed and follow advice given by your healthcare provider</h4>
                            <p>
                                Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.
                            </p>
                            <p>
                                <b>Why?</b> National and local authorities will have the most up to date information on whether COVID-19 is spreading in your area. They are best placed to advise on what people in your area should be doing to protect themselves.
                            </p>
                            <h2>Protection measures for persons who are in or have recently visited (past 14 days) areas where COVID-19 is spreading</h2><hr />
                            <ul>
                                <li>Follow the guidance outlined above.</li>
                                <li>Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight runny nose, until you recover. <b>Why?</b> Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.</li>
                                <li>If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers. <b>Why?</b> Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses.</li>
                            </ul>
                        </div>
                        <div className="col-12 mt-5">
                            <h5><b>Source</b><Button variant="link" onClick={() => { window.open("https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public", '_blank'); }}>World Health Ooganization</Button></h5>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Guidelines;