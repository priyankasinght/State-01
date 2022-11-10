const Details = ( props ) => {

    return(
        <div className={`info ${ props.themeChange } `}>
            <h2 className="infoH2">
                {props.title}
            </h2>
            <h5 className="infoH5">{ props.time }, { props.duration } min read</h5>
            <h5 className="infoH5">
                {props.task}
            </h5>
        </div>
    )
};

export default Details;