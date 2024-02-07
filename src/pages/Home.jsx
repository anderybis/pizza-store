import React, { useEffect, useState } from "react"

import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

import { SearchContext } from "../App"
import BasicPagination from "../components/BasicPagination/BasicPagination"
import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton"
import Sort from "../components/Sort"
import EmptyCart from "../pages/EmptyCart"
import { setActiveCategory } from "../redux/slices/filterSlice"

export default function Home() {
	const dispatch = useDispatch()
	const activeCategory = useSelector(state => state.filter.categoryId)
	const sortBy = useSelector(state => state.filter.sort.sortProperty)

	const onClickCategory = id => {
		dispatch(setActiveCategory(id))
	}

	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const [page, setPage] = useState(1)
	const handleChange = (event, value) => {
		setPage(value)
	}
	const category = activeCategory > 0 ? activeCategory : ""
	const { searchValue } = React.useContext(SearchContext)

	const skeletons = [...new Array(8)].map((_, index) => (
		<PizzaSkeleton key={index} />
	))
	const pizzas = items.map(item => <PizzaBlock {...item} key={item.id} />)
	const havePizza = pizzas.length

	useEffect(() => {
		setIsLoading(true)
		axios
			.get(
				`https://65a6835b74cf4207b4f03f6d.mockapi.io/Items?page=${page}&limit=4&category=${category}&sortBy=${sortBy}&title=${searchValue}&order=desc`
			)
			.then(response => {
				setItems(response.data)
				setIsLoading(false)
			})
			.catch(error => {
				if (error.response.status === 404) {
					setItems([])
				}
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [category, sortBy, searchValue, page])

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={activeCategory} onClickCategory={onClickCategory} />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className={havePizza && "content__items"}>
				{isLoading ? skeletons : havePizza ? pizzas : <EmptyCart />}
			</div>
			<BasicPagination currentPage={page} setCurrentPage={handleChange} />
		</div>
	)
}
