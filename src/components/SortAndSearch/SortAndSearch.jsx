import { React } from 'react'
import SelfSelect from '../UI/SelfSelect/SelfSelect';
import SelfInput from '../UI/SelfInput/SelfInput';
import cl from './SortAndSearch.module.css';


function SortAndSearch({value, setFilter}) {

    return (
        <div className={cl.beforeMain}>
            <div className={cl.mainForm}>
                <SelfSelect
                    className={cl.oneFlex}
                    value={value.sort}
                    onChange={(e) => setFilter({...value, sort: e})}
                    defaultValue='сортировка по'
                    values={{ title: 'по заголовку', body: 'по описанию' }}
                />
                <div className={cl.twoFlex}>
                    <SelfInput
                        value={value.query}
                        onChange={e => setFilter({...value, query: e.target.value})}
                        placeholder='поиск по названию...'
                    />
                </div>
            </div>
        </div>
    )
}

export default SortAndSearch