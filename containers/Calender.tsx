import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodayActionType } from '../actions/Today';
import { TodayState } from '../reducer/TodayReducer';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import CalenderComponent from '../components/Calender';

export type CalenderRouteProps = RouteProp<RootStackParamList,'Calender'>;

const CalenderContainer: FC = () => {
  const dispatch = useDispatch();
  const date = useSelector((state: TodayState) => new Date(state.date));
  const {path} = useRoute<CalenderRouteProps>().params;
  const [singleTap, setSingleTap] = useState(true);
  const [timerId, setTimerId] = useState(0);

  const touch = (): void => {
      if ( singleTap )
      {
        setTimerId( window.setTimeout(()=>{
          //Single Tap
          setSingleTap(true);
          dispatch({ type: TodayActionType.ADD });
        }, 200) );
        setSingleTap(false);
      }
      else{
        //Double Tap
        clearTimeout(timerId);
        setSingleTap(true);
        dispatch({ type: TodayActionType.DEL });
      }
  }

  return (
    <CalenderComponent onTouch={touch} path={path} date={date}/>
  );
}

export default CalenderContainer;