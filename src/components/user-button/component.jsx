import { Button } from "../button/component";
import { useCurrentUser } from "../contexts/user"

export const UserButton = () => {
    const {currentUser, login, logout} = useCurrentUser();

    const isAutorized = !!currentUser;

    return (
        <div>
            {!!currentUser && <span>{currentUser}</span>}
            <Button onClick={() => (isAutorized ? logout() : login("Solor"))}>
                {isAutorized ? "logout" : "login"}
            </Button>
        </div>
    );
}