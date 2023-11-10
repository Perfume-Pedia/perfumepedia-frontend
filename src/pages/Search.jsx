import React, { useState, useEffect } from 'react';
import '../pages/Perfumes.css';
import '../pages/Search.css';

export default function Search() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const size = 10; // 페이지당 아이템 수

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://49.50.162.194:3000/api/search?lastid=${page * size}&size=${size}`);

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
    }, [page, size]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!items.length) return <div>No items found</div>;

    // Pagination logic to show only 3 items per section
    const startIndex = page * size;
    const selectedItems = items.slice(startIndex, startIndex + 3);

    return (
        <div>
            <section className="white">
                <div className="item-container">
                    {selectedItems.map((item, index) => (
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
            <section className="grey">
                <div className="item-container">
                    {selectedItems.map((item, index) => (
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
                {[...Array(Math.ceil(items.length / 3))].map((_, index) => (
                    <button key={index} onClick={() => handlePageChange(index)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
