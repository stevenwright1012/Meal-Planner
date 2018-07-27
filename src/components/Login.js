import React from 'react';

export default  function Login(){
    const {REACT_APP_LOGIN} = process.env
    
    return (
        <div className='login'>
            <h1>Welcome to <u>Meal Plan it!</u></h1>
            <h2>The best way to get <u>Plan</u> meals</h2>
            <h3>To get started, click or tap on the&nbsp;
                <u>
                    <a href={REACT_APP_LOGIN}>
                        Meal Plan it 
                    </a>
                </u>
                &nbsp;logo   
             </h3>
        </div>
    )
}