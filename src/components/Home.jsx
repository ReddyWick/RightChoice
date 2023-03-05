import React from 'react'
import Card from './Card'

export default function Home() {
  return (
    <div style={{backgroundColor:"hsla(40, 40%, 25%, .5)"}}>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbeAn1Ie7v8CNcwSiowGX5mDxACvXbE3bKw&usqp=CAU" className="CorsImg d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://www.shutterstock.com/image-photo/husband-wife-searching-useful-things-260nw-2140569155.jpg" className="CorsImg d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://www.shutterstock.com/image-photo/handsome-shop-assistant-smiling-while-260nw-598918634.jpg" className="CorsImg d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    <div className=''>
        <div className='row d-block'>
            <div className='col d-flex'>
                <Card 
                img1={"https://m.media-amazon.com/images/I/71dGLtr+1mL._UY500_.jpg"} 
                link1={"https://www.amazon.in/Reebok-Runing-Sports-Energy-Runner/dp/B08D3Q2T9V/ref=sr_1_8?crid=1VBT367M7I9BS&keywords=Shoes&qid=1677428909&sprefix=shoes%2Caps%2C213&sr=8-8"}
                head1={"Shoes"}
                para1={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                />

                <Card 
                img1={"https://m.media-amazon.com/images/I/71kDCavI6JS._SL1500_.jpg"} 
                link1={"https://www.amazon.in/ASUS-Pentium-Integrated-Graphics-V222GAK-BA034W/dp/B0BBXLFCP2?ref_=Oct_DLandingS_D_9dd98ba4_60"}
                head1={"T.V"}
                para1={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                />

                <Card 
                img1={"https://m.media-amazon.com/images/I/71dGLtr+1mL._UY500_.jpg"} 
                link1={"https://www.amazon.in/Reebok-Runing-Sports-Energy-Runner/dp/B08D3Q2T9V/ref=sr_1_8?crid=1VBT367M7I9BS&keywords=Shoes&qid=1677428909&sprefix=shoes%2Caps%2C213&sr=8-8"}
                head1={"Shoes"}
                para1={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                />

                <Card 
                img1={"https://m.media-amazon.com/images/I/71kDCavI6JS._SL1500_.jpg"} 
                link1={"https://www.amazon.in/ASUS-Pentium-Integrated-Graphics-V222GAK-BA034W/dp/B0BBXLFCP2?ref_=Oct_DLandingS_D_9dd98ba4_60"}
                head1={"T.V"}
                para1={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                />
            </div>
            
            <div className='col d-flex'>
                <Card 
                img1={"https://m.media-amazon.com/images/I/51bqpP0jb5L._SL1080_.jpg"} 
                link1={"https://www.amazon.in/Dell-Vostro-i3-1215U-35-56Cms-D552325WIN9BE/dp/B0BQJ68HHC?ref_=Oct_DLandingS_D_e252fbce_60"}
                head1={"Laptop"}
                para1={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                />

                <Card 
                img1={"https://m.media-amazon.com/images/I/61IA8eSPIWL._SL1000_.jpg"} 
                link1={"https://www.amazon.in/CasaStyle-Amerigo-Seater-Interchangable-Grey-Black/dp/B07VT83NTQ/?_encoding=UTF8&pd_rd_w=qbGo5&content-id=amzn1.sym.328a8181-736a-423f-a082-5a2eaca89662&pf_rd_p=328a8181-736a-423f-a082-5a2eaca89662&pf_rd_r=C2PQ0B7CNBW4DPTGS0BB&pd_rd_wg=Qym7o&pd_rd_r=93d0690a-4e29-44b3-94aa-0a1de8ac2286&ref_=pd_gw_unk"}
                head1={"Cough"}
                para1={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                />

                <Card 
                img1={"https://m.media-amazon.com/images/I/51bqpP0jb5L._SL1080_.jpg"} 
                link1={"https://www.amazon.in/Dell-Vostro-i3-1215U-35-56Cms-D552325WIN9BE/dp/B0BQJ68HHC?ref_=Oct_DLandingS_D_e252fbce_60"}
                head1={"Laptop"}
                para1={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                />

                <Card 
                img1={"https://m.media-amazon.com/images/I/61IA8eSPIWL._SL1000_.jpg"} 
                link1={"https://www.amazon.in/CasaStyle-Amerigo-Seater-Interchangable-Grey-Black/dp/B07VT83NTQ/?_encoding=UTF8&pd_rd_w=qbGo5&content-id=amzn1.sym.328a8181-736a-423f-a082-5a2eaca89662&pf_rd_p=328a8181-736a-423f-a082-5a2eaca89662&pf_rd_r=C2PQ0B7CNBW4DPTGS0BB&pd_rd_wg=Qym7o&pd_rd_r=93d0690a-4e29-44b3-94aa-0a1de8ac2286&ref_=pd_gw_unk"}
                head1={"Cough"}
                para1={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                />
            </div>
        </div>
    </div>

    </div>
  )
}
