import {TodayActionType, TodayAction} from '../actions/Today';

export type TodayState = {
    date : Date;
}

const initialToday : TodayState = { date :new Date()};

const reducer = (today : TodayState = initialToday, action : TodayAction) : TodayState =>{
    switch (action.type){
        case TodayActionType.ADD:
            let date : Date = today.date;
            date.setDate(date.getDate()+1);
            return {date: date};
        default:
            return today;
    }
}

export default reducer;