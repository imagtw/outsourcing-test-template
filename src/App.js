import "./App.scss";
import uploadImage from "./assets/upload-2-line.png";
import closeImage from "./assets/close-line.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          {/* nav */}
          <div className="nav">
            <div className="navbar">
              <h1 className="title">IMAG切版提庫</h1>
              <ul className="icon">
                <li>
                  <img src={uploadImage} alt="logo" />
                </li>
                <li>
                  <img src={closeImage} alt="logo" />
                </li>
              </ul>
            </div>
          </div>
          <section className="section_container">
            <h1 className="text">Gift Guide</h1>
            <div className="select">
              <div className="choose1">
                <p className="text1">驚喜寶庫</p>
                <p className="text2">閃亮佳節</p>
              </div>
              <div className="choose2">
                <p className="text3">旅遊之樂</p>
                <p className="text4">活力旅程</p>
              </div>
            </div>
            <ul className="footer">
              <li>首頁</li>
              <li>｜</li>
              <li>個人化服務</li>
            </ul>
          </section>

          <h1></h1>
        </div>
      </header>
    </div>
  );
}

export default App;
