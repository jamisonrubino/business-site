import {Link} from 'react-router-dom';
import 'bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'

export default function FurnitureAssembly() {
    return (
        <div>
            <h1 className="mt-4 py-3">Furniture Assembly</h1>
            <div className="row mx-0 px-0">
                <div className="col-2"></div>
                <div className="col-8">
                    <p>Below are examples of products I can assemble professionally. See IKEA
                        product pages for labor price estimates. You can also
                        <Link
                            to="/Contact"
                            state={{
                            service: "Furniture Assembly"
                        }}>contact me</Link>
                        for my best guess.</p>
                    <p>Though most products I assemble are IKEA brand, I can help with other brands
                        for a similar rate.</p>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row my-4 py-4 mx-0 px-0">
                <div className="col-1"></div>
                <div className="col-2 col-md-3 col-sm-4">
                    <div className="list-group border" id="list-tab" role="tablist">
                        <a
                            className="list-group-item list-group-item-action active"
                            id="list-beds-list"
                            data-bs-toggle="list"
                            href="#list-beds"
                            role="tab"
                            aria-controls="list-beds">Beds</a>
                        <a
                            className="list-group-item list-group-item-action"
                            id="list-profile-list"
                            data-bs-toggle="list"
                            href="#list-dressers"
                            role="tab"
                            aria-controls="list-dressers">Dressers</a>
                        <a
                            className="list-group-item list-group-item-action"
                            id="list-bookcases-list"
                            data-bs-toggle="list"
                            href="#list-bookcases"
                            role="tab"
                            aria-controls="list-bookcases">Bookcases</a>
                        <a
                            className="list-group-item list-group-item-action"
                            id="list-desks-list"
                            data-bs-toggle="list"
                            href="#list-desks"
                            role="tab"
                            aria-controls="list-desks">Desks</a>
                        <a
                            className="list-group-item list-group-item-action"
                            id="list-wardrobes-list"
                            data-bs-toggle="list"
                            href="#list-wardrobes"
                            role="tab"
                            aria-controls="list-wardrobes">Wardrobes</a>
                        <a
                            className="list-group-item list-group-item-action"
                            id="list-tables-list"
                            data-bs-toggle="list"
                            href="#list-tables"
                            role="tab"
                            aria-controls="list-tables">Tables</a>
                        <a
                            className="list-group-item list-group-item-action"
                            id="list-sofas-list"
                            data-bs-toggle="list"
                            href="#list-sofas"
                            role="tab"
                            aria-controls="list-sofas">Sofas</a>
                        <a
                            className="list-group-item list-group-item-action"
                            id="list-entertainment-centers-list"
                            data-bs-toggle="list"
                            href="#list-entertainment-centers"
                            role="tab"
                            aria-controls="list-entertainment-centers">Entertainment Centers</a>

                    </div>
                </div>
                <div className="col-7 col-md-6 col-sm-5">
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="list-beds"
                            role="tabpanel"
                            aria-labelledby="list-beds-list">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide mx-auto border rounded"
                                style={{
                                maxWidth: "520px"
                            }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a
                                            href="https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-black-brown-luroey-s49176291/"
                                            target="_blank"><img
                                            src="https://www.ikea.com/us/en/images/products/malm-high-bed-frame-4-storage-boxes-black-brown-luroey__1154412_pe886059_s5.jpg"
                                            className="d-block w-100"
                                            alt=""/></a>
                                    </div>
                                    <div className="carousel-item">

                                        <a
                                            href="https://www.ikea.com/us/en/p/smastad-loft-bed-frame-desk-and-storage-white-50454041/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/smastad-loft-bed-frame-desk-and-storage-white__1168283_pe891862_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/></a>
                                    </div>
                                    <div className="carousel-item">

                                        <a
                                            href="https://www.ikea.com/us/en/p/brimnes-bed-frame-with-storage-white-luroey-s89007550/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/brimnes-bed-frame-with-storage-white__1151024_pe884762_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/></a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="list-dressers"
                            role="tabpanel"
                            aria-labelledby="list-dressers-list">
                            <div
                                id="carouselExampleIndicators2"
                                className="carousel slide mx-auto border rounded"
                                style={{
                                maxWidth: "520px"
                            }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a
                                            href="https://www.ikea.com/us/en/p/hemnes-8-drawer-dresser-dark-gray-stained-60381737/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-dark-gray-stained__0520151_pe642029_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."/></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/malm-6-drawer-dresser-white-30360468/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-white__0484884_pe621348_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/tarva-6-drawer-chest-pine-80360705/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/tarva-6-drawer-chest-pine__0496978_pe628891_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators2"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators2"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="list-bookcases"
                            role="tabpanel"
                            aria-labelledby="list-bookcases-list">
                            <div
                                id="carouselExampleIndicators3"
                                className="carousel slide mx-auto border rounded"
                                style={{
                                maxWidth: "520px"
                            }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a
                                            href="https://www.ikea.com/us/en/p/hemnes-bookcase-black-brown-s19231152/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/hemnes-bookcase-white-stain__0703888_pe724910_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."/></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/billy-bookcase-white-00263850/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/billy-bookcase-white__1051924_pe845813_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/kallax-shelf-unit-with-4-inserts-high-gloss-white-s89278301/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-4-inserts-white__1102291_pe866900_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators3"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators3"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="list-desks"
                            role="tabpanel"
                            aria-labelledby="list-desks-list">
                            <div
                                id="carouselExampleIndicators4"
                                className="carousel slide mx-auto border rounded"
                                style={{
                                maxWidth: "520px"
                            }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a
                                            href="https://www.ikea.com/us/en/p/lagkapten-alex-desk-white-gray-turquoise-s09431986/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-gray-turquoise__1022434_pe832718_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."/></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/malm-desk-white-60214159/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/malm-desk-white__0735975_pe740309_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/></a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/micke-corner-workstation-white-50250713/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/micke-corner-workstation-white__0921924_pe788003_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/></a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators4"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators4"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="list-wardrobes"
                            role="tabpanel"
                            aria-labelledby="list-wardrobes-list">
                            <div
                                id="carouselExampleIndicators5"
                                className="carousel slide mx-auto border rounded"
                                style={{
                                maxWidth: "520px"
                            }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a
                                            href="https://www.ikea.com/us/en/p/pax-wardrobe-combination-white-s29478181/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/pax-wardrobe-combination-white__1103735_pe867369_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/smagoera-wardrobe-white-10460888/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/smagoera-wardrobe-white__0774692_pe756737_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/aurdal-wardrobe-combination-white-s19331528/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/aurdal-wardrobe-combination-white__1237285_pe917896_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators5"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators5"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="list-tables"
                            role="tabpanel"
                            aria-labelledby="list-tables-list">
                            <div
                                id="carouselExampleIndicators6"
                                className="carousel slide mx-auto border rounded"
                                style={{
                                maxWidth: "520px"
                            }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a
                                            href="https://www.ikea.com/us/en/p/tranebo-dining-table-black-80492942/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/tranebo-dining-table-black__0939083_pe794391_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/laneberg-extendable-table-brown-60447776/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/laneberg-extendable-table-brown__0722956_pe733788_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                    {/* <div className="carousel-item">
                            <a href="https://www.ikea.com/us/en/p/aurdal-wardrobe-combination-white-s19331528/" target="_blank">
                            <img src="https://www.ikea.com/us/en/images/products/lack-side-table-white__1063542_ph181543_s5.jpg" className="d-block w-100" alt="..." loading="lazy" />
                            </a>
                            </div> */}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators6"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators6"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="list-sofas"
                            role="tabpanel"
                            aria-labelledby="list-sofas-list">
                            <div
                                id="carouselExampleIndicators7"
                                className="carousel slide mx-auto border rounded"
                                style={{
                                maxWidth: "520px"
                            }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a
                                            href="https://www.ikea.com/us/en/p/klippan-2-seat-sofa-vissle-grey-s49010615/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/klippan-loveseat-vissle-gray__0239990_pe379591_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-hyllie-beige-s59297565/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/pvid/0743855_fe001003.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/balkarp-sleeper-sofa-vissle-gray-50307936/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/balkarp-sleeper-sofa-vissle-gray__0366179_pe548633_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators7"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators7"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="list-entertainment-centers"
                            role="tabpanel"
                            aria-labelledby="list-entertainment-centers-list">
                            <div
                                id="carouselExampleIndicators8"
                                className="carousel slide mx-auto border rounded"
                                style={{
                                maxWidth: "520px"
                            }}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a
                                            href="https://www.ikea.com/us/en/p/brimnes-tv-unit-black-70409873/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0851278_pe725293_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/besta-tv-unit-with-doors-and-drawers-white-lappviken-stubbarp-white-s39297514/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-and-drawers-white-lappviken-stubbarp-white__0995042_pe821683_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a
                                            href="https://www.ikea.com/us/en/p/havsta-tv-storage-combination-white-s39386181/"
                                            target="_blank">
                                            <img
                                                src="https://www.ikea.com/us/en/images/products/havsta-tv-storage-combination-white__0914303_pe783918_s5.jpg"
                                                className="d-block w-100"
                                                alt="..."
                                                loading="lazy"/>
                                        </a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators8"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators8"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}