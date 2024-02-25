import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoGamesDetail } from "../../redux/actions/actions";
import "./detail.style.css";

const Detail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const videoGameDetail = useSelector((state) => state.allVideogameDetail[0]);

    useEffect(() => {
        dispatch(getVideoGamesDetail(params.id));
        return () => {};
    }, []);

    if (!videoGameDetail) {
        return (
            <div className="loading-container">
                <div className="loading-text">Loading...</div>
            </div>
        );
    }

    const removePTags = (text) => {
        return text.replace(/<\/?p>/g, '');
    };

    return (
        <div className="container">
            <div className="driver-info">
                <h1>{videoGameDetail.name}</h1>
                <h2>{videoGameDetail.platform.map(platform => platform)}</h2>
            </div>
            <div className="driver-image"><img src={videoGameDetail.image} alt="" /></div>
            <div className="driver-details">
                {videoGameDetail.description && <label>{removePTags(videoGameDetail.description)}</label>}
                {videoGameDetail.released && (
                    <>
                        <label>Released:</label>
                        <p>{videoGameDetail.released}</p>
                    </>
                )}
                {videoGameDetail.genres.length > 0 && (
                    <>
                        <label>Genres:</label>
                        <p>{videoGameDetail.genres.map(genre => genre)}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Detail;
