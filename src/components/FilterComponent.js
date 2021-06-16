import React, { useState, useEffect } from 'react'

export default function FilterComponent({ label, action }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            return action(label, "ON")
        } else {
            return action(label, "OFF")
        }
    }, [active])

    return (
        <button onClick={() => setActive(!active)} style={{ backgroundColor: active ? "#cccccc" : "#e3e3e3" }} className="filter-btn">
            <p>
                {label}
            </p>
        </button>
    );
}