import CategoryItem from "../category-item/category-item.component"

const ListCategories = ({categories}) => {
    // const {categories} = category;
    return (
        <div className='categories-container'>
            {categories.map(( category ) => (
                <CategoryItem key={category.id} category={category} />
        ))}
</div>
    )
}

export default ListCategories