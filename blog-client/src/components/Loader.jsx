import loaderGif from "/images/loaderGif.gif";

const Loader = () => {
    return (
        <section className="loader">
            <div className="loader__image">
                <img src={loaderGif} alt="" />
            </div>
        </section>
    );
};

export default Loader;