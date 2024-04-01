export const Layout = ({children}) => {
    return (
        <div>
            <header>Header</header>
            <div>{children}</div>
            <footer>Footer</footer>
        </div>
    )
}