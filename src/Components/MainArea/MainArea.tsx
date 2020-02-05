import React, { Fragment } from 'react'
import { useStore } from '../../Stores/storeContext';
import { action } from 'mobx';

const MainArea: React.FC = () => {
    const STORE = useStore();

    return (
        <Fragment>
            <button onClick={action(STORE.SetIsLogin)}>Click Me</button>
        </Fragment >
    )

}
export default MainArea;