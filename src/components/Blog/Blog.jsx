import React from "react";
import "./Blog.css"; // Add this file for styling

const RightSection = () => {
    return (
        <div className="right-section">
            <div className="overflow-blog">
                <h3>The Overflow Blog</h3>
                <p><i class="fa-solid fa-pen"></i>&nbsp;&nbsp;&nbsp; The unexpected benefits of mentoring others</p>
                <p><i class="fa-solid fa-pen"></i>&nbsp;&nbsp;&nbsp; Building for AR with Niantic Labs’ SDK</p>
            </div>
            <div className="featured-meta">
                <h3>Featured & Meta</h3>
                <p><i class="fa-brands fa-stack-overflow"></i>&nbsp;&nbsp;&nbsp;Beta release of Collectives™ on Stack Overflow</p>
            </div>
            <div className="hot-meta">
                <h3>Hot Meta Post</h3>
                <p><i class="fa-solid fa-8"></i>&nbsp;&nbsp;Tags appear to be redundant</p>
                <p><i class="fa-solid fa-2"></i><i class="fa-solid fa-7"></i> &nbsp;&nbsp;How to handle dupes where A is closed</p>
                <p><i class="fa-solid fa-2"></i><i class="fa-solid fa-7"></i> &nbsp;&nbsp;Ambiguous tag [container]</p>
            </div>
            <div>
                <h3 className="custom-filter-h3">Custom Filters</h3>
                <input
                    type="text"
                    placeholder="add custom filters"
                    className="custom-filter"
                />
                {/* <button>Add custom filters</button> */}
            </div>
        </div>
    );
};

export default RightSection;
