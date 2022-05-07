import Link from "next/link";

const MegaMenuSubItem = ({title, items}) => {
    return (
        <div>
            <h3 className="uppercase font-bold mb-3">{title}</h3>
            <nav>
                <ul className="space-y-5">
                    {items.map((item, i) => <li key={i}>
                        <Link href={item.path}><a>{item.name}</a></Link>
                    </li>)}
                </ul>
            </nav>
        </div>
    )
}

export default MegaMenuSubItem;