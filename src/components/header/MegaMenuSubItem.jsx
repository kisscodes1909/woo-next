const MegaMenuSubItem = ({title, items}) => {
    return (
        <div>
            <h3 className="uppercase font-bold mb-3">{title}</h3>
            <nav>
                <ul className="space-y-5">
                    {items.map((item, i) => <li key={i}>{item.name}</li>)}
                </ul>
            </nav>
        </div>
    )
}

export default MegaMenuSubItem;