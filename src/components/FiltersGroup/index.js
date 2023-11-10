import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    onChangeSearchInput,
    searchInput,
    enterSearchInput,
    clearFilter,
  } = props

  const onChangeInput = event => {
    onChangeSearchInput(event.target.value)
  }

  const onEntersearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const returnCategory = () => {
    const {categoryOptions} = props
    return categoryOptions.map(each => {
      const {onChangeCategory, category} = props
      const onClickCategory = () => onChangeCategory(each.categoryId)
      const changeCategoryClass =
        category === each.categoryId ? 'change-category-name' : 'category-name'
      return (
        <li
          className="category-list-item"
          key={each.categoryId}
          onClick={onClickCategory}
        >
          <p className={changeCategoryClass}>{each.name}</p>
        </li>
      )
    })
  }

  const returnRating = () => {
    const {ratingsList, onChangeRating, isActiveRatingId} = props
    return ratingsList.map(rating => {
      const onClickRating = () => onChangeRating(rating.ratingId)
      const changeRatingClass =
        isActiveRatingId === rating.ratingId
          ? 'change-rating-para'
          : 'rating-para'
      return (
        <li className="rating-list-item" key={rating.ratingId}>
          <button
            type="button"
            className="rating-button"
            onClick={onClickRating}
          >
            <img
              src={rating.imageUrl}
              alt={`rating ${rating.ratingId}`}
              className="rating-img"
            />
            <p className={changeRatingClass}>& up</p>
          </button>
        </li>
      )
    })
  }

  return (
    <div className="filters-group-container">
      <div className="search-card">
        <input
          type="search"
          placeholder="Search"
          className="search"
          value={searchInput}
          onChange={onChangeInput}
          onKeyDown={onEntersearchInput}
        />
        <BsSearch />
      </div>

      <ul className="category-list-container">
        <h1 className="category-heading">Category</h1>
        {returnCategory()}
      </ul>

      <ul className="rating-list-container">
        <h1 className="rating-heading">Rating</h1>
        {returnRating()}
      </ul>

      <button type="button" className="clear-button" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
