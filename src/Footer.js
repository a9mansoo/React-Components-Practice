


function Footer({items}){

    return(
        <footer className="footer">
            <h1>{items.length === 0 ? "No more items left!": items.length === 1? `${items.length} item left on the list`: `${items.length} items left on the list`}</h1>
        </footer>
    )
}

export default Footer;