import { Link, useParams } from 'react-router-dom'


const Category = ({ data, cat }) => {
    const { id } = useParams();

    const getUrl = (url) => {
        url = url.split('/')
        url = url[5]
        console.log(typeof url)
        return url
    }

    console.log(data)


    console.log("useParams " + id)
    console.log(typeof id)


    return (
        <>
            {data && data.filter(e => id ? id === getUrl(e.url) : e)
                .map((e, i) => {
                    return !id ?
                        (<div>
                            <Link to={`/${cat}/${getUrl(e.url)}`} key={i}>{e.name || e.title}</Link>
                        </div>)
                        :
                        (
                            <h1>{e.url}</h1>
                        )
                })}
        </>
    )
}

export default Category