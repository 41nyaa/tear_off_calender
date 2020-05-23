import {TodayActionType, TodayAction} from '../actions/Today';

export type TodayState = {
    date : Date;
}

const initialToday : TodayState = { date :new Date()};

const reducer = (today : TodayState = initialToday, action : TodayAction) : TodayState =>{
    let date : Date = today.date;
    switch (action.type){
        case TodayActionType.ADD:
            date.setDate(date.getDate()+1);
            return {date: date};
        case TodayActionType.DEL:
            date.setDate(date.getDate()-1);
            return {date: date};
        default:
            return today;
    }
}

export default reducer;