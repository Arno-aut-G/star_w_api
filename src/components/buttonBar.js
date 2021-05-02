import { useHistory } from 'react-router-dom'

const ButtonBar = ({ categories, setCategory }) => {
    let history = useHistory()

    const handleClick = (e) => {
        setCategory(e.target.value)
        history.push(`/${e.target.value}`)
        console.log(history)
    }

    return (
        <>
            {
                categories.map(cat =>
                    <button key={cat} onClick={handleClick} value={cat}>{cat}</button>)
            }
        </>
    )
}

export default ButtonBar