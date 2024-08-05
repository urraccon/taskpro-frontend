import ColumnItem from "../ColumnItem/ColumnItem";

export const FilteredColumns = (props) => {

    const { columns, filter } = props

    const filtredColumn = columns.map(column => ({
        ...column,
        cards: Array.isArray(column.cards) ? column.cards.filter(card => {
            if (filter === 'all') return card;
            return card.label === filter;
        }) : []
    }));


    return (<>{
        filtredColumn.map(el => {
            return <ColumnItem key={el._id} column={el} />;
        })
    }</>)

}