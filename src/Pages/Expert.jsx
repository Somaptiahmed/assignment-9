

// import React, { useState } from "react";

// const Expert = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [showMeetLink, setShowMeetLink] = useState(false);

//     const handleTalkWithExpert = () => {
//         const now = new Date();
//         const currentHour = now.getHours();
//         const currentMinutes = now.getMinutes();

//         // Consultation time: 10:00 AM to 8:00 PM
//         const isWithinConsultationTime =
//             (currentHour > 10 || (currentHour === 10 && currentMinutes >= 0)) &&
//             (currentHour < 20 || (currentHour === 20 && currentMinutes === 0));

//         if (isWithinConsultationTime) {
//             setShowMeetLink(true); // Show the Google Meet link
//             window.open("https://meet.google.com/fake-meet-link", "_blank");
//         } else {
//             setShowModal(true); // Show the modal
//         }
//     };

//     return (
//         <div className="min-h-screen mx-auto text-center ">
//             <h1 className="text-4xl font-bold">Welcome Dear</h1>
//             <button onClick={handleTalkWithExpert} className="btn btn-primary text-2xl font-bold ">Experts are here</button>

//             {/* Show Google Meet link */}
//             {showMeetLink && (
//                 <div style={{ marginTop: "20px", textAlign: "center" }}>
//                     <p style={{ color: "green", fontSize: "18px", fontWeight: "bold" }}>
//                         The expert is available now!
//                     </p>
//                     <a
//                         href="https://meet.google.com/fake-meet-link"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{
//                             color: "blue",
//                             textDecoration: "underline",
//                             fontWeight: "bold",
//                         }}
//                     >
//                         Join the meeting: https://meet.google.com/meet-link
//                     </a>
//                 </div>
//             )}

//             {/* Show Modal */}
//             {showModal && (
//                 <div
//                     style={{
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                         backgroundColor: "rgba(0, 0, 0, 0.5)",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         zIndex: 1000,
//                     }}
//                 >
//                     <div
//                         style={{
//                             background: "#fff",
//                             padding: "20px",
//                             borderRadius: "5px",
//                             textAlign: "center",
//                         }}
//                     >
//                         <h2>Consultation Time</h2>
//                         <p>Our consultation hours are from 10:00 AM to 8:00 PM.</p>
//                         <button
//                             onClick={() => setShowModal(false)}
//                             style={{
//                                 marginTop: "10px",
//                                 padding: "8px 16px",
//                                 backgroundColor: "#007bff",
//                                 color: "white",
//                                 border: "none",
//                                 borderRadius: "5px",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Expert;


import React, { useState, useEffect } from "react";

const Expert = () => {
    const [showModal, setShowModal] = useState(false);
    const [showMeetLink, setShowMeetLink] = useState(false);
    const [showWelcomeText, setShowWelcomeText] = useState(false); // For welcome animation

    const handleTalkWithExpert = () => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinutes = now.getMinutes();

        // Consultation time: 10:00 AM to 8:00 PM
        const isWithinConsultationTime =
            (currentHour > 10 || (currentHour === 10 && currentMinutes >= 0)) &&
            (currentHour < 20 || (currentHour === 20 && currentMinutes === 0));

        if (isWithinConsultationTime) {
            setShowMeetLink(true); // Show the Google Meet link
            window.open("https://meet.google.com/fake-meet-link", "_blank");
        } else {
            setShowModal(true); // Show the modal
        }
    };

    useEffect(() => {
        // Trigger the welcome animation when the component mounts
        setShowWelcomeText(true);
    }, []);

    return (
        <div className="min-h-screen mx-auto text-center">
            {/* Welcome Text with Animation */}
            <div className="my-20">
            <h1
                className={`text-4xl text-green-700 font-bold ${
                    showWelcomeText ? "animate-welcome" : ""
                }`}
            >
                Welcome to Our Websites
            </h1>

            {/* Button */}
            <button onClick={handleTalkWithExpert} className="btn btn-primary text-2xl font-bold mt-5">
                Experts are here
            </button>
            </div>

            {/* Show Google Meet link */}
            {showMeetLink && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <p style={{ color: "green", fontSize: "18px", fontWeight: "bold" }}>
                        The expert is available now!
                    </p>
                    <a
                        href="https://meet.google.com/fake-meet-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "blue",
                            textDecoration: "underline",
                            fontWeight: "bold",
                        }}
                    >
                        Join the meeting: https://meet.google.com/fake-meet-link
                    </a>
                </div>
            )}

            {/* Show Modal */}
            {showModal && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "5px",
                            textAlign: "center",
                        }}
                    >
                        <h2>Consultation Time</h2>
                        <p>Our consultation hours are from 10:00 AM to 8:00 PM.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                marginTop: "10px",
                                padding: "8px 16px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Add style for the animation */}
            <style jsx>{`
                @keyframes welcomeAnimation {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-welcome {
                    animation: welcomeAnimation 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Expert;



