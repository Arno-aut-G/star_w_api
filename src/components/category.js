import { Link, useParams } from 'react-router-dom'


const Category = ({ data, cat }) => {
    const { id } = useParams();

    const getUrl = (url) => {
        url = url.split('/')
        url = url[5]

        return url
    }

    console.log(data)

    console.log(getUrl(data[0].url))
    console.log("useParams " + id)


    return (
        <>
            {data && data.filter(e => id ? parseInt(id, 10) === getUrl(e.url) : e)
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