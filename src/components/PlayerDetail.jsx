const PlayerDetail = ({ content, image = null, label = null }) => {
    return (
        <div className="player-detail">
            <div className="glass-effect"></div>
            <div className="detail-content">
            {image ? <img src={image} alt="" width={20} /> :  ""}
            {label ? <small className="stat-label me-1">{label} : </small> : ""}
            &nbsp;{content}
            </div>
        </div>
    );
};
export default PlayerDetail;
