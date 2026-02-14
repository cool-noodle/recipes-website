import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Ingredients = {
    flour: { label: "קמח לבן", gramsPerCup: 120 },
    sugar: { label: "סוכר לבן", gramsPerCup: 200 },
    brownSugar: { label: "סוכר חום", gramsPerCup: 220 },
    butter: { label: "חמאה", gramsPerCup: 227 },
    oil: { label: "שמן", gramsPerCup: 220 },
    water: { label: "מים / חלב", gramsPerCup: 240 },
};

const Units = {
    cup: { label: "כוס", ml: 240 },
    tbsp: { label: "כף", ml: 15 },
    tsp: { label: "כפית", ml: 5 },
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

    const result =
        value === ""
            ? ""
            : mode === "grams"
                ? formatCups(value / gramsPerCup / (mlPerUnit / 240))
                : Math.round(value * gramsPerCup * (mlPerUnit / 240));


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
                    placeholder={mode === "grams" ? "גרמים" : "כמות"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                {/* תוצאה */}
                {value && (
                    <div className="rounded-xl bg-gray-50 p-4 text-center">
                        <div className="text-sm text-gray-500">תוצאה</div>
                        <div className="text-2xl font-bold">
                            {result} {mode === "grams" ? Units[unit].label : "גרם"}
                        </div>
                    </div>
                )}

                <p className="pt-2 text-center text-xs text-gray-500">
                    * המרות משוערות • 1 מ"ל = 1 גרם
                </p>
            </div>
        </div>
    )
}

export default Calculator