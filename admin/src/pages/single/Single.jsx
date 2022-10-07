import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = (props) => {

  console.log(props)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Informacije</h1>
            <div className="item">
              <img
                src="https://royalresidence.rs/wp-content/uploads/2020/05/home-slide-02.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Royal Residence</h1>
                <div className="detailItem">
                  <span className="itemKey">Grad:</span>
                  <span className="itemValue">
Čačak</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresa:</span>
                  <span className="itemValue">Stefana Prvovencanog bb</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tip:</span>
                  <span className="itemValue">
                    
Hotel
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Cena:</span>
                  <span className="itemValue">3000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Rezervacije ( Poslednjih 6 meseci)" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Single;
