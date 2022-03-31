import { NavLink } from "solid-app-router";

export const Layout = ({ children }) => {
  return (
    <div>
      <nav class="flex gap-2 mb-2">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/movies">Movies</NavLink>
        <NavLink href="/tv">TV</NavLink>
      </nav>
      <div>{children}</div>
    </div>
  );
};
