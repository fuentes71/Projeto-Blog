export interface NavProps {
    nav: "Home" | "Users";
    to: "/" | "/users";
    children?: React.ReactNode;
}
