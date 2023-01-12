import {useState, useEffect} from "react";
import Button from "../components/Button";
import useCounter from "../hooks/useCounter";


function CounterPage({initialCount}) {
    const {count, increment} = useCounter(initialCount);

    return <div>
        <h1>Count is {count}</h1>
        <Button onClick={increment}>Add count</Button>
    </div>;
}

export default CounterPage;