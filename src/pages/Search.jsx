// Search.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../pages/Search.css';

export default function Search() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const size = 6;
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const keyword = queryParams.get('keyword') || '';

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://perfume-pedia.site:3000/api/search?lastid=0&size=15&keyword=${encodeURIComponent(keyword)}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setItems(data.data.items);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [location]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!items.length) return <div>No items found</div>;

    const startIndex = page * size;
    const firstSectionItems = items.slice(startIndex, startIndex + 3);
    const secondSectionItems = items.slice(startIndex + 3, startIndex + 6);

    return (
        <div>
            <section className="onesection">
                <div className="item-container">
                    {firstSectionItems.map((item, index) => (
                        <div key={`${item.perfume_name}-${item.brand_name}-${index}`} className="item">
                            <img src={item.image_path} alt={`${item.perfume_name} by ${item.brand_name}`} className="item-image" />
                            <div className="item-info">
                                <h3>{item.perfume_name}</h3>
                                <p>{item.brand_name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="onesection">
                <div className="item-container">
                    {secondSectionItems.map((item, index) => (
                        <div key={`${item.perfume_name}-${item.brand_name}-${index}`} className="item">
                            <img src={item.image_path} alt={`${item.perfume_name} by ${item.brand_name}`} className="item-image" />
                            <div className="item-info">
                                <h3>{item.perfume_name}</h3>
                                <p>{item.brand_name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="pagination">
                {[...Array(Math.ceil(15 / size))].map((_, index) => (
                    <button key={index} onClick={() => setPage(index)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
