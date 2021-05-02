import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import NavBar from './components/navBar'
import ButtonBar from './components/buttonBar'
import RandomItems from './components/randomItems'
import Category from './components/category'

const SwapiRouter = (props) => {
    console.log(props)
    return (
        < div className="App" >
            {props.loading ? <h1>Loading...</h1> :
                <>
                    <NavBar />
                    <ButtonBar categories={props.categories} setCategory={props.setCategory} />


                    <Switch>
                        {/* <Route exact path='/' component={RandomItems} /> */}

                        {props.categories.map(cat => <Route exact path={`/${cat}/:id?`} render={() => <Category key={props.data.name} data={props.data} cat={cat} />} />)}



                    </Switch>
                </>}
        </div >
    )
}

export default SwapiRouter