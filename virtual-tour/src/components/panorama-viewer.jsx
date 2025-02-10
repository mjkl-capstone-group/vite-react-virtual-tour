import React, { useEffect } from "react";
import "pannellum/build/pannellum.css";
import salaImage from "../assets/pureshotsala.jpg";
import nextStopImage from "../assets/nextstopsala_PureShot.jpg";

const PanoramaViewer = () => {
    useEffect(() => {
        // Initialize Pannellum viewer when the component mounts
        let viewer = pannellum.viewer("panorama", {
            "default": {
                "firstScene": "scene1",
                "sceneFadeDuration": 1000,
                "autoLoad": true
            },
            "scenes": {
                "scene1": {
                    "type": "equirectangular",
                    "panorama": salaImage,
                    "yaw": -176,
                    "hotSpots": [
                        {
                            "pitch": -25,
                            "yaw": -176,
                            "type": "scene",
                            "text": "Dining",
                            "sceneId": "scene2"
                        }
                    ]
                },
                "scene2": {
                    "type": "equirectangular",
                    "panorama": nextStopImage,
                    "hotSpots": [
                        {
                            "pitch": -25,
                            "yaw": -10,
                            "type": "scene",
                            "text": "Sala",
                            "sceneId": "scene1"
                        }
                    ]
                }
            }
        });

        return () => {
            if (viewer) {
                viewer.destroy();
            }
        };
    }, []);

    return (
        <div>
            <div id="panorama" style={{ width: "100vw", height: "100vh" }}></div>
        </div>
    );
};

export default PanoramaViewer;
