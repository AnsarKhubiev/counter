import "./App.css";
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import {useEffect, useState} from "react";

function App() {

    const getValueFromLS = (value: string, initialValue: number) => {
        const savedValue = localStorage.getItem(`${value}`)
        return savedValue !== null ? JSON.parse(savedValue) : initialValue
    }

    const [maxValue, setMaxValue] = useState(getValueFromLS('maxValue', 1))
    const [startValue, setStartValue] = useState(getValueFromLS('startValue', 2))
    const [isOnSettings, setIsOnSettings] = useState(true)
    const [result, setResult] = useState(0)

    let error = false
    let isCounterBtnDisabled = false;

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [maxValue, startValue]);


    const getMaxValue = (value: number) => {
        setMaxValue(value)
        setIsOnSettings(true)
        setResult(0)
    }
    const getStartValue = (value: number) => {
        setStartValue(value)
        setIsOnSettings(true)
        setResult(0)
    }

    const applyValues = () => {
        setResult(startValue)
        setIsOnSettings(false)
    }

    const increase = () => {if (result < maxValue) setResult((prevState: number) => prevState + 1)}

    const reset = () => setResult(startValue)

    isOnSettings ? (isCounterBtnDisabled = true) : (maxValue === result) && (isCounterBtnDisabled = true)

    if (startValue < 0 || startValue >= maxValue) (error = true)

    return (
        <div className="App">
            <Settings
                getMaxValue={getMaxValue}
                getStartValue={getStartValue}
                applyValues={applyValues}
                maxValue={maxValue}
                startValue={startValue}
                isOnSettings={isOnSettings}
                error={error}
            />
            <Counter
                isOnSettings={isOnSettings}
                error={error}
                increase={increase}
                reset={reset}
                result={result}
                maxValue={maxValue}
                btnDisabled={isCounterBtnDisabled}
            />
        </div>
    );
}

export default App;
