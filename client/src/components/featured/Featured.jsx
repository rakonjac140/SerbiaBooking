import "./featured.css";
import useFetch from "../../hooks/useFetch";


const Featured = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Čačak,Beograd,Zlatibor"
  );



  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.turizamcacak.rs/img/codeart/galerija1/41/galerija-grad-cacak-3.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Čačak</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://banjeusrbiji.com/beograd/wp-content/uploads/2016/05/Upoznajte-Beograd.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Beograd</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://aparthotelzlatibor.com/wp-content/uploads/2019/10/drvengrad_mecavnik_zlatibor_003.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Zlatibor</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
