export default function Categories({ value, onClickCategory }) {
	const categoriesPizza = [
		"Все",
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Закрытые",
	];

	return (
		<div className="categories">
			<ul>
				{categoriesPizza.map((category, index) => (
					<li
						key={index}
						onClick={() => onClickCategory(index)}
						className={value === index ? "active" : ""}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}
