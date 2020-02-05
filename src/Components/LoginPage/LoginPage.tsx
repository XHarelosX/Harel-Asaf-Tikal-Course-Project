import React, { Fragment } from 'react'
import { useStore } from '../../Stores/storeContext';
import { observer } from 'mobx-react-lite';


const LoginPage: React.FC = observer(() => {

    const STORE = useStore();

    const Form = <div> <span>Username: </span><input type="text" /> <span>Password: </span><input type="text" /> </div>

    return (
        <Fragment>
            {STORE.IsLogin ? Form : null}
        </Fragment>
    )

})

export default LoginPage
