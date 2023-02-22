import { CardAuction } from "../CardAuction"
import { DivCarousel } from "./styles"

const CarouselAuction = () => {

    const Vehicle = {
        image: "https://img2.icarros.com/dbimg/imgadicionalnoticia/4/114039_1",
        title: "Carro",
        subtitle: "Veloz",
        abrevUser: "JV",
        nameUser: "Joao Vitor",
        kmCar: 20000,
        yearCar: 2020,
        priceCar: 200000
    }
    return(
        <DivCarousel>
            <h1 className="title-carousel">Leilão</h1>
            <div className="list-card-vehicles">
                <div className="div-item-vei">
                    <CardAuction image={Vehicle.image} title={Vehicle.title} subtitle={Vehicle.subtitle}
                        abrevUser={Vehicle.abrevUser} nameUser={Vehicle.nameUser} kmCar={Vehicle.kmCar} 
                        yearCar={Vehicle.yearCar} priceCar={Vehicle.priceCar}></CardAuction>
                </div>
                <div className="div-item-vei">
                    <CardAuction image={Vehicle.image} title={Vehicle.title} subtitle={Vehicle.subtitle}
                        abrevUser={Vehicle.abrevUser} nameUser={Vehicle.nameUser} kmCar={Vehicle.kmCar} 
                        yearCar={Vehicle.yearCar} priceCar={Vehicle.priceCar}></CardAuction>
                </div>
                <div className="div-item-vei">
                    <CardAuction image={Vehicle.image} title={Vehicle.title} subtitle={Vehicle.subtitle}
                        abrevUser={Vehicle.abrevUser} nameUser={Vehicle.nameUser} kmCar={Vehicle.kmCar} 
                        yearCar={Vehicle.yearCar} priceCar={Vehicle.priceCar}></CardAuction>
                </div>
                <div className="div-item-vei">
                    <CardAuction image={Vehicle.image} title={Vehicle.title} subtitle={Vehicle.subtitle}
                        abrevUser={Vehicle.abrevUser} nameUser={Vehicle.nameUser} kmCar={Vehicle.kmCar} 
                        yearCar={Vehicle.yearCar} priceCar={Vehicle.priceCar}></CardAuction>
                </div>
                <div className="div-item-vei">
                    <CardAuction image={Vehicle.image} title={Vehicle.title} subtitle={Vehicle.subtitle}
                        abrevUser={Vehicle.abrevUser} nameUser={Vehicle.nameUser} kmCar={Vehicle.kmCar} 
                        yearCar={Vehicle.yearCar} priceCar={Vehicle.priceCar}></CardAuction>
                </div>
            </div>
        </DivCarousel>
    )

}

export default CarouselAuction