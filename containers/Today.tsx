import React, {FC, useState, Dispatch} from 'react';
import TodayComponent from '../components/Today';

type TodayProps = {
    date : Date;
}

const TodayContainer : FC<TodayProps> = ({date}) => {
    return (
        <TodayComponent year={date.getFullYear()} 
                            month={date.getMonth()+1}
                            date={date.getDate()}
                            day={date.getDay()} />
    )
}

export default TodayContainer;
