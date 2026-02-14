import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Ingredients = {
    flour: { label: "קמח לבן", gramsPerCup: 120, type: "weight" },
    sugar: { label: "סוכר לבן", gramsPerCup: 200, type: "weight" },
    brownSugar: { label: "סוכר חום", gramsPerCup: 220, type: "weight" },
    butter: { label: "חמאה", gramsPerCup: 227, type: "weight" },
    oil: { label: "שמן", gramsPerCup: 220, type: "volume" },
    water: { label: "מים / חלב", gramsPerCup: 240, type: "volume" },
};

const Units = {
    cup: { label: "כוס", ml: 240, placeholder: "כוסות" },
    tbsp: { label: "כף", ml: 15, placeholder: "כפות" },
    tsp: { label: "כפית", ml: 5, placeholder: "כפיות" },
};

function formatCups(value) {
    const Fractions = [
        { v: 0.25, s: "¼" },
        { v: 0.33, s: "⅓" },
        { v: 0.5, s: "½" },
        { v: 0.66, s: "⅔" },
        { v: 0.75, s: "¾" },
    ];

    for (const f of Fractions) {
        if (Math.abs(value - f.v) < 0.05) {
            return f.s;
        }
    }

    return value.toFixed(2);
}



const Calculator = () => {

    const [ingredient, setIngredient] = useState(
        localStorage.getItem("ingredient") || "flour"
    );
    const [mode, setMode] = useState("grams");
    const [unit, setUnit] = useState("cup");
    const [value, setValue] = useState("");

    useEffect(() => {
        localStorage.setItem("ingredient", ingredient);
    }, [ingredient]);

    const gramsPerCup = Ingredients[ingredient].gramsPerCup;
    const mlPerUnit = Units[unit].ml;
    let result = "";
    if (value !== "") {
        const item = Ingredients[ingredient];
        const unitMl = Units[unit].ml;

        if (mode === "grams") {
            if (item.type === "weight") {
                const gramsPerUnit = item.gramsPerCup * (unitMl / 240);
                result = formatCups(value / gramsPerUnit);
            } else {
                result = formatCups(value / unitMl);
            }
        } else {
            if (item.type === "weight") {
                const gramsPerUnit = item.gramsPerCup * (unitMl / 240);
                result = Math.round(value * gramsPerUnit);
            } else {
                result = Math.round(value * unitMl);
            }
        }
    }

    const getPlaceholder = () => {
        const item = Ingredients[ingredient];

        if (mode === "grams") {
            // מצב: גרמים → נפח
            if (item.type === "weight") {
                return `כמה גרם ${item.label} תרצו להמיר?`;
            } else {
                return `כמה מ"ל ${item.label} תרצו להמיר?`;
            }
        } else {
            // מצב: נפח → גרמים/מ"ל
            return `כמה ${Units[unit].placeholder} ${item.label} תרצו להמיר?`;
        }
    };


    return (
        <div
            dir="rtl"
            className="mx-auto max-w-md rounded-3xl border bg-white p-4 shadow-sm"
        >
            <h3 className="mb-4 text-center text-lg font-semibold">
                מחשבון אפייה
            </h3>

            <div className="space-y-3">
                {/* מצרך */}
                <div className='relative w-full'>
                    <select
                        className="w-full rounded-xl border p-3 pl-10 text-base appearance-none cursor-pointer"
                        value={ingredient}
                        onChange={(e) => {
                            setIngredient(e.target.value);
                            setValue("");
                        }}
                    >
                        {Object.entries(Ingredients).map(([k, v]) => (
                            <option key={k} value={k}>
                                {v.label}
                            </option>
                        ))}
                    </select>
                    <MdOutlineKeyboardArrowDown className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none' />
                </div>

                {/* מצב */}
                <div className="grid grid-cols-2 gap-2">
                    <button
                        onClick={() => {
                            setMode("grams");
                            setValue("");
                        }}
                        className={`rounded-xl p-3 text-sm cursor-pointer ${mode === "grams"
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100"
                            }`}
                    >
                        גרמים ⬅️ נפח
                    </button>
                    <button
                        onClick={() => {
                            setMode("cups");
                            setValue("");
                        }}
                        className={`rounded-xl p-3 text-sm cursor-pointer ${mode === "cups"
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100"
                            }`}
                    >
                        גרמים ➡️ נפח
                    </button>
                </div>

                {/* יחידה */}
                <div className='relative w-full'>
                    <select
                        className="w-full rounded-xl border p-3 pl-10 text-base appearance-none cursor-pointer"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                    >
                        {Object.entries(Units).map(([k, v]) => (
                            <option key={k} value={k}>
                                {v.label}
                            </option>
                        ))}
                    </select>
                    <MdOutlineKeyboardArrowDown className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none' />
                </div>

                {/* קלט */}
                <input
                    type="number"
                    inputMode="decimal"
                    className="w-full rounded-xl border p-3 text-base"
                    placeholder={getPlaceholder()}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                {/* תוצאה */}
                {value && (
                    <div className="rounded-xl bg-gray-50 p-4 text-center">
                        <div className="text-sm text-gray-500">תוצאה</div>
                        <div className="text-2xl font-bold">
                            {result}{" "}
                            {mode === "grams"
                                ? Units[unit].placeholder // כוס/כף/כפית
                            : Ingredients[ingredient].type === "weight"
                            ? "גרם"
                            : "מ\"ל"
    }
                        </div>


                    </div>
                )}

                <p className="pt-2 text-center text-xs text-gray-500">
                    * המרות משוערות • 1 מ"ל ≈ 1 גרם
                </p>
            </div>
        </div>
    )
}

export default Calculator