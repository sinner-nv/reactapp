import { React } from 'react'
import cl from './SelfSelect.module.css';
import uniqid from 'uniqid'

function SelfSelect({ defaultValue, values, onChange, value }) {

    return (
        <div className={cl.inp}>
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option hidden defaultValue='selected'>{defaultValue}</option>
                {Object.entries(values).map(item => <option key={uniqid()} value={item[0]}>{item[1]}</option>)}
            </select>
        </div>

    )
}

export default SelfSelect