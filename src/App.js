import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import EmptyCart from "./pages/EmptyCart"
import Home from "./pages/Home"
import "./scss/app.scss"

export const SearchContext = React.createContext()

export default function App() {
	const [searchValue, setSearchValue] = useState("")
	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<EmptyCart />} />
					</Routes>
				</div>
			</SearchContext.Provider>
		</div>
	)
}
