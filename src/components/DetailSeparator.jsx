const DetailSeparator = ({ title }) => {
    return (
        <div className="row my-3 align-items-center">
            <div className="col">
                <hr className="rounded-hr"/>
            </div>
            <div className="col-5 col-md-2 p-0">
                <h6 className="m-0 text-shadow">{title}</h6>
            </div>
            <div className="col">
                <hr className="rounded-hr"/>
            </div>
        </div>
    );
}

export default DetailSeparator;