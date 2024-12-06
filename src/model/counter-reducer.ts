import {SettingValuesType} from "../App";

export const counterReducer = (settingValues: SettingValuesType, action: ActionType): SettingValuesType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE': {
            const {maxValue} = action.payload
            return {...settingValues, maxValue, result: 0, isOnSettings: true}
        }
        case 'CHANGE-START-VALUE': {
            const {startValue} = action.payload
            return {...settingValues, startValue, result: 0, isOnSettings: true}
        }
        case "INCREASE-RESULT":
            let {maxValue, result} = settingValues
            return (
                result < maxValue ? {...settingValues, result: ++result} : settingValues
            )
        case 'APPLY-VALUES': {
            return {...settingValues, result: settingValues.startValue, isOnSettings: false}
        }
        case 'RESET-RESULT': {
            return {...settingValues, result: 0}
        }
        default:
            return settingValues
    }
}

// Action Creators
export const changeMaxValueAC = (maxValue: number) => (
    {type: 'CHANGE-MAX-VALUE', payload: {maxValue}} as const
)

export const changeStartValueAC = (startValue: number) => (
    {type: 'CHANGE-START-VALUE', payload: {startValue}} as const
)

export const increaseResultAC = () => ({type: 'INCREASE-RESULT'} as const)
export const resetResultAC = () => ({type: 'RESET-RESULT'} as const)
export const applyValuesAC = () => ({type: 'APPLY-VALUES'} as const)

// Action Types
type ChangeMaxValueType = ReturnType<typeof changeMaxValueAC>
type ChangeStartValueType = ReturnType<typeof changeStartValueAC>
type IncreaseResultType = ReturnType<typeof increaseResultAC>
type ResetResultType = ReturnType<typeof resetResultAC>
type ApplyValuesType = ReturnType<typeof applyValuesAC>
type ActionType =
    ChangeMaxValueType |
    ChangeStartValueType |
    IncreaseResultType |
    ApplyValuesType |
    ResetResultType