import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const a = "";

    console.log("asd", a);

    return (
        <>
            <div className="">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
