import { useState } from 'react';
const Toggle = (props) => {

    const defaulttheme = 'light';

    const [ theme, setNewTheme ] = useState( defaulttheme );

    const themeChanger = () => {

        if ( theme === 'light' ) {
            setNewTheme( 'dark' );
        } else {
            setNewTheme( 'light' );
        }
    }

    props.onChange( theme );

    return (
        <div className={`title ${ theme }` }>
             <h1>
                Overreacted
            </h1>
            <button className='button' onClick={themeChanger}>Toggle</button>
        </div>
    )
};

export default Toggle;