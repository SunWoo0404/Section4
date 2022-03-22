import "./InfoPage.css";

function InfoPage({ modalControl }) {
    const onCloseModal = (e) => {
        if(e.target === e.currentTarget){
            modalControl();
        }
    }

    return(
        <div className="modalContainer" onClick={onCloseModal}>
            <div className="modalPage">
                <div className="imageContainer">
                    <img className="cardImg" src={"data:image/jpeg;base64,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"} onClick={modalControl} alt="OpenSea" />
                </div>
                <div className="infoContainer">
                    <div className="infoTitle">{"작품명"}</div>
                        <div className="info">고마워요!</div>
                    <div className="infoTitle">{"ownedBy"}</div>
                        <div className="info">blahblah</div>
                    <div className="infoTitle">{"blockNumber"}</div>
                        <div className="info">0x89bsa98bsa9</div>
                    <div className="infoTitle">{"description"}</div>
                        <div className="info">행운을 줍니다</div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;