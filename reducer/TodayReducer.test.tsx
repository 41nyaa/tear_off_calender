import TodayReducer from './TodayReducer';
import {TodayActionType, TodayAction} from '../actions/Today';

describe('TodayReducer', ()=>{
    it('INIT', ()=>{
        const correct = new Date();
        const target  = TodayReducer(undefined, {type: 'UNDEFINED' as TodayActionType});
        expect(target.date.getFullYear()).toEqual(correct.getFullYear());
        expect(target.date.getMonth()).toEqual(correct.getMonth());
        expect(target.date.getDate()).toEqual(correct.getDate());
        expect(target.date.getHours()).toEqual(correct.getHours());
        expect(target.date.getMinutes()).toEqual(correct.getMinutes());
    })

    it('ADD', ()=>{
        const correct = new Date(2020, 1, 2);
        const target  = TodayReducer({date: new Date(2020, 1, 1)}, {type: TodayActionType.ADD});
        expect(target.date.getFullYear()).toEqual(correct.getFullYear());
        expect(target.date.getMonth()).toEqual(correct.getMonth());
        expect(target.date.getDate()).toEqual(correct.getDate());
        expect(target.date.getHours()).toEqual(correct.getHours());
        expect(target.date.getMinutes()).toEqual(correct.getMinutes());
    })

    it('DEL', ()=>{
        const correct = new Date(2019, 12, 31);
        const target  = TodayReducer({date: new Date(2020, 1, 1)}, {type: TodayActionType.DEL});
        expect(target.date.getFullYear()).toEqual(correct.getFullYear());
        expect(target.date.getMonth()).toEqual(correct.getMonth());
        expect(target.date.getDate()).toEqual(correct.getDate());
        expect(target.date.getHours()).toEqual(correct.getHours());
        expect(target.date.getMinutes()).toEqual(correct.getMinutes());
    })

})