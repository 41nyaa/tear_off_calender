import React from 'react';
import {createStore} from 'redux';
import renderer from 'react-test-renderer';
import CalenderContainer, {CalenderRouteProps} from '../containers/Calender';
import TodayReducer, { TodayState } from '../reducer/TodayReducer';
import { Provider } from 'react-redux';
import { RouteProp } from '@react-navigation/native';

const store = createStore(TodayReducer);

function mockUseSelector(fn: Function){
    return new Date();
};
function mockUseDispatch(){};

jest.mock('react-redux', () => {
    return {
        useSelector: jest.fn(mockUseSelector),
        useDispatch: jest.fn(mockUseDispatch)
    };
});

function mockUseRoute<T>(){
    return {params: {path: 'test'}};
}

jest.mock('@react-navigation/native', () => {
    return {
        useRoute: jest.fn(mockUseRoute)
    };
})

describe('<CalenderContainer />', ()=>{
    it('single-tap', () => {
        const container = renderer.create(
                <CalenderContainer />
        );
        console.log(container.toJSON());
    })

    it('double-tap', () => {

    })

    it('render', () => {

    })
})