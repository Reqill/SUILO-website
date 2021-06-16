import React, { useState, useEffect } from "react";
import Loader from 'react-loader-spinner'
import BidCard from "../components/BidCard";
import { fetchJSON } from "../FetchingData";
import FilterComponent from "../components/FilterComponent";
import Footer from "../components/Footer";
import AddBid from "../components/AddBid";

export default function AuctionPage() {
    const [filter, setFilter] = useState([])
    const [loaded, setLoaded] = useState(false);
    const [allBids, setAllBids] = useState(null);
    const [visibleBids, setVisibleBids] = useState(null);

    const fetchBids = () => {
        fetchJSON("https://api.jsonbin.io/b/60ca2f468ea8ec25bd0e4f89/latest").then((res) => {
            setAllBids(res);
            setLoaded(true);
        })
    }

    const generateBids = (filtr) => {
        return allBids.map((el, i) => <BidCard key={el.id} elementData={el} idx={i} filter={filtr} bids={allBids} />)
    }

    const changeFilter = (label, action) => {
        let foo = filter;
        if (action === "RESET") {
            foo = [];
        }
        else if (action === "ON") {
            foo.push(label)
        }
        else {
            for (let i = 0; i < foo.length; i++) {
                if (foo[i] === label) {
                    foo.splice(i, 1)
                }
            }
        }
        setFilter(foo)
        setVisibleBids(generateBids(foo))
    }

    useEffect(() => {
        if (allBids === null) {
            fetchBids();
        } else {
            setVisibleBids(generateBids(filter))
        }
    }, [filter, allBids])

    if (loaded) {
        return (
            <div className="auction-page">
                <div className="control-row">
                    <div className="sort">
                        <FilterComponent label="matematyka" action={changeFilter} />
                        <FilterComponent label="chemia" action={changeFilter} />
                        <FilterComponent label="informatyka" action={changeFilter} />
                        <FilterComponent label="biologia" action={changeFilter} />
                        <FilterComponent label="fizyka" action={changeFilter} />
                        <FilterComponent label="geografia" action={changeFilter} />
                        <FilterComponent label="historia" action={changeFilter} />
                        <FilterComponent label="angielski" action={changeFilter} />
                        <FilterComponent label="francuski" action={changeFilter} />
                        <FilterComponent label="niemiecki" action={changeFilter} />
                        <FilterComponent label="hiszpański" action={changeFilter} />
                        <FilterComponent label="polski" action={changeFilter} />
                        <FilterComponent label="inne" action={changeFilter} />
                    </div>
                    <div className="add-bid">
                        <AddBid bids={allBids} />
                    </div>
                </div>
                <div className="bids">
                    {visibleBids}
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%", transform: "translateY(30px)" }}>
                    <p
                        style={{
                            fontFamily: "poppins",
                            color: "grey",
                            fontSize: "20px",
                            fontWeight: "500",
                            letterSpacing: "0.03em",
                            opacity: ".7"
                        }}
                    >
                        To wszystko...
                    </p>
                </div>
                {/* <div style={{ marginBottom: "-70px" }}>
                    <Footer bottom={true} />
                </div> */}

            </div>
        );
    } else {
        return (<div className="loader-position">
            <div className="loader-absolute">
                <Loader type="Bars" color="#f58f0b" height={50} width={50} />
            </div>
            <Footer bottom={false} />
        </div>);
    }

}
