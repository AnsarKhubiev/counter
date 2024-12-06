import "./App.css";
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import {useReducer} from "react";
import {
    applyValuesAC,
    changeMaxValueAC,
    changeStartValueAC,
    increaseResultAC, resetResultAC,
    counterReducer
} from "./model/counter-reducer";

export type SettingValuesType = {
    maxValue: number
    startValue: number
    result: number
    isOnSettings: boolean
}

function App() {

    const getValueFromLS = (value: string, initialValue: number) => {
        const savedValue = localStorage.getItem(`${value}`)
        return savedValue ? JSON.parse(savedValue) : initialValue
    }

    const [values, dispatchValues] = useReducer(counterReducer, {
        maxValue: getValueFromLS('maxValue', 1),
        startValue: getValueFromLS('startValue', 0),
        result: 0,
        isOnSettings: true
    })

    const getMaxValue = (value: number) => dispatchValues(changeMaxValueAC(value))

    const getStartValue = (value: number) => dispatchValues(changeStartValueAC(value))

    const applyValues = () => {
        dispatchValues(applyValuesAC())
        localStorage.setItem('maxValue', JSON.stringify(values.maxValue))
        localStorage.setItem('startValue', JSON.stringify(values.startValue))
    }

    const increase = () => dispatchValues(increaseResultAC())

    const reset = () => dispatchValues(resetResultAC())

    const isCounterBtnDisabled = () => values.isOnSettings ? true : values.maxValue === values.result

    const isError = () => values.startValue < 0 || values.startValue >= values.maxValue

    return (
        <div className="App">
            <Settings
                getMaxValue={getMaxValue}
                getStartValue={getStartValue}
                applyValues={applyValues}
                maxValue={values.maxValue}
                startValue={values.startValue}
                isOnSettings={values.isOnSettings}
                error={isError}
            />
            <Counter
                isOnSettings={values.isOnSettings}
                error={isError}
                increase={increase}
                reset={reset}
                result={values.result}
                maxValue={values.maxValue}
                btnDisabled={isCounterBtnDisabled}
            />
        </div>
    );
}

export default App;
