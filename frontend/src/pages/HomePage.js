import ImageAboveCard from "../components/ImageAboveCard";
import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                <ImageAboveCard ID="1"
                                cardHeader="Tesla Model 3"
                                cardDescription="2017 tesla model 3 description lorem ipsum"
                                cardImage="/tesla/Model_3.jpg"/>

                <ImageAboveCard ID="2"
                                cardHeader="Tesla Model Y"
                                cardDescription="2017 tesla model Y description lorem ipsum"
                                cardImage="/tesla/Model_Y.png"/>

                <ImageAboveCard ID="3"
                                cardHeader="Tesla Model S"
                                cardDescription="2017 tesla model S description lorem ipsum"
                                cardImage="/tesla/Model_S.jpg"/>

                <ImageAboveCard ID="4"
                                cardHeader="Volkswagen ID3"
                                cardDescription="2023 Volkswagen ID3"
                                cardImage="/vw/ID3.png"/>

                <ImageAboveCard ID="5"
                                cardHeader="Volkswagen ID4"
                                cardDescription="2023 Volkswagen ID4"
                                cardImage="/vw/ID4.png"/>

                <ImageAboveCard ID="6"
                                cardHeader="Volkswagen ID5"
                                cardDescription="2023 Volkswagen ID5"
                                cardImage="/vw/ID5.png"/>
            </div>
        </div>
    )
}

export default HomePage;
