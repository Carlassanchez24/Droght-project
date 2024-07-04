import './mainBotton.css'
import img1 from "../../../assets/photo-1.png";
import img2 from "../../../assets/rhinoceros-.png";
import img3 from "../../../assets/photo-2.png";

const MainBotton = () => {
    return (
        <>
         <section className='container-news'>
            <div>
            <img src={img1} />
            </div>
            <div>
            <img src={img2} />
            </div>
            <div>
            <img src={img3} />
            </div>
        </section>
        </>
      )
}

export default MainBotton