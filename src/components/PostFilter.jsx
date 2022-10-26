import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = (filter, setFilter) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placholder={'Поиск...'}
			/>
			<MySelect
				value={filter.sort}
				onChange={selectSort => setFilter({...filter, sort: selectSort})}
				defaultValue='Сортировка'
				option={[
					{value: 'title', name: 'По Названию'},
					{value: 'body', name: 'По Описанию'}
				]}
			/>
		</div>
	);
};

export default PostFilter;