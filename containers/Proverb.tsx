import React, {FC, useState, useEffect} from 'react';
import ProverbComponent from '../components/Proverb';
import firebase from '../Config';

type ProverbData = {
    id      : number;
    proverb : string;
};

type ProverbProps = {
    path : string;
    date : Date;
}

const ProverbContainer : FC<ProverbProps> = ({path, date}) => {
    const [datas, setDatas] = useState<ProverbData[]>([]);

    useEffect( () => {
      const getDatas = async () => {
        const collection = firebase.firestore().collection(path);
        const snapShot   = await collection.get();
        const datas : object[] = [];
    
        snapShot.docs.map( doc => {
          datas.push( doc.data() );
        });
        setDatas(datas as ProverbData[]);
      };

      getDatas();  
    }, []);
  
    const start      = new Date('2001/1/1');
    const now        = date;
    const elapseMs   = now.getTime() - start.getTime();
    const elapseDays = Math.floor(elapseMs / (1000*60*60*24));

    let display : string = '';
    if ( 0 !== datas.length )
        display = datas[ elapseDays % datas.length ].proverb; 

    return (
        <ProverbComponent proverb={display} />
    )
}

export default ProverbContainer;